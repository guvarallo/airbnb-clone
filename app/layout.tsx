import './globals.css'
import { Nunito } from 'next/font/google'

import { Modal, Navbar } from './components'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone'
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Modal title='Hey Gus!' isOpen />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
