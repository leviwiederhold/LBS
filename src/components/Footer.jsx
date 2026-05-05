import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Lillyan's Beauty Studio</h2>
        <p>Licensed esthetician services, permanent makeup, and formal makeup in Fayetteville, Ohio.</p>
        <a className="footer-phone" href="tel:+15135550124">(513) 555-0124</a>
      </div>
      <div className="footer-links">
        <Link to="/services">Book Online</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/care">Pre/Post Care</Link>
        <Link to="/gift-card">Gift Cards</Link>
        <Link to="/portal">Client Portal</Link>
      </div>
    </footer>
  );
}
