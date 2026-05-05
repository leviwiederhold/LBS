import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, ShieldCheck, Sparkles, WandSparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteData';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Fayetteville, OH · Licensed Esthetician</p>
          <h1>Beauty Services in Fayetteville, OH Designed to Help You Feel Confident</h1>
          <p>Facials, waxing, permanent makeup, and formal makeup by Lilly — Licensed Esthetician and Certified Permanent/Formal Makeup Artist.</p>
          <p className="hero-phone"><a href="tel:+15135550124">(513) 555-0124</a></p>
          <div className="button-row">
            <Link className="button primary" to="/services">Book Online</Link>
            <Link className="button secondary" to="/gallery">View Gallery</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80" alt="Relaxing facial treatment in a bright studio" />
        </div>
      </section>

      <section className="trust-bar">
        <span><ShieldCheck size={18} /> Licensed care</span>
        <span><WandSparkles size={18} /> Permanent makeup certified</span>
        <span><Sparkles size={18} /> Bridal travel available</span>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Choose your glow-up path.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="page-section soft-panel">
        <div className="section-heading">
          <p className="eyebrow">Our Work</p>
          <h2>Real Results, Radiant Clients</h2>
        </div>
        <div className="proof-grid">
          <div className="proof-column">
            <img className="proof-image" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80" alt="Permanent makeup brow result" />
            <blockquote className="testimonial">Lilly is truly an artist. My skin has never looked better after just two sessions.<strong>Sarah J.</strong></blockquote>
          </div>
          <div className="proof-column">
            <blockquote className="testimonial">I chose Lilly for my wedding makeup and it was the best decision. It stayed perfect all night long.<strong>Emily R.</strong></blockquote>
            <img className="proof-image" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80" alt="Soft bridal makeup portrait" />
          </div>
          <div className="proof-column">
            <img className="proof-image" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80" alt="Glowing facial result" />
            <blockquote className="testimonial">The permanent makeup results are so natural. I save time every morning now.<strong>Jessica M.</strong></blockquote>
          </div>
        </div>
      </section>

      <section className="page-section white-panel centered">
        <div className="section-heading">
          <h2>Your Journey to Radiance</h2>
        </div>
        <div className="process-grid">
          {['Choose Service', 'Book Online', 'Arrive & Relax', 'Follow Care'].map((step, index) => (
            <article key={step}>
              <div className="process-icon">{index + 1}</div>
              <h3>{step}</h3>
              <p>{index === 0 ? 'Explore our menu of professional facial and makeup services.' : index === 1 ? 'Select your preferred date and time online.' : index === 2 ? 'Step into the serene studio and settle in.' : 'Receive personalized instructions for lasting results.'}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section soft-panel">
        <div className="split-card">
          <div>
            <p className="eyebrow"><MapPin size={16} /> Location</p>
            <h2>Visit Our Fayetteville Studio</h2>
            <p>By appointment only in a calm, polished studio space designed for comfort and confidence.</p>
            <Link className="button primary" to="/services"><CalendarDays size={17} /> Book Your Appointment</Link>
          </div>
          <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=80" alt="Minimal spa treatment room" />
        </div>
      </section>

      <section className="page-section dark-cta">
        <h2>Ready to Book Your Beauty Appointment?</h2>
        <p>Join our community of confident clients and experience professional, licensed care.</p>
        <div className="button-row centered">
          <Link className="button primary" to="/services">Book Online</Link>
          <Link className="button secondary" to="/gift-card">Buy a Gift Card</Link>
        </div>
      </section>
    </>
  );
}
