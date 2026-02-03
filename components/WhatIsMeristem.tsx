'use client'

import { useTranslations } from 'next-intl'

const bulletKeys = ['0', '1', '2', '3'] as const

export function WhatIsMeristem() {
  const t = useTranslations('whatIs')

  return (
    <section id="what" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          {t('paragraph')}
        </p>
        <ul className="mt-8 space-y-5">
          {bulletKeys.map((key) => (
            <li key={key} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">
                {t(`bullets.${key}.title`)}
              </strong>{' '}
              {t(`bullets.${key}.text`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
