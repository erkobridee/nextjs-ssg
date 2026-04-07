// https://github.com/i18next/next-i18next?tab=readme-ov-file#3-configuration

import type { I18nConfig } from 'next-i18next/proxy';

//----------------------------------------------------------------------------//

const i18nConfig: I18nConfig = {
  supportedLngs: ['en', 'pt'],
  fallbackLng: 'en',

  // hideDefaultLocale: true,
  // localeInPath: false,

  // Recommended: works on all platforms including Vercel/serverless
  resourceLoader: (language) => import(`~/i18n/locales/${language}.json`)
};

export default i18nConfig;
