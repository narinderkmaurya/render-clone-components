import React from 'react'
import { Header } from './components/Header'
import Second from './components/second'
import Marquee from './marquee'
import Slider from '@/components/Slider'
import CodeShipsMarquee from './marquee'


const CodeShips = () => {
  return (
    <div className='bg-[#1b1b1b]'>
      <Header />
      <Second />
      <div className="py-16 bg-white">
        <CodeShipsMarquee />
      </div>
    </div>
  )
}

export default CodeShips