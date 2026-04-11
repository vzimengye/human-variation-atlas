import { NavLink } from 'react-router-dom';

const links = [
  { to: '/explore', label: 'Explore' },
  { to: '/explore', label: 'Traits' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/sources', label: 'Sources' },
];

function NavBar() {
  return (
    <header className="topbar">
      <NavLink to="/" className="brand">
        Human Variation Atlas
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
