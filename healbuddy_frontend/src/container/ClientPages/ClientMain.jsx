import React, { useState, useEffect } from 'react';
import RoundSpinner from '../../component/Spinners/RoundSpinner';
import { states, districts } from '../../utils/ActiveArea';
import { BsEmojiSmile } from 'react-icons/bs';
import Client from '../Client';
import { userQuery } from '../../utils/data';
import { useParams } from 'react-router-dom';
import InitialExercises from './InitialExercises';
import { Link } from 'react-router-dom';


export default function ClientMain() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [totalStates, setTotalStates] = useState([]);
  const [totalDistricts, setTotalDistricts] = useState([]);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");


  useEffect(() => {
    setTotalStates(states());
  }, [])


  useEffect(() => {
    setTotalDistricts(districts(state))
  }, [state]);

  useEffect(() => {
    const query = userQuery(localStorage.getItem("HealBuddyAuth"));
    const queryData = () => {
      Client.fetch(query)
        .then((data) => {
          setUser(data[0]);
          setRole(data[0].role !== undefined ? data[0].role : "");
          setFullName(data[0].fullName);
        })
        .catch((console.error));
    }
    queryData();
  }, []);


  function saveInfo() {
    const doc = {
      userId,
      fullName,
      age,
      district
    }
    localStorage.setItem("TempRoles", JSON.stringify(doc));
    window.location.reload();
  }

  


  if (role !== "") {
    return (
      <div className='h-[84vh] w-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <RoundSpinner />
          <h1 className='text-xl max-sm:text-xs font-bold max-md:text-lg'>It looks like you are done with the initial questionaaire</h1>
        </div>
      </div>
    )
  } else {
    if (!localStorage.getItem("TempRoles") && user) {
      return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <div className='md:w-1/2 max-md:w-3/5 max-sm:w-11/12 bg-white rounded-2xl flex flex-col p-5 max-sm:p-3 animate-fade-in duration-75'>
            <h1 className='text-xl max-sm:text-sm flex justify-between items-center font-bold max-md:text-lg'>Let's start with the basic questions <BsEmojiSmile fontSize={25} /></h1>
            <hr className='mt-3 mb-5 px-2' />
            <div className='flex flex-col'>

              <input type='text' name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2' placeholder='Your full name...' />

              <input type='Number' name='age' value={age} onChange={(e) => setAge(e.target.value)} className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2' placeholder='How old you are?' />

              <select className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 cursor-pointer my-2' onChange={(e) => setState(e.target.value)}>
                <option value={'null'} className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2'>select State</option>
                {totalStates?.map((item, index) => (
                  <option key={index} value={item} className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2'>{item}</option>
                ))}
              </select>

              {totalDistricts?.length !== 0 && (
                <select className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 cursor-pointer my-2' onChange={(e) => setDistrict(e.target.value)}>
                  <option value='' className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2'>select District</option>
                  {totalDistricts?.map((item, index) => (
                    <option key={index} value={item} className='border-2 border-gray-300 rounded-lg outline-none py-2 px-4 my-2'>{item}</option>
                  ))}
                </select>
              )}
              <button
                type='button'
                onClick={saveInfo}
                className='py-2 px-4 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2'
              >Save and Proceed</button>
            </div>
          </div>
        </div>
      )
    } else if (localStorage.getItem("TempRoles")) {
      return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <div className='md:w-1/2 max-md:w-3/5 max-sm:w-11/12 bg-white rounded-2xl flex flex-col p-5 max-sm:p-3 animate-fade-in duration-75'>
            <h1 className='text-xl max-sm:text-sm flex justify-between items-center font-bold max-md:text-lg'>Now answer some real questions <BsEmojiSmile fontSize={25} /></h1>
            <hr className='mt-3 mb-5 px-2' />
            <InitialExercises 
              user={user && user}
              userId={userId}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
          <div className='md:w-1/2 max-md:w-3/5 max-sm:w-11/12 bg-white rounded-2xl flex flex-col p-5 max-sm:p-3 animate-fade-in duration-75'>
          <Link
          to={'/login'}
          className='py-1 px-3 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center'
        >Next</Link>
        <Link
          to={'/signup'}
          className='py-1 px-3 outline-none text-blue-500 hover:text-blue-400 transition-all duration-300 ease-in  rounded-lg cursor-pointer my-2 flex items-center'
        >Signup</Link>
          </div>
        </div>
      )
    }
  }
}
