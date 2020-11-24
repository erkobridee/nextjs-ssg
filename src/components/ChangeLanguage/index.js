import cs from 'classnames';
import { useTranslation } from 'react-i18next';

import { supportedLanguages } from 'i18n';

import styles from './index.module.scss';

export const ChangeLanguage = ({ className }) => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const switchLanguageHandler = (language) => () =>
    selectedLanguage !== language ? i18n.changeLanguage(language) : undefined;

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
