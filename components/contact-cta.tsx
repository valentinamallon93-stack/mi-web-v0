import { Phone, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/social-icons'
import { Reveal } from '@/components/reveal'
import { site, whatsappUrl } from '@/lib/site'

export function ContactCta() {
  return (
    <section id="contacto" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <span className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Reserva tu cita
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            ¿Lista para disfrutar de la experiencia de un salón profesional sin
            salir de casa?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-10 py-5 text-base font-medium tracking-wide text-gold-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-gold/90 hover:shadow-2xl"
          >
            Reservar por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-primary-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                WhatsApp
              </span>
              <span className="text-sm font-medium">{site.phoneDisplay}</span>
            </a>

            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                Horario
              </span>
              {site.hours.map((h) => (
                <span key={h.days} className="text-sm font-light">
                  {h.days}: {h.time}
                </span>
              ))}
            </div>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-6 w-6 text-gold" />
              <span className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                Instagram
              </span>
              <span className="text-sm font-medium">{site.instagram.handle}</span>
            </a>

            <a
              href={site.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-colors hover:text-gold"
            >
              <FacebookIcon className="h-6 w-6 text-gold" />
              <span className="text-xs uppercase tracking-[0.15em] text-primary-foreground/60">
                Facebook
              </span>
              <span className="text-sm font-medium">{site.facebook.handle}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
