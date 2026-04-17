export default function ActionAreas() {
  return (
    <section id="atuacao" aria-labelledby="atu-h">
      <div className="atuacao-header reveal in">
        <span className="tag-center">Como Atuamos</span>
        <h2 className="atuacao-title" id="atu-h">Alcançando os Povos <span>Mais Distantes</span></h2>
      </div>
      <div className="cards-grid reveal in">
        <div className="card-c">
          <div className="card-c-bg" style={{ backgroundImage: "url('/map_africa.png')" }}></div>
          <div className="card-c-overlay"></div>
          <div className="card-c-content">
            <span className="card-c-tag">África</span>
            <h3>Campo Africano</h3>
            <p>Obreiros atuando em nações africanas com pouco ou nenhum acesso ao Evangelho, plantando igrejas e discipulando novos crentes.</p>
          </div>
        </div>
        <div className="card-c">
          <div className="card-c-bg" style={{ backgroundImage: "url('/map_asia.png')" }}></div>
          <div className="card-c-overlay"></div>
          <div className="card-c-content">
            <span className="card-c-tag">Ásia</span>
            <h3>Campo Asiático</h3>
            <p>Presença estratégica em regiões da Ásia com alta concentração de Povos Não Alcançados e trabalho compassivo.</p>
          </div>
        </div>
        <div className="card-c">
          <div className="card-c-bg" style={{ backgroundImage: "url('/map_brazil.png')" }}></div>
          <div className="card-c-overlay"></div>
          <div className="card-c-content">
            <span className="card-c-tag">Brasil</span>
            <h3>Norte do Brasil</h3>
            <p>Trabalho entre comunidades ribeirinhas da Amazônia — povos isolados que raramente recebem a visita de missionários.</p>
          </div>
        </div>
        <div className="card-c">
          <div className="card-c-bg" style={{ backgroundImage: "url('/map_south_america.png')" }}></div>
          <div className="card-c-overlay"></div>
          <div className="card-c-content">
            <span className="card-c-tag">América do Sul</span>
            <h3>América do Sul</h3>
            <p>Apoio e mobilização em países da América do Sul, fortalecendo igrejas locais para alcançar populações sem acesso ao Evangelho.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
