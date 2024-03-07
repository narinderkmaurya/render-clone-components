import React from 'react'
import Grid from './grid'
import first from "./first.png"
import blue from "./blue.png"
import third from "./third.png"





const Cards = () => {
    return (
        <div className='py-16'>
            <Grid title='Let companies apply to you' colorfirst='bg-[#FFD5D2]' colorsecond='bg-[#FF553D]' method='flex-row' description1='Gone are the days of tirelessly applying for 100s of 
internships & hoping for a callback or completing 
multiple coding assignments as a part of interview 
process only to get ghosted...' description2='Say hello to a revolutionary way of landing dream 
internship opportunities! Let startups apply
to you seeing the projects you built as a part of
Coderships' image={first} />
            <Grid title='Code review by senior developers' colorfirst='bg-[#C5EBFF]' colorsecond='bg-[#22A5FF]' method='flex-row-reverse' description1='Gone are the days of tirelessly applying for 100s of 
internships & hoping for a callback or completing 
multiple coding assignments as a part of interview 
process only to get ghosted...' description2='Say hello to a revolutionary way of landing dream 
internship opportunities! Let startups apply
to you seeing the projects you built as a part of
Coderships' image={blue} />
            <Grid title='Win referrals to your dream companies' colorfirst='bg-[#e6daff]' colorsecond='bg-[#9d66ff]' method='flex-row' description1='Gone are the days of tirelessly applying for 100s of 
internships & hoping for a callback or completing 
multiple coding assignments as a part of interview 
process only to get ghosted...' description2='Say hello to a revolutionary way of landing dream 
internship opportunities! Let startups apply
to you seeing the projects you built as a part of
Coderships' image={third} />
            <Grid title='Code review by senior developers' colorfirst='bg-[#C5EBFF]' colorsecond='bg-[#22A5FF]' method='flex-row-reverse' description1='Gone are the days of tirelessly applying for 100s of 
internships & hoping for a callback or completing 
multiple coding assignments as a part of interview 
process only to get ghosted...' description2='Say hello to a revolutionary way of landing dream 
internship opportunities! Let startups apply
to you seeing the projects you built as a part of
Coderships' image={blue} />
        </div>
    )
}

export default Cards