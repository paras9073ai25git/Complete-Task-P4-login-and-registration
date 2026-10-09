function Articles() {

  const articles = [
    {
      id: 1,
      category: "AI & MACHINE LEARNING",
      title: "Exploring Artificial Intelligence",
      description: "Artificial Intelligence and Machine Learning are changing the way technology solves real-world problems. I am exploring these technologies as part of my engineering journey."
    },
    {
      id: 2,
      category: "NETWORKING",
      title: "Understanding Computer Networks",
      description: "Networking helps devices communicate and share information. Through my university projects, I have explored concepts such as MQTT, ICMP and network communication."
    },
    {
      id: 3,
      category: "CREATIVITY & DESIGN",
      title: "Where Technology Meets Creativity",
      description: "I enjoy combining technology with creativity and design. My interest in art, designing and entrepreneurship helps me explore ideas from a different perspective."
    }
  ]

  return (
    <section className="articles">

      <div className="section-heading">
        <span className="section-label">ARTICLES</span>

        <h2>
          My latest <span>articles.</span>
        </h2>
      </div>

      <div className="articles-container">

        {articles.map((article) => (
          <article className="article-card" key={article.id}>

            <span className="article-category">
              {article.category}
            </span>

            <h3>
              {article.title}
            </h3>

            <p>
              {article.description}
            </p>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Articles