import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { SecondaryPage } from '@/components/SecondaryPage'
import { URLS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Meristem',
  description: 'Meristem Lens pricing and plans.',
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <PricingContent />
}

function PricingContent() {
  const t = useTranslations('pricingPage')

  return (
    <SecondaryPage title={t('title')}>
      <p>{t('paragraph')}</p>
      <p>
        <a
          href={URLS.lens}
          className="text-accent underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          {t('lensLink')}
        </a>
      </p>
      <p className="text-sm text-stone-400">
        {t('enterprise')}{' '}
        <a
          href="mailto:hola@meristem.mx"
          className="underline underline-offset-2"
        >
          hola@meristem.mx
        </a>
        .
      </p>
    </SecondaryPage>
  )
}
