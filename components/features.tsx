'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative bg-black">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-black pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-100">About Magic Hubs</h1>
            <p className="text-xl text-white">Magic Hub (MHUB), an ambitious and innovative digital asset initiative, is positioned at the connection of decentralized finance (DeFi), play-to-earn (P2E) gaming, and multi-chain interoperability.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <p className="text-xl text-gray-600">Magic Hub (MHUB), an ambitious and innovative digital asset initiative, is positioned at the connection of decentralized finance (DeFi), play-to-earn (P2E) gaming, and multi-chain interoperability.</p>
              </div>
              
            </div> */}

            {/* Tabs items */}
           
          </div>

        </div>
      </div>
    </section>
  )
}