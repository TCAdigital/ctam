"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const fotos = [
  { src: '/galeria/425722776_1268210557467000_3017483592830621156_n.jpg', alt: 'Momento no campo CTAM' },
  { src: '/galeria/DSC_0002.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/DSC_0005.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/DSC_0036.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/DSC_0103.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3264.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3327.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3341.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3370.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3384.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3399.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3408.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3437.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3445.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3501.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3579.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_3666.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_5076.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_5103.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_5129.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_5172.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_5212.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9073.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9724.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9735.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9832.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9907.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/IMG_9996.JPG', alt: 'Momento no campo CTAM' },
  { src: '/galeria/_MG_2533.jpg', alt: 'Momento no campo CTAM' }
];

export default function Gallery() {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  const openLb = (i: number) => {
    setLbIdx(i);
    setLbOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLb = () => {
    setLbOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lbOpen) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") setLbIdx((prev) => (prev - 1 + fotos.length) % fotos.length);
      if (e.key === "ArrowRight") setLbIdx((prev) => (prev + 1) % fotos.length);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lbOpen]);

  return (
    <>
      <section id="galeria" aria-labelledby="gal-h">
        <div className="galeria-header reveal in">
          <span className="tag-center">Memórias do Campo</span>
          <h2 className="gal-title" id="gal-h">Nossa <span>Galeria</span></h2>
        </div>
        <div className="gal-grid" role="list">
          {fotos.map((f, i) => (
            <div key={i} className="gal-item" role="listitem" onClick={() => openLb(i)}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover", transition: "transform .6s ease" }} />
              <div className="gal-over"><span>🔍</span></div>
            </div>
          ))}
        </div>
      </section>

      <div className={`lightbox ${lbOpen ? "open" : ""}`} role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) closeLb(); }}>
        <button className="lb-x" aria-label="Fechar" onClick={closeLb}>✕</button>
        <button className="lb-p" aria-label="Anterior" onClick={() => setLbIdx((lbIdx - 1 + fotos.length) % fotos.length)}>‹</button>
        <img src={fotos[lbIdx]?.src} alt={fotos[lbIdx]?.alt || ""} style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' }} />
        <button className="lb-n" aria-label="Próxima" onClick={() => setLbIdx((lbIdx + 1) % fotos.length)}>›</button>
      </div>
    </>
  );
}
