import { backgroundVideo } from '../data/site'
import { BackgroundVideo, FloralMark, Reveal, Sparkle } from './ui'

export default function BrandStatement() {
  return (
    <section aria-label="Realza tu estilo, siéntete Charm" className="relative isolate flex min-h-[80svh] items-center justify-center overflow-hidden px-5 py-28 sm:px-8">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <BackgroundVideo {...backgroundVideo} className="h-full w-full object-cover md:object-top" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,241,234,0.85)_0%,rgba(247,241,234,0.55)_45%,rgba(247,241,234,0.1)_75%)]" />
      </div>

      <div className="relative text-center">
        <Reveal variant="fade" duration={1.2}>
          <FloralMark className="animate-float mx-auto h-14 w-14 text-gold-deep" />
        </Reveal>
        <Reveal as="p" delay={0.15} duration={1.1} className="mt-6 font-script text-5xl leading-none text-cocoa sm:text-6xl lg:text-7xl">
          Realza tu estilo,
        </Reveal>
        <Reveal as="p" delay={0.3} duration={1.1} className="mt-3 font-serif text-[2.6rem] leading-none font-medium tracking-[0.08em] text-espresso min-[390px]:text-5xl sm:text-7xl lg:text-8xl">
          SIÉNTETE <span className="text-gold-sheen font-semibold">CHARM.</span>
        </Reveal>
        <Reveal variant="fade" delay={0.5} className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gold" aria-hidden="true" />
          <Sparkle className="h-3 w-3 text-gold" />
          <span className="h-px w-16 bg-gold" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  )
}
