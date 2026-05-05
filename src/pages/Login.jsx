import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

export default function Login() {
  const { signIn, signUp, isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ full_name: '', phone: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  async function submit(event) {
    event.preventDefault();
    const result = mode === 'login'
      ? await signIn(form.email, form.password)
      : await signUp(form.email, form.password, { full_name: form.full_name, phone: form.phone });

    if (result.error) {
      setMessage(result.error.message);
      return;
    }
    navigate(location.state?.from || '/portal');
  }

  return (
    <main className="page-shell auth-shell">
      <form className="card form-grid" onSubmit={submit}>
        <p className="eyebrow">Client Account</p>
        <h1>{mode === 'login' ? 'Welcome back.' : 'Create your account.'}</h1>
        {!isConfigured && <p className="warning">Add Supabase environment variables to enable authentication.</p>}
        {mode === 'signup' && (
          <>
            <label>Full name<input value={form.full_name} onChange={(event) => setForm({ ...form, full_name: event.target.value })} required /></label>
            <label>Phone<input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
          </>
        )}
        <label>Email<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
        <label>Password<input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required minLength={6} /></label>
        <button className="button primary">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
        {message && <p className="status-message">{message}</p>}
        <button className="link-button" type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
          {mode === 'login' ? 'Need an account?' : 'Already have an account?'}
        </button>
      </form>
    </main>
  );
}
