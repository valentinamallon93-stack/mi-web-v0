import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { ValueProps } from '@/components/value-props'
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { Gallery } from '@/components/gallery'
import { Reviews } from '@/components/reviews'
import { HowItWorks } from '@/components/how-it-works'
import { MissionValues } from '@/components/mission-values'
import { ServiceArea } from '@/components/service-area'
import { ContactCta } from '@/components/contact-cta'
import { Footer } from '@/components/footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProps />
        <Services />
        <Products />
        <Gallery />
        <Reviews />
        <HowItWorks />
        <MissionValues />
        <ServiceArea />
        <ContactCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
