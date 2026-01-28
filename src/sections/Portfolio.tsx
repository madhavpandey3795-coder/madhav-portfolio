import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { fadeInUp, stagger } from '../utils/motionVariants'

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <section id="portfolio" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="Selected PCB & hardware projects">
          Portfolio Projects
        </SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, idx) => (
            <motion.div key={p.id} variants={fadeInUp} className="glass p-4 rounded-xl">
              <img
                src={p.images[0].thumb}
                alt={p.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-400">{p.description}</p>
                  <div className="text-xs mt-2">{p.tools.join(', ')}</div>
                </div>
                <div
                  className="text-sm px-2 py-1 rounded-md"
                  style={{
                    background:
                      p.complexity === 'advanced'
                        ? 'rgba(25,209,123,0.12)'
                        : 'rgba(0,170,255,0.08)',
                  }}
                >
                  {p.complexity}
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setActive(idx)
                    setOpen(true)
                  }}
                  className="text-sm px-3 py-2 rounded-lg bg-white/5"
                >
                  View
                </button>
                <a className="text-sm px-3 py-2 rounded-lg bg-white/5" href="#contact">
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={projects[active].images[0].thumb}
              alt={`${projects[active].title} PCB project image`}
              className="w-full rounded-md"
            />
            <img
              src={projects[active].images[0].render3d}
              alt={`${projects[active].title} PCB 3D render`}
              className="w-full rounded-md"
            />
          </div>
          <div className="mt-4">
            <h3 className="font-bold text-lg">{projects[active].title}</h3>
            <p className="text-sm text-slate-300 mt-2">{projects[active].description}</p>
            <div className="text-xs mt-2">Tools: {projects[active].tools.join(', ')}</div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
