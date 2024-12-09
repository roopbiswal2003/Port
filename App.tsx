import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <CodingProfiles />
      <Projects />
      <Contact />
    </div>
  );
}