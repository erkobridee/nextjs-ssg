import * as React from 'react';

import InternalLink from 'components/Link/Internal';
import ChangeLanguage from 'components/ChangeLanguage';

import styles from './TopNavBase.module.scss';

export interface ITopNavItem {
  label: string;
  href: string;
}

export interface ITopNavBaseProps {
  label?: React.ReactNode;
  items: ITopNavItem[];
}

export const TopNavBase: React.FunctionComponent<ITopNavBaseProps> = ({
  label,
  items = [],
}) => (
  <div className={styles.nav}>
    {label && <div className={styles.label}>{label}</div>}
    <ul>
      {items.map(({ label, href }, idx) => (
        <li key={idx}>
          <InternalLink activeClassName={styles.activeLink} href={href}>
            {label}
          </InternalLink>
        </li>
      ))}
    </ul>
    <div className={styles.spacer}></div>
    <ChangeLanguage />
  </div>
);

export default TopNavBase;
