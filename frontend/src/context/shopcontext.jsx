import { createContext, use, useEffect, useState } from "react";
import {products} from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();

const  ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search , setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  const [cartItem, setCartItem] = useState({})
  const navigate = useNavigate();
  
  

  const addToCart = ({itemId , size}) => {

    if(!size){
      toast.error("selet the size");
      return;
    }
     
    let cartData = structuredClone(cartItem);
    
    if(cartData[itemId]){
      if(cartData[itemId][size]){
           cartData[itemId][size] += 1
      } else {
        cartData[itemId][size] = 1
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData)
  }

  const totalCartItem = () =>{
    let totalcount = 0;
    for(const item in cartItem){
      for(const items in cartItem[item]){
        try {
          if(cartItem[item][items]>0){
            totalcount += cartItem[item][items]
          }
        } catch (error) {
          
        }
      }
    }
    return totalcount;
  }

  const updateQuantity = async(itemId, size, quantity) =>{
     let cartData = structuredClone(cartItem);
     cartData[itemId][size] = quantity;
     setCartItem(cartData);
  }

  const getCartAmount = () =>{
    let totalAmount = 0;
    for(const items in cartItem){
      let itemInfo = products.find((product)=> product._id === items);
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item] > 0){
            totalAmount += itemInfo.price * cartItem[items][item]
          }
        } catch (error) {
          
        }
      }
    }

    return totalAmount;
  }

  
  const value = {
      products, currency, delivery_fee,
      search,setSearch, showSearch, setShowSearch, 
      cartItem, addToCart, totalCartItem, updateQuantity,
      getCartAmount,navigate
  }
  
  return (
    <ShopContext.Provider value = {value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;