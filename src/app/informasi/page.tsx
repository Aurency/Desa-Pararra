// src/app/informasi/page.tsx

import Gmaps from "@/components/Gmaps";

// Data Kepala Desa dari Dokumen
const kepalaDesaData = [
  { no: 1, nama: "Abu Dg. Mawakka", periode: "1945 - 1965" },
  { no: 2, nama: "Tema To Mihara", periode: "1965 - 1982" },
  { no: 3, nama: "Mangun Pakan", periode: "1982 - 1993" },
  { no: 4, nama: "Bachrun Zaur. S", periode: "1993 - 1994" },
  { no: 5, nama: "Idrus To Pacawang", periode: "1994 - 2000" },
  { no: 6, nama: "Basri Abdillah", periode: "2001 - 2014" },
  { no: 7, nama: "Nirwan L", periode: "2014 - 2021" },
  { no: 8, nama: "Mangsur", periode: "2021 - Sekarang" },
];

// Data Pendidikan Terakhir dari Dokumen (Tabel 4, Tahun 2021)
const pendidikanData = [
  { tingkat: "Tidak Tamat Sekolah SD", jumlah: 170 },
  { tingkat: "Tamat Sekolah SD", jumlah: 33 },
  { tingkat: "Tamat Sekolah SLTP", jumlah: 61 },
  { tingkat: "Tamat SMU", jumlah: 46 },
  { tingkat: "Tamat Akademi/D1/D2/D3", jumlah: 0 },
  { tingkat: "Tamat Strata I", jumlah: 40 },
  { tingkat: "Tamat Strata II", jumlah: 0 },
];

// Data Jumlah Sekolah dari Dokumen (Tabel 6)
const sekolahData = [
  {
    tingkat: "Pendidikan Anak Usia Dini (PAUD/TK)",
    jumlahSekolah: 1,
    jumlahSiswa: 23,
  },
  { tingkat: "Sekolah Dasar (SD)", jumlahSekolah: 2, jumlahSiswa: 164 },
  { tingkat: "SMP / MTs", jumlahSekolah: 0, jumlahSiswa: 0 },
  { tingkat: "SMU / SMK / MA", jumlahSekolah: 0, jumlahSiswa: 0 },
];

export default function InformasiPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/informasi1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold">
          Informasi Desa Pararra
        </h1>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 lg:py-20 space-y-16">
        {/* Sejarah Desa */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-6 text-center">
            Sejarah Desa Pararra
          </h2>
          <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-4">
            <p>
              Pararra adalah salah satu desa tertua di Kecamatan Sabbang, yang
              keberadaannya diperkirakan sudah ada sebelum Indonesia merdeka
              pada tahun 1945. Sejarahnya diwarnai oleh pergolakan perjuangan
              melawan tentara NICA (1948-1949) dan pemberontakan DI/TII Kahar
              Muzakkar (1953-1965). Pada masa itu, terjadi perubahan sistem
              pemerintahan dari Tomokaka menjadi Kepala Desa.
            </p>
            <p>
              Pemerintahan Desa Pararra secara resmi terbentuk mulai tahun 1965.
              Sebelumnya pada tahun 1953, Desa Pararra dimekarkan menjadi dua
              desa, yaitu Desa Pararra yang dipimpin oleh Abu Dg. Mawakka dan
              Desa Tandung. Kemudian pada tahun 1994, desa dimekarkan lagi
              menjadi Desa Pararra dan Desa Tulak Tallu.
            </p>
          </div>
        </section>

        {/* Visi dan Misi Desa */}
        <section className="max-w-4xl mx-auto bg-green-50 p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-6 text-center">
            Visi & Misi Desa
          </h2>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Visi</h3>
            <blockquote className="mt-2 text-2xl italic font-serif text-gray-900">
              "Bersama Melanjutkan Pembangunan Menuju Desa Pararra yang Lebih
              Baik"
            </blockquote>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Misi
            </h3>
            {/* ================= PERUBAHAN UTAMA DI SINI ================= */}
            <ol className="list-decimal list-inside mt-4 space-y-3 text-gray-700 max-w-2xl mx-auto text-left">
              <li>
                Meningkatkan kinerja dan pelayanan Aparat Desa yang profesional
                dan berkwalitas.
              </li>
              <li>
                Bekerjasama dengan BPD sebagai Mitra Pemerintahan Desa dalam
                membangun Desa Pararra Bersatu.
              </li>
              <li>
                Meningkatkan Pembangunan Desa (Infrastruktur) dengan semangat
                gotong–royong untuk pencapaian Kwalitas pembangunan menjadi
                lebih baik.
              </li>
              <li>
                Meningkatkan Pemukiman masyarakat Miskin Melalui Program Bedah
                Rumah/Rehab Rumah Tidak Layak Huni (RTLH).
              </li>
              <li>
                Menanamkan Nilai-nilai Religius dan Kearifan Lokal melalui
                Program Pengembangan nilai spritual dan adat istiadat.
              </li>
              <li>
                Mewujudkan Sistem Usaha Mandiri melalui Program Pengembangan
                Badan Usaha Milik Desa (BUMDES).
              </li>
              <li>
                Menggali / Mengembangkan Potensi Desa melalui Program Desa
                Wisata.
              </li>
              <li>
                Meningkatkan Mutu Layanan Kesehatan dan Mensukseskan Program
                Penanganan Pandemi Covid-19 di Desa Pararra melalui Program
                Gerakan Desa Sehat.
              </li>
              <li>
                Memberikan ruang kepada pemuda dalam pengembangan Organisasi
                diantaranya adalah Karang Taruna.
              </li>
              <li>
                Meningkatkan Keasadaran Hukum Masyarakat Melalui Program
                Masyarakat Sadar Hukum.
              </li>
              <li>
                Menigkatkan Pelayanan Publik dan Keterbukaan Informasi melalui
                Program Internet Desa.
              </li>
            </ol>
            {/* ================= AKHIR DARI PERUBAHAN ================= */}
          </div>
        </section>

        {/* Pemerintahan Desa */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-6 text-center">
            Sejarah Kepemimpinan Kepala Desa
          </h2>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full text-left text-sm bg-white">
              <thead className="bg-[#0a4635] text-white">
                <tr>
                  <th className="p-4 font-semibold">No</th>
                  <th className="p-4 font-semibold">Nama Kepala Desa</th>
                  <th className="p-4 font-semibold">Periode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {kepalaDesaData.map((data) => (
                  <tr key={data.no} className="hover:bg-gray-50">
                    <td className="p-4">{data.no}</td>
                    <td className="p-4 font-medium">{data.nama}</td>
                    <td className="p-4">{data.periode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Geografis & Demografi */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-8 text-center">
            Kondisi Geografis & Kependudukan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Geografis */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Letak Geografis
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-bold mb-2">Batas Wilayah:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>
                    <strong>Utara:</strong> Desa Malimbu
                  </li>
                  <li>
                    <strong>Timur:</strong> Desa Tulak Tallu
                  </li>
                  <li>
                    <strong>Selatan:</strong> Desa Buangin/Kalotok
                  </li>
                  <li>
                    <strong>Barat:</strong> Desa Tandung
                  </li>
                </ul>
              </div>
            </div>
            {/* Kependudukan */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Kependudukan (Data 2021)
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-[#0a4635]">
                  1.305{" "}
                  <span className="text-xl font-normal text-gray-600">
                    Jiwa
                  </span>
                </p>
                <p className="text-gray-500">Total Penduduk Desa Pararra</p>
                <div className="mt-4 space-y-2 text-gray-700">
                  <p>
                    <strong>Laki-laki:</strong> 682 Jiwa
                  </p>
                  <p>
                    <strong>Perempuan:</strong> 623 Jiwa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pendidikan */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-6 text-center">
            Data Pendidikan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Pendidikan Terakhir Warga (2021)
              </h3>
              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full text-left text-sm bg-white">
                  <thead className="bg-[#0a4635] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Tingkat Pendidikan</th>
                      <th className="p-4 font-semibold">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pendidikanData.map((p) => (
                      <tr key={p.tingkat} className="hover:bg-gray-50">
                        <td className="p-4">{p.tingkat}</td>
                        <td className="p-4">{p.jumlah} orang</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Sekolah di Desa
              </h3>
              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full text-left text-sm bg-white">
                  <thead className="bg-[#0a4635] text-white">
                    <tr>
                      <th className="p-4 font-semibold">Tingkat Sekolah</th>
                      <th className="p-4 font-semibold">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sekolahData.map((s) => (
                      <tr key={s.tingkat} className="hover:bg-gray-50">
                        <td className="p-4">{s.tingkat}</td>
                        <td className="p-4">
                          {s.jumlahSekolah} sekolah ({s.jumlahSiswa} siswa)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasi Kantor Desa */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a4635] mb-6 text-center">
            Lokasi Kantor Desa
          </h2>
          <Gmaps />
        </section>
      </div>
    </div>
  );
}
