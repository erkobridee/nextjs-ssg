// https://reactjs.org/docs/forwarding-refs.html
// https://nextjs.org/docs/api-reference/next/router

import React from 'react';
import cs from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

export const InternalLink = React.forwardRef(
  ({ activeClassName = 'active', className, href, children }, ref) => {
    const router = useRouter();
    const isActive = router.pathname === href;
    return (
      <Link href={href}>
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
