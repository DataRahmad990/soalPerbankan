// Berkas ini hanya berisi daftar soal untuk kuis.
// Untuk menambah atau mengubah soal, cukup edit di file ini.

const questions = [
  {
    id: 1,
    version: 1,
    category: "Lembaga Jasa Keuangan Lainnya",
    question: "Berikut adalah kegiatan usaha LPIP, kecuali:",
    options: [
      "Menghasilkan informasi perkreditan yang memiliki nilai tambah",
      "Memberikan jasa pemeringkatan terhadap debitur atau nasabah",
      "Menghimpun dan menyalurkan dana dari dan kepada masyarakat",
      "Menghimpun dan mengolah data kredit atau pembiayaan dan/atau data lain",
    ],
    answer: "Menghimpun dan menyalurkan dana dari dan kepada masyarakat",
  },
  {
    id: 2,
    version: 1,
    category: "Akuntansi",
    question: "Saat pencairan kredit, bank mencatat jurnal sebagai berikut:",
    options: [
      "Db. Kredit / Kr. Kas",
      "Db. Beban bunga deposito / Kr. Kas",
      "Db. Kredit / Kr. Bunga",
      "Db. Kas / Kr. Kredit",
    ],
    answer: "Db. Kredit / Kr. Kas",
  },
  {
    id: 3,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Batas waktu penyampaian LKPJ adalah:",
    options: ["15 November", "5 April", "15 Juli", "15 April"],
    answer: "15 April",
  },
  {
    id: 4,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Berdasarkan materi, POJK dan SEOJK yang menjadi ketentuan existing mengenai pemanfaatan TKA adalah:",
    options: [
      "POJK Nomor 21 Tahun 2023 dan SEOJK Nomor 40 Tahun 2023",
      "POJK Nomor 17 Tahun 2023 dan SEOJK Nomor 37 Tahun 2023",
      "POJK Nomor 44 Tahun 2024 dan SEOJK Nomor 50/SEOJK.03/2024",
      "POJK Nomor 37/POJK.03/2017 dan SEOJK Nomor 42/SEOJK.03/2017",
    ],
    answer: "POJK Nomor 37/POJK.03/2017 dan SEOJK Nomor 42/SEOJK.03/2017",
  },
  {
    id: 5,
    version: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Yang dimaksud dengan Perusahaan Induk Konglomerasi Keuangan Operasional adalah:",
    options: [
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang hanya melakukan kegiatan sebagai PIKK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang hanya melakukan kegiatan sebagai LJK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang melakukan kegiatan sebagai PIKK namun tidak melakukan kegiatan sebagai LJK",
    ],
    answer:
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK",
  },
  {
    id: 6,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Dasar Hukum pengawasan AP/KAP:",
    options: [
      "POJK Nomor 9 Tahun 2023 dan SEOJK Nomor 18/SEOJK.03/2023",
      "POJK Nomor 9 Tahun 2023 dan SEOJK Nomor 21/SEOJK.03/2023",
      "UU Perbankan No.10 Tahun 1996",
      "POJK Nomor 13 Tahun 2017 dan SEOJK Nomor 18/SEOJK.03/2023",
    ],
    answer: "POJK Nomor 9 Tahun 2023 dan SEOJK Nomor 18/SEOJK.03/2023",
  },
  {
    id: 7,
    version: 1,
    category: "Perkreditan",
    question:
      "Informasi berikut ada dalam laporan debitur yang disampaikan Pelapor, kecuali:",
    options: ["Penjamin", "Media sosial debitur", "Agunan", "Fasilitas penyediaan dana"],
    answer: "Media sosial debitur",
  },
  {
    id: 8,
    version: 1,
    category: "Kelembagaan",
    question:
      "Kriteria pengambilalihan saham Bank yang dianggap mengakibatkan beralihnya Pengendalian Bank antara lain:",
    options: [
      "kepemilikan saham wajib melalui pasar modal",
      "kepemilikan saham tidak melebihi pemegang saham terbesar dan tidak menentukan baik langsung atau tidak langsung pengelolaan dan/atau kebijakan Bank.",
      "kepemilikan saham menjadi sebesar batas maksimum kepemilikan saham.",
      "kepemilikan saham menjadi yang terbesar pada Bank.",
    ],
    answer: "kepemilikan saham menjadi yang terbesar pada Bank.",
  },
  {
    id: 9,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Bank umum dapat menggunakan insentif berupa instant approval (permohonan izin dalam bentuk pemberitahuan) dalam hal telah memenuhi kriteria:",
    options: [
      "Tingkat kesehatan dengan penilaian 1 atau 2, serta TI memadai",
      "Profil risiko dengan penilaian 1 atau 2, serta TI memadai",
      "Profil risiko, KPMR, dan GCG dengan penilaian 1 atau 2, serta TI memadai",
      "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai",
    ],
    answer: "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai",
  },
  {
    id: 10,
    version: 1,
    category: "Manajemen Risiko",
    question: "Apakah yang dimaksud dengan Bottom Up Stress Test (BUST)?",
    options: [
      "Stress test yang dilakukan oleh bank menggunakan data dan model dari Otoritas dengan skenario dan pedoman dari Otoritas",
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Bank",
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Otoritas",
      "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas",
    ],
    answer:
      "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas",
  },
  {
    id: 11,
    version: 1,
    category: "Produk & Layanan Bank",
    question:
      "Permohonan izin atas produk bank lanjutan, untuk Bank Umum, dilakukan melalui...",
    options: ["SPRINT", "OBOX", "SIPENA", "APOLO"],
    answer: "SPRINT",
  },
  {
    id: 12,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Laporan keuangan yang menunjukkan kegiatan sosial yang dilakukan oleh bank syariah adalah:",
    options: [
      "Laporan Investasi Terikat dan Laporan Zakat",
      "Laporan Investasi Terikat dan Laporan Investasi Tidak Terikat",
      "Laporan Investasi Terikat dan Laporan Dana Kebajikan",
      "Laporan Zakat dan Laporan Dana Kebajikan",
    ],
    answer: "Laporan Zakat dan Laporan Dana Kebajikan",
  },
  {
    id: 13,
    version: 1,
    category: "Perbankan Syariah",
    question: "Pengertian Unit Usaha Syariah (UUS) yang benar di bawah ini:",
    options: [
      "Unit kerja dari kantor pusat BUK yang berfungsi melakukan pengawasan penerapan prinsip syariah.",
      "Unit kerja dari kantor BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha konvensional.",
      "Unit kerja dari kantor pusat BUK yang berfungsi sebagai koordinator kantor cabang dan kantor lainnya di bawah kantor cabang BUK.",
      "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah.",
    ],
    answer:
      "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah.",
  },
  {
    id: 14,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question:
      "Pemegang Saham yang sengaja melakukan tindak pidana perbankan, akan dijerat dengan pasal",
    options: [
      "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah",
      "Pasal 46 UU Perbankan atau Pasal 59 UU Perbankan Syariah",
      "Pasal 50 UU Perbankan atau Pasal 64 UU Perbankan Syariah",
      "Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah",
    ],
    answer: "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah",
  },
  {
    id: 15,
    version: 1,
    category: "Kelembagaan",
    question:
      "Dalam pencabutan izin usaha Bank BHI dan KCBLN, bank dimaksud harus:",
    options: [
      "Bank dalam status pengawasan khusus",
      "Bank dalam pengawasan intensif",
      "Bank dalam pengawasan normal",
      "Bank tidak dalam status pengawasan khusus",
    ],
    answer: "Bank tidak dalam status pengawasan khusus",
  },
  {
    id: 16,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Bobot risiko untuk aset produktif dengan sumber dana Profit Sharing Investment Account (PSIA) yaitu:",
    options: ["1%", "400%", "100%", "300%"],
    answer: "1%",
  },
  {
    id: 17,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Jumlah Kantor OJK Koordinator dan Non-Koordinator:",
    options: [
      "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator",
      "8 Kantor OJK Koordinator, dan 26 Kantor OJK Non-Koordinator",
      "8 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
      "9 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
    ],
    answer: "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator",
  },
  {
    id: 18,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Yang tidak termasuk jenis risiko yang spesifik wajib dikelola oleh BPR adalah:",
    options: ["Likuiditas", "Pasar", "Operasional", "Kredit"],
    answer: "Pasar",
  },
  {
    id: 19,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Penilaian Kemampuan dan Kepatutan diberlakukan bagi pihak yang mengajukan diri untuk menduduki posisi sebagai berikut di bank syariah, kecuali:",
    options: ["Direksi", "Pengawas Syariah", "Komisaris", "Pemegang Saham Pengendali"],
    answer: "Pengawas Syariah",
  },
  {
    id: 20,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Pernyataan di bawah ini adalah benar mengenai ketentuan Pengurus Bank Syariah, kecuali:",
    options: [
      "Jumlah anggota direksi BPRS minimal 2 orang",
      "Jumlah anggota direksi BUS minimal 3 orang",
      "Jumlah anggota dewan komisaris BUS minimal 3 orang dan maksimal sama dengan jumlah anggota direksi",
      "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris",
    ],
    answer:
      "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris",
  },
  {
    id: 21,
    version: 1,
    category: "Ekonomi Makro",
    question:
      "Indikator yang menunjukkan hubungan antara sektor yang membutuhkan input produksi dari sektor lain, dikenal sebagai indikator:",
    options: [
      "Forward-Linkage",
      "Intermediary-Linkage",
      "Tidak ada yang benar",
      "Backward-Linkage",
    ],
    answer: "Backward-Linkage",
  },
  {
    id: 22,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Permohonan persetujuan prinsip pendirian BPR diajukan kepada OJK dilampiri dengan dokumen antara lain:",
    options: [
      "Data kepemilikan, bukti setoran modal, akta pendirian",
      "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan",
      "Data kepemilikan, bukti pembayaran biaya perizinan, akta pendirian",
      "Data kepemilikan, daftar calon anggota Direksi dan anggota Dewan Komisaris, bukti kesiapan operasional",
    ],
    answer:
      "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan",
  },
  {
    id: 23,
    version: 1,
    category: "BPR & BPRS",
    question: "Faktor dan bobot penilaian TKS BPR dan BPRS yaitu:",
    options: [
      "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)",
      "Profil Risiko (25%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (20%)",
      "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (15%), Permodalan (30%)",
      "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (15%)",
    ],
    answer:
      "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)",
  },
  {
    id: 24,
    version: 1,
    category: "BPR & BPRS",
    question:
      "BPR Syariah yang memiliki modal inti kurang dari Rp50 miliar wajib menerapkan manajemen risiko paling sedikit meliputi risiko:",
    options: [
      "Kredit, operasional, kepatuhan, dan likuiditas",
      "Kredit, operasional, kepatuhan, likuiditas, dan strategi",
      "Kredit, operasional, reputasi, dan strategi",
      "Kredit, operasional, kepatuhan, likuiditas, reputasi, dan strategi",
    ],
    answer: "Kredit, operasional, kepatuhan, dan likuiditas",
  },
  {
    id: 25,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Menurut pendapat Saudara, mengapa laporan realisasi RBB dan laporan pengawasan RBB perlu digabungkan?",
    options: [
      "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.",
      "Laporan realisasi RBB yang disampaikan tidak tercapai sesuai target.",
      "Laporan pengawasan RBB yang disusun dewan komisaris tidak memberikan upaya perbaikan yang harus dilakukan anggota direksi.",
      "OJK lebih mengetahui kebutuhan data yang diperlukan dari BPR.",
    ],
    answer:
      "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.",
  },
  {
    id: 26,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Dokumen yang disampaikan pada saat mengajukan permohonan persiapan pencabutan izin usaha BPR antara lain:",
    options: [
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara",
      "Rencana penyelesaian kewajiban, laporan penghentian kegiatan usaha, laporan penyelesaian seluruh kewajiban",
      "Laporan keuangan terakhir, laporan dan bukti penyelesaian kewajiban, laporan penghentian kegiatan usaha",
      "Berita Acara RUPS, rencana penyelesaian kewajiban, pengumuman rencana pembubaran badan hukum",
    ],
    answer:
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara",
  },
  {
    id: 27,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Apa yang menjadi dasar hukum utama bagi OJK untuk menyusun peraturan turunan mengenai Rahasia Bank setelah berlakunya UU P2SK?",
    options: [
      "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK",
      "Undang-Undang Nomor 10 Tahun 1998 tentang Perbankan",
      "Surat Edaran Bank Indonesia Tahun 2007",
      "POJK Nomor 44 Tahun 2024",
    ],
    answer:
      "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK",
  },
  {
    id: 28,
    version: 1,
    category: "Lembaga Jasa Keuangan Lainnya",
    question:
      "LPIP wajib menghasilkan informasi perkreditan yang memiliki nilai tambah. Berikut adalah informasi perkreditan yang memiliki nilai tambah, kecuali:",
    options: [
      "Skor kredit",
      "Pemantauan dan evaluasi debitur atau nasabah",
      "Informasi kredit macet pada SLIK",
      "Peringatan fraud",
    ],
    answer: "Informasi kredit macet pada SLIK",
  },
  {
    id: 29,
    version: 1,
    category: "BPR & BPRS",
    question: "Berikut ini yang merupakan ketentuan terkait konsolidasi BPR/BPRS, kecuali",
    options: [
      "UU P2SK",
      "POJK No.21/POJK.03/2019",
      "UU No.4 tahun 2023",
      "Semua benar",
      "POJK No.62/POJK.03/2020",
    ],
    answer: "Semua benar",
  },
  {
    id: 30,
    version: 1,
    category: "Tata Kelola",
    question:
      "Yang dimaksud SKAI sesuai POJK 1/POJK.03/2019 tentang penerapan fungsi audit intern pada bank umum, yaitu",
    options: [
      "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntansi dan pembukuan serta audit intern bank secara independen",
      "Satuan Kerja Akuntan Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntan dan pembukuan bank secara intern",
      "Satuan Kerja Audit Independen, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern secara independen",
      "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern",
    ],
    answer:
      "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern",
  },
  {
    id: 31,
    version: 1,
    category: "Kelembagaan",
    question:
      "Penyelenggaraan jaringan kantor dengan mekanisme penyampaian informasi adalah:",
    options: [
      "Perubahan status dari Kantor di bawah KCPBLN menjadi KCPBLN",
      "Pemindahan alamat untuk Kantor Wilayah ke provinsi yang berbeda",
      "Perubahan status dari Kantor Cabang Pembantu menjadi Kantor Cabang",
      "Perubahan status dari Kantor Cabang menjadi Kantor Cabang Pembantu",
    ],
    answer: "Perubahan status dari Kantor Cabang menjadi Kantor Cabang Pembantu",
  },
  {
    id: 32,
    version: 1,
    category: "Akuntansi",
    question:
      "Pos pada laporan keuangan yang memberikan informasi terkait cadangan yang dibentuk oleh bank untuk mengantisipasi potensi kerugian yang mungkin timbul akibat penurunan nilai aset keuangan yaitu",
    options: [
      "Giro Wajib Bank",
      "Cadangan Kerugian Penurunan Nilai (CKPN)",
      "Cadangan Bank",
      "Giro Wajib Minimum",
    ],
    answer: "Cadangan Kerugian Penurunan Nilai (CKPN)",
  },
  {
    id: 33,
    version: 1,
    category: "Kelembagaan",
    question:
      "Jangka waktu penyelesaian Pembukaan Jaringan Kantor Bank BHI dan KCBLN adalah:",
    options: ["30 hari kerja", "30 hari", "14 hari", "14 hari kerja"],
    answer: "14 hari kerja",
  },
  {
    id: 34,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question:
      "Perbuatan berikut yang bukan merupakan PKP yang memiliki indikasi tipibank lainnya adalah",
    options: [
      "Pelanggaran terkait ketentuan rahasia bank.",
      "Pencatatan biaya yang tidak benar (mark-up biaya, fiktif, dll)",
      "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA).",
      "Pelanggaran Cease and Desist Order (CDO).",
    ],
    answer: "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA).",
  },
  {
    id: 35,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Dalam memetakan potensi komoditas unggulan, khususnya komoditas agrikultur, KOJK perlu memperhatikan paling sedikit faktor berikut, kecuali:",
    options: [
      "Komoditas merupakan bagian dari subsektor ekonomi unggulan",
      "Komoditas berada pada top 10 komoditas ekspor utama daerah",
      "Komoditas berada pada top 5 produksi komoditas agrikultir nasional",
      "Komoditas berada pada top 5 komoditas ekspor utama daerah",
    ],
    answer: "Komoditas berada pada top 5 komoditas ekspor utama daerah",
  },
  {
    id: 36,
    version: 1,
    category: "Konglomerasi Keuangan",
    question: "Aplikasi Pengawasan Konglomerasi Keuangan saat ini, disebut:",
    options: [
      "Sistem Informasi Pengawasan Terintegrasi",
      "Sistem Informasi Pengawasan Terkoordinasi",
      "Sistem Informasi Pengawasan Terkini",
      "Sistem Informasi Pengawasan Terpadu",
    ],
    answer: "Sistem Informasi Pengawasan Terintegrasi",
  },
  {
    id: 37,
    version: 1,
    category: "BPR & BPRS",
    question: "Apa saja tahapan perizinan pendirian BPR?",
    options: [
      "Persetujuan Prinsip dan Izin Usaha",
      "Surat Keputusan dan Akta Notaris",
      "Izin Bl dan izin OJK",
      "Izin Pemda dan Izin Bl",
    ],
    answer: "Persetujuan Prinsip dan Izin Usaha",
  },
  {
    id: 38,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question: "Pengertian Fraud menurut International Standards of Auditing adalah",
    options: [
      "Tindakan sengaja melanggar ketentuan internal (system & procedure) & peraturan perundang-undangan yang berlaku, demi kepentingan pribadi atau pihak lain yang berpotensi merugikan baik material maupun non material (moril)",
      "Kejahatan sengaja yang sangat cerdik dalam industri perbankan melalui pelanggaran ketentuan internal dengan menekan, menipu ataupun cara-cara lain untuk mendapatkan keuntungan",
      "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipuan untuk memperoleh keuntungan yang tidak adil atau illegal.",
      "Semua benar",
    ],
    answer:
      "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipuan untuk memperoleh keuntungan yang tidak adil atau illegal.",
  },
  {
    id: 39,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Pada tahun 2024, fokus program yang telah dilaksanakan oleh Kantor OJK secara spesifik telah mendukung visi:",
    options: [
      "A dan B benar",
      "Melanjutkan hilirisasi dan industrialisasi berbasis SDA dan maritim dalam membuka lapangan pekerjaan seluas-luasnya dalam mewujudkan keadilan ekonomi",
      "Mencapai swasembada pangan, energi, dan air",
      "Pelestarian seni budaya, peningkatan ekonomi kreatif, dan peningkatan prestasi olahraga",
    ],
    answer: "A dan B benar",
  },
  {
    id: 40,
    version: 1,
    category: "Perkreditan",
    question:
      "Pelapor dilarang menggunakan Informasi Debitur dari SLIK untuk keperluan berikut, kecuali untuk:",
    options: [
      "Menekan pihak ketiga dalam rangka pengajuan kerja sama",
      "Mengidentifikasi kualitas debitur untuk pemenuhan kebutuhan satu pihak",
      "Menggunakan data debitur untuk kegiatan politik atau kampanye",
      "Pengelolaan SDM pelapor",
    ],
    answer: "Pengelolaan SDM pelapor",
  },
  {
    id: 41,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Pengalihan Pengawasan Lembaga Jasa Keuangan Bidang Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), direncanakan telah dilakukan pada bulan:",
    options: ["Agustus 2024", "Oktober 2024", "September 2024", "November 2024"],
    answer: "September 2024",
  },
  {
    id: 42,
    version: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Forum Panel Terintegrasi dilaksanakan pada 2 tahap dalam siklus pengawasan Konglomerasi Keuangan, yaitu:",
    options: [
      "Pemahaman terhadap Konglomerasi Keuangan dan Pengkinian Risiko dan Tingkat Kondisi Konglomerasi Keuangan",
      "Pemahaman terhadap Konglomerasi Keuangan dan Perencanaan Pengawasan",
      "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan",
      "Perencanaan Pengawasan dan Koordinasi Pemeriksaan berdasarkan Risiko",
    ],
    answer:
      "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan",
  },
  {
    id: 43,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Apakah implikasi makro dari aktifitas keuangan dan perbankan syariah berbasis sektor riil (bagi hasil, jual beli, sewa, titipan, jasa) dan sosial (ZisWaf), kecuali:",
    options: [
      "Pengentasan kemiskinan dan pemerataan ekonomi",
      "Penciptaan lapangan kerja",
      "Pertumbuhan ekonomi berkualitas",
      "Ketimpangan sosial",
    ],
    answer: "Ketimpangan sosial",
  },
  {
    id: 44,
    version: 1,
    category: "Kelembagaan",
    question:
      "Manakah di bawah ini yang merupakan alur proses perizinan kelembagaan dan jaringan kantor secara umum:",
    options: [
      "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan pelaporan ke Pengawas/KOJK setelah pelaksanaan; selanjutnya dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan informasi ke Pengawas/KOJK sebelum pelaksanaan; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
    ],
    answer:
      "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
  },
  {
    id: 45,
    version: 1,
    category: "Akuntansi",
    question: "Standar akuntansi keuangan terdiri dari, kecuali:",
    options: [
      "Standar akuntansi keuangan umum",
      "Standar profesional akuntan publik",
      "Standar akuntansi keuangan internasional",
      "Standar akuntansi keuangan entitas privat",
    ],
    answer: "Standar profesional akuntan publik",
  },
  {
    id: 46,
    version: 1,
    category: "Manajemen Risiko",
    question:
      "Berdasarkan data pengawasan pada Bank Umum dengan modal inti sebesar Rp22 Triliun, diketahui terdapat 1 kejadian fraud yang melibatkan pegawai bank dan terjadi pada bulan Maret 2024 total sebesar Rp200 juta namun setengahnya dapat dipulihkan. Atas informasi tersebut, pengawas tidak merubah peringkat risiko inheren operasional pada RBBR periode Semester I 2024. Dasar penilaian ini menggunakan prinsip:",
    options: [
      "Analisis Berorientasi Risiko",
      "Materialitas/Signifikansi",
      "Proporsionalitas",
      "Komprehensif dan Terstruktur",
    ],
    answer: "Materialitas/Signifikansi",
  },
  {
    id: 47,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Dasar Hukum Pengawasan Perbankan oleh OJK adalah",
    options: [
      "Undang-Undang Nomor 4 tahun 2022",
      "Undang-Undang Nomor 4 tahun 2011 dan Undang-Undang Nomor 21 tahun 2023",
      "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
      "Undang-Undang Nomor 22 tahun 2011 dan Undang-Undang Nomor 4 tahun 2022",
    ],
    answer: "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
  },
  {
    id: 48,
    version: 1,
    category: "Teknologi Informasi",
    question:
      "POJK Nomor 11/POJK.03/2022, merupakan ketentuan yang penting dalam transformasi digital sektor perbankan khususnya bank umum. POJK tersebut mengatur mengenai antara lain:",
    options: [
      "Penilaian tingkat maturitas digital bank.",
      "Hanya angka 1 dan 2 yang benar.",
      "Unit dan fungsi yang bertugas menangani penyelenggaraan layanan digital.",
      "Tata Kelola TI bank, penerapan manajemen risiko TI bank, serta ketahanan & keamanan siber bank.",
    ],
    answer: "Hanya angka 1 dan 2 yang benar.",
  },
  {
    id: 49,
    version: 1,
    category: "BPR & BPRS",
    question: "Tujuan analisis peer group pada BPeR:",
    options: [
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer-groupnya",
      "Untuk menggabungkan BPR/BPRS dalam kelompok yang seragam",
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan Bank Umum",
      "Untuk menganalisis rasio BPR/BPRS secara individual",
    ],
    answer:
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer-groupnya",
  },
  {
    id: 50,
    version: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan yang wajib membentuk PIKK Nonoperasional, PSP dan/atau PSPT wajib menyampaikan dokumen rencana pembentukan PIKK paling lambat:",
    options: ["6 bulan", "9 bulan", "1 tahun", "3 bulan"],
    answer: "6 bulan",
  },
  {
    id: 51,
    version: 1,
    category: "Produk & Layanan Bank",
    question:
      "Produk yang memberikan akses ke dana dengan batas kredit tertentu dan membayar bunga atas saldo yang digunakan adalah",
    options: ["Kredit", "Tabungan", "Deposito", "Kartu Kredit"],
    answer: "Kartu Kredit",
  },
  {
    id: 52,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Anggota DPS hanya dapat merangkap jabatan sebagai anggota DPS paling banyak pada:",
    options: [
      "2 (dua) lembaga keuangan syariah lain",
      "4 (empat) bank syariah lain",
      "2 (dua) bank syariah lain",
      "4 (empat) lembaga keuangan syariah lain",
    ],
    answer: "4 (empat) lembaga keuangan syariah lain", 
  },
  {
    id: 53,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Laporan yang disampaikan bank kepada OJK terdiri dari laporan:",
    options: [
      "Terstruktur dan tidak terstruktur",
      "Rutin dan sewaktu-waktu",
      "Berkala dan insidental",
      "Pdf dan txt",
    ],
    answer: "Terstruktur dan tidak terstruktur",
  },
  {
    id: 54,
    version: 1,
    category: "Kelembagaan",
    question: "Tahapan pencabutan izin usaha atas permintaan pemegang saham adalah:",
    options: [
      "Persetujuan persiapan dan persetujuan pencabutan izin usaha",
      "Persetujuan persiapan dan persetujuan penutupan",
      "Persetujuan prinsip dan persetujuan penutupan",
      "Persetujuan prinsip dan persetujuan pencabutan izin usaha",
    ],
    answer: "Persetujuan persiapan dan persetujuan pencabutan izin usaha",
  },
  {
    id: 55,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Berikut pernyataan yang benar mengenai penilaian profil risiko BPR dan BPRS:",
    options: [
      "Risiko inheren adalah risiko yang melekat pada kegiatan bisnis BPR/BPRS, baik yang dapat dikuantifikasi maupun yang tidak dapat dikuantifikasi, yang berpengaruh secara signifikan terhadap kondisi keuangan BPR/BPRS tanpa mempertimbangkan fungsi pengendalian yang ditetapkan untuk setiap jenis risiko.",
      "Penerapan manajemen risiko BPR/BPRS sangat bervariasi sesuai dengan skala, kompleksitas, dan tingkat risiko yang dapat ditoleransi oleh BPR/BPRS",
      "Penilaian atas risiko inheren dilakukan dengan memperhatikan parameter yang bersifat kuantitatif dan kualitatif.",
      "Semua benar",
    ],
    answer: "Semua benar",
  },
  {
    id: 56,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah",
    options: ["Relevant", "Timely", "Measurable", "Strategy"],
    answer: "Strategy",
  },
  {
    id: 57,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi, merupakan definisi dari aspek:",
    options: ["Aspek manajemen", "Aspek keberlanjutan", "Aspek perencanaan", "Aspek komprehensif"],
    answer: "Aspek komprehensif",
  },
  {
    id: 58,
    version: 1,
    category: "Perkreditan",
    question: "Suku bunga dasar kredit adalah..",
    options: [
      "Indikasi suku bunga efektif kredit terendah yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin) yang dikeluarkan oleh BUK untuk kegiatan penyaluran kredit namun tidak digunakan sebagai acuan dalam penetapan suku bunga kredit yang akan dikenakan kepada nasabah",
      "Suku bunga kredit yang diberikan kepada nasabah, yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin) yang dikeluarkan oleh BUK untuk kegiatan penyaluran kredit",
      "Estimasi suku bunga kredit yang akan diberikan kepada nasabah yang dihitung berdasarkan suku bunga dana pihak ketiga",
      "Indikasi suku bunga efektif kredit terendah yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin) yang dikeluarkan oleh BUK untuk kegiatan penyaluran kredit",
    ],
    answer:
      "Indikasi suku bunga efektif kredit terendah yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin) yang dikeluarkan oleh BUK untuk kegiatan penyaluran kredit",
  },
  {
    id: 59,
    version: 1,
    category: "Teknologi Informasi",
    question:
      "Pengaturan khusus mengenai penyelenggaraan layanan digital bagi bank umum diatur dalam ketentuan:",
    options: ["POJK 26 Tahun 2024", "POJK 11/POJK.03/2022", "POJK 12/POJK.03/2018", "POJK 21 Tahun 2023"],
    answer: "POJK 21 Tahun 2023",
  },
  {
    id: 60,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Dalam transaksi jual beli dimana harus melalui proses pemesanan karena barangnya belum tersedia dan pembeli dapat membayar barang yang dibeli dikemudian hari, dapat diakomodir menggunakan akad:",
    options: ["Istishna", "Musyarakah", "Salam", "Ijarah"],
    answer: "Istishna",
  },
  {
    id: 61,
    version: 1,
    category: "Manajemen Risiko",
    question: "Rasio KPMM berdasarkan profil risiko yang harus dipenuhi bank yaitu:",
    options: [
      "11% s.d. 14% untuk profil risiko peringkat 5",
      "8% untuk profil risiko peringkat 2",
      "10% s.d. <11% untuk profil risiko peringkat 4",
      "9% s.d. <10% untuk profil risiko peringkat 3",
    ],
    answer: "11% s.d. 14% untuk profil risiko peringkat 5",
  },
  {
    id: 62,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Kewajiban Penyediaan Modal Minimum dikecualikan bagi:",
    options: ["UUS", "BPRS dan UUS", "BPRS", "BUS"],
    answer: "UUS",
  },
  {
    id: 63,
    version: 1,
    category: "Akuntansi",
    question:
      "Bagi bank umum, liabilitas keuangan bank hanya dapat diklasifikasikan dan diukur dengan:",
    options: [
      "Nilai wajar melalui laba rugi",
      "Keuntungan",
      "Jangka waktu",
      "Biaya perolehan diamortisasi",
    ],
    answer: "Biaya perolehan diamortisasi",
  },
  {
    id: 64,
    version: 1,
    category: "BPR & BPRS",
    question:
      "BPR XYZ telah diberikan perpanjangan jangka waktu pengawasan intensif dan akan berakhir pada tanggal 2 November 2021. Apabila sampai dengan batas waktu perpanjangan tersebut berakhir tidak terdapat peningkatan kondisi keuangan dan rasio KPMM berada pada posisi 9%, maka:",
    options: [
      "OJK menetapkan perpanjangan jangka waktu pengawasan intensif.",
      "Jawaban tidak ada yang sesuai.",
      "OJK meminta BPR untuk menyusun rencana tindak (action plan).",
      "OJK menetapkan BPR dalam pengawasan khusus.",
    ],
    answer: "OJK menetapkan BPR dalam pengawasan khusus.",
  },
  {
    id: 65,
    version: 1,
    category: "Tata Kelola",
    question:
      "Di bawah ini yang bukan merupakan prinsip penerapan tata kelola yang baik di bank sebagaimana diatur dalam POJK 17 Tahun 2023 adalah:",
    options: ["Kewajaran", "Tanggung jawab", "Keberlanjutan", "Keterbukaan"],
    answer: "Keberlanjutan",
  },
  {
    id: 66,
    version: 1,
    category: "BPR & BPRS",
    question:
      "OJK dapat menghentikan penilaian kemampuan dan kepatutan pihak utama BPR atau BPR Syariah apabila",
    options: [
      "Tidak sedang menjalani proses hukum",
      "Berkomitmen terhadap pengembangan operasional BPR yang sehat",
      "Tidak sedang dalam proses penilaian kembali karena terdapat indikasi permasalahan integritas",
      "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK",
    ],
    answer: "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK",
  },
  {
    id: 67,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Program Pengembangan Ekonomi Daerah merupakan salah satu upaya OJK dalam meningkatkan partisipasi Lembaga Jasa Keuangan dalam mendorong pertumbuhan ekonomi daerah. Pada konteks ini, Securities Crowd Funding dapat berperan untuk:",
    options: [
      "Penyediaan modal UMKM melalui penyediaan pinjaman yang dapat diakses secara online",
      "Penyediaan modal UMKM melalui pembiayaan bersama yang dapat diakses secara online",
      "Penyediaan modal UMKM melalui penawaran efek yang dapat diakses secara online",
      "Semua salah",
    ],
    answer:
      "Penyediaan modal UMKM melalui penawaran efek yang dapat diakses secara online",
  },
  {
    id: 68,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question:
      "Penanganan Tindak Pidana Perbankan yang dilakukan oleh Departemen Pemeriksaan Khusus Perbankan (DRKP) mencakup",
    options: [
      "Memberikan rekomendasi langkah-langkah pengawasan dan pembinaan kepada pengawas.",
      "Semuanya benar",
      "Melakukan pemeriksaan khusus tipibank terhadap penyimpangan ketentuan perbankan yang berindikasi tindak pidana perbankan",
      "Memberikan pendapat sebagai ahli untuk membuat jelas suatu perkara",
    ],
    answer: "Semuanya benar",
  },
  {
    id: 69,
    version: 1,
    category: "BPR & BPRS",
    question:
      "POJK mana yang mengatur tentang Pengembangan Kualitas Sumber Daya Manusia BPR/Syariah?",
    options: ["POJK 27/2016", "POJK 34/2018", "POJK 7/2024", "POJK 19/2023"],
    answer: "POJK 19/2023",
  },
  {
    id: 70,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Tujuan utama dari adanya integrasi pelaporan antara BI, OJK dan LPS yaitu:",
    options: [
      "Mengungkapkan potensi adanya kecurangan pelaporan oleh bank",
      "Meringankan biaya di masing-masing otoritas",
      "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi dikarenakan pelaporan berbasis metadata yang digunakan bersama",
      "Mengurangi fungsi pengawasan OJK terhadap laporan bank",
    ],
    answer:
      "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi dikarenakan pelaporan berbasis metadata yang digunakan bersama",
  },
  {
    id: 71,
    version: 1,
    category: "Perbankan Syariah",
    question: "Berikut ini adalah judul salah satu bab di dalam UU Perbankan Syariah:",
    options: [
      "Perizinan, Bentuk Badan Hukum, Anggaran Dasar, dan Rumah Tangga",
      "Sanksi Administratif dan Sanksi Pidana",
      "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS",
      "Pembinaan, Pengawasan dan Pemeriksaan",
    ],
    answer:
      "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS",
  },
  {
    id: 72,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Berikut ini adalah aplikasi produk yang tepat dari konsep dasar bank syariah dalam penyaluran dana, dimana bank berfungsi sebagai investor/financing provider, kecuali:",
    options: [
      "Pembiayaan Prinsip Bagi Hasil (Mudharabah, Musyarakah)",
      "Pembiayaan Prinsip Jual Beli (Murabahah, Salam, Istishna)",
      "Pembiayaan Prinsip Jasa (Qardh, Wakaf)",
      "Pembiayaan Prinsip Sewa (ljarah, Ijarah Muntahiya Bil at-Tamlik)",
    ],
    answer: "Pembiayaan Prinsip Jasa (Qardh, Wakaf)",
  },
  {
    id: 73,
    version: 1,
    category: "Kelembagaan",
    question:
      "Dokumen yang disampaikan pada saat penyampaian permohonan izin penggabungan usaha (tahap 2) antara lain sebagai berikut, kecuali:",
    options: [
      "Berita Acara RUPS, bukti pengumuman dan akta penggabungan",
      "Rancangan penggabungan, konsep akta penggabungan dan Berita Acara RUPS",
      "Akta perubahan anggaran dasar, rancangan penggabungan dan laporan kinerja keuangan terkini",
      "Berita Acara RUPS, konsep akta penggabungan dan bukti pengumuman",
    ],
    answer: "Berita Acara RUPS, bukti pengumuman dan akta penggabungan",
  },
  {
    id: 74,
    version: 1,
    category: "Perbankan Syariah",
    question: "Apakah yang dimaksud dengan Bank Syariah?",
    options: ["BUS, UUS, dan BPRS", "BUS", "BPRS", "BUS dan BPRS"],
    answer: "BUS dan BPRS",
  },
  {
    id: 75,
    version: 1,
    category: "BPR & BPRS",
    question: "POJK terbaru terkait konsolidasi BPR/BPRS adalah",
    options: [
      "POJK Nomor 7 Tahun 2024",
      "POJK Nomor 8 Tahun 2024",
      "POJK Nomor 10 Tahun 2024",
      "POJK Nomor 9 Tahun 2024",
    ],
    answer: "POJK Nomor 7 Tahun 2024",
  },
  {
    id: 76,
    version: 1,
    category: "Teknologi Informasi",
    question:
      "Yang termasuk fungsi spesialis TI terkait perizinan adalah memberikan tanggapan mengenai",
    options: [
      "Rencana Pengembangan TI",
      "Rencana Strategis TI",
      "Rencana Pengembangan Produk Bank",
      "Penempatan Data Center (DC)/ Disaster Recovery Center (DRC) di luar wilayah Indonesia dan Layanan Perbankan Digital (LPD)/Layanan Perbankan Elektronik (LPE)",
    ],
    answer:
      "Penempatan Data Center (DC)/ Disaster Recovery Center (DRC) di luar wilayah Indonesia dan Layanan Perbankan Digital (LPD)/Layanan Perbankan Elektronik (LPE)",
  },
  {
    id: 77,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Permohonan pendaftaran Akuntan Publik (AP) telah disetujui oleh OJK serta telah diberikan Surat Tanda Terdaftar (STTD) maka AP dimaksud akan masuk ke publikasi sebagai:",
    options: [
      "Daftar AP Tidak Aktif Tetap",
      "Daftar AP yang tidak boleh audit LJK",
      "Daftar AP yang Aktif",
      "Daftar AP yang dibekukan",
      "Daftar AP Tidak Aktif Sementara waktu",
    ],
    answer: "Daftar AP yang Aktif",
  },
  {
    id: 78,
    version: 1,
    category: "BPR & BPRS",
    question:
      "BPR ABC dengan modal inti sebesar Rp37 miliar bermaksud mengajukan permohonan persetujuan penyelenggaraan produk berupa penerbit kartu ATM. Penilaian terhadap prinsip penyelenggaraan produk atas rencana tersebut meliputi:",
    options: [
      "Penerapan tata kelola dan pemenuhan struktur organisasi.",
      "Kesiapan teknologi informasi dan perlindungan konsumen.",
      "Permodalan yang memadai dan penerapan manajemen risiko.",
      "Kondisi laporan keuangan dan tingkat kesehatan.",
    ],
    answer: "Permodalan yang memadai dan penerapan manajemen risiko.",
  },
  {
    id: 79,
    version: 1,
    category: "Stabilitas Sistem Keuangan",
    question: "Setelah menjalankan fungsinya, Bank Perantara akan:",
    options: [
      "Dibubarkan oleh OJK",
      "Dilebur dengan bank sistemik",
      "Dilikuidasi sepenuhnya oleh Bl",
      "Dialihkan kepemilikannya kepada pihak lain",
    ],
    answer: "Dialihkan kepemilikannya kepada pihak lain",
  },
  {
    id: 80,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Laporan Keuangan yang digunakan untuk melaporkan penyaluran pembiayaan yang telah ditetapkan penggunaannya oleh pemilik dana (shahibul maal) adalah:",
    options: ["Laporan Investasi Terikat", "Neraca", "Laporan Investasi Tidak Terikat", "Laba Rugi"],
    answer: "Laporan Investasi Terikat",
  },
  {
    id: 81,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Perubahan kepemilikan yang mengakibatkan beralihnya pengendalian BPR atau BPR Syariah yang tidak diperlakukan sebagai pengambilalihan, yaitu:",
    options: [
      "Perubahan kepemilikan saham yang mengakibatkan kepemilikan saham terbesar pada BPR atau BPR Syariah",
      "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah",
      "Penambahan modal disetor dengan fresh money yang mengakibatkan beralihnya pengendalian BPR atau BPR Syariah",
      "Perubahan kepemilikan saham yang tidak melebihi pemegang saham terbesar namun menentukan baik langsung atau tidak langsung pengelolaan dan/atau kebijakan BPR atau BPR Syariah",
    ],
    answer: "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah",
  },
  {
    id: 82,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Kriteria keunggulan komoditas termasuk dalam top 5 produksi komoditas agrikultur nasional bertujuan untuk, kecuali:",
    options: [
      "Memberikan keyakinan kepada offtaker potensial yang bonafide",
      "Memberikan keyakinan komoditas memiliki basis di daerah",
      "Memberikan keyakinan ketersediaan pasar atas komoditas dimaksud",
      "Memberikan keyakinan ketersediaan suplai komoditas di daerah secara signifikan",
    ],
    answer: "Memberikan keyakinan komoditas memiliki basis di daerah",
  },
  {
    id: 83,
    version: 1,
    category: "BPR & BPRS",
    question: "Apa arti prinsip Kewajaran dalam tata kelola BPR?",
    options: [
      "Menghindari pemborosan biaya",
      "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan",
      "Kemudahan ekspansi bisnis",
      "Kewajiban laporan keuangan tahunan",
    ],
    answer: "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan",
  },
  {
    id: 84,
    version: 1,
    category: "Perbankan Syariah",
    question: "Undang-undang yang menjadi dasar perbankan syariah yaitu:",
    options: [
      "UU Nomor 21 tahun 2011",
      "UU Nomor 10 tahun 1998",
      "UU Nomor 21 tahun 2008",
      "UU Nomor 11 tahun 2008",
    ],
    answer: "UU Nomor 21 tahun 2008",
  },
  {
    id: 85,
    version: 1,
    category: "BPR & BPRS",
    question:
      "Berikut merupakan jenis jaringan kantor BPR berdasarkan POJK 7 Tahun 2024, kecuali",
    options: ["Unit Layanan Keliling", "Kantor Wilayah", "Sentra Keuangan Khusus"],
    answer: "Kantor Wilayah",
  },
  {
    id: 86,
    version: 1,
    category: "Perbankan Syariah",
    question: "Tata cara pemisahan Unit Usaha Syariah yang benar adalah:",
    options: [
      "Pemisahan Unit Usaha Syariah dengan cara mengalihkan hak dan kewajiban Unit Usaha Syariah kepada BUS dan Pemisahan Unit Usaha Syariah dengan cara mengalihkan hak dan kewajiban Unit Usaha Syariah kepada BUK Induk.",
      "Pemisahan Unit Usaha Syariah dengan cara pendirian BUS dan Pemisahan Unit Usaha Syariah dengan cara melakukan cabut izin usaha Unit Usaha Syariah.",
      "Pemisahan Unit Usaha Syariah dengan cara pendirian BUS dan Pemisahan Unit Usaha Syariah dengan cara pengalihan hak dan kewajiban Unit Usaha Syariah kepada BUS.",
      "Pemisahan Unit Usaha Syariah dengan cara mengalihkan hak dan kewajiban Unit Usaha Syariah kepada BUK Induk dan Pemisahan Unit Usaha Syariah dengan cara pendirian BUS.",
    ],
    answer:
      "Pemisahan Unit Usaha Syariah dengan cara pendirian BUS dan Pemisahan Unit Usaha Syariah dengan cara pengalihan hak dan kewajiban Unit Usaha Syariah kepada BUS.",
  },
  {
    id: 87,
    version: 1,
    category: "Regulasi & Pengawasan",
    question: "Periodisasi penyusunan Audit Working Plan (AWP):",
    options: [
      "AWP wajib disusun setahun sekali.",
      "AWP wajib disusun sebelum dan sesudah melakukan pemeriksaan.",
      "AWP wajib disusun sebelum melakukan pemeriksaan.",
      "AWP wajib disusun sebelum melakukan pengawasan.",
    ],
    answer: "AWP wajib disusun sebelum melakukan pemeriksaan.",
  },
  {
    id: 88,
    version: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Apa kewajiban berkaitan dengan KK yang diatur dalam Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut:",
    options: [
      "Kewajiban Menjaga Rasio KPPMT Minimal 100%",
      "Kewajiban Penunjukan DPS",
      "Kewajiban Memiliki Perusahaan Efek",
      "Kewajiban Pembentukan PIKK",
    ],
    answer: "Kewajiban Pembentukan PIKK",
  },
  {
    id: 89,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Hub bidang merupakan satuan kerja Otoritas Jasa Keuangan di kantor pusat yang melaksanakan fungsi untuk mengoordinasikan tugas bidang pengawasan yang dilaksanakan oleh Kantor OJK Daerah. Satuan kerja apakah yang menjalankan fungsi sebagai Hub di Bidang Perbankan:",
    options: [
      "Departemen Pengawasan Lembaga Jasa Keuangan Mikro dan Lembaga Jasa Keuangan Lainnya",
      "Departemen Pengendalian Kualitas dan Pengembangan Pengawasan Perbankan",
      "Departemen Pemeriksaan Khusus dan Perbankan Daerah",
      "Departemen Pengaturan dan Pengembangan Perbankan",
    ],
    answer: "Departemen Pemeriksaan Khusus dan Perbankan Daerah",
  },
  {
    id: 90,
    version: 1,
    category: "BPR & BPRS",
    question:
      "BPR dapat melakukan pembukaan Kantor Cabang jika kondisi keuangan memenuhi persyaratan:",
    options: [
      "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.",
      "Tidak dalam keadaan rugi dalam 1 (satu) tahun terakhir.",
      "Rasio kewajiban penyediaan modal minimum 12% selama enam bulan terakhir.",
      "Rasio Non-Performing Loan (NPL) gross paling tinggi 5% selama 6 bulan terakhir.",
    ],
    answer:
      "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.",
  },
  {
    id: 91,
    version: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Berdasarkan siklus Pengawasan Terintegrasi, langkah yang dilakukan selanjutnya sebelum Integrated Risk Rating KK Tahap 1 yaitu:",
    options: [
      "Pemahaman terhadap Konglomerasi Keuangan",
      "Tindakan Pengawasan dan Pemantauan",
      "Koordinasi Pemeriksaan Berdasarkan Risiko",
      "Perencanaan Pengawasan",
    ],
    answer: "Pemahaman terhadap Konglomerasi Keuangan",
  },
  {
    id: 92,
    version: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Hal-hal yang perlu menjadi fokus pembahasan dalam pelaksanaan FGD dengan stakeholder adalah kecuali:",
    options: [
      "Penetapan skema akses keuangan",
      "Langkah pengendalian hama dan antisipasi perubahan cuaca",
      "Dampak pengembangan komoditas",
      "Identifikasi value chain komoditas terpilih",
    ],
    answer: "Langkah pengendalian hama dan antisipasi perubahan cuaca",
  },
  {
    id: 93,
    version: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Tahapan dari siklus Risk Based Supervision yang merupakan pengendalian kualitas Pengawasan Bank untuk memastikan input, proses, dan output kegiatan Pengawasan Bank dilakukan melalui",
    options: [
      "Penyusunan AWP",
      "Forum Panel Pengawasan",
      "Penilaian Tingkat Kesehatan Bank",
      "Penyusunan KHP",
    ],
    answer: "Forum Panel Pengawasan",
  },
  {
    id: 94,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question:
      "BPR menyampaikan laporan penambahan modal disetor yang tidak mengakibatkan terjadinya perubahan PSP. Berdasarkan hasil penelitian diketahui bahwa pemegang saham melakukan penyetoran modal dengan sumber dana yang tidak sesuai dengan ketentuan. Berdasarkan informasi tersebut diduga terjadi:",
    options: [
      "Tindak pidana di bidang perbankan.",
      "Upaya mengaburkan pelanggaran dari suatu ketentuan atau kondisi keuangan dan/atau transaksi yang sebenarnya.",
      "Perbuatan yang melanggar prinsip kehati-hatian dan asas-asas perbankan yang sehat dan/atau prinsip pengelolaan Bank yang baik.",
      "Pemberian ketentuan secara tidak wajar yang dapat merugikan atau mengurangi keuntungan Bank.",
    ],
    answer:
      "Perbuatan yang melanggar prinsip kehati-hatian dan asas-asas perbankan yang sehat dan/atau prinsip pengelolaan Bank yang baik.",
  },
  {
    id: 95,
    version: 1,
    category: "Lembaga Jasa Keuangan Lainnya",
    question:
      "Definisi dari Lembaga Pengelola Informasi Perkreditan (LPIP) menurut POJK Nomor 5/POJK.03/2022 tentang Lembaga Pengelola Informasi Perkreditan, yaitu:",
    options: [
      "Lembaga pemeringkat yang bertugas untuk menilai dan memberikan peringkat terhadap risiko kredit dari suatu entitas, seperti perusahaan, pemerintah, atau instrumen keuangan",
      "Lembaga pemeringkat yang menghimpun dan menyalurkan dana kepada masyarakat",
      "Lembaga pemeringkat yang berutas untuk menjamin simpanan nasabah di bank dan menjaga stabilitas sistem keuangan nasional",
      "Lembaga pemeringkat yang menghimpun dan menyalurkan data rahasia kepada masyarakat",
      "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan",
    ],
    answer:
      "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan",
  },
  {
    id: 96,
    version: 1,
    category: "Perbankan Syariah",
    question:
      "Kegiatan usaha yang berasaskan Prinsip Syariah yaitu kegiatan usaha yang tidak mengandung unsur sebagai berikut, kecuali",
    options: ["Maisir", "Istishna", "Riba", "Zalim"],
    answer: "Istishna",
  },
  {
    id: 97,
    version: 1,
    category: "Kelembagaan",
    question: "Perizinan pendirian bank BHI dan KCBLN terdiri dari 2 (dua) tahap yaitu:",
    options: [
      "Persetujuan prinsip dan izin usaha",
      "Persetujuan prinsip dan izin kelembagaan",
      "Persetujuan jaringan kantor dan izin kelembagaan",
      "Persetujuan kelembagaan dan izin usaha",
    ],
    answer: "Persetujuan prinsip dan izin usaha",
  },
  {
    id: 98,
    version: 1,
    category: "Tata Kelola",
    question:
      "Aspek penilaian uji kemampuan dan kepatutan new entry calon pemegang saham pengendali bank:",
    options: [
      "Integritas dan komitmen",
      "Integritas dan reputasi keuangan",
      "Integritas dan kelayakan keuangan",
      "Integritas dan kompetensi",
    ],
    answer: "Integritas dan kelayakan keuangan",
  },
  {
    id: 99,
    version: 1,
    category: "Anti-Fraud & Tipibank",
    question: "Definisi Tindak Pidana di Bidang Perbankan adalah",
    options: [
      "Tindak pidana yang tidak hanya mencakup pelanggaran terhadap Undang-Undang Perbankan saja, melainkan mencakup pula tindak pidana penipuan, penggelapan, pemalsuan dan tindak pidana lain sepanjang berkaitan dengan lembaga perbankan",
      "Segala jenis perbuatan melanggar hukum yang berhubungan dengan kegiatan dalam menjalankan usaha bank, baik bank sebagai sarana maupun bank sebagai sasaran.",
      "semuanya benar.",
      "Perbuatan-perbuatan yang berhubungan dengan kegiatan usaha pokok bank yang diatur dalam ketentuan-ketentuan di luar UU Perbankan, seperti KUHP, UU Pemberantasan Tipikor, dll.",
    ],
    answer: "semuanya benar.",
  },
  {
    id: 100,
    version: 1,
    category: "Perbankan Syariah",
    question: "Berikut ini adalah bab-bab di dalam UU Perbankan Syariah, kecuali:",
    options: [
      "Sanksi Administratif dan Sanksi Pidana",
      "Tata Kelola, Prinsip Kehati-hatian, dan Pengelolaan Risiko Perbankan Syariah",
      "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS",
      "Perizinan, Bentuk Badan Hukum, Anggaran Dasar, dan Kepemilikan",
    ],
    answer: "Sanksi Administratif dan Sanksi Pidana",
  },

 // SOAL VERSI 2
  {
    "id": 101,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Pihak-pihak yang menjadi subjek UU Perbankan atau UU Perbankan Syariah (Pihak Terafiliasi), yaitu...",
    "options": [
      "Anggota Dewan Komisaris atau Pengawas, Direksi atau kuasanya, pejabat, dan karyawan Bank, karyawan Bank Syariah atau Bank Umum Konvensional yang memiliki UUS",
      "Anggota Pengurus, Badan Pemeriksa, Direksi, Pejabat, atau Karyawan bank, khusus bagi bank yang berbentuk hukum koperasi sesuai dengan peraturan perundang-undangan yang berlaku.",
      "Pihak yang memberikan jasanya kepada Bank yang bersangkutan, Bank Syariah atau UUS, antara lain Dewan Pengawas Syariah, akuntan publik, penilai, dan konsultan hukum; dan/atau Pihak yang menurut penilaian Bank Indonesia/OJK turut serta memengaruhi pengelolaan Bank Syariah atau UUS, baik langsung maupun tidak langsung, antara lain pengendali bank, pemegang saham dan keluarganya, keluarga komisaris, dan keluarga direksi.",
      "Semuanya benar."
    ],
    "answer": "Semuanya benar.",
    "explanation": "Definisi Pihak Terafiliasi dalam UU Perbankan dan Perbankan Syariah mencakup semua pihak yang disebutkan dalam pilihan a, b, dan c, yaitu dari internal bank (pengurus, karyawan), pihak eksternal yang berpengaruh (konsultan, pemegang saham), hingga pengurus pada bank berbentuk koperasi."
  },
  {
    "id": 102,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Modal disetor untuk mendirikan LPIP ditetapkan paling sedikit:",
    "options": [
      "Rp500 miliar",
      "Rp200 miliar",
      "Rp50 miliar",
      "Rp100 miliar"
    ],
    "answer": "Rp200 miliar",
    "explanation": "Sesuai dengan ketentuan yang berlaku, modal disetor untuk pendirian Lembaga Pengelola Informasi Perkreditan (LPIP) ditetapkan sebagai bentuk komitmen dan kesiapan operasional, dengan besaran minimum yang telah diatur oleh OJK."
  },
  {
    "id": 103,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Bentuk badan hukum Bank Syariah sesuai dengan peraturan perundang-undangan yaitu:",
    "options": [
      "Yayasan",
      "Perusahaan Daerah",
      "Perseroan Terbatas",
      "Koperasi"
    ],
    "answer": "Perseroan Terbatas",
    "explanation": "Berdasarkan UU No. 21 Tahun 2008 tentang Perbankan Syariah, bentuk badan hukum Bank Umum Syariah (BUS) dan Bank Pembiayaan Rakyat Syariah (BPRS) adalah Perseroan Terbatas (PT)."
  },
  {
    "id": 104,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Jenis laporan yang perlu disampaikan oleh KOJK terkait dengan pelaksanaan PED adalah, kecuali:",
    "options": [
      "Kajian Pemetaan Kondisi Ekonomi serta pemetaan potensi dan perusahaan terkait",
      "Laporan Pemantauan Realisasi Program Triwulanan",
      "Laporan Pelaksanaan FGD Daerah",
      "Laporan Pemantauan Pelaksanaan PED Bulanan"
    ],
    "answer": "Laporan Pemantauan Pelaksanaan PED Bulanan",
    "explanation": "Pelaporan pemantauan Program Pengembangan Ekonomi Daerah (PED) oleh Kantor OJK (KOJK) umumnya dilakukan secara triwulanan. Laporan bulanan tidak menjadi standar pelaporan utama untuk program ini, sedangkan kajian awal, laporan FGD, dan laporan triwulanan merupakan bagian dari siklus pelaporan."
  },
  {
    "id": 105,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Kriteria keunggulan komoditas termasuk dalam top 5 produksi komoditas agrikultur nasional bertujuan untuk, kecuali:",
    "options": [
      "Memberikan keyakinan ketersediaan suplai komoditas di daerah secara signifikan",
      "Memberikan keyakinan kepada offtaker potensial yang bonafide",
      "Memberikan keyakinan ketersediaan pasar atas komoditas dimaksud",
      "Memberikan keyakinan komoditas memiliki basis di daerah"
    ],
    "answer": "Memberikan keyakinan komoditas memiliki basis di daerah",
    "explanation": "Tujuan kriteria top 5 produksi nasional adalah untuk memastikan skala suplai, menarik offtaker, dan meyakinkan pasar. Sementara itu, keyakinan bahwa komoditas memiliki basis di daerah adalah tujuan dari kriteria lain, seperti menjadi bagian dari subsektor ekonomi unggulan daerah atau menjadi komoditas ekspor utama daerah."
  },
  {
    "id": 106,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Berikut merupakan karakteristik dari simpanan wadiah, kecuali:",
    "options": [
      "Pemberian imbalan/bonus tergantung kebijakan Bank",
      "Bonus diperjanjikan di awal",
      "Bisa diambil sewaktu-waktu atau sesuai kesepakatan",
      "Tidak ada imbalan/bonus"
    ],
    "answer": "Bonus diperjanjikan di awal",
    "explanation": "Akad Wadiah adalah titipan murni. Bank tidak wajib memberikan imbalan, namun boleh memberikan bonus sukarela (athaya) yang tidak boleh diperjanjikan di muka. Jika bonus diperjanjikan, maka akadnya berubah dari titipan menjadi pinjaman (qardh)."
  },
  {
    "id": 107,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Pada produk tabungan dengan menggunakan akad mudharabah, Bank Syariah bertindak sebagai:",
    "options": [
      "Mudharib",
      "Ra sul Mal",
      "Tsaman",
      "Shahibul Mal"
    ],
    "answer": "Mudharib",
    "explanation": "Dalam akad Mudharabah, Shahibul Mal adalah pemilik dana (nasabah) dan Mudharib adalah pengelola dana (Bank Syariah). Bank mengelola dana nasabah untuk kegiatan usaha yang produktif."
  },
  {
    "id": 108,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Yang bukan merupakan komponen penilaian Kecukupan Penerapan Manajemen Risiko (KPMR) yaitu:",
    "options": [
      "Pengawasan Direksi dan Dewan Komisaris",
      "Penilaian Kecukupan Penerapan Tata Kelola",
      "Kecukupan Kebijakan, Prosedur, dan Penetapan Limit",
      "Pengendalian Intern yang Menyeluruh"
    ],
    "answer": "Penilaian Kecukupan Penerapan Tata Kelola",
    "explanation": "Penilaian KPMR fokus pada empat pilar utama manajemen risiko: 1) Pengawasan aktif Direksi & Dewan Komisaris, 2) Kecukupan kebijakan, prosedur, & limit, 3) Kecukupan proses identifikasi, pengukuran, pemantauan, & pengendalian risiko, serta sistem informasi, dan 4) Sistem pengendalian intern. Tata Kelola (GCG) adalah faktor penilaian terpisah dalam Tingkat Kesehatan Bank."
  },
  {
    "id": 109,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Pembiayaan Rakyat Syariah terdiri dari:",
    "options": [
      "PSAK Syariah",
      "SAK ETAP",
      "SAK ETAP dan PSAK Syariah",
      "PSAK"
    ],
    "answer": "SAK ETAP dan PSAK Syariah",
    "explanation": "BPRS menggunakan Standar Akuntansi Keuangan Entitas Tanpa Akuntabilitas Publik (SAK ETAP) sebagai dasar utama, namun untuk transaksi spesifik syariah, BPRS harus mengacu pada Pernyataan Standar Akuntansi Keuangan (PSAK) Syariah."
  },
  {
    "id": 110,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Siapa yang wajib memberikan rekomendasi dalam usulan penunjukan AP dan/atau KAP",
    "options": [
      "Komite Audit",
      "Pemegang saham",
      "Akuntan Internal",
      "Direksi"
    ],
    "answer": "Komite Audit",
    "explanation": "Sesuai prinsip tata kelola yang baik, Komite Audit memiliki tugas dan tanggung jawab untuk memberikan rekomendasi yang independen kepada Dewan Komisaris mengenai penunjukan Akuntan Publik (AP) dan Kantor Akuntan Publik (KAP)."
  },
  {
    "id": 111,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Apabila Bank menyampaikan dokumen tidak sesuai dengan persyaratan yang diatur dalam ketentuan, maka DIMB dapat:",
    "options": [
      "Melanjutkan proses sesuai tahapan berikutnya",
      "Mengembalikan dokumen permohonan kepada pengawas bank terkait",
      "Mengembalikan dokumen permohonan ke bank",
      "Melanjutkan proses dengan meminta informasi kepada pengawas bank"
    ],
    "answer": "Mengembalikan dokumen permohonan ke bank",
    "explanation": "Jika dokumen permohonan yang diajukan ke Direktorat Perizinan Perbankan (dalam hal ini DIMB sebagai contoh departemen perizinan) tidak lengkap atau tidak sesuai persyaratan, prosedur standarnya adalah mengembalikan permohonan tersebut kepada bank pemohon untuk dilengkapi."
  },
  {
    "id": 112,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Pelapor dilarang menggunakan Informasi Debitur dari SLIK untuk keperluan berikut, kecuali untuk:",
    "options": [
      "Pengelolaan SDM pelapor",
      "Menggunakan data debitur untuk kegiatan politik atau kampanye",
      "Menekan pihak ketiga dalam rangka pengajuan kerja sama",
      "Mengidentifikasi kualitas debitur untuk pemenuhan kebutuhan satu pihak"
    ],
    "answer": "Pengelolaan SDM pelapor",
    "explanation": "Informasi dari SLIK (Sistem Layanan Informasi Keuangan) hanya boleh digunakan untuk tujuan yang diatur, seperti analisis kredit. Penggunaannya untuk pengelolaan SDM (misalnya, background check calon karyawan di bagian keuangan) diperbolehkan, sementara penggunaan untuk tujuan politik, menekan pihak lain, atau kepentingan sepihak dilarang."
  },
  {
    "id": 113,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Bagi Dana Pensiun yang berbentuk perusahaan publik, penggunaan jasa dari AP yang sama dibatasi",
    "options": [
      "7 tahun berturut turut",
      "7 tahun kumulatif",
      "5 tahun kumulatif",
      "5 tahun berturut-turut"
    ],
    "answer": "7 tahun kumulatif",
    "explanation": "Untuk menjaga independensi dan objektivitas proses audit, Otoritas Jasa Keuangan menetapkan batasan waktu (rotasi) penggunaan jasa Akuntan Publik (AP) dan/atau Kantor Akuntan Publik (KAP) bagi lembaga jasa keuangan, termasuk Dana Pensiun, dengan perhitungan kumulatif."
  },
  {
    "id": 114,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Organisasi Pemantauan Sektor Perbankan (PMK) terdapat 3 (tiga) unsur anggotanya:",
    "options": [
      "Focal Point OJK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
      "Focal Point OJK, Koordinator Pemantauan OJK Wide, dan Seluruh Satuan Kerja Pengawas",
      "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
      "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Focal Point OJK"
    ],
    "answer": "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
    "explanation": "Struktur fungsional dalam mekanisme pemantauan krisis (PMK) umumnya melibatkan tiga unsur utama: (1) unit pendukung administratif (Sekretariat), (2) unit yang mengoordinasikan analisis (Koordinator), dan (3) unit pelaksana pengawasan di lapangan (Satuan Kerja Pengawas)."
  },
  {
    "id": 115,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Pendapatan yang diakui oleh Bank Syariah dalam laporan laba rugi, kecuali:",
    "options": [
      "Ujrah",
      "Bagi Hasil",
      "Denda",
      "Margin"
    ],
    "answer": "Denda",
    "explanation": "Denda (ta'zir) yang dikenakan kepada nasabah yang menunggak tidak boleh diakui sebagai pendapatan oleh Bank Syariah. Dana denda ini harus disalurkan sebagai dana sosial atau kebajikan (qardhul hasan)."
  },
  {
    "id": 116,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "BPRS dapat didirikan oleh, kecuali:",
    "options": [
      "Badan hukum Indonesia yang seluruh pemiliknya warga negara Indonesia",
      "Badan hukum Indonesia dengan warga negara asing dan/atau badan hukum asing secara kemitraan",
      "Pemerintah daerah",
      "Warga negara Indonesia"
    ],
    "answer": "Badan hukum Indonesia dengan warga negara asing dan/atau badan hukum asing secara kemitraan",
    "explanation": "Sesuai regulasi, kepemilikan Bank Pembiayaan Rakyat Syariah (BPRS) dibatasi hanya untuk Warga Negara Indonesia, Badan Hukum Indonesia yang seluruhnya dimiliki WNI, dan/atau Pemerintah Daerah. Kepemilikan asing tidak diperbolehkan."
  },
  {
    "id": 117,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Apa yang menjadi dasar hukum utama bagi OJK untuk menyusun peraturan turunan mengenai Rahasia Bank setelah berlakunya UU P2SK?",
    "options": [
      "POJK Nomor 44 Tahun 2024",
      "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK",
      "Surat Edaran Bank Indonesia Tahun 2007",
      "Undang-Undang Nomor 10 Tahun 1998 tentang Perbankan"
    ],
    "answer": "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK",
    "explanation": "UU No. 4 Tahun 2023 (UU P2SK) memberikan amanat langsung kepada OJK untuk mengatur lebih lanjut ketentuan mengenai rahasia bank melalui Peraturan OJK (POJK), yang tercantum secara spesifik pada pasal-pasal tersebut."
  },
  {
    "id": 118,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Berikut ini merupakan output/laporan yang disusun oleh fungsi Database, kecuali",
    "options": [
      "Informasi dan data statistik keuangan perbankan daerah",
      "Laporan mingguan Satuan Kerja",
      "Materi Laporan Triwulan OJK",
      "Peta Strategis OJK"
    ],
    "answer": "Peta Strategis OJK",
    "explanation": "Fungsi database berfokus pada pengolahan data mentah menjadi laporan terstruktur seperti data statistik dan materi laporan triwulanan. Peta Strategis OJK merupakan output dari fungsi perencanaan strategis di tingkat yang lebih tinggi, bukan output rutin dari fungsi pengolahan database operasional."
  },
  {
    "id": 119,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Modal disetor yang dipersyaratkan untuk pendirian BUS yang akan menjadi anak dalam struktur kelompok usaha bank adalah sebesar:",
    "options": [
      "Rp 10.000.000.000.000,00 (sepuluh triliun rupiah)",
      "Rp 1.000.000.000.000,00 (satu triliun rupiah)",
      "Rp 500.000.000.000,00 (lima ratus miliar rupiah)",
      "Rp 3.000.000.000.000,00 (tiga triliun rupiah)"
    ],
    "answer": "Rp 1.000.000.000.000,00 (satu triliun rupiah)",
    "explanation": "POJK No. 12/POJK.03/2020 mengatur tentang Konsolidasi Bank Umum. Untuk pendirian Bank Umum Syariah (BUS) baru oleh bank yang sudah ada (sebagai anak perusahaan), modal disetor minimumnya adalah Rp1 triliun."
  },
  {
    "id": 120,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Berdasarkan UU No.21 tahun 2008 tentang Perbankan Syariah pada Pasal 32 dinyatakan bahwa DPS wajib dibentuk di perbankan syariah dan diangkat oleh Rapat Umum Pemegang Saham (RUPS) setelah mendapatkan rekomendasi dari:",
    "options": [
      "Kementerian Agama Republik Indonesia",
      "DSN Majelis Ulama Indonesia",
      "LPPOM Majelis Ulama Indonesia",
      "OJK"
    ],
    "answer": "DSN Majelis Ulama Indonesia",
    "explanation": "Dewan Syariah Nasional Majelis Ulama Indonesia (DSN-MUI) adalah lembaga yang memiliki otoritas untuk memberikan fatwa dan merekomendasikan calon anggota Dewan Pengawas Syariah (DPS) yang akan bertugas di Lembaga Keuangan Syariah."
  },
  {
    "id": 121,
    "version": 2,
    "category": "Konglomerasi Keuangan",
    "question": "Yang dimaksud dengan Perusahaan Induk Konglomerasi Keuangan Operasional adalah:",
    "options": [
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang melakukan kegiatan sebagai PIKK namun tidak melakukan kegiatan sebagai LJK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang hanya melakukan kegiatan sebagai LJK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang hanya melakukan kegiatan sebagai PIKK"
    ],
    "answer": "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK",
    "explanation": "PIKK Operasional adalah entitas yang berfungsi ganda: sebagai Perusahaan Induk Konglomerasi Keuangan (PIKK) yang mengendalikan LJK lain, sekaligus sebagai Lembaga Jasa Keuangan (LJK) yang menjalankan kegiatan operasionalnya sendiri."
  },
  {
    "id": 122,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Manakah perbuatan berikut yang merupakan PKP di bidang perkreditan/ pembiayaan",
    "options": [
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Pelanggaran terkait rahasia bank.",
      "Pelanggaran Cease and Desist Order (CDO) berupa pemberian kredit pada masa Bank dinyatakan Dalam Pengawasan Khusus.",
      "Rekayasa kolektibilitas kredit/pembiayaan"
    ],
    "answer": "Rekayasa kolektibilitas kredit/pembiayaan",
    "explanation": "Penyimpangan Ketentuan Perbankan (PKP) di bidang kredit/pembiayaan berkaitan langsung dengan proses penyaluran dana. Rekayasa kolektibilitas adalah tindakan mengubah status kelancaran kredit secara tidak wajar untuk menghindari pencadangan kerugian, yang merupakan pelanggaran serius."
  },
  {
    "id": 123,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Pasal 49 UU Perbankan atau Pasal 63 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan",
    "options": [
      "Perizinan.",
      "Pengawasan Bank.",
      "Kegiatan Usaha Bank.",
      "Rahasia Bank."
    ],
    "answer": "Kegiatan Usaha Bank.",
    "explanation": "Pasal-pasal ini mengatur sanksi pidana bagi anggota dewan komisaris, direksi, atau pegawai bank yang dengan sengaja melakukan tindakan tidak benar dalam kegiatan usaha bank, seperti membuat pencatatan palsu atau tidak melaksanakan langkah-langkah yang diperlukan untuk memastikan ketaatan bank terhadap ketentuan."
  },
  {
    "id": 124,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Pernyataan berikut yang tidak benar terkait kewajiban dalam pembukaan Rahasia Bank adalah:",
    "options": [
      "Bank dan Pihak Terafiliasi wajib merahasiakan informasi mengenai Nasabah Penyimpan dan Simpanannya dan/atau Nasabah Investor dan Investasinya",
      "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat",
      "Bank wajib melaksanakan pembukaan sesuai dengan izin tertulis OJK",
      "Bank wajib memiliki prosedur internal pembukaan Rahasia Bank"
    ],
    "answer": "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat",
    "explanation": "Prinsip kerahasiaan bank sangat ketat. Pembukaan rahasia bank hanya dapat dilakukan atas dasar perintah atau izin tertulis dari otoritas yang berwenang (misalnya OJK atau pengadilan) sesuai UU, dan tidak ada pengecualian untuk kondisi 'darurat' tanpa landasan hukum tersebut."
  },
  {
    "id": 125,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Modul yang terdapat pada aplikasi Sistem Informasi Pengawasan Perbankan BPR dan BPRS antara lain:",
    "options": [
      "Know Your BPR/BPRS, Bank Performance Report (BPeR), Early Warning System (EWS)",
      "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan",
      "Know Your BPR/BPRS, Tindakan Pengawasan dan Pemantauan, Enterprise Data Warehouse",
      "Risk Based Bank Rating (RBBR), Penilaian Risiko APU PPT, Bank Performance Report (BPeR)"
    ],
    "answer": "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan",
    "explanation": "Aplikasi pengawasan (suptech) untuk BPR/S dirancang mengikuti siklus pengawasan berbasis risiko, yang meliputi modul untuk memahami profil bank (KYBPR), melakukan penilaian risiko (RBBR), dan merencanakan tindakan pengawasan (Supervisory Plan)."
  },
  {
    "id": 126,
    "version": 2,
    "category": "Operasional Bank",
    "question": "Produk yang memberikan kemudahan untuk pembayaran secara elektronik seperti tagihan bulanan dan transfer antarbank adalah",
    "options": [
      "Internet Banking",
      "Tabungan",
      "Kartu Kredit",
      "Deposito"
    ],
    "answer": "Internet Banking",
    "explanation": "Internet Banking adalah layanan yang secara spesifik dirancang untuk transaksi non-tunai secara elektronik, termasuk pembayaran tagihan, transfer dana, dan pembelian produk, yang dapat diakses melalui internet."
  },
  {
    "id": 127,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Dalam hal bank yang ditetapkan sebagai bank dalam resolusi merupakan bank selain bank sistemik dan Lembaga Penjamin Simpanan (LPS) memutuskan untuk tidak melakukan penyelamatan atau tidak melanjutkan proses penyelamatan terhadap bank tersebut, maka langkah yang paling mungkin diambil adalah:",
    "options": [
      "Bank dialihkan ke Bank Indonesia",
      "Bank tetap beroperasi normal tanpa intervensi",
      "Bank akan dilakukan likuidasi oleh LPS",
      "Bank diberikan tambahan modal oleh OJK"
    ],
    "answer": "Bank akan dilakukan likuidasi oleh LPS",
    "explanation": "Jika bank gagal (non-sistemik) tidak diselamatkan oleh LPS, maka sesuai UU Pencegahan dan Penanganan Krisis Sistem Keuangan (P2KSK), LPS akan mencabut izin usaha bank tersebut dan melaksanakan proses likuidasi untuk membayar klaim simpanan nasabah yang dijamin."
  },
  {
    "id": 128,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Berikut merupakan jenis jaringan kantor BPR berdasarkan POJK 7 Tahun 2024, kecuali",
    "options": [
      "Kantor Wilayah",
      "Sentra Keuangan Khusus",
      "Unit Layanan Keliling"
    ],
    "answer": "Kantor Wilayah",
    "explanation": "Jaringan kantor BPR/S dirancang untuk skala operasional yang lebih terbatas. 'Kantor Wilayah' adalah struktur yang umum digunakan oleh bank umum berskala besar untuk mengoordinasikan beberapa kantor cabang, bukan oleh BPR."
  },
  {
    "id": 129,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Berikut pernyataan yang benar mengenai penilaian profil risiko BPR dan BPRS:",
    "options": [
      "Penerapan manajemen risiko BPR/BPRS sangat bervariasi sesuai dengan skala, kompleksitas, dan tingkat risiko yang dapat ditoleransi oleh BPR/BPRS",
      "Risiko inheren adalah risiko yang melekat pada kegiatan bisnis BPR/BPRS... tanpa mempertimbangkan fungsi pengendalian...",
      "Semua benar",
      "Penilaian atas risiko inheren dilakukan dengan memperhatikan parameter yang bersifat kuantitatif dan kualitatif."
    ],
    "answer": "Semua benar",
    "explanation": "Semua pernyataan tersebut benar. Penilaian profil risiko BPR/S harus proporsional (a), membedakan antara risiko yang melekat (inheren) sebelum adanya kontrol (b), dan menggunakan parameter kuantitatif serta kualitatif dalam penilaiannya (d)."
  },
  {
    "id": 130,
    "version": 2,
    "category": "Konglomerasi Keuangan",
    "question": "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan, Perusahaan Induk Konglomerasi Keuangan wajib menyampaikan dokumen piagam korporasi kepada OJK paling lama:",
    "options": [
      "1 bulan",
      "6 bulan",
      "20 hari kerja",
      "30 hari kerja"
    ],
    "answer": "6 bulan",
    "explanation": "POJK tentang Konglomerasi Keuangan memberikan waktu 6 bulan bagi entitas yang ditetapkan sebagai PIKK untuk melakukan penyesuaian dan pemenuhan persyaratan, termasuk penyampaian dokumen-dokumen penting seperti piagam korporasi."
  },
  {
    "id": 131,
    "version": 2,
    "category": "Operasional Bank",
    "question": "Dalam proses bisnis perkreditan, bank perlu untuk melakukan analisa berjenjang dan/atau terpisah terhadap suatu debitur yang dilakukan oleh unit kerja yang berbeda, antara lain oleh account manager dengan credit reviewer. Praktik dimaksud umumnya dikenal sebagai:",
    "options": [
      "Five Cs of credit",
      "Four eyes principle",
      "Segregation of duty",
      "Third line of defense"
    ],
    "answer": "Four eyes principle",
    "explanation": "Prinsip 'Four Eyes' atau 'Prinsip Empat Mata' adalah mekanisme kontrol internal di mana sebuah aktivitas atau keputusan (khususnya yang berisiko tinggi seperti persetujuan kredit) harus direview dan disetujui oleh minimal dua orang yang independen satu sama lain."
  },
  {
    "id": 132,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS, terdapat status pengawasan BDP yang merupakan kepanjangan dari",
    "options": [
      "Bank Dalam Pengawasan",
      "Bank Dalam Penyehatan",
      "Bank dalam Penyelesaian",
      "Bank Dalam Perbaikan"
    ],
    "answer": "Bank Dalam Penyehatan",
    "explanation": "Status BDP (Bank Dalam Penyehatan) adalah status pengawasan yang diberikan kepada BPR/BPRS yang mengalami penurunan kinerja signifikan, di mana bank tersebut diwajibkan untuk menyusun dan melaksanakan rencana tindakan (action plan) untuk memperbaiki kondisinya."
  },
  {
    "id": 133,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Tahapan dalam siklus pengawasan BPR dan BPRS berdasarkan risiko, kecuali:",
    "options": [
      "Penilaian Profil Risiko dan Kinerja BPR atau BPRS",
      "Pemeriksaan berbasis kepatuhan",
      "Pemeriksaan Berdasarkan Risiko",
      "Tindakan Pengawasan dan Pemantauan (Supervisory Actions and Monitoring)"
    ],
    "answer": "Pemeriksaan berbasis kepatuhan",
    "explanation": "Siklus pengawasan modern telah beralih dari 'compliance-based' (berbasis kepatuhan) menjadi 'risk-based' (berbasis risiko). Pemeriksaan berbasis kepatuhan murni bukan lagi tahapan utama, melainkan sudah terintegrasi dalam pemeriksaan berbasis risiko yang lebih komprehensif."
  },
  {
    "id": 134,
    "version": 2,
    "category": "Konglomerasi Keuangan",
    "question": "Penyusunan Integrated Supervisory Plan dalam Konglomerasi Keuangan dilakukan sebanyak:",
    "options": [
      "2 kali dalam 1 tahun",
      "1 kali dalam 1 tahun",
      "2 kali dalam 1 semester",
      "1 kali dalam 1 triwulan"
    ],
    "answer": "2 kali dalam 1 tahun",
    "explanation": "Untuk menjaga pengawasan yang efektif dan relevan dengan perkembangan risiko, Integrated Supervisory Plan (ISP) untuk konglomerasi keuangan disusun secara periodik, yaitu 2 kali dalam setahun atau per semester."
  },
  {
    "id": 135,
    "version": 2,
    "category": "Konsolidasi & Korporasi",
    "question": "Dokumen persyaratan permohonan persiapan pelaksanaan pengambilalihan antara lain sebagai berikut, kecuali:",
    "options": [
      "Akta pengambilalihan yang dibuat di hadapan notaris",
      "Rancangan pengambilalihan",
      "Surat Pemberitahuan (SPT) Pajak Tahunan calon PSP perorangan",
      "Konsep akta jual beli saham"
    ],
    "answer": "Akta pengambilalihan yang dibuat di hadapan notaris",
    "explanation": "Pada tahap permohonan izin, OJK akan mereview 'rancangan' atau 'konsep' dari rencana pengambilalihan. Akta notariil yang final baru dibuat dan diserahkan setelah OJK memberikan persetujuan prinsip atas rencana tersebut."
  },
  {
    "id": 136,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Berapakah besaran capital conservation buffer?",
    "options": [
      "2,5% dari ATMR",
      "Diserahkan kepada masing-masing bank",
      "0 - 2,5% dari ATMR",
      "1 - 2,5% dari ATMR"
    ],
    "answer": "2,5% dari ATMR",
    "explanation": "Sesuai kerangka Basel III yang diadopsi OJK, Capital Conservation Buffer (CCB) ditetapkan sebesar 2,5% dari Aset Tertimbang Menurut Risiko (ATMR). Buffer ini berada di atas Kewajiban Penyediaan Modal Minimum (KPMM) dan berfungsi sebagai penyangga tambahan."
  },
  {
    "id": 137,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Penyelesaian sengketa di Perbankan Syariah dilakukan oleh pengadilan dalam lingkungan:",
    "options": [
      "Peradilan Agama",
      "Peradilan Muamalah",
      "Peradilan Umum",
      "Peradilan Tata Niaga"
    ],
    "answer": "Peradilan Agama",
    "explanation": "UU No. 3 Tahun 2006 memberikan kewenangan absolut kepada Peradilan Agama untuk menangani sengketa di bidang ekonomi syariah, termasuk yang terjadi di industri perbankan syariah."
  },
  {
    "id": 138,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "BPR dapat melakukan pembukaan Kantor Cabang jika kondisi keuangan memenuhi persyaratan:",
    "options": [
      "Rasio Non-Performing Loan (NPL) gross paling tinggi 5% selama 6 bulan terakhir.",
      "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.",
      "Tidak dalam keadaan rugi dalam 1 (satu) tahun terakhir.",
      "Rasio kewajiban penyediaan modal minimum 12% selama enam bulan terakhir."
    ],
    "answer": "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.",
    "explanation": "Persyaratan ini bersifat kualitatif dan mencakup semua aspek. Bank yang ingin berekspansi harus sehat secara fundamental (keuangan dan tingkat kesehatan) agar mampu mengelola pertumbuhan usaha dan menyerap potensi risiko yang timbul."
  },
  {
    "id": 139,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Pengeluaran yang sudah tidak memiliki manfaat adalah:",
    "options": [
      "Aset",
      "Ekuitas",
      "Beban",
      "Kapitalisasi"
    ],
    "answer": "Beban",
    "explanation": "Dalam akuntansi, 'beban' (expense) adalah pengorbanan ekonomis atau pengeluaran yang manfaatnya telah habis digunakan dalam periode berjalan untuk menghasilkan pendapatan. Berbeda dengan 'aset' yang manfaatnya masih akan dirasakan di masa depan."
  },
  {
    "id": 140,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Tahapan pemberian izin pendirian Bank Syariah berupa:",
    "options": [
      "Persetujuan kegiatan usaha",
      "Persetujuan prinsip",
      "Persetujuan prinsip dan izin usaha",
      "Izin usaha"
    ],
    "answer": "Persetujuan prinsip dan izin usaha",
    "explanation": "Proses pendirian bank baru (termasuk bank syariah) terdiri dari dua tahap utama: (1) Persetujuan Prinsip, di mana OJK menilai kelayakan rencana pendirian, dan (2) Izin Usaha, yang diberikan setelah semua persiapan (modal, sistem, SDM, kantor) selesai dan siap beroperasi."
  },
  {
    "id": 141,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Berikut ini pernyataan yang tidak tepat terkait Penerapan Manajemen Risiko bagi Bank Umum:",
    "options": [
      "meliputi proses mengidentifikasi, mengukur, memantau, dan mengendalikan",
      "Diatur melalui POJK 18/POJK.03/2016",
      "Penerapan disesuaikan dengan kemampuan Bank",
      "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah"
    ],
    "answer": "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah",
    "explanation": "Pernyataan ini tidak tepat karena OJK menerbitkan peraturan terpisah. Penerapan Manajemen Risiko untuk Bank Umum Konvensional diatur dalam POJK 18/POJK.03/2016, sedangkan untuk Bank Umum Syariah dan UUS diatur dalam POJK 65/POJK.03/2016 yang memiliki kekhususan terkait risiko imbal hasil dan risiko investasi."
  },
  {
    "id": 142,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Undang-undang yang menjadi dasar perbankan syariah yaitu:",
    "options": [
      "UU Nomor 11 tahun 2008",
      "UU Nomor 21 tahun 2011",
      "UU Nomor 21 tahun 2008",
      "UU Nomor 10 tahun 1998"
    ],
    "answer": "UU Nomor 21 tahun 2008",
    "explanation": "Undang-Undang Nomor 21 Tahun 2008 adalah landasan hukum utama (lex specialis) yang secara khusus mengatur tentang seluruh aspek Perbankan Syariah di Indonesia."
  },
  {
    "id": 143,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Kelembagaan Lembaga Pengelola Informasi Perkreditan (LPIP) diatur dalam:",
    "options": [
      "POJK Nomor 9/POJK.03/2023",
      "POJK Nomor 15/POJK.03/2024",
      "POJK Nomor 13/POJK.03/2024",
      "POJK Nomor 5/POJK.03/2022"
    ],
    "answer": "POJK Nomor 5/POJK.03/2022",
    "explanation": "Peraturan Otoritas Jasa Keuangan (POJK) Nomor 5/POJK.03/2022 adalah regulasi spesifik yang mengatur tentang kelembagaan, kegiatan usaha, dan operasional dari Lembaga Pengelola Informasi Perkreditan."
  },
  {
    "id": 144,
    "version": 2,
    "category": "Konsolidasi & Korporasi",
    "question": "POJK yang mengatur tentang penggabungan, peleburan dan pengambilalihan BPR/BPRS yaitu",
    "options": [
      "POJK Nomor 22/POJK.03/2019",
      "POJK Nomor 21/POJK.03/2019",
      "POJK Nomor 24/POJK.03/2019",
      "POJK Nomor 23/POJK.03/2019"
    ],
    "answer": "POJK Nomor 21/POJK.03/2019",
    "explanation": "Meskipun saat ini sudah ada regulasi yang lebih baru (POJK 62/2020 dan POJK 7/2024), pada saat pertanyaan ini dibuat, POJK 21/2019 sering menjadi rujukan umum untuk aksi korporasi bank. Namun, perlu dicatat bahwa POJK ini sebenarnya untuk Bank Umum. Jawaban yang paling tepat seharusnya adalah POJK yang lebih spesifik untuk BPR/S."
  },
  {
    "id": 145,
    "version": 2,
    "category": "Konglomerasi Keuangan",
    "question": "Berikut ini yang termasuk ke dalam komponen Penilaian Integrated Risk Rating, kecuali:",
    "options": [
      "Manajemen Risiko Terintegrasi",
      "Tata Kelola Terintegrasi",
      "Profil Risiko Terintegrasi",
      "Permodalan Terintegrasi"
    ],
    "answer": "Manajemen Risiko Terintegrasi",
    "explanation": "Penilaian risiko terintegrasi (Integrated Risk Rating) pada konglomerasi keuangan memiliki tiga komponen utama, yaitu Profil Risiko Terintegrasi, Tata Kelola Terintegrasi, dan Permodalan Terintegrasi. Manajemen Risiko Terintegrasi adalah proses yang dinilai di dalam komponen Profil Risiko, bukan komponen penilaian terpisah."
  },
  {
    "id": 146,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Menurut pendapat Saudara, mengapa laporan realisasi RBB dan laporan pengawasan RBB perlu digabungkan?",
    "options": [
      "Laporan realisasi RBB yang disampaikan tidak tercapai sesuai target.",
      "OJK lebih mengetahui kebutuhan data yang diperlukan dari BPR.",
      "Laporan pengawasan RBB yang disusun dewan komisaris tidak memberikan upaya perbaikan yang harus dilakukan anggota direksi.",
      "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan."
    ],
    "answer": "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.",
    "explanation": "Penggabungan laporan bertujuan untuk efisiensi. Dengan menggabungkan laporan realisasi Rencana Bisnis Bank (RBB) dengan laporan hasil pengawasan oleh Dewan Komisaris, OJK mendapatkan gambaran yang utuh dan komprehensif dalam satu dokumen, menyederhanakan proses pelaporan bagi bank."
  },
  {
    "id": 147,
    "version": 2,
    "category": "Operasional Bank",
    "question": "Apa yang menjadi ciri utama dari rekening giro?",
    "options": [
      "Terbatas untuk transaksi harian",
      "Kewajiban setoran minimum",
      "Tidak memiliki jangka waktu",
      "Bunga yang tinggi"
    ],
    "answer": "Tidak memiliki jangka waktu",
    "explanation": "Rekening giro (demand deposit) adalah simpanan yang penarikannya dapat dilakukan setiap saat dengan menggunakan cek, bilyet giro, atau sarana lainnya. Karakteristik utamanya adalah tidak terikat oleh jangka waktu tertentu seperti deposito."
  },
  {
    "id": 148,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Bentuk badan hukum BPR sesuai ketentuan peraturan perundang-undangan:",
    "options": [
      "Perusahaan Perseroan Daerah, Koperasi, dan/atau Perseroan Terbatas.",
      "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas.",
      "Perusahaan Daerah, Koperasi, dan/atau Perseroan Terbatas.",
      "Perseroda, Perumda, dan/atau Perseroan Terbatas."
    ],
    "answer": "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas.",
    "explanation": "UU Perbankan dan perubahannya mengizinkan BPR memiliki beberapa bentuk badan hukum, yaitu Perseroan Terbatas (PT), Koperasi, atau Perusahaan Daerah. Perusahaan Daerah sendiri bisa berbentuk Perusahaan Umum Daerah (Perumda) atau Perusahaan Perseroan Daerah (Perseroda). Pilihan ini adalah yang paling lengkap."
  },
  {
    "id": 149,
    "version": 2,
    "category": "Konsolidasi & Korporasi",
    "question": "Di bawah ini pernyataan yang tidak benar terkait Penggabungan/Peleburan adalah:",
    "options": [
      "Penggabungan/Peleburan hanya dapat dilakukan antar BPR",
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang berbeda sepanjang kantor-kantor BPR hasil Penggabungan/Peleburan berlokasi dalam wilayah provinsi yang sama",
      "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional",
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang sama"
    ],
    "answer": "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional",
    "explanation": "Penggabungan BPR Konvensional dan BPR Syariah dapat menghasilkan bank syariah, asalkan bank penerima (surviving entity) adalah BPR Syariah atau bank hasil penggabungan dikonversi menjadi BPR Syariah. Pernyataan bahwa hasilnya harus tetap konvensional adalah tidak benar."
  },
  {
    "id": 150,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Pada Perizinan perubahan nama bank, Bank BHI wajib menyampaikan dokumen persetujuan perubahan anggaran dasar dari instansi yang berwenang kepada OJK paling lama:",
    "options": [
      "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang",
      "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan TDP dari instansi yang berwenang",
      "5 (lima) hari setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang",
      "5 (lima) hari setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan perubahan SIUP dari instansi yang berwenang"
    ],
    "answer": "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang",
    "explanation": "Setelah bank mendapatkan persetujuan perubahan Anggaran Dasar (terkait nama baru) dari Kementerian Hukum dan HAM, bank wajib melaporkan persetujuan tersebut kepada OJK dalam jangka waktu yang telah ditetapkan, yaitu 5 hari kerja."
  },
  {
    "id": 151,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Suku bunga yang secara tepat mendiskontokan estimasi pembayaran atau penerimaan kas di masa datang selama perkiraan umur dari instrumen keuangan, merupakan:",
    "options": [
      "Suku Bunga Dasar Kredit (SBDK)",
      "Suku Bunga Efektif (EIR)",
      "Suku Bunga Kontraktual",
      "Suku Bunga BI-7 Day Reverse Repo Rate (BI7DRR)"
    ],
    "answer": "Suku Bunga Efektif (EIR)",
    "explanation": "Ini adalah definisi dari Suku Bunga Efektif atau Effective Interest Rate (EIR) sesuai Standar Akuntansi Keuangan (PSAK 71). EIR digunakan untuk mengukur biaya perolehan diamortisasi dari aset atau liabilitas keuangan."
  },
  {
    "id": 152,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Pengertian Fraud menurut kamus “Black’s Law Dictionary” adalah",
    "options": [
      "Semua benar",
      "Kejahatan yang dapat terdiri atas semua tindakan kriminal untuk memperoleh keuntungan dengan menggunakan cara penipuan sebagai prinsip dasarnya.",
      "Tindakan sengaja memberikan gambaran yang salah tentang hal yang benar atau menyembunyikan hal-hal yang benar untuk mempengaruhi orang lain agar bertindak menguntungkan dirinya dan merugikan pihak lain.",
      "sekumpulan tindakan yang tidak diizinkan dengan tujuan mendapatkan keuntungan dengan sengaja melanggar ketentuan internal untuk melakukan penekanan, penipuan atau cara-cara lain yang cerdik sehingga memperdaya pihak lain"
    ],
    "answer": "Tindakan sengaja memberikan gambaran yang salah tentang hal yang benar atau menyembunyikan hal-hal yang benar untuk mempengaruhi orang lain agar bertindak menguntungkan dirinya dan merugikan pihak lain.",
    "explanation": "Definisi ini secara spesifik merujuk pada salah satu pengertian inti dari *fraud* dalam Black's Law Dictionary, yang menekankan pada unsur representasi yang salah (*misrepresentation*) atau penyembunyian fakta material (*concealment*) dengan niat untuk menipu."
  },
  {
    "id": 153,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Permohonan pendaftaran Akuntan Publik (AP) telah disetujui oleh OJK serta telah diberikan Surat Tanda Terdaftar (STTD) maka AP dimaksud akan masuk ke publikasi sebagai:",
    "options": [
      "Daftar AP yang tidak boleh audit LJK",
      "Daftar AP yang dibekukan",
      "Daftar AP Tidak Aktif Tetap",
      "Daftar AP yang Aktif",
      "Daftar AP Tidak Aktif Sementara waktu"
    ],
    "answer": "Daftar AP yang Aktif",
    "explanation": "Setelah proses pendaftaran disetujui dan STTD diterbitkan, Akuntan Publik tersebut secara resmi terdaftar dan berstatus 'Aktif', yang berarti ia berwenang untuk memberikan jasa audit kepada Lembaga Jasa Keuangan (LJK) yang diawasi OJK."
  },
  {
    "id": 154,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Pembentukan Ekosistem Pengembangan Keunggulan Daerah berbasis Kemitraan terpadu, paling sedikit memuat komitmen berupa:",
    "options": [
      "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak offtake",
      "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak penyelesaian sengketa",
      "Kontrak penyediaan bibit, kontrak penyediaan kredit UMKM, dan kontrak riset",
      "Kontrak asistensi teknis, kontrak penyediaan kredit UMKM, dan kontrak penyediaan asuransi mikro"
    ],
    "answer": "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak offtake",
    "explanation": "Ekosistem yang terpadu membutuhkan tiga pilar utama: (1) Pendanaan dari lembaga keuangan, (2) Pendampingan/asistensi teknis untuk meningkatkan kualitas produksi, dan (3) Jaminan pasar dari pembeli (offtaker). Ketiga komitmen ini harus ada dalam perjanjian kemitraan."
  },
  {
    "id": 155,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Jangka waktu penyelesaian Pembukaan Jaringan Kantor Bank BHI dan KCBLN adalah:",
    "options": [
      "14 hari",
      "30 hari",
      "30 hari kerja",
      "14 hari kerja"
    ],
    "answer": "14 hari kerja",
    "explanation": "Otoritas Jasa Keuangan menetapkan Service Level Agreement (SLA) atau jangka waktu layanan untuk berbagai proses perizinan. Untuk pembukaan jaringan kantor tertentu seperti Bank BHI dan KCBLN, jangka waktu penyelesaiannya adalah 14 hari kerja setelah dokumen diterima secara lengkap dan benar."
  },
  {
    "id": 156,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Bagi bank umum, liabilitas keuangan bank hanya dapat diklasifikasikan dan diukur dengan:",
    "options": [
      "Jangka waktu",
      "Biaya perolehan diamortisasi",
      "Keuntungan",
      "Nilai wajar melalui laba rugi"
    ],
    "answer": "Biaya perolehan diamortisasi",
    "explanation": "Sesuai PSAK 71, setelah pengakuan awal, sebagian besar liabilitas keuangan (seperti simpanan nasabah atau utang obligasi) diukur pada 'biaya perolehan diamortisasi' (amortised cost). Pilihan pengukuran pada nilai wajar hanya berlaku untuk kondisi tertentu."
  },
  {
    "id": 157,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Berikut merupakan fungsi KSP, kecuali",
    "options": [
      "Spesialis TI memberikan tanggapan mengenai Rencana Pengembangan Produk",
      "Spesialis Likuiditas & Pasar menyusun Laporan Large Exposure (LEX)",
      "Spesialis Kredit menyusun Laporan Large Exposure (LEX)",
      "Spesialis Likuiditas & Pasar memberikan tanggapan mengenai structured product"
    ],
    "answer": "Spesialis Likuiditas & Pasar menyusun Laporan Large Exposure (LEX)",
    "explanation": "Laporan Large Exposure (LEX) berkaitan dengan konsentrasi eksposur kredit kepada debitur besar. Penyusunan dan analisis laporan ini merupakan tugas utama dari Spesialis Kredit, bukan Spesialis Likuiditas & Pasar."
  },
  {
    "id": 158,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Tahapan Penilaian Kemampuan dan Kepatutan new entry:",
    "options": [
      "Identifikasi dokumen, penelitian administratif dan hasil PKK",
      "Absensi dokumen, identifikasi dokumen dan hasil PKK",
      "Identifikasi dokumen, penelitian administratif, permintaan rekomendasi dan track record, hasil PKK",
      "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK"
    ],
    "answer": "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK",
    "explanation": "Proses Penilaian Kemampuan dan Kepatutan (PKK) atau *Fit and Proper Test* dimulai dari tahap pengecekan kelengkapan (absensi) dan identifikasi dokumen, dilanjutkan dengan penelitian administratif atas dokumen tersebut, sebelum diakhiri dengan wawancara dan penetapan hasil PKK."
  },
  {
    "id": 159,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Pihak yang termasuk dalam kategori Pemegang Saham Pengendali adalah sebagai berikut, kecuali:",
    "options": [
      "Orang dan/atau badan hukum yang melakukan pembelian... sehingga memiliki saham sebesar 25%",
      "Orang dan/atau badan hukum yang akan menjadi PS Bank hasil peleburan (konsolidasi)",
      "Orang dan/atau badan hukum yang digolongkan sebagai pengendali Bank karena adanya perubahan struktur kelompok usaha Bank",
      "Orang dan/atau badan hukum yang akan menjadi PSP pada Bank hasil penggabungan (merger)"
    ],
    "answer": "Orang dan/atau badan hukum yang akan menjadi PS Bank hasil peleburan (konsolidasi)",
    "explanation": "Pemegang Saham Pengendali (PSP) didefinisikan berdasarkan kepemilikan saham (>=25%) atau kemampuan untuk mengendalikan bank. Menjadi pemegang saham (PS) di bank hasil konsolidasi tidak secara otomatis menjadikannya PSP, kecuali memenuhi kriteria pengendalian tersebut."
  },
  {
    "id": 160,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Sesuai dengan SEDK 6/SEDK.02/2024 Tentang Perubahan Atas SEDK Nomor 19/SEDK.02/2023 Tentang Organisasi Bidang Strategis bahwa Kantor OJK Dibagi menjadi Kantor OJK Koordinator dan Kantor OJK Non-Koordinator. Dibawah ini merupakan rincian Kantor OJK Koordinator, kecuali:",
    "options": [
      "Kantor OJK Provinsi Kalimantan Selatan",
      "Kantor OJK Provinsi Sumatera Selatan",
      "Kantor OJK Provinsi Sulawesi Selatan dan Sulawesi Barat",
      "Kantor OJK Provinsi Jawa Barat"
    ],
    "answer": "Kantor OJK Provinsi Kalimantan Selatan",
    "explanation": "Berdasarkan reorganisasi OJK, beberapa Kantor OJK Provinsi ditetapkan sebagai koordinator untuk wilayah yang lebih luas. Kantor OJK Kalsel tidak termasuk dalam daftar Kantor OJK Koordinator utama tersebut."
  },
  {
    "id": 161,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Calon anggota Direksi Perbankan Syariah wajib memiliki pengetahuan dan pemahaman tentang peraturan dan operasional perbankan syariah, antara lain dibuktikan dengan:",
    "options": [
      "Sertifikat pelatihan dari DSN MUI",
      "Sertifikat pembicara seminar perbankan syariah",
      "Sertifikat pelatihan dari LPPOM MUI",
      "Sertifikat pelatihan perbankan syariah"
    ],
    "answer": "Sertifikat pelatihan perbankan syariah",
    "explanation": "Untuk membuktikan kompetensi, calon direksi harus menunjukkan bukti formal telah mengikuti pendidikan atau pelatihan di bidang perbankan syariah dari lembaga yang kredibel. Sertifikat pelatihan adalah bukti yang paling umum diterima."
  },
  {
    "id": 162,
    "version": 2,
    "category": "Laporan & Akuntansi",
    "question": "Laporan yang disampaikan bank kepada OJK terdiri dari laporan:",
    "options": [
      "Berkala dan insidental",
      "Pdf dan txt",
      "Rutin dan sewaktu-waktu",
      "Terstruktur dan tidak terstruktur"
    ],
    "answer": "Terstruktur dan tidak terstruktur",
    "explanation": "Jenis laporan yang disampaikan bank kepada OJK dapat dibedakan berdasarkan formatnya. Laporan terstruktur memiliki format baku (misalnya LBUS dalam bentuk file teks), sedangkan laporan tidak terstruktur formatnya lebih bebas (misalnya surat penjelasan atau laporan dalam format PDF)."
  },
  {
    "id": 163,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Satuan kerja pengawasan perbankan meminta pendapat KSP untuk perizinan produk, hal tersebut merupakan tugas pokok dan fungsi KSP yang mana?",
    "options": [
      "Melakukan pemeriksaan khusus...",
      "Melakukan koordinasi dan memimpin pertemuan...",
      "Memberikan dukungan kepada Satuan Kerja yang melaksanakan fungsi pengawasan bank dalam rangka perizinan produk dan aktivitas perbankan;",
      "Memberikan dukungan kepada Satuan Kerja terkait dalam rangka pelaksanaan quality assurance..."
    ],
    "answer": "Memberikan dukungan kepada Satuan Kerja yang melaksanakan fungsi pengawasan bank dalam rangka perizinan produk dan aktivitas perbankan;",
    "explanation": "Salah satu fungsi utama Kelompok Spesialis (KSP) adalah sebagai 'center of excellence' yang memberikan dukungan dan pendapat ahli kepada satuan kerja pengawas, terutama untuk hal-hal yang memerlukan keahlian spesifik seperti perizinan produk baru yang kompleks."
  },
  {
    "id": 164,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Perbuatan berikut yang bukan merupakan PKP di bidang perkreditan/ pembiayaan adalah",
    "options": [
      "Pelunasan/pembayaran angsuran kredit tanpa disertai aliran dana.",
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Mark up taksasi agunan.",
      "Pelanggaran BMPK."
    ],
    "answer": "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
    "explanation": "Pilihan a, c, dan d adalah contoh penyimpangan yang secara langsung terkait dengan proses kredit (rekayasa pelunasan, penilaian agunan, dan batas pemberian kredit). Pilihan b adalah penyimpangan di bidang operasional atau kas (fraud operasional), bukan spesifik di bidang kredit."
  },
  {
    "id": 165,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Kerangka tata kelola syariah bagi BUS dan UUS terdiri dari:",
    "options": [
      "DPS, kepatuhan dan manajemen risiko syariah, audit intern syariah, audit ekstern syariah",
      "DPS, komite syariah, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah",
      "DPS, kepatuhan syariah, komite syariah, audit intern syariah, audit ekstern syariah",
      "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah"
    ],
    "answer": "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah",
    "explanation": "Sesuai POJK tentang Penerapan Tata Kelola Syariah, kerangka ini dibangun berdasarkan beberapa pilar utama yang memastikan kepatuhan syariah, mulai dari pengawasan oleh DPS, fungsi kepatuhan dan manajemen risiko, hingga verifikasi oleh audit internal dan kaji ulang oleh auditor eksternal."
  },
  {
    "id": 166,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Dalam memetakan potensi komoditas unggulan, khususnya komoditas agrikultur, KOJK perlu memperhatikan paling sedikit faktor berikut, kecuali:",
    "options": [
      "Komoditas berada pada top 5 komoditas ekspor utama daerah",
      "Komoditas berada pada top 5 produksi komoditas agrikultur nasional",
      "Komoditas merupakan bagian dari subsektor ekonomi unggulan",
      "Komoditas berada pada top 10 komoditas ekspor utama daerah"
    ],
    "answer": "Komoditas berada pada top 5 komoditas ekspor utama daerah",
    "explanation": "Kriteria utama dalam pemetaan adalah komoditas tersebut merupakan bagian dari subsektor ekonomi unggulan daerah dan memiliki potensi pasar yang jelas. Menjadi top 5 komoditas ekspor utama adalah salah satu faktor penting yang harus diperhatikan, sehingga ini bukan merupakan pengecualian."
  },
  {
    "id": 167,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Yang dimaksud SKAI sesuai POJK 1/POJK.03/2019 tentang penerapan fungsi audit intern pada bank umum, yaitu",
    "options": [
      "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntansi dan pembukuan serta audit intern bank secara independen",
      "Satuan Kerja Akuntan Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntan dan pembukuan bank secara intern",
      "Satuan Kerja Audit Independen, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern secara independen",
      "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern"
    ],
    "answer": "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern",
    "explanation": "SKAI adalah singkatan dari Satuan Kerja Audit Intern. Definisinya secara tepat adalah unit kerja yang bertanggung jawab untuk menjalankan fungsi audit intern di dalam bank, sebagaimana diatur dalam POJK tersebut."
  },
  {
    "id": 168,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Bentuk mekanisme penetapan sektor ekonomi unggulan dalam program pengembangan ekonomi daerah yang dapat menjadi landasan pembentukan Perjanjian Kerja Sama adalah:",
    "options": [
      "Analisis LQ/DLQ",
      "Analisis NPL",
      "Pelaksanaan FGD dengan stakeholder",
      "Analisis shift share"
    ],
    "answer": "Pelaksanaan FGD dengan stakeholder",
    "explanation": "Analisis kuantitatif (LQ, NPL, shift share) adalah data pendukung. Namun, landasan untuk membuat Perjanjian Kerja Sama (PKS) yang melibatkan banyak pihak (pemerintah daerah, LJK, petani, offtaker) adalah kesepakatan bersama yang dicapai melalui dialog, yang difasilitasi dalam Forum Group Discussion (FGD)."
  },
  {
    "id": 169,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Pada POJK LPIP, pasal berapa yang menyebutkan bahwa LPIP diminta untuk menghasilkan informasi perkreditan yang memiliki nilai tambah?",
    "options": [
      "Pasal 60 ayat 3",
      "Pasal 61 ayat 1",
      "Pasal 60 ayat 1",
      "Pasal 61 ayat 3"
    ],
    "answer": "Pasal 60 ayat 1",
    "explanation": "Secara spesifik, POJK No. 5/POJK.03/2022 Pasal 60 ayat (1) menyatakan bahwa 'LPIP wajib menghasilkan Informasi Perkreditan yang memiliki nilai tambah', yang menjadi dasar bagi LPIP untuk mengembangkan produk dan layanannya."
  },
  {
    "id": 170,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "OJK dapat menghentikan penilaian kemampuan dan kepatutan pihak utama BPR atau BPR Syariah apabila",
    "options": [
      "Tidak sedang menjalani proses hukum",
      "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK",
      "Berkomitmen terhadap pengembangan operasional BPR yang sehat",
      "Tidak sedang dalam proses penilaian kembali karena terdapat indikasi permasalahan integritas"
    ],
    "answer": "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK",
    "explanation": "Untuk efisiensi dan menghindari tumpang tindih, jika seorang calon sedang menjalani proses Fit and Proper Test (PKK) di satu LJK, OJK dapat menunda atau menghentikan proses PKK untuk posisi lain di LJK yang berbeda sampai proses yang pertama selesai."
  },
  {
    "id": 171,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Berapa modal inti minimum yang harus dipenuhi BPR/S untuk dapat melakukan penawaran umum efek melalui pasar modal?",
    "options": [
      "Rp100 miliar",
      "Rp80 miliar",
      "Rp25 miliar",
      "Rp50 miliar"
    ],
    "answer": "Rp80 miliar",
    "explanation": "OJK telah menetapkan persyaratan modal inti minimum bagi BPR/S yang ingin mencari sumber pendanaan melalui penawaran umum di pasar modal (go public), sebagai salah satu syarat untuk memastikan kesiapan dan skala usaha bank."
  },
  {
    "id": 172,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Berikut ini adalah aplikasi produk yang tepat dari konsep dasar bank syariah dalam penyaluran dana, dimana bank berfungsi sebagai investor/financing provider, kecuali:",
    "options": [
      "Pembiayaan Prinsip Bagi Hasil (Mudharabah, Musyarakah)",
      "Pembiayaan Prinsip Jasa (Qardh, Wakaf)",
      "Pembiayaan Prinsip Jual Beli (Murabahah, Salam, Istishna)",
      "Pembiayaan Prinsip Sewa (Ijarah, Ijarah Muntahiya Bil at-Tamlik)"
    ],
    "answer": "Pembiayaan Prinsip Jasa (Qardh, Wakaf)",
    "explanation": "Akad jual beli, bagi hasil, dan sewa adalah skema pembiayaan produktif di mana bank bertindak sebagai penyedia dana/investor. Sebaliknya, Qardh adalah pinjaman kebajikan (tanpa imbalan) dan Wakaf adalah kegiatan sosial, bukan pembiayaan komersial."
  },
  {
    "id": 173,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Wilayah jaringan kantor BPR/S hasil penggabungan/peleburan paling luas berlokasi dalam satu wilayah",
    "options": [
      "Kabupaten/Kota",
      "Provinsi",
      "Negara",
      "Pulau atau kepulauan utama"
    ],
    "answer": "Pulau atau kepulauan utama",
    "explanation": "Untuk mendukung skala ekonomi yang lebih besar dan jangkauan layanan yang lebih luas, regulasi memungkinkan BPR/S hasil konsolidasi untuk memiliki jaringan kantor yang mencakup satu wilayah pulau atau kepulauan utama, seperti Jawa, Sumatera, dll."
  },
  {
    "id": 174,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Yang termasuk dalam tugas pokok dan fungsi KSP pada departemen DRPD adalah",
    "options": [
      "Koordinasi dan Konsolidasi Bank Umum Daerah...",
      "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan...",
      "Pemeriksaan Khusus, Pelimpahan dan Pelaporan Dugaan Tipibank...",
      "Konsolidasi BPR/S dan Grup, Koordinasi dan Asistensi Pengawasan BPR/S, Koordinasi Dalam Rangka Penanganan BPR/S Bermasalah"
    ],
    "answer": "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian",
    "explanation": "Kelompok Spesialis (KSP) berfungsi sebagai pusat keahlian (*center of excellence*) yang memberikan dukungan substantif kepada pengawas, seperti melakukan pemeriksaan khusus, menyusun kajian mendalam, dan meningkatkan kualitas pengawasan melalui berbagai forum."
  },
  {
    "id": 175,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Tahapan keempat pada Siklus Pengawasan Bank Berdasarkan Risiko adalah",
    "options": [
      "Pemeriksaan Berdasarkan Risiko",
      "Monitoring",
      "Penilaian Tingkat Kesehatan",
      "Pemahaman Terhadap Bank"
    ],
    "answer": "Pemeriksaan Berdasarkan Risiko",
    "explanation": "Siklus pengawasan berbasis risiko (Risk-Based Supervision) memiliki 5 tahapan: 1) Pemahaman Bank, 2) Perencanaan Pengawasan, 3) Penilaian Profil Risiko, 4) Pemeriksaan Berdasarkan Risiko, dan 5) Tindakan Pengawasan dan Pemantauan."
  },
  {
    "id": 176,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:",
    "options": [
      "Meningkatkan fungsi intermediasi",
      "Meningkatkan fungsi Surveilans",
      "Meningkatkan fungsi Pengawasan Bank",
      "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis"
    ],
    "answer": "Meningkatkan fungsi intermediasi",
    "explanation": "Stress test adalah alat untuk mengukur ketahanan bank terhadap skenario krisis. Tujuannya adalah untuk surveilans (memantau kesehatan industri), pengawasan (menilai kecukupan modal bank individu), dan manajemen krisis. Stress test tidak secara langsung bertujuan untuk meningkatkan fungsi intermediasi (penyaluran kredit)."
  },
  {
    "id": 177,
    "version": 2,
    "category": "Konsolidasi & Korporasi",
    "question": "Perubahan kepemilikan yang mengakibatkan beralihnya pengendalian BPR atau BPR Syariah yang tidak diperlakukan sebagai pengambilalihan, yaitu:",
    "options": [
      "Penambahan modal disetor dengan fresh money yang mengakibatkan beralihnya pengendalian BPR atau BPR Syariah",
      "Perubahan kepemilikan saham yang mengakibatkan kepemilikan saham terbesar pada BPR atau BPR Syariah",
      "Perubahan kepemilikan saham yang tidak melebihi pemegang saham terbesar namun menentukan baik langsung atau tidak langsung pengelolaan dan/atau kebijakan BPR atau BPR Syariah",
      "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah"
    ],
    "answer": "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah",
    "explanation": "Pengambilalihan (akuisisi) adalah aksi korporasi yang terencana. Peralihan kepemilikan karena sebab hukum seperti waris atau hibah tidak melalui mekanisme pasar atau negosiasi bisnis, sehingga tidak dikategorikan sebagai pengambilalihan dan memiliki prosedur perizinan yang berbeda."
  },
  {
    "id": 178,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Aplikasi OJK yang digunakan untuk melakukan Pendaftaran Akuntan Publik / Kantor Akuntan Publik di OJK:",
    "options": [
      "SPRINT",
      "SIPO",
      "SLIK",
      "SIELOG",
      "SIPUTRI"
    ],
    "answer": "SPRINT",
    "explanation": "SPRINT (Sistem Perizinan dan Registrasi Terintegrasi) adalah platform digital yang digunakan OJK untuk proses perizinan dan pendaftaran berbagai profesi dan lembaga penunjang di sektor jasa keuangan, termasuk Akuntan Publik."
  },
  {
    "id": 179,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Berapa batas waktu konsolidasi BPR non-pemda yang diatur di dalam POJK 7 Tahun 2024?",
    "options": [
      "6 bulan",
      "1 tahun",
      "3 tahun",
      "2 tahun"
    ],
    "answer": "3 tahun",
    "explanation": "POJK No. 7 Tahun 2024 tentang Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah menetapkan peta jalan penguatan industri, termasuk batas waktu pemenuhan modal inti yang mendorong proses konsolidasi dalam jangka waktu tertentu."
  },
  {
    "id": 180,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Status Tekanan Pemantauan di Sektor Perbankan dibedakan menjadi:",
    "options": [
      "Normal, Waspada, Siaga, dan Krisis Industri Perbankan",
      "Normal, Waspada, Siaga dan Krisis Seluruh Sektor",
      "Normal, Waspada, Siaga, dan Krisis",
      "Normal Biasa, Normal Waspada, Normal Siaga, dan Krisis Industri Perbankan"
    ],
    "answer": "Normal Biasa, Normal Waspada, Normal Siaga, dan Krisis Industri Perbankan",
    "explanation": "Dalam mekanisme pemantauan krisis, OJK menggunakan klasifikasi status yang lebih rinci untuk menggambarkan tingkat tekanan di sektor perbankan, mulai dari kondisi normal hingga krisis, yang menjadi dasar bagi OJK untuk mengambil tindakan yang sesuai."
  },
  {
    "id": 181,
    "version": 2,
    "category": "Konglomerasi Keuangan",
    "question": "Aplikasi Pengawasan Konglomerasi Keuangan saat ini, disebut:",
    "options": [
      "Sistem Informasi Pengawasan Terkoordinasi",
      "Sistem Informasi Pengawasan Terpadu",
      "Sistem Informasi Pengawasan Terintegrasi",
      "Sistem Informasi Pengawasan Terkini"
    ],
    "answer": "Sistem Informasi Pengawasan Terintegrasi",
    "explanation": "Pengawasan konglomerasi keuangan bersifat 'terintegrasi' karena melihat risiko secara menyeluruh dari semua LJK dalam satu grup. Oleh karena itu, aplikasi pendukungnya disebut Sistem Informasi Pengawasan Terintegrasi (SIPT)."
  },
  {
    "id": 182,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Kualitas aset produktif BPR Syariah dalam bentuk penempatan pada bank lain dibedakan atas:",
    "options": [
      "Lancar, diragukan, dalam perhatian khusus",
      "Lancar, dalam perhatian khusus, macet",
      "Lancar, diragukan, macet",
      "Lancar, kurang lancar, macet"
    ],
    "answer": "Lancar, kurang lancar, macet",
    "explanation": "Untuk penempatan dana pada bank lain, kolektibilitasnya mengikuti standar umum kualitas aset, yaitu Lancar, Kurang Lancar, Diragukan, dan Macet. Namun, untuk BPR Syariah, seringkali disederhanakan menjadi tiga kategori utama: Lancar, Kurang Lancar, dan Macet."
  },
  {
    "id": 183,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Total eksposur Bank dalam penetapan status sistemik terdiri dari beberapa komponen berikut, kecuali:",
    "options": [
      "Eksposur pada rekening administratif (off-balance sheet exposure)",
      "Pajak penghasilan tangguhan (deferred tax)",
      "Potential future exposure dari transaksi derivative",
      "Eksposur pada neraca (on-balance sheet exposure)"
    ],
    "answer": "Pajak penghasilan tangguhan (deferred tax)",
    "explanation": "Penetapan bank sistemik didasarkan pada ukuran, keterkaitan, dan kompleksitas. Total eksposur mencakup semua tagihan baik on-balance sheet, off-balance sheet, maupun potensi eksposur derivatif. Aset pajak tangguhan tidak termasuk dalam perhitungan ini karena tidak mencerminkan eksposur risiko kepada pihak ketiga."
  },
  {
    "id": 184,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Indikator yang menunjukkan hubungan antara sektor dari sisi penyediaan input produksi, dikenal sebagai indikator:",
    "options": [
      "Forward-Linkage",
      "Tidak ada yang benar",
      "Backward-Linkage",
      "Intermediary-Linkage"
    ],
    "answer": "Backward-Linkage",
    "explanation": "Dalam analisis input-output, 'Backward Linkage' (keterkaitan ke belakang) mengukur sejauh mana suatu sektor ekonomi membeli input (bahan baku, jasa) dari sektor-sektor lain dalam perekonomian."
  },
  {
    "id": 185,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Pihak yang berwenang dalam suatu bank syariah (intern) yang bertugas memberikan nasihat dan saran kepada Direksi serta mengawasi kegiatan bank agar sesuai dengan prinsip syariah dan melaporkan hal tersebut kepada Bank Indonesia setiap enam bulan sekali adalah:",
    "options": [
      "Dewan Perbankan Syariah",
      "Dewan Syariah Nasional",
      "Dewan Pengawas Syariah",
      "Komite Perbankan Syariah"
    ],
    "answer": "Dewan Pengawas Syariah",
    "explanation": "Ini adalah definisi dari tugas dan fungsi Dewan Pengawas Syariah (DPS). DPS adalah organ internal bank yang memastikan seluruh kegiatan operasional bank berjalan sesuai dengan prinsip-prinsip syariah."
  },
  {
    "id": 186,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Berikut ini yang merupakan ketentuan terkait konsolidasi BPR/BPRS , kecuali",
    "options": [
      "POJK No.21/POJK.03/2019",
      "UU No.4 tahun 2023",
      "POJK No.62/POJK.03/2020",
      "UU P2SK",
      "Semua benar"
    ],
    "answer": "Semua benar",
    "explanation": "Semua peraturan yang disebutkan memiliki keterkaitan dengan konsolidasi BPR/BPRS. UU P2SK menjadi landasan hukum utama, POJK 62/2020 mengatur tentang BPR/BPRS secara umum, dan POJK 21/2019, meskipun untuk Bank Umum, sering menjadi rujukan prinsip-prinsip aksi korporasi."
  },
  {
    "id": 187,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Fungsi asistensi pemeriksaan BUD merupakan sub tugas dari unit kerja Direktorat Koordinasi Pengawasan Bank Umum Daerah yaitu",
    "options": [
      "Pemeriksaan Khusus",
      "Pengelolaan Database",
      "Pengembangan penanganan Tipibank",
      "Koordinasi Pengawasan BUD"
    ],
    "answer": "Koordinasi Pengawasan BUD",
    "explanation": "Asistensi pemeriksaan adalah bagian dari fungsi koordinasi pengawasan. Unit ini membantu dan memastikan bahwa proses pemeriksaan yang dilakukan oleh tim pengawas di lapangan berjalan sesuai dengan metodologi dan fokus pengawasan yang telah ditetapkan untuk Bank Umum Daerah (BUD)."
  },
  {
    "id": 188,
    "version": 2,
    "category": "Regulasi & Kepatuhan",
    "question": "Ketentuan terkait suku bunga dasar kredit terkini diatur dalam:",
    "options": [
      "POJK 37/POJK.03/2019",
      "POJK 13 Tahun 2024",
      "POJK 63/POJK.03/2020",
      "POJK 15 Tahun 2024"
    ],
    "answer": "POJK 13 Tahun 2024",
    "explanation": "OJK secara berkala memperbarui ketentuan untuk meningkatkan transparansi. POJK Nomor 13 Tahun 2024 adalah regulasi terbaru yang mengatur tentang Transparansi Suku Bunga Dasar Kredit (SBDK) bagi Bank Umum."
  },
  {
    "id": 189,
    "version": 2,
    "category": "Kelembagaan & Perizinan",
    "question": "Penyelenggaraan jaringan kantor di bawah ini yang menggunakan mekanisme perizinan, yaitu:",
    "options": [
      "Pemindahan alamat KC",
      "Penutupan KCP",
      "Perubahan status KCP menjadi KC",
      "Perubahan status KC menjadi KCP"
    ],
    "answer": "Perubahan status KCP menjadi KC",
    "explanation": "Perubahan status dari Kantor Cabang Pembantu (KCP) menjadi Kantor Cabang (KC) merupakan peningkatan skala operasional dan kewenangan. Peningkatan ini memerlukan proses perizinan dari OJK, sedangkan penurunan status (KC menjadi KCP) atau penutupan KCP umumnya hanya memerlukan pelaporan."
  },
  {
    "id": 190,
    "version": 2,
    "category": "Operasional Bank",
    "question": "Pernyataan yang tidak benar mengenai sinergi perbankan, yaitu:",
    "options": [
      "Sinergi perbankan hanya dapat dilakukan oleh bank-bank dalam satu grup atau memiliki hubungan kepemilikan",
      "Sinergi perbankan dapat dilakukan di bidang IT, SDM, jaringan kantor, jaringan komunikasi, pelaporan, audit",
      "Sinergi yang melibatkan bank syariah harus mendapatkan opini/persetujuan dari Dewan Pengawas Syariah",
      "Sinergi perbankan dapat dilakukan atas izin OJK"
    ],
    "answer": "Sinergi perbankan dapat dilakukan atas izin OJK",
    "explanation": "Pernyataan ini tidak sepenuhnya benar karena tidak semua bentuk sinergi atau kerja sama antar bank memerlukan izin khusus. Banyak sinergi operasional yang merupakan keputusan bisnis, selama tetap mematuhi seluruh peraturan yang berlaku. Izin OJK diperlukan untuk aksi korporasi besar seperti merger atau akuisisi."
  },
  {
    "id": 191,
    "version": 2,
    "category": "BPR & BPRS",
    "question": "Perlakuan BMPD yang berlaku khusus untuk BPR Syariah yaitu:",
    "options": [
      "Pengecualian penggolongan kelompok untuk organisasi sosial",
      "Pengecualian perhitungan BMPD untuk nasabah investor",
      "Pengecualian penggolongan kelompok untuk pola kemitraan inti plasma",
      "Pengecualian perhitungan BMPD pihak terkait dalam rangka kesejahteraan"
    ],
    "answer": "Pengecualian perhitungan BMPD untuk nasabah investor",
    "explanation": "Dalam akad syariah tertentu seperti mudharabah, nasabah dapat bertindak sebagai investor (*shahibul mal*). Terdapat ketentuan khusus dalam perhitungan Batas Maksimum Penyaluran Dana (BMPD) untuk penempatan dana dari nasabah investor ini yang membedakannya dari BPR konvensional."
  },
  {
    "id": 192,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Pengertian Fraud menurut International Standards of Auditing adalah",
    "options": [
      "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipuan untuk memperoleh keuntungan yang tidak adil atau illegal.",
      "Semua benar",
      "Kejahatan sengaja yang sangat cerdik dalam industri perbankan melalui pelanggaran ketentuan internal dengan menekan, menipu ataupun cara-cara lain untuk mendapatkan keuntungan",
      "Tindakan sengaja melanggar ketentuan internal (system & procedure) & peraturan perundang undangan yang berlaku, demi kepentingan pribadi atau pihak lain yang berpotensi merugikan baik material maupun non material (moril)"
    ],
    "answer": "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipuan untuk memperoleh keuntungan yang tidak adil atau illegal.",
    "explanation": "Ini adalah definisi fraud yang paling formal dan diakui secara internasional dalam standar audit (ISA 240). Definisi ini menekankan pada unsur 'kesengajaan' (intentional act) dan 'penipuan' (deception) untuk memperoleh keuntungan yang tidak sah."
  },
  {
    "id": 193,
    "version": 2,
    "category": "Perbankan Syariah",
    "question": "Apabila suatu BUS mengajukan produk baru bagi BUS karena belum pernah dilaksanakan tetapi telah masuk dalam kodifikasi produk/aktivitas BUS/UUS sebagaimana SEOJK No.36/SEOJK.03/2015, maka langkah yang tepat dilakukan oleh bank adalah:",
    "options": [
      "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah dan Bank Konvensional OJK karena terdapat hubungan kepemilikan induk dan anak usaha",
      "Mengajukan persetujuan pelaksanaan produk baru kepada Perizinan Perbankan Syariah OJK",
      "Mengajukan izin pelaksanaan produk/aktivitas baru kepada Pengawas dan Perizinan Perbankan Syariah OJK",
      "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah OJK"
    ],
    "answer": "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah OJK",
    "explanation": "Jika suatu produk sudah ada dalam daftar kodifikasi OJK (artinya sudah umum di industri), maka bank yang baru pertama kali akan meluncurkannya tidak perlu lagi mengajukan izin baru, tetapi cukup melaporkan rencana pelaksanaannya kepada pengawas terkait."
  },
  {
    "id": 194,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Life cycle Bank pada siklus pengawasan adalah:",
    "options": [
      "Perizinan, Pengembangan, Operasional",
      "Pendirian, Pengawasan, Exit Policy",
      "Perizinan, Pengawasan, Exit Policy",
      "Pendirian, Pengawasan, Likuidasi"
    ],
    "answer": "Perizinan, Pengawasan, Exit Policy",
    "explanation": "Siklus hidup (life cycle) sebuah bank dari sudut pandang regulator meliputi tiga fase utama: (1) Fase masuk (entry) melalui proses Perizinan, (2) Fase operasional yang terus menerus dalam Pengawasan, dan (3) Fase keluar (exit) melalui berbagai mekanisme seperti merger, likuidasi, atau pencabutan izin (Exit Policy)."
  },
  {
    "id": 195,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Berikut ini termasuk prinsip dalam penyusunan Integrated Supervisory Plan, kecuali:",
    "options": [
      "Specific",
      "Relevant",
      "Actual",
      "Achievable"
    ],
    "answer": "Actual",
    "explanation": "Prinsip penyusunan rencana pengawasan yang baik mengikuti kaidah SMART: Specific (Spesifik), Measurable (Terukur), Achievable (Dapat Dicapai), Relevant (Relevan), dan Timely (Ada Batas Waktu). 'Actual' bukan merupakan bagian dari prinsip SMART."
  },
  {
    "id": 196,
    "version": 2,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Obyek Penilaian Kemampuan dan Kepatutan new entry, adalah calon:",
    "options": [
      "Pemegang Saham Pengendali, Dewan Komisaris dan Pejabat Eksekutif",
      "Pemegang Saham Pengendali, Dewan Komisaris, Direksi dan Pejabat Eksekutif",
      "Dewan Komisaris, Direksi dan Pejabat Eksekutif",
      "Pemegang Saham Pengendali, Dewan Komisaris dan Direksi"
    ],
    "answer": "Pemegang Saham Pengendali, Dewan Komisaris dan Direksi",
    "explanation": "Fit and Proper Test (PKK) diwajibkan bagi Pihak Utama bank yang mencakup pihak-pihak yang memiliki kendali dan tanggung jawab strategis, yaitu Pemegang Saham Pengendali (PSP), serta seluruh anggota Dewan Komisaris dan Direksi."
  },
  {
    "id": 197,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah",
    "options": [
      "Strategy",
      "Timely",
      "Relevant",
      "Measurable"
    ],
    "answer": "Strategy",
    "explanation": "Prinsip SMART terdiri dari Specific, Measurable, Achievable, Relevant, dan Timely. 'Strategy' adalah hasil atau bagian dari rencana itu sendiri, bukan merupakan salah satu kriteria dalam akronim SMART."
  },
  {
    "id": 198,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Pengawasan Bank yang menggunakan strategi dan metodologi berdasarkan risiko yang memungkinkan pengawas Bank untuk mendeteksi risiko yang signifikan secara dini dan mengambil tindakan pengawasan yang sesuai dan tepat waktu merupakan definisi dari",
    "options": [
      "Pengawasan Bank Berbasis Risiko",
      "Perencanaan Pemeriksaan Berbasis Risiko",
      "Know Your Bank",
      "Supervisory Action dan Monitoring"
    ],
    "answer": "Pengawasan Bank Berbasis Risiko",
    "explanation": "Ini adalah definisi textbook dari Pengawasan Bank Berbasis Risiko atau Risk-Based Supervision (RBS). Fokusnya adalah pada identifikasi dan mitigasi risiko-risiko terbesar yang dihadapi bank, sehingga alokasi sumber daya pengawasan menjadi lebih efisien dan efektif."
  },
  {
    "id": 199,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Aspek layak investasi adalah:",
    "options": [
      "Semua jawaban salah",
      "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi",
      "Program dapat diimplementasikan dan berlangsung secara kontinu untuk memberikan manfaat bagi pemerintah maupun masyarakat daerah setempat",
      "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana"
    ],
    "answer": "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana",
    "explanation": "Suatu program dianggap layak investasi (*bankable*) jika dapat memberikan keuntungan atau dampak ekonomis yang positif dan terukur bagi semua pihak yang terlibat, baik bagi debitur (penerima manfaat) maupun bagi kreditur (penyedia dana), sehingga menciptakan siklus bisnis yang berkelanjutan."
  },
  {
    "id": 200,
    "version": 2,
    "category": "Pengawasan Bank",
    "question": "Desain implementasi Program Pengembangan Ekonomi Daerah merupakan salah satu media dalam mencapai visi Asta Cita Pemerintah. Pada tahun 2024, fokus program yang telah dilaksanakan oleh Kantor OJK secara spesifik telah mendukung visi:",
    "options": [
      "Pelestarian seni budaya, peningkatan ekonomi kreatif, dan peningkatan prestasi olahraga",
      "Melanjutkan hilirisasi dan industrialisasi berbasis SDA dan maritim dalam membuka lapangan pekerjaan seluas-luasnya dalam mewujudkan keadilan ekonomi",
      "A dan B benar",
      "Mencapai swasembada pangan, energi, dan air"
    ],
    "answer": "A dan B benar",
    "explanation": "Program Pengembangan Ekonomi Daerah (PED) oleh OJK dirancang untuk mendukung berbagai program prioritas pemerintah (Asta Cita). Fokusnya sangat luas, mencakup pencapaian swasembada pangan (misalnya melalui ekosistem pertanian), hilirisasi SDA, hingga pengembangan ekonomi kreatif di daerah."
  },
    
  // SOAL VERSI 3 
  {
    "id": 201,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Bagi Dana Pensiun yang berbentuk perusahaan publik, penggunaan jasa dari Akuntan Publik (AP) yang sama dibatasi selama...",
    "options": [
      "5 tahun berturut-turut",
      "7 tahun kumulatif",
      "3 tahun kumulatif",
      "10 tahun berturut-turut"
    ],
    "answer": "7 tahun kumulatif",
    "explanation": "Penggunaan jasa dari Akuntan Publik (AP) yang sama oleh Dana Pensiun publik dibatasi secara kumulatif selama 7 tahun untuk menjaga independensi auditor dalam jangka panjang."
  },
  {
    "id": 202,
    "version": 3,
    "category": "SDM Perbankan",
    "question": "Apa tujuan utama dari pengaturan pemanfaatan Tenaga Kerja Asing (TKA) di sektor perbankan?",
    "options": [
      "Mengurangi biaya operasional bank",
      "Memenuhi kuota tenaga kerja asing dari pemerintah",
      "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)",
      "Membuka lapangan kerja baru untuk warga negara asing"
    ],
    "answer": "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)",
    "explanation": "TKA diharapkan membawa keahlian spesifik yang dapat meningkatkan daya saing bank, dengan kewajiban untuk mentransfer pengetahuannya kepada tenaga kerja lokal."
  },
  {
    "id": 203,
    "version": 3,
    "category": "Laporan & Akuntansi",
    "question": "Menurut pendapat Saudara, mengapa laporan realisasi RBB dan laporan pengawasan RBB perlu digabungkan?",
    "options": [
      "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.",
      "Untuk mengurangi jumlah halaman laporan yang dikirim ke OJK.",
      "Karena diwajibkan oleh standar akuntansi internasional.",
      "Untuk menyembunyikan temuan pengawasan dari direksi."
    ],
    "answer": "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.",
    "explanation": "Penggabungan ini memungkinkan OJK untuk melihat realisasi Rencana Bisnis Bank (RBB) secara langsung bersamaan dengan evaluasi dari dewan komisaris, sehingga analisis lebih komprehensif dan proses pelaporan lebih efisien."
  },
  {
    "id": 204,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Berapa persentase KPMM minimum yang wajib dipenuhi oleh BPR?",
    "options": [
      "12% dari ATMR",
      "10% dari Modal Inti",
      "8% dari ATMR",
      "6% dari Modal Inti"
    ],
    "answer": "8% dari ATMR",
    "explanation": "Sesuai ketentuan, 8% dari ATMR adalah batas minimum KPMM. Jika BPR memiliki rasio di bawah ini, akan memicu tindakan pengawasan yang sangat intensif dari OJK karena dianggap memiliki permodalan yang lemah."
  },
  {
    "id": 205,
    "version": 3,
    "category": "Laporan & Akuntansi",
    "question": "Untuk mengetahui detail penjelasan dari angka yang tercantum dalam laporan posisi keuangan di laporan keuangan audited, pengawas dapat melihat:",
    "options": [
      "Laporan laba rugi",
      "Catatan atas laporan keuangan",
      "Laporan perubahan modal",
      "Ringkasan eksekutif"
    ],
    "answer": "Catatan atas laporan keuangan",
    "explanation": "Catatan atas Laporan Keuangan (CaLK) adalah bagian tak terpisahkan dari laporan keuangan yang memberikan rincian dan penjelasan atas pos-pos yang disajikan."
  },
  {
    "id": 206,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/ BPRS, terdapat status pengawasan BDP yang merupakan kepanjangan dari",
    "options": [
      "Bank Dalam Pengawasan",
      "Bank Dalam Perbaikan",
      "Bank Dalam Penyehatan",
      "Bank Dengan Perhatian"
    ],
    "answer": "Bank Dalam Penyehatan",
    "explanation": "BDP adalah singkatan dari Bank Dalam Penyehatan. Status ini ditetapkan OJK bagi BPR/BPRS yang dinilai mengalami kesulitan yang membahayakan kelangsungan usahanya."
  },
  {
    "id": 207,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Apakah definisi Prinsip Syariah dalam UU Perbankan Syariah?",
    "options": [
      "Prinsip hukum Islam dalam kegiatan perbankan berdasarkan fatwa yang dikeluarkan oleh lembaga yang memiliki kewenangan dalam penetapan fatwa di bidang Syariah",
      "Aturan perbankan yang melarang penggunaan bunga secara mutlak",
      "Semua transaksi yang didasarkan pada Al-Quran dan Hadist tanpa interpretasi modern",
      "Prinsip keadilan sosial yang diterapkan dalam produk perbankan"
    ],
    "answer": "Prinsip hukum Islam dalam kegiatan perbankan berdasarkan fatwa yang dikeluarkan oleh lembaga yang memiliki kewenangan dalam penetapan fatwa di bidang Syariah",
    "explanation": "Ini adalah definisi yang tepat sesuai UU Perbankan Syariah. Definisi ini mencakup kegiatan perbankan secara umum yang berlandaskan pada fatwa dari lembaga yang berwenang."
  },
  {
    "id": 208,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Mekanisme Koordinasi dalam rangka pemantauan manajemen krisis memerlukan informasi baik dari sumber informasi internal maupun eksternal, kecuali:",
    "options": [
      "Hasil analisis Satker Pengawas internal",
      "Data dari Laporan Stabilitas Keuangan",
      "Informasi dari asosiasi perbankan",
      "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian"
    ],
    "answer": "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian",
    "explanation": "Informasi makroekonomi eksternal sangat penting sebagai input untuk memantau potensi krisis, sehingga ini bukan pengecualian."
  },
  {
    "id": 209,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Hal-hal apa saja yang perlu tercakup dalam rencana bisnis tahunan LPIP?",
    "options": [
      "Daftar nama karyawan",
      "Proyeksi laporan keuangan",
      "Rencana liburan perusahaan",
      "Jadwal audit internal"
    ],
    "answer": "Proyeksi laporan keuangan",
    "explanation": "Setiap rencana bisnis yang baik harus mencakup proyeksi keuangan untuk mengukur target kinerja dan kelayakan strategi."
  },
  {
    "id": 210,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Metode analisis yang dapat digunakan untuk identifikasi potensi sektor/subsektor, adalah:",
    "options": [
      "Analisis LQ/DLQ",
      "Analisis shift share",
      "Analisis forward & backward linkage",
      "Semua benar"
    ],
    "answer": "Semua benar",
    "explanation": "Semua metode yang disebutkan (shift share, forward & backward linkage, LQ/DLQ) adalah alat analisis ekonomi yang valid untuk memetakan potensi sektor unggulan."
  },
  {
    "id": 211,
    "version": 3,
    "category": "Laporan & Akuntansi",
    "question": "Suku bunga yang secara tepat mendiskontokan estimasi pembayaran atau penerimaan kas di masa datang selama perkiraan umur dari instrumen keuangan, merupakan:",
    "options": [
      "Suku Bunga Dasar Kredit (SBDK)",
      "Suku Bunga Efektif (EIR)",
      "Suku Bunga Acuan BI",
      "Suku Bunga Pasar"
    ],
    "answer": "Suku Bunga Efektif (EIR)",
    "explanation": "Definisi ini sesuai dengan konsep Suku Bunga Efektif (Effective Interest Rate) dalam Standar Akuntansi Keuangan (PSAK)."
  },
  {
    "id": 212,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Dasar penilaian pengawas tidak merubah peringkat risiko inheren operasional pada kasus fraud Rp200 juta di bank dengan modal inti Rp22 Triliun adalah prinsip:",
    "options": [
      "Kepatuhan",
      "Materialitas/Signifikansi",
      "Kehati-hatian",
      "Transparansi"
    ],
    "answer": "Materialitas/Signifikansi",
    "explanation": "Pengawas menilai kerugian bersih Rp100 juta tidak material atau tidak signifikan jika dibandingkan dengan skala operasional dan permodalan bank yang sangat besar."
  },
  {
    "id": 213,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Produk dasar bank umum meliputi:",
    "options": [
      "Hanya penyaluran dana",
      "Hanya penghimpunan dana",
      "Penghimpunan dana, penyaluran dana, dan kegiatan sederhana lainnya.",
      "Investasi saham dan reksa dana"
    ],
    "answer": "Penghimpunan dana, penyaluran dana, dan kegiatan sederhana lainnya.",
    "explanation": "Tiga pilar utama kegiatan bank umum adalah menghimpun dana (simpanan), menyalurkan dana (kredit), dan menyediakan jasa perbankan lainnya (transfer, dll)."
  },
  {
    "id": 214,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Pengaturan terkait Akuntan Publik dan Kantor Akuntan Publik di OJK, yaitu:",
    "options": [
      "Peraturan OJK Nomor 12 Tahun 2021",
      "Undang-Undang Perbankan",
      "Peraturan OJK Nomor 9 Tahun 2023",
      "Surat Edaran Bank Indonesia"
    ],
    "answer": "Peraturan OJK Nomor 9 Tahun 2023",
    "explanation": "POJK Nomor 9 Tahun 2023 secara spesifik mengatur tentang Penggunaan Jasa Akuntan Publik dan Kantor Akuntan Publik dalam Kegiatan Jasa Keuangan."
  },
  {
    "id": 215,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Pendapatan yang diterima dari penempatan pada bank konvensional diakui sebagai:",
    "options": [
      "Pendapatan Operasional",
      "Laba Ditahan",
      "Sumber Dana Kebajikan",
      "Modal Inti"
    ],
    "answer": "Sumber Dana Kebajikan",
    "explanation": "Pendapatan bunga dari bank konvensional dianggap non-halal dan harus disisihkan untuk kegiatan sosial melalui pos Dana Kebajikan."
  },
  {
    "id": 216,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Tujuan utama pembentukan Bank Perantara oleh LPS adalah:",
    "options": [
      "Mengambil alih seluruh bank gagal",
      "Memberikan pinjaman kepada bank yang sehat",
      "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan",
      "Mencetak uang untuk menalangi bank gagal"
    ],
    "answer": "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan",
    "explanation": "Bank Perantara dibentuk untuk mengambil alih sebagian aset dan kewajiban bank gagal yang 'sehat' agar fungsi-fungsi krusialnya tetap berjalan."
  },
  {
    "id": 217,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Penilaian Kemampuan dan Kepatutan new entry adalah:",
    "options": [
      "Proses wawancara kerja standar untuk calon direksi",
      "Ujian sertifikasi yang wajib diikuti oleh semua karyawan bank",
      "Sarana bagi Otoritas Jasa Keuangan untuk memberikan persetujuan atau penolakan terhadap pihak yang akan memiliki atau mengelola bank",
      "Penilaian kinerja tahunan oleh dewan komisaris"
    ],
    "answer": "Sarana bagi Otoritas Jasa Keuangan untuk memberikan persetujuan atau penolakan terhadap pihak yang akan memiliki atau mengelola bank",
    "explanation": "Ini adalah definisi yang paling komprehensif. PKK atau Fit and Proper Test adalah mekanisme OJK untuk menyaring pemilik dan pengelola bank."
  },
  {
    "id": 218,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Di bawah ini yang bukan merupakan prinsip penerapan tata kelola yang baik di bank sebagaimana diatur dalam POJK 17 Tahun 2023 adalah:",
    "options": [
      "Transparansi",
      "Akuntabilitas",
      "Keberlanjutan",
      "Independensi"
    ],
    "answer": "Keberlanjutan",
    "explanation": "Prinsip Keberlanjutan (Sustainability) dianggap sebagai pilar yang lebih baru dibandingkan lima prinsip GCG klasik, sehingga dapat dianggap sebagai jawaban yang dicari dalam konteks 'bukan' prinsip dasar."
  },
  {
    "id": 219,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Di bawah ini, yang termasuk dalam Regulatory Triangle for Promoting Finance Stability adalah:",
    "options": [
      "Pengaturan dan Pengawasan",
      "Perizinan",
      "Pengaturan dan Perizinan",
      "Semua benar"
    ],
    "answer": "Semua benar",
    "explanation": "Segitiga Regulasi terdiri dari tiga pilar utama: Pengaturan (Regulation), Pengawasan (Supervision), dan Perizinan (Licensing)."
  },
  {
    "id": 220,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Berikut ini yang termasuk jenis perizinan yang tergolong dalam entry kelembagaan:",
    "options": [
      "Pembukaan kantor cabang baru",
      "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.",
      "Perubahan nama dan logo bank",
      "Penerbitan produk digital baru"
    ],
    "answer": "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.",
    "explanation": "Ketiga aktivitas ini (spin-off UUS, konversi, dan pendirian baru) merupakan proses yang melahirkan atau mengubah status fundamental sebuah entitas perbankan."
  },
  {
    "id": 221,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Berikut ini yang termasuk ke dalam komponen Penilaian Integrated Risk Rating, kecuali:",
    "options": [
      "Profil Risiko Terintegrasi",
      "Tingkat Kondisi Terintegrasi",
      "Manajemen Risiko Terintegrasi",
      "Prospek Risiko Terintegrasi"
    ],
    "answer": "Manajemen Risiko Terintegrasi",
    "explanation": "Manajemen Risiko Terintegrasi bukanlah komponen penilaian terpisah, melainkan merupakan bagian dari penilaian 'Profil Risiko Terintegrasi'."
  },
  {
    "id": 222,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "BPR ditetapkan Dalam Status Pengawasan Khusus (DPK) dengan jangka waktu 3 bulan apabila memenuhi kriteria:",
    "options": [
      "Rasio KPMM kurang dari 4%",
      "Rasio NPL di atas 5%",
      "Rasio KPMM kurang dari 8% namun lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%",
      "Mengalami kerugian selama 2 tahun berturut-turut"
    ],
    "answer": "Rasio KPMM kurang dari 8% namun lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%",
    "explanation": "Kriteria ini sesuai dengan ketentuan penetapan DPK untuk jangka waktu 3 bulan, menunjukkan kondisi yang memerlukan perhatian khusus."
  },
  {
    "id": 223,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Fungsi asistensi pemeriksaan BUD merupakan sub tugas dari unit kerja Direktorat Koordinasi Pengawasan Bank Umum Daerah yaitu",
    "options": [
      "Pengembangan Pengawasan BUD",
      "Perizinan BUD",
      "Koordinasi Pengawasan BUD",
      "Analisis Risiko BUD"
    ],
    "answer": "Koordinasi Pengawasan BUD",
    "explanation": "Fungsi asistensi pemeriksaan adalah bagian dari tugas yang lebih luas dari unit yang melakukan koordinasi pengawasan Bank Umum Daerah (BUD)."
  },
  {
    "id": 224,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Dalam penyampaian informasi BPR DPK kepada LPS dilampiri dengan laporan bulanan berupa:",
    "options": [
      "Profil bank, neraca, laporan laba rugi",
      "Laporan audit investigasi",
      "Rencana bisnis 5 tahun ke depan",
      "Daftar nasabah prioritas"
    ],
    "answer": "Profil bank, neraca, laporan laba rugi",
    "explanation": "Ini adalah laporan keuangan dasar yang memberikan gambaran umum. LPS memerlukan informasi ini untuk melakukan evaluasi awal."
  },
  {
    "id": 225,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Di bawah ini merupakan dasar Pencabutan izin usaha Bank BHI dan KCBLN, kecuali:",
    "options": [
      "Permintaan dari pemegang saham",
      "Keputusan OJK karena pelanggaran",
      "Rekomendasi dari LPS",
      "Permintaan dari Bank lainnya"
    ],
    "answer": "Permintaan dari Bank lainnya",
    "explanation": "Bank lain tidak memiliki wewenang untuk meminta pencabutan izin usaha kompetitornya."
  },
  {
    "id": 226,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Pernyataan yang paling tepat mengenai Forum Panel RBS, adalah",
    "options": [
      "Forum untuk menetapkan sanksi kepada bank",
      "Sebagai bagian dari quality assurance pengawasan bank yang dilakukan oleh Pengawas",
      "Pertemuan antara pengawas dengan direksi bank",
      "Proses penilaian kinerja pengawas"
    ],
    "answer": "Sebagai bagian dari quality assurance pengawasan bank yang dilakukan oleh Pengawas",
    "explanation": "Forum Panel Risk-Based Supervision (RBS) adalah mekanisme penjaminan mutu (quality assurance) untuk memastikan objektivitas, konsistensi, dan kualitas pengawasan."
  },
  {
    "id": 227,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Dalam rangka mencapai sasaran manajemen pengawasan SJK Daerah, DMND sebagai koordinator pengawasan dan perizinan Kantor OJK Daerah perlu melakukan pengelolaan dengan cakupan terhadap:",
    "options": [
      "Hanya Sumber Daya Manusia",
      "Hanya Proses Kerja",
      "Sumber Daya Manusia, Proses Kerja dan Teknologi Informasi",
      "Hubungan dengan media dan pemerintah daerah"
    ],
    "answer": "Sumber Daya Manusia, Proses Kerja dan Teknologi Informasi",
    "explanation": "Ini mencakup tiga pilar utama manajemen modern: orang (SDM), proses (Proses Kerja), dan teknologi (TI)."
  },
  {
    "id": 228,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Apakah yang dimaksud dengan demokrasi ekonomi dalam UU Perbankan Syariah?",
    "options": [
      "Sistem pemilihan direksi bank secara demokratis",
      "Kegiatan ekonomi syariah yang mengandung nilai keadilan, kebersamaan, pemerataan, dan kemanfaatan",
      "Distribusi saham bank kepada masyarakat luas",
      "Penetapan suku bunga yang rendah untuk rakyat kecil"
    ],
    "answer": "Kegiatan ekonomi syariah yang mengandung nilai keadilan, kebersamaan, pemerataan, dan kemanfaatan",
    "explanation": "Definisi ini sesuai penjelasan dalam UU No. 21 Tahun 2008, yang berarti kegiatan perbankan syariah harus untuk sebesar-besarnya kemakmuran rakyat."
  },
  {
    "id": 229,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Persyaratan umum Pemisahan UUS yaitu:",
    "options": [
      "Total aset minimal Rp 50 Triliun",
      "Rasio NPF paling tinggi 5%",
      "Memiliki minimal 100 kantor cabang",
      "Telah beroperasi selama 20 tahun"
    ],
    "answer": "Rasio NPF paling tinggi 5%",
    "explanation": "Memiliki rasio Non-Performing Financing (NPF) yang terjaga (tidak lebih dari 5%) adalah cerminan kesehatan UUS yang akan dipisahkan, sehingga menjadi syarat penting."
  },
  {
    "id": 230,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Berikut ini merupakan fungsi dari Bank Perantara, kecuali:",
    "options": [
      "Menjalankan fungsi intermediasi terbatas",
      "Mengelola aset dan liabilitas sehat dari bank gagal",
      "Menjamin seluruh simpanan nasabah bank lain",
      "Menjaga stabilitas sistem keuangan"
    ],
    "answer": "Menjamin seluruh simpanan nasabah bank lain",
    "explanation": "Fungsi penjaminan simpanan adalah tugas utama LPS, bukan tugas spesifik dari Bank Perantara yang dibentuknya."
  },
  {
    "id": 231,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "BPR ditetapkan Dalam Status Pengawasan Khusus (DPK) dengan jangka waktu 2 bulan apabila memenuhi kriteria:",
    "options": [
      "Rasio KPMM di bawah 4%",
      "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%",
      "Rasio NPL di atas 7%",
      "Mengalami kerugian selama 3 tahun berturut-turut"
    ],
    "answer": "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%",
    "explanation": "Ini adalah kondisi yang sangat kritis (KPMM mendekati nol dan krisis likuiditas), yang memicu penetapan DPK dengan jangka waktu yang lebih pendek."
  },
  {
    "id": 232,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Otoritas Jasa Keuangan menetapkan status pengawasan Bank dan melakukan tindakan pengawasan pada Bank berdasarkan POJK No.5/POJK.03/2024 terdiri atas, kecuali:",
    "options": [
      "Bank dalam pengawasan Normal",
      "Bank dalam pengawasan Intensif",
      "Bank dalam pengawasan Khusus",
      "Bank dalam likuidasi"
    ],
    "answer": "Bank dalam pengawasan Khusus",
    "explanation": "Ini adalah salah satu status pengawasan yang ditetapkan OJK, sehingga ini bukan pengecualian dalam konteks pertanyaan."
  },
  {
    "id": 233,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Dokumen yang disampaikan pada saat mengajukan permohonan persiapan pencabutan izin usaha BPR antara lain:",
    "options": [
      "Laporan keuangan 5 tahun terakhir",
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara",
      "Daftar calon investor baru",
      "Analisis dampak sosial penutupan BPR"
    ],
    "answer": "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara",
    "explanation": "Ini adalah kombinasi dokumen yang paling lengkap untuk tahap persiapan, menunjukkan persetujuan pemilik, rencana aksi, dan bukti pemenuhan kewajiban kepada negara."
  },
  {
    "id": 234,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Yang dimaksud dengan Total Modal Aktual (Aggregate Net Equity) dalam perhitungan Permodalan Terintegrasi adalah:",
    "options": [
      "Nilai nominal penjumlahan dari modal aktual masing-masing LJK sesuai ketentuan di masing-masing sektor keuangan",
      "Total aset dari seluruh anggota konglomerasi",
      "Proyeksi laba bersih konglomerasi selama satu tahun",
      "Modal yang disetor oleh pemegang saham pengendali"
    ],
    "answer": "Nilai nominal penjumlahan dari modal aktual masing-masing LJK sesuai ketentuan di masing-masing sektor keuangan",
    "explanation": "Total Modal Aktual adalah agregat atau jumlah total dari modal riil yang dimiliki oleh setiap LJK anggota Konglomerasi Keuangan."
  },
  {
    "id": 235,
    "version": 3,
    "category": "Laporan & Akuntansi",
    "question": "Tujuan utama dari adanya integrasi pelaporan antara BI, OJK dan LPS yaitu:",
    "options": [
      "Untuk meningkatkan beban kerja bank dalam pelaporan",
      "Menciptakan persaingan antar otoritas",
      "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi dikarenakan pelaporan berbasis metadata yang digunakan bersama",
      "Mengurangi transparansi data perbankan"
    ],
    "answer": "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi dikarenakan pelaporan berbasis metadata yang digunakan bersama",
    "explanation": "Dengan satu platform dan satu set definisi data, bank tidak perlu melapor berulang kali, sehingga proses lebih efisien dan data lebih konsisten."
  },
  {
    "id": 236,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Pemisahan UUS dapat dilakukan dalam skema",
    "options": [
      "Menjual UUS kepada bank konvensional lain",
      "Melikuidasi UUS secara sukarela",
      "Pendirian BUS bersama dengan UUS lainnya",
      "Mengubah UUS menjadi Koperasi Simpan Pinjam"
    ],
    "answer": "Pendirian BUS bersama dengan UUS lainnya",
    "explanation": "Beberapa BUK yang memiliki UUS dapat bersama-sama melakukan spin-off dan mendirikan satu Bank Umum Syariah (BUS) baru sebagai hasil konsolidasi."
  },
  {
    "id": 237,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Jumlah Modal Inti Minimum (MIM) yang harus dipenuhi oleh BPR/BPRS adalah",
    "options": [
      "1 miliar",
      "3 miliar",
      "6 miliar",
      "10 miliar"
    ],
    "answer": "6 miliar",
    "explanation": "Sesuai POJK Nomor 5/POJK.03/2015, BPR dan BPRS wajib memenuhi Modal Inti Minimum (MIM) sebesar Rp 6 miliar paling lambat 31 Desember 2024."
  },
  {
    "id": 238,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Pada POJK 9 tahun 2023 Pasal 36 ayat (1) huruf a dan Pasal 37 ayat (1) membahas tentang:",
    "options": [
      "Sanksi bagi KAP yang melanggar",
      "Laporan berkala KAP berupa Laporan Kegiatan Pemberian Jasa (LKPJ) penyampaian dengan batas waktu sampai dengan 15 April",
      "Syarat pendaftaran Akuntan Publik baru",
      "Biaya jasa audit yang wajar"
    ],
    "answer": "Laporan berkala KAP berupa Laporan Kegiatan Pemberian Jasa (LKPJ) penyampaian dengan batas waktu sampai dengan 15 April",
    "explanation": "Pasal-pasal tersebut secara spesifik mengatur tentang kewajiban KAP untuk menyusun dan menyampaikan laporan berkala tahunan (LKPJ)."
  },
  {
    "id": 239,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Cakupan pengawasan konglomerasi keuangan yang disesuaikan akibat adanya Undang-undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut, kecuali:",
    "options": [
      "Struktur Konglomerasi Keuangan",
      "Anggota Konglomerasi Keuangan",
      "Cakupan Kewenangan dalam Melakukan Pemeriksaan",
      "Tata Cara Pemilihan Perusahaan Anak"
    ],
    "answer": "Tata Cara Pemilihan Perusahaan Anak",
    "explanation": "Tata cara pemilihan perusahaan anak adalah ranah keputusan bisnis dan tata kelola internal perusahaan, bukan aspek pengawasan yang diatur UU P2SK."
  },
  {
    "id": 240,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Apa kewajiban berkaitan dengan KK yang diatur dalam Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut:",
    "options": [
      "Kewajiban Pembentukan PIKK",
      "Kewajiban memiliki LJK dari tiga sektor berbeda",
      "Kewajiban melapor ke Bank Indonesia setiap bulan",
      "Kewajiban memiliki kantor pusat di Jakarta"
    ],
    "answer": "Kewajiban Pembentukan PIKK",
    "explanation": "UU P2SK mewajibkan Konglomerasi Keuangan (KK) untuk menunjuk atau membentuk Perusahaan Induk Konglomerasi Keuangan (PIKK)."
  },
  {
    "id": 241,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Jangka waktu penetapan status pengawasan BDP untuk BPR/BPRS adalah",
    "options": [
      "6 bulan dan dapat diperpanjang",
      "Paling lama 1 tahun dan tidak dapat diperpanjang",
      "2 tahun dan tidak dapat diperpanjang",
      "3 bulan dan dapat diperpanjang 3 bulan"
    ],
    "answer": "Paling lama 1 tahun dan tidak dapat diperpanjang",
    "explanation": "Status Bank Dalam Penyehatan (BDP) ditetapkan untuk jangka waktu paling lama 1 tahun dan tidak ada opsi perpanjangan."
  },
  {
    "id": 242,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Bank umum dapat melakukan kegiatan jasa yang mencakup?",
    "options": [
      "Hanya jual beli valuta asing",
      "Hanya layanan safe deposit box",
      "Pemberian kredit, simpanan, dan jasa keuangan lainnya",
      "Penerbitan surat utang negara"
    ],
    "answer": "Pemberian kredit, simpanan, dan jasa keuangan lainnya",
    "explanation": "Ini adalah cakupan kegiatan yang paling lengkap untuk bank umum, meliputi fungsi penghimpunan, penyaluran, dan jasa lalu lintas pembayaran."
  },
  {
    "id": 243,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "POJK yang mengatur tentang penggabungan, peleburan dan pengambilalihan BPR/BPRS yaitu",
    "options": [
      "POJK Nomor 12/POJK.03/2021",
      "POJK Nomor 21/POJK.03/2019",
      "POJK Nomor 5/POJK.03/2015",
      "POJK Nomor 7 Tahun 2024"
    ],
    "answer": "POJK Nomor 21/POJK.03/2019",
    "explanation": "POJK ini secara spesifik mengatur tentang Penggabungan, Peleburan, dan Pengambilalihan BPR dan BPRS."
  },
  {
    "id": 244,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Pemegang Saham Pengendali (PSP) Bank Syariah dalam memenuhi ketentuan PKK kepada pihak utama, wajib membuat pernyataan-pernyataan antara lain sbb, kecuali:",
    "options": [
      "Tidak pernah dihukum karena tindak pidana",
      "Memiliki komitmen untuk mematuhi peraturan",
      "Memiliki sertifikat pelatihan perbankan syariah",
      "Tidak termasuk dalam daftar kredit macet"
    ],
    "answer": "Memiliki sertifikat pelatihan perbankan syariah",
    "explanation": "Sertifikasi keahlian lebih relevan untuk pengurus (Direksi/Komisaris), bukan untuk Pemegang Saham Pengendali."
  },
  {
    "id": 245,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Tahapan dalam proses pendirian BPR adalah:",
    "options": [
      "Izin Prinsip dan Izin Lokasi",
      "Persetujuan Prinsip dan Izin Usaha",
      "Izin Usaha dan Izin Operasional",
      "Persetujuan Awal dan Persetujuan Final"
    ],
    "answer": "Persetujuan Prinsip dan Izin Usaha",
    "explanation": "Tahap pertama adalah Persetujuan Prinsip (izin persiapan), diikuti Izin Usaha (izin operasi)."
  },
  {
    "id": 246,
    "version": 3,
    "category": "SDM Perbankan",
    "question": "Apa latar belakang utama perlunya penyempurnaan ketentuan terkait pemanfaatan Tenaga Kerja Asing (TKA) dalam sektor perbankan?",
    "options": [
      "Perintah dari organisasi buruh internasional",
      "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank",
      "Menurunnya minat tenaga kerja lokal di sektor perbankan",
      "Untuk meningkatkan hubungan diplomatik dengan negara lain"
    ],
    "answer": "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank",
    "explanation": "Globalisasi dan liberalisasi meningkatkan persaingan, sehingga bank membutuhkan talenta terbaik untuk inovasi dan pengembangan."
  },
  {
    "id": 247,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Pengaturan khusus mengenai penyelenggaraan layanan digital bagi bank umum diatur dalam ketentuan:",
    "options": [
      "UU Perlindungan Konsumen",
      "POJK 17 Tahun 2023",
      "POJK 21 Tahun 2023",
      "UU ITE"
    ],
    "answer": "POJK 21 Tahun 2023",
    "explanation": "POJK ini mengatur secara spesifik mengenai layanan perbankan digital, menjadi acuan terkini bagi bank umum."
  },
  {
    "id": 248,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Dasar Hukum Pengawasan Perbankan oleh OJK adalah",
    "options": [
      "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
      "Hanya Undang-Undang Nomor 21 tahun 2011",
      "Hanya Undang-Undang Nomor 4 tahun 2023",
      "Peraturan Pemerintah Pengganti Undang-Undang"
    ],
    "answer": "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
    "explanation": "UU No. 21/2011 adalah UU tentang OJK, dan UU No. 4/2023 adalah UU P2SK yang memperkuat kewenangan OJK."
  },
  {
    "id": 249,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "BPR XYZ dengan modal disetor Rp15 miliar dan berkantor pusat di Kabupaten Ciamis bermaksud untuk memindahkan kantor pusatnya ke Kota Bandung. Berapa jumlah modal disetor yang wajib dipenuhi sesuai ketentuan?",
    "options": [
      "Wajib ditingkatkan menjadi Rp 25 miliar",
      "Wajib ditingkatkan menjadi Rp 50 miliar",
      "Tidak diwajibkan meningkatkan modal disetor.",
      "Wajib menyetor tambahan modal sebesar 10% dari modal saat ini"
    ],
    "answer": "Tidak diwajibkan meningkatkan modal disetor.",
    "explanation": "Pemindahan kantor pusat tidak secara otomatis mewajibkan peningkatan modal disetor, asalkan BPR tetap memenuhi persyaratan modal inti minimum yang berlaku."
  },
  {
    "id": 250,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Produk simpanan dengan setoran rutin dalam jangka waktu tertentu yang tidak dapat dicairkan sebelum jangka waktu tertentu disebut?",
    "options": [
      "Giro",
      "Tabungan Biasa",
      "Deposito",
      "Tabungan Berjangka"
    ],
    "answer": "Tabungan Berjangka",
    "explanation": "Definisi ini secara tepat menggambarkan produk Tabungan Berjangka, yang menggabungkan fitur setoran rutin dari tabungan dan penguncian dana dari deposito."
  },
  {
    "id": 251,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Periode penyusunan Integrated Supervisory Plan dilakukan selambat-lambatnya pada:",
    "options": [
      "31 Maret tahun berjalan",
      "31 Januari tahun berjalan",
      "15 Februari tahun berjalan",
      "Akhir kuartal pertama tahun berjalan"
    ],
    "answer": "31 Januari tahun berjalan",
    "explanation": "Batas akhir penyusunan rencana pengawasan terintegrasi adalah pada akhir bulan pertama tahun berjalan."
  },
  {
    "id": 252,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Permohonan pendaftaran Akuntan Publik (AP) telah disetujui oleh OJK serta telah diberikan Surat Tanda Terdaftar (STTD) maka AP dimaksud akan masuk ke publikasi sebagai:",
    "options": [
      "Daftar AP dalam Proses",
      "Daftar AP yang Aktif",
      "Daftar AP yang Direkomendasikan",
      "Daftar AP Senior"
    ],
    "answer": "Daftar AP yang Aktif",
    "explanation": "Setelah mendapatkan STTD, Akuntan Publik secara resmi terdaftar dan berstatus aktif di OJK."
  },
  {
    "id": 253,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah",
    "options": [
      "Specific",
      "Measurable",
      "Achievable",
      "Strategy"
    ],
    "answer": "Strategy",
    "explanation": "SMART adalah singkatan dari Specific, Measurable, Achievable, Relevant, and Timely. 'Strategy' bukanlah bagian dari akronim tersebut."
  },
  {
    "id": 254,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "BPR/S wajib melakukan penggabungan, peleburan, atau pengambilalihan berdasarkan perintah OJK dengan tujuan hal sebagai berikut, kecuali:",
    "options": [
      "Memenuhi ketentuan modal inti minimum",
      "Meningkatkan efisiensi",
      "Menyamakan corporate culture bagi BPR dalam satu kepemilikan PSP yang sama.",
      "Meningkatkan daya saing"
    ],
    "answer": "Menyamakan corporate culture bagi BPR dalam satu kepemilikan PSP yang sama.",
    "explanation": "Menyamakan budaya perusahaan adalah urusan internal manajemen dan bukan merupakan tujuan OJK dalam memerintahkan konsolidasi."
  },
  {
    "id": 255,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Hal-hal berikut yang tidak termasuk dalam karakteristik perlunya dilakukan Klarifikasi:",
    "options": [
      "Terdapat informasi negatif dari media massa",
      "Pernah mendapat sanksi dari otoritas lain",
      "Calon Pihak Utama beralih menjadi Pejabat Eksekutif bank pada bank dengan buku yang lebih tinggi",
      "Adanya catatan dalam Sistem Informasi Debitur"
    ],
    "answer": "Calon Pihak Utama beralih menjadi Pejabat Eksekutif bank pada bank dengan buku yang lebih tinggi",
    "explanation": "Pindah ke bank dengan skala yang lebih besar adalah bentuk promosi atau pengembangan karier yang wajar dan tidak secara otomatis memerlukan klarifikasi."
  },
  {
    "id": 256,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Bobot risiko untuk aset produktif dengan sumber dana Profit Sharing Investment Account (PSIA) yaitu:",
    "options": [
      "100%",
      "50%",
      "10%",
      "1%"
    ],
    "answer": "1%",
    "explanation": "Dalam perhitungan KPMM bank syariah, aset produktif yang didanai dari PSIA mendapatkan bobot risiko yang sangat rendah, yaitu 1%, karena risiko utama ditanggung oleh investor."
  },
  {
    "id": 257,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Informasi bahwa sebuah bank merupakan anak dari bank global besar dengan rating AAA paling tepat digunakan sebagai penilaian atas:",
    "options": [
      "Kualitas manajemen risiko",
      "Tingkat rentabilitas",
      "Kemampuan akses permodalan",
      "Efisiensi operasional"
    ],
    "answer": "Kemampuan akses permodalan",
    "explanation": "Memiliki induk perusahaan yang sangat besar dan kuat menunjukkan bahwa bank tersebut memiliki kemudahan akses untuk mendapatkan tambahan modal jika diperlukan (capital support)."
  },
  {
    "id": 258,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Dengan telah diundangkannya POJK tentang Konglomerasi Keuangan, kedepannya struktur KK yang laporan keuangannya dikonsolidasikan, adalah:",
    "options": [
      "Struktur Horizontal",
      "Struktur Campuran (Mixed)",
      "Struktur Vertikal",
      "Struktur Matriks"
    ],
    "answer": "Struktur Vertikal",
    "explanation": "Kewajiban pembentukan PIKK bertujuan untuk menciptakan struktur vertikal yang jelas, di mana ada satu entitas induk di puncak."
  },
  {
    "id": 259,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Dokumen Pendaftar Akuntan Publik sesuai Pasal 18 ayat 1 POJK 9 Tahun 2023, kecuali:",
    "options": [
      "Fotokopi KTP",
      "Daftar Riwayat Hidup",
      "Surat Tanda Lulus Ujian Profesi",
      "Akta Nikah"
    ],
    "answer": "Akta Nikah",
    "explanation": "Status perkawinan adalah informasi pribadi yang tidak relevan dengan kualifikasi profesional seorang Akuntan Publik."
  },
  {
    "id": 260,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Suku bunga kredit idealnya merupakan penjumlahan dari:",
    "options": [
      "Suku bunga dasar kredit dan estimasi premi risiko",
      "Biaya dana dan biaya operasional",
      "Suku bunga acuan BI dan marjin keuntungan",
      "Inflasi dan pertumbuhan ekonomi"
    ],
    "answer": "Suku bunga dasar kredit dan estimasi premi risiko",
    "explanation": "Bank menetapkan SBDK yang mencakup biaya dasar, kemudian menambahkan premi risiko yang spesifik untuk setiap debitur."
  },
  {
    "id": 261,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Prinsip-prinsip Syariah sebagaimana dimaksud UU No.21 Tahun 2008 mewajibkan Perbankan Syariah tidak mengandung unsur-unsur yang dilarang yaitu:",
    "options": [
      "Jual Beli dan Sewa",
      "Bagi Hasil dan Kerjasama",
      "Riba, Maisir, Gharar, Haram dan Zalim",
      "Titipan dan Jasa"
    ],
    "answer": "Riba, Maisir, Gharar, Haram dan Zalim",
    "explanation": "Ini adalah lima unsur utama yang dilarang: Riba (bunga), Maisir (perjudian), Gharar (ketidakjelasan), Haram (objek terlarang), dan Zalim (ketidakadilan)."
  },
  {
    "id": 262,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Bentuk badan hukum BPR sesuai ketentuan peraturan perundang-undangan:",
    "options": [
      "Koperasi dan Yayasan",
      "Perseroda, Perumda, dan/atau Perseroan Terbatas",
      "Hanya Perseroan Terbatas",
      "CV dan Firma"
    ],
    "answer": "Perseroda, Perumda, dan/atau Perseroan Terbatas",
    "explanation": "Bentuk hukum BPR bisa berupa perusahaan swasta (PT) atau milik pemerintah daerah (Perseroda atau Perumda)."
  },
  {
    "id": 263,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Aspek penilaian uji kemampuan dan kepatutan new entry calon pemegang saham pengendali bank:",
    "options": [
      "Hanya Integritas",
      "Hanya kelayakan keuangan",
      "Integritas dan kelayakan keuangan",
      "Kompetensi dan pengalaman kerja"
    ],
    "answer": "Integritas dan kelayakan keuangan",
    "explanation": "Dua aspek utama yang dinilai adalah Integritas (rekam jejak kepatuhan) dan kelayakan keuangan (kemampuan menyediakan dukungan modal)."
  },
  {
    "id": 264,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Minimal modal disetor dalam pendirian Bank BHI:",
    "options": [
      "Rp 1 Triliun",
      "Rp 3 Triliun",
      "Rp 5 Triliun",
      "Rp 10 Triliun"
    ],
    "answer": "Rp 10 Triliun",
    "explanation": "Sesuai POJK No. 12/POJK.03/2021, modal disetor minimum untuk mendirikan Bank Berbadan Hukum Indonesia (BHI) baru adalah Rp 10 triliun."
  },
  {
    "id": 265,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Berikut ini yang bukan merupakan karakteristik akad mudharabah adalah:",
    "options": [
      "Keuntungan dibagi sesuai nisbah yang disepakati",
      "Kerugian finansial ditanggung penuh oleh pemilik modal",
      "Modal usaha berasal dari pemilik modal dan pengelola usaha",
      "Pengelola usaha menyumbangkan keahlian atau kerja"
    ],
    "answer": "Modal usaha berasal dari pemilik modal dan pengelola usaha",
    "explanation": "Ini adalah karakteristik dari akad Musyarakah. Dalam Mudharabah, hanya satu pihak (pemilik dana) yang menyetor modal."
  },
  {
    "id": 266,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Pada Perizinan perubahan nama bank, Bank BHI wajib menyampaikan dokumen persetujuan perubahan anggaran dasar dari instansi yang berwenang kepada OJK paling lama:",
    "options": [
      "14 (empat belas) hari kerja",
      "30 (tiga puluh) hari kalender",
      "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang",
      "7 (tujuh) hari kerja setelah RUPS"
    ],
    "answer": "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang",
    "explanation": "Regulasi menetapkan batas waktu dalam 'hari kerja' dan dihitung sejak persetujuan dari Kemenkumham diterima."
  },
  {
    "id": 267,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Aspek penilaian uji kemampuan dan kepatutan new entry calon pengurus bank:",
    "options": [
      "Hanya Integritas dan kompetensi",
      "Hanya reputasi keuangan",
      "Integritas, reputasi keuangan dan kompetensi",
      "Integritas dan kelayakan keuangan"
    ],
    "answer": "Integritas, reputasi keuangan dan kompetensi",
    "explanation": "Tiga pilar utama yang dinilai untuk pengurus (Direksi/Komisaris) adalah: Integritas, Reputasi Keuangan, dan Kompetensi."
  },
  {
    "id": 268,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Tantangan dan Isu pada pengawasan BPR, kecuali:",
    "options": [
      "Digitalisasi proses pemeriksaan BPR",
      "Transisi dari compliance based ke risk based supervision",
      "Penguatan koordinasi cross cutting issues pada RKPT",
      "Capacity building terkait risiko kerjasama BPR-fintech"
    ],
    "answer": "Penguatan koordinasi cross cutting issues pada RKPT",
    "explanation": "Ini adalah bagian dari solusi atau rencana kerja internal OJK, bukan tantangan yang dihadapi oleh industri BPR."
  },
  {
    "id": 269,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Pemahaman yang komprehensif terhadap kondisi Konglomerasi Keuangan dituangkan dalam dokumen berikut:",
    "options": [
      "Rencana Bisnis Bank (RBB)",
      "Laporan Keuangan Tahunan",
      "Know Your Financial Conglomerates (KYFC)",
      "Laporan Hasil Pemeriksaan (LHP)"
    ],
    "answer": "Know Your Financial Conglomerates (KYFC)",
    "explanation": "Dokumen KYFC adalah dokumen internal pengawas yang berisi pemahaman mendalam mengenai profil, struktur, risiko, dan strategi bisnis suatu Konglomerasi Keuangan."
  },
  {
    "id": 270,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Berikut adalah kegiatan usaha LPIP, kecuali:",
    "options": [
      "Mengelola informasi debitur",
      "Menghasilkan informasi perkreditan bernilai tambah",
      "Menghimpun dan menyalurkan dana dari dan kepada masyarakat",
      "Memberikan layanan skor kredit"
    ],
    "answer": "Menghimpun dan menyalurkan dana dari dan kepada masyarakat",
    "explanation": "Ini adalah kegiatan usaha bank. LPIP adalah lembaga pengelola data, bukan lembaga intermediasi keuangan."
  },
  {
    "id": 271,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Di bawah ini yang bukan termasuk dalam komponen penilaian KPMR pada Risiko Likuiditas adalah:",
    "options": [
      "Strategi manajemen risiko likuiditas",
      "Kecukupan proses identifikasi, pengukuran, pemantauan, dan pengendalian risiko",
      "Sistem pengendalian intern yang komprehensif",
      "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit"
    ],
    "answer": "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit",
    "explanation": "Sistem pengendalian internal adalah pilar utama dari KPMR, sehingga ini bukan pengecualian."
  },
  {
    "id": 272,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Pendirian BUS/BPRS baru, Spin Off UUS dan Konversi BUK/BPR menjadi BUS/BPRS adalah termasuk kelompok perizinan:",
    "options": [
      "Operasional Kelembagaan",
      "Exit Kelembagaan",
      "Entry Kelembagaan",
      "Perubahan Data Kelembagaan"
    ],
    "answer": "Entry Kelembagaan",
    "explanation": "Semua kegiatan ini menghasilkan entitas hukum perbankan baru atau mengubah status fundamental sebuah lembaga, sehingga tergolong 'entry'."
  },
  {
    "id": 273,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Apabila BPR gagal memperbaiki kinerja setelah masa pengawasan intensif berakhir dengan KPMM 9%, maka:",
    "options": [
      "OJK memberikan perpanjangan waktu",
      "OJK menetapkan BPR dalam pengawasan khusus.",
      "OJK meminta BPR untuk melakukan merger",
      "OJK langsung mencabut izin usaha BPR"
    ],
    "answer": "OJK menetapkan BPR dalam pengawasan khusus.",
    "explanation": "Kegagalan memperbaiki kinerja selama masa pengawasan intensif memicu OJK untuk menaikkan status pengawasan ke tingkat selanjutnya, yaitu Dalam Pengawasan Khusus (DPK)."
  },
  {
    "id": 274,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Ketentuan terkait suku bunga dasar kredit terkini diatur dalam:",
    "options": [
      "POJK 12 Tahun 2021",
      "POJK 13 Tahun 2024",
      "SEOJK tentang Transparansi Produk",
      "UU Perbankan"
    ],
    "answer": "POJK 13 Tahun 2024",
    "explanation": "POJK ini secara spesifik mengatur tentang transparansi Suku Bunga Dasar Kredit (SBDK), menjadi acuan terkini bagi industri perbankan."
  },
  {
    "id": 275,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Tahapan di bawah ini yang tidak dilakukan OJK dalam memproses izin usaha BPR adalah:",
    "options": [
      "Penelitian kelengkapan dokumen",
      "Analisis rencana bisnis",
      "Wawancara dengan calon pengurus",
      "Penilaian studi kelayakan"
    ],
    "answer": "Penilaian studi kelayakan",
    "explanation": "Studi kelayakan adalah dokumen yang disusun dan diserahkan oleh pemohon. OJK akan menganalisisnya, tetapi tidak melakukannya sebagai tahapan terpisah."
  },
  {
    "id": 276,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "Tantangan dalam pelaksanaan konsolidasi BPR/BPRS sebagaimana tercantum, kecuali:",
    "options": [
      "Perbedaan Budaya Korporasi (Corporate Culture)",
      "Integrasi Sistem Teknologi Informasi",
      "Psp Mempertahankan Untuk Memiliki 1 BPR & 1 BPRS (Konvensional Dan Syariah)",
      "Penilaian (Valuasi) Saham BPR/BPRS"
    ],
    "answer": "Psp Mempertahankan Untuk Memiliki 1 BPR & 1 BPRS (Konvensional Dan Syariah)",
    "explanation": "Ini bukan tantangan, melainkan salah satu opsi yang diperbolehkan dalam kebijakan single presence policy dengan pengecualian."
  },
  {
    "id": 277,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Manakah dari jumlah dewan komisaris independen di bank umum yang benar.",
    "options": [
      "1 orang dari total 3 orang anggota dewan komisaris",
      "2 orang dari total 5 orang anggota dewan komisaris",
      "4 orang dari total keseluruhan 5 orang anggota dewan komisaris",
      "Semua jawaban salah"
    ],
    "answer": "4 orang dari total keseluruhan 5 orang anggota dewan komisaris",
    "explanation": "Jumlah komisaris independen harus lebih dari 50% dari total, sehingga 4 dari 5 (80%) memenuhi persyaratan."
  },
  {
    "id": 278,
    "version": 3,
    "category": "Laporan & Akuntansi",
    "question": "Saat pencairan kredit, bank mencatat jurnal sebagai berikut:",
    "options": [
      "Db. Kas / Kr. Kredit",
      "Db. Beban Bunga / Kr. Kas",
      "Db. Kredit / Kr. Kas",
      "Db. Kas / Kr. Pendapatan Bunga"
    ],
    "answer": "Db. Kredit / Kr. Kas",
    "explanation": "'Kredit yang diberikan' (aset) bertambah di sisi Debet, dan 'Kas' (aset) berkurang di sisi Kredit."
  },
  {
    "id": 279,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "Dokumen persyaratan permohonan persiapan pelaksanaan pengambilalihan antara lain sebagai berikut, kecuali:",
    "options": [
      "Rancangan pengambilalihan",
      "Konsep akta jual beli saham",
      "Akta pengambilalihan yang dibuat di hadapan notaris",
      "Bukti kesiapan dana calon PSP"
    ],
    "answer": "Akta pengambilalihan yang dibuat di hadapan notaris",
    "explanation": "Akta notaris adalah dokumen final yang dibuat setelah OJK memberikan persetujuan, bukan saat permohonan persiapan."
  },
  {
    "id": 280,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "Wilayah jaringan kantor BPR/S hasil penggabungan/peleburan paling luas berlokasi dalam satu wilayah",
    "options": [
      "Provinsi",
      "Kabupaten/Kota",
      "Pulau atau kepulauan utama",
      "Nasional"
    ],
    "answer": "Pulau atau kepulauan utama",
    "explanation": "Sesuai regulasi, konsolidasi memungkinkan BPR/S untuk memperluas jaringan kantornya hingga mencakup satu pulau atau kepulauan utama."
  },
  {
    "id": 281,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Dibawah ini adalah tugas-tugas pokok Focal Point OJK, kecuali:",
    "options": [
      "Menjadi contact person utama antara OJK Pusat dan Daerah",
      "Mengkoordinasikan penyelesaian isu-isu strategis",
      "Melaksanakan seminar/sosialisasi/pelatihan terkait dengan pengembangan sumber daya manusia",
      "Memonitor implementasi kebijakan pengawasan di daerah"
    ],
    "answer": "Melaksanakan seminar/sosialisasi/pelatihan terkait dengan pengembangan sumber daya manusia",
    "explanation": "Pelaksanaan seminar atau pelatihan SDM adalah fungsi dari unit kerja lain seperti OJK Institute, bukan tugas pokok Focal Point."
  },
  {
    "id": 282,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Tahapan pemberian izin pendirian Bank Syariah berupa:",
    "options": [
      "Persetujuan prinsip dan izin usaha",
      "Izin lokasi dan izin mendirikan bangunan",
      "Analisis dampak lingkungan dan izin operasional",
      "Persetujuan RUPS dan pendaftaran di Kemenkumham"
    ],
    "answer": "Persetujuan prinsip dan izin usaha",
    "explanation": "Proses pendirian Bank Syariah melalui dua tahap utama: Persetujuan Prinsip (izin persiapan) dan Izin Usaha (izin operasi)."
  },
  {
    "id": 283,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Penggolongan kualitas kredit BPR adalah kecuali:",
    "options": [
      "Lancar",
      "Dalam Perhatian Khusus",
      "Kurang Lancar",
      "Dalam Penyehatan"
    ],
    "answer": "Dalam Penyehatan",
    "explanation": "'Dalam Penyehatan' adalah status pengawasan untuk bank, bukan kategori untuk kualitas kredit individual."
  },
  {
    "id": 284,
    "version": 3,
    "category": "Operasional Bank",
    "question": "Produk yang memberikan kemudahan untuk pembayaran secara elektronik seperti tagihan bulanan dan transfer antarbank adalah",
    "options": [
      "Safe Deposit Box",
      "Internet Banking",
      "Kredit Usaha Rakyat",
      "Tabungan Emas"
    ],
    "answer": "Internet Banking",
    "explanation": "Internet Banking adalah layanan atau platform yang memungkinkan nasabah melakukan transaksi elektronik secara mandiri."
  },
  {
    "id": 285,
    "version": 3,
    "category": "Regulasi & Kepatuhan",
    "question": "Pada POJK LPIP, pasal berapa yang menyebutkan bahwa LPIP diminta untuk menghasilkan informasi perkreditan yang memiliki nilai tambah?",
    "options": [
      "Pasal 1 ayat 1",
      "Pasal 60 ayat 1",
      "Pasal 25 ayat 2",
      "Pasal 100"
    ],
    "answer": "Pasal 60 ayat 1",
    "explanation": "Pasal 60 ayat (1) dalam POJK LPIP secara eksplisit menyatakan bahwa LPIP wajib menghasilkan informasi perkreditan yang memiliki nilai tambah."
  },
  {
    "id": 286,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Siapa yang menyusun dan menyetujui Rencana Bisnis Bank (RBB)?",
    "options": [
      "Dewan Komisaris yang menyusun dan Direksi menyetujui",
      "Direksi yang menyusun dan Dewan Komisaris menyetujui",
      "Disusun bersama oleh Direksi dan Dewan Komisaris",
      "OJK yang menyusun dan bank menyetujui"
    ],
    "answer": "Direksi yang menyusun dan Dewan Komisaris menyetujui",
    "explanation": "Direksi (eksekutif) bertanggung jawab atas penyusunan, sedangkan Dewan Komisaris (pengawas) bertanggung jawab untuk menelaah dan memberikan persetujuan."
  },
  {
    "id": 287,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Setelah dokumen lengkap, berapa lama jangka waktu OJK dalam memberikan persetujuan atau penolakan atas permohonan persetujuan prinsip pendirian BPR?",
    "options": [
      "14 hari kerja",
      "30 hari kerja",
      "60 hari kerja",
      "90 hari kalender"
    ],
    "answer": "30 hari kerja",
    "explanation": "Sesuai regulasi, OJK memiliki waktu paling lama 30 hari kerja untuk memproses permohonan persetujuan prinsip pendirian BPR."
  },
  {
    "id": 288,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Perbuatan hukum yang dilakukan oleh KCBLN dan Bank dengan mengalihkan aset dan/atau liabilitas KCBLN secara hukum kepada Bank, dan selanjutnya dilakukan pencabutan izin usaha KCBLN disebut:",
    "options": [
      "Merger",
      "Akuisisi",
      "Konsolidasi",
      "Integrasi"
    ],
    "answer": "Integrasi",
    "explanation": "Definisi ini secara spesifik merujuk pada proses Integrasi, di mana KCBLN mengubah bentuknya menjadi Bank Berbadan Hukum Indonesia."
  },
  {
    "id": 289,
    "version": 3,
    "category": "Konglomerasi Keuangan",
    "question": "Forum Panel Terintegrasi dilaksanakan pada 2 tahap dalam siklus pengawasan Konglomerasi Keuangan, yaitu:",
    "options": [
      "Tahap Perencanaan dan Pelaporan",
      "Tahap Pemeriksaan dan Evaluasi",
      "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan",
      "Tahap Awal dan Tahap Akhir Pengawasan"
    ],
    "answer": "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan",
    "explanation": "Forum panel diadakan pada tahap penilaian risiko untuk memastikan akurasi, dan pada tahap perumusan tindakan pengawasan untuk memastikan langkah yang diambil sudah tepat."
  },
  {
    "id": 290,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Tujuan yang ingin dicapai oleh OJK melalui program Pengembangan Ekonomi Daerah, kecuali:",
    "options": [
      "Meningkatkan literasi dan inklusi keuangan",
      "Mendukung stabilitas sistem keuangan di daerah",
      "Mendorong pertumbuhan sektor riil",
      "Mendukung stabilitas suku bunga"
    ],
    "answer": "Mendukung stabilitas suku bunga",
    "explanation": "Stabilitas suku bunga adalah domain kebijakan moneter yang merupakan tugas Bank Indonesia, bukan tujuan langsung dari program OJK."
  },
  {
    "id": 291,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:",
    "options": [
      "Meningkatkan fungsi Pengawasan Bank",
      "Meningkatkan fungsi Surveilans",
      "Meningkatkan fungsi intermediasi",
      "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis"
    ],
    "answer": "Meningkatkan fungsi intermediasi",
    "explanation": "Stress test bertujuan untuk mengukur ketahanan (resilience), bukan untuk secara langsung mendorong penyaluran kredit (intermediasi)."
  },
  {
    "id": 292,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Manakah satuan kerja yang terlibat pada pengawasan AP/KAP?",
    "options": [
      "Hanya Departemen Perizinan",
      "Hanya Departemen Pemeriksaan Khusus",
      "DIMB, DAJP, dan DPEP",
      "Departemen SDM dan Departemen Hukum"
    ],
    "answer": "DIMB, DAJP, dan DPEP",
    "explanation": "Pengawasan ini melibatkan unit yang menangani perizinan, pengawasan kepatuhan, dan investigasi (jika ada kasus)."
  },
  {
    "id": 293,
    "version": 3,
    "category": "Pengawasan Bank",
    "question": "Status pengawasan Bank yang ditetapkan oleh OJK terdiri dari, kecuali:",
    "options": [
      "Pengawasan Normal",
      "Pengawasan Intensif",
      "Pengawasan dalam perhatian khusus",
      "Pengawasan Khusus"
    ],
    "answer": "Pengawasan dalam perhatian khusus",
    "explanation": "Istilah ini tidak digunakan sebagai status pengawasan formal. Istilah yang benar adalah Pengawasan Intensif dan Pengawasan Khusus."
  },
  {
    "id": 294,
    "version": 3,
    "category": "BPR & BPRS",
    "question": "Sesuai dengan Nota Kesepahaman OJK-LPS, batas waktu pencabutan izin usaha BPR adalah:",
    "options": [
      "1 hari kerja setelah LPS memutuskan tidak dapat menyelamatkan",
      "7 hari kerja setelah LPS menyampaikan keputusan untuk tidak dapat menyelamatkan",
      "30 hari kalender setelah LPS menerima BPR",
      "Tidak ada batas waktu yang pasti"
    ],
    "answer": "7 hari kerja setelah LPS menyampaikan keputusan untuk tidak dapat menyelamatkan",
    "explanation": "OJK akan mencabut izin usaha setelah menerima keputusan dari LPS bahwa bank tersebut tidak dapat diselamatkan."
  },
  {
    "id": 295,
    "version": 3,
    "category": "Perbankan Syariah",
    "question": "Undang-undang yang menjadi dasar perbankan syariah yaitu:",
    "options": [
      "UU Nomor 10 tahun 1998",
      "UU Nomor 21 tahun 2008",
      "UU Nomor 4 tahun 2023",
      "UU Otoritas Jasa Keuangan"
    ],
    "answer": "UU Nomor 21 tahun 2008",
    "explanation": "UU No. 21 Tahun 2008 tentang Perbankan Syariah adalah landasan hukum utama (lex specialis) yang mengatur perbankan syariah di Indonesia."
  },
  {
    "id": 296,
    "version": 3,
    "category": "Konsolidasi & Korporasi",
    "question": "Perubahan kepemilikan yang mengakibatkan beralihnya pengendalian BPR atau BPR Syariah yang tidak diperlakukan sebagai pengambilalihan, yaitu:",
    "options": [
      "Pembelian saham di atas 25% oleh investor baru",
      "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah",
      "Pengambilalihan oleh bank lain",
      "Penjualan saham oleh pemegang saham pengendali lama"
    ],
    "answer": "Perubahan kepemilikan saham yang disebabkan oleh waris atau hibah",
    "explanation": "Peralihan kepemilikan saham karena hukum waris atau hibah wasiat dikecualikan dari kewajiban untuk mendapatkan izin pengambilalihan dari OJK."
  },
  {
    "id": 297,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Pengertian Fraud menurut International Standards of Auditing adalah",
    "options": [
      "Kesalahan pencatatan akuntansi yang tidak disengaja",
      "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipu an untuk memperoleh keuntungan yang tidak adil atau illegal.",
      "Pelanggaran prosedur operasional standar tanpa niat jahat",
      "Setiap tindakan yang merugikan keuangan perusahaan"
    ],
    "answer": "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipu an untuk memperoleh keuntungan yang tidak adil atau illegal.",
    "explanation": "Definisi ini sesuai dengan ISA 240, mencakup elemen kunci: tindakan disengaja, penggunaan penipuan, dan tujuan memperoleh keuntungan tidak sah."
  },
  {
    "id": 298,
    "version": 3,
    "category": "Tata Kelola & Manajemen Risiko",
    "question": "Tahapan Penilaian Kemampuan dan Kepatutan new entry:",
    "options": [
      "Wawancara, tes psikologi, dan medical check-up",
      "Penelitian administratif dan wawancara akhir",
      "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK",
      "Pengecekan media sosial dan rekam jejak digital"
    ],
    "answer": "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK",
    "explanation": "Ini adalah urutan tahapan yang benar: pengecekan kelengkapan, identifikasi, penelitian administratif, yang kemudian menghasilkan keputusan akhir."
  },
  {
    "id": 299,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Bank A akan melakukan pemindahan alamat Kantor Pusat sehingga mengakibatkan perubahan tempat kedudukan dalam Anggaran Dasar. Bank A harus:",
    "options": [
      "Hanya memberitahukan kepada OJK setelah pindah",
      "Menyampaikan permohonan izin kepada DPIP untuk diproses lebih lanjut",
      "Meminta izin kepada pemerintah daerah setempat",
      "Mengumumkan di media massa selama 3 hari berturut-turut"
    ],
    "answer": "Menyampaikan permohonan izin kepada DPIP untuk diproses lebih lanjut",
    "explanation": "Pemindahan alamat kantor pusat yang mengubah Anggaran Dasar memerlukan izin dari departemen perizinan OJK, bukan sekadar pemberitahuan."
  },
  {
    "id": 300,
    "version": 3,
    "category": "Kelembagaan & Perizinan",
    "question": "Perizinan pendirian bank BHI dan KCBLN terdiri dari 2 (dua) tahap yaitu:",
    "options": [
      "Persetujuan prinsip dan izin usaha",
      "Persetujuan Awal dan Persetujuan Lanjutan",
      "Izin Sementara dan Izin Permanen",
      "Persetujuan Konseptual dan Izin Operasional"
    ],
    "answer": "Persetujuan prinsip dan izin usaha",
    "explanation": "Tahap pertama adalah Persetujuan Prinsip (izin persiapan), dan tahap kedua adalah Izin Usaha (izin operasi)."
  },


    // SOAL VERSI 4

  { id: 301, version: 4, category: "Regulasi Perbankan", question: "Dokumen yang bukan merupakan bagian output dari proses pemeriksaan berdasarkan risiko adalah", options: ["Perencanaan Pengawasan", "Risalah Exit Meeting", "Audit Working Plan", "Laporan Hasil Pemeriksaan"], answer: "Perencanaan Pengawasan", explanation: "" },
  { id: 302, version: 4, category: "Regulasi Perbankan", question: "Yang bukan merupakan cakupan penerapan tata kelola sesuai POJK No.2 tahun 2024 tentang Penerapan Tata Kelola Syariah BUS UUS yaitu:", options: ["Pembatasan masa jabatan anggota DPS", "Kewajiban pengalihan penghasilan yang tidak sesuai dengan prinsip syariah", "Kewajiban pembentukan komite syariah", "Kerangka tata kelola syariah"], answer: "Kewajiban pembentukan komite syariah", explanation: "" },
  { id: 303, version: 4, category: "Regulasi Perbankan", question: "Sebutkan jenis informasi perkreditan seperti apa yang memiliki nilai tambah?", options: ["Tingkat kolektibilitas", "Peringatan fraud", "Nilai sisa plafon kredit/pembiayaan", "Jumlah fasilitas pinjaman kredit/pembiayaan"], answer: "Peringatan fraud", explanation: "" },
  { id: 304, version: 4, category: "Regulasi Perbankan", question: "Salah satu parameter BPR/BPRS ditetapkan dalam status pengawasan BDP adalah", options: ["Cash ratio > 5%", "Rasio KPΜΜ < 5%", "Rasio KPΜΜ < 12%", "Cash ratio < 2%"], answer: "Rasio KPΜΜ < 12%", explanation: "" },
  { id: 305, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini yang bukan termasuk dalam komponen penilaian KPMR pada Risiko Likuiditas adalah:", options: ["Penetapan pihak yang independen untuk melakukan pengujian dan validasi model pengukuran risiko dan pricing model secara berkala", "Komposisi dari aset, liabilitas, dan transaksi rekening administratif", "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit", "Teknologi informasi dan infrastruktur pendukung"], answer: "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit", explanation: "" },
  { id: 306, version: 4, category: "Regulasi Perbankan", question: "Pemegang Saham yang sengaja melakukan tindak pidana perbankan, akan dijerat dengan pasal", options: ["Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah", "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah", "Pasal 46 UU Perbankan atau Pasal 59 UU Perbankan Syariah", "Pasal 50 UU Perbankan atau Pasal 64 UU Perbankan Syariah"], answer: "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah", explanation: "" },
  { id: 307, version: 4, category: "Regulasi Perbankan", question: "BPR dapat melakukan pembukaan Kantor Cabang jika kondisi keuangan memenuhi persyaratan:", options: ["Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.", "Rasio kewajiban penyediaan modal minimum 12% selama enam bulan terakhir.", "Rasio Non-Performing Loan (NPL) gross paling tinggi 5% selama 6 bulan terakhir.", "Tidak dalam keadaan rugi dalam 1 (satu) tahun terakhir."], answer: "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.", explanation: "" },
  { id: 308, version: 4, category: "Regulasi Perbankan", question: "Dokumen yang disampaikan pada saat mengajukan permohonan persiapan pencabutan izin usaha BPR antara lain:", options: ["Berita Acara RUPS, rencana penyelesaian kewajiban, pengumuman rencana pembubaran badan hukum", "Laporan keuangan terakhir, laporan dan bukti penyelesaian kewajiban, laporan penghentian kegiatan usaha", "Rencana penyelesaian kewajiban, laporan penghentian kegiatan usaha, laporan penyelesaian seluruh kewajiban", "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara"], answer: "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara", explanation: "" },
  { id: 309, version: 4, category: "Regulasi Perbankan", question: "SLIK merupakan singkatan dari:", options: ["Sistem Lacak Informasi Kredit", "Sistem Layanan Informasi Kredit", "Sistem Layanan Informasi Keuangan", "Sistem Layanan Izin Kredit"], answer: "Sistem Layanan Informasi Keuangan", explanation: "" },
  { id: 310, version: 4, category: "Regulasi Perbankan", question: "Salah satu produk yang digunakan oleh OJK untuk memberikan informasi mengenai persepsi risiko dan proyeksi kondisi makro ekonomi serta kinerja sektor perbankan dalam triwulan mendatang yang telah dilaksanakan sejak TW III 2019 adalah:", options: ["Survei Orientasi Bisnis Perbankan", "Kompilasi Laporan Rencana Bisnis Bank (RBB)", "Market Update Bulanan Perbankan", "Laporan Surveillance Perbankan"], answer: "Survei Orientasi Bisnis Perbankan", explanation: "" },
  { id: 311, version: 4, category: "Regulasi Perbankan", question: "Faktor dan bobot penilaian TKS BPR dan BPRS yaitu:", options: ["Profil Risiko (25%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (20%)", "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (15%)", "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (15%), Permodalan (30%)", "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)"], answer: "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)", explanation: "" },
  { id: 312, version: 4, category: "Regulasi Perbankan", question: "Hal yang perlu diperhatikan dalam penyampaian LHP kepada lembaga lain, sesuai dengan UU P2SK:", options: ["Cakupan Data dan informasi yang disampaikan dapat disesuaikan dengan kebutuhan dan tujuan penyampaian LHP dimaksud.", "Data dan informasi yang disampaikan mengacu pada hasil pemeriksaan terakhir", "Semua benar", "Terdapat permintaan dari lembaga lain atau kewajiban untuk menyampaikannya sesuai amanat peraturan perundang-undangan"], answer: "Semua benar", explanation: "" },
  { id: 313, version: 4, category: "Regulasi Perbankan", question: "POJK terbaru terkait konsolidasi BPR/BPRS adalah", options: ["POJK Nomor 7 Tahun 2024", "POJK Nomor 8 Tahun 2024", "POJK Nomor 9 Tahun 2024", "POJK Nomor 10 Tahun 2024"], answer: "POJK Nomor 7 Tahun 2024", explanation: "" },
  { id: 314, version: 4, category: "Regulasi Perbankan", question: "Penilaian risiko terintegrasi dalam Konglomerasi Keuangan dilakukan sebanyak:", options: ["1 kali dalam 1 triwulan", "2 kali dalam 1 semester", "1 kali dalam 1 tahun", "2 kali dalam 1 tahun"], answer: "2 kali dalam 1 tahun", explanation: "" },
  { id: 315, version: 4, category: "Regulasi Perbankan", question: "Analisis yang dapat digunakan untuk mengetahui pertumbuhan pergerakan ekonomi pada suatu wilayah dan mengindikasikan produktivitas dan daya saing perekonomian suatu daerah dari lapangan usaha/sektor/subsektor, merupakan manfaat dari:", options: ["Analisis NPL", "Analisis forward & backward linkage", "Analisis shift share", "Analisis LQ/DLQ"], answer: "Analisis shift share", explanation: "" },
  { id: 316, version: 4, category: "Regulasi Perbankan", question: "Dibawah ini fungsi Kantor OJK Daerah, kecuali:", options: ["Merencanakan, mengarahkan, menetapkan kebijakan, mengoordinasi, melaksanakan, dan mengevaluasi pengawasan Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), dll.", "Melaksanakan dan mengoordinasikan analisis ekonomi dan keuangan regional", "Melaksanakan Pelindungan Konsumen", "Melakukan koordinasi pengawasan, penetapan sanksi administratif atas pelanggaran administratif, dll."], answer: "Merencanakan, mengarahkan, menetapkan kebijakan, mengoordinasi, melaksanakan, dan mengevaluasi pengawasan Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), dll.", explanation: "" },
  { id: 317, version: 4, category: "Regulasi Perbankan", question: "Pihak-pihak yang menjadi subjek UU Perbankan atau UU Perbankan Syariah (Pihak Terafiliasi), yaitu", options: ["Anggota Pengurus, Badan Pemeriksa, Direksi, Pejabat, atau Karyawan bank, khusus bagi bank yang berbentuk hukum koperasi sesuai dengan peraturan perundang-undangan yang berlaku.", "Semuanya benar.", "Pihak yang memberikan jasanya kepada Bank yang bersangkutan, Bank Syariah atau UUS, antara lain DPS, akuntan publik, penilai dan konsultan hukum dan/atau pihak yang menurut penilaian BI/OJK turut serta memengaruhi pengelolaan Bank Syariah atau UUS, baik langsung maupun tidak langsung, antara lain pengendali bank, pemegang saham, dan keluarganya, keluarga komisaris, dan keluarga direksi", "Anggota Dewan Komisaris atau Pengawas, Direksi atau kuasanya, pejabat, dan karyawan Bank, khusus bagi bank yang berbentuk hukum koperasi sesuai dengan peraturan perundang-undangan yang berlaku"], answer: "Semuanya benar.", explanation: "" },
  { id: 318, version: 4, category: "Regulasi Perbankan", question: "Pengambilalihan BPR yang mengakibatkan beralihnya pengendalian BPR dalam hal memenuhi kriteria:", options: ["Tidak menjadi pemegang saham dengan kepemilikan saham terbesar pada BPR.", "Perubahan kepemilikan disebabkan oleh hibah", "Perubahan kepemilikan disebabkan oleh waris.", "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR."], answer: "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR.", explanation: "" },
  { id: 319, version: 4, category: "Regulasi Perbankan", question: "Dokumen persyaratan permohonan persiapan pelaksanaan pengambilalihan antara lain sebagai berikut, kecuali:", options: ["Surat Pemberitahuan (SPT) Pajak Tahunan calon PSP perorangan", "Akta pengambilalihan yang dibuat di hadapan notaris", "Rancangan pengambilalihan", "Konsep akta jual beli saham"], answer: "Akta pengambilalihan yang dibuat di hadapan notaris", explanation: "" },
  { id: 320, version: 4, category: "Regulasi Perbankan", question: "Manakah dari pernyataan berikut merupakan tujuan dibentuknya Departemen Pemeriksaan Khusus Perbankan (DRKP)", options: ["Melakukan tindak lanjut terhadap temuan Pengawas Bank...", "Semuanya benar", "Mewujudkan perbankan yang sehat...", "Mengungkapkan dengan jelas penyimpangan-penyimpangan..."], answer: "Semuanya benar", explanation: "" },
  { id: 321, version: 4, category: "Regulasi Perbankan", question: "Periodisasi penyusunan Audit Working Plan (AWP):", options: ["AWP wajib disusun sebelum melakukan pengawasan.", "AWP wajib disusun sebelum melakukan pemeriksaan.", "AWP wajib disusun setahun sekali.", "AWP wajib disusun sebelum dan sesudah melakukan pemeriksaan."], answer: "AWP wajib disusun sebelum melakukan pemeriksaan.", explanation: "" },
  { id: 322, version: 4, category: "Regulasi Perbankan", question: "Berdasarkan siklus pengawasan Konglomerasi Keuangan, Integrated Supervisory Plan (ISP) disusun pada tahapan berikut:", options: ["Perencanaan Pengawasan", "Perencanaan Pemeriksaan", "Pengkinian Penilaian Risiko", "Pemahaman Terhadap Konglomerasi Keuangan"], answer: "Perencanaan Pengawasan", explanation: "" },
  { id: 323, version: 4, category: "Regulasi Perbankan", question: "Karakteristik aktivitas keuangan dan perbankan yang diperbolehkan bagi bank syariah dalam menjalankan operasional adalah, kecuali:", options: ["Titipan, Jasa dan Sosial (Zakat, Infaq, Shodaqah dan Wakaf)", "Jual beli dan sewa", "Bagi Hasil", "Bunga atas pinjaman"], answer: "Bunga atas pinjaman", explanation: "" },
  { id: 324, version: 4, category: "Regulasi Perbankan", question: "Berikut merupakan jenis jaringan kantor BPR berdasarkan POJK 7 Tahun 2024, kecuali", options: ["Unit Layanan Keliling", "Kantor Wilayah", "Sentra Keuangan Khusus"], answer: "Kantor Wilayah", explanation: "" },
  { id: 325, version: 4, category: "Regulasi Perbankan", question: "Pada Perizinan perubahan nama bank, Bank BHI wajib menyampaikan dokumen persetujuan perubahan anggaran dasar dari instansi yang berwenang kepada OJK paling lama:", options: ["5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan TDP dari instansi yang berwenang", "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang", "5 (lima) hari setelah Bank BHI menerima persetujuan...", "5 (lima) hari setelah Bank BHI menerima persetujuan... perubahan SIUP..."], answer: "5 (lima) hari kerja setelah Bank BHI menerima persetujuan atau penerimaan pemberitahuan anggaran dasar dari instansi yang berwenang", explanation: "" },
  { id: 326, version: 4, category: "Regulasi Perbankan", question: "Setelah menjalankan fungsinya, Bank Perantara akan:", options: ["Dibubarkan oleh OJK", "Dilebur dengan bank sistemik", "Dilikuidasi sepenuhnya oleh BI", "Dialihkan kepemilikannya kepada pihak lain"], answer: "Dialihkan kepemilikannya kepada pihak lain", explanation: "" },
  { id: 327, version: 4, category: "Regulasi Perbankan", question: "Apa kewajiban berkaitan dengan KK yang diatur dalam Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut:", options: ["Kewajiban Penunjukan DPS", "Kewajiban Memiliki Perusahaan Efek", "Kewajiban Menjaga Rasio KPPMT Minimal 100%", "Kewajiban Pembentukan PIKK"], answer: "Kewajiban Pembentukan PIKK", explanation: "" },
  { id: 328, version: 4, category: "Regulasi Perbankan", question: "Berapa batas waktu konsolidasi BPR non-pemda yang diatur di dalam POJK 7 Tahun 2024?", options: ["1 tahun", "2 tahun", "6 bulan", "3 tahun"], answer: "2 tahun", explanation: "" },
  { id: 329, version: 4, category: "Regulasi Perbankan", question: "Permohonan persetujuan prinsip pendirian BPR diajukan kepada OJK dilampiri dengan dokumen antara lain:", options: ["Data kepemilikan, bukti pembayaran biaya perizinan, akta pendirian", "Data kepemilikan, bukti setoran modal, akta pendirian", "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan", "Data kepemilikan, daftar calon anggota Direksi dan anggota Dewan Komisaris, bukti kesiapan operasional"], answer: "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan", explanation: "" },
  { id: 330, version: 4, category: "Regulasi Perbankan", question: "Manakah satuan kerja yang terlibat pada pengawasan AP/KAP?", options: ["OJKI, DIMB, dan DAJP", "DIMB, DPBS, dan DKEU", "DIMB, DAJP, dan DPEP", "DIMB, DPEP, dan DKEU"], answer: "DIMB, DAJP, dan DPEP", explanation: "" },
  { id: 331, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini yang bukan termasuk dalam komponen penerapan tata kelola yang baik sebagaimana diatur dalam POJK 17 2023 adalah:", options: ["Penyediaan dana kepada pihak terkait penyediaan dana besar", "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu...", "Penerapan manajemen risiko termasuk sistem pengendalian intern", "Integritas pelaporan dan sistem informasi teknologi"], answer: "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu...", explanation: "" },
  { id: 332, version: 4, category: "Regulasi Perbankan", question: "Bentuk hukum Bank Perkreditan Rakyat:", options: ["Koperasi, Perusahaan Umum Daerah, CV", "Yayasan, PT dan CV", "Yayasan, PT dan Perusahaan Umum Daerah", "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah, Koperasi dan PT"], answer: "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah, Koperasi dan PT", explanation: "" },
  { id: 333, version: 4, category: "Regulasi Perbankan", question: "Apa latar belakang utama perlunya penyempurnaan ketentuan terkait pemanfaatan Tenaga Kerja Asing (TKA) dalam sektor perbankan?", options: ["Arahan dari lembaga internasional seperti IMF", "Perubahan kebijakan Kementerian Ketenagakerjaan", "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank", "Permintaan dari asosiasi perbankan asing"], answer: "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank", explanation: "" },
  { id: 334, version: 4, category: "Regulasi Perbankan", question: "Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan ...", options: ["Rahasia Bank.", "Kegiatan Usaha Bank.", "Perizinan.", "Pengawasan Bank."], answer: "Rahasia Bank.", explanation: "" },
  { id: 335, version: 4, category: "Regulasi Perbankan", question: "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah", options: ["Strategy", "Measurable", "Timely", "Relevant"], answer: "Strategy", explanation: "" },
  { id: 336, version: 4, category: "Regulasi Perbankan", question: "Cakupan pengawasan konglomerasi keuangan yang disesuaikan akibat adanya Undang-undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut, kecuali:", options: ["Struktur Konglomerasi Keuangan", "Anggota Konglomerasi Keuangan", "Tata Cara Pemilihan Perusahaan Anak", "Cakupan Kewenangan dalam Melakukan Pemeriksaan"], answer: "Tata Cara Pemilihan Perusahaan Anak", explanation: "" },
  { id: 337, version: 4, category: "Regulasi Perbankan", question: "Pada proses izin pembukaan Kantor Cabang, Bank BHI mengajukan permohonan izin kepada OJK paling lama berapa hari kerja sebelum rencana pelaksanaan pembukaan KC?", options: ["14 hari kerja", "30 hari kerja", "14 hari", "30 hari"], answer: "30 hari kerja", explanation: "" },
  { id: 338, version: 4, category: "Regulasi Perbankan", question: "Apa yang menjadi ciri utama dari rekening giro?", options: ["Kewajiban setoran minimum", "Tidak memiliki jangka waktu", "Bunga yang tinggi", "Terbatas untuk transaksi harian"], answer: "Tidak memiliki jangka waktu", explanation: "" },
  { id: 339, version: 4, category: "Regulasi Perbankan", question: "Apa alasan utama pembaruan ketentuan Rahasia Bank dari PBI menjadi POJK?", options: ["Amanat dari hasil audit eksternal", "Desakan dari lembaga internasional", "Amanat dari UU P2SK dan kebutuhan harmonisasi regulasi perbankan", "Penyesuaian dengan ketentuan internal BI"], answer: "Amanat dari UU P2SK dan kebutuhan harmonisasi regulasi perbankan", explanation: "" },
  { id: 340, version: 4, category: "Regulasi Perbankan", question: "Dibawah ini jenis kegiatan yang dilarang dalam sinergi perbankan yaitu:", options: ["Penggunaan modal bank umum", "Penggunaan infrastruktur jaringan kantor Bank Umum Konvensional bersama dengan Bank Umum Syariah", "Penggunaan SDM Bank Umum Konvensional sebagai tambahan anggota tim audit Bank Umum Syariah", "Layanan syariah bank umum"], answer: "Penggunaan modal bank umum", explanation: "" },
  { id: 341, version: 4, category: "Regulasi Perbankan", question: "Posisi dalam struktur organisasi bank syariah yang tidak ada dalam bank konvensional:", options: ["Direksi", "Komisaris", "Dewan Pengawas Syariah", "Dewan Audit"], answer: "Dewan Pengawas Syariah", explanation: "" },
  { id: 342, version: 4, category: "Regulasi Perbankan", question: "Tantangan dan Isu pada pengawasan BPR, kecuali:", options: ["Digitalisasi proses pemeriksaan BPR (SIMERIK dan penyediaan ACL)", "Transisi compliance ke risk based", "Capacity building terkait risiko kerjasama BPR-fintech, ACL, dll.", "Penguatan koordinasi cross cutting issues pada RKPT"], answer: "Penguatan koordinasi cross cutting issues pada RKPT", explanation: "" },
  { id: 343, version: 4, category: "Regulasi Perbankan", question: "Pernyataan berikut yang tidak benar terkait kewajiban dalam pembukaan Rahasia Bank adalah:", options: ["Bank wajib memiliki prosedur internal pembukaan Rahasia Bank", "Bank wajib melaksanakan pembukaan sesuai dengan izin tertulis OJK", "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat", "Bank dan Pihak Terafiliasi wajib merahasiakan informasi mengenai Nasabah Penyimpan..."], answer: "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat", explanation: "" },
  { id: 344, version: 4, category: "Regulasi Perbankan", question: "Modul yang terdapat pada aplikasi Sistem Informasi Pengawasan Perbankan BPR dan BPRS antara lain:", options: ["Know Your BPR/BPRS, Bank Performance Report (BPeR), Early Warning System (EWS)", "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan", "Know Your BPR/BPRS, Tindakan Pengawasan dan Pemantauan, Enterprise Data Warehouse", "Risk Based Bank Rating (RBBR), Penilaian Risiko APU PPT, Bank Performance Report (BPeR)"], answer: "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan", explanation: "" },
  { id: 345, version: 4, category: "Regulasi Perbankan", question: "Yang merupakan pihak utama bagi bank sebagaimana diatur di dalam POJK PKK adalah:", options: ["Auditor Internal, Direksi, Anggota Dewan Pengawas Syariah", "Pemegang Saham Pengendali, Dewan Komisaris, Auditor Internal", "Pemegang Saham Pengendali, Dewan Komisaris, Direksi", "Dewan Komisaris, Anggota Dewan Pengawas Syariah, Direksi"], answer: "Pemegang Saham Pengendali, Dewan Komisaris, Direksi", explanation: "" },
  { id: 346, version: 4, category: "Regulasi Perbankan", question: "Pos pada laporan keuangan yang memberikan informasi terkait cadangan yang dibentuk oleh bank untuk mengantisipasi potensi kerugian yang mungkin timbul akibat penurunan nilai aset keuangan yaitu", options: ["Cadangan Kerugian Penurunan Nilai (CKPN)", "Cadangan Bank", "Giro Wajib Minimum", "Giro Wajib Bank"], answer: "Cadangan Kerugian Penurunan Nilai (CKPN)", explanation: "" },
  { id: 347, version: 4, category: "Regulasi Perbankan", question: "Tujuan utama dari adanya integrasi pelaporan antara BI, OJK dan LPS yaitu:", options: ["Mengungkapkan potensi adanya kecurangan pelaporan oleh bank", "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi...", "Meringankan biaya di masing-masing otoritas", "Mengurangi fungsi pengawasan OJK terhadap laporan bank"], answer: "Efisiensi pelaporan melalui penyederhanaan aplikasi dan menjaga konsistensi...", explanation: "" },
  { id: 348, version: 4, category: "Regulasi Perbankan", question: "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:", options: ["Meningkatkan fungsi Pengawasan Bank", "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis", "Meningkatkan fungsi intermediasi", "Meningkatkan fungsi Surveilans"], answer: "Meningkatkan fungsi intermediasi", explanation: "" },
  { id: 349, version: 4, category: "Regulasi Perbankan", question: "Struktur dan kedudukan; tugas dan tanggung jawab; wewenang; serta pertanggungjawaban dari SKAI dituangkan bank dalam", options: ["Pedoman audit intern", "Piagam audit intern", "Kerangka acuan audit intern", "Kerangka kerja audit intern"], answer: "Piagam audit intern", explanation: "" },
  { id: 350, version: 4, category: "Regulasi Perbankan", question: "Manakah perbuatan berikut yang merupakan PKP di bidang perkreditan/ pembiayaan", options: ["Pelanggaran terkait rahasia bank.", "Pelanggaran Cease and Desist Order (CDO) berupa pemberian kredit...", "Penarikan uang kas tanpa underlying...", "Rekayasa kolektibilitas kredit/pembiayaan"], answer: "Rekayasa kolektibilitas kredit/pembiayaan", explanation: "" },
  { id: 351, version: 4, category: "Regulasi Perbankan", question: "Keuntungan dari adanya LBUT-Antasena bagi OJK yaitu:", options: ["Meningkatkan transparansi bank", "Memudahkan komunikasi dengan BI dan LPS", "Mengurangi cakupan pengawasan OJK", "Potensi sumber data pengawasan yang komprehensif"], answer: "Potensi sumber data pengawasan yang komprehensif", explanation: "" },
  { id: 352, version: 4, category: "Regulasi Perbankan", question: "Aplikasi OJK yang digunakan untuk melakukan Pendaftaran Akuntan Publik / Kantor Akuntan Publik di OJK:", options: ["SLIK", "SIELOG", "SPRINT", "SIPO", "SIPUTRI"], answer: "SPRINT", explanation: "" },
  { id: 353, version: 4, category: "Regulasi Perbankan", question: "Dalam proses bisnis perkreditan, bank perlu untuk melakukan analisa berjenjang dan/atau terpisah terhadap suatu debitur yang dilakukan oleh unit kerja yang berbeda, antara lain oleh account manager dengan credit reviewer. Praktik dimaksud umumnya dikenal sebagai:", options: ["Segregation of duty", "Four eyes principle", "Third line of defense", "Five Cs of credit"], answer: "Four eyes principle", explanation: "" },
  { id: 354, version: 4, category: "Regulasi Perbankan", question: "Berikut ini adalah aplikasi produk yang tepat dari konsep dasar bank syariah dalam penyaluran dana, dimana bank berfungsi sebagai investor/financing provider, kecuali:", options: ["Pembiayaan Prinsip Jual Beli (Murabahah, Salam, Istishna)", "Pembiayaan Prinsip Bagi Hasil (Mudharabah, Musyarakah)", "Pembiayaan Prinsip Sewa (Ijarah, Ijarah Muntahiya Bil at-Tamlik)", "Pembiayaan Prinsip Jasa (Qardh, Wakaf)"], answer: "Pembiayaan Prinsip Jasa (Qardh, Wakaf)", explanation: "" },
  { id: 355, version: 4, category: "Regulasi Perbankan", question: "Dasar Hukum Pengawasan Perbankan oleh OJK adalah", options: ["Undang-Undang Nomor 4 tahun 2022", "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023", "Undang-Undang Nomor 22 tahun 2011 dan Undang-Undang Nomor 4 tahun 2022", "Undang-Undang Nomor 4 tahun 2011 dan Undang-Undang Nomor 21 tahun 2023"], answer: "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023", explanation: "" },
  { id: 356, version: 4, category: "Regulasi Perbankan", question: "Tahapan analisis BPeR yaitu:", options: ["Analisis Rasio Signifikan, Analisis Rasio Pendukung...", "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kualitatif...", "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kewajaran Rasio, Perumusan Kesimpulan", "Analisis Rasio Utama, Analisis Kualitatif, Analisis Terintegrasi..."], answer: "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kewajaran Rasio, Perumusan Kesimpulan", explanation: "" },
  { id: 357, version: 4, category: "Regulasi Perbankan", question: "Pelapor dilarang menggunakan Informasi Debitur dari SLIK untuk keperluan berikut, kecuali untuk:", options: ["Menekan pihak ketiga dalam rangka pengajuan kerja sama", "Menggunakan data debitur untuk kegiatan politik atau kampanye", "Pengelolaan SDM pelapor", "Mengidentifikasi kualitas debitur untuk pemenuhan kebutuhan satu pihak"], answer: "Pengelolaan SDM pelapor", explanation: "" },
  { id: 358, version: 4, category: "Regulasi Perbankan", question: "Saat pencairan kredit, bank mencatat jurnal sebagai berikut:", options: ["Db. Kredit / Kr. Bunga", "Db. Beban bunga deposito / Kr. Kas", "Db. Kas / Kr. Kredit", "Db. Kredit / Kr. Kas"], answer: "Db. Kredit / Kr. Kas", explanation: "" },
  { id: 359, version: 4, category: "Regulasi Perbankan", question: "PT Bank Nusantara merupakan perusahaan anak dari ABC Bank, Ltd., yaitu Bank terbesar ke-5 di dunia dari total aset dan mendapatkan rating AAA dari Fetch Ratings serta Poor & Standars. Dalam penilaian permodalan RBBR, informasi tersebut paling tepat sebagai penilaian atas:", options: ["Risiko permodalan", "Manajemen permodalan bank", "Kemampuan akses permodalan", "Kecukupan permodalan"], answer: "Kemampuan akses permodalan", explanation: "" },
  { id: 360, version: 4, category: "Regulasi Perbankan", question: "Forum Panel Terintegrasi dilaksanakan pada 2 tahap dalam siklus pengawasan Konglomerasi Keuangan, yaitu:", options: ["Pemahaman terhadap Konglomerasi Keuangan dan Perencanaan Pengawasan", "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan", "Perencanaan Pengawasan dan Koordinasi Pemeriksaan berdasarkan Risiko", "Pemahaman terhadap Konglomerasi Keuangan dan Pengkinian Risiko..."], answer: "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan", explanation: "" },
  { id: 361, version: 4, category: "Regulasi Perbankan", question: "OJK dapat menghentikan penilaian kemampuan dan kepatutan pihak utama BPR atau BPR Syariah apabila", options: ["Berkomitmen terhadap pengembangan operasional BPR yang sehat", "Tidak sedang menjalani proses hukum", "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK", "Tidak sedang dalam proses penilaian kembali karena terdapat indikasi permasalahan integritas"], answer: "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK", explanation: "" },
  { id: 362, version: 4, category: "Regulasi Perbankan", question: "Dengan telah diundangkannya Peraturan OJK Nomor 30 Tahun 2024 tentang Konglomerasi Keuangan dan Perusahaan Induk Konglomerasi Keuangan, kedepannya struktur KK yang laporan keuangannya dikonsolidasikan, adalah:", options: ["Struktur Horizontal", "Struktur Horizontal dan Mixed", "Struktur Vertikal dan Horizontal", "Struktur Vertikal"], answer: "Struktur Vertikal", explanation: "" },
  { id: 363, version: 4, category: "Regulasi Perbankan", question: "Berapa lamakah persetujuan prinsip yang telah diberikan OJK dalam rangka pendirian LPIP berlaku?", options: ["Tidak terdapat masa berlaku", "Paling lama 3 (tiga) bulan...", "Paling lama 24 (dua puluh empat) bulan...", "Paling lama 12 (dua belas) bulan...", "Paling lama 6 (enam) bulan..."], answer: "Paling lama 12 (dua belas) bulan...", explanation: "" },
  { id: 364, version: 4, category: "Regulasi Perbankan", question: "Komponen Know Your BPR/BPRS (KYBPR/BPRS):", options: ["Kelembagaan dan Organisasi", "Semua benar", "Bisnis Utama dan Infrastruktur Pendukung", "Perkembangan Kinerja"], answer: "Semua benar", explanation: "" },
  { id: 365, version: 4, category: "Regulasi Perbankan", question: "Pihak utama sebagai berikut dapat tidak melalui tahapan klarifikasi dalam proses PKK, kecuali:", options: ["Mantan Direktur Korporasi yang akan menjabat sebagai Direktur Utama pada bank dengan BUKU yang lebih tinggi", "Mantan Direktur Kepatuhan yang akan menjabat sebagai anggota Direksi di bank lain dengan BUKU lebih tinggi", "Mantan Direktur Utama yang akan menjabat sebagai anggota Direksi di bank lain dengan BUKU lebih rendah", "Mantan Direktur Kepatuhan yang akan menjabat sebagai Direktur Utama di bank dengan BUKU yang sama"], answer: "Mantan Direktur Korporasi yang akan menjabat sebagai Direktur Utama pada bank dengan BUKU yang lebih tinggi", explanation: "" },
  { id: 366, version: 4, category: "Regulasi Perbankan", question: "Produk bank syariah yang tidak tersedia di bank konvensional adalah:", options: ["Kartu kredit", "Gadai (Rahn)", "Tabungan dan Deposito", "Letter of Credit (LC)"], answer: "Gadai (Rahn)", explanation: "" },
  { id: 367, version: 4, category: "Regulasi Perbankan", question: "Pengaturan terkait kualitas aset, KPMM, dan TKS, termasuk dalam lingkup regulasi:", options: ["Material", "Komersial", "Kelembagaan", "Prudensial"], answer: "Prudensial", explanation: "" },
  { id: 368, version: 4, category: "Regulasi Perbankan", question: "Pengumuman laporan publikasi keuangan dan informasi kinerja keuangan tahunan bagi bank paling lambat dilaksanakan pada:", options: ["4 bulan setelah akhir tahun buku", "3 bulan setelah akhir tahun buku", "1 bulan setelah akhir tahun buku", "1 bulan setelah diterbitkannya laporan auditor independen"], answer: "4 bulan setelah akhir tahun buku", explanation: "" },
  { id: 369, version: 4, category: "Regulasi Perbankan", question: "Berikut ini yang termasuk jenis perizinan yang tergolong dalam entry kelembagaan:", options: ["Pendirian bank, pembukaan kantor cabang, dan perubahan kegiatan usaha...", "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.", "Pembukaan Kantor perwakilan Bank..., pembukaan unit usaha syariah...", "Penggabungan usaha bank syariah, perubahan kegiatan usaha bank syariah..."], answer: "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.", explanation: "" },
  { id: 370, version: 4, category: "Regulasi Perbankan", question: "Berikut ini merupakan landasan utama penyelenggaraan Program Pengembangan Ekonomi Daerah (PED):", options: ["Literasi Keuangan", "Stabilitas LJK", "Semua benar", "Pelindungan Konsumen"], answer: "Semua benar", explanation: "" },
  { id: 371, version: 4, category: "Regulasi Perbankan", question: "BPR ABC dengan modal inti sebesar Rp37 miliar bermaksud mengajukan permohonan persetujuan penyelenggaraan produk berupa penerbit kartu ATM. Penilaian terhadap prinsip penyelenggaraan produk atas rencana tersebut meliputi:", options: ["Kondisi laporan keuangan dan tingkat kesehatan.", "Penerapan tata kelola dan pemenuhan struktur organisasi.", "Kesiapan teknologi informasi dan perlindungan konsumen.", "Permodalan yang memadai dan penerapan manajemen risiko."], answer: "Permodalan yang memadai dan penerapan manajemen risiko.", explanation: "" },
  { id: 372, version: 4, category: "Regulasi Perbankan", question: "Manakah pengertian Penyimpangan Ketentuan Perbankan (PKP) adalah", options: ["Tindakan yang disengaja oleh anggota manajemen perusahaan...", "Semua jawaban benar", "Tindakan penyimpangan yang melanggar ketentuan, antara lain UU Perbankan, UU Perbankan Syariah, POJK, PBI, dll.", "Tindakan sengaja melanggar ketentuan internal..."], answer: "Tindakan penyimpangan yang melanggar ketentuan, antara lain UU Perbankan, UU Perbankan Syariah, POJK, PBI, dll.", explanation: "" },
  { id: 373, version: 4, category: "Regulasi Perbankan", question: "Aspek layak investasi adalah:", options: ["Program dapat diimplementasikan dan berlangsung secara kontinu untuk memberikan manfaat...", "Semua jawaban salah", "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana", "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi"], answer: "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana", explanation: "" },
  { id: 374, version: 4, category: "Regulasi Perbankan", question: "Dasar dilakukannya reorganisasi di bidang perbankan, kecuali", options: ["Untuk menciptakan IJK daerah yang kuat dan sehat", "Amanat Dewan Komisioner OJK", "MPSJKI 2021-2025", "Amanat UU P2SK"], answer: "Amanat Dewan Komisioner OJK", explanation: "" },
  { id: 375, version: 4, category: "Regulasi Perbankan", question: "BPR atau BPR Syariah wajib menyampaikan laporan pelaksanaan perubahan kepemilikan saham... disertai dengan dokumen sebagai berikut, kecuali:", options: ["Risalah RUPS", "Salinan akta perubahan anggaran dasar", "Keputusan atau surat penerimaan pemberitahuan perubahan anggaran dasar...", "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor"], answer: "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor", explanation: "" },
  { id: 376, version: 4, category: "Regulasi Perbankan", question: "Berikut ini termasuk prinsip dalam penyusunan Integrated Supervisory Plan, kecuali:", options: ["Actual", "Relevant", "Specific", "Achievable"], answer: "Actual", explanation: "" },
  { id: 377, version: 4, category: "Regulasi Perbankan", question: "Persyaratan publikasi di bank mengacu pada standar Basel, yaitu:", options: ["Pillar III: Market Discipline", "Pillar II: Supervisory Review Process", "Semua salah", "Pillar I: Minimum Capital Requirements"], answer: "Pillar III: Market Discipline", explanation: "" },
  { id: 378, version: 4, category: "Regulasi Perbankan", question: "BPR ditetapkan Dalam Status Pengawasan Khusus (DPK) dengan jangka waktu 3 bulan apabila memenuhi kriteria:", options: ["Rasio KPMM kurang dari 0% dan/atau CR rata-rata 6 bulan terakhir kurang dari 1%", "Rasio KPMM kurang dari 8% dan/atau CR rata-rata 6 bulan terakhir kurang dari 1%", "Rasio KPMM kurang dari 8% namun lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%", "Rasio KPMM kurang dari 0% dan/atau CR rata-rata 6 bulan terakhir lebih dari 4%"], answer: "Rasio KPMM kurang dari 8% namun lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%", explanation: "" },
  { id: 379, version: 4, category: "Regulasi Perbankan", question: "Suku bunga dasar kredit adalah..", options: ["Suku bunga kredit yang diberikan kepada nasabah...", "Indikasi suku bunga efektif kredit terendah... namun tidak digunakan sebagai acuan...", "Estimasi suku bunga kredit yang akan diberikan...", "Indikasi suku bunga efektif kredit terendah yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin)..."], answer: "Indikasi suku bunga efektif kredit terendah yang mencerminkan harga pokok dana untuk kredit (cost of fund), biaya overhead (overhead cost), dan marjin keuntungan (margin)...", explanation: "" },
  { id: 380, version: 4, category: "Regulasi Perbankan", question: "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS, terdapat status pengawasan BDP yang merupakan kepanjangan dari", options: ["Bank Dalam Perbaikan", "Bank Dalam Pengawasan", "Bank dalam Penyelesaian", "Bank Dalam Penyehatan"], answer: "Bank Dalam Penyehatan", explanation: "" },
  { id: 381, version: 4, category: "Regulasi Perbankan", question: "Berikut ini merupakan jenis-jenis perizinan kelembagaan dan jaringan kantor, kecuali:", options: ["Pemindahan alamat", "Pendirian dan Cabut Izin Usaha Bank", "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum", "Perubahan Nama Bank"], answer: "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum", explanation: "" },
  { id: 382, version: 4, category: "Regulasi Perbankan", question: "Dasar klasifikasi aset keuangan sesuai dengan PSAK 71 adalah:", options: ["Model bisnis bank dalam mengelola aset keuangan dan karakteristik arus kas kontraktual dari aset keuangan", "Arus kas pemegang saham", "Total aset bank", "Judgment Direktur Kepatuhan"], answer: "Model bisnis bank dalam mengelola aset keuangan dan karakteristik arus kas kontraktual dari aset keuangan", explanation: "" },
  { id: 383, version: 4, category: "Regulasi Perbankan", question: "Berikut merupakan fungsi pengembangan pengawasan perbankan, kecuali:", options: ["Meningkatkan kompetensi pengawas perbankan.", "Merencanakan, mengendalikan, dan melaksanakan pengembangan metodologi pengawasan perbankan...", "Melaksanakan audit internal pengawasan perbankan.", "Melaksanakan, mengkoordinasi dan mereview pengembangan Suptech Perbankan."], answer: "Melaksanakan audit internal pengawasan perbankan.", explanation: "" },
  { id: 384, version: 4, category: "Regulasi Perbankan", question: "Metode analisis yang dapat digunakan untuk identifikasi potensi sektor/subsektor, adalah:", options: ["Analisis nilai tambah sektor a.l dengan analisis forward & backward linkage", "Analisis pertumbuhan/produktivitas/daya saing perekonomian a.l dengan analisis shift share", "Semua benar", "Analisis potensi basis sektor ekonomi LQ/DLQ"], answer: "Semua benar", explanation: "" },
  { id: 385, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini, yang termasuk dalam Regulatory Triangle for Promoting Finance Stability adalah:", options: ["Pengawasan", "Perizinan", "Semua benar", "Pengaturan"], answer: "Semua benar", explanation: "" },
  { id: 386, version: 4, category: "Regulasi Perbankan", question: "BUK yang mengajukan izin konversi menjadi BUS, apabila telah memperoleh izin, maka:", options: ["Melakukan kegiatan usaha syariah 6 bulan sejak izin berlaku", "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku", "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari", "Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari"], answer: "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari", explanation: "" },
  { id: 387, version: 4, category: "Regulasi Perbankan", question: "Untuk mengetahui detail penjelasan dari angka yang tercantum dalam laporan posisi keuangan di laporan keuangan audited, pengawas dapat melihat:", options: ["Laporan tata kelola Perusahaan", "Laporan perubahan ekuitas", "Laporan arus kas", "Catatan atas laporan keuangan"], answer: "Catatan atas laporan keuangan", explanation: "" },
  { id: 388, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini, pernyataan yang tidak sesuai dengan POJK Nomor 12/POJK.03/2021 adalah:", options: ["Pembukaan/Penutupan Kantor di Luar Negeri memerlukan izin DIMB/OJK", "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK", "Penutupan KC memerlukan izin DIMB/OJK", "Pemindahan alamat KP yang mengakibatkan perubahan tempat kedudukan..."], answer: "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK", explanation: "" },
  { id: 389, version: 4, category: "Regulasi Perbankan", question: "Berikut adalah lingkup regulasi perbankan syariah di Indonesia, yaitu:", options: ["Kelembagaan, material, dan standar akuntansi dan pelaporan", "Kelembagaan, komersial, dan standar akuntansi dan pelaporan", "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan", "Kelembagaan, intelektual, dan standar akuntansi dan pelaporan"], answer: "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan", explanation: "" },
  { id: 390, version: 4, category: "Regulasi Perbankan", question: "Total eksposur Bank dalam penetapan status sistemik terdiri dari beberapa komponen berikut, kecuali:", options: ["Eksposur pada neraca (on-balance sheet exposure)", "Pajak penghasilan tangguhan (deferred tax)", "Potential future exposure dari transaksi derivative", "Eksposur pada rekening administratif (off-balance sheet exposure)"], answer: "Pajak penghasilan tangguhan (deferred tax)", explanation: "" },
  { id: 391, version: 4, category: "Regulasi Perbankan", question: "Indikator yang menunjukkan hubungan antara sektor dari sisi penyediaan input produksi, dikenal sebagai indikator:", options: ["Forward-Linkage", "Backward-Linkage", "Tidak ada yang benar", "Intermediary-Linkage"], answer: "Backward-Linkage", explanation: "" },
  { id: 392, version: 4, category: "Regulasi Perbankan", question: "Bentuk mekanisme penetapan sektor ekonomi unggulan dalam program pengembangan ekonomi daerah yang dapat menjadi landasan pembentukan Perjanjian Kerja Sama adalah:", options: ["Pelaksanaan FGD dengan stakeholder", "Analisis LQ/DLQ", "Analisis shift share", "Analisis NPL"], answer: "Pelaksanaan FGD dengan stakeholder", explanation: "" },
  { id: 393, version: 4, category: "Regulasi Perbankan", question: "Laporan Keuangan yang digunakan untuk melaporkan penyaluran pembiayaan yang telah ditetapkan penggunaannya oleh pemilik dana (shahibul maal) adalah:", options: ["Laporan Investasi Terikat", "Laporan Investasi Tidak Terikat", "Laba Rugi", "Neraca"], answer: "Laporan Investasi Terikat", explanation: "" },
  { id: 394, version: 4, category: "Regulasi Perbankan", question: "Pendirian BUS/BPRS baru, Spin Off UUS dan Perubahan Kegiatan Usaha (Konversi) BUK/BPR menjadi BUS/BPRS adalah termasuk kelompok perizinan:", options: ["Exit Kelembagaan", "Operasional Kelembagaan dan Exit Kelembagaan", "Operasional Kelembagaan", "Entry Kelembagaan"], answer: "Entry Kelembagaan", explanation: "" },
  { id: 395, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini pernyataan yang tidak benar terkait Penggabungan/Peleburan adalah:", options: ["Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang sama", "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang berbeda...", "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional", "Penggabungan/Peleburan hanya dapat dilakukan antar BPR"], answer: "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional", explanation: "" },
  { id: 396, version: 4, category: "Regulasi Perbankan", question: "Landasan ketentuan internal di OJK, berupa:", options: ["Peraturan Dewan Komisioner (PDK) dan Surat Edaran Otoritas Jasa Keuangan (SEOJK)", "Peraturan Dewan Komisioner (PDK) dan Surat Edaran Dewan Komisioner (SEDK)", "Peraturan Otoritas Jasa Keuangan (POJK) dan Surat Edaran Dewan Komisioner (SEDK)", "Peraturan Otoritas Jasa Keuangan (POJK) dan Surat Edaran Otoritas Jasa Keuangan (SEOJK)"], answer: "Peraturan Dewan Komisioner (PDK) dan Surat Edaran Dewan Komisioner (SEDK)", explanation: "" },
  { id: 397, version: 4, category: "Regulasi Perbankan", question: "Di bawah ini merupakan prinsip perbankan syariah berdasarkan Undang-Undang Nomor 21 Tahun 2008, kecuali:", options: ["Prinsip Syariah", "Demokrasi ekonomi", "Prinsip sosial", "Prinsip kehati-hatian"], answer: "Prinsip sosial", explanation: "" },
  { id: 398, version: 4, category: "Regulasi Perbankan", question: "Penyusunan Laporan Large Exposure (LEX) merupakan fungsi pada spesialis", options: ["Pasar dan Likuiditas", "Kredit", "Teknologi Informasi", "APU-PPT"], answer: "Kredit", explanation: "" },
  { id: 399, version: 4, category: "Regulasi Perbankan", question: "Mekanisme Koordinasi dalam rangka pemantauan manajemen krisis memerlukan informasi baik dari sumber informasi internal maupun eksternal, kecuali:", options: ["Internal yaitu berupa hasil analisis koordinasi Pemantauan Sektor Perbankan", "Eksternal yaitu berdasarkan Sumber Informasi Eksternal Sektor Perbankan", "Internal yaitu berupa hasil pengawasan Satker Pengawas Sektor Perbankan", "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian"], answer: "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian", explanation: "" },
  { id: 400, version: 4, category: "Regulasi Perbankan", question: "BPR XYZ telah diberikan perpanjangan jangka waktu pengawasan intensif dan akan berakhir pada tanggal 2 November 2021. Apabila sampai dengan batas waktu perpanjangan tersebut berakhir tidak terdapat peningkatan kondisi keuangan dan rasio KPMM berada pada posisi 9%, maka:", options: ["Jawaban tidak ada yang sesuai.", "OJK menetapkan perpanjangan jangka waktu pengawasan intensif.", "OJK meminta BPR untuk menyusun rencana tindak (action plan).", "OJK menetapkan BPR dalam pengawasan khusus."], answer: "OJK menetapkan BPR dalam pengawasan khusus.", explanation: "" },

  // SOAL VERSI 13
  {
    "id": 401,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Kriteria keunggulan komoditas termasuk dalam top 5 produksi komoditas agrikultur nasional bertujuan untuk, kecuali:",
    "options": [
      "Memberikan keyakinan ketersediaan suplai komoditas di daerah secara signifikan",
      "Memberikan keyakinan kepada offtaker potensial yang bonafide",
      "Memberikan keyakinan komoditas memiliki basis di daerah",
      "Memberikan keyakinan ketersediaan pasar atas komoditas dimaksud"
    ],
    "answer": "Memberikan keyakinan komoditas memiliki basis di daerah"
  },
  {
    "id": 402,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Pemegang Saham Pengendali (PSP) Bank Syariah dalam memeuhi ketentuan PKK kepada pihak utama, wajib membuat pernyataan-pernyataan antara lain sbb, kecuali:",
    "options": [
      "Memiliki sertifikat pelatihan perbankan syariah",
      "Memiliki komitmen untuk mematuhi perundang-undangan yang berlaku",
      "Tidak memiliki kredit macet dan/atau tidak tercantum dalam daftar pihak yang memiliki kredit macet",
      "Memiliki komitmen terhadap pengembangan operasional bank syariah yang sehat"
    ],
    "answer": "Memiliki sertifikat pelatihan perbankan syariah"
  },
  {
    "id": 403,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Kondisi ekonomi daerah dapat dicerminkan melalui indikator berikut, kecuali:",
    "options": [
      "Tingkat pengangguran",
      "Tingkat suku bunga",
      "Produk Domestik Regional Bruto",
      "Inflasi"
    ],
    "answer": "Tingkat suku bunga"
  },
  {
    "id": 404,
    "version": 13,
    "category": "Perbankan",
    "question": "Berapa persentase BMPK untuk kredit kepada 1 kelompok peminjam BPR?",
    "options": [
      "5% dari modal BPR",
      "10% dari modal BPR",
      "20% dari modal BPR",
      "30% dari modal BPR"
    ],
    "answer": "30% dari modal BPR"
  },
  {
    "id": 405,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Pengalihan fungsi dan tugas pengawasan LJK Daerah dan market conduct dari Kantor Pusat ke Kantor Daerah merupakan dampak penataan organisasi OJK sebagaimana diatur dalam Surat Edaran Dewan Komisioner:",
    "options": [
      "SEDK Nomor 19/SEDK.02/2024 Perubahan Ketiga Atas Surat Edaran Dewan Komisioner Otoritas Jasa Keuangan Nomor 19/SEDK.02/2023 tentang Organisasi Bidang Kebijakan Strategis",
      "SEDK Nomor 19/SEDK.02/2023 tentang Organisasi Bidang Kebijakan Strategis",
      "SEDK Nomor 19/SEDK.02/2024 tentang Organisasi Bidang Kebijakan Strategis",
      "SEDK Nomor 19/SEDK.02/2023 Perubahan Ketiga Atas Surat Edaran Dewan Komisioner Otoritas Jasa Keuangan Nomor 19/SEDK.02/2024 tentang Organisasi Bidang Kebijakan Strategis"
    ],
    "answer": "SEDK Nomor 19/SEDK.02/2024 Perubahan Ketiga Atas Surat Edaran Dewan Komisioner Otoritas Jasa Keuangan Nomor 19/SEDK.02/2023 tentang Organisasi Bidang Kebijakan Strategis"
  },
  {
    "id": 406,
    "version": 13,
    "category": "Perbankan",
    "question": "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS yang merupakan parameter BPR dalam status NORMAL adalah:",
    "options": [
      "Rasio KPMM > 12%",
      "Rasio KPMM > 8% sampai dengan ≤ 12%",
      "Rasio KPMM > 5% sampai dengan ≤ 8%",
      "Rasio KPMM ≤ 5%"
    ],
    "answer": "Rasio KPMM > 12%"
  },
  {
    "id": 407,
    "version": 13,
    "category": "Perbankan",
    "question": "Berikut ini merupakan fungsi dari Bank Perantara, kecuali:",
    "options": [
      "Menjamin seluruh simpanan nasabah bank lain",
      "Mengambil alih seluruh atau sebagian aset dan/atau liabilitas bank yang telah dicabut izin usahanya",
      "Mempercepat proses likuidasi bank yang telah dicabut izin usahanya",
      "Menjaga keberlangsungan layanan perbankan bank yang dicabut izin usahanya"
    ],
    "answer": "Menjamin seluruh simpanan nasabah bank lain"
  },
  {
    "id": 408,
    "version": 13,
    "category": "Syariah",
    "question": "Prinsip-prinsip Syariah sebagaimana dimaksud UU No.21 Tahun 2008 mewajibkan Perbankan Syariah menjalankan produk dan aktivitasnya tidak mengandung unsur-unsur yang dilarang oleh syariah yaitu:",
    "options": [
      "Riba, Maisir, Gharar dan Haram",
      "Riba, Maisir, Haram dan Zalim",
      "Riba, Gharar, Haram dan Zalim",
      "Riba, Maisir, Gharar, Haram dan Zalim"
    ],
    "answer": "Riba, Maisir, Gharar, Haram dan Zalim"
  },
  {
    "id": 409,
    "version": 13,
    "category": "Perizinan",
    "question": "Tahapan di bawah ini yang tidak dilakukan OJK dalam memproses izin usaha BPR adalah:",
    "options": [
      "Wawancara calon pemegang saham",
      "Pengumuman di surat kabar",
      "Pembentukan Tim Pengawas BPR baru",
      "Penilaian studi kelayakan"
    ],
    "answer": "Penilaian studi kelayakan"
  },
  {
    "id": 410,
    "version": 13,
    "category": "Syariah",
    "question": "Unit Usaha Syariah (UUS) merupakan bagian dari:",
    "options": [
      "Bank Umum Syariah",
      "Bank Umum Konvensional",
      "Bank Pembiayaan Rakyat Syariah",
      "Bank Perkreditan Rakyat"
    ],
    "answer": "Bank Umum Konvensional"
  },
  {
    "id": 411,
    "version": 13,
    "category": "Permodalan",
    "question": "Berapakah besaran capital conservation buffer?",
    "options": [
      "2,5% dari ATMR",
      "1,5% dari ATMR",
      "2% dari ATMR",
      "3% dari ATMR"
    ],
    "answer": "2,5% dari ATMR"
  },
  {
    "id": 412,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "Sebutkan pihak yang dapat memperoleh informasi perkreditan dari LPIP",
    "options": [
      "Lembaga Keuangan yang menjadi sumber data LPIP yang bersangkutan",
      "Non Lembaga Keuangan yang menjadi sumber data LPIP yang bersangkutan",
      "Debitur yang bersangkutan",
      "Semua Benar"
    ],
    "answer": "Non Lembaga Keuangan yang menjadi sumber data LPIP yang bersangkutan"
  },
  {
    "id": 413,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Dalam melaksanakan fungsi audit intern, SKAI melakukan komunikasi dengan OJK yang membahas hal-hal berikut, kecuali",
    "options": [
      "Penetapan auditor ekstern",
      "Laporan hasil audit intern",
      "Rencana audit bulanan",
      "Isu-isu strategis"
    ],
    "answer": "Rencana audit bulanan"
  },
  {
    "id": 414,
    "version": 13,
    "category": "Perbankan",
    "question": "Jangka waktu penetapan status pengawasan BDP untuk BPR/BPRS adalah",
    "options": [
      "Paling lama 6 bulan dan dapat diperpanjang",
      "Paling lama 1 tahun dan dapat diperpanjang",
      "Paling lama 1 tahun dan tidak dapat diperpanjang",
      "Tidak memiliki jangka waktu"
    ],
    "answer": "Paling lama 1 tahun dan tidak dapat diperpanjang"
  },
  {
    "id": 415,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Berikut ini termasuk prinsip dalam Integrated Risk Rating, kecuali:",
    "options": [
      "Risk Based",
      "Relevant",
      "Forward Looking",
      "Prudential"
    ],
    "answer": "Relevant"
  },
  {
    "id": 416,
    "version": 13,
    "category": "Perizinan",
    "question": "Aspek penilaian uji kemampuan dan kepatutan new entry calon pengurus bank:",
    "options": [
      "Karakter, reputasi keuangan dan pengetahuan",
      "Integritas, reputasi keuangan dan kompetensi",
      "Integritas, pengalaman kerja dan pengetahuan",
      "Integritas, kompetensi dan reputasi profesi"
    ],
    "answer": "Integritas, reputasi keuangan dan kompetensi"
  },
  {
    "id": 417,
    "version": 13,
    "category": "SDM",
    "question": "POJK mana yang mengatur tentang Pengembangan Kualitas Sumber Daya Manusia BPR/Syariah?",
    "options": [
      "POJK 19/2023",
      "POJK 19/2024",
      "POJK 18/2023",
      "POJK 18/2024"
    ],
    "answer": "POJK 19/2023"
  },
  {
    "id": 418,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Indikator yang menunjukkan hubungan antara sektor dari sisi penyediaan input produksi, dikenal sebagai indikator:",
    "options": [
      "Backward-Linkage",
      "Tidak ada yang benar",
      "Intermediary-Linkage",
      "Forward-Linkage"
    ],
    "answer": "Forward-Linkage"
  },
  {
    "id": 419,
    "version": 13,
    "category": "Akuntansi",
    "question": "Pendapatan yang diakui oleh Bank Syariah dalam laporan laba rugi, kecuali:",
    "options": [
      "Pendapatan margin murabahah",
      "Pendapatan bagi hasil mudharabah",
      "Pendapatan sewa ijarah",
      "Denda"
    ],
    "answer": "Denda"
  },
  {
    "id": 420,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "LPIP wajib menghasilkan informasi perkreditan yang memiliki nilai tambah. Berikut adalah informasi perkreditan yang memiliki nilai tambah, kecuali:",
    "options": [
      "Informasi kredit macet pada SLIK",
      "Informasi kredit bermasalah",
      "Informasi debitur non-kredit",
      "Data kolektibilitas"
    ],
    "answer": "Informasi kredit macet pada SLIK"
  },
  {
    "id": 421,
    "version": 13,
    "category": "Perizinan",
    "question": "Dokumen yang disampaikan pada saat mengajukan permohonan persiapan pencabutan izin usaha BPR antara lain:",
    "options": [
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara",
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian seluruh kewajiban kepada pihak ketiga",
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti pembentukan likuidator",
      "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti pengembalian izin usaha ke OJK"
    ],
    "answer": "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara"
  },
  {
    "id": 422,
    "version": 13,
    "category": "Syariah",
    "question": "BUK yang mengajukan izin konversi menjadi BUS, apabila telah memperoleh izin, maka:",
    "options": [
      "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku",
      "Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 180 hari",
      "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 180 hari",
      "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari"
    ],
    "answer": "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari"
  },
  {
    "id": 423,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan yang wajib membentuk PIKK Nonoperasional, PSP dan/atau PSPT wajib menyampaikan dokumen rencana pembentukan PIKK paling lambat:",
    "options": [
      "1 bulan",
      "3 bulan",
      "6 bulan",
      "12 bulan"
    ],
    "answer": "6 bulan"
  },
  {
    "id": 424,
    "version": 13,
    "category": "Teknologi Informasi",
    "question": "Produk yang memberikan kemudahan untuk pembayaran secara elektronik seperti tagihan bulanan dan transfer antarbank adalah",
    "options": [
      "Mobile Banking",
      "Internet Banking",
      "E-wallet",
      "SMS Banking"
    ],
    "answer": "Internet Banking"
  },
  {
    "id": 425,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Periode penyusunan Integrated Supervisory Plan dilakukan selambat-lambatnya pada:",
    "options": [
      "31 Desember tahun sebelumnya",
      "30 Januari tahun berjalan",
      "31 Januari tahun berjalan",
      "30 Maret tahun berjalan"
    ],
    "answer": "31 Januari tahun berjalan"
  },
  {
    "id": 426,
    "version": 13,
    "category": "Perbankan",
    "question": "Penggolongan kualitas kredit BPR adalah kecuali:",
    "options": [
      "Dalam Penyehatan",
      "Lancar",
      "Diragukan",
      "Macet"
    ],
    "answer": "Dalam Penyehatan"
  },
  {
    "id": 427,
    "version": 13,
    "category": "Perizinan",
    "question": "BPR tidak melaksanakan mekanisme piloting review dan harus mengajukan permohonan persetujuan penyelenggaraan Produk lanjutan baru tanpa melalui proyek uji coba terbatas, dalam hal:",
    "options": [
      "BPR akan menyelenggarakan Produk lanjutan baru yang sejenis dengan Produk dasar yang diselenggarakan BPR.",
      "BPR telah memenuhi kriteria penilaian tingkat kesehatan dan GCG dengan kategori 1 atau 2",
      "BPR membuktikan bahwa penyelenggaraan Produk lanjutan baru tidak memerlukan proyek uji coba terbatas.",
      "Semua Benar"
    ],
    "answer": "BPR membuktikan bahwa penyelenggaraan Produk lanjutan baru tidak memerlukan proyek uji coba terbatas."
  },
  {
    "id": 428,
    "version": 13,
    "category": "Manajemen Risiko",
    "question": "Yang tidak termasuk jenis risiko yang spesifik wajib dikelola oleh BPR adalah:",
    "options": [
      "Kredit",
      "Pasar",
      "Operasional",
      "Likuiditas"
    ],
    "answer": "Pasar"
  },
  {
    "id": 429,
    "version": 13,
    "category": "Manajemen Risiko",
    "question": "Porsi terbesar evaluasi atas kasus ini oleh Pengawas dilakukan pada penilaian RBBR dalam analisa:",
    "options": [
      "Risiko Likuiditas",
      "Risiko Operasional",
      "Risiko Reputasi",
      "Risiko Kredit"
    ],
    "answer": "Risiko Operasional"
  },
  {
    "id": 430,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Pihak Utama bagi Bank adalah sebagai berikut, kecuali:",
    "options": [
      "Direksi",
      "Auditor Internal",
      "Dewan Komisaris",
      "Pemegang Saham Pengendali"
    ],
    "answer": "Auditor Internal"
  },
  {
    "id": 431,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Manakah dari pernyataan berikut merupakan tujuan dibentuknya Departemen Pemeriksaan Khusus Perbankan (DRKP)",
    "options": [
      "Semuanya benar",
      "Penanganan kasus bank (troubled bank)",
      "Penanganan kasus Pemegang Saham Pengendali (PSP) yang berindikasi tindak pidana perbankan (tipibank)",
      "Pelaksanaan pemeriksaan bank yang bersifat insidentil (ad-hoc) dan spesifik"
    ],
    "answer": "Semuanya benar"
  },
  {
    "id": 432,
    "version": 13,
    "category": "Pengawasan",
    "question": "Life cycle Bank pada siklus pengawasan adalah:",
    "options": [
      "Perizinan, Pembinaan, Exit Policy",
      "Perizinan, Pengawasan, Exit Policy",
      "Pendirian, Pembinaan, Pengawasan",
      "Pendirian, Pengawasan, Likuidasi"
    ],
    "answer": "Perizinan, Pengawasan, Exit Policy"
  },
  {
    "id": 433,
    "version": 13,
    "category": "Syariah",
    "question": "Pernyataan di bawah ini adalah benar mengenai ketentuan Pengurus Bank Syariah, kecuali:",
    "options": [
      "Jumlah anggota direksi BUS minimal 3 orang",
      "Jumlah anggota direksi BUS maksimal sama dengan jumlah anggota dewan komisaris",
      "Jumlah anggota dewan komisaris BUS minimal 3 orang dan maksimal sama dengan jumlah anggota direksi",
      "Jumlah anggota direksi BPRS minimal 2 orang"
    ],
    "answer": "Jumlah anggota dewan komisaris BUS minimal 3 orang dan maksimal sama dengan jumlah anggota direksi"
  },
  {
    "id": 434,
    "version": 13,
    "category": "Manajemen Risiko",
    "question": "Analisis yang digunakan untuk mengukur risiko kegagalan pembayaran kredit/pembiayaan pada sektor/lapangan usaha tertentu berdasarkan data yang dimiliki oleh bank, yaitu:",
    "options": [
      "Analisis Credit Risk Exposure",
      "Analisis Credit Risk Concentration",
      "Analisis Credit Risk Limit",
      "Analisis NPL"
    ],
    "answer": "Analisis NPL"
  },
  {
    "id": 435,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Alasan utama yang menjadi pertimbangan pengawas dalam penetapan peringkat tersebut adalah:",
    "options": [
      "Tata kelola rentabilitas",
      "Sumber-sumber rentabilitas",
      "Sustainability rentabilitas",
      "Kinerja rentabilitas"
    ],
    "answer": "Kinerja rentabilitas"
  },
  {
    "id": 436,
    "version": 13,
    "category": "Pengawasan",
    "question": "Tahapan keempat pada Siklus Pengawasan Bank Berdasarkan Risiko adalah",
    "options": [
      "Pemahaman Terhadap Bank",
      "Penilaian Tingkat Kesehatan",
      "Monitoring",
      "Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Pemeriksaan Berdasarkan Risiko"
  },
  {
    "id": 437,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Dokumen Perencanaan Pengawasan secara Konglomerasi, disebut:",
    "options": [
      "Supervisory Plan (SP)",
      "Risk Assessment Plan (RAP)",
      "Integrated Risk Rating (IRR)",
      "Integrated Supervisory Plan"
    ],
    "answer": "Integrated Supervisory Plan"
  },
  {
    "id": 438,
    "version": 13,
    "category": "Syariah",
    "question": "Apakah implikasi makro dari aktifitas keuangan dan perbankan syariah berbasis sektor riil (bagi hasil, jual beli, sewa, titipan, jasa) dan sosial (ZisWaf), kecuali:",
    "options": [
      "Keadilan pendapatan dan kekayaan",
      "Pertumbuhan yang stabil",
      "Ketimpangan sosial",
      "Distribusi kekayaan"
    ],
    "answer": "Ketimpangan sosial"
  },
  {
    "id": 439,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Jenis Pembagian KSP terdiri dari",
    "options": [
      "TI, APU-PPT, Kredit, Likuiditas dan Pasar",
      "TI, APU-PPT, Kredit, Likuiditas dan Pasar, GCG",
      "TI, APU-PPT, Kredit, Likuiditas dan Pasar, Syariah",
      "TI, APU-PPT, Kredit, Pasar, Syariah"
    ],
    "answer": "TI, APU-PPT, Kredit, Likuiditas dan Pasar, Syariah"
  },
  {
    "id": 440,
    "version": 13,
    "category": "Pengawasan",
    "question": "Pertimbangan OJK untuk mempercepat penetapan hasil akhir penilaian kembali yaitu:",
    "options": [
      "menurut penilaian OJK terdapat kondisi yang dapat menyebabkan LJK berpotensi mengalami kesulitan yang dapat membahayakan kelangsungan usaha LJK.",
      "menurut penilaian OJK terdapat kondisi yang dapat menyebabkan LJK berpotensi mengalami kesulitan namun dapat diselesaikan oleh pihak manajemen.",
      "menurut penilaian OJK terdapat kondisi yang tidak menyebabkan LJK berpotensi mengalami kesulitan namun memerlukan perhatian manajemen.",
      "semua benar"
    ],
    "answer": "menurut penilaian OJK terdapat kondisi yang dapat menyebabkan LJK berpotensi mengalami kesulitan yang dapat membahayakan kelangsungan usaha LJK."
  },
  {
    "id": 441,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Jumlah Kantor OJK Koordinator dan Non-Koordinator:",
    "options": [
      "9 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
      "8 Kantor OJK Koordinator, dan 26 Kantor OJK Non-Koordinator",
      "8 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
      "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator"
    ],
    "answer": "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator"
  },
  {
    "id": 442,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Cakupan pengawasan konglomerasi keuangan yang disesuaikan akibat adanya Undang-undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut, kecuali:",
    "options": [
      "Tata Cara Pemilihan Perusahaan Anak",
      "Kewajiban kepemilikan saham pada PIKK Nonoperasional",
      "Wewenang OJK untuk membatalkan hasil penilaian Kemampuan dan Kepatutan",
      "Wewenang OJK untuk melakukan pemeriksaan terintegrasi"
    ],
    "answer": "Tata Cara Pemilihan Perusahaan Anak"
  },
  {
    "id": 443,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Kantor OJK Provinsi Jawa Tengah membawahi wilayah:",
    "options": [
      "Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, Kantor OJK Tegal dan Kantor OJK Cirebon",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto dan Kantor OJK Solo"
    ],
    "answer": "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal"
  },
  {
    "id": 444,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "SLIK merupakan singkatan dari:",
    "options": [
      "Sistem Layanan Izin Kredit",
      "Sistem Layanan Informasi Kredit",
      "Sistem Lacak Informasi Kredit",
      "Sistem Layanan Informasi Keuangan"
    ],
    "answer": "Sistem Layanan Informasi Keuangan"
  },
  {
    "id": 445,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Yang dimaksud dengan Perusahaan Induk Konglomerasi Keuangan Operasional adalah:",
    "options": [
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang melakukan kegiatan hanya sebagai PIKK",
      "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK",
      "Badan hukum yang memiliki kepemilikan lebih dari 50% pada satu LJK",
      "Badan hukum yang memiliki kepemilikan kurang dari 50% pada satu LJK"
    ],
    "answer": "Badan hukum yang dimiliki oleh PSP dan/atau PSPT yang selain melakukan kegiatan sebagai PIKK juga melakukan kegiatan sebagai LJK"
  },
  {
    "id": 446,
    "version": 13,
    "category": "Perbankan",
    "question": "Penilaian tingkat kesehatan BPR dan BPRS dilakukan berdasarkan 4 (empat) faktor, kecuali:",
    "options": [
      "Permodalan",
      "Kualitas Aset",
      "Rentabilitas",
      "Akuntansi"
    ],
    "answer": "Akuntansi"
  },
  {
    "id": 447,
    "version": 13,
    "category": "Syariah",
    "question": "Apakah implikasi ekonomi dari dilarangnya aktivitas Riba (interest base activities), Maisir (speculative motive) dan Gharar (unclear information), kecuali:",
    "options": [
      "Penguatan sektor riil",
      "Stabilitas sistem keuangan",
      "Optimalisasi sumber daya",
      "Krisis moneter"
    ],
    "answer": "Krisis moneter"
  },
  {
    "id": 448,
    "version": 13,
    "category": "Perizinan",
    "question": "Apa saja tahapan perizinan pendirian BPR?",
    "options": [
      "Persetujuan Prinsip",
      "Persetujuan Prinsip dan Izin Usaha",
      "Izin Usaha",
      "Semua Benar"
    ],
    "answer": "Persetujuan Prinsip dan Izin Usaha"
  },
  {
    "id": 449,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Pada konteks ini, Securities Crowd Funding dapat berperan untuk:",
    "options": [
      "Penyediaan modal UMKM melalui pinjaman yang dapat diakses secara online",
      "Penyediaan modal UMKM melalui penawaran efek yang dapat diakses secara online",
      "Penyediaan modal UMKM melalui produk asuransi",
      "Penyediaan modal UMKM melalui produk anjak piutang"
    ],
    "answer": "Penyediaan modal UMKM melalui penawaran efek yang dapat diakses secara online"
  },
  {
    "id": 450,
    "version": 13,
    "category": "Teknologi Informasi",
    "question": "Sumber data Bank Performance Report (BPeR), kecuali:",
    "options": [
      "Data Konsumen",
      "Laporan Bank",
      "Data Internal OJK",
      "Data Makro"
    ],
    "answer": "Data Konsumen"
  },
  {
    "id": 451,
    "version": 13,
    "category": "Akuntansi",
    "question": "Saat pencairan kredit, bank mencatat jurnal sebagai berikut:",
    "options": [
      "Db. Kredit / Kr. Kas",
      "Db. Kas / Kr. Kredit",
      "Db. Kas / Kr. Pendapatan",
      "Db. Kredit / Kr. Pendapatan"
    ],
    "answer": "Db. Kredit / Kr. Kas"
  },
  {
    "id": 452,
    "version": 13,
    "category": "Manajemen Risiko",
    "question": "Suatu Konglomerasi Keuangan yang memiliki anggota LJK berupa bank, perusahaan sekuritas dan perusahaan asset manajemen, maka di dalam melakukan penilaian Integrated Risk Rating tidak perlu melakukan penilaian terhadap:",
    "options": [
      "Risiko Asuransi",
      "Risiko Kredit",
      "Risiko Reputasi",
      "Risiko Tata Kelola"
    ],
    "answer": "Risiko Asuransi"
  },
  {
    "id": 453,
    "version": 13,
    "category": "Syariah",
    "question": "Di bawah ini merupakan prinsip perbankan syariah berdasarkan Undang-Undang Nomor 21 Tahun 2008, kecuali:",
    "options": [
      "Prinsip keadilan",
      "Prinsip keseimbangan",
      "Prinsip universalisme",
      "Prinsip sosial"
    ],
    "answer": "Prinsip sosial"
  },
  {
    "id": 454,
    "version": 13,
    "category": "Perizinan",
    "question": "Aspek yang dianalisis dalam proses perizinan Dewan Pengawas Syariah yaitu, kecuali:",
    "options": [
      "Integritas",
      "Kompetensi",
      "Reputasi Keuangan",
      "Mazhab/Haluan hukum fikih"
    ],
    "answer": "Mazhab/Haluan hukum fikih"
  },
  {
    "id": 455,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Berikut adalah informasi yang wajib diumumkan oleh Bank sesuai POJK tentang Transparansi dan Publikasi Laporan Bank, kecuali:",
    "options": [
      "Laporan keuangan bulanan",
      "Laporan keuangan triwulanan",
      "Laporan keuangan tahunan",
      "Rencana bisnis bank"
    ],
    "answer": "Rencana bisnis bank"
  },
  {
    "id": 456,
    "version": 13,
    "category": "Perizinan",
    "question": "Bentuk hukum Bank Perkreditan Rakyat:",
    "options": [
      "Perseroan Terbatas dan Koperasi",
      "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah dan Koperasi",
      "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah, Koperasi dan PT",
      "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah dan PT"
    ],
    "answer": "Perusahaan Umum Daerah, Perusahaan Perseroan Daerah, Koperasi dan PT"
  },
  {
    "id": 457,
    "version": 13,
    "category": "Syariah",
    "question": "Berikut ini adalah aplikasi produk yang tepat dari konsep dasar bank syariah dalam penyaluran dana, dimana bank berfungsi sebagai investor/financing provider, kecuali:",
    "options": [
      "Pembiayaan Prinsip Jual Beli (Murabahah, Salam, Istishna)",
      "Pembiayaan Prinsip Bagi Hasil (Mudharabah, Musyarakah)",
      "Pembiayaan Prinsip Sewa (Ijarah)",
      "Pembiayaan Prinsip Jasa (Qardh, Wakaf)"
    ],
    "answer": "Pembiayaan Prinsip Jasa (Qardh, Wakaf)"
  },
  {
    "id": 458,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Penyusunan kajian Pengembangan Ekonomi Daerah dengan tahapan mengacu pedoman yang disusun DMND, kecuali:",
    "options": [
      "Perumusan program strategis",
      "Identifikasi sektor unggulan",
      "Pengembangan skema pembiayaan",
      "Pembentukan skema akses masyarakat"
    ],
    "answer": "Pembentukan skema akses masyarakat"
  },
  {
    "id": 459,
    "version": 13,
    "category": "Perizinan",
    "question": "Bank umum dapat menggunakan insentif berupa instant approval (permohonan izin dalam bentuk pemberitahuan) dalam hal telah memenuhi kriteria:",
    "options": [
      "Profil risiko dengan penilaian 1 atau 2, serta TI memadai",
      "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai",
      "Profil risiko, KPMR, dan GCG dengan penilaian 1 atau 2, serta TI memadai",
      "Tingkat kesehatan dengan penilaian 1 atau 2, serta TI memadai"
    ],
    "answer": "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai"
  },
  {
    "id": 460,
    "version": 13,
    "category": "Perizinan",
    "question": "Perizinan pendirian bank BHI dan KCBLN terdiri dari 2 (dua) tahap yaitu:",
    "options": [
      "Persetujuan prinsip dan izin usaha",
      "Persetujuan prinsip dan perizinan",
      "Izin prinsip dan izin usaha",
      "Izin prinsip dan perizinan"
    ],
    "answer": "Persetujuan prinsip dan izin usaha"
  },
  {
    "id": 461,
    "version": 13,
    "category": "Teknologi Informasi",
    "question": "Aplikasi OJK yang digunakan untuk melakukan Pendaftaran Akuntan Publik / Kantor Akuntan Publik di OJK:",
    "options": [
      "APOLO",
      "S-AEP",
      "S-APU",
      "SPRINT"
    ],
    "answer": "SPRINT"
  },
  {
    "id": 462,
    "version": 13,
    "category": "Akuntansi",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Umum Syariah dan Unit Usaha Syariah bersumber dari:",
    "options": [
      "PSAK",
      "SAK ETAP",
      "PSAK Syariah",
      "PSAK dan PSAK Syariah"
    ],
    "answer": "PSAK dan PSAK Syariah"
  },
  {
    "id": 463,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Pemahaman yang komprehensif terhadap kondisi Konglomerasi Keuangan dituangkan dalam dokumen berikut:",
    "options": [
      "Integrated Supervisory Plan (ISP)",
      "Know Your Financial Conglomerates (KYFC)",
      "Integrated Risk Rating (IRR)",
      "Supervisory Plan (SP)"
    ],
    "answer": "Know Your Financial Conglomerates (KYFC)"
  },
  {
    "id": 464,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Yang termasuk tugas pokok Kelompok Spesialis Perbankan?",
    "options": [
      "Mengusulkan dan/atau melakukan pemeriksaan bank sesuai keahliannya dan mengacu pada fokus dan perencanaan pengawasan (Supervisory Plan/SP)",
      "Memberikan rekomendasi kepada DPB/DRKP terkait tindak lanjut hasil pemeriksaan spesialis",
      "Semua benar",
      "Memberikan dukungan teknis pemeriksaan terintegrasi"
    ],
    "answer": "Mengusulkan dan/atau melakukan pemeriksaan bank sesuai keahliannya dan mengacu pada fokus dan perencanaan pengawasan (Supervisory Plan/SP)"
  },
  {
    "id": 465,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Satuan kerja apakah yang menjalankan fungsi sebagai Hub di Bidang Perbankan:",
    "options": [
      "Departemen Pengawasan Bank 1",
      "Departemen Perizinan dan Regulasi Bank",
      "Departemen Pengawasan Bank 2",
      "Departemen Pemeriksaan Khusus dan Perbankan Daerah"
    ],
    "answer": "Departemen Pemeriksaan Khusus dan Perbankan Daerah"
  },
  {
    "id": 466,
    "version": 13,
    "category": "Perbankan",
    "question": "Berapa jumlah modal disetor minimum untuk mendirikan BPR di zona 1?",
    "options": [
      "Rp100 miliar",
      "Rp50 miliar",
      "Rp14 miliar",
      "Rp7 miliar"
    ],
    "answer": "Rp100 miliar"
  },
  {
    "id": 467,
    "version": 13,
    "category": "Perbankan",
    "question": "Salah satu parameter BPR/BPRS ditetapkan dalam status pengawasan BDP adalah",
    "options": [
      "Cash ratio < 2%",
      "Cash ratio > 5 %",
      "Rasio KPMM < 12%",
      "Rasio KPMM < 5%"
    ],
    "answer": "Rasio KPMM < 12%"
  },
  {
    "id": 468,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Manakah diantara Konglomerasi Keuangan dibawah ini yang memiliki wider group dengan unregulated entities paling banyak, adalah:",
    "options": [
      "KK BRI",
      "KK BCA",
      "KK Astra",
      "KK Mega Corpora"
    ],
    "answer": "KK Mega Corpora"
  },
  {
    "id": 469,
    "version": 13,
    "category": "Perbankan",
    "question": "Menurut pendapat Saudara, mengapa bank perantara tidak dikenakan kewajiban terkait rencana korporasi?",
    "options": [
      "bank perantara tidak termasuk bank umum.",
      "bank perantara tidak melakukan kegiatan usaha secara normal.",
      "bank perantara secepatnya akan dialihkan kepemilikannya kepada pihak lain.",
      "bank perantara tidak memiliki kewajiban kepada pihak ketiga."
    ],
    "answer": "bank perantara secepatnya akan dialihkan kepemilikannya kepada pihak lain."
  },
  {
    "id": 470,
    "version": 13,
    "category": "Syariah",
    "question": "Pihak yang berwenang dalam suatu bank syariah (intern) yang bertugas memberikan nasihat dan saran kepada Direksi serta mengawasi kegiatan bank agar sesuai dengan prinsip syariah dan melaporkan hal tersebut kepada Bank Indonesia setiap enam bulan sekali adalah:",
    "options": [
      "Dewan Komisaris",
      "Dewan Pengawas Syariah",
      "Direksi",
      "Rapat Umum Pemegang Saham"
    ],
    "answer": "Dewan Pengawas Syariah"
  },
  {
    "id": 471,
    "version": 13,
    "category": "Syariah",
    "question": "Apakah yang dimaksud dengan Bank Syariah?",
    "options": [
      "BPRS",
      "BUS, UUS, dan BPRS",
      "BUS dan BPRS",
      "BUS"
    ],
    "answer": "BUS dan BPRS"
  },
  {
    "id": 472,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "Hal-hal apa saja yang perlu tercakup dalam rencana bisnis tahunan LPIP?",
    "options": [
      "Rencana pengembangan TI",
      "Rencana pendirian kantor",
      "Proyeksi laporan keuangan",
      "Rencana kerjasama"
    ],
    "answer": "Proyeksi laporan keuangan"
  },
  {
    "id": 473,
    "version": 13,
    "category": "Perizinan",
    "question": "Tahapan pencabutan izin usaha atas permintaan pemegang saham adalah:",
    "options": [
      "Persetujuan persiapan pencabutan izin usaha",
      "Persetujuan pencabutan izin usaha",
      "Persetujuan pencabutan izin usaha dan persetujuan penunjukan likuidator",
      "Persetujuan persiapan dan persetujuan pencabutan izin usaha"
    ],
    "answer": "Persetujuan persiapan dan persetujuan pencabutan izin usaha"
  },
  {
    "id": 474,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "Informasi berikut ada dalam laporan debitur yang disampaikan Pelapor, kecuali:",
    "options": [
      "Informasi identitas debitur",
      "Media sosial debitur",
      "Informasi fasilitas",
      "Informasi jaminan"
    ],
    "answer": "Media sosial debitur"
  },
  {
    "id": 475,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Penyusunan Laporan Large Exposure (LEX) merupakan fungsi pada spesialis",
    "options": [
      "Teknologi Informasi",
      "APU-PPT",
      "Kredit",
      "Pasar dan Likuiditas"
    ],
    "answer": "Kredit"
  },
  {
    "id": 476,
    "version": 13,
    "category": "Akuntansi",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Pembiayaan Rakyat Syariah terdiri dari:",
    "options": [
      "PSAK Syariah",
      "SAK ETAP dan PSAK Syariah",
      "SAK ETAP",
      "PSAK"
    ],
    "answer": "SAK ETAP dan PSAK Syariah"
  },
  {
    "id": 477,
    "version": 13,
    "category": "Perbankan",
    "question": "Faktor dan bobot penilaian TKS BPR dan BPRS yaitu:",
    "options": [
      "Profil Risiko (30%), Tata Kelola (20%), Rentabilitas (20%), Permodalan (30%)",
      "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (15%), Permodalan (30%)",
      "Profil Risiko (35%), Tata Kelola (20%), Rentabilitas (15%), Permodalan (30%)",
      "Profil Risiko (35%), Tata Kelola (20%), Rentabilitas (20%), Permodalan (25%)"
    ],
    "answer": "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (15%), Permodalan (30%)"
  },
  {
    "id": 478,
    "version": 13,
    "category": "Akuntansi",
    "question": "Laporan keuangan yang menunjukkan kegiatan sosial yang dilakukan oleh bank syariah adalah:",
    "options": [
      "Laporan Zakat dan Laporan Dana Kebajikan",
      "Laporan Zakat, Infak, Sedekah dan Wakaf (ZisWaf)",
      "Laporan Dana Kebajikan",
      "Laporan Bagi Hasil"
    ],
    "answer": "Laporan Zakat dan Laporan Dana Kebajikan"
  },
  {
    "id": 479,
    "version": 13,
    "category": "Perizinan",
    "question": "Di bawah ini, pernyataan yang tidak sesuai dengan POJK Nomor 12/POJK.03/2021 adalah:",
    "options": [
      "Pemindahan alamat Kantor di Dalam Negeri antar kota memerlukan izin DIMB/OJK",
      "Pemindahan alamat Kantor di Dalam Negeri dalam kota yang sama cukup dengan laporan",
      "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK",
      "Pembukaan Kantor di Dalam Negeri antar kota memerlukan izin DIMB/OJK"
    ],
    "answer": "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK"
  },
  {
    "id": 480,
    "version": 13,
    "category": "Syariah",
    "question": "Penghimpunan dana dalam Bank Syariah dapat menggunakan akad",
    "options": [
      "Mudharabah",
      "Wadi'ah",
      "Musyarakah",
      "Mudharabah dan wadi'ah"
    ],
    "answer": "Mudharabah dan wadi'ah"
  },
  {
    "id": 481,
    "version": 13,
    "category": "Kredit/Pembiayaan",
    "question": "Mandat ketentuan perundang-undangan yang menjadi latar belakang implementasi pengembangan ekonomi daerah, yaitu:",
    "options": [
      "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK",
      "UU No 4/2023 tentang P2SK dan UU No 21/2011 tentang OJK",
      "UU No 21/2011 tentang OJK",
      "UU No 4/2023 tentang P2SK"
    ],
    "answer": "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK"
  },
  {
    "id": 482,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Yang termasuk dalam tugas pokok dan fungsi KSP pada departemen DRPD adalah",
    "options": [
      "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian",
      "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force",
      "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel",
      "Dukungan Pemeriksaan Spesialis, Task Force, Penyusunan Kajian"
    ],
    "answer": "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian"
  },
  {
    "id": 483,
    "version": 13,
    "category": "Permodalan",
    "question": "Total eksposur Bank dalam penetapan status sistemik terdiri dari beberapa komponen berikut, kecuali:",
    "options": [
      "Aset",
      "Liabilitas",
      "Pajak penghasilan tangguhan (deferred tax)",
      "Eksposur intra-SJK"
    ],
    "answer": "Pajak penghasilan tangguhan (deferred tax)"
  },
  {
    "id": 484,
    "version": 13,
    "category": "Tindak Pidana",
    "question": "Pasal 49 UU Perbankan atau Pasal 63 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan",
    "options": [
      "Perizinan.",
      "Rahasia Bank.",
      "Kegiatan Usaha Bank.",
      "Pengawasan Bank."
    ],
    "answer": "Kegiatan Usaha Bank."
  },
  {
    "id": 485,
    "version": 13,
    "category": "Akuntansi",
    "question": "Pos pada laporan keuangan yang memberikan informasi terkait cadangan yang dibentuk oleh bank untuk mengantisipasi potensi kerugian yang mungkin timbul akibat penurunan nilai aset keuangan yaitu",
    "options": [
      "Cadangan Kerugian",
      "Cadangan Kerugian Penurunan Nilai (CKPN)",
      "Cadangan Umum",
      "Cadangan Tambahan"
    ],
    "answer": "Cadangan Kerugian Penurunan Nilai (CKPN)"
  },
  {
    "id": 486,
    "version": 13,
    "category": "Tindak Pidana",
    "question": "Manakah dari pernyataan berikut yang bukan merupakan hal-hal yang dilakukan oleh DRKP dalam penanganan PKP yang berindikasi tipibank",
    "options": [
      "Melakukan pemeriksaan untuk mengumpulkan bukti permulaan yang cukup (BPYC)",
      "Menyampaikan Laporan BPYC kepada penyidik OJK",
      "Melakukan penelusuran aset",
      "Melakukan penuntutan terhadap PKP yang memiliki indikasi tindak pidana perbankan"
    ],
    "answer": "Melakukan penuntutan terhadap PKP yang memiliki indikasi tindak pidana perbankan"
  },
  {
    "id": 487,
    "version": 13,
    "category": "Perizinan",
    "question": "Berikut ini yang termasuk jenis perizinan yang tergolong dalam entry kelembagaan:",
    "options": [
      "Pemisahan Unit Usaha Syariah dan perubahan kegiatan usaha bank konvensional menjadi bank syariah",
      "Perubahan kegiatan usaha bank konvensional menjadi bank syariah dan pendirian bank syariah",
      "Pemisahan Unit Usaha Syariah dan pendirian bank syariah",
      "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah."
    ],
    "answer": "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah."
  },
  {
    "id": 488,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Persyaratan publikasi di bank mengacu pada standar Basel, yaitu:",
    "options": [
      "Pillar I: Minimum Capital Requirements",
      "Pillar II: Supervisory Review Process",
      "Pillar III: Market Discipline",
      "Semua benar"
    ],
    "answer": "Pillar III: Market Discipline"
  },
  {
    "id": 489,
    "version": 13,
    "category": "Manajemen Risiko",
    "question": "Prinsip-prinsip umum penetapan peringkat risiko BPR BPRS antara lain:",
    "options": [
      "Berorientasi Risiko, Proporsionalitas, Signifikansi dan Materialitas",
      "Berorientasi Risiko, Proporsionalitas, Komprehensif dan Terstruktur",
      "Berorientasi Risiko, Proporsionalitas, Signifikansi dan Materialitas, Komprehensif dan Terstruktur",
      "Berorientasi Risiko, Signifikansi dan Materialitas, Komprehensif dan Terstruktur"
    ],
    "answer": "Berorientasi Risiko, Proporsionalitas, Signifikansi dan Materialitas, Komprehensif dan Terstruktur"
  },
  {
    "id": 490,
    "version": 13,
    "category": "Perizinan",
    "question": "OJK dapat menghentikan penilaian kemampuan dan kepatutan pihak utama BPR atau BPR Syariah apabila",
    "options": [
      "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK",
      "LJK yang bersangkutan sedang dalam status pengawasan BDP",
      "LJK yang bersangkutan sedang dalam status pengawasan BSS",
      "Sedang menjalani pemeriksaan BPYC"
    ],
    "answer": "Sedang menjalani proses penilaian kemampuan dan kepatutan pada suatu LJK"
  },
  {
    "id": 491,
    "version": 13,
    "category": "Perbankan",
    "question": "Berikut ini merupakan tantangan dalam konsolidasi BPR/BPRS, kecuali",
    "options": [
      "PSP umumnya tidak mau mempertahankan kepemilikannya pada 1 BPR dan BPRS",
      "Tidak terdapat pembatasan pemilikan saham BPR/BPRS",
      "Pemilik BPR/BPRS cenderung mempertahankan kepemilikan dan merasa mampu mengatasi permasalahan BPR/BPRS",
      "Belum adanya keterlibatan pihak ketiga (Investor/Penyedia Jasa)"
    ],
    "answer": "PSP umumnya tidak mau mempertahankan kepemilikannya pada 1 BPR dan BPRS"
  },
  {
    "id": 492,
    "version": 13,
    "category": "Akuntansi",
    "question": "Standar akuntansi keuangan terdiri dari, kecuali:",
    "options": [
      "Pernyataan standar akuntansi keuangan",
      "Interpretasi standar akuntansi keuangan",
      "Standar profesional akuntan publik",
      "Pernyataan pencabutan standar akuntansi keuangan"
    ],
    "answer": "Standar profesional akuntan publik"
  },
  {
    "id": 493,
    "version": 13,
    "category": "Pengawasan",
    "question": "Pengawasan Bank yang menggunakan strategi dan metodologi berdasarkan risiko yang memungkinkan pengawas Bank untuk mendeteksi risiko yang signifikan secara dini dan mengambil tindakan pengawasan yang sesuai dan tepat waktu merupakan definisi dari",
    "options": [
      "Pengawasan Bank Berbasis Risiko",
      "Integrated Supervisory Plan",
      "Risk Assessment",
      "Supervisory Review Process"
    ],
    "answer": "Pengawasan Bank Berbasis Risiko"
  },
  {
    "id": 494,
    "version": 13,
    "category": "Pengawasan KK",
    "question": "Peraturan OJK yang mengatur tentang Konglomerasi Keuangan dan Perusahaan Induk Konglomerasi Keuangan, diatur di dalam POJK:",
    "options": [
      "POJK 45 Tahun 2020",
      "POJK 30 Tahun 2024",
      "POJK 17 Tahun 2014",
      "POJK 18 Tahun 2014"
    ],
    "answer": "POJK 30 Tahun 2024"
  },
  {
    "id": 495,
    "version": 13,
    "category": "Syariah",
    "question": "Penilaian Kemampuan dan Kepatutan diberlakukan bagi pihak yang mengajukan diri untuk menduduki posisi sebagai berikut di bank syariah, kecuali:",
    "options": [
      "Direksi",
      "Dewan Komisaris",
      "Pemegang Saham Pengendali",
      "Pengawas Syariah"
    ],
    "answer": "Pengawas Syariah"
  },
  {
    "id": 496,
    "version": 13,
    "category": "Perizinan",
    "question": "Produk dasar bank umum meliputi:",
    "options": [
      "Penghimpunan dana, penyaluran dana, dan kegiatan treasury.",
      "Penghimpunan dana, penyaluran dana, dan kegiatan valuta asing.",
      "Penghimpunan dana, penyaluran dana, dan kegiatan sederhana lainnya.",
      "Penghimpunan dana, penyaluran dana, dan kegiatan trust."
    ],
    "answer": "Penghimpunan dana, penyaluran dana, dan kegiatan sederhana lainnya."
  },
  {
    "id": 497,
    "version": 13,
    "category": "Organisasi OJK",
    "question": "Pengawasan Sektor Jasa Keuangan Daerah meliputi bidang:",
    "options": [
      "Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), Lembaga Pembiayaan, Perusahaan Modal Ventura, Lembaga Keuangan Mikro, dan Lembaga Jasa Keuangan Lainnya (PVML), Inovasi Teknologi Sektor Keuangan, Aset Keuangan Digital dan Aset Kripto (IAKD)",
      "Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), Lembaga Pembiayaan, Perusahaan Modal Ventura, Lembaga Keuangan Mikro, dan Lembaga Jasa Keuangan Lainnya (PVML)",
      "Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), Perasuransian, Penjaminan, dan Dana Pensiun (PPDP)",
      "Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), Lembaga Pembiayaan, Perusahaan Modal Ventura, Lembaga Keuangan Mikro, dan Lembaga Jasa Keuangan Lainnya (PVML), Inovasi Teknologi Sektor Keuangan, Aset Keuangan Digital dan Aset Kripto (IAKD), serta perilaku Pelaku Usaha Jasa Keuangan (PUJK)"
    ],
    "answer": "Perbankan, Pasar Modal, Keuangan Derivatif dan Bursa Karbon (PMDK), Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), Lembaga Pembiayaan, Perusahaan Modal Ventura, Lembaga Keuangan Mikro, dan Lembaga Jasa Keuangan Lainnya (PVML), Inovasi Teknologi Sektor Keuangan, Aset Keuangan Digital dan Aset Kripto (IAKD), serta perilaku Pelaku Usaha Jasa Keuangan (PUJK)"
  },
  {
    "id": 498,
    "version": 13,
    "category": "Tata Kelola",
    "question": "Pengumuman laporan publikasi keuangan dan informasi kinerja keuangan tahunan bagi bank paling lambat dilaksanakan pada:",
    "options": [
      "1 bulan setelah akhir tahun buku",
      "1 bulan setelah diterbitkannya laporan auditor independen",
      "4 bulan setelah akhir tahun buku",
      "3 bulan setelah akhir tahun buku"
    ],
    "answer": "4 bulan setelah akhir tahun buku"
  },
  {
    "id": 499,
    "version": 13,
    "category": "SLIK/LPIP",
    "question": "Pada POJK LPIP, pasal berapa yang menyebutkan bahwa LPIP diminta untuk menghasilkan informasi perkreditan yang memiliki nilai tambah?",
    "options": [
      "Pasal 61 ayat 3",
      "Pasal 60 ayat 3",
      "Pasal 60 ayat 1",
      "Pasal 61 ayat 1"
    ],
    "answer": "Pasal 61 ayat 1"
  },
  {
    "id": 500,
    "version": 13,
    "category": "Teknologi Informasi",
    "question": "Sistem Pelaporan yang digunakan bank untuk menyampaikan laporan kepada OJK yaitu:",
    "options": [
      "OJK-PR",
      "OJK-PR",
      "SLIK",
      "APOLO"
    ],
    "answer": "APOLO"
  },
  // soal paket 6
    {
        "id": 501,
        "version": 6,
        "category": "Akuntansi/BPR",
        "question": "Pemberlakuan SAK Entitas Privat sebagai standar akuntansi keuangan yang berlaku untuk BPR dimulai pada:",
        "options": [
            "1 Januari 2025",
            "1 Januari 2026",
            "1 Januari 2024",
            "1 Januari 2027"
        ],
        "answer": "1 Januari 2025"
    },
    {
        "id": 502,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Prinsip penyusunan pengembangan ekonomi daerah adalah:",
        "options": [
            "Aspek layak investasi, aspek manajemen dan aspek hukum",
            "Aspek keberlanjutan, aspek layak investasi dan aspek komprehensif",
            "Aspek transparansi, aspek layak investasi dan aspek manajemen",
            "Aspek manajemen, aspek layak investasi dan aspek komprehensif"
        ],
        "answer": "Aspek keberlanjutan, aspek layak investasi dan aspek komprehensif"
    },
    {
        "id": 503,
        "version": 6,
        "category": "LPIP",
        "question": "Berikut ini yang merupakan proses perizinan kelembagaan terkait LPIP, kecuali:",
        "options": [
            "Penilaian Kemampuan dan Kepatutan Calon Pihak Utama LPIP",
            "Penggabungan LPIP",
            "Pendirian LPIP",
            "Perubahan Kegiatan Usaha LPIP",
            "Pengambilalihan LPIP"
        ],
        "answer": "Perubahan Kegiatan Usaha LPIP"
    },
    {
        "id": 504,
        "version": 6,
        "category": "BPR",
        "question": "Di bawah ini pernyataan yang tidak benar terkait Penggabungan/Peleburan adalah:",
        "options": [
            "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional",
            "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang sama",
            "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang berbeda sepanjang kantor-kantor BPR hasil Penggabungan/Peleburan berlokasi dalam wilayah provinsi yang sama",
            "Penggabungan/Peleburan hanya dapat dilakukan antar BPR"
        ],
        "answer": "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional"
    },
    {
        "id": 505,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Mandat ketentuan perundang-undangan yang menjadi latar belakang implementasi pengembangan ekonomi daerah, yaitu:",
        "options": [
            "UU No 21/2011 tentang Bank Umum dan UU No 4/2023 tentang OJK",
            "UU No 21/2011 tentang P2SK dan UU No 4/2023 tentang OJK",
            "UU No 21/2011 tentang Bank Umum dan UU No 4/2023 tentang P2SK",
            "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK"
        ],
        "answer": "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK"
    },
    {
        "id": 506,
        "version": 6,
        "category": "Publikasi Bank",
        "question": "Cakupan laporan publikasi eksposur risiko dan permodalan yaitu:",
        "options": [
            "Informasi permodalan, informasi risiko, tata kelola, dan suku bunga dasar kredit",
            "Informasi permodalan, informasi risiko, dan susunan pengurus",
            "Informasi permodalan, informasi risiko, tata kelola, dan laporan keuangan",
            "Informasi permodalan, informasi risiko, dan tata kelola"
        ],
        "answer": "Informasi permodalan, informasi risiko, dan tata kelola"
    },
    {
        "id": 507,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Manakan diantara Konglomerasi Keuangan dibawah ini yang memiliki wider group dengan unregulated entities paling banyak, adalah:",
        "options": [
            "KK Mandiri",
            "KK BRI",
            "KK BCA",
            "KK Mega Corpora"
        ],
        "answer": "KK Mega Corpora"
    },
    {
        "id": 508,
        "version": 6,
        "category": "Pengawasan",
        "question": "Hal yang perlu diperhatikan dalam penyampaian LHP kepada lembaga lain, sesuai dengan UU P2SK:",
        "options": [
            "Terdapat permintaan dari lembaga lain atau kewajiban untuk menyampaikannya sesuai amanat peraturan perundang-undangan",
            "Cakupan Data dan informasi yang disampaikan dapat disesuaikan dengan kebutuhan dan tujuan penyampaian LHP dimaksud.",
            "Semua benar",
            "Data dan informasi yang disampaikan mengacu pada hasil pemeriksaan terakhir"
        ],
        "answer": "Semua benar"
    },
    {
        "id": 509,
        "version": 6,
        "category": "BPR",
        "question": "BPR dapat melakukan pembukaan Kantor Cabang jika kondisi keuangan memenuhi persyaratan:",
        "options": [
            "Rasio kewajiban penyediaan modal minimum 12% selama enam bulan terakhir.",
            "Tidak dalam keadaan rugi dalam 1 (satu) tahun terakhir.",
            "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha.",
            "Rasio Non-Performing Loan (NPL) gross paling tinggi 5% selama 6 bulan terakhir."
        ],
        "answer": "Memiliki kondisi keuangan dan tingkat kesehatan yang mampu mendukung pengembangan kegiatan usaha BPR dan menyerap kemungkinan timbulnya kerugian usaha."
    },
    {
        "id": 510,
        "version": 6,
        "category": "Struktur OJK",
        "question": "Yang termasuk dalam tugas pokok dan fungsi KSP pada departemen DRPD adalah",
        "options": [
            "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian",
            "Konsolidasi BPR/S dan Grup, Koordinasi dan Asistensi Pengawasan BPR/S, Koordinasi Dalam Rangka Penanganan BPR/S Bermasalah",
            "Koordinasi dan Konsolidasi Bank Umum Daerah, Koordinasi dan Asistensi Pengawasan Bank Umum Daerah, Analisis dan Kajian Riksus Tipibank dan Bank Umum Daerah, Peningkatan Pemahaman Tipibank, Penyediaan Informasi Perbankan Daerah",
            "Pemeriksaan Khusus, Pelimpahan dan Pelaporan Dugaan Tipibank, Pemberian Keterangan Ahli"
        ],
        "answer": "Pemeriksaan Khusus, Pelimpahan dan Pelaporan Dugaan Tipibank, Pemberian Keterangan Ahli"
    },
    {
        "id": 511,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Penyusunan kajian Pengembangan Ekonomi Daerah dengan tahapan mengacu pedoman yang disusun DMND, kecuali:",
        "options": [
            "Pemetaan Potensi Industri Pendukung",
            "Pemantauan dan penyampaian laporan",
            "Pembentukan skema akses masyarakat",
            "Analisis Kondisi Ekonomi Daerah"
        ],
        "answer": "Pembentukan skema akses masyarakat"
    },
    {
        "id": 512,
        "version": 6,
        "category": "Tindak Pidana Perbankan",
        "question": "Pasal 49 UU Perbankan atau Pasal 63 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan",
        "options": [
            "Rahasia Bank.",
            "Perizinan.",
            "Pengawasan Bank.",
            "Kegiatan Usaha Bank."
        ],
        "answer": "Kegiatan Usaha Bank."
    },
    {
        "id": 513,
        "version": 6,
        "category": "BPR",
        "question": "Bentuk badan hukum BPR sesuai ketentuan peraturan perundang-undangan:",
        "options": [
            "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas.",
            "Perusahaan Perseroan Daerah, Koperasi, dan/atau Perseroan Terbatas.",
            "Perusahaan Daerah, Koperasi, dan/atau Perseroan Terbatas.",
            "Perseroda, Perumda, dan/atau Perseroan Terbatas."
        ],
        "answer": "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas."
    },
    {
        "id": 514,
        "version": 6,
        "category": "Pengawasan",
        "question": "Berikut ini termasuk prinsip dalam penyusunan Integrated Supervisory Plan, kecuali:",
        "options": [
            "Specific",
            "Actual",
            "Relevant",
            "Achievable"
        ],
        "answer": "Actual"
    },
    {
        "id": 515,
        "version": 6,
        "category": "Bank Sistemik",
        "question": "Total eksposur Bank dalam penetapan status sistemik terdiri dari beberapa komponen berikut, kecuali:",
        "options": [
            "Potential future exposure dari transaksi derivative",
            "Pajak penghasilan tangguhan (deferred tax)",
            "Eksposur pada rekening administratif (off-balance sheet exposure)",
            "Eksposur pada neraca (on-balance sheet exposure)"
        ],
        "answer": "Pajak penghasilan tangguhan (deferred tax)"
    },
    {
        "id": 516,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Penilaian risiko terintegrasi dalam Konglomerasi Keuangan dilakukan sebanyak:",
        "options": [
            "2 kali dalam 1 semester",
            "1 kali dalam 1 triwulan",
            "2 kali dalam 1 tahun",
            "1 kali dalam 1 tahun."
        ],
        "answer": "2 kali dalam 1 tahun"
    },
    {
        "id": 517,
        "version": 6,
        "category": "Pengawasan",
        "question": "Berdasarkan SEDK Nomor 13/SEDK.03/2016 tentang Pedoman Pengawasan Bank Berdasarkan Risiko Untuk Tahapan Penyusunan Rencana Kerja Pemeriksaan, tujuan penyusunan AWP adalah sebagai berikut, kecuali",
        "options": [
            "Efektivitas waktu",
            "Penyusunan strategi pemeriksaan",
            "Panduan penyediaan data oleh Bank",
            "Ketertiban dokumentasi"
        ],
        "answer": "Panduan penyediaan data oleh Bank"
    },
    {
        "id": 518,
        "version": 6,
        "category": "SLIK",
        "question": "SLIK merupakan singkatan dari:",
        "options": [
            "Sistem Layanan Informasi Kredit",
            "Sistem Lacak Informasi Kredit",
            "Sistem Layanan Informasi Keuangan",
            "Sistem Layanan Izin Kredit"
        ],
        "answer": "Sistem Layanan Informasi Keuangan"
    },
    {
        "id": 519,
        "version": 6,
        "category": "Penilaian Kemampuan dan Kepatutan (PKK)",
        "question": "Calon Pihak Utama tidak dapat diajukan untuk mengikuti penilaian kemampuan dan kepatutan untuk menjadi Pihak Utama apabila:",
        "options": [
            "Tidak memiliki kredit dan/atau pembiayaan macet.",
            "Sedang menjalani proses penilaian kembali karena terdapat indikasi permasalahan integritas, kelayakan keuangan, reputasi keuangan dan/atau kompetensi pada suatu LJK.",
            "Tidak pernah dihukum karena terbukti melakukan tindak pidana dalam jangka waktu tertentu sebelum dicalonkan.",
            "Bukan merupakan pemegang saham, anggota Direksi, atau anggota Dewan Komisaris yang dinyatakan bersalah menyebabkan suatu perseroan dinyatakan pailit dalam waktu 5 (lima) tahun terakhir sebelum dicalonkan."
        ],
        "answer": "Sedang menjalani proses penilaian kembali karena terdapat indikasi permasalahan integritas, kelayakan keuangan, reputasi keuangan dan/atau kompetensi pada suatu LJK."
    },
    {
        "id": 520,
        "version": 6,
        "category": "Publikasi Bank",
        "question": "Bank A merupakan emiten dan perusahaan publik. Sehubungan dengan hal tersebut, bank wajib menyampaian laporan publikasi keuangan dan informasi kinerja keuangan tahunan melalui:",
        "options": [
            "SIPENA",
            "APOLO dan SPE",
            "APOLO",
            "SPE"
        ],
        "answer": "SPE"
    },
    {
        "id": 521,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "KOJK berperan sebagai fasilitator komunikasi antara pemangku kepentingan terkait dalam program pengembangan ekonomi daerah. Dengan demikian, dalam melakukan penetapan keunggulan daerah, KOJK juga perlu memastikan keselarasan hasil pemetaan internal KOJK dengan inisiatif pemerintah. Adapun acuan program/inisiatif/rencana pemerintah dapat mengacu pada:",
        "options": [
            "Semua benar",
            "Visi Indonesia Emas 2045",
            "Ketetapan Kementerian/Pemerintah Daerah",
            "Rencana Jangka Panjang Menengah Nasional"
        ],
        "answer": "Semua benar"
    },
    {
        "id": 522,
        "version": 6,
        "category": "BPR Syariah",
        "question": "Kualitas aset produktif BPR Syariah dalam bentuk penempatan pada bank lain dibedakan atas:",
        "options": [
            "Lancar, diragukan, dalam perhatian khusus",
            "Lancar, dalam perhatian khusus, macet",
            "Lancar, diragukan, macet",
            "Lancar, kurang lancar, macet"
        ],
        "answer": "Lancar, kurang lancar, macet"
    },
    {
        "id": 523,
        "version": 6,
        "category": "Struktur OJK",
        "question": "Jumlah Kantor OJK Koordinator dan Non-Koordinator:",
        "options": [
            "8 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
            "8 Kantor OJK Koordinator, dan 26 Kantor OJK Non-Koordinator",
            "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator",
            "9 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator"
        ],
        "answer": "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator"
    },
    {
        "id": 524,
        "version": 6,
        "category": "Konsolidasi BPR/S",
        "question": "Ketentuan yang menjadi dasar pelaksanaan konsolidasi BPR/BPRS adalah:",
        "options": [
            "Semua benar",
            "POJK Nomor 21/POJK.03/2019 tentang Penggabungan, Peleburan, dan Pengambilalihan",
            "POJK Nomor 7/POJK 03/2024 tentang Konsolidasi BPR/BPRS",
            "POJK Nomor 62/POJK.03/2020 tentang BPR"
        ],
        "answer": "Semua benar"
    },
    {
        "id": 525,
        "version": 6,
        "category": "Produk Bank",
        "question": "Apa yang menjadi ciri utama dari rekening giro?",
        "options": [
            "Bunga yang tinggi",
            "Kewajiban setoran minimum",
            "Terbatas untuk transaksi harian",
            "Tidak memiliki jangka waktu"
        ],
        "answer": "Tidak memiliki jangka waktu"
    },
    {
        "id": 526,
        "version": 6,
        "category": "BPR/S",
        "question": "BPR atau BPR Syariah wajib menyampaikan laporan pelaksanaan perubahan kepemilikan saham yang mengakibatkan perubahan PSP secara daring melalui sistem pelaporan OJK paling lama 10 (sepuluh) hari kerja setelah tanggal surat penerimaan pemberitahuan perubahan data dari instansi yang berwenang, disertai dengan dokumen sebagai berikut, kecuali:",
        "options": [
            "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor",
            "Risalah RUPS",
            "Salinan akta perubahan anggaran dasar",
            "Keputusan atau surat penerimaan pemberitahuan perubahan anggaran dasar dari instansi yang berwenang"
        ],
        "answer": "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor"
    },
    {
        "id": 527,
        "version": 6,
        "category": "Perbankan Syariah / PKK",
        "question": "Calon anggota Direksi Perbankan Syariah wajib memiliki pengetahuan dan pemahaman tentang peraturan dan operasional perbankan syariah, antara lain dibuktikan dengan:",
        "options": [
            "Sertifikat pelatihan dari DSN MUI",
            "Sertifikat pelatihan dari LPPOM MUI",
            "Sertifikat pembicara seminar perbankan syariah",
            "Sertifikat pelatihan perbankan syariah"
        ],
        "answer": "Sertifikat pelatihan perbankan syariah"
    },
    {
        "id": 528,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Yang bukan merupakan ciri utama pada pembiayaan jual beli yaitu:",
        "options": [
            "Harus ada underlying barang yang diperjualbelikan",
            "Nasabah berkewajiban membayar hutangnya berupa harga jual yang terdiri dari pokok + margin meskipun dilakukan pembayaran dipercepat",
            "Harga jual yang disepakati tidak boleh berubah meskipun dilakukan perpanjangan akad",
            "Nasabah berkewajiban hanya melunasi sebesar pokok pembiayaan kepada bank apabila dilakukan pelunasan dipercepat"
        ],
        "answer": "Nasabah berkewajiban hanya melunasi sebesar pokok pembiayaan kepada bank apabila dilakukan pelunasan dipercepat"
    },
    {
        "id": 529,
        "version": 6,
        "category": "TKA",
        "question": "Apa latar belakang utama perlunya penyempurnaan ketentuan terkait pemanfaatan Tenaga Kerja Asing (TKA) dalam sektor perbankan?",
        "options": [
            "Perubahan kebijakan Kementerian Ketenagakerjaan",
            "Permintaan dari asosiasi perbankan asing",
            "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank",
            "Arahan dari lembaga internasional seperti IMF"
        ],
        "answer": "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank"
    },
    {
        "id": 530,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan yang wajib membentuk PIKK Nanoperasional, PSP dan/atau PSPT wajib menyampaikan dokumen rencana pembentukan PIKK paling lambat:",
        "options": [
            "6 bulan",
            "9 bulan",
            "1 tahun",
            "3 bulan"
        ],
        "answer": "6 bulan"
    },
    {
        "id": 531,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Suatu Konglomerasi Keuangan yang memiliki anggota LJK berupa bank, perusahaan sekuritas dan perusahaan asset manajemen, maka di dalam melakukan penilaian Integrated Risk Rating tidak perlu melakukan penilaian terhadap:",
        "options": [
            "Risiko Transaksi Intra Grup",
            "Risiko Kredit",
            "Risiko Likuiditas",
            "Risiko Asuransi"
        ],
        "answer": "Risiko Asuransi"
    },
    {
        "id": 532,
        "version": 6,
        "category": "Struktur OJK",
        "question": "Departemen Manajemen dan Pengembangan OJK Daerah atau DMND merupakan satuan kerja di bidang kebijakan strategis yang memiliki fungsi:",
        "options": [
            "Mengelola Kantor OJK daerah, manajemen pengawasan dan perizinan sektor jasa keuangan di daerah, pengembangan ekonomi dan keuangan daerah serta layanan manajemen strategis Kantor OJK daerah",
            "Koordinasi pengelolaan Kantor OJK daerah, manajemen pengawasan dan perizinan sektor jasa keuangan di daerah, pengembangan ekonomi dan keuangan daerah serta layanan manajemen strategis Kantor OJK daerah",
            "Koordinasi pengelolaan Kantor OJK daerah, pengawasan dan perizinan sektor jasa keuangan di daerah, pengembangan ekonomi dan keuangan daerah serta layanan manajemen strategis Kantor OJK daerah.",
            "Koordinasi pengelolaan Kantor OJK daerah, manajemen pengawasan dan perizinan sektor keuangan di daerah, pengembangan ekonomi dan keuangan daerah"
        ],
        "answer": "Koordinasi pengelolaan Kantor OJK daerah, manajemen pengawasan dan perizinan sektor jasa keuangan di daerah, pengembangan ekonomi dan keuangan daerah serta layanan manajemen strategis Kantor OJK daerah"
    },
    {
        "id": 533,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Jenis laporan yang perlu disampaikan oleh KOJK terkait dengan pelaksanaan PED adalah, kecuali:",
        "options": [
            "Laporan Pelaksanaan FGD Daerah",
            "Laporan Pemantauan Realisasi Program Triwulanan",
            "Laporan Pemantauan Pelaksanaan PED Bulanan",
            "Kajian Pemetaan Kondisi Ekonomi serta pemetaan potensi dan perusahaan terkait"
        ],
        "answer": "Laporan Pemantauan Pelaksanaan PED Bulanan"
    },
    {
        "id": 534,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Bentuk badan hukum Bank Syariah berdasarkan UU No.21 Tahun 2008 tentang Perbankan Syariah adalah:",
        "options": [
            "Perseroan Terbatas (PT), Perusahaan Umum (Perum), Yayasan, BUMN dan Koperasi",
            "Perseroan Terbatas (PT), Perusahaan Umum (Perum) dan BUMN",
            "Perseroan Terbatas (PT)",
            "Perseroan Terbatas (PT), Perusahaan Umum (Perum), Yayasan dan BUMN"
        ],
        "answer": "Perseroan Terbatas (PT)"
    },
    {
        "id": 535,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Program PED dapat dilangsungkan secara kontinu, sehingga dapat mendukung pendalaman pasar, memberikan manfaat nyata bagi masyarakat dan para pemangku kepentingan di daerah merupakan definisi dari aspek:",
        "options": [
            "Aspek keberlanjutan",
            "Aspek manajemen",
            "Aspek komprehensif",
            "Aspek perencanaan"
        ],
        "answer": "Aspek keberlanjutan"
    },
    {
        "id": 536,
        "version": 6,
        "category": "Pengawasan",
        "question": "Tahapan keempat pada Siklus Pengawasan Bank Berdasarkan Risiko adalah",
        "options": [
            "Pemahaman Terhadap Bank",
            "Monitoring",
            "Pemeriksaan Berdasarkan Risiko",
            "Penilaian Tingkat Kesehatan"
        ],
        "answer": "Pemeriksaan Berdasarkan Risiko"
    },
    {
        "id": 537,
        "version": 6,
        "category": "Kredit/Pembiayaan",
        "question": "Dalam proses bisnis perkreditan, bank perlu untuk melakukan analisa berjenjang dan/atau terpisah terhadap suatu debitur yang dilakukan oleh unit kerja yang berbeda, antara lain oleh account manager dengan credit reviewer. Praktik dimaksud umumnya dikenal sebagai:",
        "options": [
            "Five Cs of credit",
            "Segregation of duty",
            "Third line of defense",
            "Four eyes principle"
        ],
        "answer": "Four eyes principle"
    },
    {
        "id": 538,
        "version": 6,
        "category": "Layanan Digital",
        "question": "Pengaturan khusus mengenai penyelenggaraan layanan digital bagi bank umum diatur dalam ketentuan:",
        "options": [
            "POJK 12/POJK.03/2018",
            "POJK 26 Tahun 2024",
            "POJK 11/POJK.03/2022",
            "POJK 21 Tahun 2023"
        ],
        "answer": "POJK 21 Tahun 2023"
    },
    {
        "id": 539,
        "version": 6,
        "category": "Pengawasan",
        "question": "Dasar Hukum Pengawasan Perbankan oleh OJK adalah",
        "options": [
            "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
            "Undang-Undang Nomor 22 tahun 2011 dan Undang-Undang Nomor 4 tahun 2022",
            "Undang-Undang Nomor 4 tahun 2011 dan Undang-Undang Nomor 21 tahun 2023",
            "Undang-Undang Nomor 4 tahun 2022"
        ],
        "answer": "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023"
    },
    {
        "id": 540,
        "version": 6,
        "category": "Konsolidasi BPR/S",
        "question": "Apa saja pulau atau kepulauan utama yang termasuk dalam wilayah BPR/S hasil Penggabungan/Peleburan?",
        "options": [
            "Tidak ada pembatasan wilayah",
            "Sumatera, Jawa, Kalimantan, Sulawesi, Maluku, dan Bali",
            "Sumatera, Jawa, Bali, dan Papua",
            "Sumatera, Jawa, Kalimantan, Bali dan Nusa Tenggara, Sulawesi, serta Maluku dan Papua"
        ],
        "answer": "Sumatera, Jawa, Kalimantan, Bali dan Nusa Tenggara, Sulawesi, serta Maluku dan Papua"
    },
    {
        "id": 541,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Pengertian Unit Usaha Syariah (UUS) yang benar di bawah ini:",
        "options": [
            "Unit kerja dari kantor pusat BUK yang berfungsi sebagai koordinator kantor cabang dan kantor lainnya di bawah kantor cabang BUK",
            "Unit kerja dari kantor BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha konvensional.",
            "Unit kerja dari kantor pusat BUK yang berfungsi melakukan pengawasan penerapan prinsip syariah.",
            "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah."
        ],
        "answer": "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah."
    },
    {
        "id": 542,
        "version": 6,
        "category": "Perizinan",
        "question": "Dalam pencabutan izin usaha Bank BHI dan KCBLN, bank dimaksud harus:",
        "options": [
            "Bank dalam pengawasan intensif",
            "Bank tidak dalam status pengawasan khusus",
            "Bank dalam pengawasan normal",
            "Bank dalam status pengawasan khusus"
        ],
        "answer": "Bank tidak dalam status pengawasan khusus"
    },
    {
        "id": 543,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Berikut ini adalah aplikasi produk dari konsep dasar bank syariah dalam layanan keuangan, dimana bank berfungsi sebagai penyedia jasa layanan, kecuali:",
        "options": [
            "Jual Beli Valuta Asing (bank notes) dengan Prinsip Maisir",
            "Letter of Credit (L/C), Transfer, Inkaso, Kliring dengan Prinsip Wakalah",
            "Anjak Piutang Prinsip Hiwalah dan Bank Garansi Prinsip Kafalah",
            "Dana talangan Prinsip Qardh dan Gadai Prinsip Rahn"
        ],
        "answer": "Jual Beli Valuta Asing (bank notes) dengan Prinsip Maisir"
    },
    {
        "id": 544,
        "version": 6,
        "category": "Perizinan",
        "question": "Tahapan pencabutan izin usaha atas permintaan pemegang saham adalah:",
        "options": [
            "Persetujuan persiapan dan persetujuan penutupan",
            "Persetujuan prinsip dan persetujuan pencabutan izin usaha",
            "Persetujuan prinsip dan persetujuan penutupan",
            "Persetujuan persiapan dan persetujuan pencabutan izin usaha"
        ],
        "answer": "Persetujuan persiapan dan persetujuan pencabutan izin usaha"
    },
    {
        "id": 545,
        "version": 6,
        "category": "BPR/S",
        "question": "Faktor dan bobot penilaian TKS BPR dan BPRS yaitu:",
        "options": [
            "Profil Risiko (25%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (20%)",
            "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (15%), Permodalan (30%)",
            "Profil Risiko (30%), Tata Kelola (25%), Rentabilitas (30%), Permodalan (15%)",
            "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)"
        ],
        "answer": "Profil Risiko (25%), Tata Kelola (30%), Rentabilitas (15%), Permodalan (30%)"
    },
    {
        "id": 546,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Berikut adalah lingkup regulasi perbankan syariah di Indonesia, yaitu:",
        "options": [
            "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan",
            "Kelembagaan, material, dan standar akuntansi dan pelaporan",
            "Kelembagaan, intelektual, dan standar akuntansi dan pelaporan",
            "Kelembagaan, komersial, dan standar akuntansi dan pelaporan"
        ],
        "answer": "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan"
    },
    {
        "id": 547,
        "version": 6,
        "category": "LPIP",
        "question": "Pada POJK LPIP, pasal berapa yang menyebutkan bahwa LPIP diminta untuk menghasilkan informasi perkreditan yang memiliki nilai tambah?",
        "options": [
            "Pasal 60 ayat 1",
            "Pasal 61 ayat 3",
            "Pasal 60 ayat 3",
            "Pasal 61 ayat 1"
        ],
        "answer": "Pasal 61 ayat 1"
    },
    {
        "id": 548,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Forum Panel Terintegrasi dilaksanakan pada 2 tahap dalam siklus pengawasan Konglomerasi Keuangan, yaitu:",
        "options": [
            "Perencanaan Pengawasan dan Koordinasi Pemeriksaan berdasarkan Risiko",
            "Pemahaman terhadap Konglomerasi Keuangan dan Pengkinian Risiko dan Tingkat Kondisi Konglomerasi Keuangan",
            "Pemahaman terhadap Konglomerasi Keuangan dan Perencanaan Pengawasan",
            "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan"
        ],
        "answer": "Penilaian Risiko dan Tingkat Kondisi Konglomerasi Keuangan dan Tindakan Pengawasan dan Pemantauan"
    },
    {
        "id": 549,
        "version": 6,
        "category": "Perbankan Syariah / PKK",
        "question": "Pemegang Saham Pengendali (PSP) Bank Syariah dalam memeuhi ketentuan PKK kepada pihak utama, wajib membuat pernyataan pernyataan antara lain sbb, kecuali:",
        "options": [
            "Memiliki komitmen untuk mematuhi perundang-undangan yang berlaku",
            "Tidak memiliki kredit macet dan/atau tidak tercantum dalam daftar pihak yang memiliki kredit macet",
            "Memiliki komitmen terhadap pengembangan operasional bank syariah yang sehat",
            "Memiliki sertifikat pelatihan perbankan syariah"
        ],
        "answer": "Memiliki sertifikat pelatihan perbankan syariah"
    },
    {
        "id": 550,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Berikut ini adalah bab-bab di dalam UU Perbankan Syariah, kecuali:",
        "options": [
            "Perizinan, Bentuk Badan Hukum, Anggaran Dasar, dan Kepemilikan",
            "Tata Kelola, Prinsip Kehati-hatian, dan Pengelolaan Risiko Perbankan Syariah",
            "Sanksi Administratif dan Sanksi Pidana",
            "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS"
        ],
        "answer": "Sanksi Administratif dan Sanksi Pidana"
    },
    {
        "id": 551,
        "version": 6,
        "category": "BPR/S",
        "question": "Berikut pernyataan yang benar mengenai penilaian profil risiko BPR dan BPRS:",
        "options": [
            "Penerapan manajemen risiko BPR/BPRS sangat bervariasi sesuai dengan skala, kompleksitas, dan tingkat risiko yang dapat ditoleransi oleh BPR/BPRS",
            "Penilaian atas risiko inheren dilakukan dengan memperhatikan parameter yang bersifat kuantitatif dan kualitatif.",
            "Semua benar",
            "Risiko inheren adalah risiko yang melekat pada kegiatan bisnis BPR/BPRS, baik yang dapat dikuantifikasi maupun yang tidak dapat dikuantifikasi, yang berpengaruh secara signifikan terhadap kondisi keuangan BPR/BPRS tanpa mempertimbangkan fungsi pengendalian yang ditetapkan untuk setiap jenis risiko."
        ],
        "answer": "Semua benar"
    },
    {
        "id": 552,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Peran offtaker yang diharapkan dalam program pengembangan ekonomi daerah, yakni:",
        "options": [
            "Memberikan dukungan dalam bentuk penyerapan hasil produksi pelaku usaha",
            "Memberikan dukungan aspek pembiayaan",
            "Memberikan dukungan kemudahan regulasi dalam melakukan aktivitas usaha",
            "Memberikan subsidi aktivitas usaha melalui bantuan APBD"
        ],
        "answer": "Memberikan dukungan dalam bentuk penyerapan hasil produksi pelaku usaha"
    },
    {
        "id": 553,
        "version": 6,
        "category": "Penilaian Kemampuan dan Kepatutan (PKK)",
        "question": "Obyek Penilaian Kemampuan dan Kepatutan new entry, adalah calon:",
        "options": [
            "Dewan Komisaris, Direksi dan Pejabat Eksekutif",
            "Pemegang Saham Pengendali, Dewan Komisaris dan Pejabat Eksekutif",
            "Pemegang Saham Pengendali, Dewan Komisaris, Direksi dan Pejabat Eksekutif",
            "Pemegang Saham Pengendali, Dewan Komisaris dan Direksi"
        ],
        "answer": "Pemegang Saham Pengendali, Dewan Komisaris dan Direksi"
    },
    {
        "id": 554,
        "version": 6,
        "category": "Tindak Pidana Perbankan",
        "question": "Manakah perbuatan berikut yang merupakan PKP di bidang pendanaan",
        "options": [
            "Pelanggaran Cease and Desist Order (CDO) berupa pemberian kredit pada masa Bank dinyatakan Dalam Pengawasan Khusus.",
            "Pelunasan/pembayaran angsuran kredit tanpa disertai aliran dana.",
            "Penarikan/ Pemindahbukuan deposito/ tabungan/ giro yang dilakukan bukan oleh pemilik/kuasanya.",
            "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya."
        ],
        "answer": "Penarikan/ Pemindahbukuan deposito/ tabungan/ giro yang dilakukan bukan oleh pemilik/kuasanya."
    },
    {
        "id": 555,
        "version": 6,
        "category": "Tindak Pidana Perbankan",
        "question": "Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan ...",
        "options": [
            "Kegiatan Usaha Bank.",
            "Pengawasan Bank.",
            "Perizinan.",
            "Rahasia Bank."
        ],
        "answer": "Pengawasan Bank."
    },
    {
        "id": 556,
        "version": 6,
        "category": "Kredit/Pembiayaan",
        "question": "Pihak terkait dalam perhitungan batas maksimum pemberian kredit (BMPK) adalah",
        "options": [
            "Badan Usaha Milik Negara",
            "Perorangan atau perusahaan yang tidak mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)",
            "Semua benar",
            "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)"
        ],
        "answer": "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)"
    },
    {
        "id": 557,
        "version": 6,
        "category": "Pengawasan",
        "question": "Batas waktu penyampaian LKPJ adalah:",
        "options": [
            "15 Juli",
            "15 April",
            "15 November",
            "5 April"
        ],
        "answer": "15 April"
    },
    {
        "id": 558,
        "version": 6,
        "category": "Konsolidasi BPR/S",
        "question": "Berikut ini merupakan tantangan dalam konsolidasi BPR/BPRS, kecuali",
        "options": [
            "Keterbatasan internal control, SDM dan TI",
            "Kesulitan mendapatkan pasangan penggabungan",
            "PSP umumnya tidak mau mempertahankan kepemilikannya pada 1 BPR dan BPRS",
            "Kepemilikan BPR/S memiliki nilai historis sehingga kepemilikannya akan dipertahankan"
        ],
        "answer": "PSP umumnya tidak mau mempertahankan kepemilikannya pada 1 BPR dan BPRS"
    },
    {
        "id": 559,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Apakah yang dimaksud dengan demokrasi ekonomi dalam UU Perbankan Syariah?",
        "options": [
            "Pedoman pengelolaan bank yang wajib dianut guna mewujudkan perbankan yang sehat, kuat, dan efisien sesuai dengan ketentuan peraturan perundang-undangan",
            "Kegiatan ekonomi syariah yang mengandung nilai keadilan, kebersamaan, pemerataan, dan kemanfaatan",
            "Kegiatan usaha yang berkontribusi terhadap pengembangan perekonomian",
            "Kegiatan usaha yang tidak mengandung unsur riba, maisir, gharar, haram, zalim"
        ],
        "answer": "Kegiatan ekonomi syariah yang mengandung nilai keadilan, kebersamaan, pemerataan, dan kemanfaatan"
    },
    {
        "id": 560,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Berikut ini yang merupakan organ pelengkap di dalam Konglomerasi Keuangan yang harus dibentuk oleh Konglomerasi Keuangan, kecuali:",
        "options": [
            "Satuan Kerja Audit Intern Terintegrasi",
            "Satuan Kerja Operasional Terintegrasi",
            "Satuan Kerja Kepatuhan Terintegrasi",
            "Satuan Kerja Manajemen Risiko Terintegrasi"
        ],
        "answer": "Satuan Kerja Operasional Terintegrasi"
    },
    {
        "id": 561,
        "version": 6,
        "category": "Perizinan",
        "question": "Pengertian Bank Berbadan Hukum Indonesia adalah:",
        "options": [
            "Bank yang melaksanakan kegiatan usaha perbankan dalam bentuk badan hukum asing sesuai dengan ketentuan peraturan perundang-undangan, termasuk bank perantara",
            "Bank yang melaksanakan kegiatan usaha perbankan dalam bentuk badan hukum Indonesia sesuai dengan ketentuan peraturan perundang-undangan, termasuk bank perantara",
            "Kantor dari bank yang berbadan hukum dan memiliki kantor pusat di luar negeri, yang bertindak hanya sebagai penghubung antara bank yang berbadan hukum dan memiliki kantor pusat di luar negeri dengan nasabahnya di Indonesia",
            "Bank yang merupakan kantor cabang dari bank yang berbadan hukum dan memiliki kantor pusat di luar negeri"
        ],
        "answer": "Bank yang melaksanakan kegiatan usaha perbankan dalam bentuk badan hukum Indonesia sesuai dengan ketentuan peraturan perundang-undangan, termasuk bank perantara"
    },
    {
        "id": 562,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Yang dimaksud dengan Total Modal Aktual (Aggregate Net Equity) dalam perhitungan Permodalan Terintegrasi adalah:",
        "options": [
            "Jumlah modal aktual dibagi dengan jumlah modal minimum",
            "Jumlah Modal Inti dari masing-masing LJK anggota KK",
            "Nilai nominal penjumlahan dari modal minimum yang wajib dipenuhi oleh masing-masing LJK sesuai ketentuan di masing masing sektor keuangan",
            "Nilai nominal penjumlahan dari modal aktual masing-masing LJK sesuai ketentuan di masing-masing sektor keuangan"
        ],
        "answer": "Nilai nominal penjumlahan dari modal aktual masing-masing LJK sesuai ketentuan di masing-masing sektor keuangan"
    },
    {
        "id": 563,
        "version": 6,
        "category": "Pengawasan",
        "question": "Di bawah ini, yang termasuk dalam Regulatory Triangle for Promoting Finance Stability adalah:",
        "options": [
            "Pengawasan",
            "Perizinan",
            "Semua benar",
            "Pengaturan"
        ],
        "answer": "Semua benar"
    },
    {
        "id": 564,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Transaksi sewa menyewa yang diikuti perpindahan kepemilikan obyek sewa pada akhir periode merupakan definisi dari transaksi:",
        "options": [
            "Ijarah",
            "Istishna",
            "Ijarah muntahiyah bit tamlik",
            "Musyarakah mutanaqishah"
        ],
        "answer": "Ijarah muntahiyah bit tamlik"
    },
    {
        "id": 565,
        "version": 6,
        "category": "Kredit/Pembiayaan",
        "question": "Penyusunan Laporan Large Exposure (LEX) merupakan fungsi pada spesialis",
        "options": [
            "Kredit",
            "APU-PPT",
            "Pasar dan Likuiditas",
            "Teknologi Informasi"
        ],
        "answer": "Kredit"
    },
    {
        "id": 566,
        "version": 6,
        "category": "Tindak Pidana Perbankan",
        "question": "Manakah dari pernyataan berikut yang bukan merupakan hal-hal yang dilakukan oleh DRKP dalam penanganan PKP yang berindikasi tipibank",
        "options": [
            "Melakukan penuntutan terhadap PKP yang memiliki indikasi tindak pidana perbankan",
            "Melakukan ekspose dengan satker terkait al. DHUK dan DPJK",
            "Melakukan Quality Assurance sebelum dan sesudah pemeriksaan investigasi",
            "Melakukan investigasi dan atau pemeriksaan terhadap PKP yang memiliki indikasi tipibank yang disampaikan oleh pengawas;"
        ],
        "answer": "Melakukan penuntutan terhadap PKP yang memiliki indikasi tindak pidana perbankan"
    },
    {
        "id": 567,
        "version": 6,
        "category": "LPIP",
        "question": "Berapa lamakah persetujuan prinsip yang telah diberikan OJK dalam rangka pendirian LPIP berlaku?",
        "options": [
            "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan",
            "Paling lama 24 (dua puluh empat) bulan sejak tanggal persetujuan prinsip diterbitkan",
            "Paling lama 6 (enam) bulan sejak tanggal persetujuan prinsip diterbitkan",
            "Tidak terdapat masa berlaku",
            "Paling lama 3 (tiga) bulan sejak tanggal persetujuan prinsip diterbitkan"
        ],
        "answer": "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan"
    },
    {
        "id": 568,
        "version": 6,
        "category": "Perizinan",
        "question": "Berikut ini yang termasuk jenis perizinan yang tergolong dalam entry kelembagaan:",
        "options": [
            "Pendirian bank, pembukaan kantor cabang, dan perubahan kegiatan usaha bank konvensional menjadi bank syariah.",
            "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.",
            "Pembukaan Kantor perwakilan Bank yang berkantor pusat di luar negeri, pembukaan unit usaha syariah, dan pemindahan alamat kantor bank syariah.",
            "Penggabungan usaha bank syariah, perubahan kegiatan usaha bank syariah, dan pengajuan calon Pihak Utama bank syariah."
        ],
        "answer": "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah."
    },
    {
        "id": 569,
        "version": 6,
        "category": "Pengawasan",
        "question": "Status pengawasan Bank yang ditetapkan oleh OJK terdiri dari, kecuali:",
        "options": [
            "Pengawasan Khusus",
            "Pengawasan dalam perhatian khusus",
            "Pengawasan Intensif",
            "Pengawasan Normal"
        ],
        "answer": "Pengawasan dalam perhatian khusus"
    },
    {
        "id": 570,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "UUS wajib melakukan pemisahan (spin off) dari induknya, apabila:",
        "options": [
            "Share asset UUS lebih dari 50% dan/atau total aset lebih dari Rp50 triliun",
            "Telah berjalan lebih dari 15 tahun",
            "Tidak mengalami pertumbuhan signifikan",
            "Total aset lebih dari Rp75 triliun"
        ],
        "answer": "Share asset UUS lebih dari 50% dan/atau total aset lebih dari Rp50 triliun"
    },
    {
        "id": 571,
        "version": 6,
        "category": "Pengawasan",
        "question": "Manakah satuan kerja yang terlibat pada pengawasan AP/KAP?",
        "options": [
            "DIMB, DAJP, dan DPEP",
            "DIMB, DPBS, dan DKEU",
            "DIMB, DPEP, dan DKEU",
            "OJKI, DIMB, dan DAJP"
        ],
        "answer": "DIMB, DAJP, dan DPEP"
    },
    {
        "id": 572,
        "version": 6,
        "category": "Bank Sistemik",
        "question": "Setelah menjalankan fungsinya, Bank Perantara akan:",
        "options": [
            "Dialihkan kepemilikannya kepada pihak lain",
            "Dilebur dengan bank sistemik",
            "Dibubarkan oleh OJK",
            "Dilikuidasi sepenuhnya oleh BI"
        ],
        "answer": "Dialihkan kepemilikannya kepada pihak lain"
    },
    {
        "id": 573,
        "version": 6,
        "category": "Pengawasan",
        "question": "Organisasi Pemantauan Sektor Perbankan (PMK) terdapat 3 (tiga) unsur anggotanya:",
        "options": [
            "Focal Point OJK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
            "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
            "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Focal Point OJK",
            "Focal Point OJK, Koordinator Pemantauan OJK Wide, dan Seluruh Satuan Kerja Pengawas"
        ],
        "answer": "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan"
    },
    {
        "id": 574,
        "version": 6,
        "category": "TKA",
        "question": "Apa tujuan utama dari pengaturan pemanfaatan Tenaga Kerja Asing (TKA) di sektor perbankan?",
        "options": [
            "Menyederhanakan prosedur perizinan ketenagakerjaan lintas sektor",
            "Menyesuaikan struktur gaji tenaga kerja asing dan domestik",
            "Mempermudah proses rekrutmen tenaga kerja dari luar negeri",
            "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)"
        ],
        "answer": "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)"
    },
    {
        "id": 575,
        "version": 6,
        "category": "BPR",
        "question": "Penggolongan kualitas kredit BPR adalah kecuali:",
        "options": [
            "Dalam Perhatian Khusus",
            "Macet",
            "Dalam Penyehatan",
            "Lancar"
        ],
        "answer": "Dalam Penyehatan"
    },
    {
        "id": 576,
        "version": 6,
        "category": "Struktur OJK",
        "question": "Melakukan koordinasi pengawasan di sektor perusahaan pembiayaan, perusahaan pembiayaan infrastruktur, usaha pembiayaan berbasis teknologi, perusahaan modal ventura, lembaga keuangan mikro, perusahaan pergadaian dan lembaga jasa keuangan lainnya (selanjutnya disebut PVML) yang berkantor pusat di daerah, merupakan salah satu fungsi satuan kerja koordinator (hub bidang), yaitu:",
        "options": [
            "DPLK",
            "DPVR",
            "DPLJ",
            "DPDK"
        ],
        "answer": "DPLJ"
    },
    {
        "id": 577,
        "version": 6,
        "category": "Konsolidasi BPR/S",
        "question": "Berikut ini yang merupakan ketentuan terkait konsolidasi BPR/BPRS , kecuali",
        "options": [
            "Semua benar",
            "UU P2SK",
            "UU No.4 tahun 2023",
            "POJK No.21/POJK.03/2019",
            "POJK No.62/POJK.03/2020"
        ],
        "answer": "Semua benar"
    },
    {
        "id": 578,
        "version": 6,
        "category": "Produk Bank",
        "question": "Apa yang menjadi ciri khas dari produk simpanan berjangka?",
        "options": [
            "Bunga yang dapat dinegosiasikan",
            "Jangka waktu tidak ditentukan",
            "Likuiditas tinggi",
            "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
        ],
        "answer": "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
    },
    {
        "id": 579,
        "version": 6,
        "category": "LPIP",
        "question": "Modal disetor untuk mendirikan LPIP ditetapkan paling sedikit:",
        "options": [
            "Rp50 miliar",
            "Rp500 miliar",
            "Rp100 miliar",
            "Rp200 miliar"
        ],
        "answer": "Rp200 miliar"
    },
    {
        "id": 580,
        "version": 6,
        "category": "Struktur OJK",
        "question": "Kelompok Spesialis Perbankan (KSP) terdiri dari beberapa spesialis risiko, kecuali",
        "options": [
            "Spesialis Teknologi Informasi",
            "Spesialis Kredit",
            "Spesialis APU-PPT",
            "Spesialis Stratejik"
        ],
        "answer": "Spesialis Stratejik"
    },
    {
        "id": 581,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Yang dimaksud sebagai perusahaan anak dalam Konglomerasi Keuangan adalah yang memenuhi syarat sebagai berikut:",
        "options": [
            "Perusahaan yang melakukan kegiatan usaha selain sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
            "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang hanya berada di dalam negeri",
            "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
            "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan sektor lainnya, serta dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri"
        ],
        "answer": "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri"
    },
    {
        "id": 582,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Komite yang wajib dibentuk oleh suatu Konglomerasi Keuangan yang beranggotakan Dewan Komisaris dari perwakilan LJK anggota KK, disebut:",
        "options": [
            "Komite Konglomerasi Keuangan",
            "Komite Operasional Terintegrasi",
            "Komite Tata Kelola Terintegrasi",
            "Komite Manajemen Risiko Terintegrasi"
        ],
        "answer": "Komite Tata Kelola Terintegrasi"
    },
    {
        "id": 583,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Undang-Undang Perbankan Syariah yang kini telah diberlakukan adalah:",
        "options": [
            "UU RI No. 7 tahun 1992",
            "UU RI No. 21 tahun 2008",
            "UU RI No. 10 tahun 1998",
            "UU RI No. 21 tahun 2011"
        ],
        "answer": "UU RI No. 21 tahun 2008"
    },
    {
        "id": 584,
        "version": 6,
        "category": "Kegiatan Usaha Bank",
        "question": "Bank umum dapat melakukan kegiatan jasa yang mencakup?",
        "options": [
            "Pemberian kredit dan investasi pasar modal",
            "Pemberian simpanan dan investasi pasar modal",
            "Pemberian kredit, simpanan, dan jasa keuangan lainnya",
            "Pemberian kredit dan simpanan saja"
        ],
        "answer": "Pemberian kredit, simpanan, dan jasa keuangan lainnya"
    },
    {
        "id": 585,
        "version": 6,
        "category": "BPR",
        "question": "Berapa jumlah modal disetor minimum untuk mendirikan BPR di zona 1?",
        "options": [
            "Rp100 miliar",
            "Rp75 miliar",
            "Rp50 miliar",
            "Rp25 miliar"
        ],
        "answer": "Rp100 miliar"
    },
    {
        "id": 586,
        "version": 6,
        "category": "Tata Kelola",
        "question": "Tugas pokok SKAI antara lain",
        "options": [
            "Membantu tugas direktur utama dan dewan komisaris dalam melakukan pengawasan dan pengambilan keputusan strategis",
            "Mengawasi jalannya kegiatan operasional bank",
            "Membuat analisis dan penilaian di bidang manajemen risiko, keuangan, akuntansi dan operasional",
            "Mengidentifikasi segala kemungkinan untuk memperbaiki dan meningkatkan efisiensi penggunaan sumber daya dan dana"
        ],
        "answer": "Mengidentifikasi segala kemungkinan untuk memperbaiki dan meningkatkan efisiensi penggunaan sumber daya dan dana"
    },
    {
        "id": 587,
        "version": 6,
        "category": "Perizinan BPR",
        "question": "Setelah dokumen lengkap, berapa lama jangka waktu OJK dalam memberikan persetujuan atau penolakan atas permohonan persetujuan prinsip pendirian BPR?",
        "options": [
            "20 hari kerja",
            "30 hari",
            "20 hari",
            "30 hari kerja"
        ],
        "answer": "30 hari kerja"
    },
    {
        "id": 588,
        "version": 6,
        "category": "Permodalan",
        "question": "Berapakah besaran capital conservation buffer?",
        "options": [
            "0 - 2,5% dari ATMR",
            "2,5% dari ATMR",
            "1 - 2,5% dari ATMR",
            "Diserahkan kepada masing-masing bank"
        ],
        "answer": "2,5% dari ATMR"
    },
    {
        "id": 589,
        "version": 6,
        "category": "Publikasi Bank",
        "question": "Bank X merupakan bagian dari kelompok usaha dari PT Y. Bank X memiliki anak perusahaan Bank A, PT B, dan PT C. Sehubungan dengan hal tersebut, Bank X wajib mengumumkan secara triwulanan laporan bagian dari kelompok usaha, yaitu laporan keuangan:",
        "options": [
            "Bank X",
            "PT Y",
            "PT B",
            "Bank A"
        ],
        "answer": "PT Y"
    },
    {
        "id": 590,
        "version": 6,
        "category": "Pengawasan",
        "question": "Periode penyusunan Integrated Supervisory Plan dilakukan selambat-lambatnya pada:",
        "options": [
            "15 Desember tahun sebelumnya",
            "15 Januari tahun berjalan",
            "31 Januari tahun berjalan",
            "31 Desember tahun sebelumnya"
        ],
        "answer": "31 Januari tahun berjalan"
    },
    {
        "id": 591,
        "version": 6,
        "category": "Konsolidasi BPR/S",
        "question": "Wilayah jaringan kantor BPR/S hasil penggabungan/peleburan paling luas berlokasi dalam satu wilayah",
        "options": [
            "Kabupaten/Kota",
            "Negara",
            "Provinsi",
            "Pulau atau kepulauan utama"
        ],
        "answer": "Pulau atau kepulauan utama"
    },
    {
        "id": 592,
        "version": 6,
        "category": "Perbankan Syariah",
        "question": "Di bawah ini merupakan prinsip perbankan syariah berdasarkan Undang-Undang Nomor 21 Tahun 2008, kecuali:",
        "options": [
            "Demokrasi ekonomi",
            "Prinsip kehati-hatian",
            "Prinsip sosial",
            "Prinsip Syariah"
        ],
        "answer": "Prinsip sosial"
    },
    {
        "id": 593,
        "version": 6,
        "category": "Akuntansi/Laporan Keuangan",
        "question": "Bagi bank umum, liabilitas keuangan bank hanya dapat diklasifikasikan dan diukur dengan:",
        "options": [
            "Nilai wajar melalui laba rugi",
            "Keuntungan",
            "Biaya perolehan diamortisasi",
            "Jangka waktu"
        ],
        "answer": "Biaya perolehan diamortisasi"
    },
    {
        "id": 594,
        "version": 6,
        "category": "Publikasi Bank",
        "question": "Laporan publikasi informasi atau fakta material bagi bank yang merupakan emiten dan/atau perusahaan publik harus:",
        "options": [
            "Mencakup informasi rahasia nasabah",
            "Disampaikan 3 hari kerja setelah adanya informasi atau fakta material",
            "Mencakup informasi yang diatur sesuai POJK yang terkait dengan informasi atau fakta material di pasar modal",
            "Ditandatangani oleh seluruh direksi bank"
        ],
        "answer": "Mencakup informasi yang diatur sesuai POJK yang terkait dengan informasi atau fakta material di pasar modal"
    },
    {
        "id": 595,
        "version": 6,
        "category": "SLIK",
        "question": "Informasi berikut ada dalam laporan debitur yang disampaikan Pelapor, kecuali:",
        "options": [
            "Agunan",
            "Fasilitas penyediaan dana",
            "Penjamin",
            "Media sosial debitur"
        ],
        "answer": "Media sosial debitur"
    },
    {
        "id": 596,
        "version": 6,
        "category": "Konglomerasi Keuangan",
        "question": "Peraturan OJK yang mengatur tentang Konglomerasi Keuangan dan Perusahaan Induk Konglomerasi Keuangan, diatur di dalam POJK:",
        "options": [
            "POJK 18 Tahun 2014",
            "POJK 17 Tahun 2014",
            "POJK 30 Tahun 2024",
            "POJK 45 Tahun 2020"
        ],
        "answer": "POJK 30 Tahun 2024"
    },
    {
        "id": 597,
        "version": 6,
        "category": "Perizinan",
        "question": "Berikut ini merupakan jenis-jenis perizinan kelembagaan dan jaringan kantor, kecuali:",
        "options": [
            "Pemindahan alamat",
            "Pendirian dan Cabut Izin Usaha Bank",
            "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum",
            "Perubahan Nama Bank"
        ],
        "answer": "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum"
    },
    {
        "id": 598,
        "version": 6,
        "category": "Pengembangan Ekonomi Daerah (PED)",
        "question": "Bentuk mekanisme penetapan sektor ekonomi unggulan dalam program pengembangan ekonomi daerah yang dapat menjadi landasan pembentukan Perjanjian Kerja Sama adalah:",
        "options": [
            "Analisis LQ/DLQ",
            "Pelaksanaan FGD dengan stakeholder",
            "Analisis shift share",
            "Analisis NPL"
        ],
        "answer": "Pelaksanaan FGD dengan stakeholder"
    },
    {
        "id": 599,
        "version": 6,
        "category": "BPR Syariah",
        "question": "BPR Syariah yang memiliki modal inti kurang dari Rp50 miliar wajib menerapkan manajemen risiko paling sedikit meliputi risiko:",
        "options": [
            "Kredit, operasional, kepatuhan, likuiditas, dan strategi",
            "Kredit, operasional, kepatuhan, dan likuiditas",
            "Kredit, operasional, kepatuhan, likuiditas, reputasi, dan strategi",
            "Kredit, operasional, reputasi, dan strategi"
        ],
        "answer": "Kredit, operasional, kepatuhan, dan likuiditas"
    },
  
    {
        "id": 600,
        "version": 6,
        "category": "Akuntan Publik",
        "question": "Permohonan pendaftaran Akuntan Publik (AP) telah disetujui oleh OJK serta telah diberikan Surat Tanda Terdaftar (STTD) maka AP dimaksud akan masuk ke publikasi sebagai:",
        "options": [
            "Daftar AP yang dibekukan",
            "Daftar AP yang tidak boleh audit LJK",
            "Daftar AP Tidak Aktif Sementara waktu",
            "Daftar AP yang Aktif",
            "Daftar AP Tidak Aktif Tetap"
        ],
        "answer": "Daftar AP yang Aktif"
    },

  // paket 8
   {
    "id": 601,
    "version": 8,
    "category": "Perbankan",
    "question": "Berapa jumlah minimal Direksi BPR dan BPRS Syariah dengan modal inti kurang dari Rp50.000.000.000,00 yang diatur dalam ketentuan POJK Nomor 9 Tahun 2024 tentang Penerapan Tata Kelola Bagi Bank Perekonomian Rakyat dan Bank Perekonomian Rakyat Syariah?",
    "options": [
      "2 (dua) orang anggota Direksi",
      "3 (tiga) orang anggota Direksi",
      "Lebih banyak dari jumlah anggota Dewan Komisaris",
      "1 (satu) orang anggota Direksi"
    ],
    "answer": "2 (dua) orang anggota Direksi"
  },
  {
    "id": 602,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini yang merupakan ketentuan terkait konsolidasi BPR/BPRS, kecuali",
    "options": [
      "Semua benar",
      "POJK No.62/POJK.03/2020",
      "POJK No.21/POJK.03/2019",
      "UU No.4 tahun 2023",
      "UU P2SK"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 603,
    "version": 8,
    "category": "Perbankan",
    "question": "Manakan diantara Konglomerasi Keuangan dibawah ini yang memiliki wider group dengan unregulated entities paling banyak, adalah:",
    "options": [
      "KK BRI",
      "KK Mega Corpora",
      "KK BCA",
      "KK Mandiri"
    ],
    "answer": "KK Mega Corpora"
  },
  {
    "id": 604,
    "version": 8,
    "category": "Perbankan",
    "question": "Berapa lamakah persetujuan prinsip yang telah diberikan OJK dalam rangka pendirian LPIP berlaku?",
    "options": [
      "Paling lama 24 (dua puluh empat) bulan sejak tanggal persetujuan prinsip diterbitkan",
      "Paling lama 6 (enam) bulan sejak tanggal persetujuan prinsip diterbitkan",
      "Paling lama 3 (tiga) bulan sejak tanggal persetujuan prinsip diterbitkan",
      "Tidak terdapat masa berlaku",
      "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan"
    ],
    "answer": "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan"
  },
  {
    "id": 605,
    "version": 8,
    "category": "Perbankan",
    "question": "Dibawah ini adalah tugas-tugas pokok Focal Point OJK, kecuali:",
    "options": [
      "Melaksanakan seminar/sosialisasi/pelatihan terkait dengan pengembangan sumber daya manusia",
      "Merekomendasikan usulan koordinasi dan kerja sama dengan pihak eksternal maupun internal dalam rangka makro-mikro prudensial dan PMK",
      "Mengarahkan penatausahaan dan menyediakan data dan indikator kuantitatif dan kualitatif yang diperoleh dari pertukaran informasi",
      "Melaksanakan komunikasi, pertukaran data dan informasi, koordinasi, dan kerja sama dengan BI, LPS, atau Lembaga lainnya"
    ],
    "answer": "Melaksanakan seminar/sosialisasi/pelatihan terkait dengan pengembangan sumber daya manusia"
  },
  {
    "id": 606,
    "version": 8,
    "category": "Perbankan",
    "question": "BPR dapat menyelenggarakan Produk lanjutan baru melalui mekanisme instant-approval untuk Produk berupa:",
    "options": [
      "Pengembangan dari kegiatan berbasis teknologi informasi",
      "Akses ke sumber dana untuk pembayaran.",
      "Produk yang berkaitan dengan LJK nonbank yang memerlukan izin dan/atau persetujuan dari OJK.",
      "Penyelenggaraan kegiatan berbasis teknologi informasi."
    ],
    "answer": "Pengembangan dari kegiatan berbasis teknologi informasi"
  },
  {
    "id": 607,
    "version": 8,
    "category": "Perbankan",
    "question": "Di bawah ini pernyataan yang tidak benar terkait Penggabungan/Peleburan adalah:",
    "options": [
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang berbeda sepanjang kantor-kantor BPR hasil Penggabungan/Peleburan berlokasi dalam wilayah provinsi yang sama",
      "Penggabungan/Peleburan hanya dapat dilakukan antar BPR",
      "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional",
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang sama"
    ],
    "answer": "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional"
  },
  {
    "id": 608,
    "version": 8,
    "category": "Perbankan",
    "question": "Perbuatan berikut yang bukan merupakan PKP yang memiliki indikasi tipibank lainnya adalah",
    "options": [
      "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA).",
      "Pencatatan biaya yang tidak benar (mark-up biaya, fiktif, dll)",
      "Pelanggaran terkait ketentuan rahasia bank.",
      "Pelanggaran Cease and Desist Order (CDO)."
    ],
    "answer": "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA)"
  },
  {
    "id": 609,
    "version": 8,
    "category": "Perbankan",
    "question": "Apa latar belakang utama perlunya penyempurnaan ketentuan terkait pemanfaatan Tenaga Kerja Asing (TKA) dalam sektor perbankan?",
    "options": [
      "Perubahan kebijakan Kementerian Ketenagakerjaan",
      "Arahan dari lembaga internasional seperti IMF",
      "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank",
      "Permintaan dari asosiasi perbankan asing"
    ],
    "answer": "Perkembangan globalisasi, liberalisasi ekonomi, dan kebutuhan bank"
  },
  {
    "id": 610,
    "version": 8,
    "category": "Perbankan",
    "question": "Pengumuman laporan publikasi keuangan dan informasi kinerja keuangan tahunan bagi bank paling lambat dilaksanakan pada:",
    "options": [
      "1 bulan setelah diterbitkannya laporan auditor independen",
      "1 bulan setelah akhir tahun buku",
      "4 bulan setelah akhir tahun buku",
      "3 bulan setelah akhir tahun buku"
    ],
    "answer": "4 bulan setelah akhir tahun buku"
  },
  {
    "id": 611,
    "version": 8,
    "category": "Perbankan",
    "question": "Manakah dari jumlah dewan komisaris independen di bank umum yang benar:",
    "options": [
      "2 orang dari total keseluruhan 5 orang anggota dewan komisaris",
      "1 orang dari total keseluruhan 3 orang anggota dewan komisaris",
      "3 orang dari total keseluruhan 7 orang anggota dewan komisaris",
      "4 orang dari total keseluruhan 5 orang anggota dewan komisaris"
    ],
    "answer": "4 orang dari total keseluruhan 5 orang anggota dewan komisaris"
  },
  {
    "id": 612,
    "version": 8,
    "category": "Perbankan",
    "question": "Aplikasi OJK yang digunakan untuk melakukan Pendaftaran Akuntan Publik / Kantor Akuntan Publik di OJK:",
    "options": [
      "SIPO",
      "SPRINT",
      "SIPUTRI",
      "SIELOG",
      "SLIK"
    ],
    "answer": "SPRINT"
  },
  {
    "id": 613,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini merupakan fungsi dari Bank Perantara, kecuali:",
    "options": [
      "Menjamin seluruh simpanan nasabah bank lain",
      "Melanjutkan kegiatan usaha perbankan sementara",
      "Mengalihkan kepemilikan kepada pihak ketiga",
      "Menerima pengalihan aset dan/atau kewajiban bank gagal"
    ],
    "answer": "Menjamin seluruh simpanan nasabah bank lain"
  },
  {
    "id": 614,
    "version": 8,
    "category": "Perbankan",
    "question": "Tahapan pemberian izin pendirian Bank Syariah berupa:",
    "options": [
      "Persetujuan prinsip dan izin usaha",
      "Persetujuan kegiatan usaha",
      "Izin usaha",
      "Persetujuan prinsip"
    ],
    "answer": "Persetujuan prinsip dan izin usaha"
  },
  {
    "id": 615,
    "version": 8,
    "category": "Perbankan",
    "question": "Siapa yang wajib memberikan rekomendasi dalam usulan penunjukan AP dan/atau KAP",
    "options": [
      "Komite Audit",
      "Akuntan Internal",
      "Direksi",
      "Pemegang saham"
    ],
    "answer": "Komite Audit"
  },
  {
    "id": 616,
    "version": 8,
    "category": "Perbankan",
    "question": "Dalam kondisi seperti di bawah ini, BPR ditetapkan sebagai BPR tidak dapat disehatkan, kecuali:",
    "options": [
      "Masih berada dalam jangka waktu pengawasan khusus namun mengalami penurunan rasio KPMM menjadi sama dengan atau kurang dari 2% dan/atau CR rata-rata selama 6 bulan terakhir menjadi sama dengan atau kurang dari 1%",
      "Telah melampaui jangka waktu pengawasan khusus dan tidak memenuhi kriteria untuk dikeluarkan dari status pengawasan khusus",
      "Berdasarkan penilaian OJK, BPR tidak mampu meningkatkan rasio KPMM dan CR rata-rata 6 bulan terakhir untuk memenuhi kriteria dikeluarkan dari status pengawasan khusus",
      "Dalam proses pemeriksaan setoran modal namun jangka waktu pengawasan khusus telah melampaui"
    ],
    "answer": "Dalam proses pemeriksaan setoran modal namun jangka waktu pengawasan khusus telah melampaui"
  },
  {
    "id": 617,
    "version": 8,
    "category": "Perbankan",
    "question": "Berapakah jumlah modal disetor bagi BUS yang menjadi perusahaan induk?",
    "options": [
      "Rp 2 triliun",
      "Rp 3 triliun",
      "Rp 1 triliun",
      "Rp 500 Miliar"
    ],
    "answer": "Rp 3 triliun"
  },
  {
    "id": 618,
    "version": 8,
    "category": "Perbankan",
    "question": "Perizinan kelembagaan yang hanya terdapat di sektor perbankan Syariah, yaitu:",
    "options": [
      "Akuisisi",
      "Integrasi",
      "Konsolidasi",
      "Konversi"
    ],
    "answer": "Konversi"
  },
  {
    "id": 619,
    "version": 8,
    "category": "Perbankan",
    "question": "Dasar dilakukannya reorganisasi di bidang perbankan, kecuali",
    "options": [
      "MPSJKI 2021-2025",
      "Amanat UU P2SK",
      "Untuk menciptakan IJK daerah yang kuat dan sehat",
      "Amanat Dewan Komisioner OJK"
    ],
    "answer": "Amanat Dewan Komisioner OJK"
  },
  {
    "id": 620,
    "version": 8,
    "category": "Perbankan",
    "question": "Bank umum dapat melakukan kegiatan jasa yang mencakup?",
    "options": [
      "Pemberian kredit, simpanan, dan jasa keuangan lainnya",
      "Pemberian simpanan dan investasi pasar modal",
      "Pemberian kredit dan investasi pasar modal",
      "Pemberian kredit dan simpanan saja"
    ],
    "answer": "Pemberian kredit, simpanan, dan jasa keuangan lainnya"
  },
  {
    "id": 621,
    "version": 8,
    "category": "Perbankan",
    "question": "Penggolongan kualitas kredit BPR adalah kecuali:",
    "options": [
      "Dalam Penyehatan",
      "Dalam Perhatian Khusus",
      "Lancar",
      "Macet"
    ],
    "answer": "Dalam Penyehatan"
  },
  {
    "id": 622,
    "version": 8,
    "category": "Perbankan",
    "question": "Ketentuan mengenai TKA di sektor perbankan merupakan hasil konversi dari regulasi sebelumnya yang diterbitkan oleh:",
    "options": [
      "Kementerian Luar Negeri",
      "Kementerian Ketenagakerjaan",
      "Bank Indonesia",
      "Lembaga Penjamin Simpanan"
    ],
    "answer": "Bank Indonesia"
  },
  {
    "id": 623,
    "version": 8,
    "category": "Perbankan",
    "question": "Pernyataan berikut yang tidak benar terkait kewajiban dalam pembukaan Rahasia Bank adalah:",
    "options": [
      "Bank wajib melaksanakan pembukaan sesuai dengan izin tertulis OJK",
      "Bank dan Pihak Terafiliasi wajib merahasiakan informasi mengenai Nasabah Penyimpan dan Simpanannya dan/atau Nasabah Investor dan Investasinya",
      "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat",
      "Bank wajib memiliki prosedur internal pembukaan Rahasia Bank"
    ],
    "answer": "Bank wajib membuka informasi di luar isi izin tertulis dari OJK jika darurat"
  },
  {
    "id": 624,
    "version": 8,
    "category": "Perbankan",
    "question": "Apa arti prinsip Kewajaran dalam tata kelola BPR?",
    "options": [
      "Kemudahan ekspansi bisnis",
      "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan",
      "Kewajiban laporan keuangan tahunan",
      "Menghindari pemborosan biaya"
    ],
    "answer": "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan"
  },
  {
    "id": 625,
    "version": 8,
    "category": "Perbankan",
    "question": "Landasan ketentuan internal di OJK, berupa:",
    "options": [
      "Peraturan Dewan Komisioner (PDK) dan Surat Edaran Dewan Komisioner (SEDK)",
      "Peraturan Dewan Komisioner (PDK) dan Surat Edaran Otoritas Jasa Keuangan (SEOJK)",
      "Peraturan Otoritas Jasa Keuangan (POJK) dan Surat Edaran Otoritas Jasa Keuangan (SEOJK)",
      "Peraturan Otoritas Jasa Keuangan (POJK) dan Surat Edaran Dewan Komisioner (SEDK)"
    ],
    "answer": "Peraturan Dewan Komisioner (PDK) dan Surat Edaran Dewan Komisioner (SEDK)"
  },
  {
    "id": 626,
    "version": 8,
    "category": "Perbankan",
    "question": "Transparansi dan publikasi perbankan syariah termasuk dalam lingkup regulasi:",
    "options": [
      "Standar akuntansi dan publikasi",
      "Standar akuntansi dan pengawasan",
      "Standar akuntansi dan pemeriksaan",
      "Standar akuntansi dan pelaporan"
    ],
    "answer": "Standar akuntansi dan pelaporan"
  },
  {
    "id": 627,
    "version": 8,
    "category": "Perbankan",
    "question": "Kualitas aset produktif BPR Syariah dalam bentuk penempatan pada bank lain dibedakan atas:",
    "options": [
      "Lancar, dalam perhatian khusus, macet",
      "Lancar, kurang lancar, macet",
      "Lancar, diragukan, dalam perhatian khusus",
      "Lancar, diragukan, macet"
    ],
    "answer": "Lancar, kurang lancar, macet"
  },
  {
    "id": 628,
    "version": 8,
    "category": "Perbankan",
    "question": "POJK yang mengatur tentang penggabungan, peleburan dan pengambilalihan BPR/BPRS yaitu",
    "options": [
      "POJK Nomor 21/POJK.03/2019",
      "POJK Nomor 24/POJK.03/2019",
      "POJK Nomor 22/POJK.03/2019",
      "POJK Nomor 23/POJK.03/2019"
    ],
    "answer": "POJK Nomor 21/POJK.03/2019"
  },
  {
    "id": 629,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut merupakan karakteristik dari simpanan wadiah, kecuali:",
    "options": [
      "Bonus diperjanjikan di awal",
      "Pemberian imbalan/bonus tergantung kebijakan Bank",
      "Bisa diambil sewaktu-waktu atau sesuai kesepakatan",
      "Tidak ada imbalan/bonus"
    ],
    "answer": "Bonus diperjanjikan di awal"
  },
  {
    "id": 630,
    "version": 8,
    "category": "Perbankan",
    "question": "Pernyataan berikut ini menjelaskan sistem pengawasan Bank Syariah yang membuatnya berbeda dengan Bank Konvensional, kecuali:",
    "options": [
      "Pengawasan hanya pada aspek manajemen melalui Dewan Komisaris",
      "Pengawasan bank syariah meliputi aspek manajemen melalui Dewan Komisaris dan aspek syariah melalui DPS",
      "Adanya DPS memastikan operasional bank tidak menyimpang dari syariah",
      "DPS juga memastikan moralitas pengelola bank dan nasabah sesuai dengan akhlakul karimah"
    ],
    "answer": "Pengawasan hanya pada aspek manajemen melalui Dewan Komisaris"
  },
  {
    "id": 631,
    "version": 8,
    "category": "Perbankan",
    "question": "Perbuatan hukum yang dilakukan oleh KCBLN dan Bank dengan mengalihkan aset dan/atau liabilitas KCBLN secara hukum kepada Bank, dan selanjutnya dilakukan pencabutan izin usaha KCBLN disebut:",
    "options": [
      "Penggabungan",
      "Peleburan",
      "Integrasi",
      "Konversi"
    ],
    "answer": "Integrasi"
  },
  {
    "id": 632,
    "version": 8,
    "category": "Perbankan",
    "question": "Dalam transaksi jual beli dimana harus melalui proses pemesanan karena barangnya belum tersedia dan pembeli dapat membayar barang yang dibeli dikemudian hari, dapat diakomodir menggunakan akad:",
    "options": [
      "Istishna",
      "Ijarah",
      "Musyarakah",
      "Salam"
    ],
    "answer": "Istishna"
  },
  {
    "id": 633,
    "version": 8,
    "category": "Perbankan",
    "question": "Komite yang wajib dibentuk oleh suatu Konglomerasi Keuangan yang beranggotakan Dewan Komisaris dari perwakilan LJK anggota KK, disebut:",
    "options": [
      "Komite Tata Kelola Terintegrasi",
      "Komite Operasional Terintegrasi",
      "Komite Manajemen Risiko Terintegrasi",
      "Komite Konglomerasi Keuangan"
    ],
    "answer": "Komite Tata Kelola Terintegrasi"
  },
  {
    "id": 634,
    "version": 8,
    "category": "Perbankan",
    "question": "Jangka waktu penetapan status pengawasan BDP untuk BPR/BPRS adalah",
    "options": [
      "Paling lama 1 tahun dan dapat diperpanjang",
      "Paling cepat 1 tahun dan tidak dapat diperpanjang",
      "Paling lama 1 tahun dan tidak dapat diperpanjang",
      "Paling cepat 1 tahun dan dapat diperpanjang"
    ],
    "answer": "Paling lama 1 tahun dan tidak dapat diperpanjang"
  },
  {
    "id": 635,
    "version": 8,
    "category": "Perbankan",
    "question": "BPR atau BPR Syariah wajib menyampaikan laporan pelaksanaan perubahan kepemilikan saham yang mengakibatkan perubahan PSP secara daring melalui sistem pelaporan OJK paling lama 10 (sepuluh) hari kerja setelah tanggal surat penerimaan pemberitahuan perubahan data dari instansi yang berwenang, disertai dengan dokumen sebagai berikut, kecuali:",
    "options": [
      "Salinan akta perubahan anggaran dasar",
      "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor",
      "Risalah RUPS",
      "Keputusan atau surat penerimaan pemberitahuan perubahan anggaran dasar dari instansi yang berwenang"
    ],
    "answer": "Permohonan persetujuan pencairan deposito kepada OJK untuk dicatat sebagai modal disetor"
  },
  {
    "id": 636,
    "version": 8,
    "category": "Perbankan",
    "question": "Apa kewajiban berkaitan dengan KK yang diatur dalam Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut:",
    "options": [
      "Kewajiban Pembentukan PIKK",
      "Kewajiban Menjaga Rasio KPPMT Minimal 100%",
      "Kewajiban Penunjukan DPS",
      "Kewajiban Memiliki Perusahaan Efek"
    ],
    "answer": "Kewajiban Pembentukan PIKK"
  },
  {
    "id": 637,
    "version": 8,
    "category": "Perbankan",
    "question": "Tahapan Penilaian Kemampuan dan Kepatutan new entry:",
    "options": [
      "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK",
      "Identifikasi dokumen, penelitian administratif dan hasil PKK",
      "Absensi dokumen, identifikasi dokumen dan hasil PKK",
      "Identifikasi dokumen, penelitian administratif, permintaan rekomendasi dan track record, hasil PKK"
    ],
    "answer": "Absensi dokumen, identifikasi dokumen, penelitian administratif dan hasil PKK"
  },
  {
    "id": 638,
    "version": 8,
    "category": "Perbankan",
    "question": "Pengeluaran yang sudah tidak memiliki manfaat adalah:",
    "options": [
      "Aset",
      "Ekuitas",
      "Beban",
      "Kapitalisasi"
    ],
    "answer": "Beban"
  },
  {
    "id": 639,
    "version": 8,
    "category": "Perbankan",
    "question": "Dokumen Perencanaan Pengawasan secara Konglomerasi, disebut:",
    "options": [
      "Integrated Risk Rating",
      "Integrated Capital Assessment",
      "Integrated Supervisory Plan",
      "Integrated Audit Working Plan"
    ],
    "answer": "Integrated Supervisory Plan"
  },
  {
    "id": 640,
    "version": 8,
    "category": "Perbankan",
    "question": "Hal yang harus dilakukan oleh Bank sebelum mengajukan permohonan PKK kepada OJK, kecuali:",
    "options": [
      "Membuat compliance checklist pemenuhan persyaratan",
      "Membuat self assessment terhadap calon yang diajukan",
      "Meneliti rekam jejak calon yang akan diajukan",
      "Mengangkat calon pengurus dalam RUPS"
    ],
    "answer": "Mengangkat calon pengurus dalam RUPS"
  },
  {
    "id": 641,
    "version": 8,
    "category": "Perbankan",
    "question": "Produk bank syariah yang tidak tersedia di bank konvensional adalah:",
    "options": [
      "Kartu kredit",
      "Tabungan dan Deposito",
      "Gadai (Rahn)",
      "Letter of Credit (LC)"
    ],
    "answer": "Gadai (Rahn)"
  },
  {
    "id": 642,
    "version": 8,
    "category": "Perbankan",
    "question": "Sumber data Bank Performance Report (BPeR), kecuali:",
    "options": [
      "Laporan Posisi keuangan",
      "Laporan Laba Rugi",
      "Data Pokok",
      "Data Konsumen"
    ],
    "answer": "Data Konsumen"
  },
  {
    "id": 643,
    "version": 8,
    "category": "Perbankan",
    "question": "Hal-hal yang diatur dalam POJK Nomor 7/POJK.03/2024 yang sebelumnya tidak diatur dalam POJK Nomor 21/POJK.03/2019 adalah sebagai berikut kecuali:",
    "options": [
      "Penyampaian action plan dan laporan",
      "Kewenangan OJK dalam Penggabungan/Peleburan",
      "Perluasan wilayah jaringan kantor BPR/S hasil konsolidasi",
      "Kewajiban melakukan Penggabungan/Peleburan"
    ],
    "answer": "Perluasan wilayah jaringan kantor BPR/S hasil konsolidasi"
  },
  {
    "id": 644,
    "version": 8,
    "category": "Perbankan",
    "question": "Pernyataan yang tidak benar mengenai sinergi perbankan, yaitu:",
    "options": [
      "Sinergi perbankan dapat dilakukan atas izin OJK",
      "Sinergi perbankan dapat dilakukan di bidang IT, SDM, jaringan kantor, jaringan komunikasi, pelaporan, audit",
      "Sinergi yang melibatkan bank syariah harus mendapatkan opini/persetujuan dari Dewan Pengawas Syariah",
      "Sinergi perbankan hanya dapat dilakukan oleh bank-bank dalam satu grup atau memiliki hubungan kepemilikan"
    ],
    "answer": "Sinergi perbankan dapat dilakukan atas izin OJK"
  },
  {
    "id": 645,
    "version": 8,
    "category": "Perbankan",
    "question": "Dokumen persyaratan permohonan persiapan pelaksanaan pengambilalihan antara lain sebagai berikut, kecuali:",
    "options": [
      "Konsep akta jual beli saham",
      "Surat Pemberitahuan (SPT) Pajak Tahunan calon PSP perorangan",
      "Akta pengambilalihan yang dibuat di hadapan notaris",
      "Rancangan pengambilalihan"
    ],
    "answer": "Akta pengambilalihan yang dibuat di hadapan notaris"
  },
  {
    "id": 646,
    "version": 8,
    "category": "Perbankan",
    "question": "Tujuan utama pembentukan Bank Perantara oleh LPS adalah:",
    "options": [
      "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan",
      "Menggantikan fungsi Bank Indonesia dalam pengawasan",
      "Melikuidasi seluruh aset bank yang gagal secara langsung",
      "Meningkatkan literasi keuangan Masyarakat"
    ],
    "answer": "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan"
  },
  {
    "id": 647,
    "version": 8,
    "category": "Perbankan",
    "question": "Pemahaman yang komprehensif terhadap kondisi Konglomerasi Keuangan dituangkan dalam dokumen berikut:",
    "options": [
      "Know Your Financial Institution (KYFI)",
      "Audit Working Plan (AWP)",
      "Laporan Hasil Pengawasan (LHP)",
      "Know Your Financial Conglomerates (KYFC)"
    ],
    "answer": "Know Your Financial Conglomerates (KYFC)"
  },
  {
    "id": 648,
    "version": 8,
    "category": "Perbankan",
    "question": "Berdasarkan ketentuan di POJK tentang Konglomerasi Keuangan dan Perusahaan Induk Konglomerasi Keuangan, batas minimum total aset LJK Konglomerasi Keuangan yang paling sedikit berjumlah 2 (dua) LJK pada 2 (dua) sektor yang berbeda, yaitu:",
    "options": [
      "100 Triliun",
      "50 Triliun",
      "150 Triliun",
      "75 Triliun"
    ],
    "answer": "100 Triliun"
  },
  {
    "id": 649,
    "version": 8,
    "category": "Perbankan",
    "question": "Komponen Know Your BPR/BPRS (KYBPR/BPRS):",
    "options": [
      "Bisnis Utama dan Infrastruktur Pendukung",
      "Kelembagaan dan Organisasi",
      "Semua benar",
      "Perkembangan Kinerja"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 650,
    "version": 8,
    "category": "Perbankan",
    "question": "Di bawah ini, yang termasuk dalam Regulatory Triangle for Promoting Finance Stability adalah:",
    "options": [
      "Perizinan",
      "Pengawasan",
      "Semua benar",
      "Pengaturan"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 651,
    "version": 8,
    "category": "Perbankan",
    "question": "Manakah perbuatan berikut yang merupakan PKP di bidang pendanaan",
    "options": [
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Pelanggaran Cease and Desist Order (CDO) berupa pemberian kredit pada masa Bank dinyatakan Dalam Pengawasan Khusus.",
      "Pelunasan/pembayaran angsuran kredit tanpa disertai aliran dana.",
      "Penarikan/ Pemindahbukuan deposito/ tabungan/ giro yang dilakukan bukan oleh pemilik/kuasanya."
    ],
    "answer": "Penarikan/ Pemindahbukuan deposito/ tabungan/ giro yang dilakukan bukan oleh pemilik/kuasanya."
  },
  {
    "id": 652,
    "version": 8,
    "category": "Perbankan",
    "question": "Apa yang menjadi dasar hukum utama bagi OJK untuk menyusun peraturan turunan mengenai Rahasia Bank setelah berlakunya UU P2SK?",
    "options": [
      "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK",
      "Undang-Undang Nomor 10 Tahun 1998 tentang Perbankan",
      "POJK Nomor 44 Tahun 2024",
      "Surat Edaran Bank Indonesia Tahun 2007"
    ],
    "answer": "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK"
  },
  {
    "id": 653,
    "version": 8,
    "category": "Perbankan",
    "question": "Yang bukan merupakan komponen penilaian Kecukupan Penerapan Manajemen Risiko (KPMR) yaitu:",
    "options": [
      "Pengendalian Intern yang Menyeluruh",
      "Kecukupan Kebijakan, Prosedur, dan Penetapan Limit",
      "Penilaian Kecukupan Penerapan Tata Kelola",
      "Pengawasan Direksi dan Dewan Komisaris"
    ],
    "answer": "Penilaian Kecukupan Penerapan Tata Kelola"
  },
  {
    "id": 654,
    "version": 8,
    "category": "Perbankan",
    "question": "Yang dimaksud sebagai perusahaan anak dalam Konglomerasi Keuangan adalah yang memenuhi syarat sebagai berikut:",
    "options": [
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang hanya berada di dalam negeri",
      "Perusahaan yang melakukan kegiatan usaha selain sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan sektor lainnya, serta dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri"
    ],
    "answer": "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri"
  },
  {
    "id": 655,
    "version": 8,
    "category": "Perbankan",
    "question": "Produk yang memberikan akses ke dana dengan batas kredit tertentu dan membayar bunga atas saldo yang digunakan adalah",
    "options": [
      "Kartu Kredit",
      "Deposito",
      "Tabungan",
      "Kredit"
    ],
    "answer": "Kartu Kredit"
  },
  {
    "id": 656,
    "version": 8,
    "category": "Perbankan",
    "question": "Di bawah ini yang bukan termasuk dalam komponen penerapan tata kelola yang baik sebagaimana diatur dalam POJK 17 2023 adalah:",
    "options": [
      "Penyediaan dana kepada pihak terkait penyediaan dana besar",
      "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud",
      "Integritas pelaporan dan sistem informasi teknologi",
      "Penerapan manajemen risiko termasuk sistem pengendalian intern"
    ],
    "answer": "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud"
  },
  {
    "id": 657,
    "version": 8,
    "category": "Perbankan",
    "question": "POJK Nomor 11/POJK.03/2022, merupakan ketentuan yang penting dalam transformasi digital sektor perbankan khususnya bank umum. POJK tersebut mengatur mengenai antara lain:",
    "options": [
      "Unit dan fungsi yang bertugas menangani penyelenggaraan layanan digital.",
      "Penilaian tingkat maturitas digital bank.",
      "Tata Kelola TI bank, penerapan manajemen risiko TI bank, serta ketahanan & keamanan siber bank.",
      "Hanya angka 1 dan 2 yang benar."
    ],
    "answer": "Hanya angka 1 dan 2 yang benar."
  },
  {
    "id": 658,
    "version": 8,
    "category": "Perbankan",
    "question": "Bank dinilai memiliki potensi kesulitan yang membahayakan kelangsungan usaha seperti Tingkat kesehatan, likuiditas dan permodalan dengan memperhitungkan risiko jika memenuhi kriteria berikut, kecuali:",
    "options": [
      "Rasio CAR mencapai 12%",
      "Rasio kewajiban penyediaan modal minimum Bank sama dengan atau lebih besar dari 8%",
      "Rasio GWM tidak tercapai",
      "TKS komposit dinilai 4 dalam 2 periode penilaian berturut-turut"
    ],
    "answer": "Rasio CAR mencapai 12%"
  },
  {
    "id": 659,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini merupakan jenis-jenis perizinan kelembagaan dan jaringan kantor, kecuali:",
    "options": [
      "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum",
      "Pemindahan alamat",
      "Pendirian dan Cabut Izin Usaha Bank",
      "Perubahan Nama Bank"
    ],
    "answer": "Penilaian Kemampuan dan Kepatutan calon Pengurus Bank Umum"
  },
  {
    "id": 660,
    "version": 8,
    "category": "Perbankan",
    "question": "Apabila suatu BUS mengajukan produk baru bagi BUS karena belum pernah dilaksanakan tetapi telah masuk dalam kodifikasi produk/aktivitas BUS/UUS sebagaimana SEOJK No.36/SEOJK.03/2015, maka langkah yang tepat dilakukan oleh bank adalah:",
    "options": [
      "Mengajukan persetujuan pelaksanaan produk baru kepada Perizinan Perbankan Syariah OJK",
      "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah OJK",
      "Mengajukan izin pelaksanaan produk/aktivitas baru kepada Pengawas dan Perizinan Perbankan Syariah OJK",
      "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah dan Bank Konvensional OJK karena terdapat hubungan kepemilikan induk dan anak usaha"
    ],
    "answer": "Melaporkan pelaksanaan produk kepada Pengawas Bank Syariah OJK"
  },
  {
    "id": 661,
    "version": 8,
    "category": "Perbankan",
    "question": "Tahapan dalam proses pendirian BPR adalah:",
    "options": [
      "Persetujuan Prinsip dan Izin Kegiatan",
      "Persetujuan Prinsip dan Izin Operasional",
      "Persetujuan Prinsip dan Izin Usaha",
      "Persetujuan Prinsip dan Izin Efektif"
    ],
    "answer": "Persetujuan Prinsip dan Izin Usaha"
  },
  {
    "id": 662,
    "version": 8,
    "category": "Perbankan",
    "question": "Berdasarkan data pengawasan pada Bank Umum dengan modal inti sebesar Rp22 Triliun, diketahui terdapat 1 kejadian fraud yang melibatkan pegawai bank dan terjadi pada bulan Maret 2024 total sebesar Rp200 juta namun setengahnya dapat dipulihkan. Atas informasi tersebut, pengawas tidak merubah peringkat risiko inheren operasional pada RBBR periode Semester I 2024. Dasar penilaian ini menggunakan prinsip:",
    "options": [
      "Materialitas/Signifikansi",
      "Proporsionalitas",
      "Analisis Berorientasi Risiko",
      "Komprehensif dan Terstruktur"
    ],
    "answer": "Materialitas/Signifikansi"
  },
  {
    "id": 663,
    "version": 8,
    "category": "Perbankan",
    "question": "Rasio KPMM berdasarkan profil risiko yang harus dipenuhi bank yaitu:",
    "options": [
      "8% untuk profil risiko peringkat 2",
      "10% s.d. <11% untuk profil risiko peringkat 4",
      "11% s.d. 14% untuk profil risiko peringkat 5",
      "9% s.d. <10% untuk profil risiko peringkat 3"
    ],
    "answer": "11% s.d. 14% untuk profil risiko peringkat 5"
  },
  {
    "id": 664,
    "version": 8,
    "category": "Perbankan",
    "question": "Modal disetor yang dipersyaratkan untuk pendirian BUS yang akan menjadi anak dalam struktur kelompok usaha bank adalah sebesar:",
    "options": [
      "Rp 3.000.000.000.000,00 (tiga triliun rupiah)",
      "Rp 1.000.000.000.000,00 (satu triliun rupiah)",
      "Rp 10.000.000.000.000,00 (sepuluh triliun rupiah)",
      "Rp 500.000.000.000,00 (lima ratus miliar rupiah)"
    ],
    "answer": "Rp 1.000.000.000.000,00 (satu triliun rupiah)"
  },
  {
    "id": 665,
    "version": 8,
    "category": "Perbankan",
    "question": "Self assessment terhadap calon pengurus Bank dilakukan oleh:",
    "options": [
      "Direktur Utama dengan meminta masukan dari Direktur Kepatuhan",
      "Komite Remunerasi dan Nominasi",
      "Direktur Utama",
      "Direktur Kepatuhan"
    ],
    "answer": "Komite Remunerasi dan Nominasi"
  },
  {
    "id": 666,
    "version": 8,
    "category": "Perbankan",
    "question": "Manakah di bawah ini yang merupakan alur proses perizinan kelembagaan dan jaringan kantor secara umum:",
    "options": [
      "Bank menyampaikan pelaporan ke Pengawas/KOJK setelah pelaksanaan; selanjutnya dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan.",
      "Bank menyampaikan informasi ke Pengawas/KOJK sebelum pelaksanaan; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan."
    ],
    "answer": "Bank menyampaikan permohonan ke DIMB/KOJK; selanjutnya dilakukan Pengecekan terhadap kelengkapan dan kesesuaian dengan ketentuan atas dokumen permohonan; apabila lengkap, maka dilakukan analisis sesuai ketentuan yang berlaku (termasuk permintaan rekomendasi & informasi kepada pengawas Bank terkait); dilanjutkan untuk proses Keputusan."
  },
  {
    "id": 667,
    "version": 8,
    "category": "Perbankan",
    "question": "Di bawah ini merupakan dasar Pencabutan izin usaha Bank BHI dan KCBLN, kecuali:",
    "options": [
      "Permintaan kantor pusat dari KCBLN",
      "Izin usaha kantor pusat KCBLN dicabut atau dilikuidasi oleh otoritas negara setempat",
      "Permintaan pemilik atau pemegang saham Bank BHI untuk melakukan pencabutan izin usaha Bank BHI, termasuk bank perantara",
      "Permintaan dari Bank lainnya"
    ],
    "answer": "Permintaan dari Bank lainnya"
  },
  {
    "id": 668,
    "version": 8,
    "category": "Perbankan",
    "question": "Apa yang menjadi ciri khas dari produk simpanan berjangka?",
    "options": [
      "Jangka waktu tidak ditentukan",
      "Likuiditas tinggi",
      "Bunga yang dapat dinegosiasikan",
      "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
    ],
    "answer": "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
  },
  {
    "id": 669,
    "version": 8,
    "category": "Perbankan",
    "question": "Pernyataan yang paling tepat mengenai Forum Panel RBS, adalah",
    "options": [
      "Harus dilaksanakan secara fisik antara Pengawas dan Panelis",
      "Dilakukan terhadap seluruh Bank",
      "Dilaksanakan secara tahunan sesuai periode penyusunan Supervisory Plan",
      "Sebagai bagian dari quality assurance pengawasan bank yang dilakukan oleh Pengawas"
    ],
    "answer": "Sebagai bagian dari quality assurance pengawasan bank yang dilakukan oleh Pengawas"
  },
  {
    "id": 670,
    "version": 8,
    "category": "Perbankan",
    "question": "Sebutkan pihak yang dapat memperoleh informasi perkreditan dari LPIP",
    "options": [
      "Non Lembaga Keuangan yang menjadi sumber data LPIP yang bersangkutan",
      "Calon sumber data dari LPIP",
      "Lembaga Keuangan non anggota dari LPIP",
      "Debitur atau Nasabah Peer-to-Peer Lending"
    ],
    "answer": "Non Lembaga Keuangan yang menjadi sumber data LPIP yang bersangkutan"
  },
  {
    "id": 671,
    "version": 8,
    "category": "Perbankan",
    "question": "Berdasarkan siklus Pengawasan Terintegrasi, langkah yang dilakukan selanjutnya sebelum Integrated Risk Rating KK Tahap 1 yaitu:",
    "options": [
      "Pemahaman terhadap Konglomerasi Keuangan",
      "Tindakan Pengawasan dan Pemantauan",
      "Perencanaan Pengawasan",
      "Koordinasi Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Pemahaman terhadap Konglomerasi Keuangan"
  },
  {
    "id": 672,
    "version": 8,
    "category": "Perbankan",
    "question": "Dalam hal bank yang ditetapkan sebagai bank dalam resolusi merupakan bank selain bank sistemik dan Lembaga Penjamin Simpanan (LPS) memutuskan untuk tidak melakukan penyelamatan atau tidak melanjutkan proses penyelamatan terhadap bank tersebut, maka langkah yang paling mungkin diambil adalah:",
    "options": [
      "Bank dialihkan ke Bank Indonesia",
      "Bank diberikan tambahan modal oleh OJK",
      "Bank akan dilakukan likuidasi oleh LPS",
      "Bank tetap beroperasi normal tanpa intervensi"
    ],
    "answer": "Bank akan dilakukan likuidasi oleh LPS"
  },
  {
    "id": 673,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini merupakan pihak utama pada LPIP, yaitu:",
    "options": [
      "Anggota Direksi, Anggota Dewan Komisaris dan Anggota Dewan Pengawas Syariah",
      "Manajer Investasi dan Anggota Dewan Komisaris",
      "Pelaksana Tugas Pengurus, Auditor Internal dan Anggota Direksi",
      "Anggota Dewan Pengawas Syariah dan Anggota Direksi",
      "Anggota Direksi dan Anggota Dewan Komisaris"
    ],
    "answer": "Anggota Direksi dan Anggota Dewan Komisaris"
  },
  {
    "id": 674,
    "version": 8,
    "category": "Perbankan",
    "question": "Definisi dari Lembaga Pengelola Informasi Perkreditan (LPIP) menurut POJK Nomor 5/POJK.03/2022 tentang Lembaga Pengelola Informasi Perkreditan, yaitu:",
    "options": [
      "Lembaga pemeringkat yang bertugas untuk menilai dan memberikan peringkat terhadap risiko kredit dari suatu entitas, seperti perusahaan, pemerintah, atau instrumen keuangan",
      "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan",
      "Lembaga pemeringkat yang menghimpun dan menyalurkan data rahasia kepada masyarakat",
      "Lembaga pemeringkat yang menghimpun dan menyalurkan dana kepada masyarakat",
      "Lembaga pemeringkat yang berutas untuk menjamin simpanan nasabah di bank dan menjaga stabilitas sistem keuangan nasional"
    ],
    "answer": "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan"
  },
  {
    "id": 675,
    "version": 8,
    "category": "Perbankan",
    "question": "Sesuai dengan SEDK 6/SEDK.02/2024 Tentang Perubahan Atas SEDK Nomor 19/SEDK.02/2023 Tentang Organisasi Bidang Strategis bahwa Kantor OJK Dibagi menjadi Kantor OJK Koordinator dan Kantor OJK Non-Koordinator. Dibawah ini merupakan rincian Kantor OJK Koordinator, kecuali:",
    "options": [
      "Kantor OJK Provinsi Sulawesi Selatan dan Sulawesi Barat",
      "Kantor OJK Provinsi Sumatera Selatan",
      "Kantor OJK Provinsi Jawa Barat",
      "Kantor OJK Provinsi Kalimantan Selatan"
    ],
    "answer": "Kantor OJK Provinsi Kalimantan Selatan"
  },
  {
    "id": 676,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini termasuk prinsip dalam penyusunan Integrated Supervisory Plan, kecuali:",
    "options": [
      "Specific",
      "Achievable",
      "Relevant",
      "Actual"
    ],
    "answer": "Actual"
  },
  {
    "id": 677,
    "version": 8,
    "category": "Perbankan",
    "question": "Penilaian Kemampuan dan Kepatutan diberlakukan bagi pihak yang mengajukan diri untuk menduduki posisi sebagai berikut di bank syariah, kecuali:",
    "options": [
      "Pengawas Syariah",
      "Direksi",
      "Komisaris",
      "Pemegang Saham Pengendali"
    ],
    "answer": "Pengawas Syariah"
  },
  {
    "id": 678,
    "version": 8,
    "category": "Perbankan",
    "question": "Permohonan persetujuan prinsip pendirian BPR diajukan kepada OJK dilampiri dengan dokumen antara lain:",
    "options": [
      "Data kepemilikan, bukti pembayaran biaya perizinan, akta pendirian",
      "Data kepemilikan, bukti setoran modal, akta pendirian",
      "Data kepemilikan, daftar calon anggota Direksi dan anggota Dewan Komisaris, bukti kesiapan operasional",
      "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan"
    ],
    "answer": "Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan"
  },
  {
    "id": 679,
    "version": 8,
    "category": "Perbankan",
    "question": "Bank A merupakan emiten dan perusahaan publik. Sehubungan dengan hal tersebut, bank wajib menyampaian laporan publikasi keuangan dan informasi kinerja keuangan tahunan melalui:",
    "options": [
      "APOLO dan SPE",
      "APOLO",
      "SPE",
      "SIPENA"
    ],
    "answer": "SPE"
  },
  {
    "id": 680,
    "version": 8,
    "category": "Perbankan",
    "question": "Pelapor dilarang menggunakan Informasi Debitur dari SLIK untuk keperluan berikut, kecuali untuk:",
    "options": [
      "Pengelolaan SDM pelapor",
      "Menggunakan data debitur untuk kegiatan politik atau kampanye",
      "Menekan pihak ketiga dalam rangka pengajuan kerja sama",
      "Mengidentifikasi kualitas debitur untuk pemenuhan kebutuhan satu pihak"
    ],
    "answer": "Pengelolaan SDM pelapor"
  },
  {
    "id": 681,
    "version": 8,
    "category": "Perbankan",
    "question": "Transaksi sewa menyewa yang diikuti perpindahan kepemilikan obyek sewa pada akhir periode merupakan definisi dari transaksi:",
    "options": [
      "Musyarakah mutanaqishah",
      "Ijarah muntahiyah bit tamlik",
      "Istishna",
      "Ijarah"
    ],
    "answer": "Ijarah muntahiyah bit tamlik"
  },
  {
    "id": 682,
    "version": 8,
    "category": "Perbankan",
    "question": "Informasi perkreditan wajib memiliki nilai tambah dengan tambahan data selain data kredit atau pembiayaan yang diperoleh dari SLIK. Informasi dapat berasal dari sumber sebagai berikut, kecuali:",
    "options": [
      "Informasi dan/atau data dari kementerian yang bersifat rahasia",
      "Informasi dan/atau data dari entitas yang menyediakan layanan pinjam meminjam uang berbasis teknologi informasi (fintech) serta lembaga lainnya",
      "Informasi dan/atau data pembayaran telepon, tagihan listrik, serta data pembayaran tagihan air",
      "Informasi dan/atau data healthcare dan marketplace"
    ],
    "answer": "Informasi dan/atau data dari kementerian yang bersifat rahasia"
  },
  {
    "id": 683,
    "version": 8,
    "category": "Perbankan",
    "question": "Mekanisme Koordinasi dalam rangka pemantauan manajemen krisis memerlukan informasi baik dari sumber informasi internal maupun eksternal, kecuali:",
    "options": [
      "Eksternal yaitu berdasarkan Sumber Informasi Eksternal Sektor Perbankan",
      "Internal yaitu berupa hasil pengawasan Satker Pengawas Sektor Perbankan",
      "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian",
      "Internal yaitu berupa hasil analisis koordinasi Pemantauan Sektor Perbankan"
    ],
    "answer": "Eksternal yaitu berdasarkan fenomena-fenomena yang terjadi di sektor perekonomian"
  },
  {
    "id": 684,
    "version": 8,
    "category": "Perbankan",
    "question": "Modal disetor pendirian Bank Umum Syariah baru yaitu sebesar:",
    "options": [
      "Rp20 triliun",
      "Rp1 triliun",
      "Rp10 triliun",
      "Rp5 triliun"
    ],
    "answer": "Rp10 triliun"
  },
  {
    "id": 685,
    "version": 8,
    "category": "Perbankan",
    "question": "Pengambilalihan BPR yang mengakibatkan beralihnya pengendalian BPR dalam hal memenuhi kriteria:",
    "options": [
      "Perubahan kepemilikan disebabkan oleh hibah",
      "Tidak menjadi pemegang saham dengan kepemilikan saham terbesar pada BPR.",
      "Perubahan kepemilikan disebabkan oleh waris.",
      "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR."
    ],
    "answer": "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR."
  },
  {
    "id": 686,
    "version": 8,
    "category": "Perbankan",
    "question": "Perbuatan berikut yang bukan merupakan PKP yang memiliki indikasi tipibank karena menyalahgunakan Aset adalah",
    "options": [
      "Penempatan/Investasi/Penyertaan Dana Bank tidak sesuai dengan ketentuan yang berlaku.",
      "Pelanggaran Cease and Desist Order (CDO).",
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA)."
    ],
    "answer": "Pelanggaran Cease and Desist Order (CDO)."
  },
  {
    "id": 687,
    "version": 8,
    "category": "Perbankan",
    "question": "Undang-Undang Perbankan Syariah yang kini telah diberlakukan adalah:",
    "options": [
      "UU RI No. 21 tahun 2011",
      "UU RI No. 7 tahun 1992",
      "UU RI No. 10 tahun 1998",
      "UU RI No. 21 tahun 2008"
    ],
    "answer": "UU RI No. 21 tahun 2008"
  },
  {
    "id": 688,
    "version": 8,
    "category": "Perbankan",
    "question": "Ketentuan yang mengatur tentang Penambahan Modal Disetor dan Perubahan Kepemilikan Saham Yang Tidak Mengakibatkan Perubahan PSP BPR atau BPR Syariah adalah",
    "options": [
      "Pasal 41 POJK Nomor 7 Tahun 2024",
      "Pasal 39 POJK Nomor 7 Tahun 2024",
      "Pasal 42 POJK Nomor 7 Tahun 2024",
      "Pasal 37 POJK Nomor 7 Tahun 2024"
    ],
    "answer": "Pasal 41 POJK Nomor 7 Tahun 2024"
  },
  {
    "id": 689,
    "version": 8,
    "category": "Perbankan",
    "question": "Dokumen yang disampaikan pada saat penyampaian permohonan izin penggabungan usaha (tahap 2) antara lain sebagai berikut, kecuali:",
    "options": [
      "Rancangan penggabungan, konsep akta penggabungan dan Berita Acara RUPS",
      "Berita Acara RUPS, bukti pengumuman dan akta penggabungan",
      "Akta perubahan anggaran dasar, rancangan penggabungan dan laporan kinerja keuangan terkini",
      "Berita Acara RUPS, konsep akta penggabungan dan bukti pengumuman"
    ],
    "answer": "Berita Acara RUPS, bukti pengumuman dan akta penggabungan"
  },
  {
    "id": 690,
    "version": 8,
    "category": "Perbankan",
    "question": "Prinsip-prinsip umum penetapan peringkat risiko BPR BPRS antara lain:",
    "options": [
      "Berorientasi Risiko, Terintegrasi, Signifikansi dan Materialitas, Komprehensif dan Terstruktur",
      "Berorientasi Risiko, Proporsionalitas, Signifikansi dan Materialitas, Komprehensif dan Terstruktur",
      "Transparansi, Proporsionalitas, Signifikansi dan Materialitas, Komprehensif dan Terstruktur",
      "Akuntabilitas Proporsionalitas, Signifikansi dan Materialitas, Transparansi"
    ],
    "answer": "Berorientasi Risiko, Proporsionalitas, Signifikansi dan Materialitas, Komprehensif dan Terstruktur"
  },
  {
    "id": 691,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini pernyataan yang tidak tepat terkait Penerapan Manajemen Risiko bagi Bank Umum:",
    "options": [
      "Penerapan disesuaikan dengan kemampuan Bank",
      "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah",
      "Diatur melalui POJK 18/POJK.03/2016",
      "meliputi proses mengidentifikasi, mengukur, memantau, dan mengendalikan"
    ],
    "answer": "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah"
  },
  {
    "id": 692,
    "version": 8,
    "category": "Perbankan",
    "question": "Apakah implikasi makro dari aktifitas keuangan dan perbankan syariah berbasis sektor riil (bagi hasil, jual beli, sewa, titipan, jasa) dan sosial (ZisWaf), kecuali:",
    "options": [
      "Pengentasan kemiskinan dan pemerataan ekonomi",
      "Ketimpangan sosial",
      "Penciptaan lapangan kerja",
      "Pertumbuhan ekonomi berkualitas"
    ],
    "answer": "Ketimpangan sosial"
  },
  {
    "id": 693,
    "version": 8,
    "category": "Perbankan",
    "question": "BPR atau BPR Syariah harus menyelenggarakan RUPS pengangkatan anggota Direksi dan anggota Dewan Komisaris paling lama",
    "options": [
      "90 (sembilan puluh) hari kerja setelah tanggal persetujuan OJK",
      "90 (Sembilan puluh) hari sejak tanggal persetujuan OJK",
      "60 (enam puluh) hari setelah tanggal persetujuan OJK",
      "60 (enam puluh) hari kerja setelah tanggal persetujuan OJK"
    ],
    "answer": "60 (enam puluh) hari kerja setelah tanggal persetujuan OJK"
  },
  {
    "id": 694,
    "version": 8,
    "category": "Perbankan",
    "question": "Hal-hal apa saja yang perlu tercakup dalam rencana bisnis tahunan LPIP?",
    "options": [
      "Proyeksi laporan keuangan",
      "Laporan perubahan rencana bisnis",
      "Struktur organisasi LPIP",
      "Rencana audit tenaga kerja asing"
    ],
    "answer": "Proyeksi laporan keuangan"
  },
  {
    "id": 695,
    "version": 8,
    "category": "Perbankan",
    "question": "Perbuatan berikut yang bukan merupakan PKP di bidang perkreditan/ pembiayaan adalah",
    "options": [
      "Pelanggaran BMPK.",
      "Pelunasan/pembayaran angsuran kredit tanpa disertai aliran dana.",
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Mark up taksasi agunan."
    ],
    "answer": "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya."
  },
  {
    "id": 696,
    "version": 8,
    "category": "Perbankan",
    "question": "Berikut ini yang bukan merupakan karakteristik akad mudharabah adalah:",
    "options": [
      "Modal usaha berasal dari pemilik dana",
      "Keuntungan dibagi sesuai nisbah",
      "Kerugian ditanggung pemilik dana",
      "Modal usaha berasal dari pemilik modal dan pengelola usaha"
    ],
    "answer": "Modal usaha berasal dari pemilik modal dan pengelola usaha"
  },
  {
    "id": 697,
    "version": 8,
    "category": "Perbankan",
    "question": "Kerangka tata kelola syariah bagi BUS dan UUS terdiri dari:",
    "options": [
      "DPS, kepatuhan dan manajemen risiko syariah, audit intern syariah, audit ekstern syariah",
      "DPS, komite syariah, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah",
      "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah",
      "DPS, kepatuhan syariah, komite syariah, audit intern syariah, audit ekstern syariah"
    ],
    "answer": "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah"
  },
  {
    "id": 698,
    "version": 8,
    "category": "Perbankan",
    "question": "BPR XYZ dengan modal disetor Rp15 miliar dan berkantor pusat di Kabupaten Ciamis bermaksud untuk memindahkan kantor pusatnya ke Kota Bandung. Berapa jumlah modal disetor yang wajib dipenuhi sesuai ketentuan?",
    "options": [
      "Rp50 miliar.",
      "Rp25 miliar.",
      "Tidak diwajibkan meningkatkan modal disetor.",
      "Rp100 miliar."
    ],
    "answer": "Tidak diwajibkan meningkatkan modal disetor."
  },
  {
    "id": 699,
    "version": 8,
    "category": "Perbankan",
    "question": "Dalam rangka koordinasi OJK dengan LPS, dilakukan koordinasi setiap",
    "options": [
      "Triwulanan",
      "Bulanan atau triwulanan",
      "Bulanan",
      "Bulanan dan triwulanan"
    ],
    "answer": "Bulanan dan triwulanan"
  },
  //version 8
  {
    "id": 700,
    "version": 8,
    "category": "Perbankan",
    "question": "Dibawah ini jenis kegiatan yang dilarang dalam sinergi perbankan yaitu:",
    "options": [
      "Penggunaan SDM Bank Umum Konvensional sebagai tambahan anggota tim audit Bank Umum Syariah",
      "Penggunaan infrastruktur jaringan kantor Bank Umum Konvensional bersama dengan Bank Umum Syariah",
      "Penggunaan modal bank umum",
      "Layanan syariah bank umum"
    ],
    "answer": "Penggunaan modal bank umum"
  },

  //paket 9
  {
    "id": 701,
    "version": 9,
    "category": "Perbankan",
    "question": "UUS wajib melakukan pemisahan (spin off) dari induknya, apabila:",
    "options": [
      "Telah berjalan lebih dari 15 tahun",
      "Tidak mengalami pertumbuhan signifikan",
      "Share asset UUS lebih dari 50% dan/atau total aset lebih dari Rp50 triliun",
      "Total aset lebih dari Rp75 triliun"
    ],
    "answer": "Share asset UUS lebih dari 50% dan/atau total aset lebih dari Rp50 triliun"
  },
  {
    "id": 702,
    "version": 9,
    "category": "Perbankan",
    "question": "Hal yang perlu diperhatikan dalam penyampaian LHP kepada lembaga lain, sesuai dengan UU P2SK:",
    "options": [
      "Data dan informasi yang disampaikan mengacu pada hasil pemeriksaan terakhir",
      "Semua benar",
      "Terdapat permintaan dari lembaga lain atau kewajiban untuk menyampaikannya sesuai amanat peraturan perundang-undangan",
      "Cakupan Data dan informasi yang disampaikan dapat disesuaikan dengan kebutuhan dan tujuan penyampaian LHP dimaksud."
    ],
    "answer": "Semua benar"
  },
  {
    "id": 703,
    "version": 9,
    "category": "Perbankan",
    "question": "Penyelenggaraan jaringan kantor di bawah ini yang menggunakan mekanisme perizinan, yaitu:",
    "options": [
      "Pemindahan alamat KC",
      "Penutupan KCP",
      "Perubahan status KC menjadi KCP",
      "Perubahan status KCP menjadi KC"
    ],
    "answer": "Perubahan status KCP menjadi KC"
  },
  {
    "id": 704,
    "version": 9,
    "category": "Perbankan",
    "question": "Analisis yang dapat digunakan untuk mengetahui pertumbuhan pergerakan ekonomi pada suatu wilayah dan mengindikasikan produktivitas dan daya saing perekonomian suatu daerah dari lapangan usaha/sektor/subsektor, merupakan manfaat dari:",
    "options": [
      "Analisis LQ/DLQ",
      "Analisis NPL",
      "Analisis forward & backward linkage",
      "Analisis shift share"
    ],
    "answer": "Analisis shift share"
  },
  {
    "id": 705,
    "version": 9,
    "category": "Perbankan",
    "question": "Berapakah besaran capital conservation buffer?",
    "options": [
      "0-2,5% dari ATMR",
      "2,5% dari ATMR",
      "Diserahkan kepada masing-masing bank",
      "12,5% dari ATMR"
    ],
    "answer": "2,5% dari ATMR"
  },
  {
    "id": 706,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa kewajiban berkaitan dengan KK yang diatur dalam Undang-Undang Pengembangan dan Penguatan Sektor Keuangan (UU P2SK) sebagai berikut:",
    "options": [
      "Kewajiban Menjaga Rasio KPPMT Minimal 100%",
      "Kewajiban Penunjukan DPS",
      "Kewajiban Pembentukan PIKK",
      "Kewajiban Memiliki Perusahaan Efek"
    ],
    "answer": "Kewajiban Pembentukan PIKK"
  },
  {
    "id": 707,
    "version": 9,
    "category": "Perbankan",
    "question": "Di bawah ini merupakan prinsip perbankan syariah berdasarkan Undang-Undang Nomor 21 Tahun 2008, kecuali:",
    "options": [
      "Prinsip sosial",
      "Demokrasi ekonomi",
      "Prinsip Syariah",
      "Prinsip kehati-hatian"
    ],
    "answer": "Prinsip sosial"
  },
  {
    "id": 708,
    "version": 9,
    "category": "Perbankan",
    "question": "Cakupan laporan publikasi eksposur risiko dan permodalan yaitu:",
    "options": [
      "Informasi permodalan, informasi risiko, tata kelola, dan laporan keuangan",
      "Informasi permodalan, informasi risiko, tata kelola, dan suku bunga dasar kredit",
      "Informasi permodalan, informasi risiko, dan tata kelola",
      "Informasi permodalan, informasi risiko, dan susunan pengurus"
    ],
    "answer": "Informasi permodalan, informasi risiko, dan tata kelola"
  },
  {
    "id": 709,
    "version": 9,
    "category": "Perbankan",
    "question": "Tujuan analisis peer group pada BPeR:",
    "options": [
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan Bank Umum",
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer-groupnya",
      "Untuk menggabungkan BPR/BPRS dalam kelompok yang seragam",
      "Untuk menganalisis rasio BPR/BPRS secara individual"
    ],
    "answer": "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer-groupnya"
  },
  {
    "id": 710,
    "version": 9,
    "category": "Perbankan",
    "question": "Aspek penilaian uji kemampuan dan kepatutan new entry calon pengurus bank:",
    "options": [
      "Integritas, komitmen, reputasi keuangan",
      "Integritas dan komitmen",
      "Integritas, reputasi keuangan dan kelayakan keuangan",
      "Integritas, reputasi keuangan dan kompetensi"
    ],
    "answer": "Integritas, reputasi keuangan dan kompetensi"
  },
  {
    "id": 711,
    "version": 9,
    "category": "Perbankan",
    "question": "Pihak terkait dalam perhitungan batas maksimum pemberian kredit (BMPK) adalah",
    "options": [
      "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)",
      "Semua benar",
      "Perorangan atau perusahaan yang tidak mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)",
      "Badan Usaha Milik Negara"
    ],
    "answer": "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)"
  },
  {
    "id": 712,
    "version": 9,
    "category": "Perbankan",
    "question": "Analisis yang digunakan untuk menentukan basis ekonomi dengan menggunakan data konsentrasi PDRB, yaitu:",
    "options": [
      "Analisis NPL",
      "Analisis LQ/DLQ",
      "Analisis shift share",
      "Analisis forward & backward linkage"
    ],
    "answer": "Analisis LQ/DLQ"
  },
  {
    "id": 713,
    "version": 9,
    "category": "Perbankan",
    "question": "Di bawah ini yang bukan termasuk dalam komponen penilaian KPMR pada Risiko Likuiditas adalah:",
    "options": [
      "Komposisi dari aset, liabilitas, dan transaksi rekening administratif",
      "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit",
      "Penetapan pihak yang independen untuk melakukan pengujian dan validasi model pengukuran risiko dan pricing model secara berkala",
      "Teknologi informasi dan infrastruktur pendukung"
    ],
    "answer": "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit"
  },
  {
    "id": 714,
    "version": 9,
    "category": "Perbankan",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Umum Syariah dan Unit Usaha Syariah bersumber dari:",
    "options": [
      "PSAK",
      "PSAK Syariah",
      "SAK ETAP",
      "PSAK dan PSAK Syariah"
    ],
    "answer": "PSAK dan PSAK Syariah"
  },
  {
    "id": 715,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa saja bentuk penawaran umum efek yang dapat dilakukan BPR/S melalui pasar modal?",
    "options": [
      "Promissory Notes dan Sukuk",
      "Obligasi dan Surat Berharga Komersial",
      "Efek bersifat ekuitas (saham) dan/atau efek bersifat utang (obligasi/sukuk)",
      "Unit penyertaan reksa dana dan obligasi"
    ],
    "answer": "Efek bersifat ekuitas (saham) dan/atau efek bersifat utang (obligasi/sukuk)"
  },
  {
    "id": 716,
    "version": 9,
    "category": "Perbankan",
    "question": "Ketentuan mengenai TKA di sektor perbankan merupakan hasil konversi dari regulasi sebelumnya yang diterbitkan oleh:",
    "options": [
      "Bank Indonesia",
      "Kementerian Luar Negeri",
      "Kementerian Ketenagakerjaan",
      "Lembaga Penjamin Simpanan"
    ],
    "answer": "Bank Indonesia"
  },
  {
    "id": 717,
    "version": 9,
    "category": "Perbankan",
    "question": "Produk simpanan dengan setoran rutin dalam jangka waktu tertentu yang tidak dapat dicairkan sebelum jangka waktu tertentu disebut?",
    "options": [
      "Tabungan",
      "Deposito Mudharabah",
      "Deposito",
      "Tabungan Berjangka"
    ],
    "answer": "Tabungan Berjangka"
  },
  {
    "id": 718,
    "version": 9,
    "category": "Perbankan",
    "question": "Berapa persentase KPMM minimum yang wajib dipenuhi oleh BPR?",
    "options": [
      "12% dari ATMR",
      "1,25% dari ATMR",
      "< 8% dari ATMR",
      "8% dari ATMR"
    ],
    "answer": "8% dari ATMR"
  },
  {
    "id": 719,
    "version": 9,
    "category": "Perbankan",
    "question": "Manakah yang tepat mengenai DPS sesuai UU Perbankan Syariah:",
    "options": [
      "DPS diangkat oleh RUPS atas rekomendasi MUI",
      "DPS tidak harus dibentuk di Bank Umum Konvensional yang memiliki UUS",
      "Ketentuan pembentukan DPS diatur dalam Peraturan MUI",
      "DPS bertugas memberikan nasihat dan saran kepada Dewan Komisaris serta mengawasi kegiatan Bank agar sesuai dengan Prinsip Syariah"
    ],
    "answer": "DPS diangkat oleh RUPS atas rekomendasi MUI"
  },
  {
    "id": 720,
    "version": 9,
    "category": "Perbankan",
    "question": "Dokumen yang bukan merupakan bagian output dari proses pemeriksaan berdasarkan risiko adalah",
    "options": [
      "Perencanaan Pengawasan",
      "Risalah Exit Meeting",
      "Laporan Hasil Pemeriksaan",
      "Audit Working Plan"
    ],
    "answer": "Perencanaan Pengawasan"
  },
  {
    "id": 721,
    "version": 9,
    "category": "Perbankan",
    "question": "Aspek layak investasi adalah:",
    "options": [
      "Program dapat diimplementasikan dan berlangsung secara kontinu untuk memberikan manfaat bagi pemerintah maupun masyarakat daerah setempat",
      "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana",
      "Semua jawaban salah",
      "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi"
    ],
    "answer": "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana"
  },
  {
    "id": 722,
    "version": 9,
    "category": "Perbankan",
    "question": "Sistem Pelaporan yang digunakan bank untuk menyampaikan laporan kepada OJK yaitu:",
    "options": [
      "SIGAP",
      "SIPENA",
      "SIPINA",
      "APOLO"
    ],
    "answer": "APOLO"
  },
  {
    "id": 723,
    "version": 9,
    "category": "Perbankan",
    "question": "Ketentuan yang mengatur tentang Penambahan Modal Disetor dan Perubahan Kepemilikan Saham Yang Tidak Mengakibatkan Perubahan PSP BPR atau BPR Syariah adalah",
    "options": [
      "Pasal 37 POJK Nomor 7 Tahun 2024",
      "Pasal 42 POJK Nomor 7 Tahun 2024",
      "Pasal 41 POJK Nomor 7 Tahun 2024",
      "Pasal 39 POJK Nomor 7 Tahun 2024"
    ],
    "answer": "Pasal 41 POJK Nomor 7 Tahun 2024"
  },
  {
    "id": 724,
    "version": 9,
    "category": "Perbankan",
    "question": "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi, merupakan definisi dari aspek:",
    "options": [
      "Aspek perencanaan",
      "Aspek manajemen",
      "Aspek komprehensif",
      "Aspek keberlanjutan"
    ],
    "answer": "Aspek komprehensif"
  },
  {
    "id": 725,
    "version": 9,
    "category": "Perbankan",
    "question": "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS, terdapat status pengawasan BDP yang merupakan kepanjangan dari",
    "options": [
      "Bank Dalam Pengawasan",
      "Bank Dalam Penyehatan",
      "Bank dalam Penyelesaian",
      "Bank Dalam Perbaikan"
    ],
    "answer": "Bank Dalam Penyehatan"
  },
  {
    "id": 726,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa saja tahapan perizinan pendirian BPR?",
    "options": [
      "Surat Keputusan dan Akta Notaris",
      "Izin Bl dan izin OJK",
      "Izin Pemda dan Izin BI",
      "Persetujuan Prinsip dan Izin Usaha"
    ],
    "answer": "Persetujuan Prinsip dan Izin Usaha"
  },
  {
    "id": 727,
    "version": 9,
    "category": "Perbankan",
    "question": "Yang termasuk dalam tugas pokok dan fungsi KSP pada departemen DRPD adalah",
    "options": [
      "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian",
      "Koordinasi dan Konsolidasi Bank Umum Daerah, Koordinasi dan Asistensi Pengawasan Bank Umum Daerah, Analisis dan Kajian Riksus Tipibank dan Bank Umum Daerah, Peningkatan Pemahaman Tipibank, Penyediaan Informasi Perbankan Daerah",
      "Konsolidasi BPR/S dan Grup, Koordinasi dan Asistensi Pengawasan BPR/S, Koordinasi Dalam Rangka Penanganan BPR/S Bermasalah",
      "Pemeriksaan Khusus, Pelimpahan dan Pelaporan Dugaan Tipibank, Pemberian Keterangan Ahli"
    ],
    "answer": "Dukungan Pemeriksaan Spesialis, Dukungan Peningkatan Kualitas Pengawasan melalui Forum Panel, Task Force, Penyusunan Kajian"
  },
  {
    "id": 728,
    "version": 9,
    "category": "Perbankan",
    "question": "Melakukan koordinasi pengawasan di sektor perusahaan pembiayaan, perusahaan pembiayaan infrastruktur, usaha pembiayaan berbasis teknologi, perusahaan modal ventura, lembaga keuangan mikro, perusahaan pergadaian dan lembaga jasa keuangan lainnya (selanjutnya disebut PVML) yang berkantor pusat di daerah, merupakan salah satu fungsi satuan kerja koordinator (hub bidang), yaitu:",
    "options": [
      "DPLJ",
      "DPLK",
      "DPVR",
      "DPDK"
    ],
    "answer": "DPLJ"
  },
  {
    "id": 729,
    "version": 9,
    "category": "Perbankan",
    "question": "Kewajiban modal disetor pendirian BPRS baru di provinsi Sulawesi Utara, paling sedikit sebesar:",
    "options": [
      "75 miliar",
      "50 miliar",
      "15 miliar",
      "35 miliar"
    ],
    "answer": "15 miliar"
  },
  {
    "id": 730,
    "version": 9,
    "category": "Perbankan",
    "question": "Di bawah ini, manakah yang termasuk dalam pengecualian pembukaan Rahasia Bank tanpa melalui OJK?",
    "options": [
      "Permintaan dari instansi pemerintah pusat berdasarkan UU",
      "Permintaan dari otoritas luar negeri berdasarkan perjanjian internasional",
      "Permintaan dari kurator dalam proses kepailitan",
      "Permintaan untuk kepentingan perkara pidana"
    ],
    "answer": "Permintaan dari kurator dalam proses kepailitan"
  },
  {
    "id": 731,
    "version": 9,
    "category": "Perbankan",
    "question": "Rasio KPMM berdasarkan profil risiko yang harus dipenuhi bank yaitu:",
    "options": [
      "8% untuk profil risiko peringkat 2",
      "11% s.d. 14% untuk profil risiko peringkat 5",
      "10% s.d. <11% untuk profil risiko peringkat 4",
      "9% s.d. <10% untuk profil risiko peringkat 3"
    ],
    "answer": "11% s.d. 14% untuk profil risiko peringkat 5"
  },
  {
    "id": 732,
    "version": 9,
    "category": "Perbankan",
    "question": "Bobot risiko untuk aset produktif dengan sumber dana Profit Sharing Investment Account (PSIA) yaitu:",
    "options": [
      "1%",
      "400%",
      "300%",
      "100%"
    ],
    "answer": "1%"
  },
  {
    "id": 733,
    "version": 9,
    "category": "Perbankan",
    "question": "Berapa batas waktu konsolidasi BPR non-pemda yang diatur di dalam POJK 7 Tahun 2024?",
    "options": [
      "6 bulan",
      "1 tahun",
      "2 tahun",
      "3 tahun"
    ],
    "answer": "3 tahun"
  },
  {
    "id": 734,
    "version": 9,
    "category": "Perbankan",
    "question": "Pernyataan berikut ini menjelaskan sistem pengawasan Bank Syariah yang membuatnya berbeda dengan Bank Konvensional, kecuali:",
    "options": [
      "Pengawasan hanya pada aspek manajemen melalui Dewan Komisaris",
      "Pengawasan bank syariah meliputi aspek manajemen melalui Dewan Komisaris dan aspek syariah melalui DPS",
      "Adanya DPS memastikan operasional bank tidak menyimpang dari syariah",
      "DPS juga memastikan moralitas pengelola bank dan nasabah sesuai dengan akhlakul karimah"
    ],
    "answer": "Pengawasan hanya pada aspek manajemen melalui Dewan Komisaris"
  },
  {
    "id": 735,
    "version": 9,
    "category": "Perbankan",
    "question": "Berapa persentase BMPK untuk kredit kepada 1 kelompok peminjam BPR?",
    "options": [
      "30% dari modal BPR",
      "20% dari modal BPR",
      "25% dari modal BPR",
      "10% dari modal BPR"
    ],
    "answer": "30% dari modal BPR"
  },
  {
    "id": 736,
    "version": 9,
    "category": "Perbankan",
    "question": "BPR dapat menyelenggarakan Produk lanjutan baru melalui mekanisme instant-approval untuk Produk berupa:",
    "options": [
      "Penyelenggaraan kegiatan berbasis teknologi informasi.",
      "Akses ke sumber dana untuk pembayaran.",
      "Pengembangan dari kegiatan berbasis teknologi informasi.",
      "Produk yang berkaitan dengan LJK nonbank yang memerlukan izin dan/atau persetujuan dari OJK."
    ],
    "answer": "Pengembangan dari kegiatan berbasis teknologi informasi."
  },
  {
    "id": 737,
    "version": 9,
    "category": "Perbankan",
    "question": "Hub bidang merupakan satuan kerja Otoritas Jasa Keuangan di kantor pusat yang melaksanakan fungsi untuk mengoordinasikan tugas bidang pengawasan yang dilaksanakan oleh Kantor OJK Daerah. Satuan kerja apakah yang menjalankan fungsi sebagai Hub di Bidang Perbankan:",
    "options": [
      "Departemen Pemeriksaan Khusus dan Perbankan Daerah",
      "Departemen Pengendalian Kualitas dan Pengembangan Pengawasan Perbankan",
      "Departemen Pengaturan dan Pengembangan Perbankan",
      "Departemen Pengawasan Lembaga Jasa Keuangan Mikro dan Lembaga Jasa Keuangan Lainnya"
    ],
    "answer": "Departemen Pemeriksaan Khusus dan Perbankan Daerah"
  },
  {
    "id": 738,
    "version": 9,
    "category": "Perbankan",
    "question": "POJK mana yang mengatur tentang Pengembangan Kualitas Sumber Daya Manusia BPR/Syariah?",
    "options": [
      "POJK 7/2024",
      "POJK 34/2018",
      "POJK 27/2016",
      "POJK 19/2023"
    ],
    "answer": "POJK 19/2023"
  },
  {
    "id": 739,
    "version": 9,
    "category": "Perbankan",
    "question": "Akademisi memiliki peranan penting dalam mendukung program Pengembangan Ekonomi Daerah, antara lain dalam hal sebagai berikut, kecuali:",
    "options": [
      "Memberikan asistensi teknis kepada pelaku usaha",
      "Memberikan rekomendasi pemanfaatan teknologi pengembangan keunggulan daerah",
      "Memberikan informasi mengenai inovasi dan penelitian terkait dengan keunggulan daerah",
      "Menetapkan jenis keunggulan daerah yang akan dikembangkan"
    ],
    "answer": "Menetapkan jenis keunggulan daerah yang akan dikembangkan"
  },
  {
    "id": 740,
    "version": 9,
    "category": "Perbankan",
    "question": "Dalam proses bisnis perkreditan, bank perlu untuk melakukan analisa berjenjang dan/atau terpisah terhadap suatu debitur yang dilakukan oleh unit kerja yang berbeda, antara lain oleh account manager dengan credit reviewer. Praktik dimaksud umumnya dikenal sebagai:",
    "options": [
      "Five Cs of credit",
      "Third line of defense",
      "Segregation of duty",
      "Four eyes principle"
    ],
    "answer": "Four eyes principle"
  },
  {
    "id": 741,
    "version": 9,
    "category": "Perbankan",
    "question": "Tantangan dalam pelaksanaan konsolidasi BPR/BPRS sebagaimana tercantum, kecuali:",
    "options": [
      "Kesulitan Mendapatkan Pasangan Penggabungan Bagi BPR/S (Non-Grup) Dengan Kinerja Baik",
      "Psp Mempertahankan Untuk Memiliki 1 BPR & 1 BPRS (Konvensional Dan Syariah)",
      "Keterbatasan Internal Kontrol, Sdm, & Teknologi Informasi.",
      "Kepemilikan BPR/S Memiliki Nilai Historis Sehingga Kepemilikannya Akan Dipertahankan"
    ],
    "answer": "Kesulitan Mendapatkan Pasangan Penggabungan Bagi BPR/S (Non-Grup) Dengan Kinerja Baik"
  },
  {
    "id": 742,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa tujuan utama dari pengaturan pemanfaatan Tenaga Kerja Asing (TKA) di sektor perbankan?",
    "options": [
      "Mempermudah proses rekrutmen tenaga kerja dari luar negeri",
      "Menyesuaikan struktur gaji tenaga kerja asing dan domestik",
      "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)",
      "Menyederhanakan prosedur perizinan ketenagakerjaan lintas sektor"
    ],
    "answer": "Meningkatkan daya saing industri perbankan sekaligus mendorong alih pengetahuan (Transfer of Knowledge)"
  },
  {
    "id": 743,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut adalah informasi yang wajib diumumkan oleh Bank sesuai POJK tentang Transparansi dan Publikasi Laporan Bank, kecuali:",
    "options": [
      "Rencana bisnis bank",
      "Eksposur risiko dan permodalan",
      "Informasi/fakta material",
      "Suku bunga dasar kredit"
    ],
    "answer": "Rencana bisnis bank"
  },
  {
    "id": 744,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut merupakan fungsi pengembangan pengawasan perbankan, kecuali:",
    "options": [
      "Meningkatkan kompetensi pengawas perbankan.",
      "Melaksanakan audit internal pengawasan perbankan.",
      "Melaksanakan, mengkoordinasi dan mereview pengembangan Suptech Perbankan.",
      "Merencanakan, mengendalikan, dan melaksanakan pengembangan metodologi pengawasan perbankan baik dalam bentuk kajian dan penyempurnaan proses bisnis."
    ],
    "answer": "Melaksanakan audit internal pengawasan perbankan."
  },
  {
    "id": 745,
    "version": 9,
    "category": "Perbankan",
    "question": "Undang-Undang Perbankan Syariah yang kini telah diberlakukan adalah:",
    "options": [
      "UU RI No. 21 tahun 2008",
      "UU RI No. 10 tahun 1998",
      "UU RI No. 21 tahun 2011",
      "UU RI No. 7 tahun 1992"
    ],
    "answer": "UU RI No. 21 tahun 2008"
  },
  {
    "id": 746,
    "version": 9,
    "category": "Perbankan",
    "question": "Dalam rangka mencapai sasaran manajemen pengawasan SJK Daerah, DMND sebagai koordinator pengawasan dan perizinan Kantor OJK Daerah perlu melakukan pengelolaan dengan cakupan terhadap:",
    "options": [
      "Sumber Daya Manusia, Proses Kerja dan Teknologi Informasi",
      "Pengawas, Anggaran, dan Sistem Informasi Pengawasan",
      "Standar Prosedur Operasional, Sistem Informasi Pengawasan, dan Proses Kerja",
      "Jumlah Pengawas, kebijakan strategis, dan layanan manajemen strategis"
    ],
    "answer": "Sumber Daya Manusia, Proses Kerja dan Teknologi Informasi"
  },
  {
    "id": 747,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut ini pernyataan yang tidak tepat terkait Penerapan Manajemen Risiko bagi Bank Umum:",
    "options": [
      "meliputi proses mengidentifikasi, mengukur, memantau, dan mengendalikan",
      "Diatur melalui POJK 18/POJK.03/2016",
      "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah",
      "Penerapan disesuaikan dengan kemampuan Bank"
    ],
    "answer": "POJK Manajemen Risiko yang sama berlaku untuk Bank Umum Konvensional dan Syariah"
  },
  {
    "id": 748,
    "version": 9,
    "category": "Perbankan",
    "question": "Menurut pendapat Saudara, mengapa bank perantara tidak dikenakan kewajiban terkait rencana korporasi?",
    "options": [
      "bank perantara diawasi oleh LPS.",
      "bank perantara tidak memiliki Direksi karena dimiliki langsung LPS.",
      "bank perantara tidak dapat menjadi perusahaan induk.",
      "bank perantara secepatnya akan dialihkan kepemilikannya kepada pihak lain."
    ],
    "answer": "bank perantara secepatnya akan dialihkan kepemilikannya kepada pihak lain."
  },
  {
    "id": 749,
    "version": 9,
    "category": "Perbankan",
    "question": "Kantor OJK Provinsi Jawa Tengah membawahi wilayah:",
    "options": [
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Malang, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Kediri",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Jember, Kantor OJK Solo, dan Kantor OJK Tegal"
    ],
    "answer": "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal"
  },
  {
    "id": 750,
    "version": 9,
    "category": "Perbankan",
    "question": "Pihak yang berwenang dalam suatu bank syariah (intern) yang bertugas memberikan nasihat dan saran kepada Direksi serta mengawasi kegiatan bank agar sesuai dengan prinsip syariah dan melaporkan hal tersebut kepada Bank Indonesia setiap enam bulan sekali adalah:",
    "options": [
      "Dewan Pengawas Syariah",
      "Dewan Syariah Nasional",
      "Dewan Perbankan Syariah",
      "Komite Perbankan Syariah"
    ],
    "answer": "Dewan Pengawas Syariah"
  },
  {
    "id": 751,
    "version": 9,
    "category": "Perbankan",
    "question": "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah",
    "options": [
      "Strategy",
      "Timely",
      "Measurable",
      "Relevant"
    ],
    "answer": "Strategy"
  },
  {
    "id": 752,
    "version": 9,
    "category": "Perbankan",
    "question": "Tujuan dilakukannya penilaian kemampuan dan kepatutan adalah untuk menciptakan sistem perbankan yang sehat, antara lain, kecuali:",
    "options": [
      "Meningkatkan rasio Non Performing Loan",
      "Berkontribusi pada pertumbuhan perekonomian nasional",
      "Memiliki daya tahan",
      "Mampu berkembang"
    ],
    "answer": "Meningkatkan rasio Non Performing Loan"
  },
  {
    "id": 753,
    "version": 9,
    "category": "Perbankan",
    "question": "Penilaian risiko terintegrasi dalam Konglomerasi Keuangan dilakukan sebanyak:",
    "options": [
      "1 kali dalam 1 tahun",
      "2 kali dalam 1 semester",
      "2 kali dalam 1 tahun",
      "1 kali dalam 1 triwulan"
    ],
    "answer": "2 kali dalam 1 tahun"
  },
  {
    "id": 754,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut merupakan komponen Know Your Financial Conglomerate, kecuali:",
    "options": [
      "Infrastruktur Pendukung",
      "Bisnis Utama dan Peran/Kontribusi LJK pada Konglomerasi Keuangan",
      "Pengawasan Direksi dan Dewan Komisaris",
      "Struktur Konglomerasi Keuangan"
    ],
    "answer": "Pengawasan Direksi dan Dewan Komisaris"
  },
  {
    "id": 755,
    "version": 9,
    "category": "Perbankan",
    "question": "Setelah dokumen lengkap, berapa lama jangka waktu OJK dalam memberikan persetujuan atau penolakan atas permohonan persetujuan prinsip pendirian BPR?",
    "options": [
      "30 hari",
      "30 hari kerja",
      "20 hari",
      "20 hari kerja"
    ],
    "answer": "30 hari kerja"
  },
  {
    "id": 756,
    "version": 9,
    "category": "Perbankan",
    "question": "Siapa yang menyusun dan menyetujui Rencana Bisnis Bank (RBB)?",
    "options": [
      "Komite audit dan Dewan Komisaris",
      "Direksi yang menyusun dan Dewan Komisaris menyetujui",
      "Pemegang saham menyusun dan menyetujui",
      "OJK dan BPR"
    ],
    "answer": "Direksi yang menyusun dan Dewan Komisaris menyetujui"
  },
  {
    "id": 757,
    "version": 9,
    "category": "Perbankan",
    "question": "Pendirian BUS/BPRS baru, Spin Off UUS dan Perubahan Kegiatan Usaha (Konversi) BUK/BPR menjadi BUS/BPRS adalah termasuk kelompok perizinan:",
    "options": [
      "Exit Kelembagaan",
      "Operasional Kelembagaan",
      "Operasional Kelembagaan dan Exit Kelembagaan",
      "Entry Kelembagaan"
    ],
    "answer": "Entry Kelembagaan"
  },
  {
    "id": 758,
    "version": 9,
    "category": "Perbankan",
    "question": "Pembiayaan pembelian barang-barang konsumsi seperti kendaraan bermotor dalam perbankan syariah menggunakan prinsip:",
    "options": [
      "Murabahah",
      "Mudharabah",
      "Wakalah",
      "Kafalah"
    ],
    "answer": "Murabahah"
  },
  {
    "id": 759,
    "version": 9,
    "category": "Perbankan",
    "question": "Modal disetor pendirian Bank Umum Syariah baru yaitu sebesar:",
    "options": [
      "Rp10 triliun",
      "Rp5 triliun",
      "Rp1 triliun",
      "Rp20 triliun"
    ],
    "answer": "Rp10 triliun"
  },
  {
    "id": 760,
    "version": 9,
    "category": "Perbankan",
    "question": "Hal-hal yang perlu menjadi fokus pembahasan dalam pelaksanaan FGD dengan stakeholder adalah kecuali:",
    "options": [
      "Langkah pengendalian hama dan antisipasi perubahan cuaca",
      "Penetapan skema akses keuangan",
      "Dampak pengembangan komoditas",
      "Identifikasi value chain komoditas terpilih"
    ],
    "answer": "Langkah pengendalian hama dan antisipasi perubahan cuaca"
  },
  {
    "id": 761,
    "version": 9,
    "category": "Perbankan",
    "question": "Permohonan izin atas produk bank lanjutan, untuk Bank Umum, dilakukan melalui...",
    "options": [
      "SIPENA",
      "SPRINT",
      "OBOX",
      "APOLO"
    ],
    "answer": "SPRINT"
  },
  {
    "id": 762,
    "version": 9,
    "category": "Perbankan",
    "question": "Program PED dapat dilangsungkan secara kontinu, sehingga dapat mendukung pendalaman pasar, memberikan manfaat nyata bagi masyarakat dan para pemangku kepentingan di daerah merupakan definisi dari aspek:",
    "options": [
      "Aspek keberlanjutan",
      "Aspek manajemen",
      "Aspek komprehensif",
      "Aspek perencanaan"
    ],
    "answer": "Aspek keberlanjutan"
  },
  {
    "id": 763,
    "version": 9,
    "category": "Perbankan",
    "question": "Bank A merupakan emiten dan perusahaan publik. Sehubungan dengan hal tersebut, bank wajib menyampaian laporan publikasi keuangan dan informasi kinerja keuangan tahunan melalui:",
    "options": [
      "SIPENA",
      "SPE",
      "APOLO",
      "APOLO dan SPE"
    ],
    "answer": "SPE"
  },
  {
    "id": 764,
    "version": 9,
    "category": "Perbankan",
    "question": "Apakah yang dimaksud dengan Bottom Up Stress Test (BUST)?",
    "options": [
      "Stress test yang dilakukan oleh bank menggunakan data dan model dari Otoritas dengan skenario dan pedoman dari Otoritas",
      "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas",
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Bank",
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Otoritas"
    ],
    "answer": "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas"
  },
  {
    "id": 765,
    "version": 9,
    "category": "Perbankan",
    "question": "Perbuatan hukum yang dilakukan oleh KCBLN untuk mengubah izin usaha KCBLN menjadi izin usaha Bank, dan selanjutnya dilakukan pencabutan izin usaha KCBLN disebut:",
    "options": [
      "Integrasi",
      "Konversi",
      "Penggabungan",
      "Peleburan"
    ],
    "answer": "Konversi"
  },
  {
    "id": 766,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa yang menjadi ciri khas dari produk simpanan berjangka?",
    "options": [
      "Likuiditas tinggi",
      "Jangka waktu tidak ditentukan",
      "Bunga yang dapat dinegosiasikan",
      "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
    ],
    "answer": "Pemegang tidak dapat menarik dana sebelum jangka waktu tertentu"
  },
  {
    "id": 767,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut ini yang termasuk ke dalam komponen Penilaian Integrated Risk Rating, kecuali:",
    "options": [
      "Manajemen Risiko Terintegrasi",
      "Profil Risiko Terintegrasi",
      "Permodalan Terintegrasi",
      "Tata Kelola Terintegrasi"
    ],
    "answer": "Manajemen Risiko Terintegrasi"
  },
  {
    "id": 768,
    "version": 9,
    "category": "Perbankan",
    "question": "Yang termasuk tugas pokok Kelompok Spesialis Perbankan?",
    "options": [
      "Mengusulkan dan/atau melakukan pemeriksaan bank sesuai keahliannya dan mengacu pada fokus dan perencanaan pengawasan (Supervisory Plan/SP)",
      "Mengelola dan menganalisis data dan informasi Tipibank, perbankan daerah untuk mendukung tugas pengawasan bank",
      "Koordinasi/asistensi penanganan Informasi Indikasi Penyimpangan Ketentuan Perbankan (I2PKP)",
      "Menyampaikan rekomendasi Pelimpahan dugaan tindak pidana perbankan"
    ],
    "answer": "Mengusulkan dan/atau melakukan pemeriksaan bank sesuai keahliannya dan mengacu pada fokus dan perencanaan pengawasan (Supervisory Plan/SP)"
  },
  {
    "id": 769,
    "version": 9,
    "category": "Perbankan",
    "question": "SLIK merupakan singkatan dari:",
    "options": [
      "Sistem Lacak Informasi Kredit",
      "Sistem Layanan Informasi Kredit",
      "Sistem Layanan Informasi Keuangan",
      "Sistem Layanan Izin Kredit"
    ],
    "answer": "Sistem Layanan Informasi Keuangan"
  },
  {
    "id": 770,
    "version": 9,
    "category": "Perbankan",
    "question": "Indikator yang menunjukkan hubungan antara sektor dari sisi penyediaan input produksi, dikenal sebagai indikator:",
    "options": [
      "Tidak ada yang benar",
      "Backward-Linkage",
      "Intermediary-Linkage",
      "Forward-Linkage"
    ],
    "answer": "Forward-Linkage"
  },
  {
    "id": 771,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut adalah kegiatan usaha LPIP, kecuali:",
    "options": [
      "Menghasilkan informasi perkreditan yang memiliki nilai tambah",
      "Menghimpun dan menyalurkan dana dari dan kepada masyarakat",
      "Menghimpun dan mengolah data kredit atau pembiayaan dan/atau data lain",
      "Memberikan jasa pemeringkatan terhadap debitur atau nasabah"
    ],
    "answer": "Menghimpun dan menyalurkan dana dari dan kepada masyarakat"
  },
  {
    "id": 772,
    "version": 9,
    "category": "Perbankan",
    "question": "Minimal modal disetor dalam pendirian Bank BHI:",
    "options": [
      "Rp 9 Triliun",
      "Rp 11 Triliun",
      "Rp 10 Triliun",
      "Rp 12 Triliun"
    ],
    "answer": "Rp 10 Triliun"
  },
  {
    "id": 773,
    "version": 9,
    "category": "Perbankan",
    "question": "Tahapan keempat pada Siklus Pengawasan Bank Berdasarkan Risiko adalah",
    "options": [
      "Pemahaman Terhadap Bank",
      "Penilaian Tingkat Kesehatan",
      "Monitoring",
      "Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Pemeriksaan Berdasarkan Risiko"
  },
  {
    "id": 774,
    "version": 9,
    "category": "Perbankan",
    "question": "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:",
    "options": [
      "Meningkatkan fungsi intermediasi",
      "Meningkatkan fungsi Surveilans",
      "Meningkatkan fungsi Pengawasan Bank",
      "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis"
    ],
    "answer": "Meningkatkan fungsi intermediasi"
  },
  {
    "id": 775,
    "version": 9,
    "category": "Perbankan",
    "question": "Untuk mengetahui detail penjelasan dari angka yang tercantum dalam laporan posisi keuangan di laporan keuangan audited, pengawas dapat melihat:",
    "options": [
      "Laporan tata kelola Perusahaan",
      "Laporan perubahan ekuitas",
      "Laporan arus kas",
      "Catatan atas laporan keuangan"
    ],
    "answer": "Catatan atas laporan keuangan"
  },
  {
    "id": 776,
    "version": 9,
    "category": "Perbankan",
    "question": "Apa arti prinsip Kewajaran dalam tata kelola BPR?",
    "options": [
      "Kewajiban laporan keuangan tahunan",
      "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan",
      "Menghindari pemborosan biaya",
      "Kemudahan ekspansi bisnis"
    ],
    "answer": "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan"
  },
  {
    "id": 777,
    "version": 9,
    "category": "Perbankan",
    "question": "Manakah pengertian Penyimpangan Ketentuan Perbankan (PKP) adalah",
    "options": [
      "Tindakan penyimpangan yang melanggar ketentuan, antara lain UU Perbankan, UU Perbankan Syariah, Peraturan Otoritas Jasa Keuangan (POJK), Peraturan Bank Indonesia (PBI), peraturan perundang-undangan lainnya, Surat Edaran Otoritas Jasa Keuangan (SE OJK), Surat Edaran Bank Indonesia (SE BI), dan ketentuan internal bank.",
      "Semua jawaban benar",
      "Tindakan sengaja melanggar ketentuan internal (system & procedure) & peraturan perundang-undangan yang berlaku, demi kepentingan pribadi atau pihak lain yang berpotensi merugikan baik material maupun non material (moril)",
      "Tindakan yang disengaja oleh anggota manajemen perusahaan, pihak yang berperan dalam governance perusahaan, karyawan, atau pihak ketiga yang melakukan pembohongan atau penipuan untuk memperoleh keuntungan yang tidak adil atau illegal."
    ],
    "answer": "Tindakan penyimpangan yang melanggar ketentuan, antara lain UU Perbankan, UU Perbankan Syariah, Peraturan Otoritas Jasa Keuangan (POJK), Peraturan Bank Indonesia (PBI), peraturan perundang-undangan lainnya, Surat Edaran Otoritas Jasa Keuangan (SE OJK), Surat Edaran Bank Indonesia (SE BI), dan ketentuan internal bank."
  },
  {
    "id": 778,
    "version": 9,
    "category": "Perbankan",
    "question": "Perbuatan berikut merupakan PKP yang memiliki indikasi tindak pidana perbankan, kecuali ...",
    "options": [
      "Penarikan uang kas yang tidak dicatat dalam pembukuan bank.",
      "Pemalsuan dokumen persyaratan permohonan kredit oleh calon debitur.",
      "Setoran deposito/tabungan/giro yang tidak dicatat dalam pembukuan bank.",
      "Pemberian kredit kepada debitur fiktif."
    ],
    "answer": "Pemalsuan dokumen persyaratan permohonan kredit oleh calon debitur."
  },
  {
    "id": 779,
    "version": 9,
    "category": "Perbankan",
    "question": "BUK yang mengajukan izin konversi menjadi BUS, apabila telah memperoleh izin, maka:",
    "options": [
      "Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari",
      "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku",
      "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari",
      "Melakukan kegiatan usaha syariah 6 bulan sejak izin berlaku"
    ],
    "answer": "Melakukan kegiatan usaha syariah 60 hari sejak izin berlaku dan Menyelesaikan hak dan kewajiban debitur dan kreditur konvensional dalam 360 hari"
  },
  {
    "id": 780,
    "version": 9,
    "category": "Perbankan",
    "question": "Di bawah ini, yang termasuk dalam Regulatory Triangle for Promoting Finance Stability adalah:",
    "options": [
      "Pengawasan",
      "Pengaturan",
      "Perizinan",
      "Semua benar"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 781,
    "version": 9,
    "category": "Perbankan",
    "question": "Yang dimaksud sebagai perusahaan anak dalam Konglomerasi Keuangan adalah yang memenuhi syarat sebagai berikut:",
    "options": [
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan sektor lainnya, serta dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
      "Perusahaan yang melakukan kegiatan usaha selain sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri",
      "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang hanya berada di dalam negeri"
    ],
    "answer": "Perusahaan yang melakukan kegiatan usaha di sektor jasa keuangan dan dimiliki dan/atau dikendalikan oleh LJK secara langsung maupun tidak langsung yang berada di dalam maupun di luar negeri"
  },
  {
    "id": 782,
    "version": 9,
    "category": "Perbankan",
    "question": "Apakah implikasi ekonomi dari dilarangnya aktivitas Riba (interest base activities), Maisir (speculative motive) dan Gharar (unclear information), kecuali:",
    "options": [
      "Ketimpangan sektor riil dan keuangan",
      "No/less money creation & whirlpool/money concentration (bubble economy)",
      "Krisis moneter",
      "Stabilitas sistem keuangan"
    ],
    "answer": "Krisis moneter"
  },
  {
    "id": 783,
    "version": 9,
    "category": "Perbankan",
    "question": "Prinsip-prinsip Syariah sebagaimana dimaksud UU No.21 Tahun 2008 mewajibkan Perbankan Syariah menjalankan produk dan aktivitasnya tidak mengandung unsur-unsur yang dilarang oleh syariah yaitu:",
    "options": [
      "Riba, Nasir, Gharar, Haram dan Zalim",
      "Riba, Maisir, Gahar, Khamr dan Zalim",
      "Rabi, Maisir, Gharar, Halal dan Zalim",
      "Riba, Maisir, Gharar, Haram dan Zalim"
    ],
    "answer": "Riba, Maisir, Gharar, Haram dan Zalim"
  },
  {
    "id": 784,
    "version": 9,
    "category": "Perbankan",
    "question": "BPR/S wajib melakukan penggabungan, peleburan, atau pengambilalihan berdasarkan perintah OJK dengan tujuan hal sebagai berikut, kecuali:",
    "options": [
      "Menyamakan corporate culture bagi BPR dalam satu kepemilikan PSP yang sama.",
      "Upaya memperkuat ketahanan dan daya saing BPR dan/atau industri melalui konsolidasi.",
      "Pemenuhan ketentuan KPMM dan modal inti minimum.",
      "Proses penyehatan bagi BDPI atau BDPK yang berada dalam satu kepemilikan PSP."
    ],
    "answer": "Menyamakan corporate culture bagi BPR dalam satu kepemilikan PSP yang sama."
  },
  {
    "id": 785,
    "version": 9,
    "category": "Perbankan",
    "question": "Siapa yang wajib memberikan rekomendasi dalam usulan penunjukan AP dan/atau KAP",
    "options": [
      "Direksi",
      "Pemegang saham",
      "Akuntan Internal",
      "Komite Audit"
    ],
    "answer": "Komite Audit"
  },
  {
    "id": 786,
    "version": 9,
    "category": "Perbankan",
    "question": "Batas waktu penyusunan Supervisory Plan sesuai dengan SEDK Nomor 3/SEDK.03/2023 tentang Pedoman Pengawasan Bank Berdasarkan Risiko Untuk Tahapan Perencanaan Pengawasan adalah",
    "options": [
      "15 Desember sebelum tahun pelaksanaan",
      "15 Januari tahun pelaksanaan",
      "31 Desember sebelum tahun pelaksanaan",
      "30 November sebelum tahun pelaksanaan"
    ],
    "answer": "15 Desember sebelum tahun pelaksanaan"
  },
  {
    "id": 787,
    "version": 9,
    "category": "Perbankan",
    "question": "Pernyataan di bawah ini adalah benar mengenai ketentuan Pengurus Bank Syariah, kecuali:",
    "options": [
      "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris",
      "Jumlah anggota dewan komisaris BUS minimal 3 orang dan maksimal sama dengan jumlah anggota direksi",
      "Jumlah anggota direksi BPRS minimal 2 orang",
      "Jumlah anggota direksi BUS minimal 3 orang"
    ],
    "answer": "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris"
  },
  {
    "id": 788,
    "version": 9,
    "category": "Perbankan",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Pembiayaan Rakyat Syariah terdiri dari:",
    "options": [
      "PSAK",
      "PSAK Syariah",
      "SAK ETAP",
      "SAK ETAP dan PSAK Syariah"
    ],
    "answer": "SAK ETAP dan PSAK Syariah"
  },
  {
    "id": 789,
    "version": 9,
    "category": "Perbankan",
    "question": "KOJK berperan sebagai fasilitator komunikasi antara pemangku kepentingan terkait dalam program pengembangan ekonomi daerah. Dengan demikian, dalam melakukan penetapan keunggulan daerah, KOJK juga perlu memastikan keselarasan hasil pemetaan internal KOJK dengan inisiatif pemerintah. Adapun acuan program/inisiatif/rencana pemerintah dapat mengacu pada:",
    "options": [
      "Semua benar",
      "Rencana Jangka Panjang Menengah Nasional",
      "Ketetapan Kementerian/Pemerintah Daerah",
      "Visi Indonesia Emas 2045"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 790,
    "version": 9,
    "category": "Perbankan",
    "question": "Status pengawasan Bank yang ditetapkan oleh OJK terdiri dari, kecuali:",
    "options": [
      "Pengawasan Normal",
      "Pengawasan Khusus",
      "Pengawasan Intensif",
      "Pengawasan dalam perhatian khusus"
    ],
    "answer": "Pengawasan dalam perhatian khusus"
  },
  {
    "id": 791,
    "version": 9,
    "category": "Perbankan",
    "question": "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS yang merupakan parameter BPR dalam status NORMAL adalah",
    "options": [
      "<2",
      "12%",
      "Rasio KPMM",
      "Rasio KPMM <12%",
      "TKS PK 5 selama dua bulan berturut-turut",
      "Rasio KPMM>"
    ],
    "answer": "12%"
  },
  {
    "id": 792,
    "version": 9,
    "category": "Perbankan",
    "question": "Penilaian kondisi BPR dan BPRS yang dilakukan terhadap faktor profil risiko, tata kelola, rentabilitas, dan permodalan BPR dan BPRS merupakan tahapan siklus pengawasan BPR/BPRS tahapan:",
    "options": [
      "Penilaian Profil Risiko dan Kinerja BPR atau BPRS",
      "Tindakan Pengawasan dan Pemantauan (Supervisory Actions and Monitoring)",
      "Perencanaan Pengawasan (Supervisory Plan)",
      "Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Penilaian Profil Risiko dan Kinerja BPR atau BPRS"
  },
  {
    "id": 793,
    "version": 9,
    "category": "Perbankan",
    "question": "Periode penyusunan Integrated Supervisory Plan dilakukan selambat-lambatnya pada:",
    "options": [
      "15 Januari tahun berjalan",
      "31 Desember tahun sebelumnya",
      "15 Desember tahun sebelumnya",
      "31 Januari tahun berjalan"
    ],
    "answer": "31 Januari tahun berjalan"
  },
  {
    "id": 794,
    "version": 9,
    "category": "Perbankan",
    "question": "Salah satu pimpinan KC bank Kepompong di Sumatera tertangkap KPK atas tindakan korupsi dan beritanya tersiar dalam media massa. Kasus ini mencatat kenaikan kasus fraud bank Kepompong yang pada periode sebelumnya tercatat nihil. Dampak dari kasus tersebut menyebabkan sebagian besar nasabah KC dimaksud serentak melakukan rush sehingga likuiditas cabang turun signifikan sebesar -78,95% dari bulan sebelumnya, serta NPL naik menjadi 11,51% (0,017% bank wide) karena mayoritas penyaluran kredit kepada kolega pimpinan KC yang usahanya fiktif. Porsi terbesar evaluasi atas kasus ini oleh Pengawas dilakukan pada penilaian RBBR dalam analisa:",
    "options": [
      "Risiko Likuiditas",
      "Risiko Reputasi",
      "Risiko Kredit",
      "Risiko Operasional"
    ],
    "answer": "Risiko Operasional"
  },
  {
    "id": 795,
    "version": 9,
    "category": "Perbankan",
    "question": "Pengaturan terkait kualitas aset, KPMM, dan TKS, termasuk dalam lingkup regulasi:",
    "options": [
      "Material",
      "Kelembagaan",
      "Prudensial",
      "Komersial"
    ],
    "answer": "Prudensial"
  },
  {
    "id": 796,
    "version": 9,
    "category": "Perbankan",
    "question": "Kerangka tata kelola syariah bagi BUS dan UUS terdiri dari:",
    "options": [
      "DPS, kepatuhan syariah, komite syariah, audit intern syariah, audit ekstern syariah",
      "DPS, kepatuhan dan manajemen risiko syariah, audit intern syariah, audit ekstern syariah",
      "DPS, komite syariah, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah",
      "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah"
    ],
    "answer": "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah"
  },
  {
    "id": 797,
    "version": 9,
    "category": "Perbankan",
    "question": "Manakan diantara Konglomerasi Keuangan dibawah ini yang memiliki wider group dengan unregulated entities paling banyak, adalah:",
    "options": [
      "KK BRI",
      "KK Mega Corpora",
      "KK BCA",
      "KK Mandiri"
    ],
    "answer": "KK Mega Corpora"
  },
  {
    "id": 798,
    "version": 9,
    "category": "Perbankan",
    "question": "Yang bukan merupakan cakupan penerapan tata kelola sesuai POJK No.2 tahun 2024 tentang Penerapan Tata Kelola Syariah BUS UUS yaitu:",
    "options": [
      "Kewajiban pembentukan komite syariah",
      "Pembatasan masa jabatan anggota DPS",
      "Kewajiban pengalihan penghasilan yang tidak sesuai dengan prinsip syariah",
      "Kerangka tata kelola syariah"
    ],
    "answer": "Kewajiban pembentukan komite syariah"
  },
  {
    "id": 799,
    "version": 9,
    "category": "Perbankan",
    "question": "Wilayah jaringan kantor BPR/S hasil penggabungan/peleburan paling luas berlokasi dalam satu wilayah",
    "options": [
      "Pulau atau kepulauan utama",
      "Kabupaten/Kota",
      "Provinsi",
      "Negara"
    ],
    "answer": "Pulau atau kepulauan utama"
  },
  {
    "id": 800,
    "version": 9,
    "category": "Perbankan",
    "question": "Tahapan dalam siklus pengawasan BPR dan BPRS berdasarkan risiko, kecuali:",
    "options": [
      "Pemeriksaan berbasis kepatuhan",
      "Pemeriksaan Berdasarkan Risiko",
      "Penilaian Profil Risiko dan Kinerja BPR atau BPRS",
      "Tindakan Pengawasan dan Pemantauan (Supervisory Actions and Monitoring)"
    ],
    "answer": "Pemeriksaan berbasis kepatuhan"
  },

  // paket 10
  {
    "id": 801,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Modul yang terdapat pada aplikasi Sistem Informasi Pengawasan Perbankan BPR dan BPRS antara lain:",
    "options": [
      "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan",
      "Know Your BPR/BPRS, Bank Performance Report (BPeR), Early Warning System (EWS)",
      "Risk Based Bank Rating (RBBR), Penilaian Risiko APU PPT, Bank Performance Report (BPeR)",
      "Know Your BPR/BPRS, Tindakan Pengawasan dan Pemantauan, Enterprise Data Warehouse"
    ],
    "answer": "Know Your BPR/BPRS, Risk Based Bank Rating (RBBR), Supervisory Plan"
  },
  {
    "id": 802,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Aspek penilaian uji kemampuan dan kepatutan new entry calon pengurus bank:",
    "options": [
      "Integritas dan komitmen",
      "Integritas, reputasi keuangan dan kelayakan keuangan",
      "Integritas, komitmen, reputasi keuangan",
      "Integritas, reputasi keuangan dan kompetensi"
    ],
    "answer": "Integritas, reputasi keuangan dan kompetensi"
  },
  {
    "id": 803,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jumlah Kantor OJK Koordinator dan Non-Koordinator:",
    "options": [
      "8 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
      "8 Kantor OJK Koordinator, dan 26 Kantor OJK Non-Koordinator",
      "9 Kantor OJK Koordinator, dan 33 Kantor OJK Non-Koordinator",
      "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator"
    ],
    "answer": "9 Kantor OJK Koordinator, dan 28 Kantor OJK Non-Koordinator"
  },
  {
    "id": 804,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Bentuk badan hukum BPR sesuai ketentuan peraturan perundang-undangan:",
    "options": [
      "Perseroda, Perumda, dan/atau Perseroan Terbatas.",
      "Perusahaan Daerah, Koperasi, dan/atau Perseroan Terbatas.",
      "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas.",
      "Perusahaan Perseroan Daerah, Koperasi, dan/atau Perseroan Terbatas."
    ],
    "answer": "Perseroda, Perumda, Koperasi, dan/atau Perseroan Terbatas."
  },
  {
    "id": 805,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan yang wajib membentuk PIKK Nonoperasional, PSP dan/atau PSPT wajib menyampaikan dokumen rencana pembentukan PIKK paling lambat:",
    "options": [
      "9 bulan",
      "3 bulan",
      "1 tahun",
      "6 bulan"
    ],
    "answer": "6 bulan"
  },
  {
    "id": 806,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Periode penyusunan Integrated Supervisory Plan dilakukan selambat-lambatnya pada:",
    "options": [
      "31 Desember tahun sebelumnya",
      "15 Desember tahun sebelumnya",
      "15 Januari tahun berjalan",
      "31 Januari tahun berjalan"
    ],
    "answer": "31 Januari tahun berjalan"
  },
  {
    "id": 807,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Persyaratan umum Pemisahan UUS yaitu:",
    "options": [
      "Rasio KPMM minimal 15%",
      "BUS hasil Pemisahan wajib menyelesaikan pelampauan BMPD paling lama 12 bulan",
      "Rasio NPF paling tinggi 5%",
      "BUK induk harus memenuhi persyaratan tingkat kesehatan sesuai POJK mengenai prinsip kehati-hatian dalam kegiatan penyertaan modal"
    ],
    "answer": "Rasio NPF paling tinggi 5%"
  },
  {
    "id": 808,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dari beberapa komponen neraca bank berikut ini, yang tidak terpapar risiko kredit adalah:",
    "options": [
      "CKPN kredit",
      "Penempatan pada bank lain",
      "Tagihan akseptasi",
      "Reverse repo"
    ],
    "answer": "CKPN kredit"
  },
  {
    "id": 809,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Apakah definisi Prinsip Syariah dalam UU Perbankan Syariah?",
    "options": [
      "Prinsip hukum Islam dalam kegiatan perbankan syariah berdasarkan fatwa yang dikeluarkan oleh lembaga yang memiliki kewenangan dalam penetapan fatwa di bidang Syariah",
      "Prinsip hukum Islam dalam kegiatan perbankan berdasarkan fatwa yang dikeluarkan oleh MUI",
      "Prinsip hukum Islam dalam kegiatan perbankan berdasarkan fatwa yang dikeluarkan oleh lembaga yang memiliki kewenangan dalam penetapan fatwa di bidang Syariah",
      "Prinsip hukum Islam dalam kegiatan perbankan syariah berdasarkan fatwa yang dikeluarkan oleh MUI"
    ],
    "answer": "Prinsip hukum Islam dalam kegiatan perbankan berdasarkan fatwa yang dikeluarkan oleh lembaga yang memiliki kewenangan dalam penetapan fatwa di bidang Syariah"
  },
  {
    "id": 810,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berapa jumlah Kantor OJK yang akan dibuka pada tahun 2024 s.d 2027?",
    "options": [
      "6 Kantor OJK",
      "9 Kantor OJK",
      "8 Kantor OJK",
      "7 Kantor OJK"
    ],
    "answer": "7 Kantor OJK"
  },
  {
    "id": 811,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pihak utama sebagai berikut dapat tidak melalui tahapan klarifikasi dalam proses PKK, kecuali:",
    "options": [
      "Mantan Direktur Utama yang akan menjabat sebagai anggota Direksi di bank lain dengan BUKU yang lebih rendah",
      "Mantan Direktur Kepatuhan yang akan menjabat sebagai anggota Direksi di bank lain dengan BUKU yang lebih tinggi",
      "Mantan Direktur Kepatuhan yang akan menjabat sebagai Direktur Utama di bank dengan BUKU yang sama",
      "Mantan Direktur Korporasi yang akan menjabat sebagai Direktur Utama pada bank dengan BUKU yang lebih tinggi"
    ],
    "answer": "Mantan Direktur Korporasi yang akan menjabat sebagai Direktur Utama pada bank dengan BUKU yang lebih tinggi"
  },
  {
    "id": 812,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut ini adalah bab-bab di dalam UU Perbankan Syariah, kecuali:",
    "options": [
      "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS",
      "Perizinan, Bentuk Badan Hukum, Anggaran Dasar, dan Kepemilikan",
      "Tata Kelola, Prinsip Kehati-hatian, dan Pengelolaan Risiko Perbankan Syariah",
      "Sanksi Administratif dan Sanksi Pidana"
    ],
    "answer": "Sanksi Administratif dan Sanksi Pidana"
  },
  {
    "id": 813,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Periodisasi penyusunan Know Your BPR/BPRS (KYBPR/BPRS):",
    "options": [
      "Paling sedikit 1 kali dalam 1 tahun paling lambat tanggal 31 Januari tahun berjalan",
      "Paling sedikit 1 kali dalam 1 tahun paling lambat tanggal 31 Juni tahun berjalan",
      "Paling sedikit 2 (dua) kali dalam setahun, yaitu setiap semester paling lambat tanggal 31 Juni dan 31 Januari",
      "Salah semua"
    ],
    "answer": "Paling sedikit 1 kali dalam 1 tahun paling lambat tanggal 31 Januari tahun berjalan"
  },
  {
    "id": 814,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dalam pengaturan kelembagaan perbankan syariah diatur sebagai berikut, kecuali:",
    "options": [
      "Penilaian kemampuan dan kepatutan bagi Dewan Komisaris",
      "Penilaian kemampuan dan kepatutan bagi Direksi",
      "Perubahan kegiatan usaha bank",
      "Penilaian kemampuan dan kepatutan bagi Pemimpin Divisi"
    ],
    "answer": "Penilaian kemampuan dan kepatutan bagi Pemimpin Divisi"
  },
  {
    "id": 815,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Penyelesaian sengketa di Perbankan Syariah dilakukan oleh pengadilan dalam lingkungan:",
    "options": [
      "Peradilan Umum",
      "Peradilan Agama",
      "Peradilan Mu amalah",
      "Peradilan Tata Niaga"
    ],
    "answer": "Peradilan Agama"
  },
  {
    "id": 816,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Penyusunan Laporan Large Exposure (LEX) merupakan fungsi pada spesialis",
    "options": [
      "Kredit",
      "Teknologi Informasi",
      "Pasar dan Likuiditas",
      "APU-PPT"
    ],
    "answer": "Kredit"
  },
  {
    "id": 817,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Salah satu dampak positif dari implementasi standar Basel bagi Bank adalah sebagai berikut, kecuali:",
    "options": [
      "Peningkatan regulatory cost",
      "Penguatan ketahanan sistemik dengan adanya buffer permodalan",
      "Penguatan framework manajemen risiko",
      "Penguatan likuiditas dengan diperkenalkannya rasio likuiditas seperti LCR dan NSFR"
    ],
    "answer": "Peningkatan regulatory cost"
  },
  {
    "id": 818,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pada POJK LPIP, pasal berapa yang menyebutkan bahwa LPIP diminta untuk menghasilkan informasi perkreditan yang memiliki nilai tambah?",
    "options": [
      "Pasal 60 ayat 3",
      "Pasal 61 ayat 1",
      "Pasal 61 ayat 3",
      "Pasal 60 ayat 1"
    ],
    "answer": "Pasal 61 ayat 1"
  },
  {
    "id": 819,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jenis Pembagian KSP terdiri dari",
    "options": [
      "TI, APU-PPT, Syariah, Likuiditas dan Pasar",
      "TI, APU-PPT, Kredit, Likuiditas dan Pasar, Panelis",
      "TI, APU-PPT, Market",
      "TI, APU-PPT, Kredit, Likuiditas dan Pasar, Syariah"
    ],
    "answer": "TI, APU-PPT, Kredit, Likuiditas dan Pasar, Syariah"
  },
  {
    "id": 820,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pihak terkait dalam perhitungan batas maksimum pemberian kredit (BMPK) adalah",
    "options": [
      "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)",
      "Badan Usaha Milik Negara",
      "Semua benar",
      "Perorangan atau perusahaan yang tidak mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)"
    ],
    "answer": "Perorangan atau perusahaan yang mempunyai hubungan pengendalian langsung/tidak langsung dengan Bank (kepemilikan, kepengurusan, dan/atau keuangan)"
  },
  {
    "id": 821,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Salah satu parameter BPR/BPRS ditetapkan dalam status pengawasan BDP adalah",
    "options": [
      "Cash ratio > 5%",
      "Rasio KPMM < 12%",
      "Rasio KPMM < 5%",
      "Cash ratio < 2%"
    ],
    "answer": "Rasio KPMM < 12%"
  },
  {
    "id": 822,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pemegang Saham yang sengaja melakukan tindak pidana perbankan, akan dijerat dengan pasal",
    "options": [
      "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah",
      "Pasal 50 UU Perbankan atau Pasal 64 UU Perbankan Syariah",
      "Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah",
      "Pasal 46 UU Perbankan atau Pasal 59 UU Perbankan Syariah"
    ],
    "answer": "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah"
  },
  {
    "id": 823,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Batas waktu penyampaian LKPJ adalah:",
    "options": [
      "15 November",
      "15 April",
      "15 Juli",
      "5 April"
    ],
    "answer": "15 April"
  },
  {
    "id": 824,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Besaran denda yang dikenakan kepada AP yang tidak mengikuti PPL adalah:",
    "options": [
      "$.5.000.000/hk$",
      "100.000/hk",
      "500.000/SKP",
      "250.000/SKP"
    ],
    "answer": "250.000/SKP"
  },
  {
    "id": 825,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini, pernyataan yang tidak sesuai dengan POJK Nomor 12/POJK.03/2021 adalah:",
    "options": [
      "Penutupan KC memerlukan izin DIMB/OJK",
      "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK",
      "Pemindahan alamat KP yang mengakibatkan perubahan tempat kedudukan dalam anggaran dasar memerlukan izin DIMB/OJK",
      "Pembukaan/Penutupan Kantor di Luar Negeri memerlukan izin DIMB/OJK"
    ],
    "answer": "Pemindahan alamat Kantor di Luar Negeri dalam kota yang sama memerlukan izin DIMB/OJK"
  },
  {
    "id": 826,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Mandat ketentuan perundang-undangan yang menjadi latar belakang implementasi pengembangan ekonomi daerah, yaitu:",
    "options": [
      "UU No 21/2011 tentang Bank Umum dan UU No 4/2023 tentang OJK",
      "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK",
      "UU No 21/2011 tentang P2SK dan UU No 4/2023 tentang OJK",
      "UU No 21/2011 tentang Bank Umum dan UU No 4/2023 tentang P2SK"
    ],
    "answer": "UU No 21/2011 tentang OJK dan UU No 4/2023 tentang P2SK"
  },
  {
    "id": 827,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berdasarkan siklus Pengawasan Terintegrasi, langkah yang dilakukan selanjutnya sebelum Integrated Risk Rating KK Tahap 1 yaitu:",
    "options": [
      "Tindakan Pengawasan dan Pemantauan",
      "Perencanaan Pengawasan",
      "Pemahaman terhadap Konglomerasi Keuangan",
      "Koordinasi Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Pemahaman terhadap Konglomerasi Keuangan"
  },
  {
    "id": 828,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Modal disetor untuk mendirikan LPIP ditetapkan paling sedikit:",
    "options": [
      "Rp500 miliar",
      "Rp100 miliar",
      "Rp50 miliar",
      "Rp200 miliar"
    ],
    "answer": "Rp200 miliar"
  },
  {
    "id": 829,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tahapan dalam siklus pengawasan BPR dan BPRS berdasarkan risiko, kecuali:",
    "options": [
      "Tindakan Pengawasan dan Pemantauan (Supervisory Actions and Monitoring)",
      "Penilaian Profil Risiko dan Kinerja BPR atau BPRS",
      "Pemeriksaan berbasis kepatuhan",
      "Pemeriksaan Berdasarkan Risiko"
    ],
    "answer": "Pemeriksaan berbasis kepatuhan"
  },
  {
    "id": 830,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Apakah yang dimaksud dengan Bottom Up Stress Test (BUST)?",
    "options": [
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Bank",
      "Stress test yang dilakukan Otoritas terhadap seluruh bank dengan skenario dan model yang dikembangkan oleh Otoritas",
      "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas",
      "Stress test yang dilakukan oleh bank menggunakan da"
    ],
    "answer": "Stress test yang dilakukan oleh bank menggunakan data dan model internal bank dengan skenario dan pedoman dari Otoritas"
  },
  {
    "id": 831,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dasar dilakukannya reorganisasi di bidang perbankan, kecuali",
    "options": [
      "Amanat Dewan Komisioner OJK",
      "Amanat UU P2SK",
      "Untuk menciptakan IJK daerah yang kuat dan sehat",
      "MPSJKI 2021-2025"
    ],
    "answer": "Amanat Dewan Komisioner OJK"
  },
  {
    "id": 832,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini merupakan pernyataan yang benar pada nilai hasil penetapan profil risiko yang menerapkan bauran nilai peringkat inheren dan Kualitas Penerapan Manajemen Risiko, kecuali:",
    "options": [
      "Peringkat Profil Risiko Bank Melon ditetapkan 2 karena Risiko Inheren dinilai Moderate sementara KPMR dinilai Fair",
      "KPMR Bank Jeruk dinilai Satisfactory sementara Risiko Inheren dinilai Moderate to High sehingga peringkat Profil Risiko ditetapkan 3",
      "Risiko Inheren Bank Apel dinilai Low to Moderate sementara KPMR dinilai Fair sehingga peringkat Profil Risiko ditetapkan 2",
      "Peringkat Profil Risiko Bank Nanas ditetapkan 3 karena KPMR dinilai Marginal sementara Risiko Inheren dinilai Low to Moderate"
    ],
    "answer": "Peringkat Profil Risiko Bank Melon ditetapkan 2 karena Risiko Inheren dinilai Moderate sementara KPMR dinilai Fair"
  },
  {
    "id": 833,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini pernyataan yang tidak benar terkait Penggabungan/Peleburan adalah:",
    "options": [
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang sama",
      "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional",
      "Penggabungan/Peleburan dapat dilakukan antar BPR yang berkedudukan dalam wilayah provinsi yang berbeda sepanjang kantor-kantor BPR hasil Penggabungan/Peleburan berlokasi dalam wilayah provinsi yang sama",
      "Penggabungan/Peleburan hanya dapat dilakukan antar BPR"
    ],
    "answer": "Penggabungan/Peleburan antara BPR konvensional dengan BPR berdasarkan prinsip syariah hanya dapat dilakukan apabila BPR hasil Penggabungan/Peleburan tetap menjadi BPR konvensional"
  },
  {
    "id": 834,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dalam rangka koordinasi OJK dengan LPS, dilakukan koordinasi setiap",
    "options": [
      "Triwulanan",
      "Bulanan dan triwulanan",
      "Bulanan",
      "Bulanan atau triwulanan"
    ],
    "answer": "Bulanan dan triwulanan"
  },
  {
    "id": 835,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Penanganan Tindak Pidana Perbankan yang dilakukan oleh Departemen Pemeriksaan Khusus Perbankan (DRKP) mencakup",
    "options": [
      "Semuanya benar",
      "Memberikan pendapat sebagai ahli untuk membuat jelas suatu perkara",
      "Memberikan rekomendasi langkah-langkah pengawasan dan pembinaan kepada pengawas.",
      "Melakukan pemeriksaan khusus tipibank terhadap penyimpangan ketentuan perbankan yang berindikasi tindak pidana perbankan"
    ],
    "answer": "Semuanya benar"
  },
  {
    "id": 836,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tata cara pemisahan Unit Usaha Syariah yang benar adalah:",
    "options": [
      "Pemisahan Unit Usaha Syariah dengan cara pendirian BUS dan Pemisahan Unit Usaha Syariah dengan cara pengalihan hak dan kewajiban Unit Usaha Syariah kepada BUS.",
      "Pemisahan Unit Usaha Syariah dengan cara mengalihkan hak dan kewajiban Unit Usaha Syariah kepada BUK Induk dan Pemisahan Unit Usaha Syariah dengan cara pendirian BUS.",
      "Pemisahan Unit Usaha Syariah dengan cara mengalihkan hak dan kewajiban Unit Usaha Syariah kepada BUS dan Pemisa"
    ],
    "answer": "Pemisahan Unit Usaha Syariah dengan cara pendirian BUS dan Pemisahan Unit Usaha Syariah dengan cara pengalihan hak dan kewajiban Unit Usaha Syariah kepada BUS."
  },
  {
    "id": 837,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut ini merupakan pihak utama pada LPIP, yaitu:",
    "options": [
      "Manajer Investasi dan Anggota Dewan Komisaris",
      "Pelaksana Tugas Pengurus, Auditor Internal dan Anggota Direksi",
      "Anggota Direksi, Anggota Dewan Komisaris dan Anggota Dewan Pengawas Syariah",
      "Anggota Dewan Pengawas Syariah dan Anggota Direksi",
      "Anggota Direksi dan Anggota Dewan Komisaris"
    ],
    "answer": "Anggota Direksi dan Anggota Dewan Komisaris"
  },
  {
    "id": 838,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dasar Hukum Pengawasan Perbankan oleh OJK adalah",
    "options": [
      "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023",
      "Undang-Undang Nomor 4 tahun 2022",
      "Undang-Undang Nomor 4 tahun 2011 dan Undang-Undang Nomor 21 tahun 2023",
      "Undang-Undang Nomor 22 tahun 2011 dan Undang-Undang Nomor 4 tahun 2022"
    ],
    "answer": "Undang-Undang Nomor 21 tahun 2011 dan Undang-Undang Nomor 4 tahun 2023"
  },
  {
    "id": 839,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Bobot risiko untuk aset produktif dengan sumber dana Profit Sharing Investment Account (PSIA) yaitu:",
    "options": [
      "100%",
      "1%",
      "400%",
      "300%"
    ],
    "answer": "1%"
  },
  {
    "id": 840,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "BPR Syariah yang memiliki modal inti kurang dari Rp50 miliar wajib menerapkan manajemen risiko paling sedikit meliputi risiko:",
    "options": [
      "Kredit, operasional, reputasi, dan strategi",
      "Kredit, operasional, kepatuhan, dan likuiditas",
      "Kredit, operasional, kepatuhan, likuiditas, dan strategi",
      "Kredit, operasional, kepatuhan, likuiditas, reputasi, dan strategi"
    ],
    "answer": "Kredit, operasional, kepatuhan, dan likuiditas"
  },
  {
    "id": 841,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jenis Fokus Pengawasan yang terdapat pada Supervisory Plan adalah",
    "options": [
      "Fokus Pengawasan Utama, Fokus Pengawasan Tambahan, Fokus Pengawasan Lainnya",
      "Fokus Pengawasan Utama, Fokus Pengawasan Sekunder, Fokus Pengawasan Tambahan",
      "Fokus Pengawasan Utama, Fokus Pengawasan Sekunder, Fokus Pengawasan Lainnya",
      "Fokus Pengawasan Pertama, Fokus Pengawasan Kedua, Fokus Pengawasan Ketiga"
    ],
    "answer": "Fokus Pengawasan Utama, Fokus Pengawasan Sekunder, Fokus Pengawasan Lainnya"
  },
  {
    "id": 842,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Yang tidak termasuk jenis risiko yang spesifik wajib dikelola oleh BPR adalah:",
    "options": [
      "Operasional",
      "Kredit",
      "Likuiditas",
      "Pasar"
    ],
    "answer": "Pasar"
  },
  {
    "id": 843,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Perizinan kelembagaan yang hanya terdapat di sektor perbankan Syariah, yaitu:",
    "options": [
      "Integrasi",
      "Konsolidasi",
      "Konversi",
      "Akuisisi"
    ],
    "answer": "Konversi"
  },
  {
    "id": 844,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Aplikasi OJK yang digunakan untuk melakukan Pendaftaran Akuntan Publik / Kantor Akuntan Publik di OJK:",
    "options": [
      "SIPUTRI",
      "SIELOG",
      "SPRINT",
      "SIPO",
      "SLIK"
    ],
    "answer": "SPRINT"
  },
  {
    "id": 845,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "BPR ditetapkan Dalam Status Pengawasan Khusus (DPK) dengan jangka waktu 2 bulan apabila memenuhi kriteria:",
    "options": [
      "Rasio KPMM sama dengan atau kurang dari 8% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau lebih dari 1%",
      "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%",
      "Rasio KPMM lebih dari 2% namun kurang dari 8% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau lebih dari 1%",
      "Rasio KPMM sama dengan atau lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%"
    ],
    "answer": "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%"
  },
  {
    "id": 846,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pasal 49 UU Perbankan atau Pasal 63 UU Perbankan Syariah mengatur mengenai tindak pidana yang berkaitan dengan",
    "options": [
      "Perizinan.",
      "Rahasia Bank.",
      "Pengawasan Bank.",
      "Kegiatan Usaha Bank."
    ],
    "answer": "Kegiatan Usaha Bank."
  },
  {
    "id": 847,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Komponen Know Your BPR/BPRS (KYBPR/BPRS):",
    "options": [
      "Bisnis Utama dan Infrastruktur Pendukung",
      "Kelembagaan dan Organisasi",
      "Semua benar",
      "Perkembangan Kinerja"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 848,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jenis jaringan kantor dalam POJK Bank Umum disederhanakan. Adapun yang melandasi aturan ini antara lain kecuali:",
    "options": [
      "perkembangan transformasi strategi bisnis Bank ke arah digital.",
      "perkembangan tren jaringan kantor dan bisnis Bank terkini.",
      "tren penambahan jenis jaringan kantor fisik Bank yang sesuai dengan rencana korporasi Bank.",
      "penataan strategi jaringan distribusi oleh Bank."
    ],
    "answer": "tren penambahan jenis jaringan kantor fisik Bank yang sesuai dengan rencana korporasi Bank."
  },
  {
    "id": 849,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dalam rangka Pengalihan fungsi pengawasan dan perizinan LJK Daerah dilakukan secara hati hati dan memperhatikan aspek tata kelola yang baik, sehingga tidak terjadi penurunan kualitas pengawasan dan perizinan pasca pengalihan kepada Kantor OJK, oleh karena itu diperlukan protokol pengalihan pengawasan Sektor Jasa Keuangan Daerah, dengan tahapan:",
    "options": [
      "Penyampaian dokumen serah terima, Transisi, BAST dan Pasca Pengalihan",
      "Penyampaian informasi, Transisi, BAST dan Pasca Pengalihan",
      "Persiapan, Transisi, Pelaksanaan Workshop dan Pasca Pengalihan",
      "Persiapan, Transisi, BAST dan Pasca Pengalihan"
    ],
    "answer": "Persiapan, Transisi, BAST dan Pasca Pengalihan"
  },
  {
    "id": 850,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini yang bukan termasuk dalam komponen penilaian KPMR pada Risiko Likuiditas adalah:",
    "options": [
      "Teknologi informasi dan infrastruktur pendukung",
      "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit",
      "Penetapan pihak yang independen untuk melakukan pengujian dan validasi model pengukuran risiko dan pricing model secara berkala",
      "Komposisi dari aset, liabilitas, dan transaksi rekening administratif"
    ],
    "answer": "Kecukupan pengendalian internal terhadap manajemen risiko likuiditas yang dilakukan oleh risk taking unit"
  },
  {
    "id": 851,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Kegiatan usaha yang berasaskan Prinsip Syariah yaitu kegiatan usaha yang tidak mengandung unsur sebagai berikut, kecuali",
    "options": [
      "Maisir",
      "Istishna",
      "Riba",
      "Zalim"
    ],
    "answer": "Istishna"
  },
  {
    "id": 852,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:",
    "options": [
      "Meningkatkan fungsi intermediasi",
      "Meningkatkan fungsi Pengawasan Bank",
      "Meningkatkan fungsi Surveilans",
      "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis"
    ],
    "answer": "Meningkatkan fungsi intermediasi"
  },
  {
    "id": 853,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini yang termasuk dalam produk dasar bagi BPR, kecuali:",
    "options": [
      "Bancassurance model bisnis referensi.",
      "Layanan safe deposit box.",
      "Pemindahan atau transfer dana baik untuk kepentingan sendiri maupun kepentingan nasabah.",
      "Simpanan berupa tabungan dan/atau deposito berjangka dan pinjaman atau pembiayaan yang diterima."
    ],
    "answer": "Bancassurance model bisnis referensi."
  },
  {
    "id": 854,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Indikator PMK adalah indikator yang memberikan gambaran mengenai kondisi sektor Perbankan dan digunakan sebagai alat bantu untuk melakukan analisis dalam menentukan status Tekanan. Kriteria untuk pemenuhannya, kecuali:",
    "options": [
      "Early Warning dan/atau coincident indicators",
      "Best Practices",
      "Economic Relevance",
      "Internal Information"
    ],
    "answer": "Internal Information"
  },
  {
    "id": 855,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Pembiayaan Rakyat Syariah terdiri dari:",
    "options": [
      "PSAK",
      "SAK ETAP dan PSAK Syariah",
      "SAK ETAP",
      "PSAK Syariah"
    ],
    "answer": "SAK ETAP dan PSAK Syariah"
  },
  {
    "id": 856,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tujuan analisis peer group pada BPeR:",
    "options": [
      "Untuk menggabungkan BPR/BPRS dalam kelompok yang seragam",
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer groupnya",
      "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan Bank Umum",
      "Untuk menganalisis rasio BPR/BPRS secara individual"
    ],
    "answer": "Untuk melihat posisi relatif BPR/BPRS dibandingkan dengan BPR/BPRS lain dalam peer groupnya"
  },
  {
    "id": 857,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berapa modal inti minimum yang harus dipenuhi BPR/S untuk dapat melakukan penawaran umum efek melalui pasar modal?",
    "options": [
      "Rp80 miliar",
      "Rp100 miliar",
      "Rp25 miliar",
      "Rp50 miliar"
    ],
    "answer": "Rp80 miliar"
  },
  {
    "id": 858,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Rasio KPMM berdasarkan profil risiko yang harus dipenuhi bank yaitu:",
    "options": [
      "11% s.d. 14% untuk profil risiko peringkat 5",
      "10% s.d. <11% untuk profil risiko peringkat 4",
      "8% untuk profil risiko peringkat 2",
      "9% s.d. <10% untuk profil risiko peringkat 3"
    ],
    "answer": "11% s.d. 14% untuk profil risiko peringkat 5"
  },
  {
    "id": 859,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Indikator yang menunjukkan hubungan antara sektor yang membutuhkan input produksi dari sektor lain, dikenal sebagai indikator:",
    "options": [
      "Intermediary-Linkage",
      "Forward-Linkage",
      "Tidak ada yang benar",
      "Backward-Linkage"
    ],
    "answer": "Backward-Linkage"
  },
  {
    "id": 860,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pernyataan di bawah ini adalah benar mengenai ketentuan Pengurus Bank Syariah, kecuali:",
    "options": [
      "Jumlah anggota direksi BUS minimal 3 orang",
      "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris",
      "Jumlah anggota dewan komisaris BUS minimal 3 orang dan maksimal sama dengan jumlah anggota direksi",
      "Jumlah anggota direksi BPRS minimal 2 orang"
    ],
    "answer": "Jumlah anggota direksi BUS minimal 3 orang dan maksimal sama dengan jumlah anggota dewan komisaris"
  },
  {
    "id": 861,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut merupakan karakteristik dari simpanan wadiah, kecuali:",
    "options": [
      "Bisa diambil sewaktu-waktu atau sesuai kesepakatan",
      "Pemberian imbalan/bonus tergantung kebijakan Bank",
      "Tidak ada imbalan/bonus",
      "Bonus diperjanjikan di awal"
    ],
    "answer": "Bonus diperjanjikan di awal"
  },
  {
    "id": 862,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "KOJK berperan sebagai fasilitator komunikasi antara pemangku kepentingan terkait dalam program pengembangan ekonomi daerah. Dengan demikian, dalam melakukan penetapan keunggulan daerah, KOJK juga perlu memastikan keselarasan hasil pemetaan internal KOJK dengan inisiatif pemerintah. Adapun acuan program/inisiatif/rencana pemerintah dapat mengacu pada:",
    "options": [
      "Visi Indonesia Emas 2045",
      "Ketetapan Kementerian/Pemerintah Daerah",
      "Rencana Jangka Panjang Menengah Nasional",
      "Semua benar"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 863,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tujuan dilakukannya penilaian kemampuan dan kepatutan adalah untuk menciptakan sistem perbankan yang sehat, antara lain, kecuali:",
    "options": [
      "Berkontribusi pada pertumbuhan perekonomian nasional",
      "Meningkatkan rasio Non Performing Loan",
      "Memiliki daya tahan",
      "Mampu berkembang"
    ],
    "answer": "Meningkatkan rasio Non Performing Loan"
  },
  {
    "id": 864,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Anggota Komite Tata Kelola Terintegrasi adalah sebagai berikut, kecuali:",
    "options": [
      "Komisaris Independen yang mewakili dan ditunjuk dari LJK dalam Konglomerasi Keuangan",
      "Seorang Pihak Independen",
      "Perwakilan Komisaris dari salah satu LJK, yang memiliki posisi sebagai perwakilan dari Pemegang Saham",
      "Komisaris Independen yang menjadi ketua pada salah satu komite pada Entitas Utama"
    ],
    "answer": "Perwakilan Komisaris dari salah satu LJK, yang memiliki posisi sebagai perwakilan dari Pemegang Saham"
  },
  {
    "id": 865,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini merupakan prinsip perbankan syariah berdasarkan Undang-Undang Nomor 21 Tahun 2008, kecuali:",
    "options": [
      "Demokrasi ekonomi",
      "Prinsip Syariah",
      "Prinsip kehati-hatian",
      "Prinsip sosial"
    ],
    "answer": "Prinsip sosial"
  },
  {
    "id": 866,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Kapan laporan pelaksanaan dan pengawasan RBB harus disampaikan?",
    "options": [
      "Paling lambat 1 bulan setelah semester berakhir",
      "Setiap kuartal",
      "Akhir tahun",
      "Setiap minggu"
    ],
    "answer": "Paling lambat 1 bulan setelah semester berakhir"
  },
  {
    "id": 867,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jenis laporan yang perlu disampaikan oleh KOJK terkait dengan pelaksanaan PED adalah, kecuali:",
    "options": [
      "Laporan Pemantauan Realisasi Program Triwulanan",
      "Laporan Pemantauan Pelaksanaan PED Bulanan",
      "Laporan Pelaksanaan FGD Daerah",
      "Kajian Pemetaan Kondisi Ekonomi serta pemetaan potensi dan perusahaan terkait"
    ],
    "answer": "Laporan Pemantauan Pelaksanaan PED Bulanan"
  },
  {
    "id": 868,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Produk kredit yang biasanya digunakan untuk membiayai pembelian properti seperti rumah atau apartemen adalah?",
    "options": [
      "Kredit Kepemilikan Rumah (KPR)",
      "Kredit Multiguna",
      "Kredit Modal Kerja",
      "Kredit Konsumsi"
    ],
    "answer": "Kredit Kepemilikan Rumah (KPR)"
  },
  {
    "id": 869,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Perbuatan berikut yang bukan merupakan PKP yang memiliki indikasi tipibank karena menyalahgunakan Aset adalah",
    "options": [
      "Pelanggaran Cease and Desist Order (CDO).",
      "Rekayasan setoran dan penarikan rekening Antar Bank Aktiva (ABA).",
      "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.",
      "Penempatan/Investasi/Penyertaan Dana Bank"
    ],
    "answer": "Pelanggaran Cease and Desist Order (CDO)."
  },
  {
    "id": 870,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Kriteria yang diperlukan oleh penyusun laporan keuangan untuk memastikan integritas laporan keuangan antara lain, kecuali:",
    "options": [
      "Mengikuti pelatihan/sertifikasi yang relevan dengan penyusunan keuangan",
      "Memperbaharui kompetensi sesuai dengan perkembangan kompleksitas dan kegiatan usaha bank",
      "Dapat menetapkan judgment akuntansi hanya berdasarkan arahan manajemen",
      "Memahami standar akuntansi keuangan"
    ],
    "answer": "Dapat menetapkan judgment akuntansi hanya berdasarkan arahan manajemen"
  },
  {
    "id": 871,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Modal disetor yang dipersyaratkan untuk pendirian BUS yang akan menjadi anak dalam struktur kelompok usaha bank adalah sebesar:",
    "options": [
      "Rp 500.000.000.000,00 (lima ratus miliar rupiah)",
      "Rp 1.000.000.000.000,00 (satu triliun rupiah)",
      "Rp 10.000.000.000.000,00 (sepuluh triliun rupiah)",
      "Rp 3.000.000.000.000,00 (tiga triliun rupiah)"
    ],
    "answer": "Rp 1.000.000.000.000,00 (satu triliun rupiah)"
  },
  {
    "id": 872,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Penambahan modal disetor yang berasal dari hasil pembagian dividen BPR atau BPR Syariah yang bersangkutan, dilengkapi dengan dokumen",
    "options": [
      "Mutasi rekening 6 (enam) bulan terakhir.",
      "Salinan akta hibah dan/atau dokumen waris.",
      "Bukti pembukuan setoran modal berupa jurnal pembagian dividen serta laporan posisi keuangan BPR atau BPR Syariah sebelum dan sesudah pembagian dividen.",
      "Bukti transaksi jual beli, antara lain salinan akta atau perjanjian jual beli"
    ],
    "answer": "Bukti pembukuan setoran modal berupa jurnal pembagian dividen serta laporan posisi keuangan BPR atau BPR Syariah sebelum dan sesudah pembagian dividen."
  },
  {
    "id": 873,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tahapan analisis BPeR yaitu:",
    "options": [
      "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kualitatif, Perumusan Kesimpulan",
      "Analisis Rasio Utama, Analisis Kualitatif, Analisis Terintegrasi, Perumusan Kesimpulan",
      "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kewajaran Rasio, Perumusan Kesimpulan",
      "Analisis Rasio Signifikan, Analisis Rasio Pendukung, Analisis Kewajaran Rasio, Perumusan Kesimpulan"
    ],
    "answer": "Analisis Rasio Utama, Analisis Rasio Pendukung, Analisis Kewajaran Rasio, Perumusan Kesimpulan"
  },
  {
    "id": 874,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Bagi Dana Pensiun yang berbentuk perusahaan publik, penggunaan jasa dari AP yang sama dibatasi",
    "options": [
      "7 tahun berturut turut",
      "5 tahun kumulatif",
      "5 tahun berturut-turut",
      "7 tahun kumulatif"
    ],
    "answer": "7 tahun kumulatif"
  },
  {
    "id": 875,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Definisi dari Lembaga Pengelola Informasi Perkreditan (LPIP) menurut POJK Nomor 5/POJK.03/2022 tentang Lembaga Pengelola Informasi Perkreditan, yaitu:",
    "options": [
      "Lembaga pemeringkat yang menghimpun dan menyalurkan dana kepada masyarakat",
      "Lembaga pemeringkat yang menghimpun dan menyalurkan data rahasia kepada masyarakat",
      "Lembaga pemeringkat yang berutas untuk menjamin simpanan nasabah di bank dan menjaga stabilitas sistem keuangan nasional",
      "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan",
      "Lembaga pemeringkat yang bertugas untuk menilai dan memberikan peringkat terhadap risiko kredit dari suatu entitas, seperti perusahaan, pemerintah, atau instrumen keuangan"
    ],
    "answer": "Lembaga pemeringkat yang menghimpun dan mengolah data kredit atau pembiayaan dan data lain untuk menghasilkan informasi perkreditan"
  },
  {
    "id": 876,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut ini adalah aplikasi produk yang tepat dari konsep dasar bank syariah dalam penyaluran dana, dimana bank berfungsi sebagai investor/financing provider, kecuali:",
    "options": [
      "Pembiayaan Prinsip Sewa (Ijarah, Ijarah Muntahiya Bil at-Tamlik)",
      "Pembiayaan Prinsip Jasa (Qardh, Wakaf)",
      "Pembiayaan Prinsip Jual Beli (Murabahah, Salam, Istishna)",
      "Pembiayaan Prinsip Bagi Hasil (Mudharabah, Musyarakah)"
    ],
    "answer": "Pembiayaan Prinsip Jasa (Qardh, Wakaf)"
  },
  {
    "id": 877,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut adalah informasi yang wajib diumumkan oleh Bank sesuai POJK tentang Transparansi dan Publikasi Laporan Bank, kecuali:",
    "options": [
      "Suku bunga dasar kredit",
      "Rencana bisnis bank",
      "Informasi/fakta material",
      "Eksposur risiko dan permodalan"
    ],
    "answer": "Rencana bisnis bank"
  },
  {
    "id": 878,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Dalam menetapkan bank sistemik, Otoritas Jasa Keuangan menyusun metodologi penetapan Bank Sistemik menggunakan indicator antara lain, kecuali:",
    "options": [
      "Keterkaitan dengan sistem keuangan",
      "Tingkat Kesehatan bank",
      "Kompleksitas transaksi",
      "Ukuran bank"
    ],
    "answer": "Tingkat Kesehatan bank"
  },
  {
    "id": 879,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini yang bukan merupakan prinsip penerapan tata kelola yang baik di bank sebagaimana diatur dalam POJK 17 Tahun 2023 adalah:",
    "options": [
      "Keterbukaan",
      "Tanggung jawab",
      "Kewajaran",
      "Keberlanjutan"
    ],
    "answer": "Keberlanjutan"
  },
  {
    "id": 880,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut ini merupakan pihak yang termasuk kategori perusahaan offtaker, kecuali:",
    "options": [
      "Marketplace",
      "Eksportir",
      "Supplier",
      "Pabrik pengolahan"
    ],
    "answer": "Supplier"
  },
  {
    "id": 881,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Hal-hal berikut yang tidak termasuk dalam karakteristik perlunya dilakukan Klarifikasi:",
    "options": [
      "Terdapat informasi negatif mengenai calon Pihak Utama",
      "Calon Pihak Utama pernah ditetapkan tidak disetujui dalam pencalonan sebelumnya",
      "Calon Pihak Utama beralih menjadi Pejabat Eksekutif bank pada bank dengan buku yang lebih tinggi",
      "Calon Pihak Utama belum mempunyai pengalaman pada Lembaga Jasa Keuangan (LJK) di Indonesia yang relevan dengan jabatan yang dituju dan mempertimbangkan posisi jabatan, ukuran, kompleksitas, dan/atau permasalahan LJK tempat yang bersangkutan akan dicalonkan"
    ],
    "answer": "Calon Pihak Utama beralih menjadi Pejabat Eksekutif bank pada bank dengan buku yang lebih tinggi"
  },
  {
    "id": 882,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Struktur dan kedudukan; tugas dan tanggung jawab; wewenang; serta pertanggungjawaban dari SKAI dituangkan bank dalam",
    "options": [
      "Kerangka acuan audit intern",
      "Kerangka kerja audit intern",
      "Pedoman audit intern",
      "Piagam audit intern"
    ],
    "answer": "Piagam audit intern"
  },
  {
    "id": 883,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jangka waktu penyelesaian Pembukaan Jaringan Kantor Bank BHI dan KCBLN adalah:",
    "options": [
      "14 hari kerja",
      "30 hari kerja",
      "30 hari",
      "14 hari"
    ],
    "answer": "14 hari kerja"
  },
  {
    "id": 884,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Apakah implikasi ekonomi dari dilarangnya aktivitas Riba (interest base activities), Maisir (speculative motive) dan Gharar (unclear information), kecuali:",
    "options": [
      "No/less money creation & whirlpool/money concentration (bubble economy)",
      "Stabilitas sistem keuangan",
      "Krisis moneter",
      "Ketimpangan sektor riil dan keuangan"
    ],
    "answer": "Krisis moneter"
  },
  {
    "id": 885,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Berikut ini merupakan landasan utama penyelenggaraan Program Pengembangan Ekonomi Daerah (PED):",
    "options": [
      "Stabilitas LJK",
      "Literasi Keuangan",
      "Pelindungan Konsumen",
      "Semua benar"
    ],
    "answer": "Semua benar"
  },
  {
    "id": 886,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Bank umum dapat menggunakan insentif berupa instant approval (permohonan izin dalam bentuk pemberitahuan) dalam hal telah memenuhi kriteria:",
    "options": [
      "Profil risiko dengan penilaian 1 atau 2, serta TI memadai",
      "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai",
      "Tingkat kesehatan dengan penilaian 1 atau 2, serta TI memadai",
      "Profil risiko, KPMR, dan GCG dengan penilaian 1 atau 2, serta TI memadai"
    ],
    "answer": "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai"
  },
  {
    "id": 887,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Pada produk tabungan dengan menggunakan akad mudharabah, Bank Syariah bertindak sebagai:",
    "options": [
      "Shahibul Mal",
      "Tsaman",
      "Mudharib",
      "Ra sul Mal"
    ],
    "answer": "Mudharib"
  },
  {
    "id": 888,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Organisasi Pemantauan Sektor Perbankan (PMK) terdapat 3 (tiga) unsur anggotanya:",
    "options": [
      "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Focal Point OJK",
      "Focal Point OJK, Koordinator Pemantauan OJK Wide, dan Seluruh Satuan Kerja Pengawas",
      "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan",
      "Focal Point OJK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan"
    ],
    "answer": "Sekretariat PMK, Koordinator Pemantauan Sektor Perbankan, dan Satuan Kerja Pengawas Sektor Perbankan"
  },
  {
    "id": 889,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Tujuan utama pembentukan Bank Perantara oleh LPS adalah:",
    "options": [
      "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan",
      "Meningkatkan literasi keuangan Masyarakat",
      "Menggantikan fungsi Bank Indonesia dalam pengawasan",
      "Melikuidasi seluruh aset bank yang gagal secara langsung"
    ],
    "answer": "Menjaga kelangsungan sebagian fungsi intermediasi dan stabilitas sistem keuangan"
  },
  {
    "id": 890,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Siapa yang wajib memberikan rekomendasi dalam usulan penunjukan AP dan/atau KAP",
    "options": [
      "Direksi",
      "Akuntan Internal",
      "Komite Audit",
      "Pemegang saham"
    ],
    "answer": "Komite Audit"
  },
  {
    "id": 891,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Modal disetor pendirian Bank Umum Syariah baru yaitu sebesar:",
    "options": [
      "Rp10 triliun",
      "Rp20 triliun",
      "Rp1 triliun",
      "Rp5 triliun"
    ],
    "answer": "Rp10 triliun"
  },
  {
    "id": 892,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Undang-undang yang menjadi dasar perbankan syariah yaitu:",
    "options": [
      "UU Nomor 10 tahun 1998",
      "UU Nomor 21 tahun 2011",
      "UU Nomor 21 tahun 2008",
      "UU Nomor 11 tahun 2008"
    ],
    "answer": "UU Nomor 21 tahun 2008"
  },
  {
    "id": 893,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Batas waktu penyusunan Supervisory Plan sesuai dengan SEDK Nomor 3/SEDK.03/2023 tentang Pedoman Pengawasan Bank Berdasarkan Risiko Untuk Tahapan Perencanaan Pengawasan adalah",
    "options": [
      "15 Januari tahun pelaksanaan",
      "15 Desember sebelum tahun pelaksanaan",
      "30 November sebelum tahun pelaksanaan",
      "31 Desember sebelum tahun pelaksanaan"
    ],
    "answer": "15 Desember sebelum tahun pelaksanaan"
  },
  {
    "id": 894,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Aspek yang dianalisis dalam proses perizinan Dewan Pengawas Syariah yaitu, kecuali:",
    "options": [
      "Reputasi keuangan",
      "Integritas",
      "Kompetensi",
      "Mazhab/Haluan hukum fikih"
    ],
    "answer": "Mazhab/Haluan hukum fikih"
  },
  {
    "id": 895,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Life cycle Bank pada siklus pengawasan adalah:",
    "options": [
      "Perizinan, Pengembangan, Operasional",
      "Pendirian, Pengawasan, Exit Policy",
      "Pendirian, Pengawasan, Likuidasi",
      "Perizinan, Pengawasan, Exit Policy"
    ],
    "answer": "Perizinan, Pengawasan, Exit Policy"
  },
  {
    "id": 896,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Jangka waktu penetapan hasil penilaian kemampuan dan kepatutan dari OJK paling lama",
    "options": [
      "60 (enam puluh) hari kerja setelah penilaian kemampuan dan kepatutan dilakukan",
      "30 (tiga puluh) hari kerja setelah penilaian kemampuan dan kepatutan dilakukan",
      "30 (tiga puluh) hari kerja setelah seluruh dokumen permohonan diterima secara lengkap",
      "60 (enam puluh) hari kerja setelah seluruh dokumen permohonan diterima secara lengkap"
    ],
    "answer": "30 (tiga puluh) hari kerja setelah seluruh dokumen permohonan diterima secara lengkap"
  },
  {
    "id": 897,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Di bawah ini yang bukan termasuk dalam komponen penerapan tata kelola yang baik sebagaimana diatur dalam POJK 17 2023 adalah:",
    "options": [
      "Integritas pelaporan dan sistem informasi teknologi",
      "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud",
      "Penerapan manajemen risiko termasuk sistem pengendalian intern",
      "Penyediaan dana kepada pihak terkait penyediaan dana besar"
    ],
    "answer": "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud"
  },
  {
    "id": 898,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Penilaian kondisi BPR dan BPRS yang dilakukan terhadap faktor profil risiko, tata kelola, rentabilitas, dan permodalan BPR dan BPRS merupakan tahapan siklus pengawasan BPR/BPRS tahapan:",
    "options": [
      "Tindakan Pengawasan dan Pemantauan (Supervisory Actions and Monitoring)",
      "Pemeriksaan Berdasarkan Risiko",
      "Perencanaan Pengawasan (Supervisory Plan)",
      "Penilaian Profil Risiko dan Kinerja BPR atau BPRS"
    ],
    "answer": "Penilaian Profil Risiko dan Kinerja BPR atau BPRS"
  },
  {
    "id": 899,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Kondisi ekonomi daerah dapat dicerminkan melalui indikator berikut, kecuali:",
    "options": [
      "Rasio Gini",
      "PDRB per kapita",
      "Indeks Pembangunan Manusia",
      "Tingkat suku bunga"
    ],
    "answer": "Tingkat suku bunga"
  },
  {
    "id": 900,
    "version": 10,
    "category": "Regulasi dan Pengawasan Perbankan",
    "question": "Kantor OJK Provinsi Jawa Tengah membawahi wilayah:",
    "options": [
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Malang, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Kediri",
      "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Jember, Kantor OJK Solo, dan Kantor OJK Tegal"
    ],
    "answer": "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal"
  }
 
];
























