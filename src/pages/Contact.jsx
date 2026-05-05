import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main>
      <section className="page-shell two-column">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Let's Start Your <em>Radiance Journey</em></h1>
          <p>Whether you have a treatment question or are ready to schedule your transformation, Lillyan's Beauty Studio is here with calm, personalized guidance.</p>
          <div className="contact-info">
            <div className="contact-item"><span>⌖</span><div><p className="eyebrow">Our Studio</p><p>152 W Pike St<br />Fayetteville, OH 45118</p></div></div>
            <div className="contact-item"><span>✉</span><div><p className="eyebrow">Email Us</p><p>lillyansbeautystudio@gmail.com</p></div></div>
            <div className="contact-item"><span>☎</span><div><p className="eyebrow">Call Anytime</p><p><a className="text-link" href="tel:+15136874317">513-687-4317</a></p></div></div>
          </div>
        </div>
        <img className="feature-image" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80" alt="Luxury studio interior" />
      </section>
      <section className="page-section">
        <div className="two-column">
          <form className="card form-grid">
            <h2>Send a Message</h2>
            <label>Full Name<input placeholder="Your Name" /></label>
            <label>Email Address<input type="email" placeholder="hello@example.com" /></label>
            <label>Service Interest<select><option>Select a Treatment</option><option>Facial</option><option>Permanent Makeup</option><option>Bridal Consultation</option></select></label>
            <label>Your Message<textarea placeholder="How can we help you today?" /></label>
            <Link className="button primary" to="/services">Book Online</Link>
          </form>
          <div className="form-grid">
            <div className="map-card">
              <img src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&w=900&q=80" alt="Soft map-like city streets" />
              <div className="map-badge">Find Us in Fayetteville</div>
            </div>
            <div className="card blush-panel">
              <h3>The Glow Letter</h3>
              <p>Subscribe for seasonal skincare routines and studio updates.</p>
              <div className="gift-row"><input placeholder="Email address" /><button className="button primary">Join</button></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
