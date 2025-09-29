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
  { id: 400, version: 4, category: "Regulasi Perbankan", question: "BPR XYZ telah diberikan perpanjangan jangka waktu pengawasan intensif dan akan berakhir pada tanggal 2 November 2021. Apabila sampai dengan batas waktu perpanjangan tersebut berakhir tidak terdapat peningkatan kondisi keuangan dan rasio KPMM berada pada posisi 9%, maka:", options: ["Jawaban tidak ada yang sesuai.", "OJK menetapkan perpanjangan jangka waktu pengawasan intensif.", "OJK meminta BPR untuk menyusun rencana tindak (action plan).", "OJK menetapkan BPR dalam pengawasan khusus."], answer: "OJK menetapkan BPR dalam pengawasan khusus.", explanation: "" }
];




