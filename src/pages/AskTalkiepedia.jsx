import { useState } from 'react'
import { Search, Clock, User, Building2, Sparkles, MessageCircle } from 'lucide-react'
import WaveformMotif from '../components/WaveformMotif'
import { queryGroq } from '../api/groq'

const suggestedPrompts = [
  'How do I break into aerospace engineering?',
  'Tips for landing a job at Microsoft?',
  'What makes someone successful in corporate?',
]

export default function AskTalkiepedia() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (q) => {
    const question = q || query
    if (!question.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)
    setQuery(question)

    try {
      const res = await queryGroq(question)
      setResult(res)
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-page">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* AI Avatar */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-3 border-coral/30 shadow-[0_0_40px_rgba(255,107,87,0.2)]">
            <img src="/ai-avatar.jpeg" alt="Talkiepedia AI Assistant" className="w-full h-full object-cover" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles size={14} className="text-gold" />
            <span className="font-stat text-xs font-semibold tracking-widest text-gold uppercase">
              AI-Powered
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Ask Talkiepedia
          </h1>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Get career insights powered by real conversations with industry leaders. Every answer is grounded in actual episode content.
          </p>

          {/* Search input */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
            className="relative max-w-xl mx-auto"
          >
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a career question…"
              className="w-full pl-14 pr-28 py-4.5 bg-white/10 border border-white/15 rounded-[var(--radius-card)] text-white placeholder-white/35 text-base focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-coral text-white font-semibold text-sm rounded-[var(--radius-btn)] hover:bg-coral/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer border-none active:scale-95"
            >
              {loading ? 'Thinking…' : 'Ask'}
            </button>
          </form>

          {/* Suggested prompts */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSubmit(prompt)}
                className="px-4 py-2 bg-white/8 hover:bg-white/15 text-white/60 hover:text-white text-xs font-medium rounded-full transition-all duration-250 cursor-pointer border border-white/10 hover:border-white/20"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results area */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center gap-5 py-16 animate-fade-in">
            <WaveformMotif variant="loading" />
            <p className="text-grey-500 text-sm font-medium">Searching through episode transcripts…</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="bg-error/10 border border-error/20 rounded-[var(--radius-card)] p-6 text-center animate-fade-in">
            <p className="text-error font-medium">{error}</p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="animate-fade-in-up space-y-6">
            {/* Answer card */}
            <div className="bg-surface rounded-[var(--radius-card)] shadow-[var(--shadow-subtle)] overflow-hidden">
              <div className="bg-coral/5 px-6 py-3 flex items-center gap-3 border-b border-coral/10">
                <img src="/ai-avatar.jpeg" alt="AI" className="w-7 h-7 rounded-full object-cover" />
                <span className="font-heading font-bold text-sm text-charcoal">AI Answer</span>
                <span className="ml-auto text-xs text-grey-500">Powered by episode transcripts</span>
              </div>
              <div className="p-6">
                <div className="text-grey-700 text-base leading-relaxed whitespace-pre-wrap">
                  {result.answer}
                </div>
              </div>
            </div>

            {/* Citations */}
            {result.citations && result.citations.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-sm text-charcoal mb-3 flex items-center gap-2">
                  <Clock size={14} className="text-coral" strokeWidth={2} />
                  Source Citations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.citations.map((cite, i) => (
                    <div
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface border border-grey-200/80 rounded-[var(--radius-btn)] shadow-[var(--shadow-subtle)]"
                    >
                      <User size={13} className="text-coral" strokeWidth={2} />
                      <span className="text-charcoal text-xs font-semibold">{cite.guest}</span>
                      <span className="text-grey-500 text-xs flex items-center gap-1">
                        <Building2 size={11} strokeWidth={2} />
                        {cite.company}
                      </span>
                      {cite.timestamp && (
                        <span className="px-2 py-0.5 bg-coral/10 text-coral text-xs font-stat font-semibold rounded-full">
                          {cite.timestamp}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty state */}
        {!loading && !result && !error && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 bg-coral/10 rounded-full flex items-center justify-center">
              <Sparkles size={32} className="text-coral" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-bold text-xl text-charcoal mb-2">
              Your AI Career Assistant
            </h3>
            <p className="text-grey-500 text-base max-w-md mx-auto">
              Ask any career question and get answers grounded in real conversations with industry leaders from Collins Aerospace, Microsoft, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
