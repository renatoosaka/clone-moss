import path from 'path'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider, useTranslation } from 'react-i18next'
import { resources } from '../locales'

import { useRouter } from 'next/router'

import '../styles/globals.css'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    debug: true, 
    interpolation: {
      escapeValue: false
    },
    resources 
  })

function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation();

  const { locale } = useRouter();

  i18n.changeLanguage(locale)

  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
