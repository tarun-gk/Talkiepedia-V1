import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import { useState } from 'react'
import AIDigestPanel from '../components/AIDigestPanel'
import WaveformMotif from '../components/WaveformMotif'
import episodes from '../data/episodes.json'

export default function EpisodeDetail() {
  const { id } = useParams()
  const episode = episodes.find((e) => e.id === id) || episodes[0]
  const [playing, setPlaying] = useState(false)

  const handleSeek = (seconds) => {
    const iframe = document.querySelector('#episode-player')
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${episode.youtubeId}?start=${seconds}&autoplay=1`
      setPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-page">
      {/* Back nav */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-4">
        <Link
          to="/podcasts"
          className="inline-flex items-center gap-2 text-grey-700 hover:text-charcoal text-sm font-medium transition-colors no-underline"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Back to Episodes
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video player */}
            <div className="rounded-[var(--radius-section)] overflow-hidden bg-charcoal shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <div className="aspect-video">
                <iframe
                  id="episode-player"
                  src={`https://www.youtube.com/embed/${episode.youtubeId}`}
                  title={episode.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Waveform progress bar */}
            <div className="bg-surface rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-subtle)]">
              <div className="flex items-center gap-4 mb-3">
                {/* Transport controls */}
                <button
                  className="w-8 h-8 flex items-center justify-center text-grey-700 hover:text-charcoal transition-colors cursor-pointer bg-transparent border-none"
                  aria-label="Skip back"
                >
                  <SkipBack size={18} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setPlaying(!playing)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-charcoal text-white hover:bg-coral transition-colors cursor-pointer border-none active:scale-95"
                  aria-label={playing ? 'Pause' : 'Play'}
                >
                  {playing ? <Pause size={20} fill="white" strokeWidth={0} /> : <Play size={20} fill="white" strokeWidth={0} className="ml-0.5" />}
                </button>
                <button
                  className="w-8 h-8 flex items-center justify-center text-grey-700 hover:text-charcoal transition-colors cursor-pointer bg-transparent border-none"
                  aria-label="Skip forward"
                >
                  <SkipForward size={18} strokeWidth={2} />
                </button>
                <div className="flex-1">
                  {/* Waveform scrub bar */}
                  <div className="w-full h-8 flex items-center gap-[2px] cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-full shrink-0 transition-colors"
                        style={{
                          height: `${Math.sin(i * 0.25) * 12 + 16}px`,
                          backgroundColor: i < 30 ? 'var(--color-coral)' : 'var(--color-grey-200)',
                        }}
                      />
                    ))}
                  </div>
                </div>
                <Volume2 size={18} className="text-grey-500" strokeWidth={2} />
              </div>
              <div className="flex items-center justify-between text-xs text-grey-500 font-stat">
                <span>12:34</span>
                <span>{episode.duration}</span>
              </div>
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
