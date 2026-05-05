import { Link } from 'react-router-dom';

export default function GiftCard() {
  return (
    <main className="page-shell two-column soft-panel">
      <section>
        <p className="eyebrow">Gift cards & deposits</p>
        <h1>Give care now, book with less friction later.</h1>
        <p>Gift card codes can be applied during checkout. When a valid card has balance, the booking flow waives the required deposit and displays: “Deposit not required with gift card”.</p>
        <Link className="button primary" to="/services">Book Online</Link>
      </section>
      <section className="card highlight-card">
        <h2>Deposit logic</h2>
        <p>Gift cards are stored in Supabase and validated by code, balance, and active status before appointment confirmation.</p>
      </section>
    </main>
  );
}
