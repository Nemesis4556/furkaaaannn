import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { processSteps } from '@/data/process'

export function Process() {
  const reduce = useReducedMotion()
  return (
    <section className="bg-brand-anthracite py-24 md:py-36" aria-label="Servis süreci">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">SÜREÇ</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-5xl">
            Servis süreciniz nasıl ilerliyor?
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-metal">
            İlk iletişimden teslimata kadar sizi bilgilendirerek ilerliyoruz.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* bağlantı çizgisi (desktop) */}
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-brand-anthracite font-display text-base font-extrabold text-brand-accent transition-all duration-300 group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-brand-offwhite">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-metal">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
