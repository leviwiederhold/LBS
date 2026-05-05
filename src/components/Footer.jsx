import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Lillyan's Beauty Studio</h2>
        <p>Elevating natural beauty through precision artistry and mindful skincare in a boutique sanctuary.</p>
      </div>
      <div className="footer-links">
        <h4>Navigation</h4>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/care">Care Guide</Link>
        <Link to="/gift-card">Gift Cards</Link>
      </div>
      <div className="footer-links">
        <h4>Membership</h4>
        <Link to="/membership">Membership</Link>
        <Link to="/portal">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="footer-links">
        <h4>Contact</h4>
        <span>152 W Pike St, Suite 100</span>
        <span>hello@lillyansbeauty.com</span>
        <Link to="/gallery">Gallery</Link>
      </div>
    </footer>
  );
}
