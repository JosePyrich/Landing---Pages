import React from 'react'
import './Modelo1.css'
import { FaSnowflake, FaSyringe, FaMicroscope, FaFlask, FaWhatsapp } from 'react-icons/fa'
import ScrollAnimation from '../../components/ScrollAnimation'

const Modelo1 = () => {
  return (
    <div className="modelo1">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Dr. Beatriz Pyrich</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="hero-content">
              <ScrollAnimation direction="up" delay={0.3}>
                <h1 className="hero-title">
                  Lorem ipsum dolor sit<br />
                  amet consectetur
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <p className="hero-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.5}>
                <button className="cta-button">Agende uma consulta</button>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="tratamentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="section-title">Tratamentos</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="section-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>
          
          <div className="tratamentos-grid">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="tratamento-card">
                <div className="card-icon"><FaSnowflake /></div>
                <h3>Criopreservação</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="card-link">Saiba mais</a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="tratamento-card">
                <div className="card-icon"><FaSyringe /></div>
                <h3>Inseminação Intra-Uterina</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="card-link">Saiba mais</a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="tratamento-card">
                <div className="card-icon"><FaMicroscope /></div>
                <h3>ICSI</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="card-link">Saiba mais</a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="tratamento-card">
                <div className="card-icon"><FaFlask /></div>
                <h3>Biópsia Embrionária</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <a href="#" className="card-link">Saiba mais</a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="depoimentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="section-title">Depoimentos</h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="section-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </ScrollAnimation>
          
          <div className="depoimentos-grid">
            <ScrollAnimation direction="left" delay={0.1}>
              <div className="depoimento-card">
                <div className="quote-icon">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="depoimento-author">A. C.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="depoimento-card">
                <div className="quote-icon">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="depoimento-author">M. N.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="depoimento-card">
                <div className="quote-icon">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="depoimento-author">S. R.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text">
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="section-title">Experiência</h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <p className="section-intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollAnimation>
              
              <div className="qualificacoes">
                <ScrollAnimation direction="right" delay={0.1}>
                  <div className="qualificacao-item">
                    <h3>DR. Beatriz Pyrich</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p>CRM-XX 00.000</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="qualificacao-item">
                    <h4>Especializações</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet</li>
                      <li>Consectetur adipiscing elit</li>
                      <li>Sed do eiusmod tempor</li>
                      <li>Incididunt ut labore</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato/Footer */}
      <footer id="contato" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Dr. Beatriz Pyrich</h3>
              <p>Lorem ipsum dolor sit amet</p>
              <p>CRM-XX 00.000 | RQE 00000</p>
            </div>
            
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>Lorem Ipsum</p>
              <p>Rua 000 - Cidade/UF</p>
              <p>(00) 00000-0000</p>
              <a href="#" className="whatsapp-link"><FaWhatsapp /> WhatsApp</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>2025 | Syntexa Code - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Modelo1

