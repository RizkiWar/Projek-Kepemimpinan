import React from 'react';
import { Quote, Sparkles, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { projectInfo } from '../data/portfolioData';

export const FinalReflection: React.FC = () => {
  return (
    <section id="refleksi-akhir" className="py-24 bg-gradient-to-b from-[#FAFDFB] to-[#F1F6F2] border-b border-stone-200/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Refleksi Kulminasi Mata Kuliah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14261B] tracking-tight">
            Refleksi Mata Kuliah Projek Kepemimpinan
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Introspeksi filosofis dan profesional dari seluruh perjalanan merancang hingga mengevaluasi inisiatif RePlast.
          </p>
        </div>

        {/* Big Elegant Quote Card */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-emerald-200/90 shadow-xl shadow-emerald-950/5 relative space-y-8">
          
          {/* Quote Icon Header */}
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <Quote className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full">
              Pernyataan Refleksi Kelompok 4
            </span>
          </div>

          {/* Primary Quote from LK 2 */}
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 leading-snug tracking-tight font-display">
            “Mata kuliah Projek Kepemimpinan mengajarkan kelompok kami bagaimana memimpin dan mengelola sebuah projek nyata dari tahap perencanaan hingga evaluasi.”
          </blockquote>

          {/* Body Narrative of the Reflection */}
          <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed pt-2 border-t border-stone-100">
            <p>
              Bersama kelompok, saya terlibat dalam proyek <strong className="text-emerald-900 font-semibold">“RePlast”</strong>, yaitu mengubah sampah plastik seperti kantong kresek dan bungkus pop ice bekas menjadi tas rajut dan tas anyam bernilai ekonomi, yang dilaksanakan di <strong className="text-emerald-900 font-semibold">{projectInfo.location}</strong>.
            </p>
            <p>
              Sebagai <strong className="text-emerald-900 font-semibold">Koordinator Produksi dan Kriya</strong>, saya belajar merumuskan tujuan proyek secara SMART, mengelola pembagian tugas dan sumber daya bersama tim, serta melakukan monitoring dan refleksi terhadap proses dan hasil kerja kelompok.
            </p>
          </div>

          {/* Highlight Key Philosophy Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-1">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Prinsip Kepemimpinan Guru
                </span>
                <p className="text-lg sm:text-xl font-bold text-emerald-50 leading-snug">
                  “Kepemimpinan seorang guru tidak hanya soal mengajar di kelas, tetapi juga kemampuan menggerakkan orang lain, mengambil keputusan, dan menyelesaikan masalah nyata di lingkungan sekolah secara kolaboratif dan berkelanjutan.”
                </p>
              </div>
            </div>
          </div>

          {/* Authors Sign-off */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-500 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>Ditulis dengan komitmen penuh untuk kemajuan pendidikan anak bangsa</span>
            </div>
            <div className="font-bold text-emerald-900">
              Kelompok 4 • Tamara Tesalonika Simarmata & Muhammad Rizki Wardana
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
