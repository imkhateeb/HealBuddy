import React, { useState, useEffect } from 'react';
import { userQuery } from '../utils/data';
import Client from '../container/Client';
import Roundspinner from '../component/Spinners/RoundSpinner';
import logoImage from '../assets/logo.jpg';
import { v4 as uuidv4 } from 'uuid';
import { feedbackQuery } from '../utils/data';
import { urlFor } from '../container/Client';
import { Link } from 'react-router-dom';

export default function Feedback() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = userQuery(localStorage.getItem("HealBuddyAuth"));
    const queryData = () => {
      Client.fetch(query)
        .then((data) => {
          setUser(data[0]);
          setLoading(false);
        })
        .catch(console.error);
    };
    queryData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const query = feedbackQuery();
    const queryFeedback = () => {
      Client.fetch(query)
        .then((data) => {
          setFeedbacks(data);
          setLoading(false);
        })
        .catch(console.error);
    };
    queryFeedback();
  }, [feedbackSubmitted, showFeedback]);


  function handleFeedback() {
    if (name.split(' ').join('').length >= 3 && feedbackMsg.split(' ').join('').length >= 3) {
      let doc;
      if (user) {
        doc = {
          _id: uuidv4(),
          _type: 'feedback',
          name,
          feedbackMsg,
          postedBy: {
            _type: 'postedBy',
            _ref: user?._id,
          }
        }
      } else {
        doc = {
          _id: uuidv4(),
          _type: 'feedback',
          name,
          feedbackMsg,
        }
      }
      Client.createOrReplace(doc)
        .then(() => {
          setFeedbackSubmitted(true);
          setTimeout(() => {
            setFeedbackSubmitted(false);
          }, 2000);
          setShowFeedback(true);
        })
        .catch(console.error)
    }
  }

  if (loading) {
    return (<div className='w-full h-[90vh] flex flex-col items-center justify-center'><Roundspinner /><p className='font-bold'>Making things ready for you</p></div>);
  } else if (feedbackSubmitted) {
    return (<div className='w-full h-[90vh] flex flex-col items-center justify-center'><p className='font-bold text-green-500'>Your feedback submitted</p></div>);
  } else if (showFeedback) {
    return (
      <div className='w-full h-[90vh] p-2 flex flex-col items-center'>
        {feedbacks.length !== 0 && feedbacks.map((feedback) => (
          <div key={feedback?._id} className='animate-fade-in-up duration-200 flex max-sm:flex-col ease-linear p-5 max-sm:p-3 flex bg-white rounded-lg max-sm:w-11/12 max-md:w-5/6 w-4/5 my-2 max-sm:items-start items-center'>
            <img src={
              !(feedback.postedBy) ? logoImage :
                !(feedback.postedBy.image) ?
                  logoImage :
                  urlFor(feedback.postedBy.image)?.url()
            } alt="user-dp" className='w-1/3 h-auto rounded-full object-cover max-sm:w-14 max-md:w-24 md:w-32 xl:w-44 mr-5'
            />
            <div>
              <h1 className='max-md:text-2xl text-3xl font-bold my-1'>{feedback?.name}</h1>
              <p className='max-md:text-base text-xl my-1'>{feedback.feedbackMsg}</p>
            </div>
          </div>
        ))}
        <div className='flex max-sm:flex-col max-sm:w-full max-sm:justify-center items-center w-full justify-between max-md:w-5/6 md:w-4/5'>
          <Link to='/feedback' className='bg-blue-500 py-2 px-3 outline-none rounded-lg hover:bg-blue-400 transition-all duration-500 text-white my-2 text-center '>Back to feedback page</Link>
          <Link to='/' className='bg-blue-500 py-2 px-3  outline-none rounded-lg hover:bg-blue-400 transition-all duration-500 text-white my-2 text-center '>Home</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className='w-full h-[90vh] p-2 flex flex-col items-center justify-center'>
        <img src={logoImage} alt='logo' className='w-20 h-auto rounded-lg my-2 object-cover  max-sm:hidden' />
        <div className='animate-fade-in-up duration-200 ease-linear p-3 max-sm:p-1 flex flex-col max-md:items-center max-md:justify-center bg-white rounded-3xl max-sm:w-11/12 max-md:w-3/5 w-3/5'>
          <h1 className='text-3xl font-bold py-2 px-3'>Every voice matters</h1>
          <div className='flex pb-3 flex-col w-full'>
            <div className='flex flex-col justify-center items-center my-2 w-full'>
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gra-400 py-2 px-3 w-11/12 outline-none rounded-lg hover:border-blue-300 transition-all duration-500' required placeholder='Enter your full name...' />
              {name.split(' ').join('').length < 3 && name.split(' ').join('').length !== 0 && (
                <p className='text-red-500 animate-fade-in'>Name should contain atleast 3 character!</p>
              )}
            </div>
            <div className='flex flex-col justify-center items-center my-2 w-full'>
              <textarea type='text' value={feedbackMsg} onChange={(e) => setFeedbackMsg(e.target.value)} className='border-2 w-11/12 border-gra-400 py-2 px-3 outline-none rounded-lg hover:border-blue-300 transition-all duration-500' placeholder='Enter feedback...' required />
              {feedbackMsg.split(' ').join('').length < 3 && feedbackMsg.split(' ').join('').length !== 0 && (
                <p className='text-red-500 animate-fade-in'>Message should contain atleast 3 character!</p>
              )}
            </div>
            <div className='flex justify-between items-center my-2 w-11/12 m-auto'>
              <button className='py-1 px-2 rounded-lg bg-blue-500 outline-none hover:bg-blue-400 transition-all duration-500 text-white max-sm:text-sm' onClick={handleFeedback}>Submit Feedback</button>
              <button className='py-1 px-2 rounded-lg bg-blue-500 outline-none hover:bg-blue-400 transition-all duration-500 text-white max-sm:text-sm' onClick={() => setShowFeedback(true)}>See all feedbacks</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
