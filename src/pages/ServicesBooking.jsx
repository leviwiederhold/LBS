import BookingForm from '../components/BookingForm';

export default function ServicesBooking() {
  return (
    <main>
      <section className="page-shell centered soft-panel">
      <div className="section-heading">
        <p className="eyebrow">Book Online</p>
        <h1>The fastest way to glow is just a click away.</h1>
        <p>Select a service, complete or update your intake form, choose your time, and confirm your deposit.</p>
      </div>
      </section>
      <section className="page-section">
        <div className="service-bento">
          <article className="bento-card bento-wide">
            <div className="bento-row">
              <div>
                <p className="eyebrow">Skincare</p>
                <h2>Facials</h2>
                <ul className="stitch-list">
                  <li><h4>Signature Radiance Facial</h4><p>A bespoke treatment focused on hydration and cellular renewal.</p></li>
                  <li><h4>Luminous Oxygen Therapy</h4><p>Revitalize tired skin with a bright, red-carpet glow.</p></li>
                </ul>
              </div>
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" alt="Facial treatment" />
            </div>
          </article>
          <article className="bento-card bento-small blush">
            <p className="eyebrow">Precision</p>
            <h2>Permanent Makeup</h2>
            <p>Powder brows, microblading artistry, and lip blush designed for effortless mornings.</p>
          </article>
          <article className="bento-card bento-small rose">
            <p className="eyebrow">Smoothness</p>
            <h2>Waxing</h2>
            <p>Gentle shaping and hair removal for a clean, smooth canvas.</p>
          </article>
          <article className="bento-card bento-wide">
            <div className="bento-row">
              <div>
                <p className="eyebrow">Celebration</p>
                <h2>Formal & Wedding</h2>
                <p><em>Wedding Makeup Travel Available</em> — polished, lasting makeup for the moments that matter.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80" alt="Formal makeup palette" />
            </div>
          </article>
        </div>
      </section>
      <section className="page-section">
      <BookingForm />
      </section>
      <section className="page-section dark-cta">
        <h2>Ready for your transformation?</h2>
        <p>Avoid the back-and-forth of messaging. Secure your preferred time immediately.</p>
      </section>
    </main>
  );
}
