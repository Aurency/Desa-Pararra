// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Pararra - Kabupaten Luwu Utara",
  description:
    "Website resmi Desa Pararra, Kecamatan Sabbang, Kabupaten Luwu Utara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* 
        PERUBAHAN UTAMA DI SINI:
        - flex flex-col: Mengatur body untuk menjadi layout kolom vertikal.
        - min-h-screen: Memastikan layout mengisi setidaknya seluruh tinggi layar.
        Ini adalah struktur yang benar untuk layout dengan header/footer yang menempel.
      */}
      <body
        className={`${inter.className} bg-brand-beige text-brand-green flex flex-col min-h-screen`}
      >
        <Navbar />
        {/* 
          'flex-grow' membuat area konten ini "tumbuh" mengisi semua sisa ruang yang tersedia,
          secara efektif mendorong footer ke bagian paling bawah layar.
        */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
