import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { business, navigationLinks, whatsappUrl } from '../data/site'
import { BookButton, FloralMark, WhatsAppIcon } from './ui'

export function Logo({ light = false, className = '' }) {
  if (business.logoSrc) {
    return <img src={business.logoSrc} alt={business.name} className={`h-10 w-auto ${className}`} />
  }
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <FloralMark className={`h-8 w-8 shrink-0 ${light ? 'text-gold' : 'text-gold-deep'}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[1.55rem] font-semibold tracking-[0.18em] ${light ? 'text-cream' : 'text-espresso'}`}>
          CHARM
        </span>
        <span className={`mt-0.5 text-[0.52rem] font-medium tracking-[0.42em] ${light ? 'text-gold-soft' : 'text-cocoa'}`}>
          NAILS STUDIO
        </span>
      </span>
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-cream/80 shadow-[0_8px_30px_-18px_rgba(59,41,32,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? 'h-16' : 'h-20 lg:h-24'
        }`}
      >
        <a href="#inicio" aria-label="Charm Nails Studio, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[0.7rem] font-medium tracking-[0.24em] text-espresso uppercase transition-colors hover:text-cocoa"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <BookButton className="!px-6 !py-3" />
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 bg-white/50 text-espresso backdrop-blur-sm transition-colors hover:border-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pt-6 pb-10">
              <ul className="flex flex-col">
                {navigationLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                    className="border-b border-gold/25"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-serif text-3xl text-espresso"
                    >
                      {link.label}
                      <span className="text-xs tracking-[0.3em] text-gold-deep">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <BookButton className="w-full" />
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-muted"
                >
                  <WhatsAppIcon className="h-4 w-4 text-cocoa" /> {business.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
