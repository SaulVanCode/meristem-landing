'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { URLS } from '@/lib/constants'
import { locales } from '@/i18n/config'
import type { Locale } from '@/i18n/config'

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  pt: 'PT',
  de: 'DE',
  fr: 'FR',
}

export function Nav() {
  const t = useTranslations('nav')
  const st = useTranslations('site')
  const locale = useLocale()

  const links = [
    { label: t('lens'), href: URLS.lens, external: true },
    { label: t('docs'), href: '/docs', external: false },
    { label: t('security'), href: URLS.security, external: true },
    { label: t('contact'), href: URLS.contact, external: true },
  ]

  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-medium text-stone-900 hover:text-stone-700 transition-colors"
        >
          {st('name')}
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex gap-4 sm:gap-6 text-sm text-stone-500">
            {links.map((link) =>
              link.external ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-stone-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-stone-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="flex gap-1 text-xs text-stone-400">
            {locales.map((l) => (
              <Link
                key={l}
                href="/"
                locale={l}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  l === locale
                    ? 'bg-stone-200 text-stone-700 font-medium'
                    : 'hover:text-stone-700'
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
