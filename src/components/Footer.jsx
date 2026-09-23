import { business, navigationLinks, whatsappUrl } from '../data/site'
import { Logo } from './Navbar'
import { FloralMark, WhatsAppIcon } from './ui'

export default function Footer() {
  const { address, social } = business
  const socialLinks = [
    { label: 'Instagram', href: social.instagram },
    { label: 'Facebook', href: social.facebook },
  ].filter((s) => s.href)

  return (
    <footer className="relative overflow-hidden bg-ink px-5 pt-20 pb-40 text-cream/80 sm:px-8 md:pb-12">
      <FloralMark className="pointer-events-none absolute -top-10 -right-10 h-64 w-64 text-gold/10" strokeWidth={0.6} />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs font-serif text-xl text-cream/90 italic">{business.tagline}</p>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">Dirección</h3>
          <address className="mt-4 leading-relaxed not-italic">
            {address.street}
            <br />
            {address.neighborhood}
            <br />
            {address.city}, {address.state}
          </address>
        </div>

        <div>
          <h3 className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">WhatsApp</h3>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-2 text-cream"
          >
            <WhatsAppIcon className="h-4 w-4 text-gold" /> {business.phoneDisplay}
          </a>
          {socialLinks.length > 0 && (
            <ul className="mt-4 flex gap-5">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline text-sm">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Pie de página">
          <h3 className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">Navegación</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl">
        <div className="gold-rule opacity-40" aria-hidden="true" />
        <p className="mt-6 text-center text-xs tracking-[0.2em] text-cream/50 uppercase">© 2026 Charm Nails Studio · Monterrey, N.L.</p>
      </div>
    </footer>
  )
}
