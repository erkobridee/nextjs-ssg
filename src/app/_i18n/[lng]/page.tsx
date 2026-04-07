import Image from 'next/image';

import PageLayout from '~/components/layout/content/Page';
import TargetBlankLink from '~/components/ui/TargetBlankLink';
import InternalLink from '~/components/ui/InternalLink';

import cn from '~/utils/cn';
import redefineUrl from '~/utils/redefineUrl';
import { isProduction } from '~/utils/settings';

import hello from '@/public/hello.json';

//----------------------------------------------------------------------------//

const Styles = {
  BODY_LINK: 'font-medium link',
  BASE_LINK_BUTTON: 'flex h-12 w-full items-center justify-center rounded-full transition-colors'
} as const;

export default async function Home() {
  return (
    <PageLayout
      className="xs:items-start flex flex-col items-center justify-between gap-6 lg:py-32"
      header={
        <>
          <span className="link font-medium">Home</span>

          <InternalLink href={'/jsonplaceholder'} className="link-underline">
            JSON Placeholder
          </InternalLink>
        </>
      }
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
          <TargetBlankLink href="https://vercel.com/templates" className={Styles.BODY_LINK}>
            Templates
          </TargetBlankLink>{' '}
          or the{' '}
          <TargetBlankLink href="https://nextjs.org/learn" className={Styles.BODY_LINK}>
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
    </PageLayout>
  );
}
