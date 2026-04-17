export default function Agenda() {
  const eventos = [
    {
      day: "01",
      month: "Mai, 2026",
      title: "Acampa Missionário 2026",
      time: "1 a 3 de Maio",
      local: "Base CTAM – Nova Granada/SP",
      img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=160&q=70",
      link: "https://www.e-inscricao.com/misso-ctam/acampamissoes?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZnRzaARMat9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAae1GzaQzkinPCHhhLwl1TifrHms11Il-Z-X9fbMbEaEVi8C96Bo-CwlhMgqyg_aem_vhumY9e_Ly9Rj0EqDpbFgw"
    },
    {
      day: "03",
      month: "Jul, 2026",
      title: "EMD - Escola de Missões e Discipulado. CTAM",
      time: "3 à 10 de Julho",
      local: "Base CTAM – Nova Granada/SP",
      img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=160&q=70",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe1T_n4xNOp7UCFd7liJSvpt-voCViQNnSLNn9va1e793IqPA/viewform"
    }
  ];

  return (
    <section id="agenda" aria-labelledby="ag-h">
      <div className="agenda-inner">
        <div className="agenda-head">
          <div className="agenda-titles reveal in">
            <span className="tag-red">Próximos Eventos</span>
            <h2 className="agenda-main-title" id="ag-h">Nossa <span>Agenda.</span></h2>
          </div>
        </div>
        <div className="eventos reveal in">
          {eventos.map((e, idx) => (
            <a key={idx} href={e.link} target="_blank" rel="noopener noreferrer" className="ev-item" style={{ textDecoration: 'none' }}>
              <div className="ev-date"><span className="ev-day">{e.day}</span><span className="ev-month">{e.month}</span></div>
              <img className="ev-img" src={e.img} alt={e.title} loading="lazy" width="80" height="80" />
              <div className="ev-info"><h4>{e.title}</h4>
                <div className="ev-meta">
                  <span><i className="far fa-clock"></i> {e.time}</span>
                  <span><i className="fas fa-map-marker-alt"></i> {e.local}</span>
                </div>
              </div>
              <div className="ev-arrow" aria-hidden="true">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
