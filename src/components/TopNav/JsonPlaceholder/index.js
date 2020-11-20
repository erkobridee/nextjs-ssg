import InternalLink from 'components/Link/Internal';

import styles from './index.module.scss';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'JsonPlaceholder', href: '/jsonplaceholder' },
  { label: 'Users', href: '/jsonplaceholder/users' },
];

export const TopNavJsonPlaceholder = () => (
  <div className={styles.nav}>
    <ul>
      {menuItems.map(({ label, href }, idx) => (
        <li key={idx}>
          <InternalLink activeClassName={styles.activeLink} href={href}>
            {label}
          </InternalLink>
        </li>
      ))}
    </ul>
  </div>
);

export default TopNavJsonPlaceholder;
