import Image from 'next/image';

import redefineUrl from '~/utils/redefineUrl';
import { isProduction } from '~/utils/settings';

import hello from '@/public/hello.json';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="xs:items-start flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-6 bg-white px-16 py-16 lg:py-32 dark:bg-black">
        <div className="flex w-full gap-2 border-b border-gray-200 py-2">
          <span>
            <strong>TODO:</strong>
          </span>

          <span>define the header</span>
        </div>

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
            <a href="https://vercel.com/templates" className="font-medium text-zinc-950 dark:text-zinc-50">
              Templates
            </a>{' '}
            or the{' '}
            <a href="https://nextjs.org/learn" className="font-medium text-zinc-950 dark:text-zinc-50">
              Learning
            </a>{' '}
            center.
          </p>
        </div>

        <div>
          <code className="rounded-[5px] bg-gray-100 p-1 font-mono text-[1.1rem] text-zinc-950">hello.json</code> -{' '}
          {hello.message}
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-39.5 dark:hover:bg-[#ccc]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src={redefineUrl('/vercel.svg')}
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 md:w-39.5 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

        <div className="flex w-full gap-2 border-t border-gray-200 py-2">
          <span>
            <strong>TODO:</strong>
          </span>

          <span>define the footer</span>
        </div>
      </main>
    </div>
  );
}
