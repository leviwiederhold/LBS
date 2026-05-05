export default function About() {
  return (
    <main>
      <section className="page-shell two-column">
        <div>
          <p className="eyebrow">The Artist Behind the Studio</p>
          <h1>Hi! I'm Lilly</h1>
          <h3><em>Licensed Esthetician and Certified Permanent/Formal Makeup Artist</em></h3>
          <p>Lillyan's Beauty Studio blends professional esthetics with a soft, calming client experience. Every treatment is personalized to your skin's unique story and your natural beauty goals.</p>
          <div className="card-grid two">
            <article className="card"><h3>Precision Work</h3><p>Permanent makeup with a focus on natural, long-lasting results.</p></article>
            <article className="card"><h3>Skincare Expert</h3><p>Clinical results with a spa-like, comfortable feel.</p></article>
          </div>
        </div>
        <img className="feature-image" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80" alt="Serene beauty studio interior" />
      </section>
      <section className="quote-band">
        <h2>Lillyan's Beauty Studio strives to enrich, enhance, and encourage individuals through their beauty.</h2>
        <p className="eyebrow">Our Core Philosophy</p>
      </section>
      <section className="page-section">
        <div className="card-grid two">
          <article className="card"><h2>A Curated Experience</h2><p>From consultation to final reveal, comfort and confidence guide every detail.</p></article>
          <article className="card blush-panel"><h2>Certified Excellence</h2><p>High standards of safety, hygiene, and artistry in permanent cosmetics.</p></article>
        </div>
      </section>
      <section className="page-section soft-panel centered">
        <h2>Ready to glow?</h2>
        <p>Experience the perfect blend of luxury and expertise.</p>
        <a className="button primary" href="/services">Book Online</a>
      </section>
    </main>
  );
}
