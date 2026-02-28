const projects = [
  {
    title: "Lili Doces | Projeto Freelancer",
    description:
      "Aplicação web para apresentação de produtos e conversão de clientes.",
    link: "https://lilidocess.netlify.app/"
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects