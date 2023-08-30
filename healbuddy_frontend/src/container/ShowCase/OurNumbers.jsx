import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/logo.jpg';
import { GiRunningNinja } from 'react-icons/gi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiHealthIncrease } from 'react-icons/gi';

export default function OurNumbers() {
  const [runningCasesCount, setRunningCasesCount] = useState(0);
  const [healersCount, setHealersCount] = useState(0);
  const [healedCount, setHealedCount] = useState(0);


  if ( runningCasesCount < 200 ){
    setTimeout(() => {
      setRunningCasesCount(runningCasesCount+1);
    }, 10);
  }
  if ( healersCount < 50 ){
    setTimeout(() => {
      setHealersCount(healersCount+1);
    }, 10);
  }
  if ( healedCount < 48 ){
    setTimeout(() => {
      setHealedCount(healedCount+1);
    }, 10);
  }
  // Initialize timeouts
  // let runningTimeout;
  // let healersTimeout;
  // let healedTimeout;

  // const incrementRunningCasesCount = () => {
  //   if (runningCasesCount < 200) {
  //     setRunningCasesCount(prevCount => prevCount + 1);
  //     runningTimeout = setTimeout(incrementRunningCasesCount, 10);
  //   }
  // };

  // const incrementHealersCount = () => {
  //   if (healersCount < 50) {
  //     setHealersCount(prevCount => prevCount + 1);
  //     healersTimeout = setTimeout(incrementHealersCount, 10);
  //   }
  // };

  // const incrementHealedCount = () => {
  //   if (healedCount < 48) {
  //     setHealedCount(prevCount => prevCount + 1);
  //     healedTimeout = setTimeout(incrementHealedCount, 10);
  //   }
  // };

  // useEffect(() => {
  //   // Call the increment functions
  //   incrementRunningCasesCount();
  //   incrementHealersCount();
  //   incrementHealedCount();

  //   // Clean up timeouts when the component unmounts
  //   return () => {
  //     clearTimeout(runningTimeout);
  //     clearTimeout(healersTimeout);
  //     clearTimeout(healedTimeout);
  //   };
  // }, []);





  return (
    <div className='animate-fade-in-up duration-200 ease-linear p-3 flex flex-col max-md:items-center max-md:justify-center bg-white rounded-3xl my-5'>
      <h1 className='text-3xl font-bold py-2 px-3 border-b-2 border-gray-200'>Our Numbers</h1>
      <div className='flex flex-col items-center max-md:items-center justify-center'>
        <img src={logoImage} alt='logo' className='w-1/4 h-auto rounded-full object-cover' />
        <div className='flex pb-3'>
          <div className='bg-mainColor rounded-xl p-5 flex flex-col justify-center mx-2 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer'>
            <GiRunningNinja fontSize={150} />
            <h1 className='text-[45px] max-sm:text-3xl font-bold'>{runningCasesCount}+</h1>
            <h1 className='text-[35px] max-sm:text-2xl font-bold'>Running Cases</h1>
            <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,</p>
          </div>
          <div className='bg-mainColor rounded-xl p-5 flex flex-col justify-center mx-2 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer'>
            <RiMentalHealthFill fontSize={150} />
            <h1 className='text-[45px] max-sm:text-3xl font-bold'>{healersCount}+</h1>
            <h1 className='text-[35px] max-sm:text-2xl font-bold'>Healer</h1>
            <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,</p>
          </div>
          <div className='bg-mainColor rounded-xl p-5 flex flex-col justify-center mx-2 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer'>
            <GiHealthIncrease fontSize={150} />
            <h1 className='text-[45px] max-sm:text-3xl font-bold'>{healedCount}+</h1>
            <h1 className='text-[35px] max-sm:text-2xl font-bold'>Running Cases</h1>
            <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,</p>
          </div>
        </div>
      </div>
    </div>
  )
}
