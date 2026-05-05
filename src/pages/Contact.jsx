import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <main className="page-shell two-column">
      <section>
        <p className="eyebrow">Contact</p>
        <h1>Questions before you book?</h1>
        <p>Use online booking as the primary path for appointments. For service questions, send a note and Lilly will follow up.</p>
        <form className="card form-grid">
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea placeholder="What would you like to ask?" /></label>
          <Link className="button primary" to="/services">Book Online</Link>
        </form>
      </section>
      <section className="card">
        <h2>Studio</h2>
        <p>Fayetteville, Ohio</p>
        <p>Hours are managed from the admin panel and stored in Supabase.</p>
      </section>
    </main>
  );
}
