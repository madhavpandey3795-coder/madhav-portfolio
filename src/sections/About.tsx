import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'


export default function About() {
return (
<section id="about" className="py-12">
<div className="container mx-auto p-6 grid md:grid-cols-3 gap-8 items-center">
<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="col-span-1">
<img src="/src/assets/profile.jpg" alt="profile" className="rounded-2xl w-56 h-56 object-cover" />
</motion.div>


<div className="md:col-span-2">
<SectionTitle subtitle="PCB design expertise">About Me</SectionTitle>
<p className="text-slate-300">I specialize in high-speed routing, RF-aware layouts, and low-power IoT boards. I consider EMI/EMC from the start and prioritize DFM/DFA to save manufacturing cost and improve yield.</p>


<div className="mt-6 grid grid-cols-3 gap-4">
<Stat label="Years of Experience" value={6} />
<Stat label="Projects Delivered" value={42} />
<Stat label="Industries Served" value={8} />
</div>
</div>
</div>
</section>
)
}


function Stat({ label, value }: { label: string; value: number }){
return (
<motion.div initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} className="glass p-4 rounded-lg text-center">
<div className="text-2xl font-bold">{value}+</div>
<div className="text-sm text-slate-400">{label}</div>
</motion.div>
)
}