import React from 'react';
import { School, CheckCircle2 } from 'lucide-react';
import { projectInfo } from '../data/portfolioData';

export const AboutProject: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Inisiatif Daur Ulang Edukatif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            RePlast: Dari Sampah Menjadi Karya
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Kelompok kami melaksanakan proyek <span className="font-semibold text-emerald-900">RePlast</span> di{' '}
            <span className="font-semibold text-emerald-900">{projectInfo.location}</span> dengan mengolah sampah plastik anorganik—khususnya kantong kresek dan bungkus Pop Ice bekas—menjadi tas rajut dan tas anyam bernilai fungsional dan ekonomis.
          </p>
        </div>

        {/* Location & School Context Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                <School className="w-4 h-4" />
                <span>Lokasi & Mitra Pelaksanaan Projek</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                UPT SDN 067241 Medan
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
                Pemilihan sekolah mitra didasari oleh urgensi pengelolaan limbah kantin sekolah yang didominasi oleh kantong kresek sekali pakai dan sachet minuman perisa (Pop Ice). Melalui aksi RePlast, siswa diajak melihat bahwa sampah bukan sekadar barang buangan, melainkan media berkarya yang bernilai kriya tinggi.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-emerald-200 border border-white/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Edukasi Pengurangan Sampah
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-emerald-200 border border-white/15">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Keterampilan Kriya Berkelanjutan
                </span>
              </div>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-xs space-y-3 w-full max-w-xs">
                <div className="flex justify-between items-center text-emerald-200 pb-2 border-b border-white/10">
                  <span>Sasaran Limbah:</span>
                  <span className="font-bold text-white">Kresek & Sachet</span>
                </div>
                <div className="flex justify-between items-center text-emerald-200 pb-2 border-b border-white/10">
                  <span>Fokus Kriya:</span>
                  <span className="font-bold text-white">Rajut & Anyam</span>
                </div>
                <div className="flex justify-between items-center text-emerald-200">
                  <span>Penerima Manfaat:</span>
                  <span className="font-bold text-white">Warga Sekolah</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
