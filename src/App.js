import React from "react";
import Card from "./Components/Card";
import Navigation from "./Components/Navigation";
import TopBar from "./Components/TopBar";
import Banner from './img/banner.png';
import image from './img/image.png';
import Guest from "./layouts/Guest";
function App() {
  return (
    <div className="App w-full text-gray-700 lg:px-[30rem]">
      <Guest active={1}>
          <img src={Banner} className='w-full object-contain' alt="banner" />
          <div className="mt-4">
            <div className="flex border-b pb-1 border-gray-200 justify-between items-center w-full">
              <div>
                <svg width="45" className="rotate-180" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="45" height="45" rx="2" fill="#EAE9F0" />
                  <path d="M26.9999 16.3333L20.3333 22.9999L26.9999 29.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

              <div className="text-center w-full sans-bold text-gray-900 text-xss">شنبه ۲۰ اسفند</div>

              <div>
                <svg width="45" className="rotate-0" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="45" height="45" rx="2" fill="#EAE9F0" />
                  <path d="M26.9999 16.3333L20.3333 22.9999L26.9999 29.6666" stroke="#2B2B2B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className="w-full flex-col space-y-3 items-center justify-center">
              <Card />
              <Card />
            </div>
          </div>
      </Guest>
    </div>
  );
}

export default App;
