import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </head>
    <body className="flex flex-col bg-gradient-to-br from-slate-700 to-slate-950 text-trex  selection:text-trex selection:bg-slate-900 lg:h-screen min-h-screen lg:w-screen w-auto">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90%] mb-auto">
        {children}
      </div>
      <Footer />
    </body>
  </html>
  )
}