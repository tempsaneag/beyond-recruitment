import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import headerEN from '@/locales/en/header.json';
import headerRO from '@/locales/ro/header.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: headerEN,
      },
      ro: {
        translations: headerRO,
      },
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
