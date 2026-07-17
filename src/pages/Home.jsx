import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, X } from 'lucide-react'
import WaveformMotif from '../components/WaveformMotif'
import StatBar from '../components/StatBar'
import EpisodeCard from '../components/EpisodeCard'
import GuestCard from '../components/GuestCard'
import NewsletterBand from '../components/NewsletterBand'
import episodes from '../data/episodes.json'
import guests from '../data/guests.json'
import partners from '../data/partners.json'

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-charcoal">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://talkiepedia.forgealumnus.com/image/HOME.png"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 via-50% to-transparent" />
        </div>

        {/* Waveform bg motif */}
        <WaveformMotif variant="hero-bg" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse-soft" />
              <span className="font-stat text-xs font-semibold tracking-widest text-gold uppercase">
                Now Streaming
              </span>
            </div>

            <h1
              className="font-heading font-bold text-5xl md:text-7xl text-white leading-[1.05] mb-6"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.6)' }}
            >
              Voices That Lead
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Unlock career insights from top industry leaders. Discover untold stories behind the success of professionals shaping the future.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/podcasts"
                className="inline-flex items-center gap-2 px-7 py-4 bg-charcoal text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral transition-colors duration-250 no-underline active:scale-[0.97]"
              >
                Start Listening
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <button
                onClick={() => setShowTrailer(true)}
                className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-white/10 transition-colors duration-250 cursor-pointer bg-transparent active:scale-[0.97]"
              >
                <Play size={16} fill="white" strokeWidth={0} />
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" onClick={() => setShowTrailer(false)}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
              aria-label="Close trailer"
            >
              <X size={28} strokeWidth={2} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/hhckoit3fKk?autoplay=1"
              title="Talkiepedia Trailer"
              className="w-full h-full rounded-[var(--radius-card)]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── STAT BAR ── */}
      <StatBar />

      {/* ── MOST FAVORITE PODCASTS ── */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-2">
              Latest Episodes
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal">
              Most Favorite Podcasts
            </h2>
          </div>
          <Link
            to="/podcasts"
            className="inline-flex items-center gap-1.5 text-coral text-sm font-semibold hover:gap-3 transition-all duration-250 no-underline"
          >
            View All Episodes
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      </section>

      {/* ── Waveform Divider ── */}
      <WaveformMotif variant="divider" />

      {/* ── ABOUT SECTION ── */}
      <section className="py-20 md:py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-2">
                About Us
              </span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
                Turning Insights into Inspiring Podcasts
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Talkiepedia is a flagship initiative by Forge Alumnus, crafted to bridge the gap between aspiring professionals and the corporate world. We bring you insightful podcasts featuring real voices from top companies, leaders, and industry experts — all aimed at career growth, corporate readiness, and professional development.
              </p>

              <h4 className="font-heading font-bold text-sm text-white mb-4">Listen Our Podcast On</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.youtube.com/@Talkiepedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-coral hover:text-white transition-all duration-250"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/talkiepedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-coral hover:text-white transition-all duration-250"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* About image */}
            <div className="relative">
              <div className="rounded-[var(--radius-section)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <img
                  src="https://talkiepedia.forgealumnus.com/image/aboutus.jpg"
                  alt="Talkiepedia team workshop"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Episode count badge */}
              <div className="absolute -top-5 -right-3 md:right-6 bg-coral text-white px-5 py-4 rounded-[var(--radius-card)] shadow-lg">
                <div className="text-center">
                  <span className="block text-sm font-medium opacity-80">Episodes</span>
                  <span className="font-stat font-bold text-3xl">3+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR GUESTS ── */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-2">
            Our Guests
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            Meet Our Guests
          </h2>
          <p className="text-grey-700 text-base max-w-xl mx-auto">
            Meet the voices behind the stories. Our guests bring fresh perspectives, real experiences, and powerful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guests.map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </section>

      {/* ── PARTNER LOGO STRIP ── */}
      <section className="py-16 bg-grey-200/30 border-t border-grey-200/60 border-b border-b-grey-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center font-stat text-xs font-semibold tracking-[0.2em] text-grey-500 uppercase mb-10">
            In Collaboration With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {partners.map((partner) => (
              <div key={partner.name} className="group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING / NEWS ── */}
      <section className="py-20 md:py-24 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Blog cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://talkiepedia.forgealumnus.com/image/podcast2.jpg"
                  alt="Upcoming podcast"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-base text-charcoal mb-2 leading-snug">
                  What's Coming Next on Our Podcast?
                </h4>
                <p className="text-grey-700 text-sm mb-4 line-clamp-3">
                  In our upcoming episode, rising changemakers open up about their bold journeys, challenges, and dreams that fuel their drive.
                </p>
                <span className="text-coral text-sm font-semibold inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} strokeWidth={2} />
                </span>
              </div>
            </div>

            <div className="bg-surface rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)] group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://talkiepedia.forgealumnus.com/image/microphone.jpg"
                  alt="Modern entrepreneurship"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-base text-charcoal mb-2 leading-snug">
                  Moundy Rose: The Real State of Modern Entrepreneurship
                </h4>
                <p className="text-grey-700 text-sm mb-4 line-clamp-3">
                  Join Moundy Rose as she unpacks the realities of today's startup world — where resilience meets disruption.
                </p>
                <span className="text-coral text-sm font-semibold inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} strokeWidth={2} />
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-2">
              Upcoming Podcast
            </span>
            <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
              Latest News For You
            </h2>
            <p className="text-grey-700 text-base leading-relaxed mb-6">
              We're excited to share that over 1,000+ listeners have already tuned in! Now introducing our new series: <strong>Voices Unplugged</strong> — untold stories, creative journeys, and thought-provoking conversations with emerging creators, thinkers, and visionaries.
            </p>
            <Link
              to="/podcasts"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral transition-colors duration-250 no-underline w-fit active:scale-[0.97]"
            >
              All Episodes
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterBand />
    </div>
  )
}
