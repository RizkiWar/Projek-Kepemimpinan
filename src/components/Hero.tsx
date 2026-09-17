import React from 'react';
import { Sparkles, ArrowRight, BookOpen, MapPin, Users, Award, Recycle } from 'lucide-react';
import { projectInfo, statsData } from '../data/portfolioData';

interface HeroProps {
  onExplore: () => void;
  onViewReflection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onViewReflection }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F9F6] via-[#FBFDFB] to-[#FBFDFB]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-200/25 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-amber-100/30 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Academic Credential Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-emerald-900 text-xs font-semibold mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>LEMBAR KERJA 2 (LK 2) • Refleksi Pengalaman Belajar Mata Kuliah</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600">
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-stone-200 text-stone-700">
                  <Award className="w-3.5 h-3.5 text-emerald-600" />
                  {projectInfo.course}
                </span>
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-stone-200 text-stone-700">
                  <Users className="w-3.5 h-3.5 text-teal-600" />
                  {projectInfo.groupName}
                </span>
                <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-stone-200 text-stone-700">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {projectInfo.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261B] tracking-tight leading-[1.12]">
                Belajar Memimpin, <br className="hidden sm:inline" />
                <span className="text-emerald-800 bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">
                  Berkarya, dan Berdampak
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl pt-2">
                Refleksi perjalanan Kelompok 4 dalam mata kuliah Projek Kepemimpinan melalui projek{' '}
                <strong className="font-semibold text-emerald-900">RePlast</strong>, sebuah inisiatif mengubah sampah plastik menjadi produk kerajinan bernilai guna dan ekonomi di {projectInfo.location}.
              </p>
            </div>

            {/* Two Main Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-btn-explore"
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Jelajahi Projek</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-reflection"
                onClick={onViewReflection}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-emerald-900 bg-white hover:bg-emerald-50/80 border border-emerald-200 shadow-xs hover:shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>Lihat Refleksi (4C)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composite Card with Project Photos & Craft Assets */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Display Card */}
              <div className="glass-card rounded-3xl p-4 sm:p-5 border border-emerald-200/80 shadow-xl shadow-emerald-950/5 relative overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-stone-100 mb-4">
                  <img
                    src="/src/assets/images/tas_anyam_kemasan_1789680307336.jpg"
                    alt="Contoh Tas Anyaman RePlast"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Floating Badges inside Image */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-900 flex items-center gap-1.5 shadow-sm">
                    <Recycle className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" />
                    <span>Upcycling Waste to Craft</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-emerald-300 uppercase tracking-wider">
                      Dokumentasi Hasil Kriya RePlast
                    </p>
                    <p className="text-sm font-bold leading-snug">
                      Tas Anyaman Kemasan & Tas Rajut Kresek di {projectInfo.location}
                    </p>
                  </div>
                </div>

                {/* Sub-grid with the 2 Product Spotlights */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                      <img
                        src="/images/tas_rajut_kresek_1789680295067.jpg"
                        alt="Contoh tas Rajut Kresek"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Tas Rajut</p>
                      <p className="text-[11px] text-stone-500 truncate">Limbah Kresek</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                      <img
                        src="/images/tas_anyam_kemasan_1789680307336.jpg"
                        alt="Contoh Tas Anyaman"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Tas Anyaman</p>
                      <p className="text-[11px] text-stone-500 truncate">Bungkus Sachet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-5 -left-4 bg-white p-3 rounded-2xl border border-emerald-200 shadow-lg flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  4C
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">Refleksi Menyeluruh</p>
                  <p className="text-[10px] text-stone-500">Connection • Challenge • Concept • Change</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Statistics Counter Bar (4 Bab Pembelajaran, 1 Projek Nyata, 2 Produk Daur Ulang, 1 Pengalaman Kepemimpinan) */}
        <div className="mt-14 pt-8 border-t border-emerald-100/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                id={`stat-card-${idx}`}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-800 font-display group-hover:scale-105 transition-transform inline-block">
                    {stat.value}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-emerald-950/70">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="font-bold text-stone-800 text-sm mt-1">{stat.label}</h4>
                <p className="text-xs text-stone-500 mt-0.5 leading-snug">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
