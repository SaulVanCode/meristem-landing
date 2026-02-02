import { SITE, FOOTER } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-12 sm:py-16">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-medium text-stone-900">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-sm text-stone-500">
            {SITE.company} &mdash; {SITE.location}
          </p>
          <p className="mt-1 text-sm text-stone-400">{SITE.tagline}</p>
          <p className="mt-3 text-xs text-stone-400">
            {FOOTER.clarification}
          </p>
        </div>
      </div>
    </footer>
  )
}
