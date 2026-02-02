import { PRINCIPLES } from '@/lib/constants'

export function Principles() {
  return (
    <section
      id="principles"
      className="border-t border-stone-200 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-2xl font-medium text-stone-900 sm:text-3xl">
          {PRINCIPLES.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-stone-200 bg-white p-6"
            >
              <h3 className="font-medium text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
