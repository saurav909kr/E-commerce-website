import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/shopcontext'

const TotalCart = () => {

  const {currency ,delivery_fee,  getCartAmount} = useContext(ShopContext)

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTAL"}/>
      </div>
      <div className='flex flex-col gap-3 mt-5 text small'>
        <div className='flex justify-between  '>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr  />
        <div className='flex justify-between'>
          <p>Delivery Fee</p>
          <p>{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between '>
          <b>Total Amount</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount()+ delivery_fee}.00</b>
        </div>

      </div>
      
    </div>
  )
}

export default TotalCart
