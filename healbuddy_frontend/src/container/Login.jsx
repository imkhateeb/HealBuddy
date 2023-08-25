import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/nature.mp4'
import Googleauth from '../component/Googleauth';
import logoImage from '../assets/logo.jpg';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


export default function Login() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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

        <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-blackOverlay'>

          <div className='p-5'>
          <img src={logoImage} alt='logo' className='w-20 h-20 mb-5 rounded-lg' />

          </div>
          <div className='py-6 px-8 bg-white rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6'>

            <h1 className='text-2xl font-bold'>Login here</h1>
            <p className='text-red py-2 px-3 animate-bounce transition-all duration-300 ease-in' >
              {/* Warning messages */}
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
                    name="username"
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

                    <a className="login-form-forgot max-sm:text-xs" href="">
                      Forgot password?
                    </a>
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
