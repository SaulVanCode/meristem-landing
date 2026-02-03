'use client'

import { useTranslations } from 'next-intl'

const securityBulletKeys = ['0', '1', '2', '3', '4'] as const

export function Trust() {
  const t = useTranslations('trust')

  return (
    <section id="trust" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {t('heading')}
        </h2>
        <p className="mt-4 text-lg text-stone-500">{t('intro')}</p>

        <div className="mt-10 space-y-10">
          {/* Auditability */}
          <div>
            <h3 className="text-base font-medium text-stone-900">
              {t('sections.auditability.title')}
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              {t('sections.auditability.text')}
            </p>
          </div>

          {/* Security posture */}
          <div>
            <h3 className="text-base font-medium text-stone-900">
              {t('sections.security.title')}
            </h3>
            <ul className="mt-3 space-y-2">
              {securityBulletKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 text-stone-600"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-400" />
                  {t(`sections.security.bullets.${key}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-base font-medium text-stone-900">
              {t('sections.compliance.title')}
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              {t('sections.compliance.text')}
            </p>
          </div>

          {/* No vendor lock-in */}
          <div>
            <h3 className="text-base font-medium text-stone-900">
              {t('sections.noLockin.title')}
            </h3>
            <p className="mt-2 leading-relaxed text-stone-600">
              {t('sections.noLockin.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
