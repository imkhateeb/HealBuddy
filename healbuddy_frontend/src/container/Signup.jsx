import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import introVideo from '../assets/nature.mp4';
import Googleauth from '../component/Googleauth';
import { Button, Checkbox, Form, Input, Select, } from 'antd';
import logoImage from '../assets/logo.jpg';
import { v4 as uuidv4 } from 'uuid';
import Client from './Client';
import SendEmail from '../utils/SendEmail';


const { Option } = Select;
function generateRandomSixDigitNumber() {
  const min = 100000; // Minimum value for a 6-digit number
  const max = 999999; // Maximum value for a 6-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomSixDigitNumber = generateRandomSixDigitNumber();


export default function Signup() {
  const navigate = useNavigate();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isGoingToRegister, setIsGoingToRegister] = useState(false);
  const [randomEntered, setRandomEntered] = useState("");
  const [formData, setFormData] = useState(null);
  const [isWrongOTP, setIsWrongOTP] = useState(false);
  const [docCreated, setDocCreated] = useState(false);

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const { fullName, email, password, gender } = values;
    const uuid = uuidv4();
    const doc = {
      _id: uuid,
      _type: 'user',
      fullName,
      email,
      password,
      gender,
    }

    let flag = 0;
    const users = await Client.fetch(`*[_type == 'user']`);
    users?.forEach(user => {
      if (user.email === values.email) {
        flag = 1;
        setIsEmailExist(true);
        setTimeout(() => {
          setIsEmailExist(false);
        }, 3000);
        return;
      }
    });

    if (flag === 0) {
      setFormData(doc);
      SendEmail(values.fullName, values.email, `OTP is : ${randomSixDigitNumber}`);
      setIsGoingToRegister(true);
    }
  }

  const verifyAndSave = () => {
    if (randomEntered == randomSixDigitNumber) {
      !isEmailExist && Client
        .createIfNotExists(formData)
        .then((data) => {
          console.log(data);
        })
        .catch((console.error));

      setDocCreated(true);
      setTimeout(() => {
        setDocCreated(false);
        localStorage.clear();
        localStorage.setItem("HealBuddyAuth", formData._id);
        navigate("/");
      }, 3000);

    } else {
      setIsWrongOTP(true);
      setIsGoingToRegister(false);
      setTimeout(() => {
        setIsWrongOTP(false);
        setIsGoingToRegister(true);
      }, 3000);
    }
  }


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

        {/* Resolve this issue */}
        {docCreated &&
          <div className='z-10 fixed m-auto top-4 bg-white py-2 px-3 rounded-lg border-2 border-green-400 text-green-500 text-center shadow-green-400 shadow-inner animate-slide-in ' >
            Succefully registered to HealBuddy
          </div>
        }
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div>
            <img src={logoImage} alt='logo' className='w-20 h-20 mb-2 max-sm:h-16 max-sm:w-16 rounded-lg' />
          </div>
          <div className='py-4 px-8 bg-white rounded-lg w-1/2 lg:w-1/3 max-md:w-5/6  max-sm:px-4 max-sm:py-2 max-sm:pb-3 max-md:py-4 max-md:px-6'>

            <h1 className='text-black text-2xl font-bold text-center'>Signup here</h1>
            <div className='text-red-500 p-2 animate-fade-in transition-all duration-300 ease-in flex flex-col items-center justify-center'>
              {componentDisabled && <p>Already login or CLEAR CATCH!!</p>}
              {isEmailExist && <p>Email already exists!!</p>}
              {isGoingToRegister && <p>Enter the OTP</p>}
              {isWrongOTP && <p>Wrong OTP entered, check again and enter</p>}
            </div>

            <div className='w-full flex justify-center'>
              {!localStorage.getItem('HealBuddyAuth') ? (
                <Form
                  className='w-full'
                  labelCol={{ span: 15, }}
                  wrapperCol={{ span: 25, }}
                  layout="vertical"
                  disabled={componentDisabled}
                  onFinish={onFinish}
                  scrollToFirstError
                  name='register'
                  form={form}
                >
                  <Form.Item
                    name="fullName"
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || value.replace("  ", "").length >= 4) {
                            return Promise.resolve();
                          } return Promise.reject(new Error('At least 4 character(without spaces) required!'));
                        }
                      })
                    ]}
                  >
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


                  {!isGoingToRegister ?
                    <Form.Item>
                      <Button className='mr-5 max-sm:mr-2 max-sm:px-2' htmlType="submit">
                        Send OTP
                      </Button>
                      <Link className='text-sm' to='/login'>Already a user?</Link>
                    </Form.Item>
                    :
                    <Form.Item>
                      <Button className='mr-5 max-sm:mr-2 max-sm:px-2' htmlType="submit">
                        Send OTP Again
                      </Button>
                      <Link className='text-sm' to='/login'>Already a user?</Link>
                    </Form.Item>
                  }


                  {isGoingToRegister &&
                    <div className='flex flex-col'>
                      <p
                        className='text-blue text-center animate-slide-in'
                      >An OTP is sent to {formData.email}</p>
                      <div className='flex bg-mainColor p-2 rounded-lg'>
                        <input type='text' onChange={(e) => setRandomEntered(e.target.value)} value={randomEntered}
                          className='outline-none bg-white rounded-lg mr-4 p-1 px-3 w-20 border-2 border-gray-400'
                        />
                        <button type='button' onClick={verifyAndSave}
                          className='py-1 px-2 text-white bg-blue-400 outline-none rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in cursor-pointer ' >Confirm</button>
                      </div>
                    </div>
                  }

                  {!localStorage.getItem("HealBuddyAuth") &&
                    <div className='flex flex-col items-center justify-center'><h1 className='mx-3 my-1'>OR</h1>
                      <Googleauth />
                    </div>
                  }
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