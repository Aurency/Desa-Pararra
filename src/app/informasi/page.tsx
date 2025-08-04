// src/app/informasi/page.tsx

// import Gmaps from "@/components/Gmaps";

export default function InformasiPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x800/0a4635/f2e8d8?text=Informasi+Desa')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          Informasi Desa Pararra
        </h1>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {/* Sejarah Desa */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a4635] mb-6">
              Sejarah Desa Pararra
            </h2>
            <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-4">
              <p>
                {/* PERBAIKAN DI SINI: Mengganti ' dengan ' */}
                (Dummy Content) Desa Pararra memiliki sejarah panjang yang
                berakar dari kearifan lokal para leluhur. Nama 'Pararra' sendiri
                diyakini berasal dari sebuah kata dalam bahasa lokal yang
                berarti 'tempat berkumpul' atau 'persinggahan', karena lokasinya
                yang strategis di jalur perlintasan antar wilayah pada zaman
                dahulu.
              </p>
              <p>
                Didirikan secara administratif pada tahun XXXX, desa ini telah
                melalui berbagai fase perkembangan. Dari sebuah pemukiman kecil
                berbasis pertanian subsisten, Desa Pararra kini bertransformasi
                menjadi sebuah komunitas yang dinamis dengan berbagai potensi
                ekonomi yang mulai dikembangkan. Perjuangan para pendahulu dalam
                membuka lahan dan membangun fondasi sosial menjadi warisan yang
                terus dijaga oleh generasi saat ini.
              </p>
            </div>
          </div>

          {/* Data Kependudukan */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a4635] mb-6">
              Data Kependudukan
            </h2>
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#0a4635] text-white">
                  <tr>
                    <th className="p-4 font-semibold">Deskripsi</th>
                    <th className="p-4 font-semibold">Jumlah</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-brand-beige">
                    <td className="p-4">Jumlah Penduduk</td>
                    <td className="p-4">3,500 Jiwa (Data per 2025)</td>
                  </tr>
                  <tr className="hover:bg-brand-beige">
                    <td className="p-4">Jumlah Keluarga (KK)</td>
                    <td className="p-4">950 KK</td>
                  </tr>
                  <tr className="hover:bg-brand-beige">
                    <td className="p-4">Laki-laki</td>
                    <td className="p-4">1,780 Jiwa</td>
                  </tr>
                  <tr className="hover:bg-brand-beige">
                    <td className="p-4">Perempuan</td>
                    <td className="p-4">1,720 Jiwa</td>
                  </tr>
                  <tr className="hover:bg-brand-beige">
                    <td className="p-4">Jumlah Dusun</td>
                    <td className="p-4">4 Dusun</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Lokasi Kantor Desa */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0a4635] mb-6">
              Lokasi Kantor Desa
            </h2>
            {/* <Gmaps /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
