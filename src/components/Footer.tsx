// src/components/Footer.tsx

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-green text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Desa Pararra</h3>
            <p className="text-gray-300">
              Kecamatan Sabbang, Kabupaten Luwu Utara, Sulawesi Selatan.
            </p>
            <p className="text-gray-300 mt-2">
              Sebuah desa dengan keindahan alam dan potensi yang melimpah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/informasi"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Informasi
                </Link>
              </li>
              <li>
                <Link
                  href="/potensi"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Potensi
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kontak@pararra.desa.id"
                  className="hover:text-brand-yellow"
                >
                  kontak@pararra.desa.id
                </a>
              </li>
              <li>
                <strong>Telepon:</strong> +62 812-3456-7890
              </li>
              <li>
                <strong>Alamat:</strong> Kantor Desa Pararra, Sabbang, Luwu
                Utara
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Desa Pararra & Mahasiswa KKN Unhas Gel.
            114. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
