import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/products/${id}`}>
      <div className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden bg-gray-200 h-80 sm:h-72 md:h-80 flex items-center justify-center">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-gray-800 font-semibold text-base sm:text-lg truncate">
            {name}
          </p>
          <p className="text-gray-600 font-bold text-lg sm:text-xl mt-2">
            {currency}: 
           <span className=""> {price}</span>  
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
