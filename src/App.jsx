import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <Header />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Footer />
    </div>
  );
}
