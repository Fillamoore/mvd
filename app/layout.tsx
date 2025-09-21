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
        <ClientLayoutWrapper>

          {/* Desktop layout */}
          <div className="hidden md:flex flex-col h-screen">
            <div className="p-5 flex shadow-inner space-x-5 overflow-auto overflow-hidden bg-[url('/screen-background.jpg')] bg-cover bg-center">
              <aside className="desktop-sidebar-wrapper w-96">
                <DesktopSidebar />
              </aside>
              <main className="desktop-scenarios-panel-wrapper flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col h-screen">
            <main className="flex-1 overflow-auto overflow-hidden bg-gray-50">
              {children}
            </main>
          </div>

        </ClientLayoutWrapper>
      </body>
    </html>
  );
}