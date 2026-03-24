'use client';

import Image from 'next/image';

import TargetBlankLink from '~/components/TargetBlankLink';

export function Footer() {
  return (
    <div className="flex w-full justify-center gap-2">
      <span>Powered by</span>

      <TargetBlankLink href="https://nextjs.org/">
        <Image width={67} height={20} src="https://img.shields.io/badge/-NextJS-000?&logo=next.js" alt="Next.js Logo" />
      </TargetBlankLink>

      <TargetBlankLink href="https://tailwindcss.com/">
        <Image
          width={97}
          height={20}
          src="https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss"
          alt="TailwindCSS Logo"
        />
      </TargetBlankLink>
    </div>
  );
}

export default Footer;
