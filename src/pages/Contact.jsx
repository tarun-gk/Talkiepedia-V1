import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import WaveformMotif from '../components/WaveformMotif'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">Get In Touch</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Contact Us
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have a question, want to collaborate, or interested in being a guest? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-subtle)]">
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-grey-700 text-sm">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-page border border-grey-200 rounded-[var(--radius-input)] text-charcoal placeholder-grey-500 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-page border border-grey-200 rounded-[var(--radius-input)] text-charcoal placeholder-grey-500 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-page border border-grey-200 rounded-[var(--radius-input)] text-charcoal placeholder-grey-500 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-page border border-grey-200 rounded-[var(--radius-input)] text-charcoal placeholder-grey-500 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors resize-none"
                      placeholder="Tell us more…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral transition-colors duration-250 cursor-pointer border-none active:scale-[0.97]"
                  >
                    Send Message <Send size={16} strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-subtle)]">
              <h3 className="font-heading font-bold text-lg text-charcoal mb-5">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-coral" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-charcoal mb-0.5">Address</p>
                    <a href="https://www.google.com/maps/search/6th+floor,+N-heights,+Hitech-City,+Hyderabad" target="_blank" rel="noopener noreferrer" className="text-grey-700 text-sm no-underline hover:text-coral transition-colors">
                      6th floor, N-Heights, Hitech City, Hyderabad
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-coral" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-charcoal mb-0.5">Phone</p>
                    <a href="tel:080-3141-1741" className="text-grey-700 text-sm no-underline hover:text-coral transition-colors">080-3141-1741</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-coral" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-charcoal mb-0.5">Email</p>
                    <a href="mailto:talkiepedia@forgealumnus.com" className="text-grey-700 text-sm no-underline hover:text-coral transition-colors">talkiepedia@forgealumnus.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)] h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3810!3d17.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHITEC+City%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-none"
                allowFullScreen
                loading="lazy"
                title="Office location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
