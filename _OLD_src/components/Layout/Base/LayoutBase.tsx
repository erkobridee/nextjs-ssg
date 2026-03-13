import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import HtmlHead from 'components/HtmlHead';
import TargetBlankLink from 'components/Link/TargetBlank';

import { updateAssetsPrefix } from 'utils/path';

const styles = {
  header: 'flex items-center border border-gray-200 min-h-[60px] w-full px-4',
  container: 'p-0 flex flex-col min-h-screen',
  main: 'px-4 flex flex-col flex-1',
  footer:
    'mt-6 w-full h-16 border-t border-gray-200 flex justify-center items-center space-x-2',
  footerLink: 'flex justify-center items-center',
  footerLogo: 'ml-2 h-4',
};

export interface ILayoutBaseProps {
  htmlHead?: JSX.Element;
  header?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const LayoutBase: React.FunctionComponent<ILayoutBaseProps> = ({
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
          <TargetBlankLink
            className={styles.footerLink}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            {`${t('Powered by')} `}
            <img
              src={updateAssetsPrefix('vercel.svg')}
              alt="Vercel Logo"
              className={styles.footerLogo}
            />
          </TargetBlankLink>

          <TargetBlankLink href="https://nextjs.org/">
            <img
              src="https://img.shields.io/badge/-NextJS-000?&logo=next.js"
              alt="Next.js Logo"
            />
          </TargetBlankLink>

          <TargetBlankLink href="https://tailwindcss.com/">
            <img
              src="https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss"
              alt="TailwindCSS Logo"
            />
          </TargetBlankLink>
        </footer>
      </div>
    </>
  );
};

export default LayoutBase;
