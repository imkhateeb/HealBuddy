import React, { useState, useEffect } from 'react';
import bannerImage from '../assets/banner.jpg';
import logoImage from '../assets/logo.jpg';
import { GiThink } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { userQuery } from '../utils/data';
import Client from '../container/Client';
import Roundspinner from './Spinners/RoundSpinner';
import ProfilePage from '../container/ProfilePage';
import WhyHealBuddy from '../container/ShowCase/WhyHealBuddy';
import ClientFrame from '../container/ShowCase/ClientFrame';
import ExpertFrame from '../container/ShowCase/ExpertFrame';

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
    return (<div className='w-full h-[90vh] flex items-center justify-center'><Roundspinner /></div>);
  } else if (!user || (user && !user?.role)) {
    return (
      <div className='w-full py-2 px-2'>
        <div className='animate-fade-in duration-200 ease-linear'>
          <img src={bannerImage} alt='branding-image' className='w-full rounded-3xl object-cover' />
        </div>
        <WhyHealBuddy />
        <ClientFrame user={user && user} />
        <ExpertFrame user={user && user} />
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
