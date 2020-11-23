import HtmlHead from 'components/HtmlHead';
import TopNavI18n from 'components/TopNav/I18n';

import LayoutBase from 'components/Layout/Base';

export const LayoutI18n = ({ children, className, containerClassName }) => (
  <LayoutBase
    {...{
      children,
      className,
      containerClassName,
      header: <TopNavI18n />,
      htmlHead: <HtmlHead title="i18n" />,
    }}
  />
);

export default LayoutI18n;
