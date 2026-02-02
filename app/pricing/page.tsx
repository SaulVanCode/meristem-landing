import { SecondaryPage } from '@/components/SecondaryPage'
import { URLS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Meristem',
  description: 'Meristem Lens pricing and plans.',
}

export default function PricingPage() {
  return (
    <SecondaryPage title="Pricing">
      <p>
        Meristem Lens pricing and plan details are available on the Lens
        platform.
      </p>
      <p>
        <a
          href={URLS.lens}
          className="text-accent underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          View plans on Meristem Lens
        </a>
      </p>
      <p className="text-sm text-stone-400">
        For enterprise pricing or custom arrangements, contact{' '}
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
