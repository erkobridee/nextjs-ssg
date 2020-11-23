import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './index.module.scss';

export const ChangeLanguage = () => {
  const {
    pathname,
    defaultLocale,
    locale: selectedLocale,
    locales,
  } = useRouter();

  console.log('ChangeLanguage', {
    pathname,
    defaultLocale,
    selectedLocale,
    locales,
  });

  return (
    <div className={styles.switchLanguage}>
      <div className={styles.label}>Change Language:</div>
      <ul>
        {locales.map((locale, idx) => (
          <li key={idx}>
            {locale !== selectedLocale ? (
              <Link
                {...{
                  href: pathname,
                  locale,
                  children: locale,
                }}
              />
            ) : (
              <div className={styles.selected}>{locale}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeLanguage;
