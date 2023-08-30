// src/app/layout.js

import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { Familjen_Grotesk } from 'next/font/google'
import Footer from '@/components/footer/footer'

const font = Familjen_Grotesk({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.fromshawn.dev'),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F5F7' },
    { media: '(prefers-color-scheme: dark)', color: '#1D1D1F' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main id="skip-to-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
