'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links as LinksArray } from '../lib/constants'

export default function NavLinks() {
  const [nav, setNav] = useState(false)
  const pathname = usePathname();

  return (
    <>
      <ul className='hidden md:flex md:pr-36'>
        {LinksArray.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                'px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all',
                { 'text-secondaryBlue font-bold': pathname === link.href }
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <a href='CV_Odesto_Polanco.pdf' target="blank">CV</a>
      </ul >

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (
          <>
            <ul className='flex flex-col gap-8 justify-center items-center absolute top-0 left-0 w-full h-screen text-blue-100 bg-darkBlue opacity-90 '>
              {LinksArray.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'px-4 cursor-pointer capitalize font-medium text-blue-100 hover:text-blue-700 hover:transition-all',
                      { 'text-secondaryBlue font-bold': pathname === link.href }
                    )}
                  >
                    {link.name}
                  </Link>
                </li>

              ))}
              <a href='CV_Odesto_Polanco.pdf' target="blank">CV</a>
            </ul >

          </>
        )
      }
    </>
  )
}