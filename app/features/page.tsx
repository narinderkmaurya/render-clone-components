import Navbar from '@/components/Navbar'
import React from 'react'
import { Header } from './header'
import Cards from './cards'
import MainFooter from '@/components/mainFooter'

const page = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <div className="">
                <Cards />
            </div>
            <MainFooter />
        </div>
    )
}

export default page