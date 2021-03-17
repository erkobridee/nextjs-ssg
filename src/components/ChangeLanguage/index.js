import React from 'react';
import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import { supportedLanguages } from 'i18n';

import styles from './index.module.scss';

const loadSelectedLanguage = () => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  return window.localStorage.getItem('i18nextLng') || 'en';
};

export const ChangeLanguage = ({ className }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  React.useEffect(() => {
    i18n.on('languageChanged', setSelectedLanguage);
    setSelectedLanguage(window.localStorage.getItem('i18nextLng') || 'en');
    return () => {
      i18n.off('languageChanged', setSelectedLanguage);
    };
  }, [i18n]);

  const switchLanguageHandler = React.useCallback(
    (language) => () =>
      selectedLanguage !== language ? i18n.changeLanguage(language) : undefined,
    [selectedLanguage]
  );

  return (
    <div className={cs(styles.container, className)}>
      <ul>
        {supportedLanguages.map((lng, idx) => (
          <li
            key={idx}
            className={cs(styles.option, {
              [`${styles.selected}`]: lng === selectedLanguage,
            })}
            onClick={switchLanguageHandler(lng)}
          >
            {lng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeLanguage;
