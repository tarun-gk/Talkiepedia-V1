import GuestCard from '../components/GuestCard'
import WaveformMotif from '../components/WaveformMotif'
import guests from '../data/guests.json'

export default function Guests() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">Our Guests</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Meet Our Guests
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Meet the voices behind the stories. Fresh perspectives, real experiences, and powerful conversations.
          </p>
        </div>
      </section>

      {/* Guest grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guests.map((guest) => (
            <GuestCard key={guest.id} guest={guest} />
          ))}
        </div>
      </section>
    </div>
  )
}
