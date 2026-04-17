export default function LocationMap() {
  return (
    <section id="localizacao" aria-labelledby="loc-h" style={{ position: "relative", width: "100%", height: "450px", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps?cid=5287923131678421322&hl=pt-BR&source=embed&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização da Base CTAM"
      ></iframe>
      
      {/* Overlay opcional para não parecer "quebrado" no design, o usuário ainda pode clicar no mapa. */}
      <div 
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(26,63,160,0.15)]"
        aria-hidden="true"
      ></div>
    </section>
  );
}
