import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [sent, setSent] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name) e.name = 'Name is required'
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = 'Valid email required'
    if (!form.message || form.message.length < 10)
      e.message = 'Message should be at least 10 chars'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // Integrate with serverless email endpoint or send via API in production
    setSent(true)
    setTimeout(() => {
      setForm({ name: '', email: '', message: '' })
      setSent(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="Get in touch">Contact</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form className="glass p-6 rounded-lg" onSubmit={handleSubmit} noValidate>
            <label className="block mb-3">
              <div className="text-sm">Name</div>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
              />
              {errors.name && (
                <div className="text-xs text-rose-400 mt-1">{errors.name}</div>
              )}
            </label>

            <label className="block mb-3">
              <div className="text-sm">Email</div>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
              />
              {errors.email && (
                <div className="text-xs text-rose-400 mt-1">{errors.email}</div>
              )}
            </label>

            <label className="block mb-3">
              <div className="text-sm">Message</div>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
                rows={6}
              />
              {errors.message && (
                <div className="text-xs text-rose-400 mt-1">{errors.message}</div>
              )}
            </label>

            <div className="flex gap-3">
              <Button type="submit">Send Message</Button>
              <a
                href="mailto:designer@pcb.example"
                className="text-sm px-3 py-2 rounded-lg bg-white/5"
              >
                Request a Quote
              </a>
            </div>
            {sent && (
              <div className="text-sm text-green-400 mt-3">
                Message queued (demo) — integrate with API to make it real.
              </div>
            )}
          </form>

          <div className="glass p-6 rounded-lg">
            <div className="font-semibold">Contact Info</div>
            <div className="mt-2 text-sm text-slate-300">Email: designer@pcb.example</div>
            <div className="mt-1 text-sm text-slate-300">WhatsApp: +91 98765 43210</div>
            <div className="mt-1 text-sm text-slate-300">LinkedIn: /in/pcb-designer</div>

            <div className="mt-6">
              <div className="font-semibold">Availability</div>
              <div className="text-sm text-slate-300 mt-1">
                Freelance / Contract — open to 2–4 week projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
