// app/layout.tsx - Enhanced with navigation
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import MobileNav from '@/components/MobileNav'
import DesktopSidebar from '@/components/DesktopSidebar'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        {/* Desktop Layout */}
        <div className="hidden md:flex h-screen">
          <DesktopSidebar />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col h-screen">
          <main className="flex-1 overflow-auto pb-16"> {/* Padding for bottom nav */}
            {children}
          </main>
          <MobileNav />
        </div>
      </body>
    </html>
  )
}