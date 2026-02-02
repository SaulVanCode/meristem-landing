import { SecondaryPage } from '@/components/SecondaryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status — Meristem',
  description: 'Operational status of Meristem services.',
}

export default function StatusPage() {
  return (
    <SecondaryPage title="Status">
      <div className="flex items-center gap-3">
        <span className="block h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="font-medium text-stone-900">All systems operational</span>
      </div>
      <p>
        Meristem Lens and all supporting services are running normally. If you
        experience issues, contact{' '}
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
