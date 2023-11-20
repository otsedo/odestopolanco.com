'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-40 px-2 md:px-10 fixed'>
      <div className="logo-container">
        <Link href='/'>
          <Image alt='odesto polanco logo' src='/assets/img/logo.png' height={100} width={200} />
        </Link>
      </div>
      <NavLinks />
    </div>
  )
}

export default Navbar