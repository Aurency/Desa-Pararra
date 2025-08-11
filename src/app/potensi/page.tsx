// src/app/potensi/page.tsx

import Image from "next/image";

// Data potensi desa diperbarui sesuai daftar yang Anda berikan
const potentialsData = [
  {
    title: "Durian Lokal & Montong",
    description:
      "Desa Pararra adalah surga bagi para pencinta durian, menawarkan varietas lokal yang khas serta durian Montong yang berdaging tebal dan manis.",
    imageSrc: "/durian.png",
    altText:
      "Buah durian Montong yang sudah dibelah dengan isi yang menggugah selera",
  },
  {
    title: "Kakao Kualitas Tinggi",
    description:
      "Sebagai komoditas utama, biji kakao dari Pararra memiliki kualitas fermentasi yang sangat baik, diminati oleh industri pengolahan cokelat skala regional.",
    imageSrc: "/kakao1.png",
    altText: "Buah kakao yang matang di pohon perkebunan",
  },
  {
    title: "Wisata Alam Air Terjun",
    description:
      "Menyimpan pesona alam tersembunyi, desa ini memiliki beberapa lokasi air terjun yang masih alami, menawarkan kesegaran dan ketenangan bagi pengunjung.",
    imageSrc:
      "/airterjun.png",
    altText: "Air terjun yang mengalir deras",
  },
  {
    title: "Sumber Air Panas Alami",
    description:
      "Salah satu daya tarik unik Desa Pararra adalah sumber air panas alami yang dipercaya memiliki khasiat relaksasi dan terapi bagi kesehatan.",
    imageSrc:
      "/airpanas.png",
    altText: "Uap yang mengepul dari sumber air panas alami",
  },
  {
    title: "Agrowisata Langsat & Padi",
    description:
      "Selain durian, kebun warga juga menghasilkan buah langsat yang manis. Hamparan sawah yang hijau juga menjadi pemandangan agrowisata yang menyejukkan.",
    imageSrc: "/padi&langsat.png",
    altText: "Satu ikat buah langsat yang segar dan matang",
  },
  {
    title: "Spot Ikonik: Jembatan & Gazebo",
    description:
      "Infrastruktur wisata seperti Jembatan Pelangi dan gazebo-gazebo yang tersebar menjadi spot foto favorit dan tempat bersantai untuk menikmati keindahan desa.",
    imageSrc:
      "/jembatan.png",
    altText: "Jembatan pelangi dan gazebo",
  },
  {
    title: "Hasil Hutan: Rotan & Kayu",
    description:
      "Kekayaan hutan desa menghasilkan rotan dan kayu berkualitas yang dimanfaatkan oleh masyarakat untuk bahan bangunan dan produk kerajinan tangan.",
    imageSrc: "/kayurotan.png",
    altText: "Hutan lebat yang menjadi sumber hasil kayu dan rotan",
  },
];

export default function PotensiPage() {
  return (
    <div className="bg-brand-beige">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        // Menggunakan gambar air terjun sebagai hero banner
        style={{
          backgroundImage: "url('/potensi1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Potensi Unggulan Desa Pararra
          </h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            Menjelajahi Kekayaan Alam, Agrikultur, dan Wisata
          </p>
        </div>
      </section>

      {/* Potentials Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {potentialsData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0a4635] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
