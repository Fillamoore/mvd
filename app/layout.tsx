// app/layout.tsx - UPDATED (Server Component)
import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import DesktopSidebar from '../components/DesktopSidebar';
import DesktopMenu from '../components/DesktopMenu';
import ClientLayoutWrapper from './ClientLayoutWrapper'; // New client component

export const metadata: Metadata = {
  title: 'Advisory Accelerator',
  description: 'Enabling advisory-led working at pace and scale',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className="flex flex-col h-screen">
        {/* Wrap children in a client component to handle SplashScreen */}
        <ClientLayoutWrapper>
          {/* Desktop layout */}
          <div className="hidden md:flex flex-col h-screen">
            {/* Don't need this anymore
            <header className="h-10 flex-shrink-0">
              <DesktopMenu />
            </header>
            */}
            <div className="flex flex-1 overflow-hidden">
              <aside className="w-82 flex-shrink-0 border-r border-gray-200 overflow-auto">
                <DesktopSidebar />
              </aside>
              <main className="flex-1 overflow-auto bg-gray-50">
                {children}
              </main>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col h-screen">
            <main className="flex-1 overflow-auto bg-gray-50">
              {children}
            </main>
          </div>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}