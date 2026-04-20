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
          <span className="cnt-num" data-target="500">0</span>
          <span className="cnt-label">🎓 Alunos capacitados na formação missionária e cursos rápidos</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="18">0</span>
          <span className="cnt-label">🌍 Nações em todos os continentes alcançadas por obreiros e parceiros</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num" data-target="10">0</span>
          <span className="cnt-label">📂 Projetos Missionários em andamento a partir de obreiros parceiros</span>
        </div>
        <div className="cnt-item reveal in">
          <span className="cnt-num-static">Centenas</span>
          <span className="cnt-label">⛪ Igrejas conscientizadas sobre os desafios dos menos alcançados</span>
        </div>
      </div>
    </section>
  );
}
