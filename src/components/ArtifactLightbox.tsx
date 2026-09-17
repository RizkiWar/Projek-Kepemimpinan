import React from 'react';
import { X, CheckCircle2, HelpCircle, Tag, ExternalLink, ShieldCheck } from 'lucide-react';
import { ArtifactItem } from '../types';

interface ArtifactLightboxProps {
  artifact: ArtifactItem;
  onClose: () => void;
}

export const ArtifactLightbox: React.FC<ArtifactLightboxProps> = ({ artifact, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col border border-stone-200 shadow-2xl relative">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/90">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-800 text-white text-xs font-bold font-mono">
              {artifact.taskCode || 'Artefak'}
            </span>
            <h3 className="font-bold text-stone-900 text-sm sm:text-base truncate max-w-md">
              {artifact.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Tutup Pratinjau"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Main Large Image */}
          <div className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/50 relative shadow-inner flex items-center justify-center p-2">
            <img
              src={artifact.imageUrl}
              alt={artifact.altText}
              referrerPolicy="no-referrer"
              className="w-full max-h-[650px] object-contain mx-auto rounded-lg"
            />
          </div>

          {/* Description & Metadata */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Deskripsi Resmi Artefak LK 2</span>
              </div>
              <p className="text-base text-stone-800 font-medium leading-relaxed">
                “{artifact.description}”
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {artifact.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
                  #{tag}
                </span>
              ))}
            </div>

            {/* In-depth LK 2 Evidence Breakdown */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wide">
                  <HelpCircle className="w-4 h-4 text-emerald-700" />
                  <span>Mengapa Artefak Ini Dipilih?</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {artifact.whyChosen}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-900 uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>Dukungan Terhadap Hasil Refleksi:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {artifact.supportingAspect}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>PPG Calon Guru • Mata Kuliah Projek Kepemimpinan</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold transition-colors"
          >
            Tutup Artefak
          </button>
        </div>
      </div>
    </div>
  );
};
