import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return <>
        <Navbar/>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold'>This is the <span className='underline'>Service</span> page</h1>
        <h3 className='text-white absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2'>Choose your services :-</h3>
        <div className='text-white flex flex-col text-left absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Link href="/services/thai">Thai Massage</Link>
            <Link href="/services/cup">Cup Therapy</Link>
            <Link href="/services/ice">Iced therapy</Link>
        </div>
    </>
}

export default page