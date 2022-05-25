import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import photoProfile from '../img/9.jpg';
export default function EditProfile() {
    return (
        <div className='w-full'>
            <div className='flex justify-between w-full py-4 px-6 border-b border-gray-200 items-center'>
                <button className='relative'>
                    <svg className='w-6 h-6' viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8065 14.38C12.5118 14.671 12.5088 15.1459 12.7999 15.4406C13.0909 15.7353 13.5658 15.7383 13.8605 15.4472L12.8065 14.38ZM20.8605 8.53361C21.1552 8.24254 21.1582 7.76768 20.8671 7.47297C20.576 7.17826 20.1012 7.17531 19.8065 7.46638L20.8605 8.53361ZM19.8065 8.53361C20.1012 8.82468 20.576 8.82173 20.8671 8.52702C21.1582 8.23231 21.1552 7.75745 20.8605 7.46638L19.8065 8.53361ZM13.8605 0.552799C13.5658 0.261731 13.091 0.264681 12.7999 0.559387C12.5088 0.854095 12.5118 1.32896 12.8065 1.62003L13.8605 0.552799ZM20.3335 8.74999C20.7477 8.74999 21.0835 8.41421 21.0835 7.99999C21.0835 7.58578 20.7477 7.24999 20.3335 7.24999V8.74999ZM1.66683 7.24999C1.25261 7.24999 0.916828 7.58578 0.916828 7.99999C0.916828 8.41421 1.25261 8.74999 1.66683 8.74999V7.24999ZM13.8605 15.4472L20.8605 8.53361L19.8065 7.46638L12.8065 14.38L13.8605 15.4472ZM20.8605 7.46638L13.8605 0.552799L12.8065 1.62003L19.8065 8.53361L20.8605 7.46638ZM20.3335 7.24999L1.66683 7.24999V8.74999L20.3335 8.74999V7.24999Z" fill="#2B2B2B" />
                    </svg>
                </button>
                <div className='relative sans-bolish text-lg'>تایید مشخصات</div>
                <div></div>
            </div>
            <div className='px-6 py-6 w-full'>
                <p className='text-sm sans-bold font-bold'>مشخصات فردی</p>
                <ul className='w-full mt-4 grid grid-cols-2 gap-x-2'>
                    <div>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نام :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>کاظم</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نام خانوادگی :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>نعمتی</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نام پدر :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>کریم</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>وضعیت نظام وضیفه :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>معافیت</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>کد ملی :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>۴۴۲۰۵۴۱۲۳۴</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نوع اشغال :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>سایز</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>ایمیل :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>-</span>
                        </li>
                        <p className='text-sm sans-bold font-bold mt-4'>اطلاعات گواهینامه</p>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>تاریخ صدور گواهینامه :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>۱۳۹۰/۱۲/۲۱</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نوع گواهینامه :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>پایه دوم</span>
                        </li>
                        <p className='text-sm sans-bold font-bold mt-4'>مشخصات خودرو</p>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نوع پلاک :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>عمومی</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>مدل خودرو :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>اتوبوس اسکانیا</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>سال ساخت :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>عمومی</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نوع پلاک :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>۱۳۹۵</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>کد ملی :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>۴۴۲۰۵۴۱۲۳۴</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>تاریخ انقضای معاینه فنی :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>۱۴۰۱/۰۸/۰۵</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>نام مالک خودرو :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>اصغر زارع مهریزی</span>
                        </li>
                        <p className='text-sm sans-bold font-bold mt-4'>اطلاعات گواهینامه</p>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>شهر محل سکونت:</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>یزد</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>شماره تلفن پایه ثابت :</span>
                            <span className='text-[#2b2b2b] mt-2 sans-bold'>پایه دوم</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>آدرس محل سکونت :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>بلوار عابدی کوچه زیتون</span>
                        </li>
                    </div>
                    <div className='w-full'>
                        <li className='flex text-sm flex-col items-start justify-start'>
                            <img className='w rounded-2xl' src={photoProfile} />
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>جنیست :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>مرد</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>تاریخ تولد :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>۱۳۶۰/۱۲/۰۲</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>شماره شناسنامه :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>۴۴۲۰۵۴۱۲۳۴</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>وضعیت تاهل :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>مجرد</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>شماره تلفن همراه :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>۰۹۱۲۳۴۵۶۷۸۹</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>کد معرف :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>-</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-20'>
                            <span className='text-[#5d5c5c]'>اعتبار گواهینامه :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold'>۱۰ سال</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>شماره پلاک :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>۵۴ایران۷۳۴ع۲۴</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>رنگ :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>سفید</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>تاریخ انقضای شخص ثالث :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>۱۳۶۰/۱۲/۰۲</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>مالک خودرو هستید ؟ :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>خیر</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>کد ملی مالک خودرو :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>۴۴۳۲۳۴۵۶۶۲</span>
                        </li>
                        <li className='flex text-sm flex-col items-start justify-start mt-4'>
                            <span className='text-[#5d5c5c]'>کد پستی :</span>
                            <span className='text-[#2b2b2b] mt-2 font-bold text-left'>۱۰ سال</span>
                        </li>
                    </div>
                </ul>
                <div className='mt-8 flex justify-center items-center w-full space-x-3'>
                <div></div>
                    <Link to="steps/1" className='btn-login text-xs w-3/6 flex justify-center items-center text-white px-0'>اطلاعات صحیح است</Link>
                    <button className='btn-login text-xs w-3/6 flex justify-center items-center text-white px-0 bg-[#EF424C]'>اطلاعات صحیح است</button>
                </div>
            </div>
        </div>
    )
}
