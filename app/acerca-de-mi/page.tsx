import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='h-full flex w-full mb-48'>


      <div className='flex flex-col justify-center align-middle mx-48'>

        <h1 className='text-5xl text-center mx-auto mb-12 text-secondaryBlue'>Hola! Soy Odesto Polanco</h1>


        <div className='flex mb-12'>
          <Image src='/assets/img/helicoptero.jpg' width={700} height={700} alt={'picture of odesto polanco standing next to an helicopter'} className='rounded-2xl' />

          <div className='flex flex-col ml-20 text-lg my-auto'>
            <p className='mx-8'>Mi nombre es <strong>Odesto Polanco</strong>, un entusiasta de la programación, la aviación, la tecnología y la fotografía. Me gradué como ingeniero en sistemas de la <span className='text-secondaryBlue'>Universidad Tecnológica de Santiago (UTESA)</span> en 2016. Soy dominicano y resido en mi ciudad natal, Santiago de los Caballeros.
            </p>
            <br />
            <p className='mx-8'>
              Me apasiona el poder transformador de la tecnología y cómo, a partir de una simple idea, se pueden crear soluciones que facilitan la vida y el trabajo de otras personas. En la actualidad, me encuentro en proceso de transición de programador backend a full stack. Esta página web representa mi primer proyecto, donde estoy aplicando en la práctica los conocimientos adquiridos en los últimos meses.
            </p>
          </div>
        </div>


        <div className='flex flex-row-reverse'>
          <Image src='/assets/img/cockpit.jpg' width={700} height={700} alt={'picture of odesto polanco in a airplane cockpit'} className='rounded-2xl' />
          <div className='flex flex-col mr-8 my-auto text-lg'>
            <p className='mb-8 mr-14'>
              En los últimos años, mi enfoque profesional se ha centrado principalmente en el desarrollo de backend, especializándome en la creación de integraciones entre diversos sistemas mediante el uso de Java (y en algunos casos C#). He participado activamente en proyectos de integración con billeteras digitales, CRM, métodos de pago, internet banking y proveedores de servicios de pago, entre otros.
            </p>

            <p className='mb-8 mr-14'>
              Mi experiencia también abarca la creación de diversas APIs y microservicios, haciendo uso de tecnologías como <span className='text-secondaryBlue'>Java, Spring Boot, JPA, Java Message Service (JMS), JWT y SOAP</span>. En mi práctica diaria, considero de vital importancia la implementación de &quot;clean code&quot; y buenas prácticas, utilizando herramientas como SonarQube para el análisis de código. Asimismo, me aseguro de realizar pruebas unitarias con frameworks como <span className='text-secondaryBlue'>JUnit y Mockito</span>.
            </p>
            <p className=' mr-14'>
              Adicionalmente, he trabajado tanto como administrador como desarrollador con tecnologías de <span className='text-secondaryBlue'>IBM Integration BUS (App Connect V12) y el IBM MQ</span>. Esta experiencia amplía mi conjunto de habilidades, permitiéndome abordar de manera integral proyectos que requieren tanto conocimientos de desarrollo como de administración de sistemas.
            </p>
            <br />

          </div>

          <br />

        </div>


        {/* <p>Ademas de la programacion soy amante de la aviacion. Soy de esos que disfruta cada segundo cuando toma un vuelo e investiga todo lo posible acerca de las aeronave, procedimientos, aeropuertos, etc.</p>

            Tambien me gusta mucho la fotografia. Me encanta como una fotografia puede traer memorias ya creias perdidas y pueden revivir buenos momentos en lugares o con personas queridas. Siempre he dicho que cada foto tiene su historia.
            Aqui te dejo algunas de mis fotografoas favoritas. */}


      </div>

    </div >
  )
}

export default page