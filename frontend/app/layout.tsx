import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crie Sua Criatura',
  description: 'Aplicação com Clean Architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

