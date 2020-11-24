import { useTranslation } from 'react-i18next';

import TopNavBase from 'components/TopNav/Base';

const menuItems = [{ label: 'JSON Placeholder', href: '/jsonplaceholder' }];

export const TopNavHome = () => {
  const { t } = useTranslation();
  return <TopNavBase label={`${t('Samples')}:`} items={menuItems} />;
};

export default TopNavHome;
