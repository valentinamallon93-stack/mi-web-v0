import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { whatsappUrl } from '@/lib/site'

type Service = {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Color',
    description: 'Coloración profesional a medida para un resultado natural y luminoso.',
    image: '/images/service-color.png',
  },
  {
    title: 'Balayage',
    description: 'Degradados sutiles y naturales que aportan luz y dimensión.',
    image: '/images/service-balayage.png',
  },
  {
    title: 'Babylights & Mechas',
    description: 'Mechas finas y personalizadas para un acabado sofisticado.',
    image: '/images/service-mechas.png',
  },
  {
    title: 'Contorno & Iluminación',
    description: 'Técnicas de luz que realzan tus facciones y tu color base.',
    image: '/images/service-balayage.png',
  },
  {
    title: 'Cortes',
    description: 'Cortes elegantes adaptados a tu estilo, rostro y personalidad.',
    image: '/images/service-corte.png',
  },
  {
    title: 'Peinados & Recogidos',
    description: 'Peinados y recogidos para eventos, celebraciones y ocasiones especiales.',
    image: '/images/service-recogido.png',
  },
  {
    title: 'Novias',
    description: 'Servicio integral para tu gran día, con pruebas personalizadas.',
    image: '/images/service-novia.png',
  },
  {
    title: 'Alisados & Tratamientos',
    description: 'Alisados y tratamientos Intensive Repair para un cabello sano y sedoso.',
    image: '/images/service-tratamiento.png',
  },
  {
    title: 'Maquillaje',
    description: 'Maquillaje profesional que completa tu look de principio a fin.',
    image: '/images/service-maquillaje.png',
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Cada servicio, una experiencia"
          description="Desde la coloración hasta el peinado de tu boda, cada trabajo se realiza con productos de alta gama y atención al detalle."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-80 overflow-hidden rounded-2xl">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-2xl font-light text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
          >
            Consultar disponibilidad
          </a>
        </Reveal>
      </div>
    </section>
  )
}
