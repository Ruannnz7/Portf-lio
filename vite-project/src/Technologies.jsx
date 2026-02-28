function Technologies() {
  const techs = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "JS" },
    { name: "Vue.js", icon: "V" },
    { name: "SQL", icon: "🗄️" },
    { name: "HTML", icon: "5" },
    { name: "CSS", icon: "3" },
    { name: "Git", icon: "🔧" },
    { name: "Docker", icon: "🐳" },
    { name: "Node.js", icon: "JS" },
    { name: "React", icon: "⚛️" },
    { name: "AWS", icon: "☁️" },
    { name: "Vite", icon: "⚡" },
  ]

  return (
    <section className="technologies" id="technologies">
      <h2>TECNOLOGIAS</h2>
      <span className="underline"></span>

      <div className="tech-grid">
        {techs.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies