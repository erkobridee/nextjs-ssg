import type { Metadata } from 'next';

//----------------------------------------------------------------------------//

export const metadata: Metadata = {
  title: 'JSON Placeholder | Static Next.js Sample',
  description: 'Rendering dynamic content loaded from the json placeholder API'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
