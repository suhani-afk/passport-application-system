import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/',       label: 'Home'         },
  { to: '/apply',  label: 'Apply'        },
  { to: '/view',   label: 'Applications' },
  { to: '/update', label: 'Update'       },
  { to: '/status', label: 'Track Status' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav>
      <Link to="/" className="nav-brand">
        <div className="nav-brand-icon">🛂</div>
        <span className="nav-brand-text">PassportGov</span>
      </Link>
      <div className="nav-links">
        {LINKS.map(l => (
          <Link key={l.to} to={l.to} className={pathname === l.to ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}