import type { Metadata } from 'next';

//----------------------------------------------------------------------------//

export const metadata: Metadata = {
  title: 'User from JSON Placeholder | Static Next.js Sample',
  description: 'Read mocked user from the json placeholder API'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
