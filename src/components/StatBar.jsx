import { useEffect, useRef, useState } from 'react'
import { Users, Mic, Heart } from 'lucide-react'

const stats = [
  { value: 100, suffix: '+', label: 'Subscribers', icon: Users },
  { value: 20, suffix: '+', label: 'Podcast Episodes', icon: Mic },
  { value: 83, suffix: '+', label: 'Followers', icon: Heart },
]

export default function StatBar() {
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const duration = 1500
    const steps = 40
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCounts(stats.map((s) => Math.round(s.value * eased)))
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [visible])

  return (
    <div ref={ref} className="relative z-10 -mt-10 mx-auto max-w-4xl px-6">
      <div
        className="bg-surface rounded-[var(--radius-section)] shadow-[var(--shadow-subtle)] px-8 py-8 md:py-10"
      >
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <Icon size={22} className="text-coral" strokeWidth={2} />
                <div className="font-stat font-bold text-3xl md:text-4xl text-charcoal tracking-tight">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="text-grey-500 text-xs md:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
