import { Quote, Star } from 'lucide-react'
import { reviewLink, reviews, sampleReviews, whatsappUrl } from '../data/site'
import { ButtonLink, FloralMark, Reveal, SectionHeading } from './ui'

const reviewMessage = 'Hola, Charm Nails Studio. Quiero compartir mi experiencia: '

// Solo se publican reseñas reales. Los ejemplos se ven únicamente en desarrollo.
const isSample = reviews.length === 0 && import.meta.env.DEV
const items = reviews.length ? reviews : isSample ? sampleReviews : []

function Stars({ rating }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" className={`h-4 w-4 ${i < rating ? 'fill-gold text-gold' : 'text-gold/30'}`} strokeWidth={1.5} />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <Reveal
      as="figure"
      delay={0.1 + index * 0.1}
      className="group relative flex h-full flex-col rounded-[1.5rem] border border-gold/25 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_50px_-30px_rgba(59,41,32,0.5)] sm:p-8"
    >
      {isSample && (
        <span className="absolute -top-3 left-6 rounded-full bg-cocoa px-3 py-1 text-[0.58rem] font-semibold tracking-[0.2em] text-cream uppercase">
          Ejemplo · reemplazar
        </span>
      )}
      <div className="flex items-center justify-between">
        <Stars rating={review.rating ?? 5} />
        <Quote className="h-7 w-7 text-gold/40" aria-hidden="true" />
      </div>
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-snug text-espresso italic">“{review.text}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-gold/20 pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand font-serif text-lg text-cocoa">
          {review.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-espresso">{review.name}</span>
          {review.service && <span className="text-xs tracking-wide text-muted">{review.service}</span>}
        </span>
      </figcaption>
    </Reveal>
  )
}

export default function Reviews() {
  return (
    <section id="resenas" className="bg-sand/60 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Reseñas" title="Clientas Charm" subtitle="Lo que se llevan, además de unas uñas impecables." />

        {items.length > 0 && (
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {items.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
            ))}
          </div>
        )}

        <Reveal
          delay={0.2}
          className={`relative mx-auto flex max-w-2xl flex-col items-center overflow-hidden rounded-[1.75rem] border border-gold/30 bg-ivory px-6 py-12 text-center ${items.length ? 'mt-10' : 'mt-14'}`}
        >
          <FloralMark className="h-10 w-10 text-gold" />
          <h3 className="mt-4 font-serif text-3xl text-espresso">
            {items.length ? '¿Ya nos visitaste?' : 'Tu opinión nos importa'}
          </h3>
          <p className="mt-3 max-w-md leading-relaxed text-muted">
            Cuéntanos cómo fue tu experiencia en Charm Nails Studio. Tu reseña ayuda a otras clientas a conocernos.
          </p>
          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={whatsappUrl(reviewMessage)} icon="whatsapp" aria-label="Compartir tu experiencia por WhatsApp (se abre en una pestaña nueva)">
              Compartir mi experiencia
            </ButtonLink>
            {reviewLink && (
              <ButtonLink href={reviewLink} variant="outline" aria-label="Dejar una reseña en Google (se abre en una pestaña nueva)">
                Reseña en Google
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
