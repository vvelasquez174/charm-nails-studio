import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { backgroundVideo, featureImages, promo } from '../data/site'
import { BackgroundVideo, BookButton, ButtonLink, FloralMark, Picture, Sparkle } from './ui'

const ease = [0.22, 1, 0.36, 1]
const enter = (delay, duration = 0.9, y = 24) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration, ease },
})

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-28 lg:pb-20">
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <BackgroundVideo {...backgroundVideo} className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/50 to-cream lg:bg-gradient-to-r lg:from-cream/90 lg:via-cream/55 lg:to-cream/10" />
      </div>

      {/* Decoración */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-[18%] -left-24 h-72 w-72 rounded-full border border-gold/30" />
        <div className="absolute -right-20 bottom-[8%] hidden h-96 w-96 rounded-full border border-gold/25 lg:block" />
        <Sparkle className="animate-twinkle absolute top-[22%] right-[8%] h-4 w-4 text-gold" />
        <Sparkle className="animate-twinkle absolute top-[62%] left-[6%] h-3 w-3 text-gold [animation-delay:1.2s]" />
        <Sparkle className="animate-twinkle absolute bottom-[12%] left-[46%] hidden h-5 w-5 text-gold lg:block [animation-delay:2s]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-xl">
          <motion.p {...enter(0.2, 0.8, 12)} className="eyebrow hidden items-center gap-3 lg:flex">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Charm Nails Studio
          </motion.p>
          {/* En móvil la promoción se anuncia desde el primer vistazo */}
          <motion.a
            href="#promocion"
            {...enter(0.2, 0.8, 12)}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-white/55 py-1.5 pr-4 pl-1.5 text-[0.7rem] font-medium text-espresso backdrop-blur-sm lg:hidden"
          >
            <span className="rounded-full bg-espresso px-2.5 py-1 font-serif text-sm font-semibold text-gold-soft">{promo.price}</span>
            {promo.headline}
          </motion.a>

          <motion.h1
            {...enter(0.35, 1)}
            className="mt-6 font-serif text-[2.7rem] leading-[1.02] font-medium text-espresso min-[390px]:text-[3rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem]"
          >
            Realza tu estilo,
            <br />
            siéntete <em className="text-gold-sheen pr-2 font-medium">Charm.</em>
          </motion.h1>

          <motion.p {...enter(0.55)} className="mt-6 max-w-md text-[0.97rem] leading-relaxed text-muted sm:text-lg">
            Uñas niveladas, fuertes y uniformes con acabados elegantes que resaltan tu estilo.
          </motion.p>

          <motion.div {...enter(0.7)} className="mt-9 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <BookButton />
            <ButtonLink href="#promocion" variant="outline" icon="none">
              Ver promoción
            </ButtonLink>
          </motion.div>

          <motion.p {...enter(0.85, 0.8, 10)} className="mt-8 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 shrink-0 text-gold-deep" aria-hidden="true" />
            Lomas de San Francisco, Monterrey
          </motion.p>
        </div>

        {/* Fotografía */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1.3, ease }}
          className="relative mx-auto w-full max-w-[26rem] lg:mr-0 lg:max-w-[30rem]"
        >
          <div className="absolute -inset-3 rounded-t-full rounded-b-[2rem] border border-gold/60 sm:-inset-4" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[1.6rem] bg-sand shadow-[0_40px_80px_-40px_rgba(59,41,32,0.55)]">
            <Picture
              {...featureImages.hero}
              loading="eager"
              fetchPriority="high"
              width={670}
              height={870}
              className="block h-full w-full"
              imgClassName="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
            />
          </div>

          <FloralMark className="animate-float absolute -top-6 -right-2 h-16 w-16 text-gold sm:-right-6" />

          {/* Tarjeta de promoción flotante */}
          <motion.a
            href="#promocion"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15, duration: 0.9, ease }}
            className="animate-float absolute -bottom-6 left-0 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/65 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(59,41,32,0.45)] backdrop-blur-md [animation-delay:1.5s] sm:-left-8"
          >
            <span className="flex flex-col">
              <span className="text-[0.6rem] font-semibold tracking-[0.28em] text-gold-deep uppercase">Promoción</span>
              <span className="mt-1 text-sm font-medium text-espresso">{promo.headline}</span>
            </span>
            <span className="font-serif text-4xl leading-none font-semibold text-espresso">{promo.price}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
