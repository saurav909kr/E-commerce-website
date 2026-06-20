import mongoose  from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

    console.log('MongoDb Connected')
  } catch (error) {
    console.log("Error while connecting with mongoDb :", error.message)
  }
}

export default connectDB