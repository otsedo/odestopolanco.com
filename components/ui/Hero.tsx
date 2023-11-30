import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='grid md:grid-cols-6 w-full '>

      <div className='md:mt-64 mt-5 col-span-3'>
        <h1 className='text-5xl text-center mb-10'>Hola, soy Odesto!</h1>

        <p className='mx-10 text-lg mb-10'>
          ¡Hola! Soy Odesto Polanco Rodríguez, un ingeniero en sistemas de la República Dominicana en plena transición de Backend Developer a Full Stack Developer. <br /><br />
          Durante los últimos 3 años, he focalizado mi carrera en la integración con diversos sistemas, destacando experiencias en plataformas como IBMi (AS400), IBM App Connect, Websphere MQ, entre otras. Además, he trabajado de manera destacada en el desarrollo de integraciones utilizando Java y Spring framework.
        </p>

        <div className='flex justify-start mx-10'>
          <Button className="w-60 justify-center">
            <Link href='/admin'>Más Información sobre mi</Link>
          </Button>
        </div>
      </div>



      <div className='flex col-span-3 justify-center items-center mx-5 my-5'>

        <Image
          src='/assets/img/profile.png'
          width={550}
          height={0}
          alt='Profile picture'
          className='rounded-3xl'

        />
      </div>










    </section >
  )
}

export default Hero