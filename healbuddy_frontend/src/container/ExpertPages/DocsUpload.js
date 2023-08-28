import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Roundspinner from '../../component/Spinners/RoundSpinner';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Client from '../Client';
import { useNavigate } from 'react-router-dom';

import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const reqdDocs = [{
   docID: 'graduationID',
   docName: "Graduating certificate",
   docReq: true,
   confidentialMsg: "Forging of graduating certificate lead to legal actions"
},
{
   docID: 'experienceID',
   docName: "Experience certificate",
   docReq: false,
   confidentialMsg: "It's ok if no experience, proceed"
},
{
   docID: 'identityID',
   docName: "Identity Card (Aadhar Card/Voter ID Card/Driving License/Any Govt. Authorized)",
   docReq: true,
   confidentialMsg: "Fake ID card can lead to legal actions"
},
{
   docID: 'DP',
   docName: "Profile Picture",
   docReq: true,
   confidentialMsg: "Your display picture is necessary"
}];

export default function DocsUpload({ userId }) {
   const navigate = useNavigate();
   const [index, setIndex] = useState(0);
   const [alertAttempt, setAlertAttempt] = useState(false);
   const [imageAsset, setImageAsset] = useState([null, null, null, null]);
   const [loading, setLoading] = useState(false);
   const [wrongImageType, setWrongImageType] = useState(false);
   const [currentImage, setCurrentImage] = useState(imageAsset[index]);
   const [creatingDashboard, setCreatingDashboard] = useState(false);
   const [errorWhileAddingRole, setErrorWhileAddingRole] = useState(false);


   function uploadImage(e) {
      const { type, name } = e.target.files[0];
      if (type === 'image/png' || type === 'image/svg' || type === 'image/jpeg' || type === 'image/gif' || type === 'image/tiff') {
         setWrongImageType(false);
         setLoading(true);
         Client.assets
            // .upload('type of asset', 'body', 'options')
            .upload('image', e.target.files[0], { contentType: type, filename: name })
            .then((document) => {
               setCurrentImage(document);
               setLoading(false);
            })
            .catch((error) => {
               console.log("Image upload error ", error);
            })
      } else {
         wrongImageType(true)
      }
   }


   function createRole() {
      setCreatingDashboard(true);
      for (let i = 0; i < 4; i++) {
         const doc = {
            _id: uuidv4(),
            docTitle: reqdDocs[i].docName,
            image: {
               _type: 'image',
               asset: {
                  _type: 'reference',
                  _ref: imageAsset[i]?._id
               },
            },
         }

         Client.patch(userId)
            .setIfMissing({ expertDocs: [] })
            .insert('after', 'expertDocs[-1]', [doc])
            .commit()
            .then(() => {
               if (i === 3) {
                  const prevData = JSON.parse(localStorage.getItem("TempRoles"));
                  Client.patch(userId)
                     .set({
                        fullName: prevData.fullName,
                        role: 'expert',
                        age: prevData.age,
                        activeArea: prevData.district,
                        experience: prevData.experience
                     })
                     .commit()
                     .then(() => {
                        localStorage.removeItem('TempRoles');
                        setCreatingDashboard(false);
                        navigate("/");
                        window.location.reload();
                     })
                     .catch((error) => {
                        setCreatingDashboard(false);
                        setErrorWhileAddingRole(true);
                        setTimeout(() => {
                           setErrorWhileAddingRole(false);
                        }, 3000);
                        window.location.reload();
                     })
               }
            })
            .catch((error) => {
               setCreatingDashboard(false);
               setErrorWhileAddingRole(true);
               setTimeout(() => {
                  setErrorWhileAddingRole(false);
               }, 3000);
               window.location.reload();
            })
      }
   }

   function onFinish() {
      if (!currentImage && reqdDocs[index].docReq) {
         setAlertAttempt(true);
         setTimeout(() => {
            setAlertAttempt(false);
         }, 3000);
      } else {
         let newArray = imageAsset;
         newArray[index] = currentImage;
         setImageAsset(newArray);
         createRole();
      }
   }


   function recordAns() {
      if (!currentImage && reqdDocs[index].docReq) {
         setAlertAttempt(true);
         setTimeout(() => {
            setAlertAttempt(false);
         }, 3000);
      } else if (!currentImage && !reqdDocs[index].docReq) {
         setIndex(index + 1);
      } else {
         let newArray = imageAsset;
         newArray[index] = currentImage;
         setImageAsset(newArray);
         setCurrentImage(null);
         setIndex(index + 1);
      }
   }

   function CancelRoleAdding() {
      localStorage.removeItem("TempRoles");
      window.location.reload();
   }

   if (creatingDashboard) {
      return (
         <div className='flex flex-col items-center justify-center animate-fade-in'>
            <Roundspinner />
            <p className='text-center text-xl font-bold'>Creating your dashboard</p>
         </div>
      )
   }

   if (errorWhileAddingRole) {
      return (
         <div className='flex flex-col items-center justify-center animate-fade-in'>
            <p className='text-center text-xl text-red-500 font-bold'>Some Error has occured, Try Again!</p>
         </div>
      )
   }

   return (
      <div>
         <div className='flex flex-col'>
            <div className='p-2'>
               <div className='pb-3 border-b-2 border-gray-400 mb-3'>
                  <h1 className='text-xl font-bold mr-2'>Document {index + 1} : </h1>
                  <p className='text-xl'>{reqdDocs[index].docName}</p>
                  {reqdDocs[index].docReq && (
                     <p className='text-xs text-red-500'>*Required</p>
                  )}
               </div>
               {alertAttempt && (
                  <p className='text-center text-red-500 my-3'>Upload then proceed</p>
               )}
            </div>
            {wrongImageType && <p>wrong image type!!</p>}
            {!currentImage ? (
               loading ? <div className='h-full w-full flex items-center justify-center'><Roundspinner /></div> :
                  <label className='cursor-pointer my-3'>
                     <div className='flex flex-col h-full w-full items-center justify-center bg-mainColor rounded-2xl py-5 px-3'>
                        <div className='flex flex-col justify-center items-center'>
                           <p className='font-bold text-2xl'>
                              <AiOutlineCloudUpload />
                           </p>
                           <p className='text-lg'>Click to upload</p>
                        </div>
                        <p className='mt-32 text-gray-400'>
                           Use high-quality JPG, SVG, PNG, GIF less than 20MB
                        </p>
                     </div>
                     {/* Providing the input to the entire rectangle */}
                     <input type="file"
                        name='upload-image'
                        onChange={uploadImage}
                        className='w-0 h-0'
                     />
                  </label>
            ) : (<div className='relative h-5/6'>
               <img src={currentImage?.url} alt="uploaded-pic" className='h-full w-full rounded-lg' />
               <button
                  type='button'
                  className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                  onClick={() => setCurrentImage(null)}
               >
                  <MdDelete />
               </button>
            </div>
            )}

            <div className='flex justify-evenly'>
               {index !== 0 && (
                  <button
                     type='button'
                     onClick={() => {
                        setIndex(index - 1)
                        setCurrentImage(imageAsset[index - 1])
                     }}
                     className='py-1 px-3 outline-none bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
                  ><AiOutlineArrowLeft />Back</button>
               )}
               {(index === 3) ? (
                  <button
                     type='button'
                     onClick={onFinish}
                     className='py-1 px-3 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
                  >Finish and Save<AiOutlineArrowRight /></button>
               ) : (
                  <button
                     type='button'
                     onClick={CancelRoleAdding}
                     className='py-1 px-3 outline-none bg-red-500 hover:bg-red-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
                  >Cancel <RxCross2 /></button>
               )}

               {(index !== 3) && (
                  <button
                     type='button'
                     onClick={() => {
                        recordAns();
                     }}
                     className='py-1 px-3 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
                  >Next <AiOutlineArrowRight /></button>
               )}
            </div>
            <p className='text-xs underline-offset-1 mt-4 text-center'>***DO NOT REFRESH THE PAGE, DATA CAN DESTROY***</p>
         </div>
      </div>
   )
}
