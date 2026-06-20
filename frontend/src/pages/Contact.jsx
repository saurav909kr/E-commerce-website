import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewLatterBox from '../component/NewLatterBox'

const Contact = () => {
  return (
    <div>
      <div>
         <div>
             <Title text1={'Contact'} text2={'us'}/>
         </div>
         <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl'>our Store</p>
            <p className='text-gray-500'>54709 willsam station <br/> suit 350,washington</p>
            <p className='text-gray-500'>Tel:(415) 5555-555
              <br />email:arnav@gmail.com
            </p>
            <p className='font-semibold text-xl text-gray-600'>Careers at forever</p>
            <p className='text-gray-500'>Learn more about my team and job openings</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
          </div>
         </div>
         <NewLatterBox/>
      </div>
      
    </div>
  )
}

export default Contact
