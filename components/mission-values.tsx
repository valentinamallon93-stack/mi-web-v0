import {
  HeartHandshake,
  BadgeCheck,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Handshake,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const values = [
  { icon: HeartHandshake, title: 'Cercanía' },
  { icon: BadgeCheck, title: 'Profesionalidad' },
  { icon: GraduationCap, title: 'Formación continua' },
  { icon: Sparkles, title: 'Calidad' },
  { icon: ShieldCheck, title: 'Compromiso' },
  { icon: Handshake, title: 'Confianza' },
]

export function MissionValues() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Mission */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Mi misión
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </span>
          <p className="mt-8 font-serif text-2xl font-light leading-relaxed text-balance text-foreground md:text-3xl">
            Llevar mi experiencia profesional hasta el hogar de cada clienta,
            ofreciendo un servicio premium, cercano y personalizado con productos
            de alta calidad, para que cada visita se convierta en una experiencia
            única de bienestar y cuidado.
          </p>
        </Reveal>

        {/* Values */}
        <div className="mt-24">
          <SectionHeading eyebrow="Valores" title="Lo que me mueve" />
          <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {values.map(({ icon: Icon, title }, i) => (
              <Reveal key={title} delay={(i % 6) * 0.05}>
                <li className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-border bg-card px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-beige transition-colors duration-300 group-hover:bg-gold/25">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
                  </span>
                  <p className="text-sm font-medium text-foreground">{title}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
