"use client";

import { useState, useEffect } from "react";

const depos = [
  {stars:5,cat:"Aluna do Curso Online",quote:'"O curso da Missão CTAM transformou minha visão sobre o chamado missionário. As matérias são profundas e moldaram meu coração para os povos não alcançados."',name:"Ana Carolina Silva",role:"Missionária, Goiânia/GO",init:"AC"},
  {stars:5,cat:"Participante do Acampamento",quote:'"Fui ao acampamento sem saber o que esperar e voltei com certeza do meu chamado. A equipe da CTAM cuida com amor de cada vocacionado."',name:"Marcos Oliveira",role:"Pastor, São Paulo/SP",init:"MO"},
  {stars:5,cat:"Aluno do Curso Online",quote:'"A grade curricular é completa e equilibrada — teologia, espiritualidade e prática de campo. Recomendo para quem sente o chamado missionário."',name:"João Pedro Ferreira",role:"Obreiro, Recife/PE",init:"JP"},
  {stars:5,cat:"Parceiro Institucional",quote:'"Nossa igreja firmou parceria com a CTAM e vimos o chamado missionário despertar em vários membros. A mobilização deles é séria e com muito fruto."',name:"Rev. Samuel Costa",role:"Pastor, Manaus/AM",init:"SC"}
];

export default function Testimonials() {
  const [dIdx, setDIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDIdx((prev) => (prev + 1) % depos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const d = depos[dIdx];

  return (
    <section id="depoimentos" aria-labelledby="depo-h">
      <div className="depo-inner">
        <span className="depo-tag">Depoimentos</span>
        <h2 className="depo-title" id="depo-h">O que Dizem Nossos <span style={{ color: "var(--red)" }}>Alunos</span></h2>
        <div className="depo-slider-wrap">
          <button className="depo-nav prev" aria-label="Anterior" onClick={() => setDIdx((dIdx - 1 + depos.length) % depos.length)}>←</button>
          
          <div id="depoContent" role="region" aria-live="polite">
            <div className="depo-stars">{"★".repeat(d.stars)}</div>
            <span className="depo-category">{d.cat}</span>
            <p className="depo-quote">{d.quote}</p>
            <div className="depo-author-wrap">
              <div className="depo-av">{d.init}</div>
              <div className="depo-author-info"><strong>{d.name}</strong><span>{d.role}</span></div>
            </div>
          </div>
          
          <button className="depo-nav next" aria-label="Próximo" onClick={() => setDIdx((dIdx + 1) % depos.length)}>→</button>
        </div>
        <div className="depo-dots" role="tablist">
          {depos.map((_, i) => (
            <div
              key={i}
              className={`depo-dot ${i === dIdx ? "active" : ""}`}
              onClick={() => setDIdx(i)}
              role="tab"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
