import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './admin/ProtectedRoute';

function Portfolio() {
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <Header />
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Education />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
