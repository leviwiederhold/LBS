import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return undefined;
    }

    let active = true;

    async function loadSession() {
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setSession(data.session);
      setLoading(false);
    }

    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session?.user || !isSupabaseConfigured) {
      setProfile(null);
      return;
    }

    async function loadProfile() {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .maybeSingle();
      setProfile(data);
    }

    loadProfile();
  }, [session]);

  async function signIn(email, password) {
    if (!isSupabaseConfigured) {
      return { error: new Error('Supabase environment variables are not configured.') };
    }
    return supabase.auth.signInWithPassword({ email, password });
  }

  async function signUp(email, password, profileData = {}) {
    if (!isSupabaseConfigured) {
      return { error: new Error('Supabase environment variables are not configured.') };
    }

    const result = await supabase.auth.signUp({
      email,
      password,
      options: { data: profileData },
    });

    if (result.data.user) {
      await supabase.from('profiles').upsert({
        id: result.data.user.id,
        email,
        full_name: profileData.full_name || '',
        phone: profileData.phone || '',
      });
    }

    return result;
  }

  async function signOut() {
    if (!isSupabaseConfigured) return;
    await supabase.auth.signOut();
  }

  async function saveProfile(updates) {
    if (!session?.user || !isSupabaseConfigured) return { error: new Error('Login required.') };
    const payload = { ...updates, id: session.user.id, email: session.user.email };
    const { data, error } = await supabase.from('profiles').upsert(payload).select().single();
    if (!error) setProfile(data);
    return { data, error };
  }

  const value = useMemo(
    () => ({
      session,
      user: session?.user || null,
      profile,
      loading,
      isConfigured: isSupabaseConfigured,
      signIn,
      signUp,
      signOut,
      saveProfile,
    }),
    [session, profile, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
