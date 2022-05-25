import React from 'react'
import image from '../img/image.png';

export default function Card() {
    return (
        <div className='flex w-full p-3 border border-gray-200 rounded-[10px]'>
                <div className='relative'>
                    <img src={image} className="w-[75px] h-[65px] rounded-[10px] object-cover" />
                </div>
            <div className='flex w-full justify-between'>
                <div className='flex flex-col justify-around items-start h-full mr-2'>
                    <div className='sans-bold font-bold text-xss text-[#2B2B2B]'>۵ صبح تا ۵ عصر</div>
                    <div className='text-[.6rem] mt-4 text-gray-500'>سیاگشت |‌ سایکو - سریزد</div>
                </div>
                <div className='flex flex-col justify-center h-full items-end'>
                    <div className='sans-bold font-bold text-xss text-[#2B2B2B]'>3,000,000 ت</div>
                    <div className='mt-[1rem] text-[.7rem] text-gray-500'>درحال انجام</div>
                </div>
            </div>
        </div>
    )
}
