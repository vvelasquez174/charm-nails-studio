import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import Promotion from './components/Promotion'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Benefits from './components/Benefits'
import Reviews from './components/Reviews'
import BrandStatement from './components/BrandStatement'
import Location from './components/Location'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="contenido">
        <Hero />
        <PromoBanner />
        <Promotion />
        <Services />
        <Gallery />
        <Experience />
        <Benefits />
        <Reviews />
        <BrandStatement />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionConfig>
  )
}
