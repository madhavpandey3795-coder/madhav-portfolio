import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 max-w-4xl w-full bg-pcb-800 glass p-6 rounded-2xl"
      >
        {children}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-300">
          Close
        </button>
      </motion.div>
    </div>
  )
}
