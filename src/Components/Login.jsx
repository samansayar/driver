import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cover from '../img/carton-vector.png';
import logo from '../img/logo.svg';
import Infomation from './Infomation';
import Stepss from './steps';

export default function Login() {
  const [steps, setsteps] = useState(3);
  return (
    <div className='w-full h-full'>
      {steps === 1 && (
        <>
          <div className='bg-cover w-full absolute mix-blend-multiply -left-0 right-0 -top-[21px] z-10 h-[509px] '>
            <img src={cover} alt="cover" className="w-full h-full" />
            <div className='absolute inset-0 flex items-center justify-center w-full h-full'>
              <div className='coverlogo z-50 flex items-center justify-center w-[94px] h-[94px] bg-white rounded-xl'><img src={logo} alt='logo' /></div>
            </div>
          </div>
          <div className='relative w-full z-50 h-full'>
            <div className='w-full flex justify-center items-center absolute top-[28rem] left-0 right-0'>
              <div className='bg-white rounded-t-2xl w-full z-30'>
                <p className='text-black text-[16px] font-extrabold sans-bold text-center py-4'>ورود به پنل رانندگان</p>
              </div>
            </div>
          </div>
          <div className='relative translate-y-[31rem] px-6 py-4 w-full'>
            <p className='text-[12px] text-[#2b2b2b] sans-bold text-right'>
              شماره تلفن همراه خود را وارد کنید تا کد فعالسازی برای شما ارسال شود.
            </p>
            <div className='mt-6 relative z-50 flex justify-center items-center flex-col'>
              <input type='text' className='focus:outline-none py-5 sans-bold text-xs rounded-[10px] px-4 w-full border border-gray-300'
                placeholder='شماره تلفن همراه'
              />
              <button onClick={() => setsteps(2)} className='mt-4 btn-login text-xs flex justify-center items-center text-white'>تایید</button>
            </div>
            <div className='text-xs py-4 text-gray-700 flex w-full justify-center items-center text-center'>با ثبت نام در کال باس
              <Link to="#" className='text-[#0084FF] mx-1'>شرایط و قوانین</Link>
              میپذیرم.</div>
          </div>
        </>
      )}
      {steps === 2 &&(
        <>
          <Infomation steps={setsteps}/>
        </>
      )}
      {steps === 3 &&(
        <>
          <Stepss stepss={setsteps}/>
        </>
      )}
    </div>
  )
}
