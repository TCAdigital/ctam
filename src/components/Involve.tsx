export default function Involve() {
  return (
    <section id="envolver" aria-labelledby="env-h">
      <div className="envolver-wrap">
        <div className="envolver-left reveal-l in">
          <img className="envolver-foto" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80" alt="Missão em campo" loading="lazy" width="500" height="650" />
        </div>
        <div className="envolver-right reveal-r in">
          <span className="env-tag">Faça Parte</span>
          <h2 className="env-title" id="env-h">Como Você Pode<br/><span>Se Envolver</span></h2>
          <p className="env-desc">Há um papel para cada pessoa nessa missão. Seja chamado ao campo, à oração ou ao suporte — a CTAM tem um caminho para você.</p>
          <div className="env-items">
            <div className="env-item"><div className="env-num">1</div><div><h4>Faça o Treinamento Online</h4><p>3 módulos e 12 matérias para preparar missionários responsáveis e maduros espiritualmente.</p></div></div>
            <div className="env-item"><div className="env-num">2</div><div><h4>Parceria com sua Igreja</h4><p>Sua comunidade pode ser parceira da CTAM, enviando missionários e participando dos eventos.</p></div></div>
            <div className="env-item">
              <div className="env-num">3</div>
              <div>
                <h4>Apoio em Oração e Financeiro</h4>
                <p>Sustente obreiros em campo. Cada contribuição leva o Evangelho mais longe.</p>
                <div style={{ marginTop: "12px", padding: "12px", background: "rgba(255,255,255,0.05)", borderRadius: "8px", fontSize: "0.75rem" }}>
                  <p style={{ marginBottom: "4px" }}><strong>Chave Pix:</strong> doe.ctam@gmail.com</p>
                  <p><strong>Link Oferta:</strong> <a href="https://pag.ae/81HwYgSw4" target="_blank" rel="noopener" style={{ color: "var(--gold)", textDecoration: "underline" }}>Clique aqui para doar</a></p>
                </div>
              </div>
            </div>
            <div className="env-item">
              <div className="env-num">4</div>
              <div>
                <h4>Evento Missionário</h4>
                <p>Podemos agendar um dia especial de missões em sua igreja.</p>
              </div>
            </div>
            <div className="env-item">
              <div className="env-num">5</div>
              <div>
                <h4>Visita na base CTAM</h4>
                <p>Você pode juntar uma equipe de missões e vir passar um dia em nossa base com programação especial para vocês.</p>
              </div>
            </div>
            <div className="env-item">
              <div className="env-num">6</div>
              <div>
                <h4>Viagens Missionárias</h4>
                <p>Promovemos anualmente viagens missionárias de curto prazo, atendendo aos pré requisitos, você pode ser um dos membros na equipe</p>
              </div>
            </div>

          </div>
          <a href="https://wa.me/5517999999999" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ alignSelf: "flex-start" }}>Descobrir Mais <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
}
