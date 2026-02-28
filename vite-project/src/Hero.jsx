import minhaFoto from "./assets/foto.jpg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          Olá, eu sou <span>Ruan Pereira</span>
        </h2>

        <p>
          Desenvolvedor Front-End focado em React, criando aplicações modernas,
          responsivas e performáticas.
        </p>

        <a href="#projects" className="btn">
          Ver Projetos
        </a>

        <div className="hero-image">
          <img src={minhaFoto} alt="Foto de Ruan" />
        </div>
      </div>
    </section>
  )
}

export default Hero