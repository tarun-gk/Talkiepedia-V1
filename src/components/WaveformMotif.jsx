export default function WaveformMotif({ variant = 'divider', className = '', color = 'coral' }) {
  const barCount = variant === 'loading' ? 5 : variant === 'nav-underline' ? 8 : 60
  const colorClass = color === 'coral' ? 'bg-coral' : color === 'gold' ? 'bg-gold' : 'bg-charcoal'

  if (variant === 'divider') {
    return (
      <div className={`w-full overflow-hidden py-4 ${className}`}>
        <div className="flex items-center justify-center gap-[3px] opacity-15 animate-wave-flow" style={{ width: '200%' }}>
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className={`w-[3px] ${colorClass} rounded-full shrink-0`}
              style={{
                height: `${Math.sin(i * 0.2) * 16 + 20}px`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'hero-bg') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg className="absolute bottom-0 left-0 w-full h-40 opacity-[0.06]" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path
            d="M0,80 C180,20 360,140 540,80 C720,20 900,140 1080,80 C1260,20 1440,80 1440,80 L1440,160 L0,160 Z"
            fill="currentColor"
            className="text-coral"
          />
        </svg>
        <svg className="absolute top-1/4 right-0 w-80 h-80 opacity-[0.04]" viewBox="0 0 200 200">
          {Array.from({ length: 30 }).map((_, i) => (
            <circle
              key={i}
              cx={100 + Math.cos(i * 0.4) * (30 + i * 2)}
              cy={100 + Math.sin(i * 0.4) * (30 + i * 2)}
              r="2"
              className="fill-coral"
            />
          ))}
        </svg>
      </div>
    )
  }

  if (variant === 'loading') {
    return (
      <div className={`flex items-end gap-1 h-8 ${className}`}>
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            className={`w-1 ${colorClass} rounded-full animate-wave-bar`}
            style={{
              height: '100%',
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'progress') {
    return (
      <div className={`w-full h-2 rounded-full bg-grey-200 overflow-hidden ${className}`}>
        <div className="h-full bg-coral rounded-full flex items-center">
          <div className="flex items-center gap-[1px] h-full w-full opacity-60">
            {Array.from({ length: 80 }).map((_, i) => (
              <div
                key={i}
                className="w-[2px] bg-white/40 rounded-full shrink-0"
                style={{
                  height: `${Math.sin(i * 0.3) * 40 + 60}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'nav-underline') {
    return (
      <div className={`flex items-end gap-[2px] h-[3px] ${className}`}>
        {Array.from({ length: barCount }).map((_, i) => (
          <div
            key={i}
            className={`w-[3px] ${colorClass} rounded-full`}
            style={{
              height: `${Math.sin(i * 0.6) * 1.5 + 2}px`,
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'card-decoration') {
    return (
      <div className={`absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-[var(--radius-card)] ${className}`}>
        <div className="flex items-end gap-[1px] h-full opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className={`w-[2px] ${colorClass} rounded-full shrink-0`}
              style={{
                height: `${Math.sin(i * 0.3) * 50 + 50}%`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return null
}
