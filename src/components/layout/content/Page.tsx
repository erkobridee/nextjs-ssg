import type { ReactNode } from 'react';

import Container from '~/components/layout/content/Container';
import Footer from '~/components/layout/content/Footer';

import cn from '~/utils/cn';

//----------------------------------------------------------------------------//

interface PageLayoutProps {
  headerClassName?: string;
  className?: string;
  header?: ReactNode;
  children: ReactNode;
}

export function PageLayout({ headerClassName, className, header, children }: PageLayoutProps) {
  return (
    <div className={cn('font-sans', 'min-h-screen', 'flex flex-col items-center', 'bg-zinc-50 dark:bg-black')}>
      {header && (
        <Container as="header" className={cn('flex gap-2 border-b border-gray-200 py-2', headerClassName)}>
          {header}
        </Container>
      )}

      <Container as="main" outerClassName="grow" className={cn('bg-white p-8 dark:bg-black', className)}>
        {children}
      </Container>

      <Footer />
    </div>
  );
}

export default PageLayout;
