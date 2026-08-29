import { useState } from 'react'
import { contact, profile } from '../data/portfolioData'
import { ArrowRightIcon, MailIcon, PhoneIcon, LocationIcon } from './Icons'
import useReveal from '../hooks/useReveal'

/**
 * EMAIL SETUP:
 * Using FormSubmit.co - completely free, no setup required!
 * The form automatically sends to: muhammadarham2177@gmail.com
 */

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('message', form.message)
      formData.append('_captcha', 'false')

      const response = await fetch('https://formsubmit.co/muhammadarham2177@gmail.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('Error sending message. Please try again later.')
      console.error(err)
    }
  }

  return (
    <section id="contact" className="container-px py-20 sm:py-28">
      <div ref={ref} className="reveal grid lg:grid-cols-[0.9fr,1.1fr] gap-16">
        {/* left copy */}
        <div>
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="section-heading">{contact.heading}</h2>
          <p className="section-sub">{contact.sub}</p>

          <div className="mt-10 space-y-4">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <LocationIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.location}
              </span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <MailIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 rounded-full border border-ink-border flex items-center justify-center text-mint-400 group-hover:border-mint-500/50 transition-colors">
                <PhoneIcon />
              </span>
              <span className="text-paper-300 group-hover:text-mint-400 transition-colors">
                {profile.phone}
              </span>
            </a>
          </div>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
          {submitted && (
            <div className="p-4 bg-mint-500/10 border border-mint-500/50 rounded-lg text-mint-400 text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
          <div className="space-y-5">
            <div>
              <label className="font-mono text-xs text-paper-500 uppercase tracking-wide">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-2 w-full bg-ink-900 border border-ink-border rounded-lg px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mint-500/50 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-paper-500 uppercase tracking-wide">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="mt-2 w-full bg-ink-900 border border-ink-border rounded-lg px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mint-500/50 outline-none transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-xs text-paper-500 uppercase tracking-wide">
              Message
            </label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or project..."
              className="mt-2 w-full bg-ink-900 border border-ink-border rounded-lg px-4 py-3 text-paper-100 placeholder:text-paper-500 focus:border-mint-500/50 outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-mint-500 text-ink-950 font-semibold px-6 py-3.5 text-sm shadow-glow hover:bg-mint-400 transition-colors"
          >
            Send Message <ArrowRightIcon width={16} height={16} />
          </button>
          <p className="text-xs text-paper-500 text-center">
            Your message will be sent directly to my email. I typically respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
