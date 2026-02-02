import { TRUST } from '@/lib/constants'

export function Trust() {
  return (
    <section id="trust" className="border-t border-stone-200 py-16 sm:py-20">
      <div className="mx-auto max-w-prose-narrow px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {TRUST.heading}
        </h2>
        <p className="mt-4 text-lg text-stone-500">{TRUST.intro}</p>

        <div className="mt-10 space-y-10">
          {TRUST.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-medium text-stone-900">
                {section.title}
              </h3>
              {'text' in section && (
                <p className="mt-2 leading-relaxed text-stone-600">
                  {section.text}
                </p>
              )}
              {'bullets' in section && section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-stone-600"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
