import { WHAT_IS } from '@/lib/constants'

export function WhatIsMeristem() {
  return (
    <section id="what" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {WHAT_IS.heading}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-stone-600">
          {WHAT_IS.paragraph}
        </p>
        <ul className="mt-8 space-y-5">
          {WHAT_IS.bullets.map((bullet) => (
            <li key={bullet.title} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">{bullet.title}</strong>{' '}
              {bullet.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
