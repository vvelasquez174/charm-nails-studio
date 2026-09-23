import { benefits, featureImages } from '../data/site'
import { Icon, Picture, Reveal, SectionHeading } from './ui'

export default function Benefits() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal variant="scale" duration={1.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" aria-hidden="true" />
          <Picture
            {...featureImages.benefits}
            width={1000}
            height={1000}
            className="relative block overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_-35px_rgba(59,41,32,0.6)]"
            imgClassName="aspect-square h-full w-full object-cover"
          />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Beneficios"
            title="¿Por qué Charm?"
            subtitle="Uñas que hablan de tu estilo, con el cuidado que mereces."
          />
          <ul className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal
                as="li"
                key={benefit.title}
                variant="left"
                delay={0.1 + i * 0.07}
                className="group flex items-center gap-4 border-b border-gold/25 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand text-cocoa transition-colors duration-500 group-hover:bg-espresso group-hover:text-gold-soft">
                  <Icon name={benefit.icon} className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.5} />
                </span>
                <span className="text-[0.95rem] font-medium text-espresso">{benefit.title}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
