import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='grid md:grid-cols-6 w-11/12 '>

      <div className='flex col-span-3 justify-center items-center mx-1 my-5 image-container '>
        <Image
          src='/assets/img/profile.png'
          width={550}
          height={0}
          alt='Profile picture'
          className='rounded-3xl shadow-md shadow-blue-500/20'
        />
      </div>

      <div className='col-span-3 md:my-auto mt-5 lg:ml-28'>
        <h1 className='text-5xl md:text-7xl text-center mb-11'>Hola, soy <span className='text-primaryBlue font-medium'>Odesto</span>!</h1>
        <p className='mx-10 text-lg mb-10'>
          Mi nombre es <span className='text-primaryBlue'>Odesto Polanco Rodríguez</span>, ingeniero en sistemas de la República Dominicana en plena transición de Backend Developer a Full Stack Developer. <br /><br />
          Durante los últimos 3 años, he focalizado mi carrera en la integración con diversos sistemas, destacando experiencias en plataformas como IBMi (AS400), IBM App Connect, Websphere MQ, entre otras. Además, he trabajado de manera destacada en el desarrollo de integraciones utilizando <span className='text-primaryBlue'>Java y Spring framework</span>.
        </p>

        <div className='flex justify-start mx-10'>
          <Button className="w-60 justify-center shadow-md shadow-blue-500/20">
            <Link href='/acerca-de-mi'>Más Información sobre mi</Link>
          </Button>
        </div>
      </div>


    </section >
  )
}
export default Hero