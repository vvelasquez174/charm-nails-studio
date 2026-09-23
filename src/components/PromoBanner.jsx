import { promo, whatsappUrl } from '../data/site'
import { Sparkle } from './ui'

const items = ['Promoción especial', promo.headline, promo.price, 'Agenda tu cita']

function Row({ hidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[...items, ...items].map((text, i) => (
        <span key={i} className="flex items-center">
          <span
            className={
              text === promo.price
                ? 'px-6 font-serif text-2xl font-semibold text-gold-soft'
                : 'px-6 text-[0.7rem] font-medium tracking-[0.3em] whitespace-nowrap uppercase'
            }
          >
            {text}
          </span>
          <Sparkle className="h-2.5 w-2.5 text-gold" />
        </span>
      ))}
    </div>
  )
}

export default function PromoBanner() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Promoción especial: ${promo.headline} por ${promo.price}. Agenda tu cita por WhatsApp`}
      className="group relative block overflow-hidden border-y border-gold/40 bg-espresso py-4 text-cream"
    >
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-espresso to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-espresso to-transparent" aria-hidden="true" />
    </a>
  )
}
