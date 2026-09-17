import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Sparkles, Clock, ArrowDown } from 'lucide-react';
import { projectProcess } from '../data/portfolioData';

export const ProjectTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="proses-projek" className="py-20 bg-[#F7FAF7] border-b border-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Siklus Pelaksanaan 8 Tahapan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            Proses Pelaksanaan Projek RePlast
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Kronologi terpadu dari identifikasi masalah lingkungan di UPT SDN 067241 Medan hingga penyusunan laporan akhir dan refleksi komprehensif.
          </p>
        </div>

        {/* Timeline Grid (Vertical on mobile, interconnected cards on desktop) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 mb-3 px-1">
              Daftar Tahapan Kerja (01 — 08):
            </h3>
            <div className="space-y-2">
              {projectProcess.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={idx}
                    id={`timeline-step-btn-${idx}`}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-emerald-800 text-white border-emerald-900 shadow-md transform translate-x-1'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                          isActive
                            ? 'bg-emerald-700 text-emerald-100'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {step.step}
                      </span>
                      <span className="font-bold text-sm truncate">
                        {step.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-emerald-200 translate-x-1' : 'text-stone-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Step Focus Card with Deep Details */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-full -z-10" />

              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                  <span>Tahap Ke-{projectProcess[activeStepIndex].step} dari 08</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Projek Kepemimpinan Terpadu</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  {projectProcess[activeStepIndex].step} — {projectProcess[activeStepIndex].title}
                </h3>

                <p className="text-base sm:text-lg text-emerald-950 font-medium leading-relaxed bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
                  “{projectProcess[activeStepIndex].desc}”
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Aktivitas Kunci & Eksekusi Lapangan:
                  </h4>
                  <div className="grid gap-2.5">
                    {projectProcess[activeStepIndex].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Next/Prev Controls */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 bg-stone-100 hover:bg-stone-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Tahap Sebelumnya
                  </button>
                  <span className="text-xs font-semibold text-stone-500">
                    {activeStepIndex + 1} / {projectProcess.length}
                  </span>
                  <button
                    disabled={activeStepIndex === projectProcess.length - 1}
                    onClick={() => setActiveStepIndex(prev => Math.min(projectProcess.length - 1, prev + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Tahap Berikutnya →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
