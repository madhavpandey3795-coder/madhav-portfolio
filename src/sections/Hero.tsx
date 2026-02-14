import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { fadeInUp } from '../utils/motionVariants'

function useTypewriterText(fullText: string, typeMs = 45, holdMs = 1200, restartGapMs = 250) {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    let mounted = true
    let t: number | undefined

    const run = () => {
      let i = 0
      const step = () => {
        if (!mounted) return

        if (i <= fullText.length) {
          setText(fullText.slice(0, i))
          i += 1
          t = window.setTimeout(step, typeMs)
          return
        }

        t = window.setTimeout(() => {
          if (!mounted) return
          setText('')
          t = window.setTimeout(run, restartGapMs)
        }, holdMs)
      }

      step()
    }

    run()
    return () => {
      mounted = false
      if (t) window.clearTimeout(t)
    }
  }, [fullText, typeMs, holdMs, restartGapMs])

  return text
}

export default function Hero() {
  const name = 'Madhav Pandey'
  const fullLine = `${name} - PCB Designer & R&D Hardware Engineer`
  const typedLine = useTypewriterText(fullLine)

  const typedName = typedLine.slice(0, name.length)
  const typedRest = typedLine.slice(name.length)

  return (
    <section id="home" className="min-h-[80vh] flex items-center" aria-label="Hero">
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col gap-6 justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-xl break-words">
            <span className="text-pcb-teal">{typedName}</span>
            {typedRest}
            <span className="inline-block w-[0.08em] ml-1 animate-pulse" aria-hidden>
              |
            </span>
          </h1>

          <p className="text-slate-300 max-w-xl">
            I specialize in high-speed routing, RF-aware layouts, SMPS and power electronics, and low-power
            IoT hardware. I deliver accurate schematics, optimized PCB layouts, complete design packages,
            and production-ready Gerbers with DFM/DFA in mind.
          </p>

          <div className="flex gap-4">
            <Button onClick={() => (window.location.hash = '#contact')}>Hire Me for PCB Design</Button>
            <Button variant="ghost" onClick={() => (window.location.hash = '#portfolio')}>
              View Portfolio
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden glass p-4">
            <img 
              src="/blueprint.png" 
              alt="PCB blueprint" 
              className="w-full h-auto object-cover rounded-lg"
              width="494"
              height="494"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}