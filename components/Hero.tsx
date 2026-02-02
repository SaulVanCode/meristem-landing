import { HERO } from '@/lib/constants'

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        {/* Alternative headline: "Human-controlled software for high-trust environments." */}
        <h1 className="max-w-2xl text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
          {HERO.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-stone-500 sm:text-xl">
          {HERO.subheadline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={HERO.primaryCta.href}
            className="inline-flex items-center rounded bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800"
          >
            {HERO.primaryCta.label}
          </a>
          <a
            href={HERO.secondaryCta.href}
            className="inline-flex items-center rounded border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
          >
            {HERO.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
