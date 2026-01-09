import React, { useState, useMemo, useCallback } from 'react'
import './Modelo2.css'
import {
  Stethoscope,
  Snowflake,
  Syringe,
  Sprout,
  UsersRound,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ScrollAnimation from '../../components/ScrollAnimation'

import beatrizImage from '../../public/ee8b3e9d-5a03-453d-8e6d-7dfde1208d02_large.jpg'

// Componentes de ícone memoizados para evitar recriação
const IconStethoscope = React.memo(() => <Stethoscope strokeWidth={1.5} />)
const IconSnowflake = React.memo(() => <Snowflake strokeWidth={1.5} />)
const IconSyringe = React.memo(() => <Syringe strokeWidth={1.5} />)
const IconSprout = React.memo(() => <Sprout strokeWidth={1.5} />)
const IconUsersRound = React.memo(() => <UsersRound strokeWidth={1.5} />)

IconStethoscope.displayName = 'IconStethoscope'
IconSnowflake.displayName = 'IconSnowflake'
IconSyringe.displayName = 'IconSyringe'
IconSprout.displayName = 'IconSprout'
IconUsersRound.displayName = 'IconUsersRound'

const Modelo2 = () => {
  const [activeTreatment, setActiveTreatment] = useState(0)

  // Memoização do array de tratamentos para evitar recriação a cada render
  const tratamentos = useMemo(
    () => [
      {
        icon: <IconStethoscope />,
        title: 'Avaliação da fertilidade feminina e masculina',
        description:
          'Fornecemos informações importantes como preço, valor e duração dos serviços.',
        details:
          'Fornecemos informações importantes como preço, valor e duração dos serviços para que você possa tomar decisões informadas sobre sua saúde reprodutiva.',
      },
      {
        icon: <IconSnowflake />,
        title: 'Congelamento de óvulos',
        description:
          'Estratégia eficaz para mulheres e casais planejarem maternidade e paternidade com segurança.',
        details:
          'O congelamento de óvulos é uma estratégia eficaz para mulheres e casais planejarem sua maternidade e paternidade com segurança, preservando a fertilidade para o futuro.',
      },
      {
        icon: <IconSyringe />,
        title: 'Tratamentos de Reprodução Assistida',
        description:
          'Técnicas como indução da ovulação, inseminação intrauterina (IIU) e fertilização in vitro (FIV).',
        details:
          'Oferecemos uma gama completa de tratamentos de reprodução assistida, incluindo técnicas como indução da ovulação, inseminação intrauterina (IIU) e fertilização in vitro (FIV), sempre com acompanhamento personalizado e cuidado especializado.',
      },
      {
        icon: <IconSprout />,
        title: 'Jornada Reprodutiva',
        description:
          'Oferecemos não apenas tratamentos, mas também acolhimento, escuta e suporte para os desafios emocionais da infertilidade.',
        details:
          'Entendemos que a jornada reprodutiva vai além dos tratamentos. Oferecemos acolhimento, escuta ativa e suporte emocional para enfrentar os desafios da infertilidade, cuidando de você de forma integral.',
      },
      {
        icon: <IconUsersRound />,
        title: 'Reprodução Assistida em Casais Homoafetivos',
        description:
          'Suporte especializado para casais homoafetivos, incluindo IIU, FIV e técnica ROPA para casais femininos compartilharem a gestação.',
        details:
          'Oferecemos suporte especializado e acolhedor para casais homoafetivos, com técnicas como inseminação intrauterina (IIU), fertilização in vitro (FIV) e a técnica ROPA, que permite que casais femininos compartilhem a gestação de forma única e especial.',
      },
    ],
    [],
  )

  // Handler memoizado para evitar recriação
  const handleTreatmentChange = useCallback((index) => {
    setActiveTreatment(index)
  }, [])

  // Partículas memoizadas para evitar recriação
  const particles = useMemo(
    () =>
      [...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 8.33) % 100}%`,
            top: `${(i * 7.69) % 100}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      )),
    [],
  )

  return (
    <div className="modelo2">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">Dr. Beatriz Pyrich</div>
          <nav className="nav" aria-label="Navegação principal">
            <a href="#home" aria-label="Ir para seção inicial">
              Home
            </a>
            <a href="#tratamentos" aria-label="Ver áreas de atuação">
              Areas de Atuação
            </a>
            <a href="#depoimentos" aria-label="Ver depoimentos de pacientes">
              Depoimentos
            </a>
            <a href="#sobre" aria-label="Experiência da Dra. Beatriz Pyrich">
              Experiência
            </a>
            <a href="#contato" aria-label="Entre em contato">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-particles" aria-hidden="true">
            {particles}
          </div>
        </div>
        <div className="container">
          <div className="hero-grid">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="hero-content">
                <h1 className="hero-title">
                  Cuidando da sua saude reprodutiva com ciencia e acolhimento
                </h1>
                <p className="hero-subtitle">
                  Com <strong>excelência técnica</strong>,{' '}
                  <strong>humanização</strong> e{' '}
                  <strong>cuidado integral</strong>, acompanhamos sua jornada
                  reprodutiva com dedicação e empatia.
                </p>
                <div className="hero-buttons">
                  <motion.a
                    href="https://www.doctoralia.com.br/beatriz-pyrich-cavalheiro/ginecologista/curitiba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button primary"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span className="button-text">Agende uma consulta</span>
                    <span className="button-shimmer"></span>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/554184319896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span className="button-text">Entre em contato</span>
                    <span className="button-shimmer"></span>
                  </motion.a>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="hero-image">
                <motion.div
                  className="hero-image-wrapper"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{
                    opacity: { duration: 0.8, delay: 0.5 },
                    scale: { type: 'spring', stiffness: 300, damping: 20 },
                    y: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <img
                    src={beatrizImage}
                    alt="Dra. Beatriz Pyrich Cavalheiro - Ginecologista e Obstetra"
                    className="hero-img"
                    width={500}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                  <motion.div
                    className="hero-image-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div
                    className="hero-image-placeholder"
                    style={{ display: 'none' }}
                  >
                    <div className="placeholder-content">
                      <p>Imagem da Dra. Beatriz Pyrich</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Tratamentos Section */}
      <section id="tratamentos" className="tratamentos">
        <div className="container">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="section-header">
              <span className="section-label">Nossos Tratamentos</span>
              <h2 className="section-title">Areas de Atuação</h2>
              <p className="section-intro">
                Especializada em ginecologia e reprodução humana, oferecemos
                atendimento personalizado para cuidar da sua saúde reprodutiva,
                com foco em tratamentos de fertilidade e bem-estar ginecológico.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <div className="tratamentos-tabs">
              {tratamentos.map((tratamento, index) => (
                <button
                  key={index}
                  className={`tab-button ${
                    activeTreatment === index ? 'active' : ''
                  }`}
                  onClick={() => handleTreatmentChange(index)}
                  aria-label={`Ver tratamento: ${tratamento.title}`}
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
                <p className="detail-description">
                  {tratamentos[activeTreatment].description}
                </p>
                <p className="detail-full">
                  {tratamentos[activeTreatment].details}
                </p>
                <button className="detail-button">Saiba mais</button>
              </div>
              <div className="detail-visual">
                <div className="visual-card">
                  <div className="visual-icon">
                    {tratamentos[activeTreatment].icon}
                  </div>
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
              <span className="section-label">
                O que dizem nossos pacientes
              </span>
              <h2 className="section-title">Depoimentos</h2>
              <p className="section-intro">
                Atendo mulheres e casais que buscam investigação e tratamento da
                infertilidade, oferecendo acompanhamento individualizado e
                cuidado fundamentado nas melhores evidências científicas. Meu
                propósito é oferecer uma consulta precisa, acolhedora e guiada
                pela ciência.
              </p>
            </div>
          </ScrollAnimation>

          <div className="depoimentos-grid">
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Maravilhosa! Explicou tudo que eu precisava e foi extremamente
                  delicada no exame.
                </p>
                <p className="depoimento-author">
                  <span style={{ color: '#FFB800', marginRight: '8px' }}>
                    ★★★★★
                  </span>
                  Mariana
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.1}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Excelente médica...me senti acolhida...e fui bem esclarecida
                  nas dúvidas que levei...e sai com os exames que necessito na
                  rotina..
                </p>
                <p className="depoimento-author">
                  <span style={{ color: '#FFB800', marginRight: '8px' }}>
                    ★★★★★
                  </span>
                  Celia Regina
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="depoimento-card">
                <p className="depoimento-text">
                  Profissional excepcional! A Dra. Beatriz combina conhecimento
                  A Dra é maravilhosa...atenciosa...ética tirou todas as minhas
                  dúvidas ...me orientou.. fiquei muito aliviada e satisfeita
                  com a consulta
                </p>
                <p className="depoimento-author">
                  <span style={{ color: '#FFB800', marginRight: '8px' }}>
                    ★★★★★
                  </span>
                  Rosana sabino
                </p>
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
                    <p>
                      Sou médica ginecologista formada pelo Hospital de Clínicas
                      da UFPR. Minha atuação abrange desde o cuidado
                      ginecológico geral até o acompanhamento em reprodução
                      assistida, sempre valorizando a diversidade e todos os
                      projetos familiares.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <div className="sobre-content">
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="section-title">
                  Dra. Beatriz Pyrich Cavalheiro
                </h2>
              </ScrollAnimation>
              <div className="qualificacoes-list">
                <ScrollAnimation direction="left" delay={0.2}>
                  <div className="qualificacao-card">
                    <h4>Formação Acadêmica</h4>
                    <p className="since">
                      <></>Graduação em Medicina - Faculdades Pequeno Príncipe
                    </p>
                    <p className="since">
                      Residência Médica em Ginecologia e Obstetrícia - Hospital
                      de Clínicas (UFPR)
                    </p>
                    <p className="since">
                      Pós-graduação em Infertilidade e Reprodução Assistida -
                      Hospital Sírio Libanês
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.3}>
                  <div className="qualificacao-card">
                    <h4>Registro Profissional</h4>
                    <p>CRM-PR 47192</p>
                    <p>RQE 36055</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="left" delay={0.4}>
                  <div className="qualificacao-card">
                    <h4>Atuação Profissional</h4>
                    <p>Triamare Reprodução Humana | Park Shopping Barigui</p>
                    <p>R. Prof. Pedro Viriato Parigot de Souza, 600, Piso L3</p>
                    <p>Mossunguê, Curitiba/PR - CEP 81200-100</p>
                    <p className="since">Teleconsulta disponível</p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation direction="right" delay={0.5}>
                  <div className="qualificacao-card">
                    <h4>Especializações e Áreas de Atuação</h4>
                    <ul>
                      <li>Infertilidade e Infertilidade Feminina</li>
                      <li>Reprodução Humana Assistida</li>
                      <li>Abortamento de Repetição</li>
                      <li>Síndrome do Ovário Policístico (SOP)</li>
                      <li>Distúrbios Menstruais</li>
                      <li>Endometriose</li>
                      <li>Menopausa e Menopausa Precoce</li>
                      <li>Consulta Pré-concepcional</li>
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
              <h3>Dra. Beatriz Pyrich Cavalheiro</h3>

              <p className="footer-credentials">CRM-PR 47192 | RQE 36055</p>
            </div>

            <div className="footer-contact">
              <motion.a
                href="https://wa.me/554184319896"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="whatsapp-icon">
                  <FaWhatsapp />
                </span>
                Entre em contato
              </motion.a>
              <p className="footer-note">Agende sua consulta via WhatsApp</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Copyright © 2025 Jose Pyrich. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Modelo2
