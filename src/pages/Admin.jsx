import { useEffect, useState } from 'react';
import { defaultBusinessHours } from '../data/siteData';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

export default function Admin() {
  const [hours, setHours] = useState(defaultBusinessHours);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    async function loadHours() {
      const { data } = await supabase.from('business_hours').select('*').order('sort_order');
      if (data?.length) setHours(data);
    }
    loadHours();
  }, []);

  function update(index, key, value) {
    setHours((current) => current.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row)));
  }

  async function save() {
    if (!isSupabaseConfigured) {
      setMessage('Demo hours saved locally. Add Supabase env vars to persist.');
      return;
    }

    const payload = hours.map((row, index) => ({ ...row, sort_order: index }));
    const { error } = await supabase.from('business_hours').upsert(payload, { onConflict: 'day' });
    setMessage(error ? error.message : 'Business hours saved.');
  }

  return (
    <main className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Admin</p>
        <h1>Edit business hours.</h1>
        <p>Mobile-friendly controls persist hours to Supabase.</p>
      </div>
      <section className="card admin-card">
        <div className="admin-hours">
        {hours.map((row, index) => (
          <div className="hours-row" key={row.day}>
            <strong>{row.day}</strong>
            <label>
              Closed
              <input type="checkbox" checked={row.is_closed} onChange={(event) => update(index, 'is_closed', event.target.checked)} />
            </label>
            <input type="time" value={row.open_time?.slice(0, 5)} disabled={row.is_closed} onChange={(event) => update(index, 'open_time', event.target.value)} />
            <input type="time" value={row.close_time?.slice(0, 5)} disabled={row.is_closed} onChange={(event) => update(index, 'close_time', event.target.value)} />
          </div>
        ))}
        </div>
      </section>
      <button className="button primary" onClick={save}>Save Hours</button>
      {message && <p className="status-message">{message}</p>}
    </main>
  );
}
