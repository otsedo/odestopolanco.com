
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/skills";
import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} strategy="lazyOnload" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>


      <Hero />
      <Skills />

    </main >
  )
}
