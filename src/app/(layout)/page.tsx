'use client'

import About from '@/components/About'
import Hero from '@/components/Hero'
import Lorem from '@/components/Lorem'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import ServicesGrid from '@/components/ServicesGrid'

import React from 'react'

const Home = () => {
  return (
   <>
      
      <main className='min-h-screen bg-[#0F0118]'>
            <Hero />
            <About />
            <ServicesGrid />
            <Lorem />
            <Projects />
            <Services />
       
       
      </main>
    
   </>
  )
}

export default Home