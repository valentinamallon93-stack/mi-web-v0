export const site = {
  name: 'Valentina Mallón',
  tagline: 'La experiencia de un salón profesional, sin salir de casa.',
  phoneDisplay: '614 107 500',
  phoneIntl: '34614107500',
  instagram: {
    handle: '@valentina_mallon',
    url: 'https://www.instagram.com/valentina_mallon',
  },
  facebook: {
    handle: 'Valentina Mallón',
    url: 'https://www.facebook.com/valentinamallon',
  },
  googleReviewsUrl: 'https://www.google.com/search?q=Valentina+Mall%C3%B3n+peluquer%C3%ADa',
  hours: [
    { days: 'Lunes a viernes', time: '09:00 – 19:00' },
    { days: 'Sábados', time: '09:00 – 14:00' },
  ],
}

export const whatsappMessage =
  'Hola Valentina, me gustaría reservar una cita para un servicio de peluquería a domicilio.'

export const whatsappUrl = `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(
  whatsappMessage,
)}`

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Zona de servicio', href: '#zona' },
  { label: 'Contacto', href: '#contacto' },
]
