import { useState } from 'react';
import { create } from '../services/api';

export default function Apply() {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    address: '',
    documents_submitted: 0,
    police_verification: 'Pending',
  });

  const [msg, setMsg] = useState(null); // success/error message
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.dob || !form.address) {
      setMsg({ type: 'error', text: 'Please fill all fields.' });
      return;
    }

    setLoading(true);

    try {
      await create(form);

      setMsg({
        type: 'success',
        text: 'Application submitted successfully!',
      });

      // Reset form
      setForm({
        name: '',
        dob: '',
        address: '',
        documents_submitted: 0,
        police_verification: 'Pending',
      });

    } catch (err) {
      setMsg({
        type: 'error',
        text: 'Submission failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="container-sm">
        <div className="page-header">
          <h2>Apply for Passport</h2>
          <div className="divider" />
          <p>Enter applicant details to submit a new passport application.</p>
        </div>

        <div className="card">
          {/* Message */}
          {msg && (
            <div className={`alert alert-${msg.type}`}>
              {msg.type === 'success' ? '✅' : '⚠️'} {msg.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                placeholder="Enter full name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            {/* DOB */}
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) =>
                  setForm({ ...form, dob: e.target.value })
                }
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <input
                placeholder="Enter address"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
            </div>

            {/* Documents */}
            <div className="form-group">
              <label>Documents Submitted</label>
              <select
                value={form.documents_submitted}
                onChange={(e) =>
                  setForm({
                    ...form,
                    documents_submitted: Number(e.target.value),
                  })
                }
              >
                <option value={0}>No — Not yet submitted</option>
                <option value={1}>Yes — All documents submitted</option>
              </select>
            </div>

            {/* Police Verification */}
            <div className="form-group">
              <label>Police Verification</label>
              <select
                value={form.police_verification}
                onChange={(e) =>
                  setForm({
                    ...form,
                    police_verification: e.target.value,
                  })
                }
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={loading}
            >
              {loading ? 'Submitting…' : 'Submit Application →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}