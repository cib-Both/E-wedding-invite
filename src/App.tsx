import Hero from './components/Hero'
import CurtainReveal from './components/CurtainReveal'
import Intro from './components/Intro'
import Schedule from './components/Schedule'
import Story from './components/Story'
import Gallery from './components/Gallery'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import './index.css'

function App() {
  useScrollAnimations()

  return (
    <div className="min-h-screen bg-cream">
      <CurtainReveal />
      <Hero />
      <Intro />
      <Schedule />
      <Story />
      <Gallery />
      <MapSection />
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
