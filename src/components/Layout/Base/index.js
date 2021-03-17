import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import HtmlHead from 'components/HtmlHead';
import TargetBlankLink from 'components/Link/TargetBlank';

import { updateAssetsPrefix } from 'utils/path';

import styles from './index.module.scss';

export const LayoutBase = ({
  htmlHead = <HtmlHead />,
  header,
  children,
  className,
  containerClassName,
  headerClassName,
}) => {
  const { t } = useTranslation();

  return (
    <>
      {htmlHead}

      <div className={cs(styles.container, containerClassName)}>
        {header && (
          <header className={cs(styles.header, headerClassName)}>
            {header}
          </header>
        )}
        <main className={cs(styles.main, className)}>{children}</main>
        <footer className={styles.footer}>
          <TargetBlankLink href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            {`${t('Powered by')} `}
            <img
              src={updateAssetsPrefix('vercel.svg')}
              alt="Vercel Logo"
              className={styles.logo}
            />
          </TargetBlankLink>
        </footer>
      </div>
    </>
  );
};

export default LayoutBase;
