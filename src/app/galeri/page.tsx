// src/app/galeri/page.tsx

import Image from "next/image";

const galleryImages = [
  {
    src: "https://placehold.co/600x400/0a4635/ffffff?text=Pemandangan+1",
    alt: "Pemandangan Sawah",
  },
  {
    src: "https://placehold.co/600x800/0a4635/ffffff?text=Warga+Desa",
    alt: "Aktivitas Warga",
  },
  {
    src: "https://placehold.co/600x400/0a4635/ffffff?text=Sungai",
    alt: "Sungai di Desa Pararra",
  },
  {
    src: "https://placehold.co/600x400/0a4635/ffffff?text=Panen+Kakao",
    alt: "Proses Panen Kakao",
  },
  {
    src: "https://placehold.co/600x800/0a4635/ffffff?text=Anak-anak",
    alt: "Anak-anak bermain",
  },
  {
    src: "https://placehold.co/600x400/0a4635/ffffff?text=Upacara+Adat",
    alt: "Upacara Adat",
  },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x800/0a4635/f2e8d8?text=Galeri+Desa')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          Galeri Keindahan Pararra
        </h1>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {galleryImages.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={600}
                height={index % 2 === 0 ? 400 : 800} // make varied heights
                className="w-full h-auto mb-4 rounded-lg shadow-md break-inside-avoid-column"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
