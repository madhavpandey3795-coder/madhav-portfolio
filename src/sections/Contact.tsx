import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  
    const formEl = e.currentTarget // ✅ capture once (won't become null later)
  
    setError(null)
    setLoading(true)
  
    try {
      const fd = new FormData(formEl)
  
      fd.set('_subject', 'New email from freelancing website')
      fd.set('_captcha', 'false')
      fd.set('_template', 'table')
  
      const res = await fetch('https://formsubmit.co/ajax/madhav976141@gmail.com', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
  
      if (!res.ok) throw new Error('Failed to send. Please try again.')
  
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      formEl.reset() // ✅ use captured element
    } catch (err: any) {
      setError(err?.message ?? 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto p-6">
        <SectionTitle subtitle="Get in touch">Contact</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Confirmation Card */}
          {sent && (
            <div className="glass p-6 rounded-lg md:col-span-2 border border-emerald-400/30">
              <div className="text-lg font-semibold text-emerald-300">Query received</div>
              <div className="mt-2 text-sm text-slate-200">
                Thank you for reaching out. We have received your query — <b>Madhav Pandey</b> will
                contact you shortly.
              </div>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-sm"
              >
                Send another message
              </button>
            </div>
          )}

          {/* Form */}
          {!sent && (
            <form className="glass p-6 rounded-lg" onSubmit={handleSubmit}>
              {/* Honeypot (spam trap) */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <label className="block mb-3">
                <div className="text-sm">Name</div>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <label className="block mb-3">
                <div className="text-sm">Email</div>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
                />
              </label>

              <label className="block mb-3">
                <div className="text-sm">Message</div>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full bg-transparent border border-white/10 rounded-md p-2"
                  rows={6}
                />
              </label>

              {error && <div className="text-sm text-rose-300 mb-3">{error}</div>}

              <div className="flex gap-3 items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <a
                  href="mailto:madhav976141@gmail.com"
                  className="text-sm px-3 py-2 rounded-lg bg-white/5"
                >
                  Request a Quote
                </a>
              </div>
            </form>
          )}

          {/* Right column */}
          <div className="glass p-6 rounded-lg">
            <div className="font-semibold">Contact Info</div>
            <div className="mt-2 text-sm text-slate-300">Email: madhav976141@gmail.com</div>
            <div className="mt-1 text-sm text-slate-300">WhatsApp: +91 9761416410</div>
            <div className="mt-1 text-sm text-slate-300">
            <span className="text-slate-200">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/madhav-pandey-429b98192"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Click to redirect profile
            </a>
          </div>
            <div className="mt-6">
              <div className="font-semibold">Availability</div>
              <div className="text-sm text-slate-300 mt-1">
                Freelance / Contract — open to pcb design projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}