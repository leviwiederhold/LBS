import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, WandSparkles } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteData';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Fayetteville, OH · Licensed Esthetician</p>
          <h1>Beauty services designed to help you feel confident.</h1>
          <p>Facials, waxing, permanent makeup, and formal makeup by Lilly in a calm boutique studio.</p>
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
    </>
  );
}
