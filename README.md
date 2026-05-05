# Lillyan's Beauty Studio

Production-ready Vite + React + Supabase app for Lillyan's Beauty Studio.

## Features

- Online booking as the primary CTA
- Client sign up, login, logout, and protected client portal
- Saved profile and service-specific intake form flow
- Appointment creation with deposit tracking
- Gift card code validation that waives deposit when valid
- Gallery category filters for Permanent Makeup, Lifts & Tints, and Makeup
- Protected admin panel for editing business hours

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local environment file:

   ```bash
   cp .env.example .env
   ```

3. Add Supabase values:

   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Run locally:

   ```bash
   npm run dev
   ```

5. Build for production:

   ```bash
   npm run build
   ```

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/migrations/001_initial_schema.sql`.
4. Enable email authentication in Supabase Auth.
5. Create at least one user through the app or Supabase Auth.
6. Promote an admin user:

   ```sql
   update public.profiles
   set role = 'admin'
   where email = 'admin@example.com';
   ```

## Environment Variables

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Keys are loaded through Vite environment variables and are not hardcoded.

## Notes

The app renders without Supabase credentials for local UI review, but authentication, profile saving, appointment persistence, gift card validation, and admin business-hours persistence require a configured Supabase project.
