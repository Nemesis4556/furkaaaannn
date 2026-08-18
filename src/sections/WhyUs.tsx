import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Handshake, MessageSquareText, ShieldCheck, Wrench } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

const values = [
  {
    icon: ShieldCheck,
    title: 'Profesyonel Yaklaşım',
    text: 'Her araca aynı özen ve profesyonellikle yaklaşırız.',
  },
  {
    icon: MessageSquareText,
    title: 'Şeffaf İletişim',
    text: 'Süreç boyunca ne yapıldığını ve neden yapıldığını açıkça anlatırız.',
  },
  {
    icon: Wrench,
    title: 'Titiz İşçilik',
    text: 'Detaylara önem verir, işimizi titizlikle teslim ederiz.',
  },
  {
    icon: Handshake,
    title: 'Müşteri Odaklı Servis',
    text: 'Önceliğimiz sizin güvenle yola devam etmeniz.',
  },
] as const

export function WhyUs() {
  const reduce = useReducedMotion()
  const imgRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-brand-anthracite py-24 md:py-36" aria-label="Neden Furkan Oto">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Editorial metin */}
        <div>
          <Reveal>
            <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">NEDEN FURKAN OTO?</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-5xl lg:text-6xl">
              Sadece aracınızı değil, güveninizi de önemsiyoruz.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-brand-metal">
              Bizim için servis; aracınızın teslim edilmesiyle biten bir işlem değil, güven üzerine kurulu
              bir ilişkidir. İlk aramadan teslimata kadar her adımda yanınızdayız.
            </p>
          </Reveal>

          <ul className="mt-12 space-y-0">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={0.1 + i * 0.08} y={20}>
                <li className="group flex items-start gap-5 border-t border-white/10 py-6 transition-colors last:border-b hover:bg-white/[0.02]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-brand-accent transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent/10">
                    <v.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold text-brand-offwhite">{v.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-brand-metal">{v.text}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Parallax görsel */}
        <div ref={imgRef} className="relative hidden lg:block">
          <div className="sticky top-28 overflow-hidden rounded-2xl">
            <motion.img
              src="/images/gal-2.jpg"
              alt="Lift üzerinde siyah aracın far detayı (temsili görsel)"
              loading="lazy"
              className="h-[640px] w-full object-cover"
              style={reduce ? undefined : { y, scale: 1.15 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-brand-black/60 p-5 backdrop-blur-md">
              <p className="font-display text-lg font-bold text-brand-offwhite">Akhisar'da özel servis deneyimi</p>
              <p className="mt-1 text-sm text-brand-metal">Kethüda Mahallesi'ndeki servisimizde aracınızı ağırlıyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
