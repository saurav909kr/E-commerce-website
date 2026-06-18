import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import TotalCart from '../component/TotalCart'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/shopcontext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-5  min-h-[80vh]'>
      {/**left side */}
      <div className='mt-8'>
      <div className='text-xl sm:text-2xl my-3'>
         <Title text1={'Delivery'} text2={'Information'}/>
      </div>
      <div className='flex flex-col gap-2 px-2 py-2'>

        <div className='flex flex-col sm:flex-row gap-4 mt-1 text-sm '>
          <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='FirstName'/>
          <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='LastName'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
          <input type="email" className='w-full outline-0 border border-gray-300 bg-gray-100 py-1 px-2' placeholder='example@gmail.com'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
          <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='street'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
          <input type="text" className='outline-0 border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='city'/>
          <input type="text" className='outline-0 border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='state'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
           <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='pincode'/>
          <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='country'/>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-2'>
           <input type="text" className='outline-0 border border-gray-300 bg-gray-100 py-1 px-2 w-full' placeholder='phone'/>
        </div>
      </div>
      </div>

      {/**right */}
      <div className='mt-8 p'>
        <div className='mt-8 min-w-120'>
          <TotalCart/>
        </div>
        <div className='mt-13'>
            <Title text1={'Payment'} text2={'method'}/>
        </div>
        <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'? 'bg-green-500':""}`}></p>
            <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
          </div>
          <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay'? 'bg-green-500':""}`}></p>
            <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
          </div>
           <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? 'bg-green-500':""}`}></p>
            <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
          </div>

        </div>

        <div className='w-full flex justify-end mt-8'>
           <button onClick={()=>navigate('/order')}  className='bg-black text-white px-10 py-3'>PLACE ORDER</button>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
