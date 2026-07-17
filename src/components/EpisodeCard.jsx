import { Link } from 'react-router-dom'
import { Play, Clock, Calendar } from 'lucide-react'
import WaveformMotif from './WaveformMotif'

export default function EpisodeCard({ episode, featured = false }) {
  return (
    <Link
      to={`/episode/${episode.id}`}
      className="group relative block no-underline"
    >
      <div
        className={`relative bg-surface overflow-hidden transition-all duration-250 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${
          featured ? 'rounded-[var(--radius-section)]' : 'rounded-[var(--radius-card)]'
        }`}
        style={{ transform: 'translateZ(0)' }}
      >
        {/* Thumbnail */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}
          style={{ borderRadius: `var(--radius-img) var(--radius-img) 0 0` }}
        >
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Play overlay */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-250 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-charcoal/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-250 scale-90 group-hover:scale-100">
              <Play size={22} fill="white" strokeWidth={0} />
            </div>
          </div>
          {/* Category tag */}
          {episode.category && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-coral/90 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
              {episode.category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 pb-6">
          {/* Meta row */}
          <div className="flex items-center gap-4 mb-3 text-grey-500 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <Clock size={13} strokeWidth={2} />
              {episode.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} strokeWidth={2} />
              {episode.date}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-heading font-bold text-charcoal mb-2 leading-snug group-hover:text-coral transition-colors duration-250 ${
            featured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
          }`}>
            {episode.title}
          </h3>

          {/* Guest */}
          <p className="text-grey-700 text-sm">
            {episode.guest}
            <span className="text-grey-500"> · {episode.company}</span>
          </p>
        </div>

        {/* Waveform decoration */}
        <WaveformMotif variant="card-decoration" />
      </div>
    </Link>
  )
}
