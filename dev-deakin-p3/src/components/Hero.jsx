function Hero() {
  return (
    <section className="hero">

      <div className="hero-background"></div>

      <div className="hero-content">

        <span className="hero-tag">
          Welcome to my portfolio
        </span>

        <h1>
          Hey, I'm <span>Paras</span>
        </h1>

        <p className="hero-subtitle">
          AI & Machine Learning Student
        </p>

        <p className="hero-description">
          I build technology-driven ideas while exploring
          creativity, design and entrepreneurship.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="primary-button">
            Explore My Work →
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>

      </div>

      <div className="scroll-down">
        ↓ Scroll to explore
      </div>

    </section>
  )
}

export default Hero