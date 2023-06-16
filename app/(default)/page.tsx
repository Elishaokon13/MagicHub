export const metadata = {
  title: 'Magic Hubs',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import TokenomicsSection from '@/components/tokenomics'
import RoadmapSection from '@/components/roadmap'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TokenomicsSection />
      <FeaturesBlocks />
      <RoadmapSection />
      <Testimonials />
      <Newsletter />
    </>
  )
}
