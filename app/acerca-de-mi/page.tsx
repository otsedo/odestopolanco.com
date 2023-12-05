import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='text-5xl text-center px-1 mb-12 text-secondaryBlue'>Hola! Soy Odesto Polanco</h1>

      <div className='md:flex md:flex-col md:px-16 md:items-center lg:flex lg:flex-row px-2'>
        <Image src='/assets/img/helicoptero.jpg' width={700} height={700} alt={'picture of Odesto Polanco standing next to an helicoptero'} className='rounded-2xl' />
        <div className='
        py-4 text-lg 
        lg:my-auto lg:flex lg:flex-col lg:ml-20 lg:text-base
        '>
          <p className='mx-3 lg:mx-8'>Mi nombre es <strong>Odesto Polanco</strong>, un entusiasta de la programación, la aviación, la tecnología y la fotografía. Me gradué como ingeniero en sistemas de la <span className='text-secondaryBlue'>Universidad Tecnológica de Santiago (UTESA)</span> en 2016. Soy dominicano y resido en mi ciudad natal, Santiago de los Caballeros.
          </p>
          <br />
          <p className='mx-3 lg:mx-8 '>
            Me apasiona el poder transformador de la tecnología y cómo, a partir de una simple idea, se pueden crear soluciones que facilitan la vida y el trabajo de otras personas. En la actualidad, me encuentro en proceso de transición de programador backend a full stack. Esta página web representa mi primer proyecto, donde estoy aplicando en la práctica los conocimientos adquiridos en los últimos meses.
          </p>
        </div>
      </div>

      <div className='
      md:flex md:flex-col md:px-16 md:items-center lg:flex lg:flex-row-reverse lg:pr-16 lg:pl-1 px-2 py-10'>

        <Image src='/assets/img/cockpit.jpg' width={700} height={700} alt={'picture of odesto polanco in a airplane cockpit'} className='rounded-2xl' />
        <div className='

        py-4 text-lg lg:my-auto lg:flex lg:flex-col lg:ml-20 lg:text-base'>
          <p className='lg:mb-6 lg:mx-0 mb-8 mx-8 lg:pr-6'>
            En los últimos años, mi enfoque profesional se ha centrado principalmente en el desarrollo de backend, especializándome en la creación de integraciones entre diversos sistemas mediante el uso de Java (y en algunos casos C#). He participado activamente en proyectos de integración con billeteras digitales, CRM, métodos de pago, internet banking y proveedores de servicios de pago, entre otros.
          </p>

          <p className='lg:mb-6 lg:mx-0 mb-8 mx-8 lg:pr-6'>
            Mi experiencia también abarca la creación de diversas APIs y microservicios, haciendo uso de tecnologías como <span className='text-secondaryBlue'>Java, Spring Boot, JPA, Java Message Service (JMS), JWT y SOAP</span>. En mi práctica diaria, considero de vital importancia la implementación de &quot;clean code&quot; y buenas prácticas, utilizando herramientas como SonarQube para el análisis de código. Asimismo, me aseguro de realizar pruebas unitarias con frameworks como <span className='text-secondaryBlue'>JUnit y Mockito</span>.
          </p>
          <p className='lg:mb-6 lg:mx-0 mb-8 mx-8 lg:pr-6'>
            Adicionalmente, he trabajado tanto como administrador como desarrollador con tecnologías de <span className='text-secondaryBlue'>IBM Integration BUS (App Connect V12) y el IBM MQ</span>. Esta experiencia amplía mi conjunto de habilidades, permitiéndome abordar de manera integral proyectos que requieren tanto conocimientos de desarrollo como de administración de sistemas.
          </p>
        </div>
      </div>
    </>
  )
}

export default page