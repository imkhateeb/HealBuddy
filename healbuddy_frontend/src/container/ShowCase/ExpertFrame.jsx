import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.jpg';


export default function ExpertFrame({user}) {
  return (
        <div className='animate-fade-in-up duration-200 ease-linear p-3 flex flex-col max-md:items-center max-md:justify-center bg-white rounded-3xl my-5'>
        <h1 className='text-3xl font-bold py-2 px-3 border-b-2 border-gray-200 flex items-center'>How you can contribute</h1>
          <div className='flex max-md:flex-col-reverse max-md:items-center justify-center'>
            <p className='p-2 md:py-6 md:px-4 max-md:text-lg text-xl'>Mental health refers to our emotional, psychological, and social well-being, encompassing how we think, feel, and act. It plays a crucial role in every aspect of our lives, influencing how we handle stress, relate to others, make choices, and navigate challenges. Just like physical health, mental health is a vital component of overall well-being</p>
            <img src={logoImage} alt='logo' className='w-1/3 h-auto rounded-full object-cover' />
          </div>
          {user && !user?.role && (
            <Link to={`/${user?._id}/create-expert`} className='py-2 px-6 my-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 cursor-pointer transition-all duration-300 ease-in text-center w-60'>
              Be Our Expert
            </Link>
          )}
          {!user && (
            <Link to={'/login'} className='py-2 px-6 my-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 cursor-pointer transition-all duration-300 ease-in text-center w-60'>
              Login and Apply
            </Link>
          )}
        </div>
  )
}
