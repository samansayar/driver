import React from 'react'
import Navigation from '../Components/Navigation'
import TopBar from '../Components/TopBar'

export default function Guest({ children , active }) {
  return (
    <div>
      <TopBar />
      <>
        <div className="p-6 w-full">
          {children}
        </div>
      </>
      <Navigation active={active} />
    </div>
  )
}
