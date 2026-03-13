import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import { supportedLanguages, loadLanguageTranslations } from 'i18n';

import styles from './ChangeLanguage.module.scss';

export const LOCALE_PATTERN_REGEX = /^[a-z]{2}-[a-z]{2}$/i;

export interface IChangeLanguageProps {
  className?: string;
}

export const ChangeLanguage: React.FunctionComponent<IChangeLanguageProps> = ({
  className,
}) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = React.useState(i18n.language);

  React.useEffect(() => {
    i18n.on('languageChanged', setSelectedLanguage);
    window &&
      window.setTimeout(() => {
        let language = i18n.language;
        if (LOCALE_PATTERN_REGEX.test(language)) {
          language = language.split('-')[0];
        }
        setSelectedLanguage(language);
      });
    return () => {
      i18n.off('languageChanged', setSelectedLanguage);
    };
  }, [i18n]);

  const changeLanguage = (language: string) => {
    loadLanguageTranslations(language).then(() =>
      i18n.changeLanguage(language)
    );
  };

  const switchLanguageHandler = React.useCallback(
    (language) => () =>
      selectedLanguage !== language ? changeLanguage(language) : undefined,
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
