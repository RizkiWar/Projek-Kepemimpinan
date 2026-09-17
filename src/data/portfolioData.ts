import { ProjectInfo, Chapter, Reflection4C, ResponsibilityItem, ArtifactItem, TimelineStep, ProductItem } from '../types';

export const projectInfo: ProjectInfo = {
  title: "Projek Kepemimpinan – Refleksi Pengalaman Belajar",
  subtitle: "Perjalanan Kelompok 4 dalam Merancang, Mengimplementasikan, dan Merefleksikan Projek RePlast",
  course: "Projek Kepemimpinan",
  groupName: "Kelompok 4",
  members: [
    {
      name: "Tamara Tesalonika Simarmata",
      role: "Mahasiswa PPG Calon Guru / Koordinator Produksi & Kriya",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Muhammad Rizki Wardana",
      role: "Mahasiswa PPG Calon Guru / Anggota Tim Pelaksana",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],
  projectName: "RePlast (Daur Ulang Sampah Plastik Menjadi Tas Rajut & Tas Anyam)",
  location: "UPT SDN 067241 Medan",
  institution: "Pendidikan Profesi Guru (PPG) Calon Guru"
};

export const statsData = [
  { label: "Bab Pembelajaran", value: 4, suffix: " Bab", desc: "Fondasi teoritis hingga aksi reflektif" },
  { label: "Projek Nyata", value: 1, suffix: " Inisiatif", desc: "Diterapkan langsung di sekolah mitra" },
  { label: "Produk Daur Ulang", value: 2, suffix: " Jenis Kriya", desc: "Tas Rajut kresek & Tas Anyam kemasan" },
  { label: "Pengalaman Kepemimpinan", value: 1, suffix: " Transformasi", desc: "Mengubah individu jadi kolaborator berdaya" }
];

export const valueChainSteps = [
  { step: "01", name: "Sampah Plastik", desc: "Kantong kresek & bungkus Pop Ice bekas di lingkungan sekitar", icon: "Trash2" },
  { step: "02", name: "Pengumpulan", desc: "Pilah & kumpulkan plastik bersama warga sekolah mitra", icon: "Layers" },
  { step: "03", name: "Pengolahan", desc: "Pembersihan higienis, pengeringan, & pemotongan pita", icon: "Sparkles" },
  { step: "04", name: "Proses Kriya", desc: "Teknik merajut (kresek) & teknik menganyam pita (bungkus minuman)", icon: "Wrench" },
  { step: "05", name: "Tas Rajut & Anyam", desc: "Prototipe produk estetik, kuat, dan berdaya guna", icon: "ShoppingBag" },
  { step: "06", name: "Nilai Ekonomi", desc: "Karya bernilai jual sekaligus media edukasi lingkungan", icon: "TrendingUp" }
];

export const impactCards = [
  {
    title: "Pemanfaatan Sampah Plastik",
    description: "Mereduksi tumpukan sampah anorganik (kantong kresek & bungkus Pop Ice) di lingkungan sekolah menjadi bahan baku bernilai guna.",
    icon: "Recycle",
    badge: "Ekologis"
  },
  {
    title: "Pembelajaran Berbasis Projek",
    description: "Mengintegrasikan teori kepemimpinan ke dalam Project-Based Learning (PjBL) autentik yang memecahkan masalah kontekstual.",
    icon: "GraduationCap",
    badge: "Pedagogis"
  },
  {
    title: "Kolaborasi Tim",
    description: "Membangun sinergi kelompok, koordinasi multi-peran, komunikasi terbuka, dan kemitraan aktif dengan pihak sekolah mitra.",
    icon: "Users",
    badge: "Sosial"
  },
  {
    title: "Pengembangan Kreativitas",
    description: "Mengeksplorasi teknik kriya rajut dan anyaman modern agar limbah plastik bertransformasi menjadi produk bernilai estetika tinggi.",
    icon: "Palette",
    badge: "Kreatif"
  },
  {
    title: "Penguatan Kepemimpinan",
    description: "Melatih calon guru memimpin perubahan nyata, mengambil keputusan strategis, mengelola risiko, dan menggerakkan komunitas.",
    icon: "Award",
    badge: "Kepemimpinan"
  }
];

export const chaptersData: Chapter[] = [
  {
    id: 1,
    number: "Bab 1",
    title: "Visi Guru Profesional",
    shortDesc: "Memahami visi sebagai guru profesional dan kaitannya dengan peran guru dalam pembelajaran dan kepemimpinan.",
    fullDesc: "Pada bab ini, kami mendalami paradigma guru profesional abad ke-21 yang tidak hanya fasih mengajar materi kurikulum di dalam kelas, melainkan berani bertindak sebagai agen transformasi sosial (change agent). Guru memegang tanggung jawab moral dan kepemimpinan untuk menjadi teladan dalam menjaga kelestarian lingkungan dan melatih murid memiliki kepekaan ekologis.",
    learningOutcomes: [
      "Mengartikulasikan filosofi kepemimpinan guru yang berpihak pada murid",
      "Menghubungkan nilai profesionalisme dengan kontribusi riil terhadap komunitas sekolah",
      "Membangun kesadaran kritis akan krisis sampah plastik di lingkungan sekolah dasar"
    ],
    connectionToRePlast: "Menjadi landasan etis dan visi utama: RePlast lahir bukan sekadar tugas mata kuliah, melainkan manifestasi nyata visi kami sebagai calon guru yang menginspirasi murid peduli bumi.",
    icon: "Target",
    badge: "Fondasi Visi"
  },
  {
    id: 2,
    number: "Bab 2",
    title: "Perencanaan Projek Kepemimpinan",
    shortDesc: "Belajar menyusun perencanaan projek dan merumuskan SMART Goals sebagai dasar pelaksanaan projek.",
    fullDesc: "Bab ini membekali kelompok dengan metodologi perencanaan ilmiah. Kami belajar merumuskan tujuan yang Specific (Spesifik), Measurable (Terukur), Achievable (Dapat Dicapai), Relevant (Relevan), dan Time-bound (Memiliki Tenggat Waktu). Perencanaan juga mencakup pemetaan pemangku kepentingan (stakeholder), analisis risiko, dan penyusunan anggaran kebutuhan bahan.",
    learningOutcomes: [
      "Penyusunan dokumen SMART Goals proyek RePlast (Tugas 6.1)",
      "Penyusunan Y-Chart / Why-How-What (Tugas 4.1) untuk menajamkan urgensi projek",
      "Analisis kebutuhan alat, bahan daur ulang, dan penjadwalan timeline kerja"
    ],
    connectionToRePlast: "Rumusan SMART Goals memastikan target pembuatan tas rajut dan tas anyam memiliki indikator kualitas, kuantitas, serta linimasa eksekusi yang realistis di UPT SDN 067241 Medan.",
    icon: "CalendarCheck",
    badge: "Perencanaan Terukur"
  },
  {
    id: 3,
    number: "Bab 3",
    title: "Implementasi dan Manajemen Projek",
    shortDesc: "Mempelajari pembagian peran, penjadwalan, pengelolaan sumber daya, dan pelaksanaan projek secara kolaboratif.",
    fullDesc: "Fokus bab ini adalah eksekusi dinamis di lapangan. Kami mengasah kemampuan manajemen sumber daya manusia, logistik sampah plastik, dan teknik kriya. Melalui pembagian peran yang terdefinisi—khususnya peran sebagai Koordinator Produksi dan Kriya—kami mengarahkan alur kerja pembuatan tas, mengatasi kendala teknis bahan, dan mengorkestrasi keterlibatan tim secara solid.",
    learningOutcomes: [
      "Mempraktikkan kepemimpinan situasional dan koordinasi produksi",
      "Manajemen logistik limbah: sterilisasi kresek & penyortiran bungkus Pop Ice",
      "Penerapan teknik pembuatan benang plastik (plarn) dan anyaman simetris"
    ],
    connectionToRePlast: "Implementasi nyata di UPT SDN 067241 Medan membuktikan kemampuan kami memobilisasi tim dari sebatas rencana tertulis menjadi workshop kriya berdaya guna.",
    icon: "Briefcase",
    badge: "Aksi Lapangan"
  },
  {
    id: 4,
    number: "Bab 4",
    title: "Monitoring, Evaluasi, Laporan Akhir & Refleksi",
    shortDesc: "Melakukan monitoring, evaluasi, refleksi, dan menyusun laporan akhir berdasarkan hasil pelaksanaan projek.",
    fullDesc: "Bab penutup ini berfokus pada pengendalian mutu, asesmen capaian, dan refleksi mendalam (deep reflection). Kami membandingkan capaian aktual terhadap indikator SMART Goals, mendokumentasikan pembelajaran terbaik (best practices), mengidentifikasi hambatan yang muncul, dan menyusun laporan pertanggungjawaban komprehensif untuk penguji dan komunitas.",
    learningOutcomes: [
      "Pengukuran efektivitas produk kriya daur ulang dan daya tahannya",
      "Penyusunan instrumen monitoring berkala selama masa produksi",
      "Refleksi 4C (Connection, Challenge, Concept, Change) untuk peningkatan berkelanjutan"
    ],
    connectionToRePlast: "Menghasilkan evaluasi komprehensif atas mutu tas rajut dan tas anyam, serta merumuskan rekomendasi keberlanjutan projek kepemimpinan untuk implementasi di sekolah masa depan.",
    icon: "LineChart",
    badge: "Evaluasi & Refleksi"
  }
];

export const reflection4C: Reflection4C = {
  connection: {
    title: "CONNECTION (Keterkaitan)",
    description: "Materi Projek Kepemimpinan berkaitan dengan peran sebagai calon guru karena mengajarkan cara merancang, memimpin, dan mengelola projek nyata bersama tim.",
    highlights: [
      "Mengajarkan cara merancang, memimpin, dan mengelola projek nyata berbasis sekolah",
      "Mempersiapkan calon guru untuk memandu murid dalam Project-Based Learning (PjBL)",
      "Melatih kemampuan mengambil keputusan strategis yang berdampak pada ekosistem belajar"
    ]
  },
  challenge: {
    title: "CHALLENGE (Tantangan)",
    description: "Sebelumnya lebih sering berperan sebagai pelaksana tugas secara individu. Dalam projek ini harus berperan sebagai koordinator Produksi dan Kriya yang bertanggung jawab terhadap perencanaan, implementasi, monitoring, dan evaluasi.",
    highlights: [
      "Pergeseran paradigma dari 'individual task-doer' menjadi 'team coordinator'",
      "Tanggung jawab menyeluruh atas jadwal produksi, standar kualitas kriya, dan alokasi limbah plastik",
      "Menghadapi kompleksitas teknis pengolahan sampah anorganik agar layak menjadi produk fungsional"
    ]
  },
  concept: {
    title: "CONCEPT (Konsep Kunci)",
    description: "Konsep utama yang dipelajari meliputi visi guru profesional, SMART Goals, manajemen projek, pembagian peran, penjadwalan, pengelolaan sumber daya, monitoring, evaluasi, dan refleksi.",
    highlights: [
      "Visi Guru Profesional & Kepemimpinan Pembelajaran",
      "Formulasi SMART Goals sebagai instrumen kepastian mutu",
      "Manajemen sumber daya, penjadwalan, monitoring berkala, dan refleksi multi-sudut pandang"
    ]
  },
  change: {
    title: "CHANGE (Perubahan Diri)",
    description: "Setelah mengikuti pembelajaran, kelompok ingin lebih konsisten menggunakan SMART Goals, terbuka terhadap masukan anggota tim, serta melakukan monitoring dan evaluasi secara berkala.",
    highlights: [
      "Konsisten menetapkan SMART Goals sebelum menginisiasi setiap projek bersama murid kelak",
      "Membangun iklim tim yang inklusif, komunikatif, dan terbuka pada masukan",
      "Menjadikan siklus monitoring-evaluasi-refleksi sebagai kebiasaan profesional guru"
    ]
  }
};

export const responsibilities: ResponsibilityItem[] = [
  {
    id: "perencanaan",
    title: "Perencanaan",
    description: "Menyusun skema teknis pengolahan limbah plastik menjadi produk kriya, menghitung estimasi bahan, dan menentukan standar mutu tas.",
    iconName: "Compass",
    color: "emerald"
  },
  {
    id: "pembagian-tugas",
    title: "Pembagian Tugas",
    description: "Mendelegasikan tanggung jawab pemilahan kresek, sterilisasi bungkus Pop Ice, pemotongan pola, hingga tahap penjahitan/anyaman kepada rekan tim.",
    iconName: "UserCheck",
    color: "teal"
  },
  {
    id: "pengelolaan-sumber-daya",
    title: "Pengelolaan Sumber Daya",
    description: "Memastikan ketersediaan sampah plastik bersih, jarum rajut (hakpen), gunting, tali penguat, dan aksesori penunjang tas secara efisien.",
    iconName: "Boxes",
    color: "amber"
  },
  {
    id: "koordinasi-produksi",
    title: "Koordinasi Produksi",
    description: "Memandu alur kerja harian pembuatan tas rajut dan tas anyam, menyelesaikan kendala teknik anyaman, dan menjaga ritme kerja kelompok.",
    iconName: "Layers",
    color: "emerald"
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Memantau ketepatan waktu pengerjaan setiap tahapan kriya sesuai jadwal Bab 3, serta memeriksa kerapian pola rajutan dan anyaman.",
    iconName: "Eye",
    color: "blue"
  },
  {
    id: "evaluasi",
    title: "Evaluasi",
    description: "Menguji daya dukung beban tas, kekuatan sambungan tali, kerapian estetika, dan kesesuaian hasil akhir dengan target awal projek.",
    iconName: "CheckCircle2",
    color: "teal"
  },
  {
    id: "refleksi",
    title: "Refleksi",
    description: "Mengekstrak pelajaran bermakna dari setiap dinamika kerja tim untuk memperbaiki gaya kepemimpinan dan strategi pengajaran di masa depan.",
    iconName: "RotateCcw",
    color: "stone"
  }
];

export const artifactsData: ArtifactItem[] = [
  {
    id: "art-1",
    title: "SMART Goals Projek RePlast",
    taskCode: "Tugas 6.1",
    description: "Dokumen resmi perumusan tujuan projek RePlast (Tugas 6.1) mencakup Spesifik, Measurable (≥10 kg sampah, 4 unit tas rajut & 6 unit tas anyam, omzet ≥Rp500rb), Achievable, Relevant, dan Time-bound (12 minggu).",
    category: "smart-goals",
    imageUrl: "/images/smart_goals_sheet_1789682032265.jpg",
    altText: "Lembar SMART Goals Projek RePlast Kelompok 4 - Tugas 6.1",
    whyChosen: "Artefak tersebut kami pilih karena secara langsung menggambarkan proses berpikir dan tahapan kerja melaksanakan projek, mulai dari perumusan tujuan spesifik hingga target terukur 12 minggu.",
    supportingAspect: "Bagian SMART Goals menunjukkan kemampuan kami merencanakan proyek secara spesifik dan terukur, mencakup target pengolahan limbah kresek dan kemasan sachet serta keterlibatan komunitas sekolah mitra.",
    tags: ["Tugas 6.1", "SMART Goals", "Perencanaan 12 Minggu", "Indikator Terukur"]
  },
  {
    id: "art-2",
    title: "Y-Chart Refleksi Projek Kreasi Plastik",
    taskCode: "Tugas 4.1",
    description: "Lembar instrumen refleksi Y-Chart (Tugas 4.1 Individu - Kelas B Sorting Out) menganalisis dimensi Why (Urgensi lingkungan & dampak sekolah), How (Alur aksi 12 minggu & kesiapan anggaran), dan What (Spesifikasi produk fisik tas, publikasi video & 100+ pengikut).",
    category: "reflection",
    imageUrl: "/images/y_chart_sheet_1789682047574.jpg",
    altText: "Visual Lembar Y-Chart Refleksi Projek Kreasi Plastik Sekolah - Tugas 4.1",
    whyChosen: "Artefak ini dipilih karena membedah motivasi mendasar (Why), strategi eksekusi tim (How), dan hasil konkret (What) dari inisiatif daur ulang RePlast di UPT SDN 067241 Medan.",
    supportingAspect: "Y-chart menunjukkan proses refleksi kritis anggota tim dalam menelaah keterkaitan isu lingkungan terhadap kepemimpinan guru abad ke-21 dan kesiapan aksi di lapangan.",
    tags: ["Tugas 4.1", "Y-Chart", "Why-How-What", "Refleksi Kritis"]
  },
  {
    id: "art-3",
    title: "Contoh tas Rajut Kresek (RePlast)",
    taskCode: "Hasil Kriya Rajut",
    description: "Tas rajut hasil daur ulang limbah kantong kresek hitam menjadi benang plastik (plarn) dengan teknik rajut renda terbuka dan hiasan bunga anggrek.",
    category: "products",
    imageUrl: "/images/tas_rajut_kresek_1789680295067.jpg",
    altText: "Contoh tas Rajut Kresek - Tas rajut daur ulang limbah kantong kresek hitam dengan bunga anggrek",
    whyChosen: "Artefak ini kami pilih sebagai bukti autentik hasil pelaksanaan kriya rajut dari kantong kresek daur ulang yang membuktikan transformasi sampah plastik menjadi tas jinjing/sling pouch fungsional dan bernilai estetika.",
    supportingAspect: "Menunjukkan keberhasilan implementasi teknis pembuatan benang plastik (plarn) dan penguasaan teknik rajut manual oleh tim dalam projek RePlast.",
    tags: ["Contoh tas Rajut Kresek", "Kantong Kresek", "Plarn", "Produk Nyata"]
  },
  {
    id: "art-4",
    title: "Contoh Tas Anyaman (RePlast)",
    taskCode: "Hasil Kriya Anyam",
    description: "Tas anyaman kokoh hasil pengolahan bungkus sachet minuman bekas (Susu / Pop Ice) dengan teknik lipat geometris dan pegangan anyam ganda.",
    category: "products",
    imageUrl: "/images/tas_anyam_kemasan_1789680307336.jpg",
    altText: "Contoh Tas Anyaman - Tas anyaman keranjang dari kemasan sachet minuman kopi/susu",
    whyChosen: "Artefak ini dipilih sebagai bukti nyata pemanfaatan limbah sachet multilayer menjadi kerajinan anyaman kokoh, berstruktur kaku menopang beban, dan bernilai ekonomis.",
    supportingAspect: "Menjadi bukti konkret pencapaian target SMART Goals luaran kriya anyaman dan bahan evaluasi utama laporan akhir projek kepemimpinan.",
    tags: ["Contoh Tas Anyaman", "Bungkus Sachet", "Anyaman Geometris", "Produk Nyata"]
  }
];

export const projectProcess: TimelineStep[] = [
  {
    step: "01",
    title: "Identifikasi Masalah",
    desc: "Observasi tingginya timbulan sampah plastik kantong kresek dan kemasan sachet minuman di lingkungan sekolah.",
    details: ["Melihat potensi pencemaran lingkungan sekitar SDN 067241 Medan", "Mendiskusikan solusi edukatif bersama guru dan warga sekolah"]
  },
  {
    step: "02",
    title: "Menentukan Tujuan",
    desc: "Menetapkan visi RePlast untuk mengedukasi siswa sekaligus mengonversi sampah anorganik menjadi kerajinan bernilai guna.",
    details: ["Menyelaraskan projek dengan visi guru profesional (Bab 1)", "Menentukan target penerima manfaat di lingkungan sekolah"]
  },
  {
    step: "03",
    title: "Menyusun SMART Goals",
    desc: "Merumuskan sasaran terukur melalui instrumen SMART Goals (Tugas 6.1) dan Y-Chart (Tugas 4.1).",
    details: ["Menentukan jumlah bahan baku limbah yang akan diolah", "Menetapkan deadline linimasa 4 minggu produksi"]
  },
  {
    step: "04",
    title: "Pembagian Tugas",
    desc: "Menetapkan struktur kelompok, di mana saya dipercaya sebagai Koordinator Produksi dan Kriya.",
    details: ["Membagi tugas pengumpulan, pembersihan, pemotongan, dan perakitan", "Menyepakati SOP komunikasi dan koordinasi tim"]
  },
  {
    step: "05",
    title: "Pengumpulan Bahan",
    desc: "Mengumpulkan kantong kresek berbagai warna dan kemasan sachet Pop Ice bekas yang dicuci bersih dan dikeringkan.",
    details: ["Pembersihan higienis untuk keamanan penggunaan", "Pengelompokan warna kresek untuk motif rajutan estetik"]
  },
  {
    step: "06",
    title: "Produksi Tas",
    desc: "Melakukan proses kriya: memintal kresek menjadi plarn untuk tas rajut, serta melipat dan menganyam bungkus Pop Ice menjadi tas anyam.",
    details: ["Pembuatan tas rajut berstruktur kuat dengan jarum rajut", "Pembuatan tas anyam berpola geometris kokoh dan rapi"]
  },
  {
    step: "07",
    title: "Monitoring & Evaluasi",
    desc: "Menguji ketahanan tas terhadap beban, kerapian jahitan/anyaman, dan kesesuaian target SMART Goals.",
    details: ["Pemeriksaan berkala kualitas produk kriya", "Pencatatan kendala dan perbaikan teknik penganyaman"]
  },
  {
    step: "08",
    title: "Refleksi",
    desc: "Mengevaluasi seluruh dinamika belajar kepemimpinan, menyusun laporan akhir (Bab 4), dan merumuskan komitmen keberlanjutan.",
    details: ["Menyusun lembar refleksi 4C (LK 2)", "Menyimpulkan peran strategis kepemimpinan guru dalam aksi nyata"]
  }
];

export const productsData: ProductItem[] = [
  {
    id: "tas-rajut",
    title: "Tas Rajut RePlast",
    subtitle: "Kriya Tekstil Ramah Lingkungan dari Benang Kantong Kresek (Plarn)",
    description: "Produk kerajinan yang dibuat dari sampah plastik kantong kresek yang dipotong melingkar menjadi benang pita lentur (plarn), kemudian dirajut dengan teknik single/double crochet untuk membentuk tas berdaya tahan tinggi, fleksibel, tahan air, dan elegan.",
    rawMaterial: "Kantong kresek bekas (warna hitam/kombinasi) yang disterilkan",
    technique: "Pembuatan benang plastik (Plarn) & Teknik Rajut Crochet Manual",
    characteristics: [
      "Tekstur lentur namun berstruktur padat dan tahan air",
      "Kapasitas muat fleksibel untuk kebutuhan harian",
      "Dilengkapi handle rajut nyaman dan aksen ornamen kriya",
      "Tahan cuaca dan mudah dibersihkan"
    ],
    economicValue: "Dapat bernilai jual Rp 35.000 - Rp 65.000 sebagai tote bag atau sling bag etnik ramah lingkungan.",
    environmentalImpact: "Menyelamatkan puluhan lembar kantong kresek dari tumpukan TPA per satu unit tas rajut.",
    imageUrl: "/src/assets/images/tas_rajut_kresek_1789680295067.jpg",
    tags: ["Kantong Kresek", "Teknik Rajut", "Plarn", "Tahan Air", "Waterproof"]
  },
  {
    id: "tas-anyam",
    title: "Tas Anyam RePlast",
    subtitle: "Kerajinan Geometris Kokoh dari Bungkus Minuman Sachet Pop Ice",
    description: "Produk kerajinan hasil pemanfaatan kembali sampah plastik kemasan sachet tebal menjadi tas anyaman bernilai guna. Bungkus Pop Ice dilipat menjadi pita strip presisi lalu dianyam saling mengunci, menciptakan struktur bodi yang kaku, kuat menahan beban, dan bermotif warna-warni memikat.",
    rawMaterial: "Bungkus plastik bekas minuman sachet Pop Ice & sachet serbaguna",
    technique: "Folding Strip & Interlocking Weaving (Teknik Anyaman Silang Geometris)",
    characteristics: [
      "Bodi tas kaku, kokoh, dan mampu menopang beban berat",
      "Warna-warni cerah alami dari kemasan sachet tanpa cat kimia",
      "Permukaan luar berlapis laminasi mengkilap alami kemasan sachet",
      "Awet bertahun-tahun dan tidak mudah koyak"
    ],
    economicValue: "Dapat bernilai jual Rp 45.000 - Rp 80.000 sebagai tas belanja serbaguna atau tas jinjing unik.",
    environmentalImpact: "Mengurangi sampah sachet multilayer yang terkenal sangat sulit terurai di tanah.",
    imageUrl: "/src/assets/images/tas_anyam_kemasan_1789680307336.jpg",
    tags: ["Bungkus Pop Ice", "Teknik Anyaman", "Geometris", "Kuat & Kokoh", "Upcycling"]
  }
];

export const faqData = [
  {
    q: "Mengapa memilih sampah kantong kresek dan bungkus Pop Ice?",
    a: "Sampah kantong kresek dan bungkus Pop Ice merupakan dua jenis limbah plastik sekali pakai yang paling mendominasi di kantin dan sekitar sekolah dasar. Limbah ini sulit terurai namun memiliki elastisitas dan ketahanan tinggi jika diolah dengan teknik kriya rajut dan anyaman yang tepat."
  },
  {
    q: "Apa tantangan terbesar sebagai Koordinator Produksi dan Kriya?",
    a: "Tantangan utamanya adalah beralih dari kebiasaan bekerja individual menjadi pemimpin yang harus mengatur pembagian peran, memastikan standar higienis bahan, memandu teknik merajut/menganyam bagi anggota yang belum berpengalaman, serta menjaga agar timeline produksi selesai tepat waktu sesuai SMART Goals."
  },
  {
    q: "Bagaimana projek ini berkontribusi pada profil guru profesional?",
    a: "Projek ini membuktikan bahwa guru profesional tidak hanya berdiri di depan kelas menyampaikan teori, melainkan mampu mengidentifikasi persoalan nyata di sekolah, merancang pembelajaran kontekstual berbasis projek, dan menggerakkan komunitas sekolah untuk berkolaborasi secara berkelanjutan."
  },
  {
    q: "Apa kelanjutan dari projek RePlast ini di masa depan?",
    a: "Kelompok berencana mengadopsi modul RePlast ke dalam kegiatan Projek Penguatan Profil Pelajar Pancasila (P5) tema Gaya Hidup Berkelanjutan di sekolah tempat kami bertugas kelak, sehingga siswa secara langsung belajar kewirausahaan hijau dan kepemimpinan ramah lingkungan."
  }
];
