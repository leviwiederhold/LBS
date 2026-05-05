import { useState } from 'react';
import { useAuth } from './useAuth.jsx';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import { services as fallbackServices } from '../data/siteData';

export function useBooking() {
  const { user } = useAuth();
  const [service, setService] = useState(null);
  const [intake, setIntake] = useState({});
  const [giftCard, setGiftCard] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const depositRequired = service ? service.deposit || 0 : 0;
  const depositWaived = Boolean(giftCard?.is_valid);
  const depositDue = depositWaived ? 0 : depositRequired;

  async function applyGiftCard(code) {
    if (!code) return { error: new Error('Enter a gift card code.') };

    if (!isSupabaseConfigured) {
      const is_valid = code.trim().toUpperCase() === 'LILLYGIFT';
      setGiftCard({ code, is_valid });
      return { data: { code, is_valid } };
    }

    const { data, error } = await supabase
      .from('gift_cards')
      .select('*')
      .eq('code', code.trim())
      .eq('is_active', true)
      .maybeSingle();

    const is_valid = Boolean(data && Number(data.balance_cents) > 0);
    setGiftCard({ ...data, code, is_valid });
    return { data: { ...data, is_valid }, error };
  }

  async function saveIntakeForm(payload) {
    setIntake(payload);
    if (!user || !service || !isSupabaseConfigured) return { data: payload };

    return supabase.from('intake_forms').upsert({
      user_id: user.id,
      service_id: service.id,
      form_data: payload,
    });
  }

  async function confirmBooking() {
    if (!service || !appointmentTime) {
      return { error: new Error('Choose a service and appointment time.') };
    }
    if (!user) {
      return { error: new Error('Login required before confirming.') };
    }

    setLoading(true);
    setStatus('');

    if (!isSupabaseConfigured) {
      setLoading(false);
      setStatus('Demo booking ready. Add Supabase env vars to persist appointments.');
      return { data: { service, appointmentTime, intake, depositDue } };
    }

    await saveIntakeForm(intake);

    const { data, error } = await supabase
      .from('appointments')
      .insert({
        user_id: user.id,
        service_id: service.id,
        appointment_at: appointmentTime,
        status: 'pending',
        deposit_required_cents: Math.round(depositDue * 100),
        gift_card_code: giftCard?.is_valid ? giftCard.code : null,
      })
      .select()
      .single();

    setLoading(false);
    setStatus(error ? error.message : 'Appointment request received.');
    return { data, error };
  }

  return {
    services: fallbackServices,
    service,
    setService,
    intake,
    setIntake,
    appointmentTime,
    setAppointmentTime,
    giftCard,
    applyGiftCard,
    depositRequired,
    depositWaived,
    depositDue,
    saveIntakeForm,
    confirmBooking,
    status,
    loading,
  };
}
