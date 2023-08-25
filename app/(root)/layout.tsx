import { ClerkProvider } from '@clerk/nextjs/app-beta';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSiderbar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 13 Meta Threads Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>

            <RightSiderbar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
