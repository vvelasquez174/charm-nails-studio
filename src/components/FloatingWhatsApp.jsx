import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { whatsappUrl } from '../data/site'
import { WhatsAppIcon } from './ui'

// Botón flotante (todas las pantallas) + barra inferior fija (solo móvil).
// La barra aparece al pasar el hero; en móvil el botón flotante se eleva para no taparla.
export default function FloatingWhatsApp() {
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agenda tu cita por WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className={`group fixed right-4 z-40 flex items-center transition-[bottom] duration-500 sm:right-6 ${
          pastHero ? 'bottom-[5.75rem] md:bottom-6' : 'bottom-5 md:bottom-6'
        }`}
      >
        <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-full bg-espresso px-4 py-2 text-[0.68rem] font-semibold tracking-[0.2em] whitespace-nowrap text-cream uppercase opacity-0 shadow-lg transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
          Agenda tu cita
        </span>
        <span className="animate-soft-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-cream shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105">
          <WhatsAppIcon className="h-7 w-7" />
        </span>
      </motion.a>

      <AnimatePresence>
        {pastHero && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-30 border-t border-gold/30 bg-cream/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden"
          >
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar cita por WhatsApp"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-full bg-espresso text-[0.72rem] font-semibold tracking-[0.22em] text-cream uppercase ring-1 ring-gold/50 active:bg-cocoa"
            >
              <WhatsAppIcon className="h-4 w-4 text-gold-soft" />
              Agendar cita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
