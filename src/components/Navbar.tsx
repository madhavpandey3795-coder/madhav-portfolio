import React, { useState } from 'react'
import useScrollSpy from '../hooks/useScrollSpy'
import Button from '../components/Button'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const active = useScrollSpy(
    NAV.map((n) => n.id),
    120
  )
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-6xl">
      <div className="flex items-center justify-between glass p-3 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pcb-teal to-pcb-blue flex items-center justify-center font-bold">
            PCB
          </div>
          <div className="hidden md:block font-semibold">Professional PCB Designer</div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {NAV.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className={`text-sm ${active === nav.id ? 'text-pcb-teal font-semibold' : 'text-slate-300'}`}
            >
              {nav.label}
            </a>
          ))}
          <Button variant="solid">Hire Me</Button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setOpen((v) => !v)} 
            className="p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-2 glass p-4 rounded-xl md:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => setOpen(false)}
                className={`text-sm ${active === nav.id ? 'text-pcb-teal font-semibold' : 'text-slate-300'}`}
              >
                {nav.label}
              </a>
            ))}
            <Button variant="solid">Hire Me</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
