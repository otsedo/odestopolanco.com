'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Logo from '../public/assets/img/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-40 px-2 lg:px-16 xl:pr-48 md:pr-3  ' >
      <div className="logo-container lg:ml-7 ">
        <Link href='/'>
          <Image alt='picture of Odesto Polanco' src={Logo} height={100} width={200} id='logo' />
        </Link>
      </div>
      <NavLinks />
    </div>
  )
}

export default Navbar