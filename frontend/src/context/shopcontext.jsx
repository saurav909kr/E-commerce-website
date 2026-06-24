import { createContext, use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async ({ itemId, size }) => {
    if (!size) {
      toast.error("selet the size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "api/cart/add",
          { itemId, size },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const totalCartItem = () => {
    let totalcount = 0;
    for (const item in cartItem) {
      for (const items in cartItem[item]) {
        try {
          if (cartItem[item][items] > 0) {
            totalcount += cartItem[item][items];
          }
        } catch (error) {}
      }
    }
    return totalcount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "api/cart/update",
          { itemId, size, quantity },
          { headers: { token } },
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {}
      }
    }

    return totalAmount;
  };

  const fetchProducts = async () => {
    try {
      const responce = await axios.get(backendUrl + "api/product/list");
      // console.log(responce)

      if (responce.data.success) {
        setProducts(responce.data.products);
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const responce = await axios.post(
        backendUrl + "api/cart/get",
        {},
        { headers: { token } },
      );

      if (responce.data.success) {
        setCartItem(responce.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   if (!token && localStorage.getItem("token")) {
  //     setToken(localStorage.getItem("token"));
  //     getUserCart(localStorage.getItem("token"))
  //   }
  // }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      getUserCart(token);
    }
  }, [token]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addToCart,
    totalCartItem,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
