'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowDown, Award, Globe, Sparkles, FlaskConical } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

const badges = [
  { icon: Award, title: '15 años', text: 'de experiencia' },
  { icon: Globe, title: 'Formación', text: 'internacional' },
  { icon: Sparkles, title: 'Servicio', text: 'Premium' },
  { icon: FlaskConical, title: 'Productos', text: 'profesionales' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/pachi 1.jpeg"
          alt="Valentina Mallón peinando a una clienta en su domicilio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-40 md:px-8">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-white/85"
        >
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          Peluquería Premium a Domicilio
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.05] text-balance text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Peluquería Premium a Domicilio en la Axarquía
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90 md:text-xl"
        >
          La experiencia de un salón profesional, sin salir de casa.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-gold-foreground transition-all duration-300 hover:bg-gold/90 hover:shadow-xl"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-4 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-5 pb-6 md:px-8">
          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {badges.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
              >
                <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                <div className="leading-tight">
                  <p className="font-serif text-lg text-white">{title}</p>
                  <p className="text-xs font-light text-white/75">{text}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 lg:block">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  )
}
