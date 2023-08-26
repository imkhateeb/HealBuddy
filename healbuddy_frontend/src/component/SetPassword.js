import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import logoImage from '../assets/logo.jpg';
import introVideo from '../assets/nature.mp4';
import Client from '../container/Client';


import { Button, Checkbox, Form, Input, Select } from 'antd';
const { Option } = Select;

export default function SetPassword() {
   const navigate = useNavigate();
   const [docCreated, setDocCreated] = useState(false);
   const [errorFound, setErrorFound] = useState(false);
   const { JSONData } = useParams();
   const decodedData = decodeURIComponent(JSONData);
   const data = JSON.parse(decodedData);

   const onFinish = (values) => {

      const doc = {
         _id: data.sub,
         _type: 'user',
         fullName: data.name,
         email: data.email,
         password: values.password,
         gender: values.gender,
      }


      Client
         .createIfNotExists(doc)
         .then((data) => {
            console.log(data);
            setDocCreated(true);
            setTimeout(() => {
               setDocCreated(false);
               navigate("/");
            }, 3000);
         })
         .catch((error) => {
            console.log("Error while creating doc using google auth", error);
            setErrorFound(true);
         });



   };


   return (
      <div className='flex fle-start first-letter items-center flex-col h-screen'>
         <div className='relative h-full w-full'>
            <video
               src={introVideo}
               type="video/mp4"
               loop
               controls={false}
               muted
               autoPlay
               className='w-full h-full object-cover'
            />
            {docCreated &&
               <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
                  Succefully registered to HealBuddy
               </div>
            }{errorFound &&
               <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-red-400 text-red-500 text-center shadow-red-400 shadow-inner animate-slide-in '>
                  Error occured while registering, Try Again!
               </div>}

            <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-blackOverlay'>

               <div className='p-5'>
                  <img src={logoImage} alt='logo' className='w-20 h-20 mb-5 rounded-lg' />

               </div>
               <div className='py-6 px-8 bg-white rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6'>

                  <h1 className='text-2xl font-bold'>Set Password</h1>
                  <p className='text-red py-2 px-3 animate-bounce transition-all duration-300 ease-in' >
                     {/* Warning messages */}
                  </p>


                  <div>
                     <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true, }}
                        onFinish={onFinish}
                     >

                        <Form.Item
                           name="gender"
                           label="Gender"
                           rules={[
                              {
                                 required: true,
                                 message: 'Please select gender!',
                              },
                           ]}
                        >
                           <Select placeholder="select your gender">
                              <Option value="male">Male</Option>
                              <Option value="female">Female</Option>
                              <Option value="other">Other</Option>
                           </Select>
                        </Form.Item>

                        <Form.Item
                           name="password"
                           label="Password"
                           rules={[
                              {
                                 required: true,
                                 message: 'Please input your password!',
                              },
                              ({ getFieldValue }) => ({
                                 validator(_, value) {
                                    if (!value || value.length >= 6) {
                                       return Promise.resolve();
                                    } return Promise.reject(new Error('At least 6 character password!'));
                                 }
                              })
                           ]}
                           hasFeedback
                        >
                           <Input.Password />
                        </Form.Item>

                        <Form.Item
                           name="confirm"
                           label="Confirm Password"
                           dependencies={['password']}
                           hasFeedback
                           rules={[
                              {
                                 required: true,
                                 message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                 validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                       return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                 },
                              }),
                           ]}
                        >
                           <Input.Password />
                        </Form.Item>

                        <Form.Item>
                           <div className='flex justify-between'>
                              <div className='mr-3'>
                                 <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox className='max-sm:text-xs'>Remember me</Checkbox>
                                 </Form.Item>
                              </div>
                              <div>
                                 <Form.Item name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                       {
                                          validator: (_, value) =>
                                             value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                       },
                                    ]}>
                                    <Checkbox className='max-sm:text-xs'>I have read the <Link href="">agreement</Link></Checkbox>
                                 </Form.Item>
                              </div>
                           </div>
                        </Form.Item>

                        <Form.Item>
                           <div className='flex items-center pt-3'>
                              <Button type="default" htmlType="submit" className="login-form-button mr-3">
                                 Confirm
                              </Button>
                           </div>
                        </Form.Item>
                     </Form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
