import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDocumentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocumentModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'tentang', 'bab-pembelajaran', 'refleksi', 'artefak', 'kesimpulan'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Projek' },
    { id: 'bab-pembelajaran', label: '4 Bab Pembelajaran' },
    { id: 'refleksi', label: 'Refleksi' },
    { id: 'artefak', label: 'Artefak' },
    { id: 'kesimpulan', label: 'Kesimpulan' },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-emerald-950/10 shadow-xs shadow-emerald-900/5 py-3'
          : 'bg-[#FBFDFB]/90 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-button"
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-emerald-900 font-display">
                  RePlast
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  LK 2
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium leading-none">
                Projek Kepemimpinan • Kelompok 4
              </p>
            </div>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-100/80 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA & Document Viewer Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="view-document-button"
              onClick={onOpenDocumentModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Dokumen Asli LK 2</span>
            </button>
            <button
              id="cta-nav-explore"
              onClick={() => scrollTo('tentang')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md shadow-emerald-700/25 hover:shadow-emerald-700/35 cursor-pointer"
            >
              <span>Jelajahi</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-doc-button"
              onClick={onOpenDocumentModal}
              className="p-2 rounded-lg text-emerald-800 bg-emerald-50 border border-emerald-200 sm:hidden"
              aria-label="Buka Lembar LK 2"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="lg:hidden border-b border-emerald-100 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-100/90 text-emerald-900 font-semibold'
                      : 'text-stone-700 hover:bg-emerald-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-emerald-600" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <button
              id="mobile-open-lk2-modal"
              onClick={() => {
                setIsOpen(false);
                onOpenDocumentModal();
              }}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-700" />
              <span>Lihat Dokumen Asli LK 2</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
