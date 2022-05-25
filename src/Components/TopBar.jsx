import React, { useState } from 'react'
import profile from '../img/16.png';
export default function TopBar() {
    const [openmenu, setopenmenu] = useState(false)
    return (
        <div>
            <div className='flex justify-between w-full py-3 px-4 border-b border-[#EAE9F0] items-center'>
                <button onClick={() => setopenmenu(!openmenu)} className='relative'>
                    <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10.5833C5.58579 10.5833 5.25 10.919 5.25 11.3333C5.25 11.7475 5.58579 12.0833 6 12.0833V10.5833ZM24.6667 12.0833C25.0809 12.0833 25.4167 11.7475 25.4167 11.3333C25.4167 10.919 25.0809 10.5833 24.6667 10.5833V12.0833ZM9 15.9166C8.58579 15.9166 8.25 16.2524 8.25 16.6666C8.25 17.0808 8.58579 17.4166 9 17.4166V15.9166ZM25 17.4166C25.4142 17.4166 25.75 17.0808 25.75 16.6666C25.75 16.2524 25.4142 15.9166 25 15.9166V17.4166ZM16 21.2499C15.5858 21.2499 15.25 21.5857 15.25 21.9999C15.25 22.4141 15.5858 22.7499 16 22.7499V21.2499ZM25.3333 22.7499C25.7475 22.7499 26.0833 22.4141 26.0833 21.9999C26.0833 21.5857 25.7475 21.2499 25.3333 21.2499V22.7499ZM6 12.0833H24.6667V10.5833H6V12.0833ZM9 17.4166H25V15.9166H9V17.4166ZM16 22.7499H25.3333V21.2499H16V22.7499Z" fill="#2B2B2B" />
                        <circle cx="32" cy="4" r="4" fill="#EF424C" />
                    </svg>
                </button>
                <div className='relative text-xss font-thin text-gray-400'>پنجشنبه ۱۳ بهمن</div>
                <div className='text-xss text-gray-500'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0011 9.5293C13.1678 9.5293 11.8251 11.176 10.4838 14.1426C9.69908 16.1724 9.30899 18.3333 9.33442 20.5093C11.2717 21.9216 13.6037 22.6898 16.0011 22.7053C18.3985 22.6898 20.7305 21.9216 22.6678 20.5093C22.6936 18.3334 22.304 16.1725 21.5198 14.1426C20.1771 11.176 18.8344 9.5293 16.0011 9.5293Z" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.7791 25.5052C20.1127 25.2595 20.1839 24.7901 19.9383 24.4565C19.6927 24.123 19.2232 24.0517 18.8897 24.2973L19.7791 25.5052ZM13.1125 24.2973C12.7789 24.0517 12.3094 24.123 12.0638 24.4565C11.8182 24.7901 11.8895 25.2595 12.223 25.5052L13.1125 24.2973ZM14.8904 6.58325C14.4762 6.58325 14.1404 6.91904 14.1404 7.33325C14.1404 7.74747 14.4762 8.08325 14.8904 8.08325V6.58325ZM17.1117 8.08325C17.5259 8.08325 17.8617 7.74747 17.8617 7.33325C17.8617 6.91904 17.5259 6.58325 17.1117 6.58325V8.08325ZM18.8897 24.2973C17.1717 25.5625 14.8304 25.5625 13.1125 24.2973L12.223 25.5052C14.4699 27.1599 17.5322 27.1599 19.7791 25.5052L18.8897 24.2973ZM14.8904 8.08325H17.1117V6.58325H14.8904V8.08325Z" fill="#2B2B2B" />
                        <circle cx="28" cy="4" r="4" fill="#EF424C" />
                    </svg>
                </div>
            </div>

            {openmenu && (
                <div className='z-50 bg-white fixed inset-0 w-full h-screen overflow-y-scroll'>
                    <div className='flex justify-between w-full py-4 px-4 border-b border-[#EAE9F0] items-center'>
                        <button onClick={() => setopenmenu(!openmenu)} className='relative'>
                            <svg width="24" height="21" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8065 14.3797C12.5118 14.6708 12.5088 15.1456 12.7999 15.4404C13.0909 15.7351 13.5658 15.738 13.8605 15.4469L12.8065 14.3797ZM20.8605 8.53336C21.1552 8.2423 21.1582 7.76743 20.8671 7.47272C20.576 7.17802 20.1012 7.17507 19.8065 7.46614L20.8605 8.53336ZM19.8065 8.53336C20.1012 8.82443 20.576 8.82148 20.8671 8.52678C21.1582 8.23207 21.1552 7.75721 20.8605 7.46614L19.8065 8.53336ZM13.8605 0.552555C13.5658 0.261487 13.091 0.264437 12.7999 0.559143C12.5088 0.85385 12.5118 1.32871 12.8065 1.61978L13.8605 0.552555ZM20.3335 8.74975C20.7477 8.74975 21.0835 8.41396 21.0835 7.99975C21.0835 7.58554 20.7477 7.24975 20.3335 7.24975V8.74975ZM1.66683 7.24975C1.25261 7.24975 0.916828 7.58554 0.916828 7.99975C0.916828 8.41396 1.25261 8.74975 1.66683 8.74975V7.24975ZM13.8605 15.4469L20.8605 8.53336L19.8065 7.46614L12.8065 14.3797L13.8605 15.4469ZM20.8605 7.46614L13.8605 0.552555L12.8065 1.61978L19.8065 8.53336L20.8605 7.46614ZM20.3335 7.24975L1.66683 7.24975V8.74975L20.3335 8.74975V7.24975Z" fill="#2B2B2B" />
                            </svg>

                        </button>
                        {/* <div className='relative text-xss font-thin text-gray-400'>پنجشنبه ۱۳ بهمن</div> */}
                        <div className='text-md sans-bolish text-blak'>
                            لوگوی کال باس
                        </div>
                        <div></div>
                    </div>
                    <div className='p-6 w-full'>
                        <div className='flex w-full items-center jsutify-center flex-col'>
                            <img src={profile} className='w-[75px] h-[75px]' />
                            <p className='text-sm mt-2 text-blak'>کامران نعمتی منفرد</p>
                            <small className='text-xss mt-1 text-gray-400'>۰۹۱۲۳۴۵۶۷۸۹</small>
                        </div>
                        <div className='mt-2'>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.6802 4.56008C18.3468 3.00008 16.7601 1.66675 15.0001 1.66675C13.2401 1.66675 11.6135 3.00008 10.3068 4.56008C9.35002 5.72269 8.86084 7.20017 8.9348 8.70406C9.00876 10.208 9.64054 11.6303 10.7068 12.6934C11.2692 13.2574 11.9373 13.7049 12.6728 14.0102C13.4084 14.3155 14.197 14.4727 14.9935 14.4727C15.7899 14.4727 16.5785 14.3155 17.3141 14.0102C18.0497 13.7049 18.7178 13.2574 19.2801 12.6934V12.6934C20.3519 11.6334 20.9875 10.2101 21.0616 8.70451C21.1356 7.19887 20.6428 5.72017 19.6802 4.56008Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M23.8667 19.4001H6.13341C3.66654 19.4001 1.66675 21.3999 1.66675 23.8668C1.66675 26.3337 3.66654 28.3335 6.13341 28.3335H23.8667C26.3336 28.3335 28.3334 26.3337 28.3334 23.8668C28.3334 21.3999 26.3336 19.4001 23.8667 19.4001Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M10.3068 4.56006C9.35002 5.72267 8.86084 7.20015 8.9348 8.70404C9.00876 10.2079 9.64054 11.6303 10.7068 12.6934V12.6934" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M6.12012 28.3335H23.8534C25.0381 28.3335 26.1742 27.8629 27.0118 27.0252C27.8495 26.1876 28.3201 25.0515 28.3201 23.8668V23.8668C28.3201 22.6822 27.8495 21.5461 27.0118 20.7084C26.1742 19.8708 25.0381 19.4001 23.8534 19.4001" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                    <div className='mr-[14px] text-blak text-xss'>پروفایل</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.66688 15.8345C2.65925 14.6166 2.98584 13.4199 3.61113 12.3745C4.23643 11.3291 5.13652 10.475 6.21355 9.90501L15.8935 4.77498C16.6674 4.36531 17.5145 4.11204 18.3863 4.02961C19.2582 3.94719 20.1378 4.03724 20.9748 4.29462C21.8118 4.552 22.5899 4.97167 23.2646 5.52964C23.9393 6.08762 24.4973 6.77295 24.9069 7.54653L25.9069 9.43864C26.0512 9.68888 26.1717 9.9521 26.2669 10.2248" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M22.6667 9.17212H9.33342C5.65152 9.17212 2.66675 12.155 2.66675 15.8345V21.3376C2.66675 25.0171 5.65152 28 9.33342 28H22.6667C26.3486 28 29.3334 25.0171 29.3334 21.3376V15.8345C29.3334 12.155 26.3486 9.17212 22.6667 9.17212Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M19.6269 18.5928H12.3735" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>

                                    <div className='mr-[14px] text-blak text-xss'>کیف پول</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='text-xss px-1 bg-[#EAE9F0] text-blak flex items-center justify-center w-[75px] h-[30px] rounded-[10px] ml-6'>
                                        ۳۸۰،۰۰۰ ت
                                    </div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6667 5.33325H9.33342C5.65152 5.33325 2.66675 8.31802 2.66675 11.9999V19.9999C2.66675 23.6818 5.65152 26.6666 9.33342 26.6666H22.6667C26.3486 26.6666 29.3334 23.6818 29.3334 19.9999V11.9999C29.3334 8.31802 26.3486 5.33325 22.6667 5.33325Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M9.2002 12.1199L10.6402 13.2265C12.1925 14.4256 14.0987 15.076 16.0602 15.076C18.0217 15.076 19.9278 14.4256 21.4802 13.2265L22.8135 12.1732" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>


                                    <div className='mr-[14px] text-blak text-xss'>پیام ها</div>
                                </div>
                                <div className='flex items-center'>
                                    <div className='text-xss px-1 bg-[#EAE9F0] text-blak flex items-center justify-center w-[75px] h-[30px] rounded-[10px] ml-6'>
                                        ۲ پیام جدید
                                    </div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.833 16.4472H9.49927C8.94698 16.4472 8.49927 15.9995 8.49927 15.4472V13.0022C8.49927 12.4499 8.94698 12.0022 9.49927 12.0022H11.833" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M15.1668 16.4473H12.833C12.2807 16.4473 11.833 15.9996 11.833 15.4473V10.7798C11.833 10.2275 12.2807 9.77979 12.833 9.77979H15.1668" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M15.1667 8.55713C15.1667 8.00484 15.6145 7.55713 16.1667 7.55713H17.5005C18.0528 7.55713 18.5005 8.00484 18.5005 8.55713V15.4471C18.5005 15.9994 18.0528 16.4471 17.5005 16.4471H16.1667C15.6145 16.4471 15.1667 15.9994 15.1667 15.4471V8.55713Z" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M24.0569 4.22339V15.7809C24.0569 17.99 22.266 19.7809 20.0569 19.7809H6.94311C4.73397 19.7809 2.94312 17.99 2.94312 15.7809V4.22339" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M24.6124 0.889648H2.38737C1.77365 0.889648 1.27612 1.38717 1.27612 2.0009V3.11215C1.27612 3.72587 1.77365 4.2234 2.38737 4.2234H24.6124C25.2261 4.2234 25.7236 3.72587 25.7236 3.11215V2.0009C25.7236 1.38717 25.2261 0.889648 24.6124 0.889648Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" />
                                        <path d="M13.5 19.7808V22.5589" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" />
                                    </svg>

                                    <div className='mr-[14px] text-blak text-xss'>گزارش گیری</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6533 11.0127C26.2381 11.0127 28.3335 8.92056 28.3335 6.33974C28.3335 3.75892 26.2381 1.66675 23.6533 1.66675C21.0685 1.66675 18.9731 3.75892 18.9731 6.33974C18.9731 8.92056 21.0685 11.0127 23.6533 11.0127Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M23.6533 28.3333C26.2381 28.3333 28.3335 26.2411 28.3335 23.6603C28.3335 21.0795 26.2381 18.9873 23.6533 18.9873C21.0685 18.9873 18.9731 21.0795 18.9731 23.6603C18.9731 26.2411 21.0685 28.3333 23.6533 28.3333Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M15.7062 10.3071L10.5327 12.8899" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M15.7062 19.6531L10.5327 17.0703" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M11.0261 14.9801C11.0304 15.7061 10.8613 16.4227 10.5328 17.0703C10.0612 18.0118 9.28513 18.7667 8.3302 19.2128C7.37528 19.6589 6.29747 19.77 5.27141 19.5281C4.24536 19.2862 3.33116 18.7055 2.67692 17.88C2.02268 17.0546 1.66675 16.0328 1.66675 14.9801C1.66675 13.9275 2.02268 12.9057 2.67692 12.0802C3.33116 11.2548 4.24536 10.6741 5.27141 10.4322C6.29747 10.1903 7.37528 10.3014 8.3302 10.7475C9.28513 11.1935 10.0612 11.9485 10.5328 12.8899C10.8613 13.5376 11.0304 14.2541 11.0261 14.9801V14.9801Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                    <div className='mr-[14px] text-blak text-xss'>معرفی به دوستان</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2517 15.8135C29.2517 22.706 23.6643 28.2935 16.7717 28.2935C9.87923 28.2935 4.29175 22.706 4.29175 15.8135C4.29175 8.92098 9.87923 3.3335 16.7717 3.3335C20.0816 3.3335 23.256 4.64835 25.5964 6.9888C27.9369 9.32926 29.2517 12.5036 29.2517 15.8135Z" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.2083 12.8522C14.2083 11.3989 15.4083 10.5989 17.2043 10.6669C18.5004 10.7118 19.5309 11.77 19.5416 13.0669C19.6043 14.2796 19.0296 15.4371 18.0256 16.1202C17.1722 16.6669 16.7212 17.6651 16.8749 18.6669" stroke="#008080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16.8749 22.0003C16.5073 22.0003 16.2083 21.7013 16.2083 21.3337C16.2083 20.9661 16.5073 20.667 16.8749 20.667C17.2425 20.667 17.5416 20.9661 17.5416 21.3337C17.5416 21.7013 17.2425 22.0003 16.8749 22.0003Z" fill="#008080" />
                                        <path d="M16.8748 20.0002C17.6112 20.0002 18.2082 20.5972 18.2082 21.3336C18.2082 22.07 17.6112 22.6669 16.8748 22.6669C16.1385 22.6669 15.5415 22.07 15.5415 21.3336C15.5415 20.5972 16.1385 20.0002 16.8748 20.0002Z" fill="#008080" />
                                    </svg>

                                    <div className='mr-[14px] text-blak text-xss'>سوالات متداول</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2458 12.0186H13.7681" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M2.66675 24.3497V14.2157C2.66675 11.86 3.60323 9.60079 5.27022 7.93504C6.93721 6.2693 9.19813 5.3335 11.5556 5.3335H20.4445C22.802 5.3335 25.0629 6.2693 26.7299 7.93504C28.3969 9.60079 29.3334 11.86 29.3334 14.2157V24.3231" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M26.6547 17.7712H26.6414C25.1694 17.7712 23.9761 18.9637 23.9761 20.4346V24.0035C23.9761 25.4744 25.1694 26.6668 26.6414 26.6668H26.6547C28.1268 26.6668 29.3201 25.4744 29.3201 24.0035V20.4346C29.3201 18.9637 28.1268 17.7712 26.6547 17.7712Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M5.34541 17.7712H5.33208C3.86006 17.7712 2.66675 18.9637 2.66675 20.4346V24.0035C2.66675 25.4744 3.86006 26.6668 5.33208 26.6668H5.34541C6.81743 26.6668 8.01074 25.4744 8.01074 24.0035V20.4346C8.01074 18.9637 6.81743 17.7712 5.34541 17.7712Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>
                                    <div className='mr-[14px] text-blak text-xss'>پشتیبانی</div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='ml-6'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.9997C1.00024 4.66019 3.35944 1.7859 6.63483 1.13462C9.91021 0.483329 13.1895 2.23644 14.4673 5.32182C15.7451 8.4072 14.6655 11.9655 11.8887 13.8207C9.11186 15.6759 5.41127 15.3112 3.05 12.9497C1.73728 11.6368 0.999866 9.85627 1 7.9997Z" fill="#EF424C" stroke="#EF424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36595 1.13471C6.34188 0.533239 3.28038 1.98127 1.82695 4.7005C0.373517 7.41974 0.870459 10.7698 3.05068 12.95C5.2309 15.1302 8.58092 15.6271 11.3002 14.1737C14.0194 12.7203 15.4674 9.65877 14.8659 6.63471" fill="#EF424C" />
                                            <path d="M9.36595 1.13471C6.34188 0.533239 3.28038 1.98127 1.82695 4.7005C0.373517 7.41974 0.870459 10.7698 3.05068 12.95C5.2309 15.1302 8.58092 15.6271 11.3002 14.1737C14.0194 12.7203 15.4674 9.65877 14.8659 6.63471" stroke="#EF424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.2665 24.0002H13.7332" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M19.9999 2.66699H11.9999C8.31802 2.66699 5.33325 5.65176 5.33325 9.33366V22.667C5.33325 26.3489 8.31802 29.3337 11.9999 29.3337H19.9999C23.6818 29.3337 26.6666 26.3489 26.6666 22.667V9.33366C26.6666 5.65176 23.6818 2.66699 19.9999 2.66699Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>

                                    <div className='mr-[14px] text-blak text-xss'>درباره کالباس</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.0131 11.246L24.1273 10.9273C23.3662 10.7986 22.6637 10.437 22.1167 9.89232C21.5697 9.34767 21.205 8.64678 21.073 7.88622L20.7543 5.98722C20.5959 5.04938 20.1071 4.19915 19.3765 3.59026C18.6458 2.98136 17.7214 2.65397 16.7703 2.66726H15.2299C14.2788 2.65397 13.3544 2.98136 12.6237 3.59026C11.8931 4.19915 11.4043 5.04938 11.2459 5.98722L10.9272 7.88622C10.7951 8.64678 10.4305 9.34767 9.88345 9.89232C9.33642 10.437 8.63396 10.7986 7.87283 10.9273L5.98708 11.246C5.04924 11.4044 4.19905 11.8932 3.59016 12.6239C2.98126 13.3545 2.65385 14.2789 2.66714 15.23V16.7704C2.65385 17.7215 2.98126 18.6459 3.59016 19.3766C4.19905 20.1072 5.04924 20.596 5.98708 20.7544L7.87283 21.0731C8.6366 21.2008 9.34144 21.5637 9.889 22.1113C10.4366 22.6588 10.7995 23.3637 10.9272 24.1275L11.2459 26.0132C11.4043 26.951 11.8931 27.8013 12.6237 28.4102C13.3544 29.019 14.2788 29.3464 15.2299 29.3332H16.7703C17.7214 29.3464 18.6458 29.019 19.3765 28.4102C20.1071 27.8013 20.5959 26.951 20.7543 26.0132L21.073 24.1275C21.2007 23.3637 21.5636 22.6588 22.1112 22.1113C22.6587 21.5637 23.3636 21.2008 24.1273 21.0731L26.0131 20.7544C26.9509 20.596 27.8012 20.1072 28.41 19.3766C29.0189 18.6459 29.3463 17.7215 29.333 16.7704V15.23C29.3463 14.2789 29.0189 13.3545 28.41 12.6239C27.8012 11.8932 26.9509 11.4044 26.0131 11.246V11.246Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M16.0532 18.271C17.3367 18.271 18.3772 17.2305 18.3772 15.947C18.3772 14.6635 17.3367 13.623 16.0532 13.623C14.7697 13.623 13.7292 14.6635 13.7292 15.947C13.7292 17.2305 14.7697 18.271 16.0532 18.271Z" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>


                                    <div className='mr-[14px] text-blak text-xss'>تنظیمات</div>
                                </div>
                                <div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className='border-b px-2 flex justify-between items-center border-[#EAE9F0] py-3'>
                                <div className='flex items-center'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8264 22.2943H19.173" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M10.6665 17.6237H21.3331" stroke="#008080" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M20.7865 5.38147C22.4149 5.57456 23.915 6.3599 24.9997 7.58734C26.0845 8.81479 26.6779 10.3982 26.6664 12.0348V22.6802C26.6664 24.4448 25.964 26.1371 24.7138 27.3848C23.4636 28.6326 21.7679 29.3336 19.9998 29.3336H11.9999C10.2318 29.3336 8.53615 28.6326 7.28592 27.3848C6.03569 26.1371 5.33331 24.4448 5.33331 22.6802V12.0348C5.32654 10.3693 5.94597 8.76172 7.06921 7.52984C8.19245 6.29797 9.73777 5.53136 11.3999 5.38147" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M17.6531 2.66687H14.3331C12.8751 2.66687 11.6931 3.84648 11.6931 5.3016V5.31491C11.6931 6.77003 12.8751 7.94963 14.3331 7.94963H17.6531C19.1111 7.94963 20.293 6.77003 20.293 5.31491V5.3016C20.293 3.84648 19.1111 2.66687 17.6531 2.66687Z" stroke="#2B2B2B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                    </svg>



                                    <div className='mr-[14px] text-blak text-xss'>شرایط و قوانین</div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='ml-6'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.9997C1.00024 4.66019 3.35944 1.7859 6.63483 1.13462C9.91021 0.483329 13.1895 2.23644 14.4673 5.32182C15.7451 8.4072 14.6655 11.9655 11.8887 13.8207C9.11186 15.6759 5.41127 15.3112 3.05 12.9497C1.73728 11.6368 0.999866 9.85627 1 7.9997Z" fill="#EF424C" stroke="#EF424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36595 1.13471C6.34188 0.533239 3.28038 1.98127 1.82695 4.7005C0.373517 7.41974 0.870459 10.7698 3.05068 12.95C5.2309 15.1302 8.58092 15.6271 11.3002 14.1737C14.0194 12.7203 15.4674 9.65877 14.8659 6.63471" fill="#EF424C" />
                                            <path d="M9.36595 1.13471C6.34188 0.533239 3.28038 1.98127 1.82695 4.7005C0.373517 7.41974 0.870459 10.7698 3.05068 12.95C5.2309 15.1302 8.58092 15.6271 11.3002 14.1737C14.0194 12.7203 15.4674 9.65877 14.8659 6.63471" stroke="#EF424C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99992 1.33325L1.33325 7.99992L7.99992 14.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <small className='py-3 w-full h-full flex items-center justify-center text-center text-gray-400 text-xss'>نسخه ۰.۰.۱</small>
                    </div>
                </div>
            )}
        </div>
    )
}

