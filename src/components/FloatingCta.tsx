import { CalendarCheck, MessageCircle } from 'lucide-react'
import { site, whatsappHref } from '@/data/site'

/**
 * Mobilde altta sabit Randevu / WhatsApp barı,
 * desktop'ta sağ altta WhatsApp floating butonu.
 */
export function FloatingCta() {
  return (
    <>
      {/* Mobil sticky alt bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-white/10 bg-brand-black/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <a
          href="#randevu"
          className="flex items-center justify-center gap-2 bg-brand-accent py-4 text-sm font-semibold text-white active:bg-brand-accentDark"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden />
          Randevu Al
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-brand-offwhite active:bg-white/5"
          aria-label="WhatsApp üzerinden mesaj gönder"
        >
          <MessageCircle className="h-4 w-4 text-brand-accent" aria-hidden />
          WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden mesaj gönder"
        className="group fixed bottom-7 right-7 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-110 lg:flex"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>
    </>
  )
}

/** Telefon numarasını tekrar kullanmak için dışa aktarım */
export { site }
