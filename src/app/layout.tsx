import '../styles/style.scss'
import type { Metadata } from 'next'
import { montserrat } from './fonts'
import GlobalContextProvider from '@/context/GlobalContext'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'AEIX',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>AEIX</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon 16x16.png" sizes='16x16' />
        <link rel="icon" href="/favicon 16x16.svg" sizes='16x16' />
        <link rel="icon" href="/favicon 128x128.png" sizes='128x128' />
        <link rel="icon" href="/favicon 128x128.svg" sizes='128x128' />
      </head>
      <body className={montserrat.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
