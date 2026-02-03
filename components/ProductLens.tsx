'use client'

import { useTranslations } from 'next-intl'
import { URLS } from '@/lib/constants'

const capKeys = ['0', '1', '2', '3', '4'] as const
const doesNotKeys = ['0', '1', '2', '3', '4'] as const

export function ProductLens() {
  const t = useTranslations('productLens')

  return (
    <section
      id="lens"
      className="border-t border-stone-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-prose-narrow px-6">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          {t('flagshipLabel')}
        </p>
        <h2 className="mt-2 text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h2>
        <p className="mt-1 text-lg text-stone-500">{t('subheading')}</p>

        <p className="mt-8 text-lg leading-relaxed text-stone-600">
          {t('description')}
        </p>

        <ul className="mt-6 space-y-2">
          {capKeys.map((key) => (
            <li
              key={key}
              className="flex items-start gap-3 text-stone-600"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {t(`capabilities.${key}`)}
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-lg font-medium text-stone-900">
          {t('doesNotHeading')}
        </h3>
        <ul className="mt-4 space-y-5">
          {doesNotKeys.map((key) => (
            <li key={key} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">
                {t(`doesNot.${key}.title`)}
              </strong>{' '}
              {t(`doesNot.${key}.text`)}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-lg leading-relaxed text-stone-600">
          {t('safe')}
        </p>

        <div className="mt-10">
          <a
            href={URLS.lens}
            className="inline-flex items-center rounded bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
