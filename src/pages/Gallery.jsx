import { useState } from 'react'
import WaveformMotif from '../components/WaveformMotif'

const galleryImages = [
  { src: 'https://talkiepedia.forgealumnus.com/image/aboutus.jpg', alt: 'Talkiepedia team workshop' },
  { src: 'https://talkiepedia.forgealumnus.com/image/collinionsaeroscope.png', alt: 'The World of Aerospace episode' },
  { src: 'https://talkiepedia.forgealumnus.com/image/microsoft.png', alt: 'Microsoft career episode' },
  { src: 'https://talkiepedia.forgealumnus.com/image/trailer.png', alt: 'Talkiepedia trailer' },
  { src: 'https://talkiepedia.forgealumnus.com/image/podcast2.jpg', alt: 'Upcoming podcast session' },
  { src: 'https://talkiepedia.forgealumnus.com/image/microphone.jpg', alt: 'Professional microphone setup' },
  { src: 'https://talkiepedia.forgealumnus.com/image/HOME.png', alt: 'Talkiepedia home banner' },
  { src: 'https://talkiepedia.forgealumnus.com/image/mike.jpg', alt: 'Studio microphone' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
        <WaveformMotif variant="hero-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="font-stat text-xs font-semibold tracking-widest text-coral uppercase block mb-3">Gallery</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}>
            Behind The Mic
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A visual journey through our podcast sessions, team moments, and studio setups.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group break-inside-avoid cursor-pointer"
              onClick={() => setLightbox(img)}
            >
              <div className="rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-subtle)]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-[var(--radius-card)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
