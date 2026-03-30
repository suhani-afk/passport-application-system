import { useEffect, useState } from 'react';
import { getAll, remove } from '../services/api';
import { useNavigate } from 'react-router-dom';

function badgeClass(status) {
  const map = {
    'Pending':            'badge badge-pending',
    'Processing':         'badge badge-processing',
    'Verified':           'badge badge-verified',
    'Passport Generated': 'badge badge-generated',
    'Rejected':           'badge badge-rejected',
  };
  return map[status] || 'badge badge-pending';
}

export default function View() {
  const [data, setData]       = useState([]);
  const [search, setSearch]   = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    setLoading(true);
    try { const res = await getAll(); setData(res.data); }
    finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Delete application #${id}?`)) return;
    await remove(id);
    fetchData();
  };

  const filtered = data.filter(d =>
    d.application_id.toString().includes(search) ||
    d.applicant_id.toString().includes(search)
  );

  return (
    <div className="page">
      <div className="container-lg">
        <div className="page-header">
          <h2>All Applications</h2>
          <div className="divider" />
          <p>{data.length} total record{data.length !== 1 ? 's' : ''} found</p>
        </div>

        <div className="card" style={{ padding: '24px 28px' }}>
          <div className="toolbar">
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                placeholder="Search by Application ID or Applicant ID…"
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/apply')}>
              + New
            </button>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>App ID</th>
                  <th>Applicant ID</th>
                  <th>Documents</th>
                  <th>Police Verification</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center" style={{ padding: 40, color: 'var(--text-muted)' }}>
                      Loading…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="empty-state">
                        <div className="es-icon">📭</div>
                        <p>No applications found.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map(d => (
                    <tr key={d.application_id}>
                      <td><strong>#{d.application_id}</strong></td>
                      <td>{d.applicant_id}</td>
                      <td>
                        <span style={{
                          color: d.documents_submitted ? 'var(--success)' : 'var(--text-muted)',
                          fontWeight: 600, fontSize: '0.85rem'
                        }}>
                          {d.documents_submitted ? '✓ Yes' : '✗ No'}
                        </span>
                      </td>
                      <td>{d.police_verification}</td>
                      <td><span className={badgeClass(d.status)}>{d.status}</span></td>
                      <td>
                        <div className="td-actions">
                          <button
                            className="btn btn-outline btn-sm"
                            onClick={() => navigate(`/update?id=${d.application_id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-ghost-danger btn-sm"
                            onClick={() => handleDelete(d.application_id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}