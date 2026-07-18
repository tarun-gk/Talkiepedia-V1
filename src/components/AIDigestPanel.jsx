import { Sparkles, Clock, Lightbulb, BookOpen } from 'lucide-react'

export default function AIDigestPanel({ episode }) {
  if (!episode) return null

  const handleTimestampClick = (seconds) => {
    const iframe = document.querySelector('#episode-player')
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${episode.youtubeId}?start=${seconds}&autoplay=1`
    }
  }

  return (
    <div className="bg-surface rounded-[var(--radius-card)] border border-gold/30 overflow-hidden shadow-[var(--shadow-subtle)]">
      {/* Header */}
      <div className="bg-gold/10 px-6 py-4 flex items-center gap-2.5 border-b border-gold/20">
        <Sparkles size={18} className="text-gold" strokeWidth={2} />
        <span className="font-heading font-bold text-sm uppercase tracking-wider text-gold">
          Premium Insight
        </span>
        <span className="ml-auto text-xs text-grey-500 font-medium">AI Career Digest</span>
      </div>

      <div className="p-6 space-y-6">
        {/* TL;DR */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} className="text-coral" strokeWidth={2} />
            <h4 className="font-heading font-bold text-sm text-charcoal">Executive Summary</h4>
          </div>
          <p className="text-grey-700 text-sm leading-relaxed">
            {episode.tldr || "AI Digest currently unavailable."}
          </p>
        </div>

        {/* Key Takeaways */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-coral" strokeWidth={2} />
            <h4 className="font-heading font-bold text-sm text-charcoal">Key Takeaways</h4>
          </div>
          <div className="space-y-2.5">
            {episode.keyTakeaways?.map((takeaway, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="font-stat font-bold text-xs text-coral bg-coral/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-grey-700 text-sm leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timestamp Chips */}
        {episode.keyMoments && episode.keyMoments.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="text-coral" strokeWidth={2} />
              <h4 className="font-heading font-bold text-sm text-charcoal">Jump to Key Moments</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {episode.keyMoments.map((chip) => (
                <button
                  key={chip.time}
                  onClick={() => handleTimestampClick(chip.seconds)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-coral/8 hover:bg-coral/15 text-coral text-xs font-medium rounded-full transition-colors duration-250 cursor-pointer border-none text-left"
                >
                  <Clock size={11} strokeWidth={2} className="shrink-0" />
                  <span className="shrink-0">{chip.time}</span>
                  <span className="text-grey-700 ml-0.5 line-clamp-1">{chip.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
