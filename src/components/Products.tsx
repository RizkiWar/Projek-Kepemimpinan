import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Check, DollarSign, Leaf, Layers, Maximize2 } from 'lucide-react';
import { productsData } from '../data/portfolioData';
import { ProductItem } from '../types';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section id="produk" className="py-20 bg-white border-b border-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Karya Nyata Luaran Projek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261B] tracking-tight">
            Produk RePlast: Tas Rajut & Tas Anyam
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Dua inovasi produk kriya ramah lingkungan yang berhasil diciptakan Kelompok 4 melalui pemanfaatan limbah plastik sekolah bernilai estetika dan ekonomi.
          </p>
        </div>

        {/* 2 Main Product Cards in Big Showcase Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {productsData.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="bg-white rounded-3xl border border-stone-200 hover:border-emerald-300 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Large Product Image with Hover Zoom & Badges */}
                <div className="relative aspect-16/11 bg-stone-100 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <ShoppingBag className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{product.id === 'tas-rajut' ? 'Limbah Kantong Kresek' : 'Limbah Bungkus Pop Ice'}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      Hasil Kriya RePlast
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-medium">
                    “{product.description}”
                  </p>

                  {/* Technical Specs Pill Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs space-y-1">
                      <span className="font-bold text-stone-500 uppercase tracking-wider text-[10px] block">
                        Bahan Baku:
                      </span>
                      <p className="font-semibold text-stone-800 leading-snug">
                        {product.rawMaterial}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 text-xs space-y-1">
                      <span className="font-bold text-stone-500 uppercase tracking-wider text-[10px] block">
                        Teknik Pengerjaan:
                      </span>
                      <p className="font-semibold text-stone-800 leading-snug">
                        {product.technique}
                      </p>
                    </div>
                  </div>

                  {/* Key Characteristics */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                      Karakteristik & Keunggulan Produk:
                    </span>
                    <div className="grid gap-2">
                      {product.characteristics.map((char, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Value Box */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs space-y-1">
                      <span className="font-bold text-emerald-900 flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Nilai Ekonomi:</span>
                      </span>
                      <p className="text-stone-700 leading-relaxed">
                        {product.economicValue}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs space-y-1">
                      <span className="font-bold text-teal-900 flex items-center gap-1">
                        <Leaf className="w-3.5 h-3.5 text-teal-700" />
                        <span>Dampak Lingkungan:</span>
                      </span>
                      <p className="text-stone-700 leading-relaxed">
                        {product.environmentalImpact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-600 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-emerald-800">
                  Karya RePlast Kelompok 4
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
