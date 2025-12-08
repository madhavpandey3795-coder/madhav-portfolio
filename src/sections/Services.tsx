import React from 'react'
import SectionTitle from '../components/SectionTitle'
import services from '../data/services'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/motionVariants'

export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="What I provide">Services</SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.id} variants={fadeInUp} className="glass p-6 rounded-2xl">
              <div className="font-bold text-lg">{s.title}</div>
              <div className="text-sm text-slate-400 mt-2">{s.description}</div>
              <div className="mt-4">
                <div className="text-sm font-semibold">Deliverables</div>
                <ul className="text-sm list-disc list-inside text-slate-300 mt-2">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
