import Link from 'next/link'
import { URLS } from '@/lib/constants'

export function SecondaryPage({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h1 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {title}
        </h1>
        <div className="mt-8 space-y-6 text-stone-600 leading-relaxed">
          {children}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link
            href="/"
            className="text-stone-500 transition-colors hover:text-stone-900"
          >
            &larr; Home
          </Link>
          <a
            href={URLS.lens}
            className="text-stone-500 transition-colors hover:text-stone-900"
          >
            Go to Meristem Lens
          </a>
        </div>
      </div>
    </section>
  )
}
