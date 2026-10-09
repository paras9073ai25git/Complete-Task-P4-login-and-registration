import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <section id="work" className="work section">

      <div className="section-heading">

        <span className="section-label">
          MY WORK
        </span>

        <h2>
          Things I've <span>built.</span>
        </h2>

        <p>
          A combination of university projects,
          programming experiments and creative ventures.
        </p>

      </div>

      <div className="project-container">
        <ProjectCard number="01" />
       <ProjectCard number="02" />
      <ProjectCard number="03" />
        

      </div>

    </section>
  )
}

export default Projects