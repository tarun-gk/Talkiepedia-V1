import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import WaveformMotif from '../components/WaveformMotif'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">About Us</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Turning Insights into Inspiring Podcasts
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A flagship initiative by Forge Alumnus, bridging aspiring professionals and the corporate world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl text-charcoal mb-6">Our Story</h2>
            <p className="text-grey-700 text-base leading-relaxed mb-4">
              Talkiepedia is a flagship initiative by Forge Alumnus, crafted to bridge the gap between aspiring professionals and the corporate world. We bring you insightful podcasts featuring real voices from top companies, leaders, and industry experts — all aimed at career growth, corporate readiness, and professional development.
            </p>
            <p className="text-grey-700 text-base leading-relaxed mb-8">
              At Talkiepedia, we believe every voice has a story worth sharing. Our mission is to bring you authentic, thought-provoking conversations that inspire change and foster connection. From emerging voices to seasoned experts, we dive deep into topics that matter.
            </p>
            <Link
              to="/podcasts"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral transition-colors duration-250 no-underline active:scale-[0.97]"
            >
              Explore Episodes <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className="rounded-[var(--radius-section)] overflow-hidden shadow-[var(--shadow-subtle)]">
            <img src="https://talkiepedia.forgealumnus.com/image/aboutus.jpg" alt="Talkiepedia team" className="w-full h-auto" loading="lazy" />
          </div>
        </div>
      </section>

      <WaveformMotif variant="divider" />

      {/* Values */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-3">What We Stand For</h2>
          <p className="text-grey-700 text-base max-w-xl mx-auto">Our core principles guide every conversation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Mission', desc: 'Empower professionals with career insights from industry leaders through authentic, meaningful conversations.' },
            { icon: Eye, title: 'Vision', desc: 'To be the go-to platform for career growth through conversations that inspire, educate, and connect.' },
            { icon: Heart, title: 'Values', desc: 'Authenticity, inclusivity, and a commitment to helping every professional reach their full potential.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-subtle)] text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-coral/10 rounded-full flex items-center justify-center">
                <Icon size={24} className="text-coral" strokeWidth={2} />
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{title}</h3>
              <p className="text-grey-700 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
