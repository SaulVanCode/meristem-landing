import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { SecondaryPage } from '@/components/SecondaryPage'
import { URLS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation — Meristem',
  description: 'Meristem product documentation and resources.',
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <DocsContent />
}

function DocsContent() {
  const t = useTranslations('docsPage')

  return (
    <SecondaryPage title={t('title')}>
      <p>{t('paragraph')}</p>
      <p>
        <a
          href={URLS.lens}
          className="text-accent underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          {t('lensLink')}
        </a>{' '}
        {t('lensLinkSuffix')}
      </p>
      <p className="text-sm text-stone-400">{t('comingSoon')}</p>
    </SecondaryPage>
  )
}
