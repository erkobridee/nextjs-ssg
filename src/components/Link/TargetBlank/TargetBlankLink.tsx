/*
  https://reactjs.org/docs/forwarding-refs.html
  https://www.carlrippon.com/react-forwardref-typescript/
  https://www.selbekk.io/blog/2020/05/forwarding-refs-in-typescript/
  https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/
*/

import React from 'react';

/* eslint-disable-next-line */
export interface TargetBlankLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const TargetBlankLink = React.forwardRef<
  HTMLAnchorElement,
  TargetBlankLinkProps
>(({ target, rel, href, children, ...otherProps }, ref) => {
  target = '_blank';
  rel = 'noopener noreferrer';
  return (
    <a {...{ ...otherProps, ref, target, rel, href }}>{children || href}</a>
  );
});

TargetBlankLink.displayName = 'TargetBlankLink';

export default TargetBlankLink;
