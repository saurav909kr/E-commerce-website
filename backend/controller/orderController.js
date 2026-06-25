import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";


// placing the order usinf cod method
const placeOrderCod = async (req , res ) => {

  try {
    //get data as frontend placeorder
    const {userId, items, amount, address } = req.body;
    
    // fill the data whatever required in model
    const orderData = { userId, items, amount, address,  paymentMethod : "COD", payment: false, date: Date.now()}

    // creating new order and save in database
    const newOrder = new orderModel(orderData)
    await newOrder.save()
  
    //empty the cartData as order is placed
    await userModel.findByIdAndUpdate(userId, {cartData:{}})
  
    //send responce to frontend
    res.json({success: true, message: "Order placed"})

  } catch (error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

// placing order using stripe method
const placeOrderStripe = async (req , res ) => {

}

// placing order using razorpay
const placeOrderRazorpay = async (req , res ) => {

}

// all orders data for admin panel
const allOrders = async (req , res ) => {
   try {
    const orders = await orderModel.find({})
    res.json({success: true, orders})
   } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
   }
}

// user order data 
const userOrder = async (req , res ) => {
    try {

      const {userId} = req.body
      const orders = await orderModel.find({userId})
      res.json({success:true, orders})

    } catch (error) {
      console.log(error)
      res.json({success:false, message:error.message})
    }
}

// update Order status
const updateStatus = async (req , res) => {
  try {
    const {orderId , status} = req.body
    
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true, message:"status updated"})

  } catch (error) {
    console.log(Error)
    res.json({success:false, message: error.message})
  }
}

export {placeOrderCod, placeOrderRazorpay, placeOrderStripe, userOrder, allOrders, updateStatus}

