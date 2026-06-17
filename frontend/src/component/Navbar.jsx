import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate} from "react-router-dom";
import { ShopContext } from "../context/shopcontext";

const Navbar = () => {

  const navigate = useNavigate();
  const [visible, setvisible] = useState(false);

  const {setShowSearch} = useContext(ShopContext);

  const handleSearchclick = () => {
    setShowSearch(true);
    navigate('/collection')
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} alt="logo-img" className="w-36" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-base md:text-lg text-gray-700 font-medium hover:text-red-600 transition-colors duration-300">
            Home
          </p>
          <hr className="w-2/2 border-none h-[1.5px] bg-gray-600 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="text-base md:text-lg text-gray-700 font-medium hover:text-red-600 transition-colors duration-300">
            Collection
          </p>
          <hr className="w-2/2 border-none h-[1.5px] bg-gray-600 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-base md:text-lg text-gray-700 font-medium hover:text-red-600 transition-colors duration-300">
            About
          </p>
          <hr className="w-2/2 border-none h-[1.5px] bg-gray-600 hidden" />
        </NavLink>

        <NavLink to="contact" className="flex flex-col items-center gap-1">
          <p className="text-base md:text-lg text-gray-700 font-medium hover:text-red-600 transition-colors duration-300">
            Contact
          </p>
          <hr className="w-2/2 border-none h-[1.5px] bg-gray-600 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={handleSearchclick}
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search-icon"
        />
        <div className="group relative">
          <img src={assets.profile_icon} alt="profile-icon" className="w-5"/>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col fap-2 w-36 py-3 px-5 bg-slate-100 text-gray-100 rounded">
              <p className="cursor-pointer text-gray-500 hover:text-black transition-colors duration-200">
                My Profile
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-black transition-colors duration-200">
                Order
              </p>
              <p className="cursor-pointer text-gray-500 hover:text-black transition-colors duration-200">
                Logout
              </p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            4
          </p>
        </Link>

        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar menu for small screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
