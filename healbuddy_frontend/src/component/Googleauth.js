import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import Client from '../container/Client';

export default function GoogleAuth() {
   const navigate = useNavigate();
   const [userFound, setUserFound] = useState(false);

   const LoginOrSave = async (data) => {
      const users = await Client.fetch(`*[_type == 'user']`);
      const jsonData = JSON.stringify(data);
      const encodedData = encodeURIComponent(jsonData);

      users?.forEach(user => {
         if (user.email === data.email) {
            setUserFound(true);
            localStorage.clear();
            localStorage.setItem("HealBuddyAuth", user._id);
            navigate("/");
         }
      });
      {!userFound && navigate(`/set-password/${encodedData}`);}
   }

   const accessUser = (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
         headers: {
            Authorization: `Bearer ${accessToken}`
         }
      })
         .then(response => response.json())
         .then(data => {
            LoginOrSave(data);
         })
         .catch(error => {
            console.error("Error fetching user profile:", error);
         });
   }

   const login = useGoogleLogin({
      onSuccess: tokenResponse => accessUser(tokenResponse),
   });

   return (
      <button
         type='button'
         className='bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none shadow-md hover:shadow-xl max-sm:text-xs'
         onClick={() => login()}>
         <FcGoogle className='mr-4' /> Sign in with Google
      </button>
   )
}
