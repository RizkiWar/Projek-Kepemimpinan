import React from 'react';
import { Compass, Sparkles, RefreshCw } from 'lucide-react';

export const Conclusion: React.FC = () => {
  return (
    <section id="kesimpulan" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Sintesis Akhir</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            Dari Pembelajaran Menjadi Aksi
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Mata kuliah Projek Kepemimpinan memberikan pengalaman nyata dan terstruktur bagi kami dalam merencanakan, menjalankan, memonitor, mengevaluasi, dan merefleksikan sebuah inisiatif berbasis kebutuhan riil di lingkungan pendidikan.
          </p>
        </div>

        {/* Three Big Pillars: LEAD, CREATE, REFLECT */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1: LEAD */}
          <div
            id="pillar-lead"
            className="p-8 rounded-3xl bg-[#F6FAF7] border border-emerald-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
                Pilar I
              </span>
              <h3 className="text-3xl font-extrabold text-stone-900 mt-1 mb-2 font-display">
                LEAD
              </h3>
              <p className="text-emerald-900 font-bold text-lg mb-3">
                “Belajar memimpin”
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Membangun kapasitas mengarahkan visi tim, mendelegasikan tugas produksi secara adil, dan mengambil keputusan cepat saat menghadapi dinamika limbah plastik di sekolah.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs font-semibold text-emerald-800">
              Kepemimpinan Kolaboratif
            </div>
          </div>

          {/* Pillar 2: CREATE */}
          <div
            id="pillar-create"
            className="p-8 rounded-3xl bg-[#FAF8F5] border border-amber-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-700 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-amber-700/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 font-mono">
                Pilar II
              </span>
              <h3 className="text-3xl font-extrabold text-stone-900 mt-1 mb-2 font-display">
                CREATE
              </h3>
              <p className="text-amber-950 font-bold text-lg mb-3">
                “Belajar menciptakan”
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Mentransformasikan limbah anorganik (kantong kresek & bungkus Pop Ice) menjadi karya seni kriya bernilai estetika dan daya guna nyata berupa tas rajut dan tas anyam.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-semibold text-amber-800">
              Kreativitas Berkelanjutan
            </div>
          </div>

          {/* Pillar 3: REFLECT */}
          <div
            id="pillar-reflect"
            className="p-8 rounded-3xl bg-[#F5F8FA] border border-teal-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-teal-800 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-md shadow-teal-800/20 group-hover:scale-105 transition-transform">
                <RefreshCw className="w-7 h-7" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 font-mono">
                Pilar III
              </span>
              <h3 className="text-3xl font-extrabold text-stone-900 mt-1 mb-2 font-display">
                REFLECT
              </h3>
              <p className="text-teal-950 font-bold text-lg mb-3">
                “Belajar mengevaluasi dan berkembang”
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Membiasakan diri meninjau kembali seluruh proses kerja melalui instrumen 4C untuk mematangkan karakter dan kesiapan menjadi guru profesional masa depan.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-teal-200/60 text-xs font-semibold text-teal-800">
              Pengembangan Berkelanjutan
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
