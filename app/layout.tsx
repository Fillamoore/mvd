// app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next' // <-- Import the types

const inter = Inter({ subsets: ['latin'] })

// Add the type annotation
export const metadata: Metadata = {
  title: 'Advisory Accelerator',
  description: 'Enabling advisory-led working at pace and scale',
  manifest: '/manifest.json', // This is crucial for the PWA
  icons: {
    icon: '/aaicon.ico', // This is the important line
  },
}

// Add the type annotation  
export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}