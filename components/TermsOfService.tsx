'use client'

import { useTranslations } from 'next-intl'

const sectionKeys = [
  'acceptance',
  'description',
  'accounts',
  'use',
  'data',
  'ip',
  'availability',
  'liability',
  'payment',
  'termination',
  'changes',
  'law',
  'contact',
] as const

export function TermsOfService() {
  const t = useTranslations('terms')

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h1 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h1>
        <p className="mt-4 text-sm text-stone-500">{t('lastUpdated')}</p>
        <p className="mt-6 leading-relaxed text-stone-600">{t('intro')}</p>

        <div className="mt-12 space-y-10">
          {sectionKeys.map((key, i) => (
            <div key={key}>
              <h2 className="text-base font-medium text-stone-900">
                {i + 1}. {t(`sections.${key}.title`)}
              </h2>
              <p className="mt-2 leading-relaxed text-stone-600">
                {t(`sections.${key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
