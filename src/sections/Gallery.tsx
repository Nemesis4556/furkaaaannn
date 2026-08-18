import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { galleryItems } from '@/data/gallery'

export function Gallery() {
  const reduce = useReducedMotion()
  return (
    <section id="galeri" className="bg-brand-anthracite py-24 md:py-36" aria-label="Galeri">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="text-xs font-bold tracking-[0.28em] text-brand-accent">GALERİ</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-offwhite md:text-5xl">
                Servisten kareler.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-xs text-sm leading-relaxed text-brand-metal">
              Görseller temsilidir; işletmenin gerçek fotoğrafları eklendiğinde güncellenecektir.
            </p>
          </Reveal>
        </div>

        {/* Editorial masonry */}
        <div className="mt-14 columns-2 gap-4 md:columns-3 md:gap-5 [column-fill:_balance]">
          {galleryItems.map((g, i) => (
            <motion.figure
              key={g.src + i}
              initial={reduce ? false : { opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl md:mb-5"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  g.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-2 text-sm font-semibold text-brand-offwhite opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
