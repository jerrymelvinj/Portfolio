import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import CaseStudies from '@/components/CaseStudies'
import ImpactMetrics from '@/components/ImpactMetrics'
import Testimonials from '@/components/Testimonials'
import ToolsProcess from '@/components/ToolsProcess'
import DailyTools from '@/components/DailyTools'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <CaseStudies />
      <ImpactMetrics />
      <Testimonials />
      <ToolsProcess />
      <DailyTools />
      <ContactSection />
      <Footer />
    </>
  )
}
