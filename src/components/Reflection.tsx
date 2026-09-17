import React from 'react';
import { Link2, AlertTriangle, Lightbulb, RefreshCw, CheckCircle2 } from 'lucide-react';
import { reflection4C } from '../data/portfolioData';

export const Reflection: React.FC = () => {
  return (
    <section id="refleksi" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <span>Kerangka Refleksi 4C • PPG Calon Guru</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            Refleksi Pengalaman Belajar (4C)
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Sintesis reflektif mendalam mengenai hubungan materi perkuliahan dengan transformasi pola pikir dan kompetensi calon pendidik profesional.
          </p>
        </div>

        {/* 2x2 Grid for Desktop, 1 Column for Mobile */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: CONNECTION */}
          <div
            id="card-4c-connection"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F4F9F5] to-white border border-emerald-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <Link2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-800 text-white font-mono">
                  Connection
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                Keterkaitan Materi dengan Peran Calon Guru
              </h3>

              <div className="p-4 rounded-2xl bg-white border border-emerald-100/80 mb-5 shadow-2xs">
                <p className="text-sm font-semibold text-emerald-950 italic leading-relaxed">
                  “{reflection4C.connection.description}”
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Poin Kunci dari Dokumen LK 2:
                </p>
                <ul className="space-y-2">
                  {reflection4C.connection.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-stone-500">
              <span>Mata Kuliah: Projek Kepemimpinan</span>
              <span className="font-semibold text-emerald-800">Peran Guru Abad 21</span>
            </div>
          </div>

          {/* Card 2: CHALLENGE */}
          <div
            id="card-4c-challenge"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FEF9F5] to-white border border-amber-200/90 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-700 text-white font-mono">
                  Challenge
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                Tantangan Perbedaan dengan Praktik Sebelumnya
              </h3>

              <div className="p-4 rounded-2xl bg-white border border-amber-100/80 mb-5 shadow-2xs">
                <p className="text-sm font-semibold text-amber-950 italic leading-relaxed">
                  “{reflection4C.challenge.description}”
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Poin Kunci dari Dokumen LK 2:
                </p>
                <ul className="space-y-2">
                  {reflection4C.challenge.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-stone-500">
              <span>Posisi Kunci: Koordinator Produksi & Kriya</span>
              <span className="font-semibold text-amber-800">Manajemen Terstruktur</span>
            </div>
          </div>

          {/* Card 3: CONCEPT */}
          <div
            id="card-4c-concept"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F5F8FA] to-white border border-teal-200/90 shadow-xs hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-800 text-white font-mono">
                  Concept
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-teal-800 transition-colors">
                Konsep Utama & Penting yang Dipelajari
              </h3>

              <div className="p-4 rounded-2xl bg-white border border-teal-100/80 mb-5 shadow-2xs">
                <p className="text-sm font-semibold text-teal-950 italic leading-relaxed">
                  “{reflection4C.concept.description}”
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Poin Kunci dari Dokumen LK 2:
                </p>
                <ul className="space-y-2">
                  {reflection4C.concept.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-teal-100 flex items-center justify-between text-xs text-stone-500">
              <span>Framework: SMART Goals & PjBL</span>
              <span className="font-semibold text-teal-800">Manajemen Sumber Daya</span>
            </div>
          </div>

          {/* Card 4: CHANGE */}
          <div
            id="card-4c-change"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF5F8] to-white border border-emerald-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-700 text-white font-mono">
                  Change
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-800 transition-colors">
                Perubahan yang Ingin Dilakukan ke Depan
              </h3>

              <div className="p-4 rounded-2xl bg-white border border-emerald-100/80 mb-5 shadow-2xs">
                <p className="text-sm font-semibold text-emerald-950 italic leading-relaxed">
                  “{reflection4C.change.description}”
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Poin Kunci dari Dokumen LK 2:
                </p>
                <ul className="space-y-2">
                  {reflection4C.change.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-stone-500">
              <span>Orientasi: Berkelanjutan Bersama Murid</span>
              <span className="font-semibold text-emerald-800">Evaluasi Berkala</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
