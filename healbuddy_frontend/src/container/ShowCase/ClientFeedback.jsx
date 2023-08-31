import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

export default function ClientFeedback() {
  

  return (
    <div className='animate-fade-in-up duration-200 ease-linear p-3 max-sm:p-1 flex flex-col max-md:items-center max-md:justify-center bg-white rounded-3xl my-5'>
      <h1 className='text-3xl font-bold py-2 px-3 border-b-2 border-gray-200'>Our Numbers</h1>
      <div className='flex flex-col items-center max-md:items-center justify-center'>
        <img src={logoImage} alt='logo' className='w-1/4 h-auto rounded-full object-cover  max-sm:hidden' />
        <div className='flex pb-3 max-md:flex-col'>
          <div className='bg-mainColor max-md:my-3 rounded-xl p-5 max-sm:px-3 flex flex-col justify-center mx-2 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer'>
            
            <h1 className='text-[35px] max-md:text-3xl max-sm:text-2xl max-lg:text-2xl font-bold'>Running Cases</h1>
            <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,</p>
          </div>
          
        </div>
      </div>
      <Link to='/community' className='py-2 px-6 my-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 cursor-pointer transition-all duration-300 ease-in text-center w-45'>
        Join Community
      </Link>
    </div>
  )
}
