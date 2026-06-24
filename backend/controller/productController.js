import {v2 as cloudinary} from 'cloudinary';
import  productModel from '../model/productModel.js'



// function for add product
const addProduct = async (req,res) => {
  try {
    
    //fetching data admin enter
    const {
      name,
      description,
      price,
      category,
      subcategory,
      sizes,
      bestSeller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    

    const images = [image1, image2, image3, image4].filter((items)=> items !== undefined)

    //upload images to cloudinary and get url
    let imagesUrl = await Promise.all(
      images.map(async (items) =>{
        let result = await cloudinary.uploader.upload(items.path,{resource_type:'image'})
        return result.secure_url
      })
    )

    // console.log(name, description, price, category, subcategory, sizes, bestseller,)
    // console.log(imagesUrl)

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subcategory,
      bestSeller: bestSeller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now()
    }

    // console.log(productData)
    
    //saving to the mongoDb
    const newProduct = new productModel(productData);
    await newProduct.save();

     return res.json({success:true, message: "product added"});

  } catch (error) {

    console.log(error);
    res.json({succes:false, message:error.message})

  }
};

//function for the list  of product
const listProduct = async (req,res) => {
  try {
   //getting all produts from mongoDb
    const products = await productModel.find({});
    res.json({success:true, products})

  } catch (error){
     console.log(error)
     res.json({success:false, message: error.message})
  }
};

//function for the removing product
const removeProduct = async (req,res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true, message:"product removed"})
  } catch (error) {
    console.log(error);
    console.log({success:false, message:error.message});
  }
};

//function for single product info
const singleProduct = async (req,res) => {
  try {
    const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.json({success:true, product })
  } catch (error) {
    console.log(error);
    console.log({success: false, message: error.message})
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
