'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Metrics from '@/components/Metrics'
import Demo from '@/components/Demo'

import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Demo />
        <Metrics />
        <Features />
      
      </main>
      <Footer />
    </div>
  )
}
