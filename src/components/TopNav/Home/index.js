import TopNavBase from 'components/TopNav/Base';

const menuLabel = 'Static Site Samples:';

const menuItems = [{ label: 'JSON Placeholder', href: '/jsonplaceholder' }];

export const TopNavHome = () => (
  <TopNavBase label={menuLabel} items={menuItems} />
);

export default TopNavHome;
