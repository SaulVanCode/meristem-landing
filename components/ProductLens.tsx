import { PRODUCT_LENS } from '@/lib/constants'

export function ProductLens() {
  return (
    <section
      id="lens"
      className="border-t border-stone-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-prose-narrow px-6">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          Flagship Product
        </p>
        <h2 className="mt-2 text-2xl font-medium text-stone-900 sm:text-3xl">
          {PRODUCT_LENS.heading}
        </h2>
        <p className="mt-1 text-lg text-stone-500">{PRODUCT_LENS.subheading}</p>

        <p className="mt-8 text-lg leading-relaxed text-stone-600">
          {PRODUCT_LENS.description}
        </p>

        <ul className="mt-6 space-y-2">
          {PRODUCT_LENS.capabilities.map((cap) => (
            <li
              key={cap}
              className="flex items-start gap-3 text-stone-600"
            >
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {cap}
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-lg font-medium text-stone-900">
          What Meristem Lens does not do
        </h3>
        <ul className="mt-4 space-y-5">
          {PRODUCT_LENS.doesNot.map((item) => (
            <li key={item.title} className="leading-relaxed text-stone-600">
              <strong className="text-stone-900">{item.title}</strong>{' '}
              {item.text}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-lg leading-relaxed text-stone-600">
          {PRODUCT_LENS.safe}
        </p>

        <div className="mt-10">
          <a
            href={PRODUCT_LENS.cta.href}
            className="inline-flex items-center rounded bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            {PRODUCT_LENS.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
