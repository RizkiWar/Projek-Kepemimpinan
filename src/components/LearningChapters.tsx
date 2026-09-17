import React, { useState } from 'react';
import { Target, CalendarCheck, Briefcase, LineChart, ChevronRight, X, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { chaptersData } from '../data/portfolioData';
import { Chapter } from '../types';

export const LearningChapters: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const getChapterIcon = (icon: string) => {
    switch (icon) {
      case 'Target':
        return <Target className="w-6 h-6 text-emerald-700" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-teal-700" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-700" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-emerald-800" />;
      default:
        return <BookOpen className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="bab-pembelajaran" className="py-20 bg-[#F7FAF7] border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Struktur Kurikulum Mata Kuliah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            4 Bab Pembelajaran Projek Kepemimpinan
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Empat tahapan terstruktur yang dilalui Kelompok 4 dari pembentukan visi hingga laporan pertanggungjawaban dan refleksi komprehensif.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chaptersData.map((chapter) => (
            <div
              key={chapter.id}
              id={`chapter-card-${chapter.id}`}
              className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />

              <div>
                {/* Header with Chapter Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                    {getChapterIcon(chapter.icon)}
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-100/70 text-emerald-800 font-mono">
                    {chapter.number}
                  </span>
                </div>

                {/* Chapter Title & Description (Matching Document LK 2) */}
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug mb-3">
                  {chapter.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  “{chapter.shortDesc}”
                </p>
              </div>

              {/* Action Button "Pelajari" */}
              <button
                id={`btn-learn-chapter-${chapter.id}`}
                onClick={() => setSelectedChapter(chapter)}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-700 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>Pelajari Rincian</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Highlight Quote on Chapter Interconnection */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">
                Siklus Terintegrasi Teori & Praktik
              </h4>
              <p className="text-xs text-stone-500">
                Keempat bab membentuk alur berkesinambungan: Visi (Bab 1) ➔ Perencanaan (Bab 2) ➔ Eksekusi (Bab 3) ➔ Refleksi & Evaluasi (Bab 4).
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 shrink-0">
            Terhubung ke RePlast
          </span>
        </div>

      </div>

      {/* Chapter Detail Modal Dialog */}
      {selectedChapter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-emerald-100 shadow-2xl relative">
            <button
              id="close-chapter-modal"
              onClick={() => setSelectedChapter(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Tutup Dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                {selectedChapter.number}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {selectedChapter.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {selectedChapter.title}
                </h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 mb-6">
              <p className="text-xs text-stone-500 uppercase font-bold tracking-wider mb-1">
                Kutipan Dokumen LK 2:
              </p>
              <p className="text-stone-800 font-medium text-sm italic">
                "{selectedChapter.shortDesc}"
              </p>
            </div>

            <div className="space-y-5 text-sm text-stone-700 leading-relaxed mb-6">
              <div>
                <h4 className="font-bold text-stone-900 mb-2">Uraian Pembelajaran Mendalam:</h4>
                <p>{selectedChapter.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-stone-900 mb-2">Capaian & Fokus Materi:</h4>
                <ul className="space-y-2">
                  {selectedChapter.learningOutcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-1">
                  Kaitannya dengan Projek RePlast:
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {selectedChapter.connectionToRePlast}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedChapter(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-md"
              >
                Tutup Pembelajaran
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
