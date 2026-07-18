import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import AIDigestPanel from '../components/AIDigestPanel'
import episodes from '../data/episodes.json'

export default function EpisodeDetail() {
  const { id } = useParams()
  const episode = episodes.find((e) => e.id === id) || episodes[0]

  return (
    <div className="min-h-screen bg-off-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-grey-500 hover:text-charcoal mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to episodes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            <div className="relative rounded-[var(--radius-section)] overflow-hidden bg-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.15)] aspect-video">
              <iframe
                id="episode-player"
                src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>

            {/* Episode info */}
            <div className="bg-surface rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-subtle)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-semibold rounded-full uppercase">
                  {episode.category}
                </span>
                <span className="text-grey-500 text-xs font-stat">{episode.date}</span>
              </div>
              <h1 className="font-heading font-bold text-2xl md:text-3xl text-charcoal mb-3">
                {episode.title}
              </h1>
              <p className="text-grey-700 text-base leading-relaxed mb-4">
                {episode.description}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-grey-200/60">
                <div className="w-10 h-10 rounded-full bg-grey-200 flex items-center justify-center text-grey-700 font-heading font-bold text-sm">
                  {episode.guest.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-charcoal">{episode.guest}</p>
                  <p className="text-grey-500 text-xs">{episode.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar — AI Digest */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AIDigestPanel episode={episode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
