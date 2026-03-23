import type { AnchorHTMLAttributes, Ref } from 'react';

interface TargetBlankLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
}

export function TargetBlankLink({ target, rel, href, ref, children, ...otherProps }: TargetBlankLinkProps) {
  target = '_blank';
  rel = 'noopener noreferrer';
  return <a {...{ ...otherProps, ref, target, rel, href }}>{children || href}</a>;
}

export default TargetBlankLink;
