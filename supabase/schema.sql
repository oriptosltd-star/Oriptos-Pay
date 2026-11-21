-- Create merchants table
create table public.merchants (
  id uuid references auth.users not null primary key,
  email text unique not null,
  stripe_user_id text unique,
  stripe_account_email text,
  charges_enabled boolean default false,
  payouts_enabled boolean default false,
  instant_payouts_enabled boolean default false, 
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.merchants enable row level security;

-- Create policies
create policy "Users can view their own merchant profile" 
on public.merchants for select 
using (auth.uid() = id);

create policy "Users can update their own merchant profile" 
on public.merchants for update 
using (auth.uid() = id);

-- Function to handle updated_at
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on public.merchants
  for each row execute procedure moddatetime (updated_at);
