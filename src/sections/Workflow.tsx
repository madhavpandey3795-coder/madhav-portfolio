import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../utils/motionVariants'

const STEPS = [
  'Requirement Understanding',
  'Component Selection',
  'Schematic Creation',
  'PCB Layout & Routing',
  'Review & Testing',
  'Final Delivery',
]

export default function Workflow() {
  return (
    <section id="workflow" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="How I work">Workflow / Process</SectionTitle>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="flex flex-col md:flex-row gap-6"
        >
          {STEPS.map((s, i) => (
            <motion.div
              key={s}
              variants={fadeInUp}
              className="glass p-4 rounded-lg flex-1"
            >
              <div className="text-xs text-slate-400">Step {i + 1}</div>
              <div className="font-semibold mt-2">{s}</div>
              <div className="text-sm text-slate-300 mt-2">{getStepCopy(i)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function getStepCopy(i: number) {
  const copy = [
    'We begin by clarifying use-case, constraints and success metrics.',
    'Choose components for cost, availability, and thermal constraints.',
    'Capture schematic with clear nets and DRC-ready checks.',
    'Placement, plane planning, controlled impedance and routing.',
    'DRC, EMI checks, prototype testing and validation.',
    'Gerber export, BOM, and assembly-ready files.',
  ]
  return copy[i] ?? ''
}
