// https://reactjs.org/docs/forwarding-refs.html

import React from 'react';

export const TargetBlankLink = React.forwardRef(
  ({ target, rel, ...otherProps }, ref) => {
    target = '_blank';
    rel = 'noopener noreferrer';
    return <a {...{ ...otherProps, ref, target, rel }} />;
  }
);

export default TargetBlankLink;
