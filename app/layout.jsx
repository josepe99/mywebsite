import './globals.css'
import Head from '@/app/Head';
import Scripts from './Scripts';
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '@/app/components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'José Cardozo',
  description: 'José Cardozo presentación',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head />
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
