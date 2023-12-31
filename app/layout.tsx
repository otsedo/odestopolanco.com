import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { SessionProvider } from 'next-auth/react'
import { inter } from '@/components/ui/fonts'
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: 'Odesto Polanco',
  description: 'This is my personal web. I will share information about me, my work and i will write valuable information in my blog.',
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <SessionProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased bg-darkBlue text-lightBlue`}>
          <Navbar />
          <main >
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </SessionProvider >
  )
}
