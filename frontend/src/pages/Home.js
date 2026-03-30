import { Link } from 'react-router-dom';

const FEATURES = [
  { icon: '📋', title: 'Apply Online',    desc: 'Submit your passport application quickly.',  to: '/apply'  },
  { icon: '📁', title: 'View Records',    desc: 'Browse and manage all applications.',         to: '/view'   },
  { icon: '✏️',  title: 'Update Details', desc: 'Edit verification or document status.',       to: '/update' },
  { icon: '🔍', title: 'Track Status',    desc: 'Check your application status instantly.',    to: '/status' },
];

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <span className="hero-pill">Official Portal</span>
          <h1>Passport Application<br />Management System</h1>
          <p>Apply, manage, and track passport applications through our secure digital portal.</p>
          <div className="hero-cta">
            <Link to="/apply"  className="btn btn-gold">Apply Now →</Link>
            <Link to="/status" className="btn btn-ghost-light">Track Status</Link>
          </div>
        </div>

        <div className="features">
          {FEATURES.map(f => (
            <Link key={f.to} to={f.to} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}