import { featureImages } from '../data/site'
import { BookButton, FloralMark, Picture, Reveal, Sparkle } from './ui'

export default function FinalCTA() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <Reveal
        variant="scale"
        className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-ivory via-cream to-sand shadow-[0_30px_70px_-45px_rgba(59,41,32,0.5)] md:grid-cols-[0.9fr_1.1fr]"
      >
        {/* Retrato */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[36rem]">
          <Picture
            {...featureImages.finalCta}
            width={768}
            height={1060}
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover object-[center_35%] transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-cream/20" aria-hidden="true" />
        </div>

        {/* Contenido */}
        <div className="relative flex flex-col justify-center px-6 py-14 text-center sm:px-12 md:py-20 md:text-left">
          <div className="absolute inset-3 rounded-[1.6rem] border border-gold/40 sm:inset-4 md:left-0 md:rounded-l-none md:border-l-0" aria-hidden="true" />
          <Sparkle className="animate-twinkle absolute top-10 right-10 h-4 w-4 text-gold" />
          <Sparkle className="animate-twinkle absolute right-14 bottom-14 h-3 w-3 text-gold [animation-delay:1.4s]" />
          <FloralMark className="absolute -right-6 -bottom-6 h-40 w-40 text-gold/20" strokeWidth={0.8} />

          <div className="relative">
            <p className="font-script text-4xl text-cocoa sm:text-5xl">Un momento para ti</p>
            <h2 className="section-title mt-4 max-w-md text-balance max-md:mx-auto">¿Lista para sentirte Charm?</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted max-md:mx-auto">
              Agenda tu cita y dale a tus uñas el estilo que merecen.
            </p>
            <div className="mt-10 flex justify-center md:justify-start">
              <BookButton icon="whatsapp" className="w-full !py-4 sm:w-auto sm:!px-9">
                Agendar cita por WhatsApp
              </BookButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
