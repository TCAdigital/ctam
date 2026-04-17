export default function Hero() {
  return (
    <section id="inicio" aria-label="Início">
      <div id="hero">
        <div className="hero-bg" role="img" aria-label="Missão em campo"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Levando as<br/>Boas Novas<br/>Onde Poucos<br/>Chegam.</h1>
          <div className="hero-btns">
            <a href="#curso" className="btn-red">Conheça o Curso <i className="fas fa-arrow-right"></i></a>
            <a href="#sobre" className="btn-gold">Saiba Mais <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="hero-footnote">Missão CTAM é uma organização missionária<br/>interdenominacional fundada em 2013.</div>
        <div className="hero-arrows" aria-hidden="true">
          <button className="hero-arrow-btn">←</button>
          <button className="hero-arrow-btn">→</button>
        </div>
      </div>
    </section>
  );
}
