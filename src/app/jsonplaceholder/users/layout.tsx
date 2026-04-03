import type { Metadata } from 'next';

//----------------------------------------------------------------------------//

export const metadata: Metadata = {
  title: 'Users from JSON Placeholder | Static Next.js Sample',
  description: 'Read mocked users from the json placeholder API'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
