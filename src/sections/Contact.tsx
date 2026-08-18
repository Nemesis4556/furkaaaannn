import { MapPin, MessageCircle, Navigation, Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { googleMapsUrl, site, whatsappHref } from '@/data/site'

export function Contact() {
  return (
    <section id="iletisim" className="bg-brand-anthracite py-24 md:py-36" aria-label="İletişim">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Sol: bilgiler */}
        <div>
          <Reveal>
            <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">İLETİŞİM</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-5xl">
              Bize ulaşın.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-10 space-y-7">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-accent">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-[0.2em] text-brand-metal">ADRES</span>
                  <span className="mt-1 block text-lg font-medium leading-snug text-brand-offwhite">
                    {site.address}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-accent">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-[0.2em] text-brand-metal">TELEFON</span>
                  <a
                    href={site.phoneHref}
                    className="link-underline mt-1 inline-block text-lg font-medium text-brand-offwhite transition-colors hover:text-brand-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-accent">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-bold tracking-[0.2em] text-brand-metal">WHATSAPP</span>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-1 inline-block text-lg font-medium text-brand-offwhite transition-colors hover:text-brand-accent"
                  >
                    Mesaj gönderin
                  </a>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Sağ: yol tarifi kartı */}
        <Reveal delay={0.15} className="lg:pt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-black p-8 md:p-10">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-brand-accent/20"
            />
            <Navigation className="h-9 w-9 text-brand-accent" aria-hidden />
            <h3 className="mt-6 font-display text-2xl font-bold text-brand-offwhite">Servisimize nasıl gelirsiniz?</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-metal">
              Kethüda Mahallesi'ndeki konumumuz için Google Maps üzerinden yol tarifi alabilirsiniz.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-accentHover"
              >
                <Navigation className="h-5 w-5" aria-hidden />
                Google Maps'te Yol Tarifi Al
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-brand-offwhite transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Ara
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-brand-offwhite transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
