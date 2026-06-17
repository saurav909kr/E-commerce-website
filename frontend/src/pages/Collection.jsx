import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../component/Title";
import { ShopContext } from "../context/shopcontext";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { products, search , showSearch } = useContext(ShopContext);
  const [showfilter, setShowfilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, SetsubCategory] = useState([]);
  const [sortType, setSortType] = useState([]);


  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      setCategory(prev => [...prev, e.target.value])
    }

  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      SetsubCategory(prev => prev.filter(item => item !== e.target.value))
    } else{
      SetsubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let copyProduct = products.slice();

    
    if(search && showSearch){
      copyProduct = copyProduct.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0 ) {
      copyProduct = copyProduct.filter(item => category.includes(item.category.toLowerCase()));
    }

     if(subCategory.length > 0 ) {
      copyProduct = copyProduct.filter(item => subCategory.includes(item.subCategory.toLowerCase()));
    }

    setFilterProduct(copyProduct)
    
  }

  const applySort = () =>{
    let copyFilter = filterProduct.slice()
    
    switch(sortType){
      case 'low-high':
        setFilterProduct(copyFilter.sort((a, b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProduct(copyFilter.sort((a, b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }


  useEffect(()=>{
     applyFilter();
  },[category, subCategory, search])

  useEffect(()=>{
     applySort();
  },[sortType])

  

  return (
    <div className="">
      {/* Filter Section */}
      <div className=" flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 gap-4 mt-3">
        {/* Filter Sidebar */}
        <div className="bg-white min-w-64">
          {/* Filter Header */}
          <button
            onClick={() => setShowfilter(!showfilter)}
            className="sm:hidden flex items-center justify-between w-full mb-4 pb-4 border-b border-gray-200 hover:bg-gray-50 transition-colors rounded px-2 -mx-2"
          >
            <p className="text-lg font-bold text-gray-900">FILTERS</p>
            <img
              className={`h-3 transition-transform duration-300 ${showfilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt="Toggle"
            />
          </button>

          <h2 className="hidden sm:block text-lg font-bold text-gray-900 mb-6">
            FILTERS
          </h2>

          {/* Categories */}
          <div
            className={`mb-8 transition-all duration-300 overflow-hidden sm:overflow-visible ${showfilter ? "" : "hidden sm:block"}`}
          >
            <h3 className="text-base font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-300">
              CATEGORIES
            </h3>
            <div className="space-y-3">
              {["Men", "Women", "Kids"].map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    onChange={toggleCategory}
                    type="checkbox"
                    value={category.toLowerCase()}
                    className="w-5 h-5 rounded border-gray-300 text-gray-800 cursor-pointer accent-gray-800 hover:accent-gray-600"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 font-medium">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Sub-Categories */}
          <div
            className={`transition-all duration-300 overflow-hidden sm:overflow-visible ${showfilter ? "block sm:block" : "hidden sm:block"}`}
          >
            <h3 className="text-base font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-300">
              SUB-CATEGORIES
            </h3>
            <div className="space-y-3">
              {[
                { value: "Winterwear", label: "Winterwear" },
                { value: "Topwear", label: "Top Wear" },
                { value: "Bottomwear", label: "Bottom Wear" },
              ].map((sub) => (
                <label
                  key={sub.value}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input

                    onChange={toggleSubCategory}
                    type="checkbox"
                    value={sub.value.toLocaleLowerCase()}
                    className="w-5 h-5 rounded border-gray-300 text-gray-800 cursor-pointer accent-gray-800 hover:accent-gray-600"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 font-medium">
                    {sub.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1">
          <div className="flex justify-between items-center text-base sm:text-2xl mb-2">
            <Title text1={"ALL"} text2={"COLLECTION"} />
            <select onChange={(e)=>{setSortType(e.target.value)}} className="border-2 outline-0 border-gray-300 text-sm px-2 h-10">
              {["Revelent", "Low-High", "High-Low"].map((sort) => (
                <option key={sort} value={sort.toLowerCase()}>
                  Sort by: {sort}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

            {
              filterProduct.map((item, index)=>(
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
              ))
            }

          </div>
        </div>


      </div>
    </div>
  );
};

export default Collection;
