import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { galleryImages } from '../data/site'
import { FloralMark, Picture, Reveal, SectionHeading } from './ui'

const photos = galleryImages.filter((img) => !img.placeholder)

// Masonry determinista: reparte en orden (1→col 1, 2→col 2…) para que los espacios
// reservados, al final del array, queden al final de cada columna.
function useColumnCount() {
  const query = '(min-width: 1024px)'
  const [count, setCount] = useState(() => (window.matchMedia(query).matches ? 3 : 2))
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setCount(mq.matches ? 3 : 2)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return count
}

// Espacio vacío para una foto futura (se llena desde src/data/site.js → galleryImages)
function PlaceholderTile({ ratio }) {
  return (
    <div
      style={{ aspectRatio: ratio }}
      className="flex items-center justify-center rounded-[1.25rem] border border-gold/30 bg-gradient-to-br from-ivory via-sand/60 to-taupe/40"
      aria-hidden="true"
    >
      <FloralMark className="h-8 w-8 text-gold/35" />
    </div>
  )
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  const closeRef = useRef(null)
  const image = photos[index]

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
      previous?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'Tab') {
        // Mantiene el foco dentro del visor
        const focusable = document.querySelectorAll('#lightbox button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  const navButton =
    'flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-espresso/60 text-cream backdrop-blur-md transition-colors hover:bg-espresso'

  return (
    <motion.div
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería: ${image.alt}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <AnimatePresence mode="wait">
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-h-full flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Picture
            src={image.src}
            alt={image.alt}
            loading="eager"
            imgClassName="max-h-[78vh] w-auto max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />
          <figcaption className="mt-4 text-center text-sm text-cream/80">
            {image.alt} · {index + 1}/{photos.length}
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar galería" className={`${navButton} absolute top-4 right-4`}>
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Foto anterior"
        className={`${navButton} absolute bottom-6 left-1/2 -translate-x-[120%] sm:top-1/2 sm:bottom-auto sm:left-6 sm:translate-x-0 sm:-translate-y-1/2`}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Foto siguiente"
        className={`${navButton} absolute right-1/2 bottom-6 translate-x-[120%] sm:top-1/2 sm:right-6 sm:bottom-auto sm:translate-x-0 sm:-translate-y-1/2`}
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </motion.div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => setActive((i) => (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setActive((i) => (i + 1) % photos.length), [])
  const columnCount = useColumnCount()
  const columns = Array.from({ length: columnCount }, (_, c) => galleryImages.filter((_, i) => i % columnCount === c))

  return (
    <section id="galeria" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Galería" title="Tu estilo, tus uñas." subtitle="Inspírate para tu próxima cita." />

        <div className="mt-14 flex items-start gap-3 sm:gap-5">
          {columns.map((column, c) => (
            <div key={c} className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-5">
              {column.map((item, j) => (
                <Reveal key={item.src ?? `vacio-${c}-${j}`} variant="scale" delay={0.05 + c * 0.1}>
                  {item.placeholder ? (
                    <PlaceholderTile ratio={item.ratio} />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActive(photos.indexOf(item))}
                      aria-label={`Ver foto ampliada: ${item.alt}`}
                      className="group relative block w-full overflow-hidden rounded-[1.25rem] bg-sand"
                      style={{ aspectRatio: item.ratio }}
                    >
                      <Picture
                        src={item.src}
                        alt={item.alt}
                        className="block h-full w-full"
                        imgClassName="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/35" aria-hidden="true" />
                      <span
                        className="absolute top-3 right-3 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full bg-cream/90 text-espresso opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                        aria-hidden="true"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </button>
                  )}
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && <Lightbox index={active} onClose={close} onPrev={prev} onNext={next} />}
      </AnimatePresence>
    </section>
  )
}
