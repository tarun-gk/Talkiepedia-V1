import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import EpisodeDetail from './pages/EpisodeDetail'
import AskTalkiepedia from './pages/AskTalkiepedia'
import About from './pages/About'
import Podcasts from './pages/Podcasts'
import Guests from './pages/Guests'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import { AudioPlayerProvider } from './context/AudioPlayerContext'
import GlobalAudioPlayer from './components/GlobalAudioPlayer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-page">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode/:id" element={<EpisodeDetail />} />
          <Route path="/ask" element={<AskTalkiepedia />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AudioPlayerProvider>
      <Router>
        <AppLayout />
      </Router>
    </AudioPlayerProvider>
  )
}
