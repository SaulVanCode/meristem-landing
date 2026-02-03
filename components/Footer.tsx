'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { URLS } from '@/lib/constants'

export function Footer() {
  const t = useTranslations('footer')
  const st = useTranslations('site')

  const columns = [
    {
      title: t('product'),
      links: [
        { label: t('meristemLens'), href: URLS.lens, external: true },
        { label: t('pricing'), href: '/pricing', external: false },
      ],
    },
    {
      title: t('company'),
      links: [
        { label: t('about'), href: '/#what', external: true },
        { label: t('security'), href: URLS.security, external: true },
      ],
    },
    {
      title: t('resources'),
      links: [
        { label: t('documentation'), href: '/docs', external: false },
        { label: t('contact'), href: URLS.contact, external: true },
        { label: t('status'), href: '/status', external: false },
      ],
    },
  ]

  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-stone-900">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-stone-500 transition-colors hover:text-stone-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-stone-500 transition-colors hover:text-stone-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-sm text-stone-500">
            {st('company')} &mdash; {st('location')}
          </p>
          <p className="mt-1 text-sm text-stone-400">{st('tagline')}</p>
          <p className="mt-3 text-xs text-stone-400">{t('clarification')}</p>
        </div>
      </div>
    </footer>
  )
}
