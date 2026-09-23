import { experienceSteps } from '../data/site'
import { Reveal, Sparkle } from './ui'

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-espresso px-5 py-24 text-cream sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full border border-gold/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[26rem] w-[26rem] rounded-full border border-gold/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal as="p" variant="fade" className="eyebrow !text-gold">
            La experiencia
          </Reveal>
          <Reveal as="h2" className="mt-4 font-serif text-[2.35rem] leading-[1.05] font-medium text-cream sm:text-5xl lg:text-[3.6rem]">
            Tu momento <em className="text-gold-soft">Charm</em>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mx-auto mt-5 max-w-md leading-relaxed text-cream/70">
            Un momento para ti, de principio a fin.
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Línea que conecta los pasos */}
          <span className="absolute top-8 bottom-8 left-8 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:top-8 md:right-[16%] md:bottom-auto md:left-[16%] md:h-px md:w-auto md:bg-gradient-to-r md:from-gold/10 md:via-gold/60 md:to-gold/10" aria-hidden="true" />

          {experienceSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={0.15 + i * 0.15} className="relative flex gap-6 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-espresso font-serif text-2xl text-gold-soft shadow-[0_0_0_8px_var(--color-espresso)]">
                {step.number}
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="flex items-center gap-2 font-serif text-2xl tracking-wide uppercase md:justify-center">
                  {step.title}
                  {i === experienceSteps.length - 1 && <Sparkle className="h-3.5 w-3.5 text-gold" />}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-cream/70">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
