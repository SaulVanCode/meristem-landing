import { setRequestLocale } from 'next-intl/server'
import { Hero } from '@/components/Hero'
import { WhatIsMeristem } from '@/components/WhatIsMeristem'
import { WhyExists } from '@/components/WhyExists'
import { Principles } from '@/components/Principles'
import { ProductLens } from '@/components/ProductLens'
import { Trust } from '@/components/Trust'

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <WhatIsMeristem />
      <WhyExists />
      <Principles />
      <ProductLens />
      <Trust />
    </>
  )
}
