import { Link } from 'react-router-dom';

export default function Membership() {
  return (
    <main className="page-shell soft-panel">
      <div className="section-heading">
        <p className="eyebrow">Membership</p>
        <h1>For clients who keep beauty care on the calendar.</h1>
        <p>Membership support is ready for recurring perks, preferred booking, and saved care preferences through the client portal.</p>
      </div>
      <div className="card-grid two">
        <article className="card"><h3>Saved preferences</h3><p>Reuse intake details and update them before each booking.</p></article>
        <article className="card"><h3>Faster booking</h3><p>Client accounts keep profile details connected to appointments.</p></article>
      </div>
      <Link className="button primary" to="/services">Book Online</Link>
    </main>
  );
}
