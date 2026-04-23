"use client";

import { useState } from "react";

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="sobre" aria-labelledby="sobre-h">
        <div className="sobre-wrap">
          <div className="sobre-img reveal-l in">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80" alt="Missionários CTAM em campo" loading="lazy" width="700" height="700" />
            
            {/* Botão de Play */}
            <div className="play-btn-pulse" onClick={() => setIsVideoOpen(true)} title="Assistir Vídeo Institucional">
              <i className="fas fa-play" style={{ marginLeft: "4px" }}></i>
            </div>
            
          </div>
          <div className="sobre-text reveal-r in">
            <span className="tag-red">Sobre a Missão</span>
            <h2 className="sobre-title" id="sobre-h">Juntos podemos levar o evangelho aos não alcançados.</h2>
            <p className="sobre-subtitle" style={{ fontSize: "1.1rem", color: "var(--gold)", fontWeight: 600, marginTop: "-20px", marginBottom: "24px", fontFamily: "var(--font-h)" }}>Até que Todos Saibam</p>
            <p className="sobre-desc">A Missão CTAM é uma organização missionária interdenominacional fundada em 2013 pelos pastores Carlos Medeiros e Mara Raquel Medeiros, com base em Nova Granada/SP.</p>
            <hr className="sobre-divider" />
            <div className="sobre-bottom">
              <p className="sobre-para">Respeitamos diferentes linhas doutrinárias do contexto evangélico protestante, permitindo que as igrejas locais definam suas próprias estratégias e formas de atuação.</p>
              <div className="sobre-stat-badge">
                <div className="stat-badge-inner">
                  <strong>+10</strong>
                  <span>Anos de<br/>Missão Ativa</span>
                </div>
              </div>
            </div>
            <div className="sobre-avatars">
              <div className="av-stack">
                <div className="av">CM</div><div className="av">MR</div><div className="av av-gold">+</div>
              </div>
              <div className="av-info"><strong>Fundadores & Equipe CTAM</strong><span>Comprometidos com o chamado</span></div>
            </div>
            <a href="#curso" className="btn-gold" style={{ marginTop: "32px", alignSelf: "flex-start" }}>Descobrir Mais <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal de Vídeo */}
      <div className={`lightbox ${isVideoOpen ? "open" : ""}`} role="dialog" aria-modal="true" onClick={(e) => { if (e.target === e.currentTarget) setIsVideoOpen(false); }}>
        <button className="lb-x" aria-label="Fechar" onClick={() => setIsVideoOpen(false)}>✕</button>
        
        {isVideoOpen && (
          <div style={{ width: "90%", maxWidth: "1000px", aspectRatio: "16/9", position: "relative" }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/vIbkU8H22l8?autoplay=1&rel=0" 
              title="Vídeo Institucional CTAM" 
              style={{ border: "none", borderRadius: "12px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}
