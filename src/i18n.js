import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import sv from './locales/sv.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sv: { translation: sv },
    },
    lng: 'sv', // Default Language (Swedish)
    fallbackLng: 'en', // If language is missing fallback to english, 
    interpolation: {
      escapeValue: false // 
    },
  });

export default i18n;
