import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//function for creating token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking user existence
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user doesnot exit" });
    }

    // comparing password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "invalid credential" });
    }
  } catch (error) {
    console.log(error)
     res.json({ success: false, message: error.message });
  }
};

//route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking user already exit or not
    const exits = await userModel.findOne({ email });
    if (exits) {
      return res.json({ success: "false", message: "user already exits" });
    }

    //validating email and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: "false",
        message: "please enter valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    //creating new user
    const newUser = new userModel({
      name,
      email,
      password: hashedpassword,
    });

    //saving user in mongodb
    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: "true", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//route for adminlogin

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
