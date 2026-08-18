import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, MessageCircle, Star } from 'lucide-react'
import { site, whatsappHref } from '@/data/site'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="anasayfa"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Giriş"
    >
      {/* Arkaplan görseli — parallax */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imgY, scale: imgScale }}>
        <img
          src="/images/hero.jpg"
          alt="Liftteki araç ile modern oto servis atölyesi (temsili görsel)"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      {/* Kontrast katmanları */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/55 to-brand-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 via-transparent to-transparent" />

      <motion.div
        variants={reduce ? undefined : container}
        initial="hidden"
        animate="show"
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-28 pt-36 md:px-8 md:pb-36"
      >
        {/* Badge */}
        <motion.div variants={reduce ? undefined : item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-brand-offwhite/90 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-brand-accent" aria-hidden />
            AKHİSAR / MANİSA — ÖZEL SERVİS
          </span>
        </motion.div>

        {/* Başlık */}
        <motion.h1
          variants={reduce ? undefined : item}
          className="mt-6 max-w-4xl text-balance font-display text-[13vw] font-extrabold leading-[0.98] tracking-tight text-brand-offwhite sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Aracınız için
          <br />
          <span className="text-brand-accent">doğru servis.</span>
        </motion.h1>

        {/* Alt başlık */}
        <motion.p
          variants={reduce ? undefined : item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-brand-offwhite/75 md:text-xl"
        >
          Güvenilir bakım, profesyonel işçilik ve hızlı servis deneyimi.
        </motion.p>

        {/* CTA'lar */}
        <motion.div variants={reduce ? undefined : item} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#randevu"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-4 text-base font-semibold text-white transition-all hover:bg-brand-accentHover"
          >
            Servis Randevusu Al
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-brand-offwhite backdrop-blur-sm transition-all hover:border-brand-accent hover:text-brand-accent"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            WhatsApp'tan Ulaş
          </a>
        </motion.div>

        {/* Rating */}
        <motion.div
          variants={reduce ? undefined : item}
          className="mt-10 flex flex-wrap items-center gap-3 text-brand-offwhite/85"
        >
          <span className="flex items-center gap-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
            ))}
          </span>
          <span className="font-display text-lg font-bold">{site.rating.toFixed(1).replace('.', ',')} / 5</span>
          <span className="text-sm text-brand-offwhite/60">
            · {site.reviewCount} Google değerlendirmesi
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll göstergesi */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            className="block h-2 w-1 rounded-full bg-brand-accent"
            animate={reduce ? undefined : { y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
