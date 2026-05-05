create extension if not exists "pgcrypto";

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  phone text,
  role text not null default 'client' check (role in ('client', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  description text,
  duration_minutes integer not null,
  price_cents integer not null,
  deposit_cents integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.intake_forms (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  service_id uuid references public.services(id),
  form_data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, service_id)
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  service_id uuid references public.services(id),
  intake_form_id uuid references public.intake_forms(id),
  appointment_at timestamptz not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled', 'completed')),
  deposit_required_cents integer not null default 0,
  gift_card_code text,
  notes text,
  created_at timestamptz not null default now()
);

create table public.gift_cards (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  balance_cents integer not null default 0,
  is_active boolean not null default true,
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null check (category in ('Permanent Makeup', 'Lifts & Tints', 'Makeup')),
  image_url text not null,
  alt_text text,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.business_hours (
  id uuid primary key default gen_random_uuid(),
  day text unique not null,
  open_time time,
  close_time time,
  is_closed boolean not null default false,
  sort_order integer not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.intake_forms enable row level security;
alter table public.appointments enable row level security;
alter table public.gift_cards enable row level security;
alter table public.gallery_items enable row level security;
alter table public.business_hours enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create policy "profiles_select_own_or_admin" on public.profiles for select using (auth.uid() = id or public.is_admin());
create policy "profiles_update_own_or_admin" on public.profiles for update using (auth.uid() = id or public.is_admin());
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);

create policy "services_public_read_active" on public.services for select using (is_active = true);
create policy "services_admin_all" on public.services for all using (public.is_admin()) with check (public.is_admin());

create policy "intake_select_own_or_admin" on public.intake_forms for select using (auth.uid() = user_id or public.is_admin());
create policy "intake_insert_own" on public.intake_forms for insert with check (auth.uid() = user_id);
create policy "intake_update_own_or_admin" on public.intake_forms for update using (auth.uid() = user_id or public.is_admin());

create policy "appointments_select_own_or_admin" on public.appointments for select using (auth.uid() = user_id or public.is_admin());
create policy "appointments_insert_own" on public.appointments for insert with check (auth.uid() = user_id);
create policy "appointments_update_admin" on public.appointments for update using (public.is_admin());

create policy "gift_cards_client_validate_active" on public.gift_cards for select using (is_active = true);
create policy "gift_cards_admin_all" on public.gift_cards for all using (public.is_admin()) with check (public.is_admin());

create policy "gallery_public_read" on public.gallery_items for select using (is_published = true);
create policy "gallery_admin_all" on public.gallery_items for all using (public.is_admin()) with check (public.is_admin());

create policy "business_hours_public_read" on public.business_hours for select using (true);
create policy "business_hours_admin_all" on public.business_hours for all using (public.is_admin()) with check (public.is_admin());

insert into public.services (slug, name, category, description, duration_minutes, price_cents, deposit_cents) values
('signature-facial', 'Signature Facial', 'Facials', 'Customized treatment for hydration, clarity, and glow.', 60, 9500, 2500),
('brow-wax', 'Brow Wax & Shape', 'Waxing', 'Clean shaping with a soft natural finish.', 30, 2800, 1000),
('powder-brows', 'Powder Brows', 'Permanent Makeup', 'Soft permanent brow enhancement.', 150, 42500, 7500),
('bridal-makeup', 'Bridal Makeup', 'Makeup', 'Elegant camera-ready makeup.', 90, 12500, 5000)
on conflict (slug) do nothing;

insert into public.business_hours (day, open_time, close_time, is_closed, sort_order) values
('Monday', '10:00', '17:00', false, 1),
('Tuesday', '10:00', '17:00', false, 2),
('Wednesday', '10:00', '17:00', false, 3),
('Thursday', '10:00', '18:00', false, 4),
('Friday', '10:00', '16:00', false, 5),
('Saturday', '09:00', '14:00', false, 6),
('Sunday', null, null, true, 7)
on conflict (day) do nothing;
