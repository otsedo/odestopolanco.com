import type { Metadata } from 'next'


import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Odesto Polanco',
  description: 'This is my personal web. I will share information about me, my work and i will write valuable information in my blog.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en"  >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
