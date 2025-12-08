import React from 'react'
import SectionTitle from '../components/SectionTitle'

const TESTS = [
  {
    id: 't1',
    name: 'Amit S.',
    projectType: 'IoT Sensor',
    text: 'Delivered excellent power-optimized design, reduced BOM cost and improved battery life.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Priya K.',
    projectType: 'Wearable',
    text: 'Great layout and thermal planning — assembly was smooth.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Ravi N.',
    projectType: 'RF Module',
    text: 'Strong EMI/EMC aware design, passed certification tests.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="Client feedback">Testimonials</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTS.map((t) => (
            <div key={t.id} className="glass p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pcb-teal flex items-center justify-center">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.projectType}</div>
                </div>
              </div>
              <p className="text-slate-300 mt-3">{t.text}</p>
              <div className="mt-2 text-yellow-400">{'★'.repeat(t.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
