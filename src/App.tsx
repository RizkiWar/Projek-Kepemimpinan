import React, { useState, useEffect } from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProject } from './components/AboutProject';
import { LearningChapters } from './components/LearningChapters';
import { Reflection } from './components/Reflection';
import { Artifacts } from './components/Artifacts';
import { FinalReflection } from './components/FinalReflection';
import { Conclusion } from './components/Conclusion';
import { Footer } from './components/Footer';
import { DocumentModal } from './components/DocumentModal';

export default function App() {
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFDFB] text-[#1E2E23] font-sans antialiased relative">
      
      {/* Scroll Progress Bar at the Top */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-800 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navbar */}
      <Navbar onOpenDocumentModal={() => setIsDocumentModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Section 4: Hero Section */}
        <Hero
          onExplore={() => scrollToSection('tentang')}
          onViewReflection={() => scrollToSection('refleksi')}
        />

        {/* Section 5: Tentang RePlast */}
        <AboutProject />

        {/* Section 6: 4 Bab Pembelajaran */}
        <LearningChapters />

        {/* Section 7: Connection, Challenge, Concept, Change (4C) */}
        <Reflection />

        {/* Section 8: Artefak Pembelajaran */}
        <Artifacts />

        {/* Section 9: Refleksi Akhir */}
        <FinalReflection />

        {/* Section 10: Kesimpulan */}
        <Conclusion />
      </main>

      {/* Section 14: Footer */}
      <Footer />

      {/* Authentic LK 2 Document Viewer Modal */}
      <DocumentModal
        isOpen={isDocumentModalOpen}
        onClose={() => setIsDocumentModalOpen(false)}
      />

      {/* Floating Action Button: Quick Document Access */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          id="floating-lk2-btn"
          onClick={() => setIsDocumentModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 hover:bg-emerald-50 text-emerald-900 border border-emerald-300/80 shadow-lg shadow-emerald-950/10 backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-xs font-bold"
        >
          <FileText className="w-4 h-4 text-emerald-700" />
          <span>Buka Lembar Asli LK 2</span>
        </button>
      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white shadow-xl shadow-emerald-900/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer focus:outline-hidden"
          aria-label="Kembali ke atas halaman"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
