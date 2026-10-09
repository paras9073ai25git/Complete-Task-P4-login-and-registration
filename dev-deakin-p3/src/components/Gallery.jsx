function Gallery() {
  return (
    <section id="gallery" className="gallery section">

      <div className="section-heading">
        <span className="section-label">
          GALLERY
        </span>

        <h2>
          Creative <span>moments.</span>
        </h2>

        <p>
          A collection of my creative work, designs and memorable moments.
        </p>
      </div>

      <div className="gallery-grid">

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1000&q=80"
            alt="Creative artwork"
          />
        </div>

        <div className="gallery-item large">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80"
            alt="Painting and art"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1000&q=80"
            alt="Creative design"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1000&q=80"
            alt="Artwork"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=80"
            alt="Art gallery"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1000&q=80"
            alt="Creative painting"
          />
        </div>

      </div>

    </section>
  )
}

export default Gallery