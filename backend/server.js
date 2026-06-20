import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import dns from 'dns'
import connectCloudinary from './config/cloudinary.js';

dns.setServers(["1.1.1.1", "8.8.8.8"]);

import 'dotenv/config'
import { connect } from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

//App config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware 

app.use(express.json())
app.use(cors())

// api endpoint 

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/',(req,res)=>{
  res.send("api is working")
})

app.listen(port, ()=> console.log('server started on Port :' + port))


//XGebSkOZMehZWApA

//mongodb+srv://<db_username>:XGebSkOZMehZWApA@cluster2.r94pxn0.mongodb.net/?appName=Cluster2