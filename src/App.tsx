import React from 'react'
import PageLayout from './layouts/PageLayout'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Portfolio from './sections/Portfolio'
import Services from './sections/Services'
import Workflow from './sections/Workflow'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <PageLayout>
      <div className="container mx-auto p-6">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Skills />
        <Workflow />
        <Testimonials />
        <Contact />
      </div>
    </PageLayout>
  )
}
