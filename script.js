/* =============================================
   BAHAN AJAR IPAS — KELAS 6 SD
   script.js
   45 Soal PG sesuai butir kisi-kisi
   ============================================= */

// ═══════════════════════════════════════════
// 1. NAVIGASI
// ═══════════════════════════════════════════
function goTab(name, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}
function toggleCard(bodyId, arrowEl) {
  const body = document.getElementById(bodyId);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  arrowEl.classList.toggle('open', !isOpen);
}

// ═══════════════════════════════════════════
// 2. DATA — 45 SOAL PG (sesuai urutan kisi-kisi)
// ═══════════════════════════════════════════
const pgData = [
  // 1. Lapisan atmosfer yang melindungi dari UV
  {
    no: 1, cat: 'Atmosfer', cc: 'b-sky',
    q: 'Lapisan atmosfer yang melindungi Bumi dari sinar ultraviolet (UV) berbahaya yang berasal dari Matahari adalah ...',
    opts: ['Troposfer', 'Stratosfer (lapisan ozon)', 'Mesosfer', 'Termosfer'],
    ans: 1,
    why: 'Stratosfer mengandung lapisan ozon (O₃) yang berfungsi menyerap dan memfilter sinar UV berbahaya dari Matahari sebelum sampai ke permukaan Bumi.'
  },
  // 2. Posisi Matahari, Bulan, Bumi saat gerhana Matahari
  {
    no: 2, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Posisi Matahari, Bulan, dan Bumi yang tepat saat terjadi gerhana Matahari adalah ...',
    opts: [
      'Bumi berada di antara Matahari dan Bulan',
      'Bulan berada di antara Matahari dan Bumi',
      'Matahari berada di antara Bumi dan Bulan',
      'Bumi, Bulan, dan Matahari membentuk segitiga'
    ],
    ans: 1,
    why: 'Gerhana Matahari terjadi ketika Bulan berada di antara Matahari dan Bumi, sehingga Bulan menghalangi cahaya Matahari menuju Bumi (terjadi pada fase bulan baru).'
  },
  // 3. Dampak negatif pembakaran hutan
  {
    no: 3, cat: 'Lingkungan', cc: 'b-green',
    q: 'Dampak negatif pembakaran hutan terhadap lingkungan yang paling tepat adalah ...',
    opts: [
      'Meningkatkan keanekaragaman hayati',
      'Mempercepat pertumbuhan tanaman baru',
      'Melepaskan karbon dioksida yang memperparah pemanasan global dan merusak ekosistem',
      'Membersihkan udara dari polutan'
    ],
    ans: 2,
    why: 'Pembakaran hutan melepaskan CO₂ dalam jumlah besar, menghilangkan habitat satwa liar, menyebabkan kabut asap yang membahayakan kesehatan, dan memperparah pemanasan global.'
  },
  // 4. Pemanfaatan sampah plastik ramah lingkungan
  {
    no: 4, cat: 'Lingkungan', cc: 'b-green',
    q: 'Cara pemanfaatan sampah plastik yang paling ramah lingkungan adalah ...',
    opts: [
      'Membakar sampah plastik agar cepat habis',
      'Membuang plastik ke sungai agar terbawa arus',
      'Mendaur ulang plastik menjadi produk baru seperti tas, pot tanaman, atau bahan bangunan',
      'Menimbun plastik dalam tanah'
    ],
    ans: 2,
    why: 'Mendaur ulang plastik (recycling) adalah cara paling ramah lingkungan karena mengurangi limbah plastik, menghemat sumber daya, dan mencegah pencemaran lingkungan.'
  },
  // 5. Pengertian rotasi Bumi
  {
    no: 5, cat: 'Bumi & Antariksa', cc: 'b-purple',
    q: 'Pengertian rotasi Bumi yang paling tepat adalah ...',
    opts: [
      'Pergerakan Bumi mengelilingi Matahari dalam satu tahun',
      'Pergerakan Bulan mengelilingi Bumi',
      'Perputaran Bumi pada porosnya sendiri dari barat ke timur',
      'Pergerakan Matahari mengelilingi galaksi'
    ],
    ans: 2,
    why: 'Rotasi Bumi adalah perputaran Bumi pada porosnya sendiri dari arah barat ke timur. Satu kali rotasi membutuhkan waktu ±24 jam (1 hari) dan menyebabkan terjadinya siang dan malam.'
  },
  // 6. Bentuk energi pada peralatan listrik
  {
    no: 6, cat: 'Energi', cc: 'b-amber',
    q: 'Bentuk energi yang digunakan oleh peralatan listrik seperti kipas angin, lampu, dan setrika adalah ...',
    opts: ['Energi kimia', 'Energi listrik', 'Energi nuklir', 'Energi mekanik'],
    ans: 1,
    why: 'Semua peralatan listrik menggunakan energi listrik sebagai sumber energi utama. Energi listrik kemudian diubah menjadi bentuk energi lain (gerak, cahaya, panas, dll.).'
  },
  // 7. Fungsi energi kimia dari makanan bagi tubuh
  {
    no: 7, cat: 'Energi', cc: 'b-amber',
    q: 'Energi kimia yang terdapat pada makanan berfungsi bagi tubuh manusia untuk ...',
    opts: [
      'Menghasilkan cahaya agar tubuh terlihat bercahaya',
      'Menjalankan semua aktivitas tubuh seperti bergerak, berpikir, bernafas, dan pertumbuhan',
      'Menghasilkan listrik untuk otak',
      'Membuat tubuh menjadi panas secara berlebihan'
    ],
    ans: 1,
    why: 'Energi kimia dari makanan (karbohidrat, lemak, protein) diubah tubuh menjadi energi untuk semua aktivitas: bergerak, berpikir, bernafas, pertumbuhan, dan menjaga suhu tubuh.'
  },
  // 8. Jenis energi terbarukan dari gambar pemanfaatan energi
  {
    no: 8, cat: 'Energi', cc: 'b-amber',
    q: 'Perhatikan gambar panel surya yang dipasang di atap rumah. Jenis energi terbarukan yang dimanfaatkan adalah ...',
    opts: ['Energi angin', 'Energi air', 'Energi surya/matahari', 'Energi panas bumi'],
    ans: 2,
    why: 'Panel surya (solar panel) memanfaatkan energi surya/matahari untuk menghasilkan listrik melalui efek fotovoltaik. Energi matahari termasuk energi terbarukan karena tidak akan habis.'
  },
  // 9. Pengelompokan planet berdasarkan posisi
  {
    no: 9, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Planet dalam (inner planet) adalah planet yang orbitnya berada di dalam sabuk asteroid. Yang termasuk planet dalam adalah ...',
    opts: [
      'Jupiter, Saturnus, Uranus, Neptunus',
      'Merkurius, Venus, Bumi, Mars',
      'Mars, Jupiter, Saturnus, Uranus',
      'Venus, Bumi, Mars, Jupiter'
    ],
    ans: 1,
    why: 'Planet dalam (inner planet) terdiri dari: Merkurius, Venus, Bumi, dan Mars — keempat planet yang orbitnya berada di antara Matahari dan sabuk asteroid.'
  },
  // 10. Identifikasi energi fosil
  {
    no: 10, cat: 'Energi', cc: 'b-amber',
    q: 'Di antara sumber energi berikut, yang termasuk bahan bakar fosil adalah ...',
    opts: [
      'Energi matahari, angin, dan air',
      'Minyak bumi, batu bara, dan gas alam',
      'Energi panas bumi dan biogas',
      'Energi nuklir dan hidrogen'
    ],
    ans: 1,
    why: 'Bahan bakar fosil adalah energi yang berasal dari sisa-sisa makhluk hidup yang terkubur jutaan tahun lalu. Tiga jenis utama: minyak bumi (cair), batu bara (padat), dan gas alam (gas).'
  },
  // 11. Identifikasi jenis energi dari gambar pemanfaatan
  {
    no: 11, cat: 'Energi', cc: 'b-amber',
    q: 'Perhatikan gambar kincir angin (wind turbine) yang digunakan untuk menghasilkan listrik. Jenis energi yang dimanfaatkan adalah ...',
    opts: ['Energi panas bumi', 'Energi angin', 'Energi air', 'Energi surya'],
    ans: 1,
    why: 'Kincir angin (wind turbine) memanfaatkan energi angin untuk menggerakkan baling-baling yang terhubung dengan generator, menghasilkan energi listrik.'
  },
  // 12. Kelemahan energi gas alam
  {
    no: 12, cat: 'Energi', cc: 'b-amber',
    q: 'Pernyataan tentang energi gas alam: "Gas alam adalah sumber energi yang lebih bersih dari batu bara." Kelemahan utama penggunaan gas alam adalah ...',
    opts: [
      'Gas alam sangat berlimpah dan tidak akan habis',
      'Gas alam mudah ditemukan di mana saja',
      'Gas alam termasuk energi tidak terbarukan yang akan habis, dan berpotensi menyebabkan ledakan jika bocor',
      'Gas alam tidak menghasilkan emisi gas buang sama sekali'
    ],
    ans: 2,
    why: 'Kelemahan gas alam: (1) termasuk energi tidak terbarukan/fosil yang akan habis, (2) jika bocor berpotensi menimbulkan ledakan, (3) tetap menghasilkan CO₂ meski lebih sedikit dari batu bara.'
  },
  // 13. Benda langit yang memancarkan cahaya sendiri
  {
    no: 13, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Ciri-ciri benda langit: memancarkan cahaya sendiri, suhunya sangat tinggi (jutaan derajat), dan tersusun dari gas hidrogen dan helium. Benda langit yang dimaksud adalah ...',
    opts: ['Planet', 'Satelit', 'Asteroid', 'Bintang'],
    ans: 3,
    why: 'Bintang adalah benda langit yang memancarkan cahayanya sendiri karena reaksi fusi nuklir di intinya. Matahari adalah contoh bintang terdekat dari Bumi.'
  },
  // 14. Peran satelit alami Bumi (Bulan)
  {
    no: 14, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Satelit alami Bumi adalah Bulan. Salah satu peran Bulan terhadap peristiwa alam di Bumi adalah ...',
    opts: [
      'Menghasilkan siang dan malam',
      'Menyebabkan terjadinya pasang surut air laut akibat gaya gravitasinya',
      'Menghasilkan musim panas dan dingin',
      'Menjaga Bumi tetap berputar pada porosnya'
    ],
    ans: 1,
    why: 'Bulan mempengaruhi Bumi melalui gaya gravitasinya yang menyebabkan pasang surut air laut. Saat Bulan purnama dan bulan baru, pasang paling tinggi (pasang purnama/pasang besar) terjadi.'
  },
  // 15. Dampak aktivitas manusia terhadap lingkungan
  {
    no: 15, cat: 'Lingkungan', cc: 'b-green',
    q: 'Gambar menunjukkan aktivitas penebangan hutan secara besar-besaran. Dampak yang ditimbulkan terhadap lingkungan adalah ...',
    opts: [
      'Meningkatkan penyerapan CO₂ dari udara',
      'Menyebabkan banjir, tanah longsor, hilangnya habitat satwa, dan berkurangnya penyerapan CO₂',
      'Mempercepat pertumbuhan hutan baru',
      'Tidak berdampak jika dilakukan dengan alat modern'
    ],
    ans: 1,
    why: 'Penebangan hutan (deforestasi) menyebabkan: banjir dan tanah longsor (tidak ada akar penahan), hilangnya habitat satwa (kepunahan), berkurangnya penyerapan CO₂ (memperparah pemanasan global).'
  },
  // 16. Penyebab utama pencemaran air
  {
    no: 16, cat: 'Lingkungan', cc: 'b-green',
    q: 'Di antara aktivitas manusia berikut, yang merupakan penyebab utama pencemaran air adalah ...',
    opts: [
      'Menanam pohon di tepi sungai',
      'Membuang limbah industri dan sampah langsung ke sungai serta penggunaan pestisida berlebihan',
      'Menggunakan air secara hemat',
      'Membuat instalasi pengolahan air bersih'
    ],
    ans: 1,
    why: 'Penyebab utama pencemaran air: pembuangan limbah industri ke sungai, pembuangan sampah, penggunaan pestisida/pupuk berlebihan yang mengalir ke perairan, dan kebocoran minyak.'
  },
  // 17. Dampak negatif pembakaran sampah
  {
    no: 17, cat: 'Lingkungan', cc: 'b-green',
    q: 'Aktivitas pembakaran sampah secara terbuka menimbulkan dampak negatif terhadap lingkungan dan kesehatan, yaitu ...',
    opts: [
      'Menghasilkan oksigen segar untuk pernapasan',
      'Mengurangi polusi tanah dan air',
      'Menghasilkan asap beracun (dioksin, furan) yang mencemari udara dan berbahaya bagi kesehatan paru-paru',
      'Mempercepat daur ulang sampah secara alami'
    ],
    ans: 2,
    why: 'Pembakaran sampah terbuka menghasilkan: asap beracun (dioksin, karbon monoksida), partikel halus (PM2.5) yang merusak paru-paru, dan gas CO₂ yang memperparah efek rumah kaca.'
  },
  // 18. Permasalahan lingkungan akibat faktor alam
  {
    no: 18, cat: 'Lingkungan', cc: 'b-green',
    q: 'Di antara permasalahan lingkungan berikut, yang disebabkan oleh faktor alam (bukan aktivitas manusia) adalah ...',
    opts: [
      'Pencemaran air akibat limbah pabrik',
      'Kerusakan terumbu karang akibat pembuangan jangkar kapal',
      'Letusan gunung berapi yang merusak ekosistem sekitarnya',
      'Penumpukan sampah plastik di lautan'
    ],
    ans: 2,
    why: 'Letusan gunung berapi adalah bencana alam yang terjadi karena aktivitas geologi (faktor alam), bukan ulah manusia. Akibatnya: kerusakan ekosistem, hujan abu, dan lava yang menghancurkan.'
  },
  // 19. Akibat rotasi Bumi
  {
    no: 19, cat: 'Bumi & Antariksa', cc: 'b-purple',
    q: 'Gambar menunjukkan Bumi yang berputar pada porosnya. Akibat yang ditimbulkan dari rotasi Bumi adalah ...',
    opts: [
      'Terjadinya pergantian musim',
      'Terjadinya gerhana Matahari',
      'Terjadinya siang dan malam serta perbedaan waktu di berbagai wilayah',
      'Terjadinya pasang surut air laut'
    ],
    ans: 2,
    why: 'Akibat rotasi Bumi: (1) siang dan malam — bagian yang menghadap Matahari = siang, bagian yang membelakangi = malam, (2) perbedaan waktu antar wilayah, (3) gerak semu harian Matahari.'
  },
  // 20. Dampak revolusi Bulan terhadap Bumi
  {
    no: 20, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Pernyataan yang merupakan dampak revolusi Bulan (pergerakan Bulan mengelilingi Bumi) terhadap Bumi adalah ...',
    opts: [
      'Terjadinya siang dan malam',
      'Terjadinya pergantian musim di belahan Bumi utara dan selatan',
      'Terjadinya perubahan penampakan Bulan (fase Bulan) dan gerhana',
      'Terjadinya perbedaan waktu di berbagai kota'
    ],
    ans: 2,
    why: 'Revolusi Bulan mengelilingi Bumi menyebabkan: perubahan fase/penampakan Bulan (bulan baru → sabit → separuh → purnama), dan memungkinkan terjadinya gerhana (Matahari dan Bulan).'
  },
  // 21. Gerhana Matahari total
  {
    no: 21, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Gambar menunjukkan posisi Matahari, Bulan, dan Bumi saat gerhana Matahari total. Kondisi yang terjadi adalah ...',
    opts: [
      'Bumi masuk ke dalam umbra (bayangan inti) Bulan sehingga Matahari tertutup seluruhnya',
      'Bulan masuk ke dalam bayangan Bumi',
      'Hanya sebagian Matahari yang tertutup oleh Bulan',
      'Matahari tertutup seluruhnya oleh Bumi'
    ],
    ans: 0,
    why: 'Gerhana Matahari total terjadi saat Bumi masuk ke dalam umbra (bayangan inti/penumbra terdalam) Bulan, sehingga Matahari tertutup seluruhnya dan langit menjadi gelap sesaat.'
  },
  // 22. Identifikasi jenis energi dari ciri-ciri
  {
    no: 22, cat: 'Energi', cc: 'b-amber',
    q: 'Ciri-ciri sumber energi: berasal dari panas dalam inti Bumi, tidak akan habis, dan dimanfaatkan dengan mengalirkan uap panas ke turbin. Sumber energi yang sesuai adalah ...',
    opts: ['Energi angin', 'Energi air', 'Energi panas bumi (geothermal)', 'Energi surya'],
    ans: 2,
    why: 'Energi panas bumi (geothermal) berasal dari panas dalam inti Bumi. Uap panas yang keluar dimanfaatkan untuk menggerakkan turbin dan menghasilkan listrik. Indonesia memiliki cadangan geothermal terbesar di dunia.'
  },
  // 23. Kelebihan energi terbarukan vs fosil
  {
    no: 23, cat: 'Energi', cc: 'b-amber',
    q: 'Gambar menampilkan PLTU (berbahan batu bara) dan PLTS (panel surya). Kelebihan energi terbarukan (PLTS) dibanding energi fosil (PLTU) adalah ...',
    opts: [
      'Energi terbarukan menghasilkan listrik lebih besar dan lebih murah selalu',
      'Energi terbarukan tidak menghasilkan emisi gas rumah kaca dan tidak akan habis',
      'Energi terbarukan lebih mudah dibangun di semua daerah',
      'Energi terbarukan sudah menggantikan semua energi fosil di Indonesia'
    ],
    ans: 1,
    why: 'Kelebihan energi terbarukan: (1) ramah lingkungan — tidak/minim emisi GRK, (2) tidak akan habis (matahari, angin, air terus ada), (3) mengurangi ketergantungan pada bahan bakar impor.'
  },
  // 24. Kekurangan energi terbarukan
  {
    no: 24, cat: 'Energi', cc: 'b-amber',
    q: 'Pernyataan yang merupakan kekurangan (kelemahan) energi terbarukan adalah ...',
    opts: [
      'Energi terbarukan menghasilkan polusi udara yang besar',
      'Biaya awal instalasi tinggi dan bergantung pada kondisi alam (cuaca, musim, lokasi)',
      'Energi terbarukan akan segera habis dalam 50 tahun ke depan',
      'Energi terbarukan tidak bisa digunakan di Indonesia'
    ],
    ans: 1,
    why: 'Kekurangan energi terbarukan: (1) biaya instalasi awal mahal, (2) bergantung pada kondisi alam (panel surya tidak efektif saat mendung, angin tidak selalu kencang), (3) belum bisa menggantikan fosil sepenuhnya.'
  },
  // 25. Pemanfaatan wilayah perairan sebagai sumber energi
  {
    no: 25, cat: 'Energi', cc: 'b-amber',
    q: 'Wilayah perairan seperti sungai besar, air terjun, dan laut (pasang surut) dapat dimanfaatkan sebagai sumber energi untuk ...',
    opts: [
      'Menghasilkan energi kimia melalui proses fotosintesis',
      'Menghasilkan energi listrik melalui Pembangkit Listrik Tenaga Air (PLTA) dan energi pasang surut',
      'Menghasilkan minyak bumi dari dasar laut',
      'Menyimpan energi surya dalam air'
    ],
    ans: 1,
    why: 'Wilayah perairan dimanfaatkan sebagai: PLTA (aliran sungai/bendungan menggerakkan turbin), PLTGL (gelombang laut), dan energi pasang surut. Indonesia memiliki banyak sungai besar untuk PLTA.'
  },
  // 26. Alasan pengurangan plastik sekali pakai
  {
    no: 26, cat: 'Lingkungan', cc: 'b-green',
    q: 'Penggunaan plastik sekali pakai perlu dikurangi karena ...',
    opts: [
      'Plastik terlalu mahal untuk diproduksi',
      'Plastik mudah terurai di lingkungan dalam waktu singkat',
      'Plastik membutuhkan ratusan tahun untuk terurai dan mencemari tanah, air, serta membahayakan makhluk hidup',
      'Plastik tidak bisa didaur ulang sama sekali'
    ],
    ans: 2,
    why: 'Plastik sekali pakai dikurangi karena: (1) sulit terurai (ratusan hingga ribuan tahun), (2) mencemari tanah dan air, (3) membahayakan hewan laut yang menelannya, (4) menghasilkan mikroplastik berbahaya.'
  },
  // 27. Dampak negatif pupuk berlebihan terhadap perairan
  {
    no: 27, cat: 'Lingkungan', cc: 'b-green',
    q: 'Penggunaan pupuk kimia secara berlebihan dan terbawa aliran air ke sungai/danau dapat mengakibatkan ...',
    opts: [
      'Air sungai menjadi lebih jernih dan bersih',
      'Pertumbuhan alga/eceng gondok berlebihan (eutrofikasi) yang menghabiskan oksigen dan mematikan ikan',
      'Meningkatnya populasi ikan di sungai',
      'Tidak ada dampak pada ekosistem perairan'
    ],
    ans: 1,
    why: 'Pupuk yang terbawa ke perairan menyebabkan eutrofikasi: pertumbuhan alga berlebihan → alga mati dan membusuk → bakteri menghabiskan oksigen → ikan dan organisme air kekurangan oksigen dan mati.'
  },
  // 28. Tindakan mengurangi pemanasan global
  {
    no: 28, cat: 'Lingkungan', cc: 'b-green',
    q: 'Di antara aktivitas berikut, yang dapat membantu mengurangi pemanasan global adalah ...',
    opts: [
      'Menggunakan kendaraan bermotor untuk jarak dekat',
      'Membiarkan lampu menyala sepanjang hari',
      'Menanam pohon, menggunakan energi terbarukan, dan mengurangi penggunaan bahan bakar fosil',
      'Membakar sampah plastik untuk mengurangi volume sampah'
    ],
    ans: 2,
    why: 'Cara mengurangi pemanasan global: menanam pohon (menyerap CO₂), menggunakan energi terbarukan (non-emisi), menghemat listrik, naik transportasi umum, dan mengurangi penggunaan bahan bakar fosil.'
  },
  // 29. Identifikasi benda langit dari pernyataan
  {
    no: 29, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Pernyataan: "Benda langit ini tidak memiliki cahaya sendiri, mengorbit planet, dan salah satunya adalah Bulan." Benda langit yang dimaksud adalah ...',
    opts: ['Bintang', 'Planet', 'Satelit', 'Komet'],
    ans: 2,
    why: 'Satelit adalah benda langit yang mengorbit planet dan tidak menghasilkan cahaya sendiri (hanya memantulkan cahaya bintang/Matahari). Bulan adalah satelit alami Bumi.'
  },
  // 30. Identifikasi planet dari ciri khas
  {
    no: 30, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Gambar menunjukkan planet yang memiliki cincin indah mengelilinginya dan merupakan planet terbesar kedua di tata surya. Planet yang dimaksud adalah ...',
    opts: ['Jupiter', 'Uranus', 'Saturnus', 'Neptunus'],
    ans: 2,
    why: 'Saturnus dikenal karena cincinnya yang indah dan paling jelas terlihat di antara semua planet bercincin. Saturnus adalah planet terbesar kedua setelah Jupiter.'
  },
  // 31. Planet-planet kelompok planet dalam
  {
    no: 31, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Planet-planet yang termasuk kelompok planet dalam (inner planet) adalah ...',
    opts: [
      'Jupiter, Saturnus, Uranus, Neptunus',
      'Merkurius, Venus, Bumi, Mars',
      'Mars, Jupiter, Saturnus, Uranus',
      'Bumi, Mars, Jupiter, Saturnus'
    ],
    ans: 1,
    why: 'Planet dalam (inner planet) = Merkurius, Venus, Bumi, Mars. Cirinya: berukuran lebih kecil, berbatu/padat, dan orbitnya di antara Matahari dan sabuk asteroid.'
  },
  // 32. Lapisan terluar Matahari
  {
    no: 32, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Lapisan-lapisan Matahari dari dalam ke luar adalah: inti, zona radiasi, zona konveksi, fotosfer, kromosfer, dan korona. Lapisan terluar Matahari yang dapat terlihat saat gerhana total adalah ...',
    opts: ['Fotosfer', 'Kromosfer', 'Korona', 'Inti'],
    ans: 2,
    why: 'Korona adalah lapisan terluar atmosfer Matahari yang tampak sebagai cahaya putih keperakan saat gerhana Matahari total. Korona memiliki suhu sangat tinggi (jutaan derajat Celsius).'
  },
  // 33. Perubahan energi listrik pada setrika
  {
    no: 33, cat: 'Energi', cc: 'b-amber',
    q: 'Gambar menunjukkan setrika yang sedang digunakan. Perubahan energi yang terjadi pada setrika adalah ...',
    opts: [
      'Energi listrik → Energi cahaya',
      'Energi listrik → Energi gerak',
      'Energi listrik → Energi panas (kalor)',
      'Energi listrik → Energi kimia'
    ],
    ans: 2,
    why: 'Setrika mengubah energi listrik menjadi energi panas (kalor) melalui elemen pemanas. Panas inilah yang digunakan untuk melicinkan pakaian.'
  },
  // 34. Produk ramah lingkungan
  {
    no: 34, cat: 'Lingkungan', cc: 'b-green',
    q: 'Jenis produk yang termasuk kategori ramah lingkungan adalah ...',
    opts: [
      'Produk berbahan plastik sekali pakai yang murah',
      'Produk berbahan daur ulang, biodegradable, atau yang menggunakan kemasan minimal',
      'Produk yang menggunakan banyak bahan kimia sintetis',
      'Produk yang dikemas dengan plastik berlapis'
    ],
    ans: 1,
    why: 'Produk ramah lingkungan adalah produk yang: (1) menggunakan bahan daur ulang, (2) biodegradable (mudah terurai), (3) menggunakan kemasan minimal/ramah lingkungan, (4) proses produksinya tidak mencemari.'
  },
  // 35. Contoh produk ramah lingkungan di bidang pertanian
  {
    no: 35, cat: 'Lingkungan', cc: 'b-green',
    q: 'Contoh produk ramah lingkungan di bidang pertanian adalah ...',
    opts: [
      'Pupuk kimia sintetis dan pestisida kimia berbahaya',
      'Pupuk organik (kompos, pupuk kandang) dan pestisida nabati',
      'Plastik mulsa yang tidak dapat terurai',
      'Herbisida kimia untuk membasmi gulma'
    ],
    ans: 1,
    why: 'Produk ramah lingkungan di pertanian: pupuk organik/kompos (dari bahan alami, tidak mencemari air), pestisida nabati (dari tanaman, mudah terurai), dan benih lokal yang tidak memerlukan banyak pupuk kimia.'
  },
  // 36. Jumlah revolusi Bulan dalam setahun
  {
    no: 36, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Bulan membutuhkan waktu sekitar 29,5 hari untuk satu kali revolusi mengelilingi Bumi. Dalam satu tahun (365 hari), Bulan melakukan revolusi sebanyak ...',
    opts: ['10 kali', '12 kali', '12,4 kali (sekitar 12 kali)', '15 kali'],
    ans: 2,
    why: '365 hari ÷ 29,5 hari/revolusi ≈ 12,37 ≈ 12 kali revolusi. Inilah mengapa satu tahun memiliki 12 bulan dalam kalender Masehi (berdasarkan revolusi Bulan).'
  },
  // 37. Bahan bakar fosil berdasarkan bentuk dan asal
  {
    no: 37, cat: 'Energi', cc: 'b-amber',
    q: 'Bahan bakar fosil yang berbentuk padat dan berasal dari sisa tumbuhan purba yang terkubur jutaan tahun adalah ...',
    opts: ['Minyak bumi', 'Gas alam', 'Batu bara', 'Biogas'],
    ans: 2,
    why: 'Batu bara adalah bahan bakar fosil berbentuk padat yang berasal dari sisa-sisa tumbuhan (terutama pohon besar) yang terkubur dan tertekan selama jutaan tahun hingga membentuk batuan berwarna hitam.'
  },
  // 38. Energi terbarukan lebih ramah lingkungan
  {
    no: 38, cat: 'Energi', cc: 'b-amber',
    q: 'Alasan energi terbarukan lebih ramah lingkungan dibandingkan energi fosil adalah ...',
    opts: [
      'Energi terbarukan menghasilkan lebih banyak listrik',
      'Energi terbarukan tidak menghasilkan emisi gas rumah kaca yang signifikan dan sumbernya tidak akan habis',
      'Energi terbarukan lebih murah dari energi fosil di semua kondisi',
      'Energi terbarukan sudah digunakan sejak zaman dahulu'
    ],
    ans: 1,
    why: 'Energi terbarukan lebih ramah lingkungan karena: (1) tidak/minim emisi CO₂ dan gas rumah kaca, (2) sumbernya tidak habis (matahari, angin, air selalu ada), (3) tidak menghasilkan limbah berbahaya.'
  },
  // 39. Gas penyebab efek rumah kaca
  {
    no: 39, cat: 'Lingkungan', cc: 'b-green',
    q: 'Gas-gas yang menjadi penyebab utama efek rumah kaca (greenhouse gases) adalah ...',
    opts: [
      'Oksigen (O₂) dan nitrogen (N₂)',
      'Karbon dioksida (CO₂), metana (CH₄), dan uap air (H₂O)',
      'Hidrogen (H₂) dan helium (He)',
      'Argon (Ar) dan neon (Ne)'
    ],
    ans: 1,
    why: 'Gas rumah kaca utama: CO₂ (dari pembakaran bahan bakar dan deforestasi), CH₄ metana (dari peternakan dan sampah), N₂O (dari pupuk), dan uap air (H₂O). Gas-gas ini memerangkap panas di atmosfer.'
  },
  // 40. Penyebab kenaikan permukaan air laut
  {
    no: 40, cat: 'Lingkungan', cc: 'b-green',
    q: 'Penyebab utama kenaikan permukaan air laut yang terjadi saat ini adalah ...',
    opts: [
      'Bertambahnya jumlah air hujan secara global',
      'Mencairnya es di kutub dan gletser akibat pemanasan global yang disebabkan efek rumah kaca',
      'Penguapan air laut yang berkurang',
      'Aktivitas gunung berapi di dasar laut'
    ],
    ans: 1,
    why: 'Kenaikan permukaan air laut disebabkan oleh: (1) mencairnya es di kutub (Arktik, Antartika) dan gletser akibat suhu Bumi yang meningkat karena efek rumah kaca, dan (2) pemuaian air laut akibat pemanasan.'
  },
  // 41. Urutan planet dari Matahari
  {
    no: 41, cat: 'Tata Surya', cc: 'b-blue',
    q: 'Urutan 8 planet dalam tata surya berdasarkan jaraknya dari Matahari (dari terdekat ke terjauh) adalah ...',
    opts: [
      'Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus',
      'Merkurius, Bumi, Venus, Mars, Jupiter, Saturnus, Neptunus, Uranus',
      'Venus, Merkurius, Bumi, Mars, Saturnus, Jupiter, Uranus, Neptunus',
      'Bumi, Merkurius, Venus, Mars, Jupiter, Saturnus, Uranus, Neptunus'
    ],
    ans: 0,
    why: 'Urutan planet dari Matahari: Merkurius - Venus - Bumi - Mars - Jupiter - Saturnus - Uranus - Neptunus. Cara mudah ingat: "Me Ve Bu Mar Ju Sa U Ne" atau "My Very Educated Mother Just Served Us Noodles".'
  },
  // 42. Pengertian energi dan contoh pemanfaatannya
  {
    no: 42, cat: 'Energi', cc: 'b-amber',
    q: 'Pengertian energi yang paling tepat adalah ...',
    opts: [
      'Energi adalah benda yang dapat dilihat dan disentuh',
      'Energi adalah kemampuan untuk melakukan usaha atau kerja',
      'Energi adalah materi yang dapat berubah bentuk',
      'Energi adalah gaya yang bekerja pada benda'
    ],
    ans: 1,
    why: 'Energi adalah kemampuan untuk melakukan usaha/kerja. Contoh pemanfaatan: energi listrik untuk menyalakan lampu, energi kimia dari makanan untuk beraktivitas, energi surya untuk panel surya.'
  },
  // 43. Proses efek rumah kaca
  {
    no: 43, cat: 'Lingkungan', cc: 'b-green',
    q: 'Proses efek rumah kaca terjadi melalui urutan yang benar yaitu ...',
    opts: [
      'Matahari memancarkan panas → Bumi menyerap semua panas → Bumi menjadi lebih dingin',
      'Matahari memancarkan radiasi → sebagian dipantulkan Bumi → gas rumah kaca memerangkap panas yang dipantulkan → suhu Bumi meningkat',
      'Gas CO₂ menghalangi Matahari → Bumi menjadi gelap → suhu turun',
      'Bumi memancarkan panas ke luar angkasa → Matahari menyimpan panas → suhu Bumi meningkat'
    ],
    ans: 1,
    why: 'Proses efek rumah kaca: (1) radiasi Matahari masuk ke atmosfer, (2) sebagian diserap Bumi dan dipantulkan kembali, (3) gas rumah kaca (CO₂, CH₄) memerangkap panas yang dipantulkan, (4) suhu Bumi meningkat.'
  },
  // 44. Cara menentukan tahun kabisat
  {
    no: 44, cat: 'Bumi & Antariksa', cc: 'b-purple',
    q: 'Cara yang tepat untuk menentukan apakah suatu tahun adalah tahun kabisat adalah ...',
    opts: [
      'Tahun yang jumlah digit-digitnya berjumlah 4',
      'Tahun yang bisa dibagi habis dengan 4 (dan untuk tahun abad, harus habis dibagi 400)',
      'Tahun yang memiliki 13 bulan',
      'Tahun yang diakhiri dengan angka 0'
    ],
    ans: 1,
    why: 'Tahun kabisat: tahun yang habis dibagi 4 (contoh: 2024). Khusus tahun abad (1900, 2000), harus habis dibagi 400. Tahun kabisat memiliki 366 hari (Februari = 29 hari) karena revolusi Bumi ±365,25 hari.'
  },
  // 45. Pentingnya penghematan energi
  {
    no: 45, cat: 'Energi', cc: 'b-amber',
    q: 'Mengapa penghematan energi (termasuk energi terbarukan) sangat penting untuk dilakukan? ...',
    opts: [
      'Karena energi sangat mahal dan tidak ada yang gratis',
      'Karena meskipun terbarukan, energi tetap terbatas dalam kapasitas dan infrastrukturnya, serta hemat energi mengurangi dampak lingkungan',
      'Karena pemerintah mewajibkan penghematan energi',
      'Karena energi terbarukan akan habis dalam 10 tahun ke depan'
    ],
    ans: 1,
    why: 'Pentingnya hemat energi: (1) kapasitas pembangkit energi terbatas meski sumbernya terbarukan, (2) mengurangi emisi dan dampak lingkungan, (3) menghemat biaya, (4) menjaga ketersediaan energi untuk generasi mendatang.'
  },
];

// ═══════════════════════════════════════════
// 3. DATA — SOAL ISIAN
// ═══════════════════════════════════════════
const isianData = [
  { q: 'Lapisan atmosfer yang mengandung ozon dan melindungi Bumi dari sinar UV adalah ...', ans: 'Stratosfer', hint: 'Di atas troposfer' },
  { q: 'Perputaran Bumi pada porosnya sendiri disebut ..., sedangkan pergerakan Bumi mengelilingi Matahari disebut ...', ans: 'Rotasi, revolusi', hint: 'Dua kata, pisahkan dengan koma' },
  { q: 'Tiga jenis bahan bakar fosil yang utama adalah ...', ans: 'Minyak bumi, batu bara, gas alam', hint: 'Cair, padat, dan gas' },
  { q: 'Gas utama yang menyebabkan efek rumah kaca adalah ...', ans: 'Karbon dioksida (CO₂) dan metana (CH₄)', hint: 'Dihasilkan dari pembakaran dan peternakan' },
  { q: 'Lapisan terluar Matahari yang tampak saat gerhana Matahari total adalah ...', ans: 'Korona', hint: 'Tampak seperti mahkota cahaya putih' },
  { q: 'Perubahan energi yang terjadi pada setrika listrik adalah energi ... berubah menjadi energi ...', ans: 'Listrik, panas (kalor)', hint: 'Input → output setrika' },
  { q: 'Satelit alami Bumi adalah ..., yang revolusinya membutuhkan waktu sekitar ... hari.', ans: 'Bulan, 29,5 hari', hint: 'Benda langit yang mengorbit Bumi' },
  { q: 'Urutan delapan planet dari yang terdekat ke Matahari adalah ...', ans: 'Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus', hint: 'Me-Ve-Bu-Mar-Ju-Sa-U-Ne' },
  { q: 'Planet yang memiliki cincin indah dan merupakan planet terbesar kedua di tata surya adalah ...', ans: 'Saturnus', hint: 'Planet ke-6 dari Matahari' },
  { q: 'Tahun kabisat adalah tahun yang habis dibagi ... dan memiliki ... hari dalam setahun.', ans: '4, 366 hari', hint: 'Februari memiliki 29 hari di tahun ini' },
];

// ═══════════════════════════════════════════
// 4. DATA — SOAL URAIAN
// ═══════════════════════════════════════════
const essayData = [
  {
    q: 'Jelaskan perbedaan antara rotasi dan revolusi Bumi serta sebutkan akibat dari masing-masing!',
    kunci: `ROTASI BUMI:
• Pengertian: perputaran Bumi pada porosnya sendiri
• Arah: dari barat ke timur
• Waktu: ±24 jam (1 hari)
• Akibat: (1) siang dan malam, (2) perbedaan waktu antardaerah, (3) gerak semu harian Matahari

REVOLUSI BUMI:
• Pengertian: pergerakan Bumi mengelilingi Matahari
• Waktu: ±365,25 hari (1 tahun)
• Akibat: (1) pergantian musim, (2) gerak semu tahunan Matahari, (3) perbedaan lamanya siang dan malam, (4) adanya tahun kabisat`
  },
  {
    q: 'Jelaskan proses terjadinya efek rumah kaca dan sebutkan minimal 3 gas penyebabnya!',
    kunci: `PROSES EFEK RUMAH KACA:
1. Matahari memancarkan radiasi cahaya dan panas ke Bumi
2. Sebagian radiasi diserap oleh permukaan Bumi dan sebagian dipantulkan kembali ke atmosfer
3. Gas-gas rumah kaca (GRK) di atmosfer memerangkap/menahan panas yang dipantulkan Bumi
4. Panas yang terperangkap menyebabkan suhu rata-rata Bumi meningkat (pemanasan global)

GAS PENYEBAB:
1. Karbon dioksida (CO₂) — dari pembakaran bahan bakar fosil dan deforestasi
2. Metana (CH₄) — dari peternakan, TPA sampah, lahan gambut
3. Dinitrogen oksida (N₂O) — dari pupuk kimia dan industri
4. Uap air (H₂O) — meningkat seiring naiknya suhu Bumi`
  },
  {
    q: 'Sebutkan dan jelaskan minimal 4 dampak negatif kerusakan lingkungan terhadap kehidupan manusia!',
    kunci: `1. BANJIR dan TANAH LONGSOR
   → Akibat penebangan hutan yang mengurangi kemampuan tanah menyerap air

2. PENCEMARAN AIR
   → Akibat pembuangan limbah industri/rumah tangga, menyebabkan air tidak layak minum dan ikan mati

3. GANGGUAN KESEHATAN
   → Pencemaran udara (asap, debu) menyebabkan ISPA, asma, dan penyakit paru-paru

4. PERUBAHAN IKLIM
   → Pemanasan global menyebabkan cuaca ekstrem, kekeringan, dan naiknya permukaan laut

5. KEPUNAHAN SATWA
   → Hilangnya habitat akibat deforestasi dan pencemaran mengancam kelangsungan hidup satwa liar`
  },
  {
    q: 'Jelaskan perbedaan energi terbarukan dan energi tidak terbarukan (fosil), serta berikan masing-masing 3 contoh!',
    kunci: `ENERGI TERBARUKAN:
• Pengertian: energi yang berasal dari sumber yang dapat diperbarui secara alami dan tidak akan habis
• Sifat: ramah lingkungan, minim emisi gas rumah kaca
• Contoh: (1) Energi surya/matahari, (2) Energi angin, (3) Energi air (PLTA)
• Lainnya: panas bumi (geothermal), biogas, biomassa

ENERGI TIDAK TERBARUKAN (FOSIL):
• Pengertian: energi dari sisa makhluk hidup purba yang terkubur jutaan tahun — jumlahnya terbatas
• Sifat: menghasilkan emisi CO₂ dan polutan, akan habis
• Contoh: (1) Minyak bumi, (2) Batu bara, (3) Gas alam`
  },
  {
    q: 'Jelaskan cara menentukan tahun kabisat dan mengapa tahun kabisat perlu ada!',
    kunci: `CARA MENENTUKAN TAHUN KABISAT:
1. Tahun yang habis dibagi 4 adalah tahun kabisat (contoh: 2024, 2028)
2. Pengecualian: tahun abad (1700, 1800, 1900) BUKAN kabisat kecuali habis dibagi 400
3. Tahun 2000 adalah kabisat (2000 ÷ 400 = 5), tahun 1900 bukan kabisat

MENGAPA PERLU ADA TAHUN KABISAT:
• Revolusi Bumi mengelilingi Matahari membutuhkan ±365,25 hari (bukan tepat 365 hari)
• Sisa 0,25 hari per tahun dikumpulkan → setiap 4 tahun = 1 hari ekstra
• 1 hari ekstra ditambahkan di bulan Februari (29 hari) pada tahun kabisat
• Tujuan: agar kalender Masehi tetap sinkron dengan pergerakan Bumi mengelilingi Matahari`
  },
];

// ═══════════════════════════════════════════
// 5. DATA — FLASHCARD
// ═══════════════════════════════════════════
const flashData = [
  { cat: 'Atmosfer', cc: 'b-sky',
    q: 'Lapisan apa yang melindungi Bumi dari sinar UV?',
    a: 'Stratosfer — mengandung lapisan ozon (O₃) yang menyerap radiasi UV berbahaya dari Matahari.' },
  { cat: 'Tata Surya', cc: 'b-blue',
    q: 'Apa yang terjadi saat gerhana Matahari?',
    a: 'Bulan berada di antara Matahari dan Bumi, menghalangi cahaya Matahari.\nGerhana total = Bumi masuk ke umbra Bulan.' },
  { cat: 'Tata Surya', cc: 'b-blue',
    q: 'Sebutkan urutan planet dari Matahari!',
    a: 'Merkurius → Venus → Bumi → Mars → Jupiter → Saturnus → Uranus → Neptunus\n(Me-Ve-Bu-Mar-Ju-Sa-U-Ne)' },
  { cat: 'Tata Surya', cc: 'b-blue',
    q: 'Apa perbedaan planet dalam dan planet luar?',
    a: 'Planet dalam: Merkurius, Venus, Bumi, Mars (di dalam sabuk asteroid, berbatu)\nPlanet luar: Jupiter, Saturnus, Uranus, Neptunus (di luar sabuk asteroid, gas/es raksasa)' },
  { cat: 'Tata Surya', cc: 'b-blue',
    q: 'Sebutkan lapisan-lapisan Matahari!',
    a: 'Dari dalam ke luar:\n1. Inti\n2. Zona Radiasi\n3. Zona Konveksi\n4. Fotosfer\n5. Kromosfer\n6. Korona (lapisan terluar)' },
  { cat: 'Tata Surya', cc: 'b-blue',
    q: 'Berapa kali Bulan revolusi dalam setahun?',
    a: '365 ÷ 29,5 ≈ 12,4 kali\nArtinya sekitar 12 kali revolusi per tahun.\nInilah dasar 12 bulan dalam kalender.' },
  { cat: 'Bumi & Antariksa', cc: 'b-purple',
    q: 'Apa perbedaan rotasi dan revolusi Bumi?',
    a: 'Rotasi: Bumi berputar pada porosnya (24 jam) → Siang & malam\nRevolusi: Bumi mengelilingi Matahari (365,25 hari) → Pergantian musim' },
  { cat: 'Bumi & Antariksa', cc: 'b-purple',
    q: 'Apa itu tahun kabisat dan bagaimana cara menentukannya?',
    a: 'Tahun kabisat = tahun dengan 366 hari (Feb = 29 hari)\nCara: tahun yang habis dibagi 4\nKhusus tahun abad: harus habis dibagi 400\nContoh kabisat: 2024, 2000' },
  { cat: 'Energi', cc: 'b-amber',
    q: 'Sebutkan 3 jenis bahan bakar fosil!',
    a: '1. Minyak bumi (cair) — bensin, solar\n2. Batu bara (padat) — PLTU\n3. Gas alam (gas) — LPG, LNG' },
  { cat: 'Energi', cc: 'b-amber',
    q: 'Sebutkan 5 jenis energi terbarukan!',
    a: '1. Energi surya (matahari)\n2. Energi angin\n3. Energi air (PLTA)\n4. Energi panas bumi (geothermal)\n5. Biogas/biomassa' },
  { cat: 'Energi', cc: 'b-amber',
    q: 'Apa perubahan energi pada setrika, lampu, dan kipas?',
    a: 'Setrika: listrik → panas\nLampu: listrik → cahaya (+ panas)\nKipas angin: listrik → gerak (kinetik)\nTV: listrik → cahaya + suara' },
  { cat: 'Energi', cc: 'b-amber',
    q: 'Apa kelebihan dan kekurangan energi terbarukan?',
    a: 'Kelebihan: ramah lingkungan, tidak akan habis, minim emisi\nKekurangan: biaya awal mahal, bergantung kondisi alam (cuaca, lokasi), kapasitas terbatas' },
  { cat: 'Lingkungan', cc: 'b-green',
    q: 'Sebutkan 3 gas penyebab efek rumah kaca!',
    a: '1. CO₂ (karbon dioksida) — pembakaran, deforestasi\n2. CH₄ (metana) — peternakan, sampah\n3. N₂O (dinitrogen oksida) — pupuk kimia' },
  { cat: 'Lingkungan', cc: 'b-green',
    q: 'Apa dampak pemanasan global?',
    a: '1. Mencairnya es kutub → naiknya permukaan laut\n2. Cuaca ekstrem (banjir, kekeringan)\n3. Kepunahan spesies\n4. Perubahan pola curah hujan\n5. Ancaman pada daerah pesisir' },
  { cat: 'Lingkungan', cc: 'b-green',
    q: 'Bagaimana cara mengurangi pemanasan global?',
    a: '1. Gunakan energi terbarukan\n2. Hemat listrik dan bahan bakar\n3. Tanam pohon (penghijauan)\n4. Kurangi penggunaan kendaraan bermotor\n5. Daur ulang sampah' },
  { cat: 'Lingkungan', cc: 'b-green',
    q: 'Apa itu eutrofikasi dan apa penyebabnya?',
    a: 'Eutrofikasi = pertumbuhan alga berlebihan di perairan akibat kelebihan nutrien (nitrogen, fosfor dari pupuk).\nAkibat: oksigen habis, ikan mati, air keruh dan berbau.' },
];

// ═══════════════════════════════════════════
// 6. BUILD PG
// ═══════════════════════════════════════════
let pgAns   = new Array(pgData.length).fill(null);
let pgScore = 0;

function buildPG() {
  const list = document.getElementById('pg-list');
  list.innerHTML = '';
  pgData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'soal-item';
    d.innerHTML = `
      <div class="soal-meta">
        Soal ${item.no} &nbsp;·&nbsp;
        <span class="badge ${item.cc}">${item.cat}</span>
        <span style="font-size:10px;color:var(--text3)">Kisi-kisi butir ${item.no}</span>
      </div>
      <div class="soal-q">${item.q}</div>
      <div class="opts" id="opts-${i}">
        ${item.opts.map((o, j) => `
          <button class="opt" onclick="pilih(${i},${j})">
            ${String.fromCharCode(65+j)}. ${o}
          </button>`).join('')}
      </div>
      <div class="pembahasan" id="pem-${i}">
        <strong>Pembahasan:</strong> ${item.why}
      </div>`;
    list.appendChild(d);
  });
  updateSkor();
}

function pilih(si, oi) {
  if (pgAns[si] !== null) return;
  pgAns[si] = oi;
  document.querySelectorAll(`#opts-${si} .opt`).forEach((b, j) => {
    b.disabled = true;
    if (j === pgData[si].ans) b.classList.add('correct');
    else if (j === oi)        b.classList.add('wrong');
  });
  document.getElementById(`pem-${si}`).classList.add('show');
  if (oi === pgData[si].ans) pgScore++;
  updateSkor();
}

function updateSkor() {
  const done = pgAns.filter(a => a !== null).length;
  document.getElementById('skor-pg').textContent =
    `${pgScore} / ${done} (dari ${pgData.length} soal)`;
}
function resetPG() { pgAns = new Array(pgData.length).fill(null); pgScore = 0; buildPG(); }

// ═══════════════════════════════════════════
// 7. BUILD ISIAN
// ═══════════════════════════════════════════
function buildIsian() {
  const list = document.getElementById('isian-list');
  list.innerHTML = '';
  isianData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'isian-item';
    d.innerHTML = `
      <div class="soal-meta">Soal Isian ${i + 1}</div>
      <div class="soal-q">${item.q}</div>
      <input class="isian-inp" id="ii-${i}" placeholder="Tulis jawabanmu..." />
      <div class="isian-row">
        <button class="cek-btn" onclick="cekIsian(${i})">Cek Jawaban</button>
        <span class="hint-txt">Petunjuk: ${item.hint}</span>
      </div>
      <div class="isian-result" id="ir-${i}"></div>`;
    list.appendChild(d);
  });
}

function cekIsian(i) {
  const val  = document.getElementById(`ii-${i}`).value.toLowerCase().trim();
  const res  = document.getElementById(`ir-${i}`);
  const keys = isianData[i].ans.toLowerCase().split(/[,\/]/);
  const ok   = keys.some(k => k.trim().length > 1 && val.includes(k.trim()));
  res.className = 'isian-result show ' + (ok ? 'ok' : 'nope');
  res.innerHTML = ok
    ? `Benar! Kunci: <strong>${isianData[i].ans}</strong>`
    : `Belum tepat. Kunci: <strong>${isianData[i].ans}</strong>`;
}

// ═══════════════════════════════════════════
// 8. BUILD ESSAY
// ═══════════════════════════════════════════
function buildEssay() {
  const list = document.getElementById('essay-list');
  list.innerHTML = '';
  essayData.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'essay-item';
    d.innerHTML = `
      <div class="soal-meta">Soal Uraian ${i + 1}</div>
      <div class="soal-q">${item.q}</div>
      <textarea class="essay-textarea" id="ea-${i}" placeholder="Tulis jawabanmu di sini..."></textarea>
      <div class="isian-row">
        <button class="show-kunci-btn" onclick="toggleKunci(${i})">Lihat Kunci Jawaban</button>
      </div>
      <div class="essay-kunci" id="ek-${i}">${item.kunci}</div>`;
    list.appendChild(d);
  });
}

function toggleKunci(i) {
  const el  = document.getElementById(`ek-${i}`);
  const btn = el.previousElementSibling.querySelector('.show-kunci-btn');
  const show = !el.classList.contains('show');
  el.classList.toggle('show', show);
  btn.textContent = show ? 'Sembunyikan Kunci' : 'Lihat Kunci Jawaban';
}

// ═══════════════════════════════════════════
// 9. BUILD FLASHCARD
// ═══════════════════════════════════════════
let flIdx    = 0, flipped = false, activeF = 'Semua', filtered = [...flashData];

function buildFL() {
  const cats = ['Semua', ...new Set(flashData.map(f => f.cat))];
  document.getElementById('fl-filter').innerHTML = cats
    .map(c => `<button class="flt ${c === activeF ? 'on' : ''}" onclick="setFilter('${c}')">${c}</button>`)
    .join('');
  filtered = activeF === 'Semua' ? [...flashData] : flashData.filter(f => f.cat === activeF);
  if (flIdx >= filtered.length) flIdx = 0;
  renderCard();
}
function setFilter(cat) { activeF = cat; flIdx = 0; flipped = false; buildFL(); }
function renderCard() {
  const c = filtered[flIdx];
  document.getElementById('fl-progress').textContent = `Kartu ${flIdx + 1} dari ${filtered.length}`;
  document.getElementById('fl-front').textContent = c.q;
  document.getElementById('fl-back').textContent  = c.a;
  document.getElementById('fl-back').classList.remove('show');
  document.getElementById('fl-flip-hint').textContent = 'Klik untuk lihat jawaban';
  const pill = document.getElementById('fl-cat-pill');
  pill.textContent = c.cat; pill.className = `fl-cat-pill badge ${c.cc}`;
  flipped = false;
}
function flipCard() {
  flipped = !flipped;
  document.getElementById('fl-back').classList.toggle('show', flipped);
  document.getElementById('fl-flip-hint').textContent = flipped ? '' : 'Klik untuk lihat jawaban';
}
function nextCard() { flipped=false; flIdx=(flIdx+1)%filtered.length; renderCard(); }
function prevCard() { flipped=false; flIdx=(flIdx-1+filtered.length)%filtered.length; renderCard(); }

// ═══════════════════════════════════════════
// 10. INIT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  buildPG(); buildIsian(); buildEssay(); buildFL();
});