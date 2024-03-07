import Navbar from '@/components/Navbar'
import React from 'react'
import Header from './header'
import Gateway from './gateway'
import Prize from './prize'
import Note from './note'
import MainFooter from '@/components/mainFooter'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Gateway/>
      <Prize/>
      <Note/>
      <MainFooter/>
    </div>
  )
}

export default page