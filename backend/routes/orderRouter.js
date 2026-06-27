import express from 'express'
import {placeOrderCod, placeOrderRazorpay, placeOrderStripe, userOrder, allOrders, updateStatus, verifyRazorpay} from '../controller/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import userAuth from '../middleware/userAuth.js'
import authUser from '../middleware/userAuth.js';

const orderRouter = express.Router();

// admin features
orderRouter.post('/list', adminAuth , allOrders );
orderRouter.post('/status',adminAuth, updateStatus );

// order features
orderRouter.post('/cod', userAuth, placeOrderCod);
orderRouter.post('/stripe', userAuth, placeOrderStripe);
orderRouter.post('/razorpay', userAuth, placeOrderRazorpay);

//user feature
orderRouter.post('/userOrders', userAuth, userOrder);

//verify payment 
// orderRouter.post('/verifyStripe', authUser, verifyStripe)
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter;