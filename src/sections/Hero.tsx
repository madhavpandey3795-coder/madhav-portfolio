import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center" aria-label="Hero">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col gap-6 justify-center"
        >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          PCB Designer & R&D Hardware Engineer
        </h1>

        <p className="text-slate-300 max-w-xl">
          I specialize in high-speed routing, RF-aware layouts, SMPS and power electronics,
          and low-power IoT hardware. I deliver accurate schematics, optimized PCB layouts,
          complete design packages, and production-ready Gerbers with DFM/DFA in mind.
        </p>
          <div className="flex gap-4">
            <Button onClick={() => (window.location.hash = '#contact')}>
              Hire Me for PCB Design
            </Button>
            <Button variant="ghost" onClick={() => (window.location.hash = '#portfolio')}>
              View Portfolio
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md rounded-2xl overflow-hidden glass p-4">
            <img
              src="/blueprint.png"
              alt="PCB blueprint"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
