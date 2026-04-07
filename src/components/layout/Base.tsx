import type { ReactNode } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import cn from '~/utils/cn';

import '~/styles/globals.css';

//----------------------------------------------------------------------------//

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

interface BaseLayoutProps {
  lang?: string;
  className?: string;
  children: ReactNode;
}

export function BaseLayout({ lang = 'en', className, children }: BaseLayoutProps) {
  return (
    <html lang={lang}>
      <body className={cn('antialiased', geistSans.variable, geistMono.variable, className)}>{children}</body>
    </html>
  );
}

export default BaseLayout;
