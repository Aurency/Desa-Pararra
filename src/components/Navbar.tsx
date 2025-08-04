// src/components/Navbar.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { VscMenu, VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/informasi", label: "Informasi" },
    { href: "/potensi", label: "Potensi" },
    { href: "/galeri", label: "Galeri" },
  ];

  return (
    /*
      PERUBAHAN UTAMA DI SINI:
      - Menggunakan 'bg-[#0a4635]' untuk memaksa Tailwind menggunakan kode warna secara langsung.
      - Ini adalah solusi paling ampuh jika nama warna kustom gagal dimuat.
    */
    <nav className="bg-[#0a4635] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-brand-yellow transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Desa Pararra
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-brand-yellow transition-colors"
            >
              {link.label}
            </Link>
          ))}
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

      {/* Daftar Menu Mobile (juga diubah menjadi kode warna langsung) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a4635] border-t border-green-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-green-800 hover:text-brand-yellow w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
