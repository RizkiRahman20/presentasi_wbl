import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

const PresentationSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");

  const slides = [
    // Slide 1: Cover
    {
      title: "Penyalahgunaan Bantuan Sosial",
      subtitle: "Karena Hilangnya Nilai Kejujuran dan Empati",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-6">⚖️</div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in">
            Penyalahgunaan Bantuan Sosial
          </h1>
          <h2 className="text-2xl text-blue-700 mb-8 animate-fade-in-delay">
            Karena Hilangnya Nilai Kejujuran dan Empati
          </h2>
          <div className="text-lg text-gray-600 space-y-2 animate-fade-in-delay-2">
            <p>Mata Kuliah: Wawasan Budi Luhur</p>
            <p>Dosen Pengampu: Dra. Dwi Achadiani, M.Kom.</p>
            <p className="text-sm mt-6">Kelompok:</p>
            <p className="text-sm">
              Rizky Dhiya Khairiri (2511502094) • Rizki Rahman Saputra
              (2511502086)
            </p>
            <p className="text-sm">
              Rafi Romadhon Putra (2513500279) • Alindia Nanda Putri
              (2511502276) • Rafqy Annurtawfiq (2512501244)
            </p>
          </div>
        </div>
      ),
    },

    // Slide 2: Latar Belakang
    {
      title: "Latar Belakang",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 animate-slide-in-left">
            <h3 className="font-bold text-xl mb-3 text-blue-900">
              💡 Pentingnya Kejujuran
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kejujuran adalah nilai utama dalam Wawasan Budi Luhur yang menjadi
              fondasi kepercayaan dalam hubungan sosial dan sistem pemerintahan.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 animate-slide-in-right">
            <h3 className="font-bold text-xl mb-3 text-red-900">
              ⚠️ Realita di Indonesia
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Nilai kejujuran masih sering diabaikan, terlihat dari berbagai
              kasus korupsi yang merugikan masyarakat.
            </p>
            <p className="text-gray-700 font-semibold">
              Contoh: Kasus Korupsi Bansos COVID-19 oleh Juliari Peter Batubara
              (2020)
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg animate-fade-in-up">
            <p className="text-gray-700 italic text-center">
              "Tanpa kejujuran, kepercayaan dan integritas mudah runtuh"
            </p>
          </div>
        </div>
      ),
    },

    // Slide 3: Definisi Kejujuran
    {
      title: "Apa Itu Kejujuran?",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg animate-fade-in">
            <h3 className="font-bold text-2xl mb-3">📖 Definisi</h3>
            <p className="text-lg">
              Kesesuaian antara ucapan, tindakan, dan kenyataan yang
              sesungguhnya
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-300 animate-slide-in-left">
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold text-green-900 mb-2">Sikap Jujur:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Lurus hati</li>
                <li>• Tidak berbohong</li>
                <li>• Dapat dipercaya</li>
                <li>• Transparan</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-2 border-purple-300 animate-slide-in-right">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-bold text-purple-900 mb-2">
                Terkait dengan:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Amanah</li>
                <li>• Tanggung jawab</li>
                <li>• Kepercayaan</li>
                <li>• Integritas</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 animate-fade-in-up">
            <p className="text-gray-700 font-semibold">
              Bagi pejabat publik: Kejujuran = Kewajiban Sosial dan Hukum
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Rumusan Masalah
    {
      title: "Rumusan Masalah",
      content: (
        <div className="space-y-5">
          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-blue-600">1</span>
              <div>
                <p className="text-gray-800 text-lg">
                  Bagaimana pelanggaran nilai kejujuran tercermin dalam kasus
                  korupsi bansos COVID-19?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg border-l-4 border-purple-600 animate-slide-in-right">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-purple-600">2</span>
              <div>
                <p className="text-gray-800 text-lg">
                  Apa dampak dari hilangnya kejujuran terhadap kepercayaan
                  masyarakat dan perilaku sosial?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-600 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-bold text-green-600">3</span>
              <div>
                <p className="text-gray-800 text-lg">
                  Bagaimana langkah hukum dan sosial dapat menumbuhkan kembali
                  nilai kejujuran dalam kehidupan berbangsa?
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Kronologi Kasus
    {
      title: "Kronologi Kasus Korupsi Bansos COVID-19",
      content: (
        <div className="space-y-5">
          <div className="bg-red-50 p-5 rounded-lg border-2 border-red-300 animate-fade-in">
            <h3 className="font-bold text-xl text-red-900 mb-3">
              🔍 Pelaku: Juliari Peter Batubara
            </h3>
            <p className="text-gray-700">Mantan Menteri Sosial RI</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-500 animate-slide-in-left">
              <h4 className="font-bold text-yellow-800 mb-2">
                📊 Modus Operandi:
              </h4>
              <p className="text-gray-700 text-sm">
                Menerima fee Rp 10.000 per paket sembako dari rekanan penyedia
                bansos
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500 animate-slide-in-right">
              <h4 className="font-bold text-red-800 mb-2">
                💰 Kerugian Negara:
              </h4>
              <p className="text-gray-700 text-sm font-semibold">
                Lebih dari Rp 14 Miliar
              </p>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-5 rounded-lg animate-fade-in-up">
            <h4 className="font-bold mb-3 text-xl">
              ⚖️ Vonis Pengadilan (2021):
            </h4>
            <ul className="space-y-2">
              <li>• Hukuman: 12 tahun penjara</li>
              <li>• Denda: Rp 500 juta</li>
              <li>• Uang pengganti wajib dibayar</li>
              <li>• Pencabutan hak politik 4 tahun</li>
            </ul>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg animate-pulse-slow">
            <p className="text-center text-gray-800 font-semibold italic">
              "Terjadi saat masyarakat sangat membutuhkan bantuan di masa
              pandemi"
            </p>
          </div>
        </div>
      ),
    },

    // Slide 6: Pelanggaran Nilai Kejujuran
    {
      title: "Pelanggaran Nilai Kejujuran",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-400 animate-fade-in">
            <h3 className="font-bold text-2xl text-red-900 mb-4">
              ⛔ Bentuk Pengkhianatan:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 animate-slide-in-left">
                <span className="text-red-600 font-bold">→</span>
                <p className="text-gray-700">
                  Pejabat yang seharusnya memegang amanah justru memanfaatkan
                  jabatan untuk keuntungan pribadi
                </p>
              </div>
              <div className="flex items-start gap-3 animate-slide-in-right">
                <span className="text-red-600 font-bold">→</span>
                <p className="text-gray-700">
                  Kejujuran tidak hanya dilanggar, tetapi diabaikan sepenuhnya
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 animate-slide-in-left">
            <h3 className="font-bold text-xl text-blue-900 mb-3">
              ✓ Seharusnya:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Kejujuran menjadi pedoman utama dalam pengelolaan dana publik.
              Pengelolaan bantuan dilakukan secara transparan dan adil.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500 animate-slide-in-right">
            <h3 className="font-bold text-xl text-gray-900 mb-3">
              ✗ Kenyataan:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ketika kejujuran ditinggalkan, korupsi menjadi budaya yang sulit
              diberantas.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 7: Dampak Hilangnya Kejujuran
    {
      title: "Dampak Hilangnya Kejujuran",
      content: (
        <div className="space-y-4">
          <div className="bg-red-100 p-5 rounded-lg border-l-4 border-red-600 animate-slide-in-left">
            <h3 className="font-bold text-lg text-red-900 mb-3">
              👥 Dampak Sosial:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Penurunan kepercayaan masyarakat terhadap pemerintah</li>
              <li>• Masyarakat merasa dikhianati</li>
              <li>• Munculnya sikap apatis dan skeptis</li>
              <li>• Menurunnya partisipasi dalam program sosial</li>
            </ul>
          </div>

          <div className="bg-yellow-100 p-5 rounded-lg border-l-4 border-yellow-600 animate-slide-in-right">
            <h3 className="font-bold text-lg text-yellow-900 mb-3">
              💸 Dampak Ekonomi:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Alokasi anggaran tidak tepat sasaran</li>
              <li>• Menghambat pemulihan ekonomi warga miskin</li>
              <li>• Menimbulkan ketimpangan sosial</li>
            </ul>
          </div>

          <div className="bg-purple-100 p-5 rounded-lg border-l-4 border-purple-600 animate-slide-in-left">
            <h3 className="font-bold text-lg text-purple-900 mb-3">
              ⚖️ Dampak Moral & Etika:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Krisis moral dalam birokrasi</li>
              <li>• Masyarakat kehilangan teladan</li>
              <li>• Normalisasi perilaku tidak etis</li>
            </ul>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg text-center animate-fade-in-up">
            <p className="font-bold">
              📊 IPK Indonesia 2024: Skor 34 (Stagnan)
            </p>
            <p className="text-sm mt-1">
              Sumber: Transparency International Indonesia
            </p>
          </div>
        </div>
      ),
    },

    // Slide 8: Upaya Pemulihan
    {
      title: "Upaya Pemulihan & Pembelajaran",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600 animate-slide-in-left">
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              ⚖️ 1. Penegakan Hukum Tegas
            </h3>
            <p className="text-gray-700 text-sm">
              KPK dan aparat hukum harus menindak pelaku korupsi tanpa pandang
              bulu dengan proses transparan
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600 animate-slide-in-right">
            <h3 className="font-bold text-lg text-green-900 mb-2">
              📚 2. Pendidikan Nilai & Etika
            </h3>
            <p className="text-gray-700 text-sm">
              Memperkuat pendidikan karakter di sekolah dan perguruan tinggi,
              internalisasi nilai kebudiluhuran sejak dini
            </p>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600 animate-slide-in-left">
            <h3 className="font-bold text-lg text-purple-900 mb-2">
              💻 3. Transparansi & Digitalisasi
            </h3>
            <p className="text-gray-700 text-sm">
              Sistem digital yang transparan dan terpantau publik untuk
              meminimalkan intervensi manusia
            </p>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600 animate-slide-in-right">
            <h3 className="font-bold text-lg text-orange-900 mb-2">
              👁️ 4. Pengawasan Publik & Media
            </h3>
            <p className="text-gray-700 text-sm">
              Partisipasi masyarakat, media, dan LSM dalam mengawasi program
              bantuan sosial
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg mt-4 animate-fade-in-up">
            <p className="text-center font-semibold text-gray-800">
              🎯 Kunci: Akuntabilitas & Pencegahan Korupsi di Masa Depan
            </p>
          </div>
        </div>
      ),
    },

    // Slide 9: Peran Mahasiswa
    {
      title: "Peran Mahasiswa & Generasi Muda",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center animate-fade-in">
            <h3 className="font-bold text-2xl mb-2">
              🎓 Mahasiswa sebagai Agent of Change
            </h3>
            <p className="text-lg">
              Generasi Penerus Bangsa yang Berintegritas
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-2 border-green-400 animate-slide-in-left">
              <h4 className="font-bold text-green-900 mb-3 text-center">
                ✓ Yang Harus Dilakukan:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Menanamkan kejujuran dalam diri</li>
                <li>• Menjadi teladan bagi lingkungan</li>
                <li>• Aktif dalam pengawasan sosial</li>
                <li>• Menolak segala bentuk korupsi</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-400 animate-slide-in-right">
              <h4 className="font-bold text-blue-900 mb-3 text-center">
                💡 Pemahaman Penting:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Kejujuran = pondasi keadilan</li>
                <li>
                  • Integritas = wujud konsisten antara ucapan dan tindakan
                </li>
                <li>• Empati = wujud kepedulian</li>
                <li>
                  • Tanggung jawab sosial = menjalankan amanah dengan benar
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-400 animate-fade-in-up">
            <p className="text-center text-gray-800 font-semibold italic text-lg">
              "Jika nilai kejujuran diterapkan konsisten, kepercayaan publik
              dapat pulih dan budaya korupsi dapat ditekan"
            </p>
          </div>
        </div>
      ),
    },

    // Slide 10: Kesimpulan
    {
      title: "Kesimpulan",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg animate-fade-in">
            <h3 className="font-bold text-2xl mb-3">⚠️ Pelajaran Penting:</h3>
            <p className="text-lg leading-relaxed">
              Kasus korupsi bansos COVID-19 menunjukkan betapa pentingnya nilai
              kejujuran dalam kehidupan berbangsa dan bernegara
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 animate-slide-in-left">
              <h4 className="font-bold text-red-900 mb-3">
                ❌ Tanpa Kejujuran:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Kepercayaan publik hilang</li>
                <li>• Keadilan terganggu</li>
                <li>• Kerugian sosial tak terhindarkan</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 animate-slide-in-right">
              <h4 className="font-bold text-green-900 mb-3">
                ✓ Dengan Kejujuran:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Kepercayaan tumbuh</li>
                <li>• Tanggung jawab meningkat</li>
                <li>• Masyarakat sejahtera</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg text-center animate-fade-in-up">
            <h3 className="font-bold text-2xl mb-3">🌟 Wawasan Budi Luhur</h3>
            <p className="text-lg">
              Menjadikan kejujuran sebagai dasar dalam bertindak, berperilaku,
              dan melayani sesama
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg animate-pulse-slow">
            <p className="text-center text-gray-800 font-bold text-lg">
              Mari bersama membangun Indonesia yang lebih jujur dan
              berintegritas! 🇮🇩
            </p>
          </div>
        </div>
      ),
    },

    // Slide 11: Daftar Pustaka
    {
      title: "Daftar Pustaka",
      content: (
        <div className="space-y-4 text-sm">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 animate-slide-in-left">
            <p className="text-gray-700">
              <span className="font-semibold">Kompas TV.</span> (2021).{" "}
              <i>
                Juliari Batubara Divonis 12 Tahun Penjara Terkait Korupsi Bansos
                Covid-19.
              </i>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 animate-slide-in-right">
            <p className="text-gray-700">
              <span className="font-semibold">Detik News.</span> (2023).{" "}
              <i>
                KPK Periksa Eks Mensos Juliari Batubara Terkait Korupsi Bansos
                Presiden 2020.
              </i>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 animate-slide-in-left">
            <p className="text-gray-700">
              <span className="font-semibold">
                Transparency International Indonesia.
              </span>{" "}
              (2024). <i>Indeks Persepsi Korupsi Indonesia 2024.</i>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 animate-slide-in-right">
            <p className="text-gray-700">
              <span className="font-semibold">Journal of Law and Nation.</span>{" "}
              (2021). <i>Tindak Pidana Korupsi di Masa Pandemi Covid-19.</i>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500 animate-fade-in-up">
            <p className="text-gray-700">
              <span className="font-semibold">
                UGM Fakultas Ekonomika dan Bisnis.
              </span>{" "}
              (2024). <i>Indeks Persepsi Korupsi Indonesia Masih Stagnan.</i>
            </p>
          </div>
        </div>
      ),
    },

    // Slide 12: Terima Kasih
    {
      title: "Terima Kasih",
      content: (
        <div className="text-center space-y-8 flex flex-col items-center justify-center h-full">
          <div className="text-7xl">🙏</div>
          <h1 className="text-5xl font-bold text-blue-900 animate-fade-in">
            Terima Kasih
          </h1>
          <div className="text-2xl text-gray-600 space-y-3 animate-fade-in-delay">
            <p className="font-semibold">Semoga Bermanfaat</p>
            <p className="text-xl italic">
              "Kejujuran adalah Kunci Kepercayaan"
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg mt-8 animate-fade-in-delay-2">
            <p className="text-lg text-blue-900 font-semibold">
              Sesi Tanya Jawab
            </p>
            <p className="text-gray-600">Silakan ajukan pertanyaan Anda</p>
          </div>
        </div>
      ),
    },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
        nextSlide();
      } else if (e.key === "ArrowLeft" && currentSlide > 0) {
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        exitFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, isFullscreen]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setSlideDirection("next");
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection("prev");
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setSlideDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDelay2 {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeInDelay 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fadeInDelay2 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .slide-transition-next {
          animation: slideInRight 0.4s ease-out;
        }

        .slide-transition-prev {
          animation: slideInLeft 0.4s ease-out;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Main Slide */}
        <div
          className={`bg-white rounded-2xl shadow-2xl p-12 mb-6 min-h-[600px] relative ${
            slideDirection === "next"
              ? "slide-transition-next"
              : "slide-transition-prev"
          }`}
          key={currentSlide}
        >
          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            title={
              isFullscreen ? "Exit Fullscreen (F or Esc)" : "Fullscreen (F)"
            }
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          {slides[currentSlide].title && (
            <div className="mb-8 pb-6 border-b-4 border-blue-500">
              <h2 className="text-4xl font-bold text-gray-800">
                {slides[currentSlide].title}
              </h2>
              {slides[currentSlide].subtitle && (
                <p className="text-xl text-gray-600 mt-2">
                  {slides[currentSlide].subtitle}
                </p>
              )}
            </div>
          )}
          <div className="text-gray-700">{slides[currentSlide].content}</div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={20} />
            Sebelumnya
          </button>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-semibold">
              Slide {currentSlide + 1} / {slides.length}
            </span>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
          >
            Selanjutnya
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slide Thumbnails */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                  currentSlide === index
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {index + 1}. {slide.title || "Cover"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationSlides;
