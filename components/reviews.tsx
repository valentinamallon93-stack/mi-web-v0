'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

type Review = {
  name: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    name: 'María José R.',
    date: 'Hace 2 semanas',
    text: 'Una experiencia increíble. Valentina llegó puntual a mi casa con todo el material profesional. El balayage quedó espectacular y natural. Repetiré sin duda.',
  },
  {
    name: 'Carmen L.',
    date: 'Hace 1 mes',
    text: 'Por fin una peluquera que viene a domicilio con la calidad de un salón de lujo. Trato exquisito y resultado impecable. La recomiendo totalmente.',
  },
  {
    name: 'Ana Belén M.',
    date: 'Hace 1 mes',
    text: 'Me hizo el peinado y el maquillaje para una boda y estuve perfecta todo el día. Súper profesional, cercana y detallista. ¡Gracias, Valentina!',
  },
  {
    name: 'Lucía F.',
    date: 'Hace 2 meses',
    text: 'Con dos niños pequeños es imposible ir a la peluquería. Que Valentina venga a casa ha sido un lujo. Color perfecto y una charla estupenda.',
  },
  {
    name: 'Isabel G.',
    date: 'Hace 3 meses',
    text: 'Cuido a mi madre mayor y Valentina vino a peinarla a domicilio con una paciencia y un cariño enormes. Un servicio de diez.',
  },
]

export function Reviews() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)

  const go = (d: number) => {
    setDir(d)
    setIndex((i) => (i + d + reviews.length) % reviews.length)
  }

  const review = reviews[index]

  return (
    <section id="resenas" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Reseñas"
          title="Lo que opinan mis clientas"
          description="Valoraciones reales verificadas en Google Business Profile."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center md:px-16">
            <Quote
              className="mx-auto mb-6 h-10 w-10 text-gold/50"
              strokeWidth={1.2}
              aria-hidden="true"
            />

            <div className="min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir >= 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir >= 0 ? -40 : 40 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div
                    className="mb-6 flex justify-center gap-1"
                    aria-label="5 de 5 estrellas"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-gold text-gold"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-xl font-light leading-relaxed text-balance text-foreground md:text-2xl">
                    “{review.text}”
                  </p>
                  <p className="mt-6 text-sm font-medium tracking-wide text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setDir(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    className={cnDot(i === index)}
                    aria-label={`Ir a la reseña ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
                aria-label="Reseña siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-gold hover:bg-secondary"
          >
            Ver todas las reseñas en Google
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function cnDot(active: boolean) {
  return [
    'h-2 rounded-full transition-all duration-300',
    active ? 'w-6 bg-gold' : 'w-2 bg-border hover:bg-gold/50',
  ].join(' ')
}
