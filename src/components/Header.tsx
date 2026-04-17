"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="nav-wrap">
        <a href="#" className="nav-logo" aria-label="Missão CTAM">
          <img src="/logo-ctam.png" alt="Logo Missão CTAM" style={{ height: "65px", width: "auto" }} />
        </a>
        <nav className="nav-menu" aria-label="Menu principal">
          <a href="#sobre">Sobre</a>
          <a href="#curso">O Curso</a>
          <a href="#atuacao">Campo</a>
          <a href="#agenda">Agenda</a>
          <a href="#galeria">Galeria</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a href="#curso" className="nav-btn">
          Inscreva-se <i className="fas fa-heart"></i>
        </a>
        <button
          className="hamburger"
          id="ham"
          aria-label="Menu"
          aria-expanded={mobOpen}
          onClick={() => setMobOpen(!mobOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`nav-mobile ${mobOpen ? "open" : ""}`} id="navMob" aria-label="Menu mobile">
        <a href="#sobre" onClick={() => setMobOpen(false)}>Sobre</a>
        <a href="#curso" onClick={() => setMobOpen(false)}>O Curso</a>
        <a href="#atuacao" onClick={() => setMobOpen(false)}>Campo</a>
        <a href="#agenda" onClick={() => setMobOpen(false)}>Agenda</a>
        <a href="#galeria" onClick={() => setMobOpen(false)}>Galeria</a>
        <a href="#depoimentos" onClick={() => setMobOpen(false)}>Depoimentos</a>
        <a href="#localizacao" onClick={() => setMobOpen(false)}>Localização</a>
        <a href="#curso" style={{ color: "var(--red)", fontWeight: 700 }} onClick={() => setMobOpen(false)}>
          Inscreva-se →
        </a>
      </nav>
    </header>
  );
}
