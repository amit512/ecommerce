import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FlashSales from '../components/FlashSales'
const home = () => {
  return (
    <div>
      <div className='headder'>
        <Navbar/>
      </div>
        <Banner/>
        <FlashSales/>
      <div>
        
      </div>
    </div>
  )
}

export default home
