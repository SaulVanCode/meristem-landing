import Link from 'next/link'
import { SITE, URLS } from '@/lib/constants'

const links = [
  { label: 'Lens', href: URLS.lens },
  { label: 'Docs', href: URLS.docs },
  { label: 'Security', href: URLS.security },
  { label: 'Contact', href: URLS.contact },
]

export function Nav() {
  return (
    <header className="border-b border-stone-200 bg-stone-50">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-medium text-stone-900 hover:text-stone-700 transition-colors"
        >
          {SITE.name}
        </Link>
        <ul className="flex gap-4 sm:gap-6 text-sm text-stone-500">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
