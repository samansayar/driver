import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ active }) {
    return (
        <div className='fixed bottom-0 border-t right-0 left-0 w-full flex justify-center items-center px-16 pt-[14px] pb-2 bg-white'>
            <div className='w-full flex justify-between items-center space-x-3'>
                <div></div>
                <Link to="/" className='flex flex-col items-center justify-center'>
                    <svg className={`${active === 1 ? 'text-[#008080]' : 'text-[#AEABC2]'}`} width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.50122 9.62311V15.8164C1.44458 18.253 3.37267 20.2748 5.80922 20.3338H15.8599C18.2964 20.2748 20.2245 18.253 20.1679 15.8164V9.62311C20.1706 7.79574 19.3181 6.07237 17.8639 4.96577L13.7839 2.49244C11.9713 1.39152 9.69648 1.39152 7.88388 2.49244L3.80522 4.96577C2.35101 6.07237 1.49845 7.79574 1.50122 9.62311Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.7066 15.2444C13.0334 16.1557 11.9677 16.6934 10.8346 16.6934C9.70163 16.6934 8.63586 16.1557 7.96265 15.2444" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <p className={`sans-bold text-xss ${active === 1 ? 'text-[#008080]' : 'text-[#AEABC2]'} mt-1.5`}>خانه</p>
                </Link>
                <Link to="/travles" className='flex flex-col items-center justify-center'>
                    <svg className={`${active === 2 ? 'text-[#008080]' : 'text-[#AEABC2]'}`} width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57374 15.9517C2.42061 14.7742 1.6385 13.2842 1.3244 11.6663C1.00771 10.044 1.17033 8.36448 1.7924 6.833C2.40916 5.31012 3.46213 4.00342 4.81907 3.077C7.5722 1.19666 11.1966 1.19666 13.9497 3.077C15.3067 4.00342 16.3597 5.31012 16.9764 6.833C17.5985 8.36448 17.7611 10.044 17.4444 11.6663C17.1303 13.2842 16.3482 14.7742 15.1951 15.9517C13.6679 17.5188 11.5726 18.4026 9.3844 18.4026C7.19625 18.4026 5.10087 17.5188 3.57374 15.9517V15.9517Z" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.41999 4.85242C9.00809 4.89606 8.70955 5.26536 8.7532 5.67727C8.79685 6.08918 9.16614 6.38771 9.57805 6.34407L9.41999 4.85242ZM12.0924 7.8253C12.2538 8.20674 12.694 8.38505 13.0754 8.22357C13.4569 8.06209 13.6352 7.62196 13.4737 7.24052L12.0924 7.8253ZM15.8462 15.2928C15.5531 15.0001 15.0782 15.0006 14.7856 15.2937C14.4929 15.5869 14.4933 16.0617 14.7865 16.3544L15.8462 15.2928ZM19.3038 20.8637C19.597 21.1563 20.0719 21.1559 20.3645 20.8628C20.6571 20.5696 20.6567 20.0947 20.3636 19.8021L19.3038 20.8637ZM9.57805 6.34407C10.6509 6.23039 11.6718 6.83183 12.0924 7.8253L13.4737 7.24052C12.7956 5.63882 11.1496 4.66914 9.41999 4.85242L9.57805 6.34407ZM14.7865 16.3544L19.3038 20.8637L20.3636 19.8021L15.8462 15.2928L14.7865 16.3544Z" fill={active === 2 ? '#008080' : '#AEABC2'} />
                    </svg>
                    <p className={`sans-bold text-xss ${active === 2 ? 'text-[#008080]' : 'text-[#AEABC2]'} mt-1.5`}>سفر ها</p>
                </Link>
                <Link to="/mytravles" className='flex flex-col items-center justify-center'>
                    <svg className={`${active === 3 ? 'text-[#008080]' : 'text-[#AEABC2]'}`} width="21" height="22" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5094 22.4706V4.04525C17.5154 3.33199 17.2379 2.64554 16.7378 2.13694C16.2377 1.62834 15.556 1.33924 14.8427 1.33325H4.17607C3.4628 1.33924 2.78113 1.62834 2.28103 2.13694C1.78093 2.64554 1.50336 3.33199 1.5094 4.04525V22.4706C1.44601 23.0026 1.70721 23.5209 2.17255 23.7864C2.63789 24.0519 3.21697 24.0131 3.64273 23.6879L8.7094 19.3133C9.16614 18.901 9.86066 18.901 10.3174 19.3133L15.3761 23.6893C15.802 24.0147 16.3815 24.0535 16.847 23.7876C17.3125 23.5216 17.5734 23.0028 17.5094 22.4706Z" stroke="CurrentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <p className={`sans-bold text-xss ${active === 3 ? 'text-[#008080]' : 'text-[#AEABC2]'} mt-1.5`}>سفر ها من</p>
                </Link>
            </div>
        </div>
    )
}
