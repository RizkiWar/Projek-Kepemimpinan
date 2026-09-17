import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink, 
  Tag, 
  Filter
} from 'lucide-react';
import { artifactsData } from '../data/portfolioData';
import { ArtifactItem } from '../types';
import { ArtifactLightbox } from './ArtifactLightbox';

export const Artifacts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxArtifact, setActiveLightboxArtifact] = useState<ArtifactItem | null>(null);

  const filteredArtifacts = selectedCategory === 'all'
    ? artifactsData
    : artifactsData.filter(a => a.category === selectedCategory);

  return (
    <section id="artefak" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>Bukti Dukung Refleksi • Lembar Kerja 2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
              Artefak Pembelajaran
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Bukti autentik hasil pengerjaan tugas, instrumen perencanaan, dokumentasi pengerjaan, dan karya fisik luaran projek.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Semua Artefak ({artifactsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('smart-goals')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'smart-goals'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              SMART Goals (Tugas 6.1)
            </button>
            <button
              onClick={() => setSelectedCategory('reflection')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'reflection'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Y-Chart (Tugas 4.1)
            </button>
            <button
              onClick={() => setSelectedCategory('products')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'products'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Produk Nyata (2)
            </button>
          </div>
        </div>

        {/* Artifacts Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredArtifacts.map((artifact, idx) => (
            <div
              key={artifact.id}
              id={`artifact-card-${artifact.id}`}
              className="bg-white rounded-3xl border border-stone-200/90 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Preview with Click to Zoom */}
                <div
                  onClick={() => setActiveLightboxArtifact(artifact)}
                  className="relative aspect-16/10 bg-stone-100 overflow-hidden cursor-pointer"
                >
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.altText}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Task Code Badge */}
                  {artifact.taskCode && (
                    <div className="absolute top-4 left-4 bg-emerald-800/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider font-mono shadow-sm">
                      {artifact.taskCode}
                    </div>
                  )}

                  {/* Zoom indicator on hover */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-stone-800 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Perbesar & Analisis</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {artifact.title}
                    </h3>
                    <p className="text-sm text-stone-600 mt-1.5 leading-relaxed font-medium">
                      “{artifact.description}”
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {artifact.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* LK 2 Analysis Callouts */}
                  <div className="space-y-2.5 pt-2">
                    <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs space-y-1">
                      <p className="font-bold text-emerald-900 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Mengapa Artefak Ini Dipilih?</span>
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        {artifact.whyChosen}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-xs space-y-1">
                      <p className="font-bold text-teal-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                        <span>Bagian yang Mendukung Hasil Refleksi:</span>
                      </p>
                      <p className="text-stone-700 leading-relaxed">
                        {artifact.supportingAspect}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500">
                  LK 2 Analisis Bukti Belajar
                </span>
                <button
                  onClick={() => setActiveLightboxArtifact(artifact)}
                  className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Detail Bukti</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global LK 2 Rationale Banner from Document */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#F5FAF6] border border-emerald-200 shadow-xs">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800">
                Pernyataan Resmi LK 2 (Pertanyaan 2)
              </span>
              <h4 className="text-base font-bold text-stone-900">
                Alasan Pemilihan Artefak Pembelajaran
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic bg-white p-4 rounded-2xl border border-emerald-100">
                “Artefak tersebut kami pilih karena secara langsung menggambarkan proses berpikir dan tahapan kerja melaksanakan projek, mulai dari perumusan tujuan (SMART Goals), refleksi individu terhadap proses (Y-chart), hingga hasil nyata pembuatan (produk tas) yang menjadi bukti keberhasilan implementasi proyek kepemimpinan tim kami.”
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
                Pernyataan Resmi LK 2 (Pertanyaan 3)
              </span>
              <h4 className="text-base font-bold text-stone-900">
                Dukungan Artefak Terhadap Hasil Refleksi
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic bg-white p-4 rounded-2xl border border-teal-100">
                “Bagian SMART Goals menunjukkan kemampuan kami merencanakan proyek secara spesifik dan terukur; Y-chart menunjukkan proses refleksi kritis saya sebagai anggota tim; sedangkan dokumentasi produk dan hasil produk menunjukkan hasil implementasi dan manajemen projek yang berhasil dicapai, sekaligus menjadi bahan evaluasi dan laporan akhir projek.”
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {activeLightboxArtifact && (
        <ArtifactLightbox
          artifact={activeLightboxArtifact}
          onClose={() => setActiveLightboxArtifact(null)}
        />
      )}
    </section>
  );
};
