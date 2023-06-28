/* eslint-disable no-undef */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import vi from './locales/vi.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import { I18LANGUAGE_KEY } from '@src/configs'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      vi: {
        translation: vi
      }
    },
    fallbackLng: ['en', 'vi'],
    lng: localStorage.getItem(I18LANGUAGE_KEY) || 'en',
    interpolation: {
      escapeValue: false
    },
    nsSeparator: ':::',
    keySeparator: '.'
  })

export default i18n
