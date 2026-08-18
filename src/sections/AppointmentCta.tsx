import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, whatsappHref } from '@/data/site'

export function AppointmentCta() {
  return (
    <section id="randevu" className="relative overflow-hidden bg-brand-black py-24 md:py-36" aria-label="Randevu">
      {/* arka plan dokusu */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-white/5 lg:block"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-brand-accent/15 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">RANDEVU</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-6xl">
            Aracınız için doğru zamanı <span className="text-brand-accent">şimdi</span> planlayın.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-metal">
            Servis ve bilgi için bizimle iletişime geçin.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-accentHover"
            >
              Servis Randevusu Al
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-brand-offwhite transition-all hover:border-brand-accent hover:text-brand-accent"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp'tan Ulaş
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-2 py-4 font-display text-xl font-bold text-brand-offwhite transition-colors hover:text-brand-accent sm:px-6"
            >
              <Phone className="h-5 w-5 text-brand-accent" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
