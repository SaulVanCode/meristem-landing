import { getRequestConfig } from 'next-intl/server'
import { locales, type Locale } from './config'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) as Locale) || 'en'

  if (!locales.includes(locale)) {
    return { locale: 'en', messages: (await import('../messages/en.json')).default }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
