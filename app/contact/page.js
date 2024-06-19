import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return <>
        <Navbar/>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold'>This is the <span className='underline'>contact</span> page</h1>
    </>
}

export default page