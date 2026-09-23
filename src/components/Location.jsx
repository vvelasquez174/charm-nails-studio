import { Clock, MapPin } from 'lucide-react'
import { business, mapsEmbedUrl, mapsUrl, whatsappUrl } from '../data/site'
import { ButtonLink, Reveal, SectionHeading, WhatsAppIcon } from './ui'

export default function Location() {
  const { address } = business
  return (
    <section id="ubicacion" className="bg-sand/60 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Ubicación" title="Encuéntranos" subtitle="Te esperamos en Lomas de San Francisco, Monterrey." />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left" className="flex flex-col gap-6 rounded-[1.75rem] border border-gold/30 bg-ivory p-5 min-[375px]:p-7 sm:p-10">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso text-gold-soft">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <address className="not-italic">
                <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold-deep uppercase">Dirección</p>
                <p className="mt-2 font-serif text-2xl leading-snug text-espresso">{address.street}</p>
                <p className="leading-relaxed text-muted">
                  {address.neighborhood}
                  <br />
                  {address.city}, {address.state}
                  <br />
                  C.P. {address.postalCode}
                </p>
              </address>
            </div>
            <ButtonLink href={mapsUrl} variant="outline" icon="arrow" aria-label="Abrir la dirección en Google Maps (se abre en una pestaña nueva)">
              Abrir en Google Maps
            </ButtonLink>

            <div className="gold-rule" aria-hidden="true" />

            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso text-gold-soft">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold-deep uppercase">WhatsApp</p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block font-serif text-2xl text-espresso">
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-cocoa">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold-deep uppercase">Horarios</p>
                {/* PENDIENTE: definir business.hours en src/data/site.js */}
                <p className="mt-2 leading-relaxed text-muted">{business.hours ?? 'Consulta disponibilidad por WhatsApp.'}</p>
              </div>
            </div>

            <ButtonLink href={whatsappUrl()} icon="whatsapp" className="mt-auto" aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)">
              Escríbenos
            </ButtonLink>
          </Reveal>

          <Reveal variant="scale" delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-gold/30 bg-taupe/40 lg:min-h-full">
            <iframe
              title="Mapa: Charm Nails Studio, Loma Grande 2709, Monterrey"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:sepia(0.35)_saturate(0.75)_contrast(0.95)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
