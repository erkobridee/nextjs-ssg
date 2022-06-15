import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

//----------------------------------------------------------------------------//

import en from './locales/en.json';

//----------------------------------------------------------------------------//

export const DEFAULT_LANGUAGE_CODE = 'en';

// https://www.i18next.com/principles/fallback
export const fallbackLng = DEFAULT_LANGUAGE_CODE;

const resources = {
  en: {
    translation: en,
  },
};

export const DEFAULT_NS = 'translation';

export const languagesOptions = {
  en: 'English',
  pt: 'Português',
};

export const supportedLanguages = Object.keys(languagesOptions);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,

    resources,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export const loadLanguageTranslations = async (language: string) => {
  language = language.substring(0, 2);

  if (!supportedLanguages.includes(language)) {
    return Promise.reject(`The language ${language} is not supported.`);
  }

  if (i18n.hasResourceBundle(language, DEFAULT_NS)) {
    return Promise.resolve('loaded');
  }

  try {
    const languageLocale = await import(`./locales/${language}.json`);
    i18n.addResourceBundle(
      language,
      DEFAULT_NS,
      languageLocale.default,
      true,
      true
    );
    return Promise.resolve('loaded');
  } catch (error) {
    const message = `file not found: ${language}.json`;
    console.error(message, error);
    return Promise.reject(message);
  }
};

// https://www.i18next.com/translation-function/formatting
i18n.on('languageChanged', (lng) => console.log(`language changed to: ${lng}`));

export default i18n;
