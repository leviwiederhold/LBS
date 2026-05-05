import { Link, NavLink } from 'react-router-dom';
import { CalendarDays, Menu, Phone, UserRound } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Care', '/care'],
  ['Gift Cards', '/gift-card'],
  ['Membership', '/membership'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="site-header">
      <div className="top-ribbon">
        <span>Fayetteville, OH</span>
        <a href="tel:+15135550124"><Phone size={14} /> (513) 555-0124</a>
      </div>
      <div className="nav-shell">
        <Link className="brand" to="/">Lillyan's Beauty Studio</Link>
        <button className="icon-button mobile-only" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          <Menu size={22} />
        </button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <NavLink to={user ? '/portal' : '/login'} onClick={() => setOpen(false)}>
            <UserRound size={16} /> Portal
          </NavLink>
        </nav>
        <Link className="button primary nav-cta" to="/services">
          <CalendarDays size={17} /> Book Online
        </Link>
      </div>
    </header>
  );
}
