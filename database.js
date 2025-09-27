// Berkas ini hanya berisi daftar soal untuk kuis.
// Untuk menambah atau mengubah soal, cukup edit di file ini.

const questions = [
  {
    id: 1,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Regulasi & Pengawasan",
    question: "Batas waktu penyampaian LKPJ adalah:",
    options: ["15 November", "5 April", "15 Juli", "15 April"],
    answer: "15 April",
  },
  {
    id: 4,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Perkreditan",
    question:
      "Informasi berikut ada dalam laporan debitur yang disampaikan Pelapor, kecuali:",
    options: ["Penjamin", "Media sosial debitur", "Agunan", "Fasilitas penyediaan dana"],
    answer: "Media sosial debitur",
  },
  {
    id: 8,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Produk & Layanan Bank",
    question:
      "Permohonan izin atas produk bank lanjutan, untuk Bank Umum, dilakukan melalui...",
    options: ["SPRINT", "OBOX", "SIPENA", "APOLO"],
    answer: "SPRINT",
  },
  {
    id: 12,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Bobot risiko untuk aset produktif dengan sumber dana Profit Sharing Investment Account (PSIA) yaitu:",
    options: ["1%", "400%", "100%", "300%"],
    answer: "1%",
  },
  {
    id: 17,
    paket: 1,
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
    paket: 1,
    category: "BPR & BPRS",
    question:
      "Yang tidak termasuk jenis risiko yang spesifik wajib dikelola oleh BPR adalah:",
    options: ["Likuiditas", "Pasar", "Operasional", "Kredit"],
    answer: "Pasar",
  },
  {
    id: 19,
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Penilaian Kemampuan dan Kepatutan diberlakukan bagi pihak yang mengajukan diri untuk menduduki posisi sebagai berikut di bank syariah, kecuali:",
    options: ["Direksi", "Pengawas Syariah", "Komisaris", "Pemegang Saham Pengendali"],
    answer: "Pengawas Syariah",
  },
  {
    id: 20,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Kelembagaan",
    question:
      "Jangka waktu penyelesaian Pembukaan Jaringan Kantor Bank BHI dan KCBLN adalah:",
    options: ["30 hari kerja", "30 hari", "14 hari", "14 hari kerja"],
    answer: "14 hari kerja",
  },
  {
    id: 34,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Pengalihan Pengawasan Lembaga Jasa Keuangan Bidang Perasuransian, Penjaminan, dan Dana Pensiun (PPDP), direncanakan telah dilakukan pada bulan:",
    options: ["Agustus 2024", "Oktober 2024", "September 2024", "November 2024"],
    answer: "September 2024",
  },
  {
    id: 42,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Konglomerasi Keuangan",
    question:
      "Setelah memenuhi kondisi sebagai Konglomerasi Keuangan yang wajib membentuk PIKK Nonoperasional, PSP dan/atau PSPT wajib menyampaikan dokumen rencana pembentukan PIKK paling lambat:",
    options: ["6 bulan", "9 bulan", "1 tahun", "3 bulan"],
    answer: "6 bulan",
  },
  {
    id: 51,
    paket: 1,
    category: "Produk & Layanan Bank",
    question:
      "Produk yang memberikan akses ke dana dengan batas kredit tertentu dan membayar bunga atas saldo yang digunakan adalah",
    options: ["Kredit", "Tabungan", "Deposito", "Kartu Kredit"],
    answer: "Kartu Kredit",
  },
  {
    id: 52,
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Anggota DPS hanya dapat merangkap jabatan sebagai anggota DPS paling banyak pada:",
    options: [
      "2 (dua) lembaga keuangan syariah lain",
      "4 (empat) bank syariah lain",
      "2 (dua) bank syariah lain",
      "4 (empat) lembaga keuangan syariah lain",
    ],
    answer: "4 (empat) bank syariah lain",
  },
  {
    id: 53,
    paket: 1,
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
    paket: 1,
    category: "Kelembagaan",
    question: "Tahapan pencabutan izin usaha atas permintaan pemegang saham adalah:",
    options: [
      "Persetujuan persiapan dan persetujuan pencabutan izin usaha",
      "Persetujuan persiapan dan persetujuan penutupan",
      "Persetujuan prinsip dan persetujuan penutupan",
      "Persetujuan prinsip dan persetujuan pencabutan izin usaha",
    ],
    answer: "Persetujuan prinsip dan persetujuan pencabutan izin usaha",
  },
  {
    id: 55,
    paket: 1,
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
    paket: 1,
    category: "Regulasi & Pengawasan",
    question:
      "Yang bukan merupakan prinsip SMART dalam penyusunan Supervisory Plan adalah",
    options: ["Relevant", "Timely", "Measurable", "Strategy"],
    answer: "Strategy",
  },
  {
    id: 57,
    paket: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi, merupakan definisi dari aspek:",
    options: ["Aspek manajemen", "Aspek keberlanjutan", "Aspek perencanaan", "Aspek komprehensif"],
    answer: "Aspek komprehensif",
  },
  {
    id: 58,
    paket: 1,
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
    paket: 1,
    category: "Teknologi Informasi",
    question:
      "Pengaturan khusus mengenai penyelenggaraan layanan digital bagi bank umum diatur dalam ketentuan:",
    options: ["POJK 26 Tahun 2024", "POJK 11/POJK.03/2022", "POJK 12/POJK.03/2018", "POJK 21 Tahun 2023"],
    answer: "POJK 21 Tahun 2023",
  },
  {
    id: 60,
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Dalam transaksi jual beli dimana harus melalui proses pemesanan karena barangnya belum tersedia dan pembeli dapat membayar barang yang dibeli dikemudian hari, dapat diakomodir menggunakan akad:",
    options: ["Istishna", "Musyarakah", "Salam", "Ijarah"],
    answer: "Istishna",
  },
  {
    id: 61,
    paket: 1,
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
    paket: 1,
    category: "Regulasi & Pengawasan",
    question: "Kewajiban Penyediaan Modal Minimum dikecualikan bagi:",
    options: ["UUS", "BPRS dan UUS", "BPRS", "BUS"],
    answer: "UUS",
  },
  {
    id: 63,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Tata Kelola",
    question:
      "Di bawah ini yang bukan merupakan prinsip penerapan tata kelola yang baik di bank sebagaimana diatur dalam POJK 17 Tahun 2023 adalah:",
    options: ["Kewajaran", "Tanggung jawab", "Keberlanjutan", "Keterbukaan"],
    answer: "Keberlanjutan",
  },
  {
    id: 66,
    paket: 1,
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
    paket: 1,
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
      "Penyediaan modal UMKM melalui pembiayaan bersama yang dapat diakses secara online",
  },
  {
    id: 68,
    paket: 1,
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
    paket: 1,
    category: "BPR & BPRS",
    question:
      "POJK mana yang mengatur tentang Pengembangan Kualitas Sumber Daya Manusia BPR/Syariah?",
    options: ["POJK 27/2016", "POJK 34/2018", "POJK 7/2024", "POJK 19/2023"],
    answer: "POJK 34/2018",
  },
  {
    id: 70,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Perbankan Syariah",
    question: "Apakah yang dimaksud dengan Bank Syariah?",
    options: ["BUS, UUS, dan BPRS", "BUS", "BPRS", "BUS dan BPRS"],
    answer: "BUS dan BPRS",
  },
  {
    id: 75,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Laporan Keuangan yang digunakan untuk melaporkan penyaluran pembiayaan yang telah ditetapkan penggunaannya oleh pemilik dana (shahibul maal) adalah:",
    options: ["Laporan Investasi Terikat", "Neraca", "Laporan Investasi Tidak Terikat", "Laba Rugi"],
    answer: "Laporan Investasi Terikat",
  },
  {
    id: 81,
    paket: 1,
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
    paket: 1,
    category: "Pengembangan Ekonomi Daerah",
    question:
      "Kriteria keunggulan komoditas termasuk dalam top 5 produksi komoditas agrikultur nasional bertujuan untuk, kecuali:",
    options: [
      "Memberikan keyakinan kepada offtaker potensial yang bonafide",
      "Memberikan keyakinan komoditas memiliki basis di daerah",
      "Memberikan keyakinan ketersediaan pasar atas komoditas dimaksud",
      "Memberikan keyakinan ketersediaan suplai komoditas di daerah secara signifikan",
    ],
    answer: "Memberikan keyakinan kepada offtaker potensial yang bonafide",
  },
  {
    id: 83,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "BPR & BPRS",
    question:
      "Berikut merupakan jenis jaringan kantor BPR berdasarkan POJK 7 Tahun 2024, kecuali",
    options: ["Unit Layanan Keliling", "Kantor Wilayah", "Sentra Keuangan Khusus"],
    answer: "Unit Layanan Keliling",
  },
  {
    id: 86,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
    category: "Perbankan Syariah",
    question:
      "Kegiatan usaha yang berasaskan Prinsip Syariah yaitu kegiatan usaha yang tidak mengandung unsur sebagai berikut, kecuali",
    options: ["Maisir", "Istishna", "Riba", "Zalim"],
    answer: "Istishna",
  },
  {
    id: 97,
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    paket: 1,
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
    { id: 101, version: 2, category: "Pengawasan", question: "Berikut ini termasuk prinsip dalam penyusunan Integrated Supervisory Plan, kecuali:", options: ["Achievable", "Relevant", "Actual", "Specific"], answer: "Actual", explanation: "Prinsip perencanaan yang umum digunakan adalah SMART (Specific, Measurable, Achievable, Relevant, Timely). 'Actual' bukan bagian dari prinsip tersebut." },
    { id: 102, version: 2, category: "Pelaporan", question: "Bank X merupakan bagian dari kelompok usaha dari PT Y. Bank X memiliki anak perusahaan Bank A, PT B, dan PT C. Sehubungan dengan hal tersebut, Bank X wajib mengumumkan secara triwulanan laporan bagian dari kelompok usaha, yaitu laporan keuangan:", options: ["PT B", "Bank A", "Bank X", "PT Y"], answer: "Bank X", explanation: "Bank yang menjadi bagian dari kelompok usaha wajib mengumumkan laporan keuangan triwulanan individualnya secara terkonsolidasi dengan anak perusahaannya." },
    { id: 103, version: 2, category: "Perizinan", question: "Berapa jumlah minimal modal disetor untuk dapat mendirikan sebuah LPIP?", options: ["Paling sedikit Rp 150 miliar", "Paling sedikit Rp 100 miliar", "Paling sedikit Rp 200 miliar", "Paling sedikit Rp 50 miliar"], answer: "Paling sedikit Rp 200 miliar", explanation: "Pendirian Lembaga Penjaminan Infrastruktur dan Proyek (LPIP) memerlukan modal disetor minimum sebesar Rp 200 miliar untuk memastikan kapasitas penjaminan yang kuat." },
    { id: 104, version: 2, category: "Akuntansi", question: "Standar akuntansi keuangan terdiri dari, kecuali:", options: ["Standar akuntansi keuangan internasional", "Standar akuntansi keuangan entitas privat", "Standar akuntansi keuangan umum", "Standar profesional akuntan publik"], answer: "Standar profesional akuntan publik", explanation: "Standar Profesional Akuntan Publik (SPAP) adalah standar audit, bukan standar akuntansi keuangan yang mengatur penyusunan laporan keuangan." },
    { id: 105, version: 2, category: "Fit and Proper Test", question: "Aspek penilaian uji kemampuan dan kepatutan new entry calon pengurus bank:", options: ["Integritas, komitmen, reputasi keuangan", "Integritas dan komitmen", "Integritas, reputasi keuangan dan kelayakan keuangan", "Integritas, reputasi keuangan dan kompetensi"], answer: "Integritas, reputasi keuangan dan kompetensi", explanation: "Penilaian Kemampuan dan Kepatutan (PKK) atau Fit and Proper Test untuk calon pengurus baru (new entry) mencakup tiga aspek utama: Integritas, Reputasi Keuangan, dan Kompetensi." },
    { id: 106, version: 2, category: "Manajemen Krisis", question: "Bank dinilai memiliki potensi kesulitan yang membahayakan kelangsungan usaha seperti Tingkat kesehatan, likuiditas dan permodalan dengan memperhitungkan risiko jika memenuhi kriteria berikut, kecuali:", options: ["Rasio kewajiban penyediaan modal minimum Bank sama dengan atau lebih besar dari 8%", "Rasio GWM tidak tercapai", "Rasio CAR mencapai 12%", "TKS komposit dinilai 4 dalam 2 periode penilaian berturut-turut"], answer: "Rasio CAR mencapai 12%", explanation: "Rasio CAR 12% menunjukkan kondisi permodalan yang sehat. Kriteria bank berpotensi kesulitan justru jika CAR turun di bawah ambang batas, GWM tidak terpenuhi, atau TKS buruk." },
    { id: 107, version: 2, category: "Perizinan", question: "Tahapan di bawah ini yang tidak dilakukan OJK dalam memproses izin usaha BPR adalah:", options: ["Penilaian terhadap kinerja keuangan LJK milik PSP", "Penelitian kesiapan operasional", "Penilaian Kemampuan dan Kepatutan (PKK) terhadap calon PSP, anggota Direksi, dan anggota Dewan Komisaris (dalam hal ada perubahan)", "Penilaian studi kelayakan"], answer: "Penilaian terhadap kinerja keuangan LJK milik PSP", explanation: "OJK fokus pada kelayakan pendirian BPR itu sendiri (studi kelayakan, kesiapan operasional, PKK), bukan pada kinerja keuangan LJK lain yang mungkin dimiliki oleh Pemegang Saham Pengendali (PSP)." },
    { id: 108, version: 2, category: "Analisis Ekonomi", question: "Analisis yang digunakan untuk mengukur risiko kegagalan pembayaran kredit/pembiayaan pada sektor/lapangan usaha tertentu berdasarkan data yang dimiliki oleh bank, yaitu:", options: ["Analisis shift share", "Analisis forward & backward linkage", "Analisis NPL", "Analisis LQ/DLQ"], answer: "Analisis NPL", explanation: "Analisis Non-Performing Loan (NPL) per sektor usaha secara langsung mengukur risiko kredit dan kegagalan bayar pada sektor tersebut." },
    { id: 109, version: 2, category: "Permodalan", question: "Berapakah besaran capital conservation buffer?", options: ["2,5% dari ATMR", "Diserahkan kepada masing-masing bank", "0-2,5% dari ATMR", "12,5% dari ATMR"], answer: "2,5% dari ATMR", explanation: "Sesuai kerangka Basel III, Capital Conservation Buffer ditetapkan sebesar 2,5% dari Aset Tertimbang Menurut Risiko (ATMR) sebagai tambahan modal untuk menyerap kerugian saat kondisi stres." },
    { id: 110, version: 2, category: "Surveilans", question: "Hasil pemantauan/surveillance industri perbankan yang disampaikan baik kepada internal secara bulanan maupun kepada eksternal secara triwulanan disebut:", options: ["Laporan Surveillance Perbankan Indonesia (LSPI)", "Laporan Profil Industri Perbankan (LPIP)", "Laporan Industri Perbankan Indonesia (LIPI)", "Laporan Pemantauan Industri Perbankan (LPIP)"], answer: "Laporan Profil Industri Perbankan (LPIP)", explanation: "Laporan Profil Industri Perbankan (LPIP) adalah produk surveilans rutin yang berisi analisis kondisi industri perbankan dan dipublikasikan secara berkala." },
    { id: 111, version: 2, category: "Fit and Proper Test", question: "Self assessment terhadap calon pengurus Bank dilakukan oleh:", options: ["Direktur Utama dengan meminta masukan dari Direktur Kepatuhan", "Direktur Utama", "Direktur Kepatuhan", "Komite Remunerasi dan Nominasi"], answer: "Komite Remunerasi dan Nominasi", explanation: "Komite Remunerasi dan Nominasi (KRN) bertanggung jawab untuk melakukan penilaian awal (self assessment) terhadap calon pengurus sebelum diajukan ke OJK untuk proses PKK." },
    { id: 112, version: 2, category: "Produk Bank", question: "Di bawah ini yang tidak termasuk dalam jenis produk lanjutan bagi BPR adalah:", options: ["Kegiatan usaha penukaran valuta asing.", "Penyelenggara layanan keuangan tanpa kantor dalam rangka keuangan inklusif.", "Kerja sama dengan penyelenggara layanan pinjam meminjam uang berbasis teknologi informasi dengan model bisnis channeling.", "Pemasaran uang elektronik dari penerbit lain."], answer: "Kegiatan usaha penukaran valuta asing.", explanation: "Kegiatan penukaran valuta asing (money changer) merupakan aktivitas yang berisiko tinggi dan tidak diperbolehkan untuk dilakukan oleh BPR." },
    { id: 113, version: 2, category: "Pengawasan", question: "Sesuai POJK Nomor 28 Tahun 2023 tentang Penetapan Status dan Tindak lanjut Pengawasan BPR/BPRS, terdapat status pengawasan BDP yang merupakan kepanjangan dari", options: ["Bank dalam Penyelesaian", "Bank Dalam Perbaikan", "Bank Dalam Penyehatan", "Bank Dalam Pengawasan"], answer: "Bank Dalam Penyehatan", explanation: "Dalam terminologi POJK 28/2023, BDP adalah singkatan dari Bank Dalam Penyehatan, yaitu status untuk BPR/BPRS yang mengalami permasalahan namun masih dinilai dapat disehatkan." },
    { id: 114, version: 2, category: "Sistem Informasi", question: "SLIK merupakan singkatan dari:", options: ["Sistem Layanan Izin Kredit", "Sistem Lacak Informasi Kredit", "Sistem Layanan Informasi Keuangan", "Sistem Layanan Informasi Kredit"], answer: "Sistem Layanan Informasi Keuangan", explanation: "SLIK adalah singkatan dari Sistem Layanan Informasi Keuangan. Fungsinya tidak hanya mencakup kredit, tetapi seluruh informasi keuangan debitur." },
    { id: 115, version: 2, category: "Konglomerasi Keuangan", question: "Berdasarkan siklus pengawasan Konglomerasi Keuangan, Integrated Supervisory Plan (ISP) disusun pada tahapan berikut:", options: ["Pengkinian Penilaian Risiko", "Pemahaman Terhadap Konglomerasi Keuangan", "Perencanaan Pengawasan", "Perencanaan Pemeriksaan"], answer: "Perencanaan Pengawasan", explanation: "Integrated Supervisory Plan (ISP) adalah output dari tahap Perencanaan Pengawasan, yang berisi strategi dan rencana aksi pengawasan terintegrasi untuk satu periode ke depan." },
    { id: 116, version: 2, category: "Konglomerasi Keuangan", question: "Berdasarkan ketentuan di POJK tentang Konglomerasi Keuangan dan Perusahaan Induk Konglomerasi Keuangan, batas minimum total aset LJK Konglomerasi Keuangan yang paling sedikit berjumlah 2 (dua) LJK pada 2 (dua) sektor yang berbeda, yaitu:", options: ["100 Triliun", "50 Triliun", "75 Triliun", "150 Triliun"], answer: "100 Triliun", explanation: "Sebuah grup usaha ditetapkan sebagai Konglomerasi Keuangan jika memiliki total aset gabungan minimal Rp 100 Triliun dan terdiri dari minimal 2 LJK di 2 sektor yang berbeda." },
    { id: 117, version: 2, category: "Organisasi OJK", question: "Kantor OJK Provinsi Jawa Tengah membawahi wilayah:", options: ["Kantor OJK Prov. DI Yogyakarta, Kantor OJK Jember, Kantor OJK Solo, dan Kantor OJK Tegal", "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Kediri", "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal", "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Malang, dan Kantor OJK Tegal"], answer: "Kantor OJK Prov. DI Yogyakarta, Kantor OJK Purwokerto, Kantor OJK Solo, dan Kantor OJK Tegal", explanation: "Struktur organisasi OJK menempatkan beberapa Kantor OJK (setingkat kabupaten/kota) di bawah koordinasi Kantor OJK Provinsi. Untuk Jawa Tengah, KOJK Purwokerto, Solo, dan Tegal berada di bawah KR 3 Jateng & DIY." },
    { id: 118, version: 2, category: "Perizinan", question: "Dokumen yang disampaikan pada saat mengajukan permohonan persiapan pencabutan izin usaha BPR antara lain:", options: ["Laporan keuangan terakhir, laporan dan bukti penyelesaian kewajiban, laporan penghentian kegiatan usaha", "Berita Acara RUPS, rencana penyelesaian seluruh kewajiban, bukti penyelesaian pajak dan kewajiban lain kepada negara", "Berita Acara RUPS, rencana penyelesaian kewajiban, pengumuman rencana pembubaran badan hukum", "Rencana penyelesaian kewajiban, laporan penghentian kegiatan usaha, laporan penyelesaian seluruh kewajiban"], answer: "Berita Acara RUPS, rencana penyelesaian kewajiban, pengumuman rencana pembubaran badan hukum", explanation: "Pada tahap persiapan pencabutan izin atas permintaan sendiri, dokumen kunci yang dibutuhkan adalah persetujuan dari RUPS, rencana penyelesaian kewajiban, dan bukti pengumuman kepada publik." },
    { id: 119, version: 2, category: "Akuntansi Syariah", question: "Pedoman Akuntansi Perbankan Syariah Indonesia (PAPSI) untuk Bank Umum Syariah dan Unit Usaha Syariah bersumber dari:", options: ["PSAK dan PSAK Syariah", "PSAK Syariah", "SAK ETAP", "PSAK"], answer: "PSAK dan PSAK Syariah", explanation: "PAPSI merupakan turunan dari Pernyataan Standar Akuntansi Keuangan (PSAK) umum dan PSAK Syariah yang spesifik, yang kemudian disesuaikan dengan praktik perbankan." },
    { id: 120, version: 2, category: "Organisasi OJK", question: "Satuan kerja pengawasan perbankan meminta pendapat KSP untuk perizinan produk, hal tersebut merupakan tugas pokok KSP yang mana?", options: ["Memberikan dukungan kepada Satuan Kerja terkait dalam rangka pelaksanaan quality assurance melalui forum panel RBS BU/S Konglomerasi Keuangan, dan BPR/S;", "Melakukan pemeriksaan khusus atas permintaan Satuan Kerja yang melaksanakan fungsi pengawasan bank", "Melakukan koordinasi dan memimpin pertemuan antara lain dalam rangka penyelesaian permasalahan dan/atau penguatan aspek permodalan, kepengurusan, dan kelembagaan perbankan daerah", "Memberikan dukungan kepada Satuan Kerja yang melaksanakan fungsi pengawasan bank dalam rangka perizinan produk dan aktivitas perbankan;"], answer: "Memberikan dukungan kepada Satuan Kerja yang melaksanakan fungsi pengawasan bank dalam rangka perizinan produk dan aktivitas perbankan;", explanation: "Kelompok Spesialis Perizinan (KSP) memiliki tugas untuk memberikan dukungan dan pendapat ahli kepada satker pengawas terkait perizinan produk dan aktivitas bank." },
    { id: 121, version: 2, category: "Pengawasan", question: "BPR ditetapkan Dalam Status Pengawasan Khusus (DPK) dengan jangka waktu 2 bulan apabila memenuhi kriteria:", options: ["Rasio KPMM sama dengan atau kurang dari 8% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau lebih dari 1%", "Rasio KPMM sama dengan atau lebih dari 2% dan/atau CR rata-rata 6 bulan terakhir lebih dari 1% namun kurang dari 4%", "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%", "Rasio KPMM lebih dari 2% namun kurang dari 8% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau lebih dari 1%"], answer: "Rasio KPMM sama dengan atau kurang dari 2% dan/atau CR rata-rata 6 bulan terakhir sama dengan atau kurang dari 1%", explanation: "Kondisi ini menunjukkan permasalahan permodalan dan likuiditas yang sangat parah, sehingga BPR ditetapkan dalam status pengawasan khusus dengan jangka waktu yang lebih singkat untuk penanganan segera." },
    { id: 122, version: 2, category: "Pengawasan", question: "Berdasarkan data pengawasan pada Bank Umum dengan modal inti sebesar Rp22 Triliun, diketahui terdapat 1 kejadian fraud yang melibatkan pegawai bank dan terjadi pada bulan Maret 2024 total sebesar Rp200 juta namun setengahnya dapat dipulihkan. Atas informasi tersebut, pengawas tidak merubah peringkat risiko inheren operasional pada RBBR periode Semester I 2024. Dasar penilaian ini menggunakan prinsip:", options: ["Komprehensif dan Terstruktur", "Proporsionalitas", "Analisis Berorientasi Risiko", "Materialitas/Signifikansi"], answer: "Materialitas/Signifikansi", explanation: "Meskipun terjadi fraud, nilainya (Rp 200 juta) dianggap tidak material/signifikan dibandingkan dengan skala modal inti bank (Rp 22 Triliun), sehingga tidak mengubah peringkat risiko secara keseluruhan." },
    { id: 123, version: 2, category: "Perkreditan", question: "Penggolongan kualitas kredit BPR adalah kecuali:", options: ["Dalam Penyehatan", "Macet", "Lancar", "Dalam Perhatian Khusus"], answer: "Dalam Penyehatan", explanation: "Penggolongan kualitas kredit (kolektibilitas) terdiri dari Lancar, Dalam Perhatian Khusus, Kurang Lancar, Diragukan, dan Macet. 'Dalam Penyehatan' adalah status pengawasan bank, bukan kualitas kredit." },
    { id: 124, version: 2, category: "Tata Kelola", question: "Di bawah ini yang bukan termasuk dalam komponen penerapan tata kelola yang baik sebagaimana diatur dalam POJK 17 2023 adalah:", options: ["Integritas pelaporan dan sistem informasi teknologi", "Penyediaan dana kepada pihak terkait penyediaan dana besar", "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud", "Penerapan manajemen risiko termasuk sistem pengendalian intern"], answer: "Sistem rotasi telah dilaksanakan untuk menghindari ketergantungan kepada pegawai tertentu dan mengurangi kemungkinan terjadinya fraud", explanation: "Sistem rotasi adalah bagian dari implementasi pengendalian intern, bukan komponen utama GCG itu sendiri. Komponen utama mencakup manajemen risiko, transparansi, dan penanganan pihak terkait." },
    { id: 125, version: 2, category: "Organisasi OJK", question: "Mekanisme koordinasi pelaksanaan fungsi dan tugas Kantor Otoritas Jasa Keuangan Daerah merupakan tata cara koordinasi Satuan Kerja Kantor Pusat dan Kantor OJK, yang bertujuan sebagai berikut, kecuali:", options: ["Melakukan dan mendukung pelaksanaan pertukaran data dan informasi, yang meliputi proses penghimpunan, pengolahan, penyajian, dan penyampaian data dan/atau informasi terkait fungsi dan tugas KOJK", "Mempercepat proses perumusan dan pemberian rekomendasi atau kebijakan yang bersifat Otoritas Jasa Keuangan wide", "Mendukung dan meningkatkan efektivitas dan efisiensi koordinasi, komunikasi, harmonisasi, dan kerja sama antar satuan kerja Otoritas Jasa Keuangan terkait pengelolaan dan pelaksanaan tugas KOJK", "Memberikan dukungan perencanaan, pemenuhan, dan pengelolaan kelogistikan dalam rangka mendukung pelaksanaan tugas KOJK"], answer: "Memberikan dukungan perencanaan, pemenuhan, dan pengelolaan kelogistikan dalam rangka mendukung pelaksanaan tugas KOJK", explanation: "Urusan kelogistikan adalah fungsi pendukung internal dan bukan tujuan utama dari mekanisme koordinasi pengawasan antara Kantor Pusat dan Daerah." },
    { id: 126, version: 2, category: "Manajemen Risiko", question: "Salah satu pimpinan KC bank Kepompong di Sumatera tertangkap KPK atas tindakan korupsi dan beritanya tersiar dalam media massa. Kasus ini mencatat kenaikan kasus fraud bank Kepompong yang pada periode sebelumnya tercatat nihil. Dampak dari kasus tersebut menyebabkan sebagian besar nasabah KC dimaksud serentak melakukan rush sehingga likuiditas cabang turun signifikan sebesar -78,95% dari bulan sebelumnya, serta NPL naik menjadi 11,51% (0,017% bank wide) karena mayoritas penyaluran kredit kepada kolega pimpinan KC yang usahanya fiktif. Porsi terbesar evaluasi atas kasus ini oleh Pengawas dilakukan pada penilaian RBBR dalam analisa:", options: ["Risiko Likuiditas", "Risiko Kredit", "Risiko Operasional", "Risiko Reputasi"], answer: "Risiko Reputasi", explanation: "Akar masalah dari semua dampak (rush, NPL) adalah hilangnya kepercayaan publik akibat kasus korupsi, yang merupakan manifestasi dari risiko reputasi." },
    { id: 127, version: 2, category: "Perizinan", question: "Berapa lamakah persetujuan prinsip yang telah diberikan OJK dalam rangka pendirian LPIP berlaku?", options: ["Tidak terdapat masa berlaku", "Paling lama 3 (tiga) bulan sejak tanggal persetujuan prinsip diterbitkan", "Paling lama 6 (enam) bulan sejak tanggal persetujuan prinsip diterbitkan", "Paling lama 24 (dua puluh empat) bulan sejak tanggal persetujuan prinsip diterbitkan", "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan"], answer: "Paling lama 12 (dua belas) bulan sejak tanggal persetujuan prinsip diterbitkan", explanation: "Persetujuan Prinsip untuk pendirian Lembaga Penjaminan Infrastruktur dan Proyek (LPIP) berlaku selama 12 bulan, di mana dalam periode tersebut pemohon harus memenuhi persyaratan untuk mendapatkan Izin Usaha." },
    { id: 128, version: 2, category: "Pengembangan Ekonomi", question: "Aspek layak investasi adalah:", options: ["Kajian disusun dengan memperhatikan proses pengembangan ekonomi secara end-to-end, dari proses penetapan, implementasi, hingga evaluasi", "Program dapat diimplementasikan dan berlangsung secara kontinu untuk memberikan manfaat bagi pemerintah maupun masyarakat daerah setempat", "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana", "Semua jawaban salah"], answer: "Program memberikan dampak ekonomis baik bagi penerima manfaat maupun pihak penyedia dana", explanation: "Kelayakan investasi (investment feasibility) dinilai dari kemampuannya untuk memberikan dampak ekonomi yang positif dan berkelanjutan bagi semua pihak yang terlibat." },
    { id: 129, version: 2, category: "Akuntansi", question: "Suku bunga yang secara tepat mendiskontokan estimasi pembayaran atau penerimaan kas di masa datang selama perkiraan umur dari instrumen keuangan, merupakan:", options: ["Suku Bunga Efektif (EIR)", "Suku Bunga Dasar Kredit (SBDK)", "Suku Bunga BI-7 Day Reverse Repo Rate (BI7DRR)", "Suku Bunga Kontraktual"], answer: "Suku Bunga Efektif (EIR)", explanation: "Effective Interest Rate (EIR) adalah suku bunga yang sesungguhnya yang menyamakan nilai kini dari seluruh arus kas masa depan dengan nilai buku awal instrumen keuangan." },
    { id: 130, version: 2, category: "Organisasi OJK", question: "Dalam rangka Pengalihan fungsi pengawasan dan perizinan LJK Daerah dilakukan secara hati-hati dan memperhatikan aspek tata kelola yang baik, sehingga tidak terjadi penurunan kualitas pengawasan dan perizinan pasca pengalihan kepada Kantor OJK, oleh karena itu diperlukan protokol pengalihan pengawasan Sektor Jasa Keuangan Daerah, dengan tahapan:", options: ["Persiapan, Transisi, BAST dan Pasca Pengalihan", "Penyampaian informasi, Transisi, BAST dan Pasca Pengalihan", "Persiapan, Transisi, Pelaksanaan Workshop dan Pasca Pengalihan", "Penyampaian dokumen serah terima, Transisi, BAST dan Pasca Pengalihan"], answer: "Persiapan, Transisi, BAST dan Pasca Pengalihan", explanation: "Protokol pengalihan fungsi mencakup empat tahapan utama: Persiapan, masa Transisi, Berita Acara Serah Terima (BAST), dan kegiatan Pasca Pengalihan untuk memastikan kelancaran." },
    { id: 131, version: 2, category: "Pemeriksaan", question: "Hal yang perlu diperhatikan dalam penyampaian LHP kepada lembaga lain, sesuai dengan UU P2SK:", options: ["Data dan informasi yang disampaikan mengacu pada hasil pemeriksaan terakhir", "Semua benar", "Terdapat permintaan dari lembaga lain atau kewajiban untuk menyampaikannya sesuai amanat peraturan perundang-undangan", "Cakupan Data dan informasi yang disampaikan dapat disesuaikan dengan kebutuhan dan tujuan penyampaian LHP dimaksud."], answer: "Semua benar", explanation: "Penyampaian LHP ke lembaga lain harus didasari permintaan resmi, menggunakan data terakhir, dan cakupannya disesuaikan dengan kebutuhan lembaga peminta." },
    { id: 132, version: 2, category: "Pengawasan", question: "BPR XYZ telah diberikan perpanjangan jangka waktu pengawasan intensif dan akan berakhir pada tanggal 2 November 2021. Apabila sampai dengan batas waktu perpanjangan tersebut berakhir tidak terdapat peningkatan kondisi keuangan dan rasio KPMM berada pada posisi 9%, maka:", options: ["OJK menetapkan perpanjangan jangka waktu pengawasan intensif.", "OJK meminta BPR untuk menyusun rencana tindak (action plan).", "Jawaban tidak ada yang sesuai.", "OJK menetapkan BPR dalam pengawasan khusus."], answer: "OJK menetapkan BPR dalam pengawasan khusus.", explanation: "Jika setelah masa pengawasan intensif berakhir kondisi tidak membaik dan KPMM masih di bawah ambang batas (misalnya 12%), maka status pengawasan akan dinaikkan menjadi Pengawasan Khusus (atau Bank Dalam Penyehatan)." },
    { id: 133, version: 2, category: "Perizinan", question: "Pengambilalihan BPR yang mengakibatkan beralihnya pengendalian BPR dalam hal memenuhi kriteria:", options: ["Perubahan kepemilikan disebabkan oleh waris.", "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR.", "Tidak menjadi pemegang saham dengan kepemilikan saham terbesar pada BPR.", "Perubahan kepemilikan disebabkan oleh hibah"], answer: "Kepemilikan saham tidak melebihi pemegang saham terbesar namun menentukan pengelolaan dan/atau kebijakan BPR.", explanation: "Pengendalian tidak selalu ditentukan oleh kepemilikan saham mayoritas. Seseorang/badan hukum dianggap pengendali jika memiliki kemampuan untuk menentukan pengelolaan dan kebijakan BPR, meskipun sahamnya bukan yang terbesar." },
    { id: 134, version: 2, category: "Tata Kelola", question: "Struktur dan kedudukan; tugas dan tanggung jawab; wewenang; serta pertanggungjawaban dari SKAI dituangkan bank dalam", options: ["Piagam audit intern", "Kerangka kerja audit intern", "Kerangka acuan audit intern", "Pedoman audit intern"], answer: "Piagam audit intern", explanation: "Piagam Audit Internal (Internal Audit Charter) adalah dokumen formal yang mendefinisikan tujuan, wewenang, dan tanggung jawab Satuan Kerja Audit Intern (SKAI) dalam sebuah organisasi." },
    { id: 135, version: 2, category: "Perizinan", question: "Setelah dokumen lengkap, berapa lama jangka waktu OJK dalam memberikan persetujuan atau penolakan atas permohonan persetujuan prinsip pendirian BPR?", options: ["20 hari kerja", "30 hari kerja", "20 hari", "30 hari"], answer: "30 hari kerja", explanation: "Sesuai ketentuan, OJK memiliki waktu 30 hari kerja untuk memproses permohonan persetujuan prinsip pendirian BPR setelah semua dokumen persyaratan dinyatakan lengkap." },
    { id: 136, version: 2, category: "Pengawasan", question: "Jangka waktu penetapan status pengawasan BDP untuk BPR/BPRS adalah", options: ["Paling lama 1 tahun dan tidak dapat diperpanjang", "Paling cepat 1 tahun dan tidak dapat diperpanjang", "Paling lama 1 tahun dan dapat diperpanjang", "Paling cepat 1 tahun dan dapat diperpanjang"], answer: "Paling lama 1 tahun dan dapat diperpanjang", explanation: "Status Bank Dalam Penyehatan (BDP) ditetapkan untuk jangka waktu paling lama 1 tahun dan dapat diperpanjang satu kali untuk paling lama 1 tahun." },
    { id: 137, version: 2, category: "Konglomerasi Keuangan", question: "Manakan diantara Konglomerasi Keuangan dibawah ini yang memiliki wider group dengan unregulated entities paling banyak, adalah:", options: ["KK Mega Corpora", "KK BRI", "KK BCA", "KK Mandiri"], answer: "KK Mega Corpora", explanation: "Konglomerasi Keuangan Mega Corpora memiliki struktur yang luas dan terdiversifikasi, termasuk banyak entitas di sektor non-keuangan (unregulated entities) seperti media, ritel, dan properti." },
    { id: 138, version: 2, category: "Sistem Informasi", question: "Informasi SLIK dapat digunakan oleh LJK untuk:", options: ["Menilai kelayakan debitur", "Menetapkan pajak", "Menentukan suku bunga BI", "Mengubah status hukum perusahaan"], answer: "Menilai kelayakan debitur", explanation: "Fungsi utama SLIK bagi LJK adalah untuk mendapatkan riwayat kredit calon debitur sebagai salah satu dasar untuk menilai kelayakan dan risiko kredit." },
    { id: 139, version: 2, category: "Perizinan", question: "Berikut kriteria rencana korporasi (corporate plan) yang memenuhi ketentuan, kecuali:", options: ["disusun untuk mencapai tujuan Bank BHI atau KCBLN yang mempedomani Rencana Bisnis Bank.", "memuat visi dan misi Bank Bank BHI atau KCBLN", "disusun oleh Direksi", "rencana korporasi disetujui oleh Dewan Komisaris"], answer: "disusun oleh Direksi", explanation: "Rencana korporasi harus disusun oleh Direksi dan disetujui oleh Dewan Komisaris. Pernyataan 'disusun oleh Direksi' saja tidak lengkap karena mengabaikan peran persetujuan Dewan Komisaris." },
    { id: 140, version: 2, category: "Fit and Proper Test", question: "Pemegang Saham Pengendali (PSP) Bank Syariah dalam memenuhi ketentuan PKK kepada pihak utama, wajib membuat pernyataan-pernyataan antara lain sbb, kecuali:", options: ["Memiliki komitmen untuk mematuhi perundang-undangan yang berlaku", "Memiliki sertifikat pelatihan perbankan syariah", "Memiliki komitmen terhadap pengembangan operasional bank syariah yang sehat", "Tidak memiliki kredit macet dan/atau tidak tercantum dalam daftar pihak yang memiliki kredit macet"], answer: "Memiliki sertifikat pelatihan perbankan syariah", explanation: "Sertifikasi kompetensi diwajibkan bagi pengurus (Direksi dan Dewan Komisaris), bukan bagi Pemegang Saham Pengendali (PSP)." },
    { id: 141, version: 2, category: "Tata Kelola", question: "Apa arti prinsip Kewajaran dalam tata kelola BPR?", options: ["Kemudahan ekspansi bisnis", "Menghindari pemborosan biaya", "Kewajiban laporan keuangan tahunan", "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan"], answer: "Keseimbangan hak dan perlakuan terhadap pemangku kepentingan", explanation: "Prinsip Kewajaran (Fairness) dalam GCG berarti memastikan perlakuan yang adil dan setara kepada seluruh pemangku kepentingan, termasuk pemegang saham minoritas, karyawan, dan nasabah." },
    { id: 142, version: 2, category: "Hukum Perbankan", question: "Apa yang menjadi dasar hukum utama bagi OJK untuk menyusun peraturan turunan mengenai Rahasia Bank setelah berlakunya UU P2SK?", options: ["POJK Nomor 44 Tahun 2024", "Undang-Undang Nomor 10 Tahun 1998 tentang Perbankan", "Surat Edaran Bank Indonesia Tahun 2007", "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK"], answer: "Pasal 40A ayat (2) Klaster UU Perbankan pasca UU P2SK dan Pasal 41A ayat (2) Klaster UU Perbankan Syariah pasca UU P2SK", explanation: "UU P2SK secara eksplisit memberikan amanat kepada OJK untuk mengatur lebih lanjut mengenai Rahasia Bank dalam Peraturan OJK, sebagaimana tertuang dalam pasal-pasal tersebut." },
    { id: 143, version: 2, category: "Perbankan Syariah", question: "Berikut ini adalah judul salah satu bab di dalam UU Perbankan Syariah:", options: ["Sanksi Administratif dan Sanksi Pidana", "Pembinaan, Pengawasan dan Pemeriksaan", "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS", "Perizinan, Bentuk Badan Hukum, Anggaran Dasar, dan Rumah Tangga"], answer: "Jenis dan Kegiatan Usaha, Kelayakan Penyaluran Dana, dan Larangan Bagi Bank Syariah dan UUS", explanation: "Bab tersebut merupakan salah satu bab inti dalam UU No. 21 Tahun 2008 yang mengatur operasional dan batasan-batasan bagi perbankan syariah." },
    { id: 144, version: 2, category: "Perkreditan", question: "Informasi perkreditan wajib memiliki nilai tambah dengan tambahan data selain data kredit atau pembiayaan yang diperoleh dari SLIK. Informasi dapat berasal dari sumber sebagai berikut, kecuali:", options: ["Informasi dan/atau data healthcare dan marketplace", "Informasi dan/atau data dari kementerian yang bersifat rahasia", "Informasi dan/atau data dari entitas yang menyediakan layanan pinjam meminjam uang berbasis teknologi informasi (fintech) serta lembaga lainnya", "Informasi dan/atau data pembayaran telepon, tagihan listrik, serta data pembayaran tagihan air"], answer: "Informasi dan/atau data dari kementerian yang bersifat rahasia", explanation: "Lembaga jasa keuangan dilarang mengakses data yang bersifat rahasia negara untuk tujuan penilaian kredit. Sumber data alternatif haruslah data yang legal untuk diakses." },
    { id: 145, version: 2, category: "Tata Kelola", question: "Yang dimaksud SKAI sesuai POJK 1/POJK.03/2019 tentang penerapan fungsi audit intern pada bank umum, yaitu", options: ["Satuan Kerja Audit Independen, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern secara independen", "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern", "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntansi dan pembukuan serta audit intern bank secara independen", "Satuan Kerja Akuntan Intern, yaitu unit kerja dalam bank yang menjalankan fungsi akuntan dan pembukuan bank secara intern"], answer: "Satuan Kerja Audit Intern, yaitu unit kerja dalam bank yang menjalankan fungsi audit intern", explanation: "SKAI adalah singkatan dari Satuan Kerja Audit Intern, yang merupakan unit kerja internal bank yang bertanggung jawab melaksanakan fungsi audit internal." },
    { id: 146, version: 2, category: "Pengembangan Ekonomi", question: "Pembentukan Ekosistem Pengembangan Keunggulan Daerah berbasis Kemitraan terpadu, paling sedikit memuat komitmen berupa:", options: ["Kontrak asistensi teknis, kontrak penyediaan kredit UMKM, dan kontrak penyediaan asuransi mikro", "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak penyelesaian sengketa", "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak offtake", "Kontrak penyediaan bibit, kontrak penyediaan kredit UMKM, dan kontrak riset"], answer: "Kontrak penyediaan akses keuangan, kontrak asistensi teknis, dan kontrak offtake", explanation: "Ekosistem yang terpadu mencakup tiga komitmen utama: akses keuangan dari LJK, asistensi teknis (pendampingan), dan jaminan penyerapan hasil panen/produk (kontrak offtake)." },
    { id: 147, version: 2, category: "Regulasi", question: "Pengaturan terkait Akuntan Publik dan Kantor Akuntan Publik di OJK, yaitu:", options: ["Peraturan OJK Nomor 9 Tahun 2024", "Peraturan OJK Nomor 17 Tahun 2023", "Peraturan OJK Nomor 9 Tahun 2021", "Peraturan OJK Nomor 13 Tahun 2017", "Peraturan OJK Nomor 9 Tahun 2023"], answer: "Peraturan OJK Nomor 9 Tahun 2023", explanation: "POJK No. 9 Tahun 2023 adalah peraturan terbaru yang mengatur tentang Penggunaan Jasa Akuntan Publik dan Kantor Akuntan Publik dalam Kegiatan Jasa Keuangan." },
    { id: 148, version: 2, category: "Tata Kelola", question: "Dalam melaksanakan fungsi audit intern, SKAI melakukan komunikasi dengan OJK yang membahas hal-hal berikut, kecuali", options: ["Area berisiko yang diidentifikasi OJK dan SKAI", "Rencana audit bulanan", "Temuan dan rekomendasi dari pelaksanaan audit intern pada tahun berjalan", "Pemahaman tindakan mitigasi risiko yang dilakukan oleh bank"], answer: "Rencana audit bulanan", explanation: "Komunikasi antara SKAI dan OJK lebih bersifat strategis, membahas area berisiko dan temuan signifikan. Rencana audit bulanan lebih merupakan detail operasional internal." },
    { id: 149, version: 2, category: "Manajemen Risiko", question: "BPR Syariah yang memiliki modal inti kurang dari Rp50 miliar wajib menerapkan manajemen risiko paling sedikit meliputi risiko:", options: ["Kredit, operasional, reputasi, dan strategi", "Kredit, operasional, kepatuhan, dan likuiditas", "Kredit, operasional, kepatuhan, likuiditas, dan strategi", "Kredit, operasional, kepatuhan, likuiditas, reputasi, dan strategi"], answer: "Kredit, operasional, kepatuhan, dan likuiditas", explanation: "Untuk BPR Syariah dengan skala modal inti tersebut, penerapan manajemen risiko diwajibkan untuk empat risiko utama: Kredit, Operasional, Kepatuhan, dan Likuiditas." },
    { id: 150, version: 2, category: "Perbankan Syariah", question: "Karakteristik aktivitas keuangan dan perbankan yang diperbolehkan bagi bank syariah dalam menjalankan operasional adalah, kecuali:", options: ["Bagi Hasil", "Jual beli dan sewa", "Titipan, Jasa dan Sosial (Zakat, Infaq, Shodaqah dan Wakaf)", "Bunga atas pinjaman"], answer: "Bunga atas pinjaman", explanation: "Prinsip utama yang membedakan bank syariah dengan konvensional adalah larangan riba (bunga). Bank syariah menggunakan skema bagi hasil, jual beli, dan sewa." },
    { id: 151, version: 2, category: "Perizinan", question: "Salah satu peraturan yang melandasi proses perizinan kelembagaan dan jaringan kantor Bank Umum adalah:", options: ["POJK No.55/POJK.03/2016", "POJK No.27/POJK.03/2016", "POJK No.12/POJK.03/2021", "POJK No.33/POJK.04/2014"], answer: "POJK No.12/POJK.03/2021", explanation: "POJK No. 12/POJK.03/2021 tentang Bank Umum secara komprehensif mengatur mengenai perizinan kelembagaan dan jaringan kantor bank umum." },
    { id: 152, version: 2, category: "Pengawasan", question: "Di bawah ini yang bukan merupakan tahapan Siklus Pengawasan Berdasarkan Risiko (RBS), adalah", options: ["Pemahaman terhadap Bank", "Perencanaan Pengawasan", "Tindakan Pengawasan dan Monitoring", "Fit & Proper Test"], answer: "Fit & Proper Test", explanation: "Fit & Proper Test (PKK) adalah proses perizinan individual, bukan bagian dari siklus pengawasan institusional (RBS) yang berkelanjutan." },
    { id: 153, version: 2, category: "Perizinan", question: "POJK yang mengatur tentang penggabungan, peleburan dan pengambilalihan BPR/BPRS yaitu", options: ["POJK Nomor 24/POJK.03/2019", "POJK Nomor 23/POJK.03/2019", "POJK Nomor 21/POJK.03/2019", "POJK Nomor 22/POJK.03/2019"], answer: "POJK Nomor 21/POJK.03/2019", explanation: "POJK No. 21/POJK.03/2019 secara spesifik mengatur mengenai Penggabungan, Peleburan, dan Pengambilalihan Bank Perkreditan Rakyat dan Bank Pembiayaan Rakyat Syariah." },
    { id: 154, version: 2, category: "Perbankan Syariah", question: "Berikut adalah lingkup regulasi perbankan syariah di Indonesia, yaitu:", options: ["Kelembagaan, intelektual, dan standar akuntansi dan pelaporan", "Kelembagaan, material, dan standar akuntansi dan pelaporan", "Kelembagaan, komersial, dan standar akuntansi dan pelaporan", "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan"], answer: "Kelembagaan, prudensial, dan standar akuntansi dan pelaporan", explanation: "Lingkup regulasi perbankan syariah mencakup aspek kelembagaan (pendirian, jaringan), prudensial (kesehatan, kehati-hatian), serta standar akuntansi dan pelaporan yang sesuai syariah." },
    { id: 155, version: 2, category: "Tata Kelola", question: "Kejelasan fungsi dan pelaksanaan pertanggungjawaban organ BPR/BPRS merupakan prinsip tata kelola:", options: ["Independensi", "Fairness", "Akuntabilitas", "Transparansi"], answer: "Akuntabilitas", explanation: "Prinsip Akuntabilitas menekankan pada kejelasan fungsi dan pertanggungjawaban organ perusahaan sehingga kinerjanya dapat diukur dan dievaluasi." },
    { id: 156, version: 2, category: "Perbankan Syariah", question: "Penyelesaian sengketa di Perbankan Syariah dilakukan oleh pengadilan dalam lingkungan:", options: ["Peradilan Mu amalah", "Peradilan Agama", "Peradilan Tata Niaga", "Peradilan Umum"], answer: "Peradilan Agama", explanation: "Sesuai UU Perbankan Syariah, sengketa di bidang ekonomi syariah menjadi kewenangan absolut dari Peradilan Agama." },
    { id: 157, version: 2, category: "Regulasi", question: "Dalam UU Perbankan, penggunaan TKA oleh Bank diatur dalam pasal berikut:", options: ["Pasal 40", "Pasal 39", "Pasal 38", "Pasal 41"], answer: "Pasal 39", explanation: "Pasal 39 UU Perbankan mengatur ketentuan mengenai penggunaan tenaga kerja asing oleh bank umum." },
    { id: 158, version: 2, category: "Perizinan", question: "Wilayah jaringan kantor BPR/S hasil penggabungan/peleburan paling luas berlokasi dalam satu wilayah", options: ["Kabupaten/Kota", "Negara", "Provinsi", "Pulau atau kepulauan utama"], answer: "Provinsi", explanation: "Hasil penggabungan atau peleburan BPR memungkinkan perluasan jaringan kantor, namun wilayah operasionalnya dibatasi maksimal dalam satu provinsi yang sama." },
    { id: 159, version: 2, category: "Regulasi", question: "Bagi Dana Pensiun yang berbentuk perusahaan publik, penggunaan jasa dari AP yang sama dibatasi", options: ["5 tahun kumulatif", "7 tahun kumulatif", "7 tahun berturut turut", "5 tahun berturut-turut"], answer: "5 tahun berturut-turut", explanation: "Untuk menjaga independensi, penggunaan jasa Akuntan Publik (AP) yang sama oleh Dana Pensiun yang merupakan perusahaan publik dibatasi maksimal 5 tahun buku berturut-turut." },
    { id: 160, version: 2, category: "Perizinan", question: "Di bawah ini merupakan dasar Pencabutan izin usaha Bank BHI dan KCBLN, kecuali:", options: ["Permintaan kantor pusat dari KCBLN", "Permintaan dari Bank lainnya", "Permintaan pemilik atau pemegang saham Bank BHI untuk melakukan pencabutan izin usaha Bank BHI, termasuk bank perantara", "Izin usaha kantor pusat KCBLN dicabut atau dilikuidasi oleh otoritas negara setempat"], answer: "Permintaan dari Bank lainnya", explanation: "Pencabutan izin usaha tidak dapat dilakukan atas permintaan bank lain. Dasar pencabutan adalah permintaan dari bank itu sendiri, kantor pusatnya (untuk KCBLN), atau keputusan regulator." },
    { id: 161, version: 2, category: "Bank Sistemik", question: "Total eksposur Bank dalam penetapan status sistemik terdiri dari beberapa komponen berikut, kecuali:", options: ["Eksposur pada rekening administratif (off-balance sheet exposure)", "Eksposur pada neraca (on-balance sheet exposure)", "Potential future exposure dari transaksi derivative", "Pajak penghasilan tangguhan (deferred tax)"], answer: "Pajak penghasilan tangguhan (deferred tax)", explanation: "Pajak tangguhan adalah pos akuntansi dan tidak termasuk dalam perhitungan total eksposur yang menjadi dasar penilaian dampak sistemik sebuah bank." },
    { id: 162, version: 2, category: "Pengawasan", question: "Tahapan dari siklus Risk Based Supervision yang merupakan pengendalian kualitas Pengawasan Bank untuk memastikan input, proses, dan output kegiatan Pengawasan Bank dilakukan melalui", options: ["Penilaian Tingkat Kesehatan Bank", "Penyusunan KHP", "Forum Panel Pengawasan", "Penyusunan AWP"], answer: "Forum Panel Pengawasan", explanation: "Forum Panel Pengawasan berfungsi sebagai mekanisme quality assurance untuk membahas dan menantang (challenge) hasil analisis dan rencana tindakan pengawasan." },
    { id: 163, version: 2, category: "Perbankan Syariah", question: "Pengertian Unit Usaha Syariah (UUS) yang benar di bawah ini:", options: ["Unit kerja dari kantor BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha konvensional.", "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah.", "Unit kerja dari kantor pusat BUK yang berfungsi sebagai koordinator kantor cabang dan kantor lainnya di bawah kantor cabang BUK.", "Unit kerja dari kantor pusat BUK yang berfungsi melakukan pengawasan penerapan prinsip syariah."], answer: "Unit kerja dari kantor pusat BUK yang berfungsi sebagai kantor induk dari kantor atau unit yang melaksanakan kegiatan usaha berdasarkan prinsip syariah.", explanation: "UUS adalah unit kerja di dalam bank konvensional yang secara khusus menjalankan kegiatan usaha berdasarkan Prinsip Syariah." },
    { id: 164, version: 2, category: "Konglomerasi Keuangan", question: "Berikut merupakan pilar penerapan manajemen risiko terintegrasi, kecuali:", options: ["Penyusunan kebijakan secara tertulis dan komprehensif", "Kecukupan kebijakan, prosedur, dan penetapan limit Manajemen Risiko Terintegrasi", "Pengawasan Direksi dan Dewan Komisaris Entitas Utama", "Sistem pengendalian intern yang menyeluruh terhadap penerapan Manajemen Risiko Terintegrasi"], answer: "Penyusunan kebijakan secara tertulis dan komprehensif", explanation: "Penyusunan kebijakan adalah bagian dari implementasi, bukan pilar. Pilar utamanya adalah pengawasan aktif, kecukupan proses dan limit, serta sistem pengendalian intern." },
    { id: 165, version: 2, category: "Pengawasan", question: "Tahapan ke-4 dalam siklus pengawasan BPR adalah", options: ["Pemahaman terhadap BPR", "Pemeriksaan berdasarkan risiko", "Perencanaan pengawasan", "Pengkinian profil risiko dan kinerja BPR"], answer: "Pengkinian profil risiko dan kinerja BPR", explanation: "Setelah perencanaan, pemeriksaan, dan pemahaman, siklus pengawasan BPR berlanjut ke tahap pengkinian profil risiko dan kinerja secara berkala." },
    { id: 166, version: 2, category: "Perizinan", question: "Berikut ini yang termasuk jenis perizinan yang tergolong dalam entry kelembagaan:", options: ["Pendirian bank, pembukaan kantor cabang, dan perubahan kegiatan usaha bank konvensional menjadi bank syariah.", "Pembukaan Kantor perwakilan Bank yang berkantor pusat di luar negeri, pembukaan unit usaha syariah, dan pemindahan alamat kantor bank syariah.", "Penggabungan usaha bank syariah, perubahan kegiatan usaha bank syariah, dan pengajuan calon Pihak Utama bank syariah.", "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah."], answer: "Pemisahan Unit Usaha Syariah, perubahan kegiatan usaha bank konvensional menjadi bank syariah, dan pendirian bank syariah.", explanation: "Entry kelembagaan berkaitan dengan pembentukan entitas baru atau perubahan fundamental bentuk usaha, seperti pendirian bank baru, spin-off UUS, dan konversi." },
    { id: 167, version: 2, category: "Akuntansi Syariah", question: "Laporan Keuangan yang digunakan untuk melaporkan penyaluran pembiayaan yang telah ditetapkan penggunaannya oleh pemilik dana (shahibul maal) adalah:", options: ["Laporan Investasi Terikat", "Neraca", "Laba Rugi", "Laporan Investasi Tidak Terikat"], answer: "Laporan Investasi Terikat", explanation: "Laporan Investasi Terikat (Restricted Investment Account) secara khusus melaporkan pengelolaan dana titipan dari pihak ketiga (misalnya dalam akad Mudharabah Muqayyadah) di mana penggunaannya telah ditentukan." },
    { id: 168, version: 2, category: "Regulasi", question: "Ketentuan yang mengatur tentang Penambahan Modal Disetor dan Perubahan Kepemilikan Saham Yang Tidak Mengakibatkan Perubahan PSP BPR atau BPR Syariah adalah", options: ["Pasal 37 POJK Nomor 7 Tahun 2024", "Pasal 41 POJK Nomor 7 Tahun 2024", "Pasal 39 POJK Nomor 7 Tahun 2024", "Pasal 42 POJK Nomor 7 Tahun 2024"], answer: "Pasal 39 POJK Nomor 7 Tahun 2024", explanation: "Pasal 39 dalam POJK BPR/BPRS terbaru secara spesifik mengatur tentang mekanisme perubahan modal dan kepemilikan saham yang tidak mengubah status pemegang saham pengendali." },
    { id: 169, version: 2, category: "Produk Bank", question: "Bank umum dapat melakukan kegiatan jasa yang mencakup?", options: ["Pemberian kredit dan investasi pasar modal", "Pemberian kredit, simpanan, dan jasa keuangan lainnya", "Pemberian simpanan dan investasi pasar modal", "Pemberian kredit dan simpanan saja"], answer: "Pemberian kredit, simpanan, dan jasa keuangan lainnya", explanation: "Kegiatan usaha bank umum sangat luas, mencakup penghimpunan dana (simpanan), penyaluran dana (kredit), dan berbagai jasa keuangan lainnya seperti transfer, inkaso, dan lain-lain." },
    { id: 170, version: 2, category: "Pengawasan", question: "Salah satu parameter BPR/BPRS ditetapkan dalam status pengawasan BDP adalah", options: ["Rasio KPΜΜ < 5%", "Cash ratio < 2%", "Rasio KPMM < 12%", "Cash ratio > 5%"], answer: "Rasio KPMM < 12%", explanation: "Sesuai POJK 28/2023, BPR/BPRS masuk dalam status Bank Dalam Penyehatan (BDP) jika KPMM-nya berada di bawah 12% namun masih di atas 8%." },
    { id: 171, version: 2, category: "Konglomerasi Keuangan", question: "Untuk mengintegrasikan Tata Kelola pada Konglomerasi Keuangan, maka suatu Konglomerasi Keuangan harus membentuk beberapa perangkat. Adapun perangkat yang menjadi kepanjangan tangan Dewan Komisaris, adalah:", options: ["Komite Manajemen Risiko Terintegrasi", "Komite Tata Kelola Terintegrasi", "Satuan Kerja Audit Internal Terintegrasi", "Satuan Kerja Kepatuhan Terintegrasi"], answer: "Komite Tata Kelola Terintegrasi", explanation: "Komite Tata Kelola Terintegrasi dibentuk untuk membantu Dewan Komisaris dalam memastikan penerapan tata kelola yang baik di seluruh entitas dalam konglomerasi keuangan." },
    { id: 172, version: 2, category: "Pemeriksaan", question: "Periodisasi penyusunan Audit Working Plan (AWP):", options: ["AWP wajib disusun setahun sekali.", "AWP wajib disusun sebelum melakukan pengawasan.", "AWP wajib disusun sebelum dan sesudah melakukan pemeriksaan.", "AWP wajib disusun sebelum melakukan pemeriksaan."], answer: "AWP wajib disusun sebelum melakukan pemeriksaan.", explanation: "Audit Working Plan (AWP) atau Program Pemeriksaan (P2) adalah rencana kerja detail yang harus disusun oleh tim pemeriksa sebelum memulai kegiatan pemeriksaan on-site." },
    { id: 173, version: 2, category: "Perizinan", question: "Penyelenggaraan jaringan kantor di bawah ini yang menggunakan mekanisme perizinan, yaitu:", options: ["Perubahan status KCP menjadi KC", "Penutupan KCP", "Perubahan status KC menjadi KCP", "Pemindahan alamat KC"], answer: "Perubahan status KCP menjadi KC", explanation: "Peningkatan status dari Kantor Cabang Pembantu (KCP) menjadi Kantor Cabang (KC) memerlukan proses perizinan baru dari OJK karena adanya penambahan kewenangan dan skala operasional." },
    { id: 174, version: 2, category: "Perizinan", question: "Permohonan persetujuan prinsip pendirian BPR diajukan kepada OJK dilampiri dengan dokumen antara lain:", options: ["Rencana SOP dan sistem, bukti setoran modal, bukti pembayaran biaya perizinan", "Data kepemilikan, bukti setoran modal, akta pendirian", "Data kepemilikan, daftar calon anggota Direksi dan anggota Dewan Komisaris, bukti kesiapan operasional", "Data kepemilikan, bukti pembayaran biaya perizinan, akta pendirian"], answer: "Data kepemilikan, daftar calon anggota Direksi dan anggota Dewan Komisaris, bukti kesiapan operasional", explanation: "Pada tahap persetujuan prinsip, OJK fokus pada kelayakan pemilik dan pengurus serta kesiapan awal operasional, bukan pada setoran modal penuh atau akta definitif." },
    { id: 175, version: 2, category: "Produk Bank", question: "Produk kredit yang biasanya digunakan untuk membiayai pembelian properti seperti rumah atau apartemen adalah?", options: ["Kredit Konsumsi", "Kredit Modal Kerja", "Kredit Kepemilikan Rumah (KPR)", "Kredit Multiguna"], answer: "Kredit Kepemilikan Rumah (KPR)", explanation: "KPR secara spesifik dirancang sebagai produk pembiayaan untuk pembelian properti residensial." },
    { id: 176, version: 2, category: "Organisasi OJK", question: "Pengalihan fungsi dan tugas pengawasan pengawasan LJK Daerah dan market conduct dari Kantor Pusat ke Kantor Daerah merupakan dampak penataan organisasi OJK sebagaimana diatur dalam Surat Edaran Dewan Komisioner:", options: ["SEDK Nomor 22/SEDK.02/2023 tentang Perubahan Atas SEDK Nomor 10/SEDK.02/2023 Organisasi Bidang pengawasan PEPK", "SEDK Nomor 24/SEDK.02/2023 tentang Perubahan Kedua Atas SEDK Nomor 11/SEDK.02/2023 tentang Organisasi Bidang Pengawasan Sektor Perbankan", "SEDK Nomor 21/SEDK.02/2023 tentang Organisasi Bidang Pengawasan Sektor Pasar Modal, Keuangan Derivatif dan Bursa Karbon", "SEDK Nomor 19/SEDK.02/2024 Perubahan Ketiga Atas Surat Edaran Dewan Komisioner Otoritas Jasa Keuangan Nomor 19/SEDK.02/2023 tentang Organisasi Bidang Kebijakan Strategis"], answer: "SEDK Nomor 24/SEDK.02/2023 tentang Perubahan Kedua Atas SEDK Nomor 11/SEDK.02/2023 tentang Organisasi Bidang Pengawasan Sektor Perbankan", explanation: "SEDK ini secara spesifik mengatur reorganisasi di bidang pengawasan perbankan, termasuk pengalihan sebagian fungsi pengawasan ke kantor-kantor OJK di daerah." },
    { id: 177, version: 2, category: "Hukum Perbankan", question: "Dalam hal pembukaan Rahasia Bank dilakukan untuk kepentingan peradilan dalam perkara pidana, prosedur yang harus ditempuh adalah:", options: ["Langsung disampaikan kepada bank oleh aparat penegak hukum", "Harus diajukan melalui izin tertulis kepada OJK", "Dikoordinasikan terlebih dahulu dengan Bank Indonesia", "Disampaikan melalui Mahkamah Agung kepada bank"], answer: "Harus diajukan melalui izin tertulis kepada OJK", explanation: "Untuk kepentingan peradilan pidana, Pimpinan Kepolisian, Kejaksaan, atau KPK harus mengajukan permintaan tertulis kepada pimpinan OJK untuk mendapatkan izin membuka rahasia bank." },
    { id: 178, version: 2, category: "Hukum Perbankan", question: "Pemegang Saham yang sengaja melakukan tindak pidana perbankan, akan dijerat dengan pasal", options: ["Pasal 48 UU Perbankan atau Pasal 62 UU Perbankan Syariah", "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah", "Pasal 50 UU Perbankan atau Pasal 64 UU Perbankan Syariah", "Pasal 46 UU Perbankan atau Pasal 59 UU Perbankan Syariah"], answer: "Pasal 50A UU Perbankan atau Pasal 65 UU Perbankan Syariah", explanation: "Pasal 50A UU Perbankan dan Pasal 65 UU Perbankan Syariah secara spesifik mengatur sanksi pidana bagi Pemegang Saham Pengendali yang dengan sengaja menyebabkan bank tidak melaksanakan langkah perbaikan." },
    { id: 179, version: 2, category: "Perizinan", question: "Bank umum dapat menggunakan insentif berupa instant approval (permohonan izin dalam bentuk pemberitahuan) dalam hal telah memenuhi kriteria:", options: ["Profil risiko dengan penilaian 1 atau 2, serta TI memadai", "Profil risiko, KPMR, dan GCG dengan penilaian 1 atau 2, serta TI memadai", "Tingkat kesehatan dengan penilaian 1 atau 2, serta TI memadai", "KPMR dan GCG dengan penilaian 1 atau 2, serta TI memadai"], answer: "Tingkat kesehatan dengan penilaian 1 atau 2, serta TI memadai", explanation: "Insentif 'instant approval' diberikan kepada bank yang memiliki tingkat kesehatan sangat baik (peringkat 1 atau 2) dan didukung oleh infrastruktur teknologi informasi yang memadai." },
    { id: 180, version: 2, category: "Akuntansi", question: "Saat pencairan kredit, bank mencatat jurnal sebagai berikut:", options: ["Db. Kredit / Kr. Kas", "Db. Kas / Kr. Kredit", "Db. Kredit / Kr. Bunga", "Db. Beban bunga deposito / Kr. Kas"], answer: "Db. Kredit / Kr. Kas", explanation: "Saat kredit dicairkan, pos 'Kredit yang Diberikan' (aset) di sisi Debit bertambah, dan pos 'Kas' (aset) di sisi Kredit berkurang." },
    { id: 181, version: 2, category: "Akuntansi", question: "Pengeluaran yang sudah tidak memiliki manfaat adalah:", options: ["Kapitalisasi", "Aset", "Beban", "Ekuitas"], answer: "Beban", explanation: "Dalam akuntansi, pengeluaran yang manfaatnya telah habis dalam periode berjalan diakui sebagai beban (expense)." },
    { id: 182, version: 2, category: "Konglomerasi Keuangan", question: "Berikut ini yang merupakan organ pelengkap di dalam Konglomerasi Keuangan yang harus dibentuk oleh Konglomerasi Keuangan, kecuali:", options: ["Satuan Kerja Operasional Terintegrasi", "Satuan Kerja Kepatuhan Terintegrasi", "Satuan Kerja Audit Intern Terintegrasi", "Satuan Kerja Manajemen Risiko Terintegrasi"], answer: "Satuan Kerja Operasional Terintegrasi", explanation: "Organ pelengkap yang diwajibkan adalah untuk fungsi pengendalian seperti Kepatuhan, Audit Intern, dan Manajemen Risiko. Tidak ada kewajiban membentuk Satuan Kerja Operasional Terintegrasi." },
    { id: 183, version: 2, category: "Fit and Proper Test", question: "Pihak yang termasuk dalam kategori Pemegang Saham Pengendali adalah sebagai berikut, kecuali:", options: ["Orang dan/atau badan hukum yang melakukan pembelian, menerima hibah, menerima hak waris atau bentuk lain pengalihan hak atas saham Bank sehingga yang bersangkutan memiliki saham sebesar 25%", "Orang dan/atau badan hukum yang digolongkan sebagai pengendali Bank karena adanya perubahan struktur kelompok usaha Bank", "Orang dan/atau badan hukum yang akan menjadi PS Bank hasil peleburan (konsolidasi)", "Orang dan/atau badan hukum yang akan menjadi PSP pada Bank hasil penggabungan (merger)"], answer: "Orang dan/atau badan hukum yang akan menjadi PS Bank hasil peleburan (konsolidasi)", explanation: "Menjadi Pemegang Saham (PS) di bank hasil konsolidasi tidak secara otomatis menjadikannya Pemegang Saham Pengendali (PSP), kecuali jika memenuhi kriteria kepemilikan atau pengaruh signifikan lainnya." },
    { id: 184, version: 2, category: "Analisis Ekonomi", question: "Analisis yang digunakan untuk menentukan basis ekonomi dengan menggunakan data konsentrasi PDRB, yaitu:", options: ["Analisis shift share", "Analisis LQ/DLQ", "Analisis NPL", "Analisis forward & backward linkage"], answer: "Analisis LQ/DLQ", explanation: "Analisis Location Quotient (LQ) dan Dynamic Location Quotient (DLQ) secara spesifik digunakan untuk mengukur konsentrasi suatu sektor ekonomi di suatu daerah dibandingkan dengan skala yang lebih luas (misalnya, nasional) untuk menentukan sektor basis." },
    { id: 185, version: 2, category: "Perbankan Syariah", question: "Yang bukan merupakan ciri utama pada pembiayaan jual beli yaitu:", options: ["Harus ada underlying barang yang diperjualbelikan", "Nasabah berkewajiban hanya melunasi sebesar pokok pembiayaan kepada bank apabila dilakukan pelunasan dipercepat", "Harga jual yang disepakati tidak boleh berubah meskipun dilakukan perpanjangan akad", "Nasabah berkewajiban membayar hutangnya berupa harga jual yang terdiri dari pokok + margin meskipun dilakukan pembayaran dipercepat"], answer: "Nasabah berkewajiban hanya melunasi sebesar pokok pembiayaan kepada bank apabila dilakukan pelunasan dipercepat", explanation: "Dalam pembiayaan jual beli (murabahah), harga jual (pokok + margin) sudah ditetapkan di awal dan menjadi utang nasabah. Pelunasan dipercepat mungkin mendapatkan diskon (potongan), tetapi bukan berarti hanya membayar pokok." },
    { id: 186, version: 2, category: "Perizinan", question: "Berikut ini merupakan salah satu LPIP yang telah memperoleh izin usaha dari OJK, yaitu:", options: ["PT Pemeringkat Efek Indonesia (PEFINDO)", "PT Fitch Ratings Indonesia", "PT PEFINDO Biro Kredit", "PT Pemeringkat Kredit Indonesia", "PT Kredit Rating Indonesia"], answer: "PT Pemeringkat Efek Indonesia (PEFINDO)", explanation: "PEFINDO adalah salah satu Lembaga Pemeringkat Efek yang telah mendapatkan izin dari OJK. Opsi lain adalah lembaga pemeringkat atau biro kredit, bukan LPIP." },
    { id: 187, version: 2, category: "Manajemen Risiko", question: "Berikut adalah tujuan bagi OJK melaksanakan stress test, kecuali:", options: ["Meningkatkan fungsi Pengawasan Bank", "Penguatan Mitigasi dalam implementasi fungsi manajemen krisis", "Meningkatkan fungsi intermediasi", "Meningkatkan fungsi Surveilans"], answer: "Meningkatkan fungsi intermediasi", explanation: "Stress test adalah alat untuk mengukur ketahanan bank terhadap skenario krisis (fungsi pengawasan, surveilans, mitigasi krisis), bukan untuk mendorong peningkatan penyaluran kredit (fungsi intermediasi)." },
    { id: 188, version: 2, category: "Fit and Proper Test", question: "BPR atau BPR Syariah harus menyelenggarakan RUPS pengangkatan anggota Direksi dan anggota Dewan Komisaris paling lama", options: ["90 (sembilan puluh) hari kerja setelah tanggal persetujuan OJK", "60 (enam puluh) hari kerja setelah tanggal persetujuan OJK", "60 (enam puluh) hari setelah tanggal persetujuan OJK", "90 (Sembilan puluh) hari sejak tanggal persetujuan OJK"], answer: "60 (enam puluh) hari kerja setelah tanggal persetujuan OJK", explanation: "Setelah OJK menyetujui calon pengurus, BPR/BPRS wajib menyelenggarakan RUPS untuk pengangkatan resmi dalam jangka waktu paling lama 60 hari kerja." },
    { id: 189, version: 2, category: "Pengawasan", question: "Pengawasan Bank yang menggunakan strategi dan metodologi berdasarkan risiko yang memungkinkan pengawas Bank untuk mendeteksi risiko yang signifikan secara dini dan mengambil tindakan pengawasan yang sesuai dan tepat waktu merupakan definisi dari", options: ["Perencanaan Pemeriksaan Berbasis Risiko", "Pengawasan Bank Berbasis Risiko", "Know Your Bank", "Supervisory Action dan Monitoring"], answer: "Pengawasan Bank Berbasis Risiko", explanation: "Definisi tersebut secara tepat menjelaskan konsep dari Pengawasan Bank Berbasis Risiko (Risk-Based Supervision/RBS)." },
    { id: 190, version: 2, category: "Pemeriksaan", question: "Perbuatan berikut yang bukan merupakan PKP di bidang perkreditan/ pembiayaan adalah", options: ["Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.", "Pelunasan/pembayaran angsuran kredit tanpa disertai aliran dana.", "Pelanggaran BMPK.", "Mark up taksasi agunan."], answer: "Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.", explanation: "Penarikan uang kas tanpa underlying adalah PKP di bidang operasional atau perbendaharaan, bukan secara langsung di bidang perkreditan." },
    { id: 191, version: 2, category: "Pelaporan", question: "Menurut pendapat Saudara, mengapa laporan realisasi RBB dan laporan pengawasan RBB perlu digabungkan?", options: ["OJK lebih mengetahui kebutuhan data yang diperlukan dari BPR.", "Laporan realisasi RBB yang disampaikan tidak tercapai sesuai target.", "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.", "Laporan pengawasan RBB yang disusun dewan komisaris tidak memberikan upaya perbaikan yang harus dilakukan anggota direksi."], answer: "Agar laporan menjadi lebih fokus dan komprehensif serta mendukung efisiensi dan simplifikasi pelaporan.", explanation: "Penggabungan laporan bertujuan untuk efisiensi dan simplifikasi, sehingga OJK mendapatkan gambaran yang komprehensif dalam satu laporan terintegrasi." },
    { id: 192, version: 2, category: "Regulasi", question: "Permohonan pendaftaran Akuntan Publik (AP) telah disetujui oleh OJK serta telah diberikan Surat Tanda Terdaftar (STTD) maka AP dimaksud akan masuk ke publikasi sebagai:", options: ["Daftar AP yang dibekukan", "Daftar AP yang Aktif", "Daftar AP yang tidak boleh audit LJK", "Daftar AP Tidak Aktif Sementara waktu", "Daftar AP Tidak Aktif Tetap"], answer: "Daftar AP yang Aktif", explanation: "Setelah terdaftar dan mendapatkan STTD, Akuntan Publik akan masuk ke dalam daftar publikasi AP yang berstatus aktif dan dapat memberikan jasa pada LJK." },
    { id: 193, version: 2, category: "Produk Bank", question: "Produk simpanan dengan setoran rutin dalam jangka waktu tertentu yang tidak dapat dicairkan sebelum jangka waktu tertentu disebut?", options: ["Deposito Mudharabah", "Tabungan Berjangka", "Deposito", "Tabungan"], answer: "Tabungan Berjangka", explanation: "Tabungan Berjangka memiliki karakteristik setoran rutin (misalnya bulanan) dan jangka waktu tertentu, berbeda dengan deposito yang umumnya hanya sekali setoran di awal." },
    { id: 194, version: 2, category: "Pemeriksaan", question: "Berdasarkan SEDK Nomor 13/SEDK.03/2016 tentang Pedoman Pengawasan Bank Berdasarkan Risiko Untuk Tahapan Penyusunan Rencana Kerja Pemeriksaan, tujuan penyusunan AWP adalah sebagai berikut, kecuali", options: ["Efektivitas waktu", "Penyusunan strategi pemeriksaan", "Ketertiban dokumentasi", "Panduan penyediaan data oleh Bank"], answer: "Panduan penyediaan data oleh Bank", explanation: "Tujuan AWP adalah untuk internal tim pemeriksa (efektivitas, strategi, dokumentasi), bukan sebagai panduan bagi bank yang diperiksa untuk menyediakan data." },
    { id: 195, version: 2, category: "Pengembangan Pengawasan", question: "Berikut ini merupakan output/laporan yang disusun oleh fungsi Database, kecuali", options: ["Materi Laporan Triwulan OJK", "Peta Strategis OJK", "Informasi dan data statistik keuangan perbankan daerah", "Laporan mingguan Satuan Kerja"], answer: "Peta Strategis OJK", explanation: "Peta Strategis OJK adalah dokumen perencanaan strategis level institusi, bukan output rutin dari fungsi pengelolaan database." },
    { id: 196, version: 2, category: "Pelaporan", question: "Bank A merupakan emiten dan perusahaan publik. Sehubungan dengan hal tersebut, bank wajib menyampaian laporan publikasi keuangan dan informasi kinerja keuangan tahunan melalui:", options: ["SIPENA", "SPE", "APOLO", "APOLO dan SPE"], answer: "APOLO dan SPE", explanation: "Sebagai bank, wajib lapor melalui APOLO. Sebagai emiten, wajib lapor melalui Sistem Pelaporan Elektronik (SPE) OJK. Jadi, harus melalui keduanya." },
    { id: 197, version: 2, category: "Koordinasi", question: "Dalam rangka koordinasi OJK dengan LPS, dilakukan koordinasi setiap", options: ["Triwulanan", "Bulanan atau triwulanan", "Bulanan", "Bulanan dan triwulanan"], answer: "Bulanan dan triwulanan", explanation: "Koordinasi antara OJK dan LPS dilakukan secara rutin bulanan untuk data dan informasi operasional, serta triwulanan untuk pembahasan yang lebih strategis." },
    { id: 198, version: 2, category: "Pengembangan Ekonomi", question: "Hal-hal yang perlu menjadi fokus pembahasan dalam pelaksanaan FGD dengan stakeholder adalah kecuali:", options: ["Dampak pengembangan komoditas", "Langkah pengendalian hama dan antisipasi perubahan cuaca", "Identifikasi value chain komoditas terpilih", "Penetapan skema akses keuangan"], answer: "Langkah pengendalian hama dan antisipasi perubahan cuaca", explanation: "FGD fokus pada aspek ekonomi dan keuangan (dampak, value chain, skema keuangan). Aspek teknis pertanian seperti pengendalian hama berada di luar lingkup utama pembahasan." },
    { id: 199, version: 2, category: "Pemeriksaan", question: "Manakah perbuatan berikut yang merupakan PKP di bidang perkreditan/ pembiayaan", options: ["Penarikan uang kas tanpa underlying dan dicatat pada pos yang tidak semestinya.", "Rekayasa kolektibilitas kredit/pembiayaan", "Pelanggaran terkait rahasia bank.", "Pelanggaran Cease and Desist Order (CDO) berupa pemberian kredit pada masa Bank dinyatakan Dalam Pengawasan Khusus."], answer: "Rekayasa kolektibilitas kredit/pembiayaan", explanation: "Rekayasa kolektibilitas adalah Penyimpangan Ketentuan Perbankan (PKP) yang secara langsung terkait dengan bidang perkreditan, di mana kualitas kredit ditampilkan lebih baik dari kondisi sebenarnya." },
    { id: 200, version: 2, category: "Perbankan Syariah", question: "Kerangka tata kelola syariah bagi BUS dan UUS terdiri dari:", options: ["DPS, komite syariah, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah", "DPS, kepatuhan dan manajemen risiko syariah, audit intern syariah, audit ekstern syariah", "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah", "DPS, kepatuhan syariah, komite syariah, audit intern syariah, audit ekstern syariah"], answer: "DPS, kepatuhan syariah, manajemen risiko syariah, audit intern syariah, kaji ulang ekstern syariah", explanation: "Kerangka tata kelola syariah yang komprehensif mencakup semua elemen tersebut, mulai dari pengawasan oleh DPS hingga fungsi pengendalian dan review oleh pihak internal dan eksternal." }
];


