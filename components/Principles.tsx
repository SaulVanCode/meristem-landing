'use client'

import { useTranslations } from 'next-intl'

const itemKeys = ['0', '1', '2', '3', '4'] as const

export function Principles() {
  const t = useTranslations('principles')

  return (
    <section
      id="principles"
      className="border-t border-stone-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {itemKeys.map((key) => (
            <div
              key={key}
              className="rounded-lg border border-stone-200 bg-white p-6"
            >
              <h3 className="font-medium text-stone-900">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
