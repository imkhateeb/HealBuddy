import React from 'react';
import logoImage from '../../assets/logo.jpg';

export default function WhyHealBuddy() {
  return (
        <div className='animate-fade-in-up duration-200 ease-linear p-3 flex flex-col max-md:items-center max-md:justify-center bg-white rounded-3xl my-5'>
        <h1 className='text-3xl font-bold py-2 px-3 border-b-2 border-gray-200'>Why HealBuddy</h1>
          <div className='flex max-md:flex-col-reverse max-md:items-center justify-center'>
            <p className='p-2 md:py-6 md:px-4 max-md:text-lg text-xl'>Mental health refers to our emotional, psychological, and social well-being, encompassing how we think, feel, and act. It plays a crucial role in every aspect of our lives, influencing how we handle stress, relate to others, make choices, and navigate challenges. Just like physical health, mental health is a vital component of overall well-being</p>
            <img src={logoImage} alt='logo' className='w-1/3 h-auto rounded-full object-cover' />
          </div>
        </div>
  )
}
