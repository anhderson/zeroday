import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { ARCHETYPE_PROFILES } from '@/lib/archetypes';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rsrjkhqffvvqkofxhvhg.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcmpraHFmZnZ2cWtvZnhodmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NzQyOTMsImV4cCI6MjA5MTE1MDI5M30.Jk1VhJcYCxvNwiICeSI4UYD0KtpxzJjwIVD8P2zksDM'
);

export async function GET() {
  const results = [];
  for (const bot of Object.values(ARCHETYPE_PROFILES)) {
    const { data, error } = await supabase.from('profiles').update({
      username: bot.name,
      full_name: bot.name,
      avatar_url: bot.avatar
    }).eq('id', bot.id).select();

    results.push({ id: bot.id, name: bot.name, data, error });
  }

  return NextResponse.json({ success: true, results });
}

export async function POST() {
  return GET();
}
