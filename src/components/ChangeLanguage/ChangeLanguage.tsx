import * as React from 'react';

import cs from 'clsx';
import { useTranslation } from 'react-i18next';

import { supportedLanguages } from 'i18n';

import styles from './ChangeLanguage.module.scss';

export interface IChangeLanguageProps {
  className?: string;
}

const DEFAULT_LANGUAGE = 'en';

export const ChangeLanguage: React.FunctionComponent<IChangeLanguageProps> = ({
  className,
}) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(DEFAULT_LANGUAGE);

  React.useEffect(() => {
    i18n.on('languageChanged', setSelectedLanguage);
    window &&
      window.setTimeout(() => {
        setSelectedLanguage(i18n.language);
      });
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
