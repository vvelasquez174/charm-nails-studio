import { Check } from 'lucide-react'
import { featureImages, promo } from '../data/site'
import { BookButton, Picture, Reveal, Sparkle } from './ui'

export default function Promotion() {
  return (
    <section id="promocion" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal
          variant="scale"
          className="relative grid overflow-hidden rounded-[2rem] border border-gold/35 bg-ivory shadow-[0_30px_70px_-40px_rgba(59,41,32,0.45)] md:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Foto */}
          <div className="relative min-h-[20rem] overflow-hidden md:min-h-full">
            <Picture
              {...featureImages.promotion}
              width={720}
              height={836}
              className="absolute inset-0"
              imgClassName="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" aria-hidden="true" />
            <span className="absolute top-5 left-5 rounded-full bg-cream/85 px-4 py-2 text-[0.62rem] font-semibold tracking-[0.28em] text-espresso uppercase backdrop-blur-sm">
              Promoción
            </span>
          </div>

          {/* Contenido */}
          <div className="relative p-7 sm:p-12 lg:p-14">
            <div className="absolute inset-3 rounded-[1.6rem] border border-gold/20 sm:inset-4" aria-hidden="true" />
            <Sparkle className="animate-twinkle absolute top-8 right-8 h-4 w-4 text-gold" />

            <div className="relative">
              <Reveal as="p" variant="fade" className="eyebrow">
                {promo.name}
              </Reveal>
              <Reveal as="h2" delay={0.05} className="section-title mt-4 text-balance">
                Tu próximo manicure empieza aquí.
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-4 max-w-md leading-relaxed text-muted">
                Nivelación de uñas + color gel en uno o dos tonos a elegir.
              </Reveal>

              <Reveal delay={0.2} className="mt-8 flex items-end gap-4">
                <span className="font-serif text-[5.5rem] leading-[0.8] font-semibold text-espresso sm:text-[7rem]">
                  {promo.price}
                </span>
                <span className="mb-2 flex flex-col text-[0.65rem] font-medium tracking-[0.25em] text-gold-deep uppercase">
                  <span>Precio</span>
                  <span>promocional</span>
                </span>
              </Reveal>

              <div className="gold-rule my-8" aria-hidden="true" />

              <ul className="grid gap-3 sm:grid-cols-2">
                {promo.includes.map((item, i) => (
                  <Reveal as="li" key={item} delay={0.25 + i * 0.06} className="flex items-center gap-3 text-[0.95rem] text-ink">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand text-cocoa">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={2.5} />
                    </span>
                    {item}
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.5} className="mt-10">
                <BookButton className="w-full sm:w-auto">Quiero mi cita</BookButton>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
