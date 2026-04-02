'use client';

import Image from 'next/image';

import Container from '~/components/layout/content/Container';
import TargetBlankLink from '~/components/ui/TargetBlankLink';

//----------------------------------------------------------------------------//

export function Footer() {
  return (
    <Container as="footer" className="flex items-center justify-center gap-2 border-t border-gray-200 py-2">
      <span>Powered by</span>

      <TargetBlankLink href="https://nextjs.org/">
        <Image
          width={91}
          height={21}
          src="https://img.shields.io/badge/-NextJS_v16-000?&logo=next.js"
          alt="Next.js Logo"
        />
      </TargetBlankLink>

      <TargetBlankLink href="https://tailwindcss.com/">
        <Image
          width={97}
          height={21}
          src="https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss"
          alt="TailwindCSS Logo"
        />
      </TargetBlankLink>
    </Container>
  );
}

export default Footer;
