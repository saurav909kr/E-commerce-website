import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home  from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Search from "./component/Search";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className="px-2 sm:px-[3vw] md:px-[2vw] lg:px-[7vw]">
      <ToastContainer/>
      <Navbar />
      <Search/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </div>
  );
};

export default App;