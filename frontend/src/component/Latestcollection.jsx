import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products?.slice(0, 10));
  },
[]);

  return (
    <div className="py-7 md:py-7">
      <div className="text-center">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-6 leading-relaxed">
          Explore our newest and most exclusive designs. Handpicked collections
          crafted with premium quality to elevate your style and comfort.
        </p>
      </div>

      {/*Rendering the project */}
      <div className="px-6 md:px-12 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {latestProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latestcollection;
