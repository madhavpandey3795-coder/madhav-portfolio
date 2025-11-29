import React from 'react'
import SectionTitle from '../components/SectionTitle'
import skills from '../data/skills'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../utils/motionVariants'


export default function Skills(){
return (
<section id="skills" className="py-12">
<div className="container mx-auto p-6">
<SectionTitle subtitle="Core competencies and tools">Skills & Tools</SectionTitle>


<motion.div initial="hidden" whileInView="visible" variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{skills.map(s => (
<motion.div key={s.id} variants={fadeInUp} className="glass p-4 rounded-lg flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pcb-teal to-pcb-blue flex items-center justify-center font-semibold">{s.name[0]}</div>
<div>
<div className="font-semibold">{s.name}</div>
<div className="text-sm text-slate-400">{s.category ?? 'PCB Skill'}</div>
</div>
</motion.div>
))}


{/* tools */}
{['Altium Designer','KiCad','Eagle','EasyEDA','OrCAD','LTSpice'].map(t => (
<motion.div key={t} variants={fadeInUp} className="glass p-4 rounded-lg flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pcb-blue to-pcb-teal flex items-center justify-center font-semibold">T</div>
<div>
<div className="font-semibold">{t}</div>
<div className="text-sm text-slate-400">Tool</div>
</div>
</motion.div>
))}
</motion.div>
</div>
</section>
)
}