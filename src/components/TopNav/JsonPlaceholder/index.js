import { useTranslation } from 'react-i18next';

import TopNavBase from 'components/TopNav/Base';

const buildMenuItems = (t) => [
  { label: t('Home'), href: '/' },
  { label: 'Json Placeholder', href: '/jsonplaceholder' },
  { label: t('Users'), href: '/jsonplaceholder/users' },
];

export const TopNavJsonPlaceholder = () => {
  const { t } = useTranslation();
  return <TopNavBase items={buildMenuItems(t)} />;
};

export default TopNavJsonPlaceholder;
