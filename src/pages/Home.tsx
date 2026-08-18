import { Navbar } from '@/components/Navbar'
import { FloatingCta } from '@/components/FloatingCta'
import { Cursor } from '@/components/Cursor'
import { Hero } from '@/sections/Hero'
import { WhyUs } from '@/sections/WhyUs'
import { Services } from '@/sections/Services'
import { Process } from '@/sections/Process'
import { SocialProof } from '@/sections/SocialProof'
import { Gallery } from '@/sections/Gallery'
import { AppointmentCta } from '@/sections/AppointmentCta'
import { Contact } from '@/sections/Contact'
import { Footer } from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-offwhite">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <SocialProof />
        <Gallery />
        <AppointmentCta />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  )
}
