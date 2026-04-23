"use client";

import { useState, useEffect } from "react";

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    // Scroll To Top
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Reveal Animations
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll(".reveal, .reveal-l, .reveal-r");
    revealElements.forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealElements.forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <a href="https://wa.me/5517992364474" target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      <button
        className={`back-top ${showTop ? "show" : ""}`}
        id="backTop"
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
