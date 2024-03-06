import Navbar from '@/components/Navbar'
import React from 'react'
import Header from "./header"
import Stats from './stats'
import White from './white'
import Black from './black'
import Apply from './apply'
import AnotherBlack from './anotherblack'
const page = () => {
  return (
    <div>
        <Navbar />
        <div className="bg-[#1B1B1B]">
            <Header/>
            <Stats/>
            <White/>
            <Black/>
            <Apply/>
            <AnotherBlack/>
        </div>
    </div>
  )
}

export default page