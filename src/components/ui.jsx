import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight, Brush, Flower2, Gem, Hand, HeartHandshake, Layers, MapPin, Palette, ShieldCheck, Sparkles,
} from 'lucide-react'
import { whatsappUrl } from '../data/site'

const icons = { Brush, Flower2, Gem, Hand, HeartHandshake, Layers, MapPin, Palette, ShieldCheck, Sparkles }

export function Icon({ name, ...props }) {
  const Component = icons[name] ?? Sparkles
  return <Component aria-hidden="true" {...props} />
}

const ease = [0.22, 1, 0.36, 1]

// Aparición al entrar al viewport. `variant`: up | fade | scale | left | right
const variants = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1 } },
  left: { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } },
}

export function Reveal({ as = 'div', variant = 'up', delay = 0, duration = 0.8, className, children, ...rest }) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -40px 0px' }}
      variants={variants[variant]}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.2-3.59.94.96-3.5-.23-.36a9.43 9.43 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.49-9.47a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.23-4.25 9.47-9.46 9.47m8.06-17.53A11.33 11.33 0 0 0 12.05.64C5.77.64.66 5.75.66 12.03c0 2 .52 3.96 1.52 5.69L.57 23.64l6.05-1.59a11.4 11.4 0 0 0 5.43 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.34-8.06" />
    </svg>
  )
}

// Flor de línea inspirada en el logotipo
export function FloralMark({ className = '', strokeWidth = 1.2 }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} aria-hidden="true">
      <g transform="translate(24 22)">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} d="M0 0 C -5 -5, -5 -13, 0 -17 C 5 -13, 5 -5, 0 0 Z" transform={`rotate(${r})`} />
        ))}
        <circle r="2" fill="currentColor" stroke="none" />
      </g>
      <path d="M24 39 C 22 42, 20 44, 16 46" strokeLinecap="round" />
    </svg>
  )
}

// Destello de cuatro puntas (los del video de fondo)
export function Sparkle({ className = '', style }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 0 C12.8 7.5 16.5 11.2 24 12 C16.5 12.8 12.8 16.5 12 24 C11.2 16.5 7.5 12.8 0 12 C7.5 11.2 11.2 7.5 12 0 Z" fill="currentColor" />
    </svg>
  )
}

// <picture> con webp + respaldo jpg. `src` va sin extensión.
export function Picture({ src, alt, className, imgClassName, loading = 'lazy', fetchPriority, sizes, width, height }) {
  return (
    <picture className={className}>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.jpg`}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        sizes={sizes}
        width={width}
        height={height}
        className={imgClassName}
      />
    </picture>
  )
}

// Video decorativo de fondo. Se pausa fuera de pantalla y respeta prefers-reduced-motion.
export function BackgroundVideo({ src, poster, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (visible) setActivated(true)
    if (visible && !reduce) el.play().catch(() => {})
    else el.pause()
  }, [visible, reduce])

  return (
    <video
      ref={ref}
      className={className}
      src={activated || visible ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
    />
  )
}

// Botón / enlace principal. `variant`: primary | outline | light
export function ButtonLink({ href, children, variant = 'primary', icon = 'arrow', className = '', external, ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-center text-[0.7rem] font-semibold tracking-[0.16em] uppercase sm:px-7 sm:text-[0.72rem] sm:tracking-[0.22em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-offset-4'
  const styles = {
    primary:
      'bg-espresso text-cream ring-1 ring-gold/50 ring-offset-2 ring-offset-transparent shadow-[0_10px_30px_-12px_rgba(59,41,32,0.6)] hover:bg-cocoa hover:shadow-[0_16px_36px_-14px_rgba(59,41,32,0.7)] hover:-translate-y-0.5',
    outline:
      'border border-espresso/25 bg-white/40 text-espresso backdrop-blur-sm hover:border-gold hover:bg-white/70 hover:-translate-y-0.5',
    light:
      'bg-cream text-espresso ring-1 ring-gold/60 hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]',
  }
  const isExternal = external ?? href.startsWith('http')
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon === 'whatsapp' && <WhatsAppIcon className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
      {icon === 'arrow' && (
        <ArrowRight className="h-4 w-4 shrink-0 text-gold transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </a>
  )
}

export function BookButton({ children = 'Agendar cita', ...props }) {
  return (
    <ButtonLink href={whatsappUrl()} aria-label={`${children} por WhatsApp (se abre en una pestaña nueva)`} {...props}>
      {children}
    </ButtonLink>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade" className="mb-4 flex items-center gap-3">
          <Sparkle className="h-3 w-3 text-gold" />
          <span className="eyebrow">{eyebrow}</span>
          <Sparkle className="h-3 w-3 text-gold" />
        </Reveal>
      )}
      <Reveal as="h2" className="section-title text-balance">
        {title}
      </Reveal>
      {subtitle && (
        <Reveal as="p" delay={0.1} className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {subtitle}
        </Reveal>
      )}
    </div>
  )
}
