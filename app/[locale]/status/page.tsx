import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { SecondaryPage } from '@/components/SecondaryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status — Meristem',
  description: 'Operational status of Meristem services.',
}

export default async function StatusPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <StatusContent />
}

function StatusContent() {
  const t = useTranslations('statusPage')

  return (
    <SecondaryPage title={t('title')}>
      <div className="flex items-center gap-3">
        <span className="block h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="font-medium text-stone-900">
          {t('allOperational')}
        </span>
      </div>
      <p>
        {t('paragraph')}{' '}
        <a
          href="mailto:hola@meristem.mx"
          className="text-accent underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          hola@meristem.mx
        </a>
        .
      </p>
    </SecondaryPage>
  )
}
