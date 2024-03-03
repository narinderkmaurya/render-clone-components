import React from 'react'
import { Header } from './components/Header'
import Second from './components/second'
import Marquee from './marquee'
import Slider from '@/components/Slider'
import CodeShipsMarquee from './marquee'
import Navbar from '@/components/Navbar'
import Black from './components/black'


const CodeShips = () => {
  return (
    <div className='bg-[#1b1b1b]'>
      <Navbar />
      <Header />
      <Second />
      <div className="py-16 bg-white">
        <CodeShipsMarquee />
      </div>
      <Black />
    </div>
  )
}

export default CodeShips