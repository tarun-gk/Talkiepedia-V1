import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import WaveformMotif from '../components/WaveformMotif'

const faqs = [
  {
    q: 'What is Talkiepedia?',
    a: 'Talkiepedia is a flagship initiative by Forge Alumnus, crafted to bridge the gap between aspiring professionals and the corporate world. We bring insightful podcasts featuring real voices from top companies, leaders, and industry experts.',
  },
  {
    q: 'Who are the guests on Talkiepedia?',
    a: 'Our guests include professionals from leading companies like Collins Aerospace, Microsoft, Gaia, and Forge Alumnus. They share career insights, industry knowledge, and personal growth stories.',
  },
  {
    q: 'How can I listen to Talkiepedia podcasts?',
    a: 'You can listen to all our episodes on our YouTube channel @Talkiepedia and follow us on Instagram @talkiepedia for updates and behind-the-scenes content.',
  },
  {
    q: 'What is the "Ask Talkiepedia" AI feature?',
    a: 'Ask Talkiepedia is an AI-powered career assistant that answers your questions using real insights from our podcast episodes. Every answer is grounded in actual conversations with industry leaders.',
  },
  {
    q: 'How can I be a guest on Talkiepedia?',
    a: "We're always looking for passionate professionals to share their stories. Reach out to us at talkiepedia@forgealumnus.com with your background and topics you'd like to discuss.",
  },
  {
    q: 'How often are new episodes released?',
    a: 'We release new episodes regularly. Subscribe to our newsletter and follow us on social media to stay updated on the latest releases.',
  },
  {
    q: 'Is Talkiepedia free to listen to?',
    a: 'Yes! All our podcast episodes are completely free to listen to on YouTube. We believe career insights should be accessible to everyone.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">FAQs</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Everything you need to know about Talkiepedia and our podcast platform.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface rounded-[var(--radius-card)] shadow-[var(--shadow-subtle)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-transparent border-none"
              >
                <span className="font-heading font-bold text-base text-charcoal pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-coral shrink-0 transition-transform duration-250 ${open === i ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-grey-700 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
