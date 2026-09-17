import React from 'react';
import { 
  Compass, 
  UserCheck, 
  Boxes, 
  Layers, 
  Eye, 
  CheckCircle2, 
  RotateCcw, 
  Quote, 
  Shield, 
  Check
} from 'lucide-react';
import { responsibilities } from '../data/portfolioData';

export const ProjectRole: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass': return <Compass className="w-5 h-5 text-emerald-700" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-teal-700" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-800" />;
      case 'Eye': return <Eye className="w-5 h-5 text-blue-700" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-teal-800" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5 text-stone-700" />;
      default: return <Check className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="peran" className="py-20 bg-[#FBFDFB] border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <span>Struktur Kepemimpinan Kelompok</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            Peran Saya dalam Projek
          </h2>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-sm">
            <Shield className="w-4 h-4 text-emerald-300" />
            <span>Koordinator Produksi dan Kriya</span>
          </div>
        </div>

        {/* Highlighted Quote Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-4 right-6 text-emerald-500/20">
            <Quote className="w-24 h-24" />
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <p className="text-lg sm:text-xl font-medium leading-relaxed italic text-emerald-50">
              “Sebagai Koordinator Produksi dan Kriya, saya belajar mengelola pembagian tugas dan sumber daya bersama tim serta memastikan proses produksi berjalan sesuai tujuan projek.”
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-emerald-200">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dokumen LK 2 PPG Calon Guru • Refleksi Praktik Nyata Bab 2, Bab 3, dan Bab 4</span>
            </div>
          </div>
        </div>

        {/* 7 Responsibility Cards */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-stone-900">
              7 Lingkup Tanggung Jawab Utama
            </h3>
            <span className="text-xs text-stone-500 font-medium hidden sm:inline">
              Perencanaan hingga Refleksi Berkelanjutan
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {responsibilities.map((resp, idx) => (
              <div
                key={resp.id}
                id={`responsibility-card-${resp.id}`}
                className={`p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
                  idx === 6 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {getIcon(resp.iconName)}
                    </div>
                    <span className="text-[11px] font-extrabold text-stone-400 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-base mb-1.5 group-hover:text-emerald-800 transition-colors">
                    {resp.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {resp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
