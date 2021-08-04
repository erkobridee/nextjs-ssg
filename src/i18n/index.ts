import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

//----------------------------------------------------------------------------//

import en from './locales/en.json';
import pt from './locales/pt.json';

//----------------------------------------------------------------------------//

// const IS_WEB_BROSER = process.browser;

// https://www.i18next.com/principles/fallback
export const fallbackLng = 'en';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

export const DEFAULT_NS = 'translation';

export const supportedLanguages = ['en', 'pt'];

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
  if (i18n.hasResourceBundle(language, DEFAULT_NS)) {
    return Promise.resolve('loaded');
  }

  try {
    const module = await import(`./locales/${language}.json`);
    i18n.addResourceBundle(language, DEFAULT_NS, module.default, true, true);
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
