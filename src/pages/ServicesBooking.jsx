import BookingForm from '../components/BookingForm';

export default function ServicesBooking() {
  return (
    <main className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Book Online</p>
        <h1>Reserve your appointment in minutes.</h1>
        <p>Select a service, complete or update your intake form, choose your time, and confirm your deposit.</p>
      </div>
      <BookingForm />
    </main>
  );
}
