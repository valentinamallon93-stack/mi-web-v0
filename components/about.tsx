import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section id="sobre-mi" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/yo2.jpg"
              alt="Retrato de Valentina Mallón, peluquera profesional"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card px-6 py-5 shadow-lg sm:block md:-right-6">
            <p className="font-serif text-4xl font-light text-foreground">15</p>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              años de experiencia
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Sobre mí
            </span>
            <h2 className="mt-5 font-serif text-4xl font-light leading-[1.1] text-balance text-foreground md:text-5xl">
              Soy Valentina Mallón
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal delay={0.05}>
              <p>
                Peluquera profesional con 15 años de experiencia y formación
                internacional. Durante los últimos años dirigí mi propio salón de
                peluquería en Uruguay.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Actualmente vivo en Cómpeta (Málaga), donde ofrezco un servicio de
                peluquería premium a domicilio en toda la Axarquía.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Mi objetivo es ofrecer un servicio cercano, profesional y
                completamente personalizado para que cada clienta disfrute de la
                experiencia de un salón sin salir de casa.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <a
              href="#servicios"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-foreground"
            >
              Conoce mis servicios
              <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
