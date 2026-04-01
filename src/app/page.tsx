import Image from 'next/image';

import Container from '~/components/Container';
import Footer from '~/components/Footer';
import TargetBlankLink from '~/components/TargetBlankLink';

import cn from '~/utils/cn';
import redefineUrl from '~/utils/redefineUrl';
import { isProduction } from '~/utils/settings';

import hello from '@/public/hello.json';

//----------------------------------------------------------------------------//

const Styles = {
  LINK_TEXT: 'font-medium text-zinc-950 dark:text-zinc-50',
  BASE_LINK_BUTTON: 'flex h-12 w-full items-center justify-center rounded-full transition-colors'
} as const;

export default function Home() {
  return (
    <div className={cn('font-sans', 'min-h-screen', 'flex flex-col items-center', 'bg-zinc-50 dark:bg-black')}>
      <Container as="header" className="flex gap-2 border-b border-gray-200 py-2">
        <span>
          <strong>TODO:</strong>
        </span>

        <span>define the header</span>
      </Container>

      <Container
        as="main"
        outerClassName="grow"
        className="xs:items-start flex flex-col items-center justify-between gap-6 bg-white px-16 py-16 lg:py-32 dark:bg-black"
      >
        <Image
          className="dark:invert"
          src={redefineUrl('/next.svg')}
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {!isProduction && (
            <h2 className="max-w-xs text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
              To get started, edit the page.tsx file.
            </h2>
          )}

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{' '}
            <TargetBlankLink href="https://vercel.com/templates" className={Styles.LINK_TEXT}>
              Templates
            </TargetBlankLink>{' '}
            or the{' '}
            <TargetBlankLink href="https://nextjs.org/learn" className={Styles.LINK_TEXT}>
              Learning
            </TargetBlankLink>{' '}
            center.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <code className="rounded-[5px] bg-gray-100 p-1 font-mono text-[1.1rem] text-zinc-950">hello.json</code>
          <span>-</span>
          <span>{hello.message}</span>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <TargetBlankLink
            className={cn(
              Styles.BASE_LINK_BUTTON,
              'gap-2 bg-foreground px-5 text-background hover:bg-[#383838] md:w-39.5 dark:hover:bg-[#ccc]'
            )}
            href="https://vercel.com/new"
          >
            <Image
              className="dark:invert"
              src={redefineUrl('/vercel.svg')}
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </TargetBlankLink>

          <TargetBlankLink
            className={cn(
              Styles.BASE_LINK_BUTTON,
              'border border-solid border-black/8 px-5 hover:border-transparent hover:bg-black/4 md:w-39.5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'
            )}
            href="https://nextjs.org/docs"
          >
            Documentation
          </TargetBlankLink>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
