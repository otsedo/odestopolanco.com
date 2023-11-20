import Link from 'next/link';
import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";

const NavLinks = () => {
  const [nav, setNav] = useState(false)
  return (
    <>
      <ul className='hidden md:flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>Home</Link></li>
        <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='#'>Portfolio</Link></li>
        <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='#'>Blog</Link></li>
        <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='#'>More about me</Link></li>
        <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='#'>Contact</Link></li>
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col gap-8 justify-center items-center absolute top-0 left-0 w-full h-screen text-blue-100'>
          <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>Home</Link></li>
          <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>Portfolio</Link></li>
          <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>Blog</Link></li>
          <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>More about me</Link></li>
          <li className='px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all'><Link href='/'>Contact</Link></li>
        </ul>
      )}
    </>
  )
}

export default NavLinks