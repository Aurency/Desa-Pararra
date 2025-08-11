// src/app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/sawah.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selamat Datang di Desa Pararra
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Wadah layanan digital untuk menemukan pesona dan potensi Desa
            Pararra.
          </p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6">
          {/* PERBAIKAN: Menambahkan text-center */}
          <h2 className="text-3xl font-bold text-center text-[#0a4635] mb-12">
            Sambutan Hangat
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Kepala Desa */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Image
                src="/kepaladesa.png"
                alt="Pemerintah Desa Pararra"
                width={150}
                height={150}
                className="mx-auto rounded-full -mt-20 border-8 border-white object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#0a4635] mt-4">
                Pemerintah Desa Pararra
              </h3>
              <p className="text-gray-500 mb-4">Kepala Desa & Jajaran</p>
              <p className="text-gray-700 italic">
                "Dengan penuh rasa syukur, kami menyambut Anda di website resmi
                Desa Pararra. Semoga platform ini menjadi jembatan informasi
                yang bermanfaat bagi kita semua untuk bersama-sama membangun
                desa yang kita cintai."
              </p>
            </div>
            {/* KKN Mahasiswa */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Image
                src="/berlima juga.png"
                alt="Mahasiswa KKN Unhas"
                width={150}
                height={150}
                className="mx-auto rounded-full -mt-20 border-8 border-white object-cover"
              />
              <h3 className="text-2xl font-semibold text-[#0a4635] mt-4">
                Mahasiswa KKN Unhas
              </h3>
              <p className="text-gray-500 mb-4">KKN Tematik Gel. 114</p>
              <p className="text-gray-700 italic">
                "Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan penuh rasa
                syukur dan semangat kebersamaan, kami, mahasiswa KKNT-114
                Universitas Hasanuddin, menyambut Anda di website resmi Desa
                Pararra. Semoga platform digital ini menjadi jembatan emas yang
                menghubungkan semangat, informasi, dan harapan kita semua dalam
                membangun desa yang kita cintai. Desa Pararra bukan sekadar
                wilayah, melainkan ruang hidup yang kaya akan cerita, sejarah,
                dan cita-cita. Bersama masyarakat, kami hadir bukan hanya untuk
                mengabdi, tetapi untuk merajut langkah menuju desa yang mandiri,
                berdaya, dan berbudaya. Mari manfaatkan laman ini sebagai wadah
                inspirasi, kolaborasi, dan komunikasi demi masa depan Pararra
                yang lebih cerah. Wassalamu’alaikum Warahmatullahi Wabarakatuh."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Versi Baru dengan Gambar) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-12">
            Jelajahi Desa Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu Informasi Desa */}
            <Link
              href="/informasi"
              className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                // PERBAIKAN: Link gambar Unsplash baru
                src="/informasi.png"
                alt="Sejarah Desa Pararra"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-[#0a4635] mb-2">
                  Informasi Desa
                </h3>
                <p className="text-gray-600">
                  Sejarah, data penduduk, dan struktur pemerintahan.
                </p>
              </div>
            </Link>

            {/* Kartu Potensi Unggulan */}
            <Link
              href="/potensi"
              className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                // PERBAIKAN: Link gambar Unsplash baru
                src="/potensiberanda.png"
                alt="Potensi Kakao dan Durian"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-[#0a4635] mb-2">
                  Potensi Unggulan
                </h3>
                <p className="text-gray-600">
                  Temukan kekayaan alam seperti durian, kakao, dan lainnya.
                </p>
              </div>
            </Link>

            {/* Kartu Galeri Foto */}
            <Link
              href="/galeri"
              className="block bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                // PERBAIKAN: Link gambar Unsplash baru
                src="/galeri.jpg"
                alt="Galeri Keindahan Desa Pararra"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-[#0a4635] mb-2">
                  Galeri Foto
                </h3>
                <p className="text-gray-600">
                  Lihat keindahan visual dan momen-momen di Desa Pararra.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
