import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible ,setVisible] = useState(false);

  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
      setVisible(true)
    } else{
      setVisible(false)
    }

  },[location])


  return showSearch  && visible ? (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-4 ">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 flex items-center gap-3 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-800 focus-within:shadow-md focus-within:ring-2 focus-within:ring-gray-200">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLocaleLowerCase());
            }}
            type="text"
            placeholder="Search for products..."
            autoFocus
            className="flex-1 outline-none text-base font-normal  text-gray-800 bg-transparent placeholder-gray-500"
          />
          <img
            src={assets.search_icon}
            alt="search"
            className="w-5 h-5 opacity-60 cursor-pointer hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
          />
        </div>
        <img
          src={assets.cross_icon}
          onClick={() => {
            setShowSearch(false);
          }}
          alt="close search"
          className="w-4 h-4 mx-2 opacity-60 cursor-pointer hover:opacity-100 transition-all duration-200 "
        />
      </div>
    </div>
  ) : null;
};

export default Search;
