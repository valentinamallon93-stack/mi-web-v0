import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { whatsappUrl } from '@/lib/site'

const towns = [
  'Cómpeta',
  'Canillas de Albaida',
  'Sayalonga',
  'Algarrobo',
  'Algarrobo Costa',
  'Caleta de Vélez',
]

export function ServiceArea() {
  return (
    <section id="zona" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Zona de servicio"
          title="Peluquería a domicilio en la Axarquía"
          description="Ofrezco mi servicio en Cómpeta y localidades cercanas. Si tu localidad no aparece, escríbeme y consultamos disponibilidad."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <div className="relative h-full min-h-80 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa de la zona de servicio en la Axarquía"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-4.05%2C36.72%2C-3.90%2C36.86&layer=mapnik&marker=36.83%2C-3.97"
                className="h-full w-full grayscale-[0.3]"
                style={{ border: 0, minHeight: '20rem' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              <ul className="grid grid-cols-2 gap-3">
                {towns.map((town) => (
                  <li
                    key={town}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 transition-colors duration-300 hover:border-gold/50"
                  >
                    <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground">{town}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-dashed border-gold/50 bg-gold/10 px-5 py-4 text-sm text-foreground/80">
                ¿Tu localidad no está en la lista?{' '}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 hover:text-gold"
                >
                  Consulta disponibilidad para otras localidades.
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
