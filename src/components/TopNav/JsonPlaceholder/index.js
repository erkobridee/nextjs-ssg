import TopNavBase from 'components/TopNav/Base';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Json Placeholder', href: '/jsonplaceholder' },
  { label: 'Users', href: '/jsonplaceholder/users' },
];

export const TopNavJsonPlaceholder = () => <TopNavBase items={menuItems} />;

export default TopNavJsonPlaceholder;
