import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { navLinks, site, whatsappHref } from '@/data/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/10 bg-brand-black/85 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          aria-label="Ana menü"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8"
        >
          {/* Logo */}
          <a href="#anasayfa" className="group flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-[0.14em] text-brand-offwhite">
              {site.name}
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.34em] text-brand-accent">
              {site.tagline}
            </span>
          </a>

          {/* Desktop menü */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="link-underline text-sm font-medium text-brand-offwhite/80 transition-colors hover:text-brand-offwhite"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Sağ: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              aria-label={`Telefon: ${site.phoneDisplay}`}
              className="hidden items-center gap-2 text-sm font-medium text-brand-offwhite/80 transition-colors hover:text-brand-offwhite md:flex lg:hidden xl:flex"
            >
              <Phone className="h-4 w-4 text-brand-accent" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href="#randevu"
              className="group hidden items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-accentHover sm:inline-flex"
            >
              Servis Randevusu
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menüyü aç"
              aria-expanded={open}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-offwhite transition-colors hover:border-brand-accent hover:text-brand-accent lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobil tam ekran menü */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobil menü"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand-black"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-[0.14em] text-brand-offwhite">
                  {site.name}
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-[0.34em] text-brand-accent">
                  {site.tagline}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Menüyü kapat"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-offwhite transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobil menü" className="flex flex-1 flex-col justify-center px-6">
              <ul className="space-y-2">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduce ? false : { opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-bold text-brand-offwhite transition-colors hover:text-brand-accent"
                    >
                      {l.label}
                      <ArrowUpRight
                        className="h-6 w-6 text-brand-metal transition-all group-hover:translate-x-1 group-hover:text-brand-accent"
                        aria-hidden
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="space-y-3 px-6 pb-10"
            >
              <a
                href="#randevu"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-6 py-4 text-base font-semibold text-white"
              >
                Servis Randevusu Al
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-brand-offwhite"
              >
                WhatsApp'tan Ulaş
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
