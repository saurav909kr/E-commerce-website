import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Add from "./pages/Add";
import list from "./pages/list";
import orders from "./pages/orders";
import Login from "./component/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => { 

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem('token') : "",
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen ">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr className="text-gray-300" />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base ">
              <Routes>
                <Route path="/add" element={<Add token={token} /> }/>
                <Route path="/list" element={<list token={token} />} />
                <Route path="/order" element={<order token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
