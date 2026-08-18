import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { googleMapsUrl, navLinks, site, whatsappHref } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black pb-24 pt-16 lg:pb-10" aria-label="Alt bilgi">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo */}
          <div>
            <a href="#anasayfa" className="flex flex-col leading-none">
              <span className="font-display text-2xl font-extrabold tracking-[0.14em] text-brand-offwhite">
                {site.name}
              </span>
              <span className="mt-1.5 text-xs font-semibold tracking-[0.34em] text-brand-accent">
                {site.tagline}
              </span>
            </a>
            <p className="mt-5 flex max-w-xs items-start gap-2 text-sm leading-relaxed text-brand-metal">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" aria-hidden />
              {site.address}
            </p>
          </div>

          {/* Menü */}
          <nav aria-label="Alt menü">
            <span className="block text-xs font-bold tracking-[0.24em] text-brand-metal">MENÜ</span>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-sm font-medium text-brand-offwhite/75 transition-colors hover:text-brand-offwhite"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* İletişim */}
          <div>
            <span className="block text-xs font-bold tracking-[0.24em] text-brand-metal">İLETİŞİM</span>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-sm font-medium text-brand-offwhite/75 transition-colors hover:text-brand-accent"
                >
                  <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-brand-offwhite/75 transition-colors hover:text-brand-accent"
                >
                  <MessageCircle className="h-4 w-4 text-brand-accent" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-brand-offwhite/75 transition-colors hover:text-brand-accent"
                >
                  <MapPin className="h-4 w-4 text-brand-accent" aria-hidden />
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-xs text-brand-metal md:flex-row md:items-center">
          <span>© 2026 {site.fullName}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  )
}
