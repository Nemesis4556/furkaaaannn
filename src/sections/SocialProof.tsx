import { ArrowUpRight, Star } from 'lucide-react'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import { googleMapsUrl, site } from '@/data/site'

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24 md:py-36" aria-label="Google değerlendirmeleri">
      {/* ince accent çizgisi */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">GOOGLE DEĞERLENDİRMELERİ</span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-end justify-center gap-3">
            <span className="font-display text-[7rem] font-extrabold leading-none tracking-tight text-brand-offwhite md:text-[11rem]">
              <CountUp to={site.rating} decimals={1} duration={1.8} />
            </span>
            <span className="mb-5 font-display text-2xl font-bold text-brand-metal md:mb-9 md:text-4xl">/ 5</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-4 flex items-center justify-center gap-2" aria-label="5 üzerinden 5 yıldız">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-brand-accent text-brand-accent md:h-9 md:w-9" aria-hidden />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-6 text-lg text-brand-metal md:text-xl">
            <span className="font-display font-bold text-brand-offwhite">{site.reviewCount}</span> Google değerlendirmesi
          </p>
        </Reveal>

        <Reveal delay={0.36}>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-brand-offwhite transition-all hover:border-brand-accent hover:text-brand-accent"
          >
            Google'da Bizi İnceleyin
            <ArrowUpRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
