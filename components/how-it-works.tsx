import { MessageCircle, CalendarCheck, Car, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: MessageCircle,
    title: 'Contacto por WhatsApp',
    text: 'Escríbeme y cuéntame qué servicio necesitas. Resolvemos todas tus dudas.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserva',
    text: 'Elegimos juntas el día y la hora que mejor se adapten a ti.',
  },
  {
    icon: Car,
    title: 'Me desplazo a tu domicilio',
    text: 'Llego a tu casa con todo el material profesional necesario.',
  },
  {
    icon: Sparkles,
    title: 'Disfrutas de la experiencia',
    text: 'Vives una experiencia premium de salón sin salir de casa.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tan sencillo como cuatro pasos"
        />

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-card">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.4} />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-normal text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
