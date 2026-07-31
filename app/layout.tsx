import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const siteUrl = 'https://valentinamallon.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Valentina Mallón | Peluquería Premium a Domicilio en la Axarquía',
    template: '%s | Valentina Mallón',
  },
  description:
    'Peluquería premium a domicilio en Cómpeta y toda la Axarquía. Balayage, mechas, coloración profesional, recogidos y novias. La experiencia de un salón profesional, sin salir de casa.',
  generator: 'v0.app',
  applicationName: 'Valentina Mallón',
  keywords: [
    'peluquería a domicilio Cómpeta',
    'peluquera a domicilio Málaga',
    'peluquería premium Axarquía',
    'balayage Málaga',
    'mechas Axarquía',
    'coloración profesional',
    'peluquera en Cómpeta',
    'peluquera en Algarrobo',
    'peluquera en Sayalonga',
  ],
  authors: [{ name: 'Valentina Mallón' }],
  creator: 'Valentina Mallón',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Valentina Mallón',
    title: 'Valentina Mallón | Peluquería Premium a Domicilio en la Axarquía',
    description:
      'La experiencia de un salón profesional, sin salir de casa. Servicio de peluquería premium a domicilio en Cómpeta y toda la Axarquía.',
    images: [
      {
        url: '/images/hero-valentina.png',
        width: 1200,
        height: 630,
        alt: 'Valentina Mallón trabajando con una clienta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentina Mallón | Peluquería Premium a Domicilio',
    description:
      'La experiencia de un salón profesional, sin salir de casa. Peluquería premium a domicilio en la Axarquía.',
    images: ['/images/hero-valentina.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#f7f4ee',
  colorScheme: 'light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Valentina Mallón | Peluquería Premium a Domicilio',
  image: `${siteUrl}/images/hero-valentina.png`,
  description:
    'Peluquería premium a domicilio en Cómpeta y toda la Axarquía. Balayage, mechas, coloración, recogidos y novias.',
  url: siteUrl,
  telephone: '+34614107500',
  priceRange: '€€€',
  slogan: 'La experiencia de un salón profesional, sin salir de casa.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cómpeta',
    addressRegion: 'Málaga',
    addressCountry: 'ES',
  },
  areaServed: [
    'Cómpeta',
    'Canillas de Albaida',
    'Sayalonga',
    'Algarrobo',
    'Algarrobo Costa',
    'Caleta de Vélez',
  ].map((name) => ({ '@type': 'City', name })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/valentina_mallon',
    'https://www.facebook.com/valentinamallon',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
