// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
// 1. Impor hook usePathname dari Next.js
import { usePathname } from "next/navigation";
import { VscMenu, VscClose } from "react-icons/vsc";

const Navbar = () => {
  // 2. Dapatkan path URL saat ini dengan memanggil hook
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/informasi", label: "Informasi" },
    { href: "/potensi", label: "Potensi" },
    { href: "/galeri", label: "Galeri" },
  ];

  return (
    <nav className="bg-[#0a4635] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-[#ffffff] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Desa Pararra
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            // 3. Cek apakah link ini adalah halaman yang sedang aktif
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                // 4. Terapkan kelas secara dinamis
                className={`relative text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#ffffff] font-semibold" // Style untuk link aktif
                    : "text-white hover:text-[#ffffff]" // Style untuk link tidak aktif
                }`}
              >
                {link.label}
                {/* 5. Buat elemen garis bawah yang hanya muncul jika link aktif */}
                {isActive && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-[#ffffff] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Tombol Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <VscClose size={28} /> : <VscMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Daftar Menu Mobile (juga diperbarui dengan style aktif) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a4635] border-t border-green-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block w-full rounded-md px-3 py-3 text-base font-medium text-center transition-colors duration-200 ${
                    isActive
                      ? "bg-green-800 text-[#ffffff]" // Style aktif di mobile
                      : "text-white hover:bg-green-800" // Style tidak aktif di mobile
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
