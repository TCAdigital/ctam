export default function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="f-brand">
          <div className="f-logo">
            <img src="/logo-ctam-footer.png" alt="Logo Missão CTAM" style={{ height: "55px", width: "auto" }} />
          </div>
          <p>Levando as boas novas onde poucos chegam. Com base em Nova Granada/SP, a Missão CTAM mobiliza e capacita igrejas para alcançar os Povos Não Alcançados desde 2013.</p>
          <div className="f-socials">
            <a href="#" className="f-soc" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="f-soc" aria-label="X/Twitter"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="f-soc" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/5517999999999" className="f-soc" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="f-col">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#sobre">Sobre a Missão</a></li>
            <li><a href="#curso">O Curso Online</a></li>
            <li><a href="#atuacao">Onde Atuamos</a></li>
            <li><a href="#agenda">Agenda</a></li>
            <li><a href="#galeria">Galeria</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Se Envolver</h4>
          <ul>
            <li><a href="#curso">Fazer o Curso</a></li>
            <li><a href="#envolver">Parceria Igreja</a></li>
            <li><a href="#envolver">Apoio Financeiro</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4>Contato</h4>
          <div className="f-contact-card">
            <h4>Nova Granada/SP<br/>A 30 min de S.J. Rio Preto</h4>
            <a href="https://www.google.com/maps?cid=5287923131678421322" target="_blank" rel="noopener noreferrer" className="f-contact-row hover:text-[var(--gold)] transition-colors"><i className="fas fa-map-marker-alt"></i> Ver no Mapa</a>
            <div className="f-contact-row"><i className="fab fa-whatsapp"></i> (17) 9 9999-9999</div>
            <div className="f-contact-row"><i className="fas fa-envelope"></i> contato@missaoctam.org</div>
          </div>
        </div>
      </div>
      <div className="footer-bar">
        <p>© 2025 Missão CTAM. Todos os direitos reservados.</p>
        <p className="dev">Desenvolvido com amor ❤️ pela <a href="https://www.tcadigital.com.br/express" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", fontWeight: 600, textDecoration: "none", transition: ".2s" }}>TCA Digital Ai-Driven</a></p>
        <div className="f-legal"><a href="#">Termos de Uso</a><a href="#">Privacidade</a></div>
      </div>
    </footer>
  );
}
