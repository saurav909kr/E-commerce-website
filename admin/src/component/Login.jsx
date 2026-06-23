import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = ({setToken}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(email,password)
      const responce = await axios.post(backendUrl+ 'api/user/admin', {email, password})
      // console.log(responce);
      if(responce.data.success){
         setToken(responce.data.token)
      }else{
        toast.error(responce.data.message)
      }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className=" bg-white shadow-md rounded-lg px-12 py-8 max-w-lg">
        <h1 className="text-2xl font-bold mb-3">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e)=> setEmail(e.target.value)} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none " type="email" placeholder="Your@gmail.com" required />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input onChange={(e)=> setPassword(e.target.value)} className="rounded-md w-full px-3 py-2  border border-gray-300 outline-none" type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="mt-2 w-full px-4 py-2 text-white bg-black cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
