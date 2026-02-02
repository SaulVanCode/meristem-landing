import { WHY_EXISTS } from '@/lib/constants'

export function WhyExists() {
  return (
    <section id="why" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {WHY_EXISTS.heading}
        </h2>
        {WHY_EXISTS.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="mt-6 text-lg leading-relaxed text-stone-600"
          >
            {paragraph}
          </p>
        ))}
        <ul className="mt-6 space-y-5">
          {WHY_EXISTS.bullets.map((bullet) => (
            <li key={bullet.title} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">{bullet.title}</strong>{' '}
              {bullet.text}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg leading-relaxed text-stone-600">
          {WHY_EXISTS.closing}
        </p>
      </div>
    </section>
  )
}
