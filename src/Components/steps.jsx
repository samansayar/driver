import React , {useState} from 'react'
import Started from '../img/Finances.svg';
import Startedd from '../img/Delivery.png';
import cover from '../img/cartoon-started.png';

export default function Steps({stepss}) {

  const [lvl, setlvl] = useState(1);

  return (
    <>
      {lvl === 1 ? (
        <div className='w-full'>
          <div className='flex justify-between w-full py-4 px-6 border-b border-gray-200 items-center'>
            <button onClick={() => stepss(2)} className='relative'>
              <svg className='w-6 h-6' viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8065 14.38C12.5118 14.671 12.5088 15.1459 12.7999 15.4406C13.0909 15.7353 13.5658 15.7383 13.8605 15.4472L12.8065 14.38ZM20.8605 8.53361C21.1552 8.24254 21.1582 7.76768 20.8671 7.47297C20.576 7.17826 20.1012 7.17531 19.8065 7.46638L20.8605 8.53361ZM19.8065 8.53361C20.1012 8.82468 20.576 8.82173 20.8671 8.52702C21.1582 8.23231 21.1552 7.75745 20.8605 7.46638L19.8065 8.53361ZM13.8605 0.552799C13.5658 0.261731 13.091 0.264681 12.7999 0.559387C12.5088 0.854095 12.5118 1.32896 12.8065 1.62003L13.8605 0.552799ZM20.3335 8.74999C20.7477 8.74999 21.0835 8.41421 21.0835 7.99999C21.0835 7.58578 20.7477 7.24999 20.3335 7.24999V8.74999ZM1.66683 7.24999C1.25261 7.24999 0.916828 7.58578 0.916828 7.99999C0.916828 8.41421 1.25261 8.74999 1.66683 8.74999V7.24999ZM13.8605 15.4472L20.8605 8.53361L19.8065 7.46638L12.8065 14.38L13.8605 15.4472ZM20.8605 7.46638L13.8605 0.552799L12.8065 1.62003L19.8065 8.53361L20.8605 7.46638ZM20.3335 7.24999L1.66683 7.24999V8.74999L20.3335 8.74999V7.24999Z" fill="#2B2B2B" />
              </svg>
            </button>
            <div className='relative sans-bolish'></div>
            <div></div>
          </div>
          <div className='relative w-full flex justify-center items-center'>
            <img alt='coverstarted' src={cover} className='absolute inset-0 w-full h-20 object-cover' />
            <div className='mt-8 text-xss text-center text-[#2b2b2b] font-bold sans-bold w-3/6'>
              سادگی نامفهوم از صنعت چاپ
              <br />
              لورم ایپسوم متن ساختکی با تولید
            </div>
          </div>
          <div className='bg-white w-full h-full'>
            <img alt='coverstarted' src={Started} className='bg-white w-full h-full' />
          </div>
          <div className='px-8 pb-10 w-full flex flex-col justify-center items-center'>
            <img alt='coverstarted' src={cover} className='absolute bottom-0 left-0 right-0 w-full h-36 object-cover' />
            <div className='mt-1 text-xss text-right text-gray-600 font-bold'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچه که لازم است.
            </div>
            <div className='mt-8 flex items-center justify-center space-x-1 w-full'>
              <div></div>
              <span className='px-1 py-[2px] bg-gray-400 rounded-full'></span>
              <span className='px-2 py-[2px] bg-cover rounded-full'></span>
            </div>
            <button onClick={() => setlvl(2)} className='z-50 mt-10 btn-login text-xs flex justify-center items-center text-white'>تایید</button>

          </div>
        </div>

      ) : (
      <>
        <div className='w-full'>
          <div className='flex justify-between w-full py-4 px-6 border-b border-gray-200 items-center'>
            <button onClick={() => setlvl(2)} className='relative'>
              <svg className='w-6 h-6' viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8065 14.38C12.5118 14.671 12.5088 15.1459 12.7999 15.4406C13.0909 15.7353 13.5658 15.7383 13.8605 15.4472L12.8065 14.38ZM20.8605 8.53361C21.1552 8.24254 21.1582 7.76768 20.8671 7.47297C20.576 7.17826 20.1012 7.17531 19.8065 7.46638L20.8605 8.53361ZM19.8065 8.53361C20.1012 8.82468 20.576 8.82173 20.8671 8.52702C21.1582 8.23231 21.1552 7.75745 20.8605 7.46638L19.8065 8.53361ZM13.8605 0.552799C13.5658 0.261731 13.091 0.264681 12.7999 0.559387C12.5088 0.854095 12.5118 1.32896 12.8065 1.62003L13.8605 0.552799ZM20.3335 8.74999C20.7477 8.74999 21.0835 8.41421 21.0835 7.99999C21.0835 7.58578 20.7477 7.24999 20.3335 7.24999V8.74999ZM1.66683 7.24999C1.25261 7.24999 0.916828 7.58578 0.916828 7.99999C0.916828 8.41421 1.25261 8.74999 1.66683 8.74999V7.24999ZM13.8605 15.4472L20.8605 8.53361L19.8065 7.46638L12.8065 14.38L13.8605 15.4472ZM20.8605 7.46638L13.8605 0.552799L12.8065 1.62003L19.8065 8.53361L20.8605 7.46638ZM20.3335 7.24999L1.66683 7.24999V8.74999L20.3335 8.74999V7.24999Z" fill="#2B2B2B" />
              </svg>
            </button>
            <div className='relative sans-bolish'></div>
            <div></div>
          </div>
          <div className='relative w-full flex justify-center items-center'>
            <img alt='coverstarted' src={cover} className='absolute inset-0 w-full h-20 object-cover' />
            <div className='mt-8 text-xss text-center text-[#2b2b2b] font-bold sans-bold w-3/6'>
              سادگی نامفهوم از صنعت چاپ
              <br />
              لورم ایپسوم متن ساختکی با تولید
            </div>
          </div>
          <div className='bg-white w-full h-full'>
            <img alt='coverstarted' src={Startedd} className='bg-white w-full h-full' />
          </div>
          <div className='px-8 pb-10 w-full flex flex-col justify-center items-center'>
            <img alt='coverstarted' src={cover} className='absolute bottom-0 left-0 right-0 w-full h-36 object-cover' />
            <div className='mt-1 text-xss text-right text-gray-600 font-bold'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچه که لازم است.
            </div>
            <div className='mt-8 flex items-center justify-center space-x-1 w-full'>
              <div></div>
              <span className='px-1 py-[2px] bg-gray-400 rounded-full'></span>
              <span className='px-2 py-[2px] bg-cover rounded-full'></span>
            </div>
            <button onClick={() => setlvl(1)} className='z-50 mt-10 btn-login text-xs flex justify-center items-center text-white'>تایید</button>

          </div>
        </div>
      </>
      )}
    </>
  )
}
