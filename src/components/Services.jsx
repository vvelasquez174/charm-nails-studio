import { ArrowUpRight } from 'lucide-react'
import { services, whatsappUrl } from '../data/site'
import { Icon, Reveal, SectionHeading } from './ui'

const serviceMessage = (title) =>
  `Hola, Charm Nails Studio. Me interesa el servicio de ${title.toLowerCase()} y quisiera agendar una cita. ¿Qué horarios tienen disponibles?`

export default function Services() {
  return (
    <section id="servicios" className="relative bg-sand/60 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestros servicios"
          subtitle="Cada detalle pensado para que tus manos luzcan impecables."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={0.1 + i * 0.1}
              as="article"
              className="group relative flex flex-col rounded-[1.5rem] border border-gold/25 bg-ivory/80 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_24px_50px_-30px_rgba(59,41,32,0.5)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream text-cocoa transition-colors duration-500 group-hover:bg-espresso group-hover:text-gold-soft">
                  <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <span className="font-serif text-3xl text-gold">{service.number}</span>
              </div>

              <h3 className="mt-8 font-serif text-[1.75rem] font-medium tracking-wide text-espresso uppercase">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{service.description}</p>

              {service.badge && (
                <span className="mt-5 self-start rounded-full bg-espresso px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.18em] text-gold-soft uppercase">
                  {service.badge}
                </span>
              )}

              <div className="gold-rule mt-6 mb-4 opacity-60" aria-hidden="true" />

              <a
                href={whatsappUrl(serviceMessage(service.title))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar ${service.title} por WhatsApp`}
                className="link-underline inline-flex items-center gap-1.5 self-start text-[0.68rem] font-semibold tracking-[0.22em] text-cocoa uppercase"
              >
                Agenda por WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
