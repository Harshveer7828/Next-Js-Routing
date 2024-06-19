import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return <>
    <div className='py-6 px-12 bg-zinc-900 flex items-center justify-between text-white'>
        <h2>Harsh Veer Singh</h2>
        <div className="links flex gap-12">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/contact">Contact us</Link>
        </div>
        
    </div>
  </>
}

export default Navbar