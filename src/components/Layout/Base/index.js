import cs from 'classnames';

import HtmlHead from 'components/HtmlHead';
import NewPageLink from 'components/Link/NewPage';

import { updateAssetsPrefix } from 'utils/path';

import styles from './index.module.scss';

export const LayoutBase = ({
  htmlHead = <HtmlHead />,
  header,
  children,
  className,
  containerClassName,
  headerClassName,
}) => (
  <>
    {htmlHead}

    <div className={cs(styles.container, containerClassName)}>
      {header && (
        <header className={cs(styles.header, headerClassName)}>{header}</header>
      )}
      <main className={cs(styles.main, className)}>{children}</main>
      <footer className={styles.footer}>
        <NewPageLink href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          Powered by{' '}
          <img
            src={updateAssetsPrefix('vercel.svg')}
            alt="Vercel Logo"
            className={styles.logo}
          />
        </NewPageLink>
      </footer>
    </div>
  </>
);

export default LayoutBase;
