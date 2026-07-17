import { useState } from 'react'
import { Send } from 'lucide-react'

export default function NewsletterBand() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
          Subscribe For The Latest Episodes
        </h2>
        <p className="text-white/50 text-base mb-8 max-w-lg mx-auto">
          Get the latest podcasts, behind-the-scenes stories, and exclusive content delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="animate-fade-in inline-flex items-center gap-2 bg-success/15 text-success px-6 py-3 rounded-[var(--radius-btn)] font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/10 rounded-[var(--radius-input)] text-white placeholder-white/40 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-coral text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral/90 active:scale-[0.97] transition-all duration-250 cursor-pointer"
            >
              Subscribe
              <Send size={16} strokeWidth={2} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
