import * as React from 'react';

import HtmlHead from 'components/HtmlHead';
import TopNavJsonPlaceholder from 'components/TopNav/JsonPlaceholder';

import LayoutBase from 'components/Layout/Base';

export interface ILayoutJsonPlaceholderProps {
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const LayoutJsonPlaceholder: React.FunctionComponent<
  ILayoutJsonPlaceholderProps
> = ({ children, className, containerClassName }) => (
  <LayoutBase
    {...{
      children,
      className,
      containerClassName,
      header: <TopNavJsonPlaceholder />,
      htmlHead: <HtmlHead title="JSON Placeholder" />,
    }}
  />
);

export default LayoutJsonPlaceholder;
