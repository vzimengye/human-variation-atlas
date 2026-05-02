import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Traits' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/sources', label: 'Sources' },
];

function NavBar() {
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        <img className="brand-mark" src="/pictures-icon/atlas-icon.png" alt="" aria-hidden="true" />
        <span>
          Human Variation Atlas
          <small>Evidence. Context. Humanity.</small>
        </span>
      </NavLink>
      <nav className="nav-links">
        {links.map((link) => (
          <NavLink
            key={`${link.to}-${link.label}`}
            to={link.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
