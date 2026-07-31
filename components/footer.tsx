import { Phone } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { navLinks, site, whatsappUrl } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-medium tracking-wide text-foreground">
              Valentina Mallón
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Peluquería premium a domicilio en Cómpeta y toda la Axarquía. La
              experiencia de un salón profesional, sin salir de casa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Enlaces rápidos">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>WhatsApp: {site.phoneDisplay}</li>
              <li>Cómpeta, Málaga</li>
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Valentina Mallón. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Peluquería Premium a Domicilio · Axarquía, Málaga
          </p>
        </div>
      </div>
    </footer>
  )
}
