import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/nature.mp4'
import Googleauth from '../component/Googleauth';


import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


export default function Login() {

  const onFinish = (values: any) => {
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
            {/* Logo */}
          </div>
          <div className='p-10 bg-white rounded-lg w-1/3'>
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
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
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
                <Form.Item>
                <div className='flex justify-between'>

                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </div>
                </Form.Item>

                <Form.Item>
                <div className='flex justify-between'>

                  <Button type="default" htmlType="submit" className="login-form-button">
                    Log in
                  </Button><a href="/signup">register now!</a>
                </div>
                </Form.Item>
              </Form>
            </div>

            <div>
              <Googleauth />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
