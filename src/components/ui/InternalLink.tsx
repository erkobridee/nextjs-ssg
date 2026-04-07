// https://nextjs.org/docs/app/api-reference/components/link

import type { Ref, ReactNode } from 'react';
import type { LinkProps } from 'next/link';

import Link from 'next/link';

import cn from '~/utils/cn';

//----------------------------------------------------------------------------//

export interface InternalLinkProps extends LinkProps {
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
  className?: string;
}

export function InternalLink({ href, ref, className, children, ...otherProps }: InternalLinkProps) {
  return (
    <Link className={cn(className)} {...{ ...otherProps, ref, href }}>
      {children}
    </Link>
  );
}

export default InternalLink;
