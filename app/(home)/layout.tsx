import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My Profile',
  description: 'My Profile description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
        <script src='/117-24a398877c3198e3.js'></script>
        <script src='/878-971370f365b7106a.js'></script>
        <script src='/fd9d1056-aa94ea5c2eabf904.js'></script>
        <script src='/main-app-2dcde4753ea0d175.js'></script>
        <script src='/page-027e75a1f712ba0e.js'></script>
      </body>
    </html>
  )
}
