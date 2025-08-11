// src/app/galeri/page.tsx

import Image from "next/image";

// Menggunakan gambar-gambar baru yang lebih realistis dari Unsplash
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534549419139-4d2a4a23f85b?w=600",
    alt: "Pemandangan sawah terasering yang subur dan hijau di Pararra",
  },
  {
    src: "https://images.unsplash.com/photo-1546512130-589a78571060?w=600",
    alt: "Anak-anak desa bermain dengan ceria di sungai",
  },
  {
    src: "https://images.unsplash.com/photo-1579898399478-d15f1711a27e?w=600",
    alt: "Buah kakao yang matang di perkebunan Desa Pararra",
  },
  {
    src: "https://images.unsplash.com/photo-1507646223320-625f0a4f5f14?w=600",
    alt: "Suasana senja di atas perbukitan desa",
  },
  {
    src: "https://images.unsplash.com/photo-1590599668822-f0b8c8d8b2e1?w=600",
    alt: "Detail buah kakao yang baru dipetik dari pohon",
  },
  {
    src: "https://images.unsplash.com/photo-1626088313333-d731b54a2a44?w=600",
    alt: "Durian montong khas Pararra yang siap dinikmati",
  },
  {
    src: "https://images.unsplash.com/photo-1473992436533-3599426f4779?w=600",
    alt: "Warga desa sedang bekerja sama di ladang",
  },
  {
    src: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=600",
    alt: "Salah satu air terjun tersembunyi di Desa Pararra",
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-brand-beige">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          Galeri Keindahan Pararra
        </h1>
      </section>

      {/* ============== BAGIAN VIDEO DOKUMENTER (BARU) ============== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-8">
            Video Dokumenter Desa
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-slate-800 rounded-xl flex flex-col items-center justify-center p-8 border-4 border-dashed border-slate-600">
              <h3 className="text-4xl font-bold text-white">Coming Soon</h3>
              <p className="mt-4 text-slate-300 max-w-md">
                Kami sedang mempersiapkan sebuah film dokumenter yang akan
                membawa Anda menyelami kehidupan, budaya, dan keindahan Desa
                Pararra secara lebih dalam. Nantikan segera!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== BAGIAN GALERI FOTO (DIPERBAIKI) ============== */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#0a4635] mb-12">
            Momen di Pararra
          </h2>
          {/* Layout masonry (kolom) dipertahankan karena rapi dan dinamis */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((img, index) => (
              // PERBAIKAN: Frame Foto Menarik
              // Setiap gambar dibungkus dengan div yang berfungsi sebagai frame "polaroid"
              <div
                key={index}
                className="bg-white p-2 rounded-md shadow-lg mb-4 break-inside-avoid-column transform transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400} // Tinggi diatur agar konsisten, h-auto akan menyesuaikan
                  className="w-full h-auto rounded-sm" // Sudut gambar di dalam frame
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
