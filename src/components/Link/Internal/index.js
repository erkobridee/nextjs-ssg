// https://reactjs.org/docs/forwarding-refs.html
// https://nextjs.org/docs/api-reference/next/router

import React from 'react';
import cs from 'clsx';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

export const InternalLink = React.forwardRef(
  ({ activeClassName = 'active', className, href, locale, children }, ref) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
      <Link href={href} locale={locale}>
        <a
          className={cs(styles.link, className, {
            [`${activeClassName}`]: isActive,
          })}
          ref={ref}
        >
          {children}
        </a>
      </Link>
    );
  }
);

export default InternalLink;
