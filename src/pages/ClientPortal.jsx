import { useState } from 'react';
import { Link } from 'react-router-dom';
import IntakeForm from '../components/IntakeForm';
import { useAuth } from '../hooks/useAuth.jsx';
import { services } from '../data/siteData';

export default function ClientPortal() {
  const { user, profile, saveProfile, signOut } = useAuth();
  const [client, setClient] = useState({
    full_name: profile?.full_name || '',
    phone: profile?.phone || '',
  });
  const [intake, setIntake] = useState({});
  const [message, setMessage] = useState('');

  async function save(event) {
    event.preventDefault();
    const { error } = await saveProfile(client);
    setMessage(error ? error.message : 'Profile saved.');
  }

  return (
    <main className="page-shell dashboard">
      <div className="dashboard-header">
        <div>
          <p className="eyebrow">Client Portal</p>
          <h1>Your booking details.</h1>
          <p>{user?.email}</p>
        </div>
        <button className="button secondary" onClick={signOut}>Logout</button>
      </div>

      <div className="dashboard-grid">
        <form className="card form-grid" onSubmit={save}>
          <h2>Profile</h2>
          <label>Full name<input value={client.full_name} onChange={(event) => setClient({ ...client, full_name: event.target.value })} /></label>
          <label>Phone<input value={client.phone} onChange={(event) => setClient({ ...client, phone: event.target.value })} /></label>
          <button className="button primary">Save Profile</button>
          {message && <p className="status-message">{message}</p>}
        </form>

        <section className="card">
          <h2>Saved intake form</h2>
          <IntakeForm value={intake} onChange={setIntake} serviceName={services[0].name} />
        </section>

        <section className="card">
          <h2>Next appointment</h2>
          <p>Confirmed appointments from Supabase will appear here.</p>
          <Link className="button primary" to="/services">Book Online</Link>
        </section>
      </div>
    </main>
  );
}
