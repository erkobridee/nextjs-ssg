import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

//----------------------------------------------------------------------------//

import en from './locales/en.json';
import pt from './locales/pt.json';

//----------------------------------------------------------------------------//

// const IS_WEB_BROSER = process.browser;

// https://www.i18next.com/principles/fallback
const fallbackLng = 'en';

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

export const supportedLanguages = Object.keys(resources);

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

// https://www.i18next.com/translation-function/formatting
i18n.on('languageChanged', (lng) => console.log(`language changed to: ${lng}`));

export default i18n;
