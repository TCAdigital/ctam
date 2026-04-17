"use client";

import { useEffect, useRef } from "react";

export default function Counters() {
  const cntRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cobs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const tgt = +(el.dataset.target || "0");
            let cur = 0;
            const step = tgt / 80;
            const t = setInterval(() => {
              cur += step;
              if (cur >= tgt) {
                cur = tgt;
                clearInterval(t);
              }
              el.textContent = "+" + Math.floor(cur).toLocaleString("pt-BR");
            }, 20);
            cobs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const nums = cntRef.current?.querySelectorAll(".cnt-num");
    nums?.forEach((el) => cobs.observe(el));

    return () => cobs.disconnect();
  }, []);

  return (
    <section id="counters" aria-label="Números da Missão" ref={cntRef}>
      <div className="counters-grid">
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="350">0</span>
          <span className="cnt-label">🎓 Alunos Capacitados</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="18">0</span>
          <span className="cnt-label">🌍 Nações Alcançadas</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="2400">0</span>
          <span className="cnt-label">📖 Bíblias Doadas</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="7000">0</span>
          <span className="cnt-label">🏳️ Povos Não Alcançados</span>
        </div>
      </div>
    </section>
  );
}
