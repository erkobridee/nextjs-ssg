import TopNavBase from 'components/TopNav/Base';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'i18n', href: '/i18n' },
];

export const TopNavI18n = () => <TopNavBase items={menuItems} />;

export default TopNavI18n;
