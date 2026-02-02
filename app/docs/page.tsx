import { SecondaryPage } from '@/components/SecondaryPage'
import { URLS } from '@/lib/constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation — Meristem',
  description: 'Meristem product documentation and resources.',
}

export default function DocsPage() {
  return (
    <SecondaryPage title="Documentation">
      <p>
        Product documentation for Meristem Lens is available on the Lens
        platform.
      </p>
      <p>
        <a
          href={URLS.lens}
          className="text-accent underline underline-offset-2 hover:text-stone-900 transition-colors"
        >
          Go to Meristem Lens
        </a>{' '}
        to access installation guides, API reference, and integration
        documentation.
      </p>
      <p className="text-sm text-stone-400">
        Documentation for the Meristem ecosystem and additional products will
        be published here as they become available.
      </p>
    </SecondaryPage>
  )
}
