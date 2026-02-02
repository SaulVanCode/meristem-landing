import { Hero } from '@/components/Hero'
import { WhatIsMeristem } from '@/components/WhatIsMeristem'
import { WhyExists } from '@/components/WhyExists'
import { Principles } from '@/components/Principles'
import { ProductLens } from '@/components/ProductLens'
import { Trust } from '@/components/Trust'

export const dynamic = 'force-static'

export default function Home() {
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
