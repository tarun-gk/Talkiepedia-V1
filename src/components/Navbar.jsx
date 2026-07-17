import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Podcasts', path: '/podcasts' },
  { label: 'Guests', path: '/guests' },
  { label: 'Ask AI', path: '/ask' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[var(--shadow-nav)]'
            : 'bg-white/70 backdrop-blur-md'
        }`}
        style={{ borderRadius: 'var(--radius-card)' }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <img src="/logo.webp" alt="Talkiepedia" className="h-8 w-auto invert" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-250 no-underline rounded-[var(--radius-btn)] ${
                    isActive
                      ? 'text-coral'
                      : 'text-grey-700 hover:text-charcoal hover:bg-grey-200/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-coral" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-grey-700 hover:text-charcoal transition-colors rounded-[var(--radius-btn)]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden border-t border-grey-200/60 px-6 pb-5 pt-3 animate-fade-in"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-[var(--radius-btn)] text-sm font-medium no-underline transition-colors ${
                      isActive
                        ? 'text-coral bg-coral/5'
                        : 'text-grey-700 hover:bg-grey-200/40'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to push content below the floating nav */}
      <div className="h-20" />
    </>
  )
}
