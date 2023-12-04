import React from 'react'
import { socialLinks, footerLinks } from '../../lib/constants'

const Footer = () => {
  return (
    <div className='sm:flex-col m-9 md:grid md:grid-cols-3 md:justify-between px-20 '>

      <div className='sm:mt-4 '>
        <p className='text-xl my-4'>Odesto Polanco</p>
        <p className='text-base my-4 max-w-md'>Mi nombre es Mi nombre es <span className='text-secondaryBlue'>Odesto Polanco Rodríguez</span>, ingeniero en sistemas de la República Dominicana en plena transición de Backend Developer a Full Stack Developer.</p>
      </div>

      <div className='sm:my-2'>
        <h3 className='text-xl my-3 text-center'>Redes Sociales</h3>
        <div className='flex text-3xl p-4 gap-7 pb-8  justify-center'>
          {socialLinks.map((link) => (
            <a href={link.url} key={link.id}>{link.icon}</a>
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center align-middle text-center'>
        <h3 className='text-xl my-4'>Enlasces rápidos</h3>
        <div className='flex flex-col text-lg'>
          {footerLinks.map((link) => (
            <a href={link.url} key={link.id} className='my-1'>{link.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;