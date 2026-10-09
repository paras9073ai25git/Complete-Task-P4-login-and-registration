function ProjectCard({ number }) {

  const projects = {
    "01": {
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      alt: "IoT networking project",
      type: "NETWORKING • IoT",
      title: "MQTT Smart Home",
      description:
        "An IoT-based smart home simulation developed using Cisco Packet Tracer. It demonstrates MQTT communication between smart devices and a network."
    },

    "02": {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      alt: "Python programming",
      type: "PYTHON • NETWORKING",
      title: "Python Network Application",
      description:
        "A Python-based ICMP Ping application created to explore packet communication, response times and network connectivity."
    },

    "03": {
      image:
        "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1000&q=80",
      alt: "Handmade gifts",
      type: "ENTREPRENEURSHIP • DESIGN",
      title: "Rup.Rang",
      description:
        "My handmade gift venture where I create customised gifts, bouquets and artistic items. I enjoy turning simple ideas into meaningful gifts."
    }
  }

  const project = projects[number]

  return (
    <article className="project-card">

      <div className="project-image">

        <img
          src={project.image}
          alt={project.alt}
        />

        <span className="project-number">
          {number}
        </span>

      </div>

      <div className="project-content">

        <span className="project-type">
          {project.type}
        </span>

        <h3>
          {project.title}
        </h3>

        <p>
          {project.description}
        </p>

        <a href="#" className="project-link">
          View Project →
        </a>

      </div>

    </article>
  )
}

export default ProjectCard