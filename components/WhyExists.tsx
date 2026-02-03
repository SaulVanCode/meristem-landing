'use client'

import { useTranslations } from 'next-intl'

const paragraphKeys = ['0', '1'] as const
const bulletKeys = ['0', '1', '2', '3'] as const

export function WhyExists() {
  const t = useTranslations('whyExists')

  return (
    <section id="why" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h2>
        {paragraphKeys.map((key) => (
          <p
            key={key}
            className="mt-6 text-lg leading-relaxed text-stone-600"
          >
            {t(`paragraphs.${key}`)}
          </p>
        ))}
        <ul className="mt-6 space-y-5">
          {bulletKeys.map((key) => (
            <li key={key} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">
                {t(`bullets.${key}.title`)}
              </strong>{' '}
              {t(`bullets.${key}.text`)}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg leading-relaxed text-stone-600">
          {t('closing')}
        </p>
      </div>
    </section>
  )
}
