// app/layout.tsx - UPDATED
import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import DesktopSidebar from '@/components/DesktopSidebar'
import DesktopMenu from '@/components/DesktopMenu'
import MobileFooter from '@/components/MobileFooter'

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
        {/* Desktop: Three-panel layout */}
        <div className="hidden md:flex h-screen">
          <DesktopMenu /> {/* Left menu - 80px */}
          <DesktopSidebar /> {/* Master view sidebar */}
          <main className="flex-1 overflow-auto bg-gray-50">
            {children} {/* Scenario Player content */}
          </main>
        </div>

        {/* Mobile: Single panel with footer */}
        <div className="md:hidden flex flex-col h-screen">
          <main className="flex-1 overflow-auto bg-gray-50 pb-16"> {/* Padding for footer */}
            {children} {/* Scenario Player content */}
          </main>
          <MobileFooter /> {/* Bottom navigation */}
        </div>
      </body>
    </html>
  )
}