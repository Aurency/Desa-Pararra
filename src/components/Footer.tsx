// src/components/Footer.tsx

import Link from "next/link";
// Kita akan menggunakan ikon populer dari react-icons
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a4635] text-white">
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Kolom Tentang Desa */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Desa Pararra</h3>
            <p className="text-gray-300 max-w-xs">
              Kecamatan Sabbang, Kabupaten Luwu Utara, Sulawesi Selatan.
            </p>
            {/* Ikon Media Sosial */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-300 hover:text-brand-yellow transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-brand-yellow transition-transform duration-300 hover:scale-125"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-brand-yellow transition-transform duration-300 hover:scale-125"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Kolom Navigasi */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jelajahi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/informasi"
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Informasi
                </Link>
              </li>
              <li>
                <Link
                  href="/potensi"
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Potensi
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak */}
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
              <li className="max-w-xs mx-auto md:mx-0">
                <strong>Alamat:</strong> Kantor Desa Pararra, Sabbang, Luwu
                Utara
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
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
