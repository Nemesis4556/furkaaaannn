import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Minus, Phone, Plus } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/services'
import { site } from '@/data/site'

export function Services() {
  const [active, setActive] = useState(0)
  const [openMobile, setOpenMobile] = useState<number | null>(0)
  const reduce = useReducedMotion()

  return (
    <section id="hizmetler" className="bg-brand-black py-24 md:py-36" aria-label="Hizmetler">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">HİZMETLER</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-5xl">
            Aracınızın ihtiyacına göre şekillenen servis yaklaşımı.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-metal">
            Hizmet kapsamı ve aracınıza özel detaylar için bizimle iletişime geçin.
          </p>
        </Reveal>

        {/* ===== Desktop: liste + değişen görsel ===== */}
        <div className="mt-16 hidden gap-14 lg:grid lg:grid-cols-2">
          <ul role="list" className="divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => {
              const isActive = active === i
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className="group flex w-full items-center gap-6 py-7 text-left"
                  >
                    <span
                      className={`font-display text-sm font-bold tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-brand-accent' : 'text-brand-metal/50'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-display text-2xl font-bold transition-all duration-300 xl:text-3xl ${
                          isActive ? 'translate-x-2 text-brand-offwhite' : 'text-brand-offwhite/60'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`mt-1 block max-w-md text-sm leading-relaxed transition-all duration-300 ${
                          isActive ? 'translate-x-2 text-brand-metal' : 'text-brand-metal/50'
                        }`}
                      >
                        {s.description}
                      </span>
                    </span>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-brand-accent bg-brand-accent text-white'
                          : 'border-white/15 text-brand-metal group-hover:border-brand-accent/60 group-hover:text-brand-accent'
                      }`}
                    >
                      <ArrowUpRight
                        className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'rotate-0' : '-rotate-45'}`}
                        aria-hidden
                      />
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Sağ: yapışkan değişen görsel */}
          <div className="relative">
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={services[active].id}
                  src={services[active].image}
                  alt={services[active].imageAlt}
                  loading="lazy"
                  initial={reduce ? false : { opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/3] w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-brand-offwhite">{services[active].title}</p>
                  <p className="mt-1 text-xs tracking-widest text-brand-metal">
                    {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </p>
                </div>
                <a
                  href={site.phoneHref}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accentHover"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Bilgi Al
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Mobil: accordion ===== */}
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10 lg:hidden">
          {services.map((s, i) => {
            const open = openMobile === i
            return (
              <div key={s.id}>
                <button
                  type="button"
                  onClick={() => setOpenMobile(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`svc-panel-${s.id}`}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm font-bold tracking-widest ${open ? 'text-brand-accent' : 'text-brand-metal/50'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 font-display text-xl font-bold ${open ? 'text-brand-offwhite' : 'text-brand-offwhite/70'}`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                      open ? 'border-brand-accent text-brand-accent' : 'border-white/15 text-brand-metal'
                    }`}
                  >
                    {open ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`svc-panel-${s.id}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-10 pr-2">
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          loading="lazy"
                          className="aspect-[16/10] w-full rounded-xl object-cover"
                        />
                        <p className="mt-4 text-sm leading-relaxed text-brand-metal">{s.description}</p>
                        <a
                          href={site.phoneHref}
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"
                        >
                          <Phone className="h-4 w-4" aria-hidden />
                          Bilgi için ara: {site.phoneDisplay}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
