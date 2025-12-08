import React from 'react'
import Navbar from '../components/Navbar'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="pt-24">{children}</main>
      <footer className="text-center py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} PCB Designer • All rights reserved
      </footer>
    </div>
  )
}
