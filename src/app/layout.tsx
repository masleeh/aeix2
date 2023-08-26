import '../styles/style.scss'
import type { Metadata } from 'next'
import { montserrat } from './fonts'

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
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
