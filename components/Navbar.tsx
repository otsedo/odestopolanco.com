'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Logo from '../public/assets/img/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-40 px-1 lg:px-16  md:pr-3 lg:mx-0' >
      <div className="logo-container lg:ml-7 xl:mx-20">
        <Link href='/'>
          <Image alt='picture of Odesto Polanco' src={Logo} height={100} width={200} id='logo' />
        </Link>
      </div>
      <NavLinks />
    </div>
  )
}

export default Navbar