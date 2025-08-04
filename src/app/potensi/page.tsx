// src/app/potensi/page.tsx

import Image from "next/image";

const potentials = [
  {
    name: "Durian Pararra",
    description:
      "Dikenal dengan dagingnya yang tebal, legit, dan aroma yang khas. Menjadi komoditas unggulan dan primadona saat musim panen tiba.",
    imageUrl: "https://placehold.co/600x400/22c55e/ffffff?text=Durian",
  },
  {
    name: "Kakao (Cokelat)",
    description:
      "Biji kakao dari Pararra memiliki kualitas fermentasi yang baik, diminati oleh industri pengolahan cokelat skala regional.",
    imageUrl: "https://placehold.co/600x400/854d0e/ffffff?text=Kakao",
  },
  {
    name: "Cengkeh",
    description:
      "Perkebunan cengkeh yang terawat baik menghasilkan cengkeh dengan kualitas super yang menjadi sumber pendapatan penting bagi warga.",
    imageUrl: "https://placehold.co/600x400/a3e635/ffffff?text=Cengkeh",
  },
  {
    name: "Rambutan",
    description:
      "Rambutan Pararra terkenal manis dan 'ngelotok', mudah dikupas dari bijinya, menjadikannya favorit di pasaran.",
    imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Rambutan",
  },
  {
    name: "Wisata Alam",
    description:
      "Potensi wisata alam seperti air terjun tersembunyi, sungai jernih, dan perbukitan hijau yang menanti untuk dieksplorasi lebih lanjut.",
    imageUrl: "https://placehold.co/600x400/0ea5e9/ffffff?text=Wisata+Alam",
  },
  {
    name: "Kerajinan Tangan",
    description:
      "Kerajinan dari bambu dan daun lontar yang dibuat oleh ibu-ibu desa menjadi produk unik yang memiliki nilai jual.",
    imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Kerajinan",
  },
];

export default function PotensiPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x800/0a4635/f2e8d8?text=Potensi+Desa')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          Potensi Unggulan Desa Pararra
        </h1>
      </section>

      {/* Potentials Grid */}
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potentials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-green mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
