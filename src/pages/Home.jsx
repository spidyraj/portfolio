import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import SystemDesign from '../components/SystemDesign'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollButtons from '../components/ScrollButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <SystemDesign />
        <Contact />
      </main>
      <Footer />
      <ScrollButtons />
    </>
  )
}
