import React from 'react'
import Navbar from '../components/Navbar'
import FloatingSocial from '../components/FloatingSocial' // add this

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <FloatingSocial /> {/* add this */}
      <main className="pt-24">{children}</main>
      <footer className="text-center py-8 text-sm text-slate-400">
      © {new Date().getFullYear()} Madhav Pandey • PCB Designer • All rights reserved
        <div className="mt-1">
          This website is designed by{' '}
          <a
            href="https://shashwatvisuals.github.io/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white underline underline-offset-4"
          >
            Shashwat Mishra
          </a>
        </div>
      </footer>
    </div>
  )
}