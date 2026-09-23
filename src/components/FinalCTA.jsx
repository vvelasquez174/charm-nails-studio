import { BookButton, FloralMark, Reveal, Sparkle } from './ui'

export default function FinalCTA() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:py-32">
      <Reveal
        variant="scale"
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-ivory via-cream to-sand px-6 py-16 text-center shadow-[0_30px_70px_-45px_rgba(59,41,32,0.5)] sm:px-12 sm:py-20"
      >
        <div className="absolute inset-3 rounded-[1.6rem] border border-gold/40 sm:inset-4" aria-hidden="true" />
        <Sparkle className="animate-twinkle absolute top-10 left-10 h-4 w-4 text-gold" />
        <Sparkle className="animate-twinkle absolute right-12 bottom-12 h-3 w-3 text-gold [animation-delay:1.4s]" />
        <FloralMark className="absolute -right-6 -bottom-6 h-40 w-40 text-gold/20" strokeWidth={0.8} />

        <div className="relative">
          <p className="font-script text-4xl text-cocoa sm:text-5xl">Un momento para ti</p>
          <h2 className="section-title mx-auto mt-4 max-w-2xl text-balance">¿Lista para sentirte Charm?</h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
            Agenda tu cita y dale a tus uñas el estilo que merecen.
          </p>
          <div className="mt-10 flex justify-center">
            <BookButton icon="whatsapp" className="!px-9 !py-4 w-full sm:w-auto">
              Agendar cita por WhatsApp
            </BookButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
