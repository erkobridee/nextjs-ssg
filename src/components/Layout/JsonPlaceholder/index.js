import HtmlHead from 'components/HtmlHead';
import TopNavJsonPlaceholder from 'components/TopNav/JsonPlaceholder';

import LayoutBase from 'components/Layout/Base';

export const LayoutJsonPlaceholder = ({
  children,
  className,
  containerClassName,
}) => (
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
