import React, { useState } from 'react'
import './Modelo2.css'
import { FaSnowflake, FaSyringe, FaMicroscope, FaFlask, FaWhatsapp } from 'react-icons/fa'
import ScrollAnimation from '../../components/ScrollAnimation'

const Modelo2 = () => {
  const [activeTreatment, setActiveTreatment] = useState(0)

  const tratamentos = [
    {
      icon: <FaSnowflake />,
      title: 'Criopreservação',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: <FaSyringe />,
      title: 'Inseminação Intra-Uterina',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: <FaMicroscope />,
      title: 'ICSI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: <FaFlask />,
      title: 'Biópsia Embrionária',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  return (
    <div className="modelo2">
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
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="hero-content">
              <ScrollAnimation direction="up" delay={0.3}>
                <div className="hero-badge">Lorem ipsum dolor sit amet</div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <h1 className="hero-title">
                  Lorem ipsum dolor sit<br />
                  <span className="highlight">amet consectetur</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.5}>
                <p className="hero-subtitle">
                  <strong>Lorem</strong>, <strong>ipsum</strong> e <strong>dolor</strong> sit amet, consectetur adipiscing elit.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6}>
                <div className="hero-buttons">
                  <button className="cta-button primary">Agende uma consulta</button>
                  <button className="cta-button secondary">Saiba mais</button>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="tratamentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="section-header">
              <ScrollAnimation direction="up" delay={0.2}>
                <span className="section-label">Nossos Tratamentos</span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <h2 className="section-title">Dedicação</h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <p className="section-intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="tratamentos-tabs">
              {tratamentos.map((tratamento, index) => (
                <button
                  key={index}
                  className={`tab-button ${activeTreatment === index ? 'active' : ''}`}
                  onClick={() => setActiveTreatment(index)}
                >
                  <span className="tab-icon">{tratamento.icon}</span>
                  <span className="tab-title">{tratamento.title}</span>
                </button>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <div className="tratamento-detail">
              <div className="detail-content">
                <h3>{tratamentos[activeTreatment].title}</h3>
                <p className="detail-description">{tratamentos[activeTreatment].description}</p>
                <p className="detail-full">{tratamentos[activeTreatment].details}</p>
                <button className="detail-button">Saiba mais</button>
              </div>
              <div className="detail-visual">
                <div className="visual-card">
                  <div className="visual-icon">{tratamentos[activeTreatment].icon}</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="depoimentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="section-header">
              <ScrollAnimation direction="up" delay={0.2}>
                <span className="section-label">O que dizem nossos pacientes</span>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <h2 className="section-title">Carinho</h2>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.4}>
                <p className="section-intro">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          
          <div className="depoimentos-grid">
            <ScrollAnimation direction="left" delay={0.1}>
              <div className="depoimento-card featured">
                <div className="card-header">
                  <div className="avatar">SR</div>
                  <div className="rating">★★★★★</div>
                </div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="depoimento-author">S. R.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="depoimento-card">
                <div className="card-header">
                  <div className="avatar">AC</div>
                  <div className="rating">★★★★★</div>
                </div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p className="depoimento-author">A. C.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="depoimento-card">
                <div className="card-header">
                  <div className="avatar">MN</div>
                  <div className="rating">★★★★★</div>
                </div>
                <p className="depoimento-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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
          <div className="sobre-grid">
            <ScrollAnimation direction="right" delay={0.1}>
              <div className="sobre-visual">
                <div className="visual-box">
                  <div className="visual-content">
                    <h3>Experiência</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <div className="sobre-content">
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="section-title">DR. Beatriz Pyrich</h2>
              </ScrollAnimation>
              <div className="qualificacoes-list">
                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="qualificacao-card">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <p className="since">Lorem ipsum dolor sit amet</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.3}>
                  <div className="qualificacao-card">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>CRM-XX 00.000</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.4}>
                  <div className="qualificacao-card">
                    <h4>Lorem ipsum dolor sit amet</h4>   
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.5}>
                  <div className="qualificacao-card">
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
            <div className="footer-main">
              <h3>Dr. Beatriz Pyrich</h3>
              <p className="footer-subtitle">Lorem ipsum dolor sit amet</p>
              <p className="footer-credentials">CRM-XX 00.000 | RQE 00000</p>
            </div>
            
            <div className="footer-locations">
              <div className="location-card">
                <h4>Unidade Lorem Ipsum</h4>
                <p>Rua 000 - Cidade/UF</p>
              </div>
              <div className="location-card">
                <h4>Unidade Dolor Sit</h4>
                <p>Rua 000 - Cidade/UF</p>
              </div>
            </div>

            <div className="footer-contact">
              <a href="#" className="whatsapp-button">
                <span className="whatsapp-icon"><FaWhatsapp /></span>
                (00) 00000-0000
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

export default Modelo2


