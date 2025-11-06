import React from 'react'
import './Modelo4.css'
import { FaSnowflake, FaSyringe, FaMicroscope, FaFlask, FaWhatsapp } from 'react-icons/fa'
import ScrollAnimation from '../../components/ScrollAnimation'

const Modelo4 = () => {
  return (
    <div className="modelo4">
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
          <button className="menu-toggle">☰</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.2}>
            <h1 className="hero-title">
              Lorem ipsum dolor sit<br />
              amet consectetur
            </h1>
          </ScrollAnimation>
          
          <div className="hero-treatments">
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="treatment-preview">
                <FaSnowflake className="preview-icon" />
                <span>Criopreservação</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.35}>
              <div className="treatment-preview">
                <FaSyringe className="preview-icon" />
                <span>Inseminação Intra-Uterina</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="treatment-preview">
                <FaMicroscope className="preview-icon" />
                <span>ICSI</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.45}>
              <div className="treatment-preview">
                <FaFlask className="preview-icon" />
                <span>Biópsia Embrionária</span>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation direction="up" delay={0.5}>
            <p className="hero-subtitle">
              <strong>Lorem</strong>, <strong>ipsum</strong> e <strong>dolor</strong> sit amet, consectetur adipiscing elit.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.6}>
            <div className="hero-whatsapp">
              <a href="#" className="whatsapp-button">
                <FaWhatsapp className="whatsapp-icon" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="tratamentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="section-title">Dedicação</h2>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="section-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>

          <div className="tratamentos-grid">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="tratamento-card">
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <FaSnowflake className="card-icon" />
                  </div>
                  <h3>Criopreservação</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p className="card-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="card-button">Saiba mais</button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="tratamento-card">
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <FaSyringe className="card-icon" />
                  </div>
                  <h3>Inseminação Intra-Uterina</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p className="card-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="card-button">Saiba mais</button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="tratamento-card">
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <FaMicroscope className="card-icon" />
                  </div>
                  <h3>ICSI</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p className="card-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="card-button">Saiba mais</button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="tratamento-card">
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    <FaFlask className="card-icon" />
                  </div>
                  <h3>Biópsia Embrionária</h3>
                </div>
                <div className="card-content">
                  <p className="card-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <p className="card-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button className="card-button">Saiba mais</button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="depoimentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="section-title">Carinho</h2>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="section-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </ScrollAnimation>

          <div className="depoimentos-grid">
            <ScrollAnimation direction="left" delay={0.1}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="depoimento-author">S. R.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="depoimento-author">A. C.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="depoimento-author">M. N.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <h2 className="section-title">Experiência</h2>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <p className="section-intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </ScrollAnimation>

          <div className="curriculo-section">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="curriculo-main">
                <h3 className="curriculo-name">DR. Beatriz Pyrich</h3>
                <p className="curriculo-role">Lorem ipsum dolor sit amet</p>
                <p className="curriculo-subrole">Lorem ipsum dolor sit amet</p>
                <p className="curriculo-since">Lorem ipsum dolor sit amet</p>
                <p className="curriculo-specialty">Lorem ipsum dolor sit amet</p>
                <p className="curriculo-crm">CRM-XX 00.000</p>
                <p className="curriculo-graduation">Lorem ipsum dolor sit amet (2008)</p>
              </div>
            </ScrollAnimation>

            <div className="curriculo-details">
              <ScrollAnimation direction="left" delay={0.3}>
                <div className="detail-section">
                  <h4 className="detail-title">especializações</h4>
                  <ul className="detail-list">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet (2019)</li>
                    <li>Sed do eiusmod tempor</li>
                    <li>Incididunt ut labore (2020)</li>
                    <li>Ut enim ad minim veniam</li>
                    <li>Quis nostrud exercitation (2023)</li>
                    <li>Duis aute irure dolor</li>
                    <li>Lorem ipsum dolor sit amet (2023)</li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="right" delay={0.4}>
                <div className="detail-section">
                  <h4 className="detail-title">área de atuação</h4>
                  <ul className="detail-list">
                    <li>Lorem ipsum dolor</li>
                    <li>Sit amet consectetur</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="footer">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="footer-content">
              <div className="footer-info">
                <h3>Dr. Beatriz Pyrich</h3>
                <p className="footer-specialty">Lorem ipsum dolor sit amet</p>
                <p className="footer-crm">CRM-XX 00.000 | RQE 00000</p>
              </div>
              
              <div className="footer-locations">
                <div className="footer-location">
                  <p className="location-title">Lorem ipsum dolor sit amet</p>
                  <p className="location-name">Lorem ipsum dolor</p>
                  <p className="location-address">Rua 000 - Cidade/UF</p>
                </div>
                
                <div className="footer-location">
                  <p className="location-name">Lorem ipsum dolor</p>
                  <p className="location-address">Rua 000 - Cidade/UF</p>
                </div>
                
                <div className="footer-contact">
                  <p className="footer-phone">(00) 00000-0000</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="footer-bottom">
            <p>2025 | Syntexa Code - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Modelo4

