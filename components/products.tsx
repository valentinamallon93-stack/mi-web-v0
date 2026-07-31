import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const brands = [
  "L'Oréal Professionnel",
  'Wella Professionals',
  'Sebastian Professional',
  'Schwarzkopf Professional',
  'Salerm Cosmetics',
]

export function Products() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Productos
          </span>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.1] text-balance md:text-5xl">
            Solo productos profesionales de alta gama
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            Trabajo exclusivamente con marcas profesionales de referencia
            mundial, seleccionadas para cuidar tu cabello y garantizar resultados
            duraderos y de máxima calidad.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-5 py-2.5 text-sm font-light tracking-wide"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/products-flatlay.png"
              alt="Productos profesionales de peluquería de alta gama"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
