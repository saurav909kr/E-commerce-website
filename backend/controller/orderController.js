import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";
import razorpay from "razorpay";
// import Stripe from 'stripe'

//global variables
const currency = "inr";
const deliveryCharge = 10;

// gateway initialize

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//verify stripe
// const verifyStripe = async (req,res) => {
//    const {orderId, success, userId} = req.body

//    try {
//      if(success === "true"){
//       await orderModel.findByIdAndUpdate(orderId, {payment:true})
//       await userModel.findByIdAndUpdate(userId, {cartData: {}})
//       res.json({success:true});
//      } else {
//       await orderModel.findByIdAndDelete(orderId)
//       res.json({success:false})
//      }
//    } catch (error) {
//       console.log(error)
//       res.json({success: false, message: error.message})
//    }
// }

// placing the order usinf cod method
const placeOrderCod = async (req, res) => {
  try {
    //get data as frontend placeorder
    const { userId, items, amount, address } = req.body;

    // fill the data whatever required in model
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    // creating new order and save in database
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    //empty the cartData as order is placed
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    //send responce to frontend
    res.json({ success: true, message: "Order placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// placing order using stripe method
const placeOrderStripe = async (req, res) => {
  //  try {
  //    const {userId, items, amount, address } = req.body;
  //    const {origin} = req.headers;
  //     const orderData = { userId, items, amount, address,  paymentMethod : "Stripe", payment: false, date: Date.now()}
  //     const newOrder = new orderModel(orderData)
  //     await newOrder.save()
  //     const line_items = items.map((item)=>({
  //        price_data: {
  //         currency:currency,
  //         product_data: {
  //             name: item.name
  //         },
  //         unit_amount: item.price * 100
  //        },
  //        quantity: item.quantity
  //     }))
  //     line_items.push({
  //       price_data: {
  //         currency:currency,
  //         product_data: {
  //             name: 'Delivery Charge'
  //         },
  //         unit_amount: deliveryCharge * 100
  //        },
  //        quantity: 1
  //     })
  //     const session = await stripe.checkout.sessions.create({
  //       success_url : `${origin}/verify?success=true&orderId=${newOrder._id}`,
  //       cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
  //       line_items,
  //       mode: 'payment'
  //     })
  //     res.json({success:true, url:session.url})
  //  } catch (error) {
  //     console.log(error)
  //     res.json({success: false, message: error.message})
  //  }
};

// placing order using razorpay
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const options = {
      amount: amount * 100,
      currency: currency.toUpperCase(),
      receipt: `receipt_${Date.now()}`,
      notes: {
      userId,
      items: JSON.stringify(items),
      address: JSON.stringify(address),
      amount: amount.toString(),
  },
    };

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    // console.log(orderInfo)

    if(orderInfo.status !== "paid"){
      return res.json({
        success:false,
        message: "Payment Failed"
      });
    }
    
    const newOrder = new orderModel({
      userId: orderInfo.notes.userId,
      items: JSON.parse(orderInfo.notes.items),
      amount: Number(orderInfo.notes.amount),
      address: JSON.parse(orderInfo.notes.address),
      paymentMethod: "Razorpay",
      payment: true,
      date: Date.now()
    });
    
    await newOrder.save()
    
    
    await userModel.findByIdAndUpdate(
      orderInfo.notes.userId,
      { cartData: {} }
    );
    
     res.json({
      success: true,
      message: "Payment Successful"
    });
     
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// all orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({
      $or: [{ paymentMethod: "COD" }, { payment: true }],
    });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// user order data
const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({
      userId,
      $or: [{ paymentMethod: "COD" }, { payment: true }],
    });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update Order status
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "status updated" });
  } catch (error) {
    console.log(Error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrderCod,
  verifyRazorpay,
  placeOrderRazorpay,
  placeOrderStripe,
  userOrder,
  allOrders,
  updateStatus,
};
