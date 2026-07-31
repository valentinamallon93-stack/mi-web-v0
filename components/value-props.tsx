import {
  Clock,
  MapPin,
  Heart,
  Hourglass,
  CalendarClock,
  Accessibility,
  Baby,
  FlaskConical,
  Palette,
  Gem,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const benefits = [
  { icon: Clock, title: 'Ahorro de tiempo' },
  { icon: MapPin, title: 'Sin desplazamientos' },
  { icon: Heart, title: 'Atención exclusiva' },
  { icon: Hourglass, title: 'Sin esperas' },
  { icon: CalendarClock, title: 'Horarios adaptados' },
  { icon: Accessibility, title: 'Ideal para personas mayores' },
  { icon: Baby, title: 'Ideal para mamás' },
  { icon: FlaskConical, title: 'Productos profesionales' },
  { icon: Palette, title: 'Resultados personalizados' },
  { icon: Gem, title: 'Experiencia premium' },
]

export function ValueProps() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Ventajas"
          title="¿Por qué elegir mi servicio?"
          description="Una experiencia de peluquería pensada para tu comodidad, con la calidad y la atención de un salón profesional en tu propio hogar."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={(i % 5) * 0.05}>
              <li className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-beige transition-colors duration-300 group-hover:bg-gold/25">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
                </span>
                <p className="text-sm font-medium leading-snug text-balance text-foreground">
                  {title}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
