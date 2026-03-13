// https://reactjs.org/docs/forwarding-refs.html
// https://nextjs.org/docs/api-reference/next/link
// https://nextjs.org/docs/api-reference/next/router

import * as React from 'react';
import NextjsLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cs from 'clsx';

import styles from './InternalLink.module.scss';

export type TLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const defaultCheckIsActiveFn = (pathname: string, href: string) =>
  pathname === href;

export interface IInternalLinkProps extends TLinkProps {
  /** required value to set on the a tag children */
  children: React.ReactNode;
  /** styles classes to be passed to the a tag */
  className?: string;
  /** style class to be applied when its active, default value is `active` */
  activeClassName?: string;
  /** the default check do pathname equals to href */
  checkIsActive?: typeof defaultCheckIsActiveFn;
}

export const InternalLink = React.forwardRef<
  HTMLAnchorElement,
  IInternalLinkProps
>((props, ref) => {
  const [isActive, setIsActive] = React.useState(false);
  const { pathname } = useRouter();

  const {
    className,
    activeClassName = 'active',
    checkIsActive = defaultCheckIsActiveFn,

    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,

    ...otherProps
  } = props;

  React.useEffect(() => {
    setIsActive(checkIsActive(pathname, href));
  }, [pathname, href, checkIsActive]);

  const aProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    ...otherProps,
    className: cs(styles.link, className, { [`${activeClassName}`]: isActive }),
  };

  return (
    <NextjsLink
      {...{ href, as, replace, scroll, shallow, passHref, prefetch, locale }}
    >
      <a
        {...(aProps as React.InputHTMLAttributes<HTMLAnchorElement>)}
        ref={ref}
      />
    </NextjsLink>
  );
});

InternalLink.displayName = 'InternalLink';

export default InternalLink;
