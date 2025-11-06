import React from 'react'
import './Modelo3.css'
import { FaSnowflake, FaSyringe, FaMicroscope, FaFlask, FaWhatsapp } from 'react-icons/fa'
import ScrollAnimation from '../../components/ScrollAnimation'

const Modelo3 = () => {
  return (
    <div className="modelo3">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-symbol">+</span>
            <span className="logo-text">Dr. Beatriz Pyrich</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato" className="nav-cta">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="hero-label">Lorem ipsum dolor sit amet</div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <h1 className="hero-title">
                Lorem ipsum dolor sit<br />
                <span className="title-accent">amet consectetur</span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="hero-description">
                <span className="highlight-word">Lorem</span>, <span className="highlight-word">ipsum</span> e <span className="highlight-word">dolor</span> sit amet, consectetur adipiscing elit.
              </p>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.5}>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Anos de experiência</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Famílias atendidas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">90%</div>
                  <div className="stat-label">Taxa de sucesso</div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <button className="hero-cta">Agende sua consulta</button>
            </ScrollAnimation>
          </div>
          <div className="hero-right">
            <div className="hero-visual">
              <div className="visual-circle circle-1"></div>
              <div className="visual-circle circle-2"></div>
              <div className="visual-circle circle-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="tratamentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="section-header-alt">
              <div className="section-number">01</div>
              <div>
                <span className="section-label">Nossos Serviços</span>
                <h2 className="section-title">Tratamentos</h2>
                <p className="section-intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="tratamentos-list">
            <ScrollAnimation direction="right" delay={0.1}>
              <div className="tratamento-item">
                <div className="item-number">01</div>
                <div className="item-content">
                  <div className="item-icon"><FaSnowflake /></div>
                  <h3>Criopreservação</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <a href="#" className="item-link">Saiba mais →</a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.2}>
              <div className="tratamento-item reverse">
                <div className="item-number">02</div>
                <div className="item-content">
                  <div className="item-icon"><FaSyringe /></div>
                  <h3>Inseminação Intra-Uterina</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <a href="#" className="item-link">Saiba mais →</a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="tratamento-item">
                <div className="item-number">03</div>
                <div className="item-content">
                  <div className="item-icon"><FaMicroscope /></div>
                  <h3>ICSI</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <a href="#" className="item-link">Saiba mais →</a>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.4}>
              <div className="tratamento-item reverse">
                <div className="item-number">04</div>
                <div className="item-content">
                  <div className="item-icon"><FaFlask /></div>
                  <h3>Biópsia Embrionária</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <a href="#" className="item-link">Saiba mais →</a>
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
            <div className="section-header-alt">
              <div className="section-number">02</div>
              <div>
                <span className="section-label">Histórias de Sucesso</span>
                <h2 className="section-title">Depoimentos</h2>
                <p className="section-intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="depoimentos-grid">
            <ScrollAnimation direction="left" delay={0.1}>
              <div className="depoimento-card card-1">
                <div className="card-quote">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="depoimento-footer">
                  <div className="depoimento-author">A. C.</div>
                  <div className="depoimento-rating">★★★★★</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="depoimento-card card-2">
                <div className="card-quote">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="depoimento-footer">
                  <div className="depoimento-author">M. N.</div>
                  <div className="depoimento-rating">★★★★★</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="depoimento-card card-3">
                <div className="card-quote">"</div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="depoimento-footer">
                  <div className="depoimento-author">S. R.</div>
                  <div className="depoimento-rating">★★★★★</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="sobre">
        <div className="sobre-container">
          <ScrollAnimation direction="right" delay={0.1}>
            <div className="sobre-left">
              <div className="section-number-large">03</div>
              <h2 className="section-title-large">Experiência</h2>
              <p className="sobre-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="left" delay={0.2}>
            <div className="sobre-right">
              <div className="curriculo-card">
                <h3 className="curriculo-name">DR. Beatriz Pyrich</h3>
                <p className="curriculo-role">Médica em reprodução humana</p>
              
              <div className="curriculo-section">
                <h4>Formação</h4>
                <div className="curriculo-item">
                  <span className="item-year">2015</span>
                  <div>
                    <strong>Lorem ipsum dolor sit amet</strong>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="curriculo-item">
                  <span className="item-year">2020</span>
                  <div>
                    <strong>Lorem ipsum dolor sit amet</strong>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="curriculo-item">
                  <span className="item-year">2023</span>
                  <div>
                    <strong>Lorem ipsum dolor sit amet</strong>
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>

              <div className="curriculo-section">
                <h4>Especializações</h4>
                <ul className="curriculo-list">
                  <li>Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet - 2019</li>
                  <li>Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet - 2020</li>
                  <li>Lorem ipsum dolor sit amet - Lorem ipsum dolor sit amet - 2023</li>
                </ul>
              </div>

              <div className="curriculo-credentials">
                <p><strong>CRM-XX 00.000</strong></p>
                <p>RQE 00000</p>
              </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contato/Footer */}
      <footer id="contato" className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-left">
              <h3>Dr. Beatriz Pyrich</h3>
              <p className="footer-role">Lorem ipsum dolor sit amet</p>
              <p className="footer-crm">CRM-XX 00.000 | RQE 00000</p>
            </div>
            
            <div className="footer-center">
              <h4>Clínicas</h4>
              <div className="footer-locations">
                <p><strong>Unidade Lorem Ipsum</strong></p>
                <p>Rua 000 - Cidade/UF</p>
                <p className="footer-spacing"><strong>Unidade Dolor Sit</strong></p>
                <p>Rua 000 - Cidade/UF</p>
              </div>
            </div>

            <div className="footer-right">
              <h4>Contato</h4>
              <a href="#" className="whatsapp-btn">
                <span className="whatsapp-icon"><FaWhatsapp /></span>
                <span>(00) 00000-0000</span>
              </a>
              <p className="footer-note">Entre em contato via WhatsApp</p>
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

export default Modelo3


