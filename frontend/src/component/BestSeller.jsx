import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopcontext";
import { useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSeller = products.filter((item) => item.bestseller);
    setBestSeller(bestSeller.slice(0, 5));
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
            Discover our most popular and highly-rated products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
