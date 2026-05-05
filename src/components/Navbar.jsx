import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Care', '/care'],
  ['Members', '/portal'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
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
        </nav>
        <Link className="button primary nav-cta" to="/services">
          Book Online
        </Link>
      </div>
    </header>
  );
}
