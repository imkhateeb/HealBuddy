import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import { GiRunningNinja } from 'react-icons/gi';
import { MdOutlineSchedule } from 'react-icons/md';
import {FcSalesPerformance} from 'react-icons/fc';
import {AiFillMessage} from 'react-icons/ai';
import {MdOutlineSportsGymnastics} from 'react-icons/md';
import {BsFillPostcardHeartFill} from 'react-icons/bs';
import {MdFeedback} from 'react-icons/md';
import {SiVirustotal} from 'react-icons/si';
import {MdRecentActors} from 'react-icons/md';
import {GrCertificate} from 'react-icons/gr';

const isNoteActiveStyle = 'flex py-1 pl-4 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize my-1';
const isActiveStyle = 'flex py-2 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize my-2 pl-6';


export default function Dashboard({ user, role }) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);

  function handleLogout() {
    localStorage.removeItem("HealBuddyAuth");
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div className='flex flex-col justify-between bg-mainColor md:w-275 min-w-210 overflow-y-auto hide-scrollbar shadow-lg'>
      <div className='mt-10 ml-5 md:mt-0'>
        <ProfilePicture
          userId={user?._id}
          height={20}
          width={20}
          rounded={'full'}
          isUploadActive={true}
          classNames='cursor-pointer'
        />
      </div>
      <div>
        <div className='p-2 my-2 pr-0'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}><HiHome fontSize={25} />Home</NavLink>
        </div>

        { role === 'exprt' ?
          <>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/activecases`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}><GiRunningNinja fontSize={25} />Running cases</NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/schedules`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <MdOutlineSchedule fontSize={25} />Your Schedules
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/posts`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <BsFillPostcardHeartFill fontSize={25} />Your Posts
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/feedback`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <MdFeedback fontSize={25} />Client's feedback
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/recent-cases`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <MdRecentActors fontSize={25} />Recent Cases
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/expert/total-cases`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <SiVirustotal fontSize={25} />Total Cases
              </NavLink>
            </div>
          </>
          :
          <>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/client/performance`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}><FcSalesPerformance fontSize={25} />Your performance</NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/client/schedules`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <MdOutlineSchedule fontSize={25} />Schedules
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/client/exercises`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <MdOutlineSportsGymnastics fontSize={25} />Exercises
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/client/messages`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <AiFillMessage fontSize={25} />Messages
              </NavLink>
            </div>
            <div className='p-2 pr-0'>
              <NavLink to={`/${user?._id}/schedules`} className={({ isActive }) => isActive ? isActiveStyle : isNoteActiveStyle}>
                <GrCertificate fontSize={25} />Scores & Certificates
              </NavLink>
            </div>
          </>
        }
      </div>


      <div className='my-2 p-2'>
        <Link to={`/${user?._id}/profile`} className='w-full shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-2 px-4  hover:shadow-md'>
          <ProfilePicture
            userId={user?._id}
            height={14}
            width={14}
            rounded={"full"}
            isUploadActive={false}
          />
          <p>{user?.fullName}</p>
        </Link>
        {confirmLogout && (
          <div className='w-full shadow-lg flex justify-evenly rounded-lg items-center cursor-pointer py-4 px-4 hover:shadow-md animate-slide-in'>
            <button type='button' onClick={handleLogout} className='py-2 px-4 bg-red-500 text-white hover:bg-red-400 transition-all duration-300 rounded-lg outline-none' >Delete</button>
            <button type='button' onClick={() => setConfirmLogout(false)} className='py-2 px-4 text-red-500 hover:text-red-400 transition-all duration-300 rounded-lg outline-none'>Cancel</button>
          </div>
        )}

        <button type='button' className='w-full shadow-lg flex justify-center rounded-lg items-center cursor-pointer py-4 px-4 hover:shadow-md' onClick={() => setConfirmLogout(!confirmLogout)}>
          Logout
        </button>


      </div>
    </div>
  )
}
