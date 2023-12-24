import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Proesc.com Teste',
  description: 'Desafio de Frontend Pleno feito com NextJS e PotterDB para a Proesc.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
