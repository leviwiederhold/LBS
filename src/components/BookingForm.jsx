import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntakeForm from './IntakeForm';
import { useAuth } from '../hooks/useAuth.jsx';
import { useBooking } from '../hooks/useBooking';

export default function BookingForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const booking = useBooking();
  const [giftCode, setGiftCode] = useState('');
  const tomorrow = useMemo(() => {
    const next = new Date();
    next.setDate(next.getDate() + 1);
    next.setHours(10, 0, 0, 0);
    return next.toISOString().slice(0, 16);
  }, []);

  async function handleConfirm(event) {
    event.preventDefault();
    if (!user) {
      navigate('/login', { state: { from: '/services' } });
      return;
    }
    await booking.confirmBooking();
  }

  return (
    <form className="booking-flow" onSubmit={handleConfirm}>
      <section className="booking-step">
        <p className="step-label">1. Select service</p>
        <div className="choice-grid">
          {booking.services.map((service) => (
            <button
              type="button"
              className={booking.service?.id === service.id ? 'choice-card selected' : 'choice-card'}
              key={service.id}
              onClick={() => booking.setService(service)}
            >
              <strong>{service.name}</strong>
              <span>{service.duration} min · ${service.price}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="booking-step">
        <p className="step-label">2. Intake form</p>
        <IntakeForm value={booking.intake} onChange={booking.setIntake} serviceName={booking.service?.name} />
      </section>

      <section className="booking-step">
        <p className="step-label">3. Time and deposit</p>
        <label>
          Preferred appointment time
          <input type="datetime-local" min={tomorrow} value={booking.appointmentTime} onChange={(event) => booking.setAppointmentTime(event.target.value)} />
        </label>
        <div className="gift-row">
          <label>
            Gift card code
            <input value={giftCode} onChange={(event) => setGiftCode(event.target.value)} placeholder="Try LILLYGIFT in demo mode" />
          </label>
          <button type="button" className="button secondary" onClick={() => booking.applyGiftCard(giftCode)}>
            Apply
          </button>
        </div>
        {booking.depositWaived && <p className="success">Deposit not required with gift card</p>}
        <p className="deposit-line">Deposit due today: ${booking.depositDue}</p>
      </section>

      <button className="button primary wide" disabled={booking.loading || !booking.service || !booking.appointmentTime}>
        {user ? 'Confirm Booking' : 'Login to Continue'}
      </button>
      {booking.status && <p className="status-message">{booking.status}</p>}
    </form>
  );
}
