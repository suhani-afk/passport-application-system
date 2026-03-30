import { useState } from 'react';
import axios from 'axios';

const STEPS = ['Pending', 'Processing', 'Verified', 'Passport Generated'];

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

export default function Status() {
  const [id, setId]         = useState('');
  const [data, setData]     = useState(null);
  const [error, setError]   = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchStatus = async () => {
    if (!id.trim()) return;
    setLoading(true); setError(false); setData(null);
    try {
      const res = await axios.get(`http://localhost:5000/applications/${id}`);
      setData(res.data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const stepIndex = data ? STEPS.indexOf(data.status) : -1;

  return (
    <div className="page">
      <div className="container-sm">
        <div className="page-header">
          <h2>Track Application</h2>
          <div className="divider" />
          <p>Enter your Application ID to check the current status.</p>
        </div>

        <div className="card">
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              placeholder="Application ID"
              value={id}
              onChange={e => setId(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && fetchStatus()}
              style={{ margin: 0 }}
            />
            <button
              className="btn btn-primary"
              onClick={fetchStatus}
              disabled={loading}
              style={{ flexShrink: 0 }}
            >
              {loading ? '…' : 'Check'}
            </button>
          </div>

          {error && (
            <div className="alert alert-error" style={{ marginTop: 18 }}>
              ⚠️ No application found for ID <strong>#{id}</strong>.
            </div>
          )}

          {data && (
            <div className="info-block">
              <h3>Application #{data.application_id}</h3>

              {/* Progress stepper */}
              <div className="stepper">
                {STEPS.map((step, i) => (
                  <div key={step} className="step-item">
                    <div className="step-body">
                      <div className={`step-circle ${
                        i < stepIndex ? 'done' : i === stepIndex ? 'active' : 'pending'
                      }`}>
                        {i < stepIndex ? '✓' : i + 1}
                      </div>
                      <span className={`step-label ${i === stepIndex ? 'active-label' : ''}`}>
                        {step}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className={`step-connector ${i < stepIndex ? 'done' : 'pending'}`} />
                    )}
                  </div>
                ))}
              </div>

              <div className="info-row">
                <span className="info-label">Documents</span>
                <span style={{
                  fontWeight: 600,
                  color: data.documents_submitted ? 'var(--success)' : 'var(--warning)'
                }}>
                  {data.documents_submitted ? '✓ Submitted' : '✗ Not Submitted'}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Police Verification</span>
                <span style={{ fontWeight: 500 }}>{data.police_verification}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Current Status</span>
                <span className={badgeClass(data.status)}>{data.status}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}