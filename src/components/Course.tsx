export default function Course() {
  return (
    <section id="curso" aria-labelledby="curso-h">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="curso-header reveal in">
          <span className="tag-center">Capacitação Online</span>
          <h2 className="atuacao-title" id="curso-h">Grade <span style={{ color: "var(--red)" }}>Curricular</span></h2>
          <p>Um curso em 3 módulos e 12 matérias — a porta de entrada para amadurecer seu chamado missionário. 100% online, para todo o Brasil e o mundo.</p>
        </div>
        <div className="modulos-grid">
          <article className="mod-card reveal in">
            <div className="mod-head"><span className="mod-num">Módulo 01</span><span className="mod-icon">🌱</span><h3 className="mod-title">Uma Jornada à Maturidade</h3></div>
            <div className="mod-body"><ul>
              <li>Aula Inaugural</li><li>Alma Curada, Obreiro Aperfeiçoado</li>
              <li>Disciplinas Espirituais</li><li>Dons e Ministérios</li>
            </ul></div>
          </article>
          <article className="mod-card reveal in" style={{ transitionDelay: ".15s" }}>
            <div className="mod-head"><span className="mod-num">Módulo 02</span><span className="mod-icon">📖</span><h3 className="mod-title">Uma Jornada pela Teologia</h3></div>
            <div className="mod-body"><ul>
              <li>Missões e a Adoração</li><li>Hermenêutica Missiológica</li>
              <li>Panorama Bíblico</li><li>Missio Dei — Enviados e Sustentados por Deus</li>
              <li>Rumos da Missão — Atos dos Apóstolos</li>
            </ul></div>
          </article>
          <article className="mod-card reveal in" style={{ transitionDelay: ".3s" }}>
            <div className="mod-head"><span className="mod-num">Módulo 03</span><span className="mod-icon">🌐</span><h3 className="mod-title">Uma Jornada aos Campos</h3></div>
            <div className="mod-body"><ul>
              <li>Visão Global</li><li>Mobilização Missionária</li>
              <li>Planejamento Missionário — Do Lar ao Campo</li><li>Evangelismo e Discipulado</li>
            </ul></div>
          </article>
        </div>
        <div className="curso-cta reveal in" id="contato">
          <div className="cta-text">
            <span style={{ fontSize: ".75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "14px" }}>Dê o próximo passo</span>
            <h3>Pronto para responder<br/>ao chamado?</h3>
            <ul className="cta-benefits">
              <li><i className="fas fa-check-circle"></i> 3 módulos e 12 matérias online</li>
              <li><i className="fas fa-check-circle"></i> Assistência e aconselhamento para alunos</li>
              <li><i className="fas fa-check-circle"></i> Interdenominacional — sua doutrina, respeitada</li>
              <li><i className="fas fa-check-circle"></i> Certificado ao final do curso</li>
            </ul>
          </div>
          <div className="cta-action">
            <div className="cta-seals">
              <div className="seal"><i className="fas fa-globe"></i><span>Desde<br/>2013</span></div>
              <div className="seal"><i className="fas fa-users"></i><span>+500<br/>Alunos</span></div>
              <div className="seal"><i className="fas fa-star"></i><span>100%<br/>Online</span></div>
            </div>
            <a href="https://wa.me/5517999999999" target="_blank" rel="noopener noreferrer" className="btn-cta-big">
              <i className="fab fa-whatsapp"></i> Quero me Inscrever
            </a>
            <p className="cta-sub">Fale conosco pelo WhatsApp e tire todas as dúvidas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
