import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { TopNavBase, ITopNavItem } from 'components/TopNav/Base';

const menuItems: ITopNavItem[] = [
  { label: 'JSON Placeholder', href: '/jsonplaceholder' },
];

export const TopNavHome: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return <TopNavBase label={`${t('Samples')}:`} items={menuItems} />;
};

export default TopNavHome;
