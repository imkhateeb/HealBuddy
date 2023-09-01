import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { userQuery } from '../utils/data';
import Client from './Client';


import { AiFillCloseCircle } from 'react-icons/ai';

import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Dashboard from '../component/Dashboard';
import HomeDisplay from './HomeDisplay';
import logoImage from '../assets/logo.jpg';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export default function Home() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleDashboard, setToggleDashboard] = useState(false);
  const scrollRef = useRef(null);
  const authToken = localStorage.getItem("HealBuddyAuth") !== undefined ? localStorage.getItem("HealBuddyAuth") : localStorage.clear();


  useEffect(() => {
    const query = userQuery(authToken);
    const queryData = () => {
      Client.fetch(query)
        .then((data) => {
          setUser(data[0]);
          setTheRole(data[0]);
        })
        .catch((console.error));
    }
    queryData();
  }, []);

  function setTheRole(data){
    if ( data?.role === 'expert' ){
      setRole('expert');
    } else if ( data?.role === 'client' ){
      setRole('client');
    } else {
      setRole("");
    }
  }


  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);


  return (
    <div className='flex bg-mainColor flex-col transition-height duration-75 ease-out'>

      <div className='max-md:hidden'>
        <Navbar user={user && user} role={(role === "expert") || ( role === "client") ? role : ""} />
      </div>

      <div className='flex max-md:hidden'>
        {(role === "expert" || role === "client") && (
          <div>
            <Dashboard user={user && user} role={role} />
          </div>
        )}

        <div className='flex-1 overflow-y-scroll' ref={scrollRef}>
          <Routes>
            <Route path='/*' element={<HomeDisplay user={user && user} role={(role === "expert") || ( role === "client") ? role : ""} />} />
          </Routes>
        </div>
      </div>

      {/* On small phone */}
      <div className='flex md:hidden flex-col'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          {(role === "expert" || role === "client") && (
            <BsFillArrowRightCircleFill fontSize={40} className='cursor-pointer' onClick={() => setToggleDashboard(true)} />
          )}
          <Link to={'/'}> <img src={logoImage} alt='logo' className='w-10 rounded-lg ' /> </Link>

          <BsFillArrowLeftCircleFill fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(true)} />

        </div>


        {toggleDashboard && (
          <div className='fixed left-0 top-0 w-4/5 bg-mainColor h-screen overflow-y-auto shadow-md z-10 animate-fade-in flex flex-col rounded-r-3xl shadow-lg hover:shadow-2xl transition-all duration-300'>
            <div className='absolute w-full top-0 flex justify-end items-center p-2'>
              <AiFillCloseCircle fontSize={40} className='cursor-pointer z-10' onClick={() => setToggleDashboard(false)} />
            </div>
            <Dashboard user={user && user} role={(role === "expert") || ( role === "client") ? role : ""} closeToggle={setToggleDashboard} />
          </div>
        )}

        {toggleSidebar &&
          <div className='w-4/5 fixed top-0 right-0 h-screen overflow-y-auto z-[100] animate-fade-in flex flex-col bg-mainColor rounded-l-3xl shadow-lg hover:shadow-2xl transition-all duration-300'>
            <div className='w-full flex justify-start items-center p-2'>
              <AiFillCloseCircle fontSize={40} className='cursor-pointer z-10' onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar user={user && user} role={role && role} closeToggle={setToggleSidebar} />
          </div>
        }

        <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>

          <Routes>
            <Route path='/*' element={<HomeDisplay user={user && user} role={(role === "expert") || ( role === "client") ? role : ""} />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
