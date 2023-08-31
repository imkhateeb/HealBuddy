import React, { useState, useEffect } from 'react';
import showCaseBanner from '../assets/showCaseBanner.jpg';
import { userQuery } from '../utils/data';
import Client from '../container/Client';
import Roundspinner from './Spinners/RoundSpinner';
import ProfilePage from '../container/ProfilePage';
import WhyHealBuddy from '../container/ShowCase/WhyHealBuddy';
import ClientFrame from '../container/ShowCase/ClientFrame';
import ExpertFrame from '../container/ShowCase/ExpertFrame';
import OurNumbers from '../container/ShowCase/OurNumbers';
import ClientFeedback from '../container/ShowCase//ClientFeedback';
import ExpertFeedback from '../container/ShowCase/ExpertFeedback';
import StoryOfTheDay from '../container/ShowCase/StoryOfTheDay';
import Footer from '../container/ShowCase/Footer';

// 7087935684
export default function ShowCase() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const query = userQuery(localStorage.getItem("HealBuddyAuth"));
    const queryData = () => {
      Client.fetch(query)
        .then((data) => {
          setUser(data[0]);
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch(console.error);
    };
    queryData(); // Call the function to fetch data
  }, []);

  if (loading) {
    return (<div className='w-full h-[90vh] flex flex-col items-center justify-center'><Roundspinner /><p className='font-bold'>Making things ready for you</p></div>);
  } else if (!user || (user && !user?.role)) {
    return (
      <div className='w-full py-2 px-2'>
        <div className='fade-in duration-200 ease-linear'>
          <img src={showCaseBanner} alt='branding-image' className='w-full rounded-3xl object-cover' />
        </div>
        <WhyHealBuddy />
        <ClientFrame user={user && user} />
        <ExpertFrame user={user && user} />
        <OurNumbers />
        <ClientFeedback />
        <ExpertFeedback />
        <StoryOfTheDay />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className='w-full p-2'>
        <ProfilePage />
      </div>
    );
  }
}
