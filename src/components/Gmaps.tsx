// src/components/Gmaps.tsx

const Gmaps = () => {
  return (
    // Pembungkus div ini bagus untuk styling tambahan seperti bayangan dan sudut membulat
    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.2069283049127!2d120.15140389636106!3d-2.620389908578004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d922bb757d77a33%3A0xe7aaa359e38f5de2!2sKantor%20Desa%20Pararra!5e1!3m2!1sid!2sid!4v1754406081259!5m2!1sid!2sid"
        width="100%" // Diubah agar responsif
        height="450" // Tinggi tetap
        style={{ border: 0 }} // Diubah menjadi objek JSX
        allowFullScreen={true} // Diubah menjadi camelCase JSX
        loading="lazy" // Atribut ini bagus untuk performa
        referrerPolicy="no-referrer-when-downgrade" // Diubah menjadi camelCase JSX
      ></iframe>
    </div>
  );
};

export default Gmaps;
