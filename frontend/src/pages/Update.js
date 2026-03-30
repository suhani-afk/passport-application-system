import { useState, useEffect } from 'react';
import { update } from '../services/api';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const [id, setId]         = useState('');
  const [params]            = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg]       = useState(null);

  const [form, setForm] = useState({
    documents_submitted: 0,
    police_verification: 'Pending',
  });

  useEffect(() => {
    const idParam = params.get('id');
    if (idParam) {
      setId(idParam);
      axios.get(`http://localhost:5000/applications/${idParam}`)
        .then(res => setForm({
          documents_submitted: res.data.documents_submitted,
          police_verification: res.data.police_verification,
        }))
        .catch(() => setMsg({ type: 'error', text: 'Could not load application data.' }));
    }
  }, [params]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id.trim()) { setMsg({ type: 'error', text: 'Please enter an Application ID.' }); return; }
    setLoading(true);
    try {
      await update(id, form);
      setMsg({ type: 'success', text: 'Application updated successfully.' });
    } catch {
      setMsg({ type: 'error', text: 'Update failed. Please check the Application ID.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container-sm">
        <div className="page-header">
          <h2>Update Application</h2>
          <div className="divider" />
          <p>Modify the verification or document status for an application.</p>
        </div>

        <div className="card">
          {msg && (
            <div className={`alert alert-${msg.type}`}>
              {msg.type === 'success' ? '✅' : '⚠️'} {msg.text}
            </div>
          )}

          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Application ID</label>
              <input
                placeholder="e.g. 3"
                value={id}
                onChange={e => setId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Documents Submitted</label>
              <select
                value={form.documents_submitted}
                onChange={e => setForm({ ...form, documents_submitted: e.target.value })}
              >
                <option value={0}>No — Not yet submitted</option>
                <option value={1}>Yes — All documents in</option>
              </select>
            </div>

            <div className="form-group">
              <label>Police Verification</label>
              <select
                value={form.police_verification}
                onChange={e => setForm({ ...form, police_verification: e.target.value })}
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Saving…' : 'Save Changes →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}