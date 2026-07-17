import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import EpisodeCard from '../components/EpisodeCard'
import WaveformMotif from '../components/WaveformMotif'
import episodes from '../data/episodes.json'

const categories = ['All', ...new Set(episodes.map((e) => e.category))]

export default function Podcasts() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = episodes.filter((ep) => {
    const matchSearch = ep.title.toLowerCase().includes(search.toLowerCase()) ||
      ep.guest.toLowerCase().includes(search.toLowerCase()) ||
      ep.company.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'All' || ep.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">All Episodes</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            About Our Podcasts
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Discover career-driven podcasts with expert advice, industry secrets, and inspiring stories.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-500" strokeWidth={2} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search episodes, guests, companies…"
              className="w-full pl-12 pr-5 py-3.5 bg-surface border border-grey-200 rounded-[var(--radius-input)] text-charcoal placeholder-grey-500 text-sm focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-full transition-all duration-250 cursor-pointer border-none ${
                  activeCategory === cat
                    ? 'bg-coral text-white'
                    : 'bg-grey-200/50 text-grey-700 hover:bg-grey-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Episodes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-grey-500 text-base">No episodes found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  )
}
