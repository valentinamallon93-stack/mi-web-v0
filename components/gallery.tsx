'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type GalleryItem = {
  src: string
  category: string
  span?: 'tall' | 'normal'
}

const items: GalleryItem[] = [
{ src: '/images/pachibala.jpeg', category: 'Balayage', span: 'tall' },
  { src: '/images/service-color.png', category: 'Color' },
  { src: '/images/service-mechas.png', category: 'Mechas' },
  { src: '/images/service-novia.png', category: 'Novias', span: 'tall' },
  { src: '/images/gallery-antes-despues.png', category: 'Antes y después' },
  { src: '/images/service-recogido.png', category: 'Recogidos', span: 'tall' },
  { src: '/images/gallery-peinado.png', category: 'Recogidos' },
  { src: '/images/gallery-detalle.png', category: 'Color' },
  { src: '/images/service-corte.png', category: 'Antes y después' },
]

const categories = ['Todos', 'Balayage', 'Color', 'Mechas', 'Novias', 'Recogidos', 'Antes y después']

export function Gallery() {
  const [filter, setFilter] = useState('Todos')
  const [active, setActive] = useState<number | null>(null)

  const filtered = filter === 'Todos' ? items : items.filter((i) => i.category === filter)

  const showAt = (i: number) => setActive(i)
  const close = () => setActive(null)
  const prev = () =>
    setActive((a) => (a === null ? a : (a - 1 + filtered.length) % filtered.length))
  const next = () =>
    setActive((a) => (a === null ? a : (a + 1) % filtered.length))

  return (
    <section id="galeria" className="bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Mis trabajos"
          description="Cada imagen refleja un resultado real, cuidado y personalizado. Descubre el detalle de cada transformación."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-light tracking-wide transition-all duration-300',
                filter === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-foreground/70 hover:border-gold/50 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {filtered.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => showAt(i)}
              className={cn(
                'group relative block w-full overflow-hidden rounded-2xl',
                item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square',
              )}
              aria-label={`Ampliar imagen de ${item.category}`}
            >
              <Image
                src={item.src || '/placeholder.svg'}
                alt={`Trabajo de ${item.category}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="p-4 text-sm font-light tracking-wide text-white">
                  {item.category}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && filtered[active] && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-8"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-8"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[active].src || '/placeholder.svg'}
                alt={`Trabajo de ${filtered[active].category}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-light tracking-[0.15em] text-white/80">
                {filtered[active].category}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
