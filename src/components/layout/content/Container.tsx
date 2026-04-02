// Dynamic React JSX Tag Names: A How-To Guide

import type { ReactNode, ElementType } from 'react';

import cn from '~/utils/cn';

//----------------------------------------------------------------------------//

interface ContainerProps {
  as?: 'div' | 'main' | 'header' | 'footer';
  outerClassName?: string;
  className?: string;
  children: ReactNode;
}

export function Container({ as: tagName = 'div', outerClassName, className, children }: ContainerProps) {
  const Wrapper = tagName as ElementType;

  return (
    <Wrapper className={cn('flex w-full justify-center', outerClassName)}>
      <div className={cn('w-full max-w-3xl', className)}>{children}</div>
    </Wrapper>
  );
}

export default Container;
