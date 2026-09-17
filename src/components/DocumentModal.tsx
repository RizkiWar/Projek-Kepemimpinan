import React from 'react';
import { X, FileText, Printer, CheckCircle2, Bookmark, Download } from 'lucide-react';
import { projectInfo, reflection4C } from '../data/portfolioData';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col border border-stone-200 shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-[#F8FAF8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                Lembar Kerja 2 (LK 2) – Refleksi Pengalaman Belajar
              </h3>
              <p className="text-[11px] text-stone-500">
                Pendidikan Profesi Guru (PPG) Calon Guru • Kelompok 4
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-stone-600 hover:text-emerald-800 hover:bg-emerald-50 transition-colors hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold"
              title="Cetak Dokumen"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Tutup Lembar Kerja"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Academic Document Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-8 bg-white print:p-0">
          
          {/* Document Header (Identitas LK 2) */}
          <div className="border-b-2 border-stone-900 pb-6 text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 uppercase tracking-tight">
              LEMBAR KERJA 2 (LK 2)<br />
              REFLEKSI PENGALAMAN BELAJAR SETIAP MATA KULIAH
            </h2>
          </div>

          {/* Metadata Block */}
          <div className="bg-[#FAFDFB] p-4 sm:p-5 rounded-2xl border border-emerald-100 text-xs sm:text-sm grid sm:grid-cols-2 gap-3">
            <div>
              <p className="text-stone-500">Nama Kelompok 4:</p>
              <ol className="list-decimal list-inside font-bold text-stone-800 pt-0.5">
                <li>Tamara Tesalonika Simarmata</li>
                <li>Muhammad Rizki Wardana</li>
              </ol>
            </div>
            <div>
              <p className="text-stone-500">Mata Kuliah:</p>
              <p className="font-bold text-stone-800">Projek Kepemimpinan</p>
              <p className="text-stone-500 mt-1">Lokasi Pelaksanaan:</p>
              <p className="font-bold text-stone-800">{projectInfo.location}</p>
            </div>
            <div className="sm:col-span-2 pt-2 border-t border-emerald-100/70 text-xs text-stone-600">
              <span className="font-bold text-emerald-900">Pembagian Bab Mata Kuliah:</span>
              <ul className="grid sm:grid-cols-2 gap-1 pt-1">
                <li>• <strong>Bab 1:</strong> Visi Guru Profesional</li>
                <li>• <strong>Bab 2:</strong> Perencanaan Projek Kepemimpinan</li>
                <li>• <strong>Bab 3:</strong> Implementasi dan Manajemen Projek</li>
                <li>• <strong>Bab 4:</strong> Projek Monitoring, Evaluasi, Laporan Akhir, Refleksi</li>
              </ul>
            </div>
          </div>

          {/* Official Form Table 1: Refleksi Pengalaman Belajar (4C) */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-emerald-700" />
              <span>Tabel 1. Refleksi Pengalaman Belajar dalam Konteks Calon Guru (4C)</span>
            </h4>

            <div className="border border-stone-300 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-emerald-800 text-white font-bold text-xs uppercase">
                    <th className="p-3 border-b border-r border-emerald-700 w-1/4">Indikator / Pertanyaan</th>
                    <th className="p-3 border-b border-emerald-700 w-3/4">Uraian Jawaban Mahasiswa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-white hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      1. Apa keterkaitan materi perkuliahan dengan peran saya sebagai calon guru?
                      <span className="block text-[11px] text-emerald-800 font-bold mt-1 font-mono">[Connection]</span>
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      {reflection4C.connection.description}
                      <p className="mt-2 text-xs text-stone-600">
                        Sebagai calon guru, kami perlu memiliki kemampuan memimpin peserta didik dalam kegiatan berbasis projek, mengelola sumber daya, membagi tugas, serta mengambil keputusan yang berdampak pada keberhasilan pembelajaran.
                      </p>
                    </td>
                  </tr>

                  <tr className="bg-stone-50/40 hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      2. Apa saja materi perkuliahan yang berbeda dari praktik yang saya lakukan selama ini?
                      <span className="block text-[11px] text-amber-800 font-bold mt-1 font-mono">[Challenge]</span>
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Selama ini kami lebih sering berperan sebagai pelaksana tugas secara individu, sedangkan sebagian bab pada materi perkuliahan Projek Kepemimpinan menuntut saya dan rekan saya berperan sebagai koordinator yaitu (Koordinator Produksi dan Kriya) yang harus menyusun perencanaan (Bab 2), mengelola implementasi (Bab 3), sekaligus memonitor dan mengevaluasi jalannya projek (Bab 4) secara sistematis, hal yang belum pernah saya lakukan secara terstruktur sebelumnya.
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      3. Apa saja konsep utama dan penting yang telah saya pelajari sebagai calon guru?
                      <span className="block text-[11px] text-teal-800 font-bold mt-1 font-mono">[Concept]</span>
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Adapun konsep utama yang kami pelajari antara lain: menyusun visi sebagai guru profesional pada (Bab 1), merumuskan SMART Goals dalam perencanaan proyek (Bab 2), menerapkan manajemen proyek meliputi pembagian peran, penjadwalan, dan pengelolaan sumber daya (Bab 3), serta melakukan monitoring, evaluasi, dan refleksi terhadap hasil projek (Bab 4). Konsep-konsep ini kami terapkan langsung dalam menyusun dan menjalankan proyek RePlast bersama kelompok pada mata kuliah projek kepemimpinan.
                    </td>
                  </tr>

                  <tr className="bg-stone-50/40 hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      4. Apa saja perubahan yang ingin saya lakukan setelah mendapatkan materi perkuliahan ini?
                      <span className="block text-[11px] text-emerald-800 font-bold mt-1 font-mono">[Change]</span>
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Setelah mempelajari materi ini, kelompok kami ingin lebih konsisten menerapkan tujuan proyek pembelajaran secara SMART sebelum memulai projek, lebih terbuka terhadap masukan anggota tim, serta membiasakan diri melakukan monitoring dan evaluasi berkala agar proyek yang kami rancang bersama murid kelak dapat berjalan efektif, tepat sasaran dan berkelanjutan.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Official Form Table 2: Analisis Artefak Pembelajaran */}
          <div className="space-y-3">
            <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-emerald-700" />
              <span>Tabel 2. Analisis Artefak Pembelajaran</span>
            </h4>

            <div className="border border-stone-300 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-teal-800 text-white font-bold text-xs uppercase">
                    <th className="p-3 border-b border-r border-teal-700 w-1/4">Indikator Pertanyaan</th>
                    <th className="p-3 border-b border-teal-700 w-3/4">Uraian Jawaban Mahasiswa</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="bg-white hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      1. Mana saja artefak pembelajaran yang dapat saya jadikan bukti dukung hasil refleksi pengalaman belajar ini?
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Artefak yang dapat kelompok kami jadikan bukti dukung antara lain: dokumen SMART Goals proyek RePlast (Tugas 6.1), hasil Y-chart refleksi Why-How-What (Tugas 4.1), serta dokumentasi produk sewaktu pengerjaan tas rajut dan tas anyam hasil daur ulang sampah plastik yang dihasilkan bersama tim saya pada mata kuliah projek kepemimpinan dan dokumentasi pendukung lainnya.
                    </td>
                  </tr>

                  <tr className="bg-stone-50/40 hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      2. Mengapa artefak tersebut yang saya pilih?
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Artefak tersebut kami pilih karena secara langsung menggambarkan proses berpikir dan tahapan kerja melaksanakan projek, mulai dari perumusan tujuan (SMART Goals), refleksi individu terhadap proses (Y-chart), hingga hasil nyata pembuatan (produk tas) yang menjadi bukti keberhasilan implementasi proyek kepemimpinan tim kami.
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-stone-50/70">
                    <td className="p-3 font-semibold text-stone-800 border-r border-stone-200 align-top">
                      3. Bagian mana dari artefak ini yang mendukung hasil refleksi saya?
                    </td>
                    <td className="p-3 text-stone-700 leading-relaxed align-top">
                      Bagian SMART Goals menunjukkan kemampuan kami merencanakan proyek secara spesifik dan terukur; Y-chart menunjukkan proses refleksi kritis saya sebagai anggota tim; sedangkan dokumentasi produk dan hasil produk menunjukkan hasil implementasi dan manajemen projek yang berhasil dicapai, sekaligus menjadi bahan evaluasi dan laporan akhir projek.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section Refleksi Mata Kuliah Projek Kepemimpinan (Paragraf Resmi) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <h4 className="font-bold text-emerald-950 text-sm uppercase tracking-wide">
              Refleksi Mata Kuliah Projek Kepemimpinan:
            </h4>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed italic">
              “Mata kuliah Projek Kepemimpinan mengajarkan kelompok kami bagaimana memimpin dan mengelola sebuah projek nyata dari tahap perencanaan hingga evaluasi. Bersama kelompok, saya terlibat dalam proyek ‘RePlast’, yaitu mengubah sampah plastik seperti kantong kresek dan bungkus pop ice bekas menjadi tas rajut dan tas anyam bernilai ekonomi, yang dilaksanakan di UPT SDN 067241 Medan. Sebagai Koordinator Produksi dan Kriya, saya belajar merumuskan tujuan proyek secara SMART, mengelola pembagian tugas dan sumber daya bersama tim, serta melakukan monitoring dan refleksi terhadap proses dan hasil kerja kelompok. Pengalaman ini memperkuat pemahaman saya bahwa kepemimpinan seorang guru tidak hanya soal mengajar di kelas, tetapi juga soal kemampuan menggerakkan orang lain, mengambil keputusan, dan menyelesaikan masalah nyata di lingkungan sekolah secara kolaboratif dan berkelanjutan.”
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>Format Asli LK 2 • Pendidikan Profesi Guru</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold transition-colors"
          >
            Tutup Dokumen
          </button>
        </div>
      </div>
    </div>
  );
};
