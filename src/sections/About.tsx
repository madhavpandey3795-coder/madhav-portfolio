import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto p-6 grid md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="col-span-1"
        >
          <img
            src="/src/assets/profile.jpg"
            alt="profile"
            className="rounded-2xl w-56 h-56 object-cover"
          />
        </motion.div>

        <div className="md:col-span-2">
          <SectionTitle subtitle="PCB design expertise">About Me</SectionTitle>
          <p className="text-slate-300">
          I’m Madhav Pandey, a PCB Designer and Junior R&D Engineer with 4+ years of hands-on experience in designing, optimizing, and debugging printed circuit boards for real-world applications. Since 2021, I’ve been working at Novelco Technologies, Noida, where I specialize in creating high-performance, manufacturable, and cost-efficient PCB designs used across consumer electronics, power systems, IoT devices, microcontroller-based solutions, and more.

My journey in electronics started with a strong academic foundation in Electronics Engineering , and has evolved into a deep passion for precise schematic design, intelligent routing, and robust problem-solving in hardware engineering.

I bring together technical expertise, design accuracy, and practical debugging skills to deliver reliable and production-ready PCB solutions.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat label="Years of Experience" value={4} />
            <Stat label="Projects Delivered" value={50} />
            <Stat label="Industries Served" value={2} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass p-4 rounded-lg text-center"
    >
      <div className="text-2xl font-bold">{value}+</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}
