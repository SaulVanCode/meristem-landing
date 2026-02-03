import { setRequestLocale } from 'next-intl/server'
import { TermsOfService } from '@/components/TermsOfService'

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <TermsOfService />
}
