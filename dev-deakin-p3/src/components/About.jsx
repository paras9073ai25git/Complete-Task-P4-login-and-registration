function About() {

  return (
    <section id="about" className="about section">

      <div className="about-image">

        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
          alt="Developer working"
        />

        <div className="image-card">
          <strong>AI + Creativity</strong>
          <small>My favourite combination</small>
        </div>

      </div>

      <div className="about-content">

        <span className="section-label">
          ABOUT ME
        </span>

        <h2>
          Technology with a
          <span> creative touch.</span>
        </h2>

        <p>
          I am a engineering student specialising in Artificial
          Intelligence and Machine Learning. I enjoy creating
          technology-based solutions and learning how technology
          can solve real-world problems.
        </p>

        <p>
          Apart from academics, I love web development,
          networking, painting, designing and entrepreneurship.
          I believe the best ideas happen when technology and
          creativity work together.
        </p>

        <div className="skills">

          <span>Python</span>
          <span>C#</span>
          <span>C++</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Networking</span>
          <span>AI & ML</span>
          <span>Design</span>

        </div>

      </div>

    </section>
  )
}

export default About