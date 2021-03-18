import * as React from 'react';

import { useTranslation } from 'react-i18next';

import { TopNavBase, ITopNavItem } from 'components/TopNav/Base';

const buildMenuItems = (t): ITopNavItem[] => [
  { label: t('Home'), href: '/' },
  { label: 'Json Placeholder', href: '/jsonplaceholder' },
  { label: t('Users'), href: '/jsonplaceholder/users' },
];

export const TopNavJsonPlaceholder: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return <TopNavBase items={buildMenuItems(t)} />;
};

export default TopNavJsonPlaceholder;
