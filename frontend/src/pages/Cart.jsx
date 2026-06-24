import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import TotalCart from "../component/TotalCart";

const Cart = () => {
  const { cartItem, products, currency, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItem[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItem, products]);

  return (
    <div className="border-t pt-14  text-gray-700">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (products) => products._id === item._id,
          );
          return (
            <div
              key={index}
              className="py-4  border-b text-gray-500 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className=" outline-0 border max-w-10 sm:max-w-20 px-1 sm:px-2 py-.4 bg-gray-200">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
                className=" outline-0 border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                value={item.quantity}
              />
              <img
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                onClick={() => updateQuantity(item._id, item.size, 0)}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-10">
        <div className="w-full sm:w-[450px]">
          <TotalCart />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="text-sm bg-black text-white p-3 my-2"
            >
              Processed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
