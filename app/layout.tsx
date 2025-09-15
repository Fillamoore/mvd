// app/layout.tsx - FIXED
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import DesktopSidebar from '@/components/DesktopSidebar'
import DesktopMenu from '@/components/DesktopMenu'

// Initialize the Inter font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optional: improves loading performance
})

export const metadata: Metadata = {
  title: 'Advisory Accelerator',
  description: 'Enabling advisory-led working at pace and scale',
  manifest: '/manifest.json',
  icons: {
    icon: '/aaicon.ico',
  },
}

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
    <html lang="en" className={inter.className}>
      <body>
        {/* Desktop: Three-panel layout */}
        <div className="hidden md:flex h-screen">
          <DesktopMenu />
          <DesktopSidebar />
          <main className="flex-1 overflow-auto bg-gray-50">
            {children}
          </main>
        </div>

        {/* Mobile: Single panel layout - NO FOOTER HERE */}
        <div className="md:hidden flex flex-col h-screen">
          <main className="flex-1 overflow-auto bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}