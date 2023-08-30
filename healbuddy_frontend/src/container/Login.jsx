import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import introVideo from '../assets/nature.mp4';
import Googleauth from '../component/Googleauth';
import logoImage from '../assets/logo.jpg';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import Client from './Client';

export default function Login() {
  const navigate = useNavigate();
  const [trueUser, setTrueUser] = useState(true);
  const [userAuthorized, setUserAuthorized] = useState(false);

  const onFinish = async (values) => {
    const users = await Client.fetch(`*[_type == 'user']`);
    let flag = 0;


    users?.forEach(user => {
      if (user.email === values.email) {
        
        if (user.password === values.password) {
          flag = 1;
          setUserAuthorized(true);
          setTimeout(() => {
            setUserAuthorized(false);
            localStorage.clear();
            localStorage.setItem("HealBuddyAuth", user._id);
            navigate("/");
          }, 3000);
        }
      }
    });


    if (flag === 0) {
      setTrueUser(false);
      setTimeout(() => {
        setTrueUser(true);
      }, 3000);
    }
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

        {userAuthorized &&
          <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
            Succefully authorized to HealBuddy
          </div>
        }

        <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-blackOverlay'>

          <div className='p-5'>
            <img src={logoImage} alt='logo' className='w-20 h-20 mb-5 rounded-lg' />

          </div>
          <div className='py-6 px-8 bg-white rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6'>

            <h1 className='text-2xl font-bold'>Login here</h1>
            <p className='text-red-500 py-2 px-3 animate-slide-in transition-all duration-300 ease-in' >
              {(!trueUser && 'Enter valid credentials')}
            </p>


            <div>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <div className='my-3'>
                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                  </Form.Item>
                </div>
                <div>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                </div>

                <Form.Item>
                  <div className='flex'>
                    <div className='mr-3'>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className='max-sm:text-xs'>Remember me</Checkbox>
                      </Form.Item>
                    </div>

                    <Link className="login-form-forgot max-sm:text-xs" to={'/'}>
                      Forgot password?
                    </Link>
                  </div>
                </Form.Item>

                <Form.Item>
                  <div className='flex items-center pt-3'>
                    <Button type="default" htmlType="submit" className="login-form-button mr-3">
                      Log in
                    </Button>
                    <a href="/signup">register now!</a>
                  </div>
                </Form.Item>
              </Form>
            </div>

            <div className='flex flex-col items-center jus py-3 justify-center'>
              <h1>OR</h1>
              <Googleauth />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
