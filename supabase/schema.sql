create table if not exists public.stones (
  id uuid primary key default gen_random_uuid(),
  digital_id text unique not null,
  name text not null,
  type text not null check (type in ('Nail Gem','Loose Gemstone')),
  report_id text not null,
  lab text not null,
  carat numeric null,
  color text not null,
  cut text not null,
  origin text null,
  buyback_eligible boolean not null default false,
  notes text null,
  issued_at date not null default current_date,
  created_at timestamptz not null default now()
);

create index if not exists stones_digital_id_idx on public.stones (digital_id);