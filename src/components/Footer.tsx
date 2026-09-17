import React from 'react';
import { Leaf, ArrowUp, School, ShieldCheck, Heart } from 'lucide-react';
import { projectInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#112217] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/50">
          
          {/* Brand & Project Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-700/30">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                  RePlast
                </span>
                <span className="text-xs text-emerald-400 block font-medium">
                  Projek Kepemimpinan • Lembar Kerja 2
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Portfolio refleksi pengalaman belajar mahasiswa PPG Calon Guru Kelompok 4 dalam merancang, mengimplementasikan, dan merefleksikan projek daur ulang sampah plastik di {projectInfo.location}.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-xl w-fit">
              <School className="w-4 h-4" />
              <span>Mitra: {projectInfo.location}</span>
            </div>
          </div>

          {/* Academic Team Information */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">
              Identitas Kelompok
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="font-semibold text-emerald-300">{projectInfo.groupName}</p>
              <p className="text-stone-300 font-medium">Mata Kuliah: {projectInfo.course}</p>
              <p className="text-stone-400">Program: PPG Calon Guru</p>
            </div>
          </div>

          {/* Navigation Links & Action */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-mono">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-emerald-400 transition-colors">Beranda</a>
              <a href="#tentang" className="hover:text-emerald-400 transition-colors">Tentang Projek</a>
              <a href="#bab-pembelajaran" className="hover:text-emerald-400 transition-colors">4 Bab Belajar</a>
              <a href="#refleksi" className="hover:text-emerald-400 transition-colors">Refleksi 4C</a>
              <a href="#artefak" className="hover:text-emerald-400 transition-colors">Artefak Belajar</a>
              <a href="#refleksi-akhir" className="hover:text-emerald-400 transition-colors">Refleksi Akhir</a>
              <a href="#kesimpulan" className="hover:text-emerald-400 transition-colors">Kesimpulan</a>
            </div>

            <div className="pt-2">
              <button
                id="back-to-top-footer"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 text-xs font-semibold border border-emerald-700/50 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 {projectInfo.groupName}</span>
            <span>•</span>
            <span>{projectInfo.course}</span>
            <span>•</span>
            <span>PPG Calon Guru</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Dokumen Lembar Kerja 2 (LK 2)</span>
            <span>•</span>
            <span>Refleksi Pengalaman Belajar</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
