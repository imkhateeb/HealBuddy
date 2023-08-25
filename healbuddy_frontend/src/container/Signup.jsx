import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import introVideo from '../assets/nature.mp4';
import Googleauth from '../component/Googleauth';
import { Button, Checkbox, Form, Input, Radio, Select, } from 'antd';
const { Option } = Select;

export default function Signup() {
  
  
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [form] = Form.useForm();

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={introVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />

        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div>
            {/* Logo */}
          </div>
          <div className='py-6 px-8 bg-white rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6'>

            <h1 className='text-black text-2xl font-bold'>Signup here</h1>
            <p className='text-red py-2 px-3 animate-bounce transition-all duration-300 ease-in' >
              {/* Warning messages */}
            </p>

            <div className='w-full flex justify-center'>
              {!localStorage.getItem('HealBuddyAuth') ? (
                <Form
                  className='w-full'
                  labelCol={{ span: 15, }}
                  wrapperCol={{ span: 25, }}
                  layout="vertical"
                  disabled={componentDisabled}
                >
                  <Form.Item label="Full Name">
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
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

                  {/* <Form.Item
                  name="userName"
                  label="Username"
                  tooltip="No spaces!, No special character except: _,@,$"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                      whitespace: true,
                    },
                    () => ({
                      validator(_, value) {
                        const pattern = /^[a-zA-Z0-9$_@]+$/;
                        if (pattern.test(value) && value.length >= 5) {
                          return Promise.resolve();
                        } else {
                          if ( value.includes(" ")){
                            return Promise.reject('Username will not contain spaces!');
                          } else if (value.length < 5) {
                            return Promise.reject('Username contains atleast 5 characters!');
                          } else {
                            return Promise.reject('Invalid username format! (specail character other than $,_,@ are not allowed');
                          }
                        }
                      },
                    }),
                  ]}
                >
                  <Input />
                </Form.Item> */}

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
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                      },
                    ]}
                  >
                    <Checkbox className='max-sm:text-xs my-3'>
                      I have read the <Link href="">agreement</Link>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button className='mr-5 max-sm:mr-2 max-sm:px-2' htmlType="submit">
                      Register
                    </Button>
                    <Link className='text-sm' to='/login'>Already a user?</Link>
                  </Form.Item>
                  {/* ANTD */}
                  <div className='flex flex-col items-center justify-center'><h1 className='mx-3 my-1'>OR</h1>
                    <Googleauth />
                  </div>
                </Form>
              ) : (
                setComponentDisabled(true)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
