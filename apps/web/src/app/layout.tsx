import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@agendall/ui/styles.css'
import '@/modules/shared/styles/globals.css'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] })

export const metadata: Metadata = {
  title: {
    default: 'Agendall',
    template: 'Agendall | %s',
  },
  description: 'Gestão inteligente',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
