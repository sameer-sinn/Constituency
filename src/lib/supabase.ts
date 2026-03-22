// src/lib/supabase.ts
// Supabase client initialization

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client-side Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client with service role
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Type definitions matching database schema
export interface Country {
  id: string;
  name: string;
  created_at: string;
}

export interface State {
  id: string;
  country_id: string;
  name: string;
  population: number | null;
  literacy_rate: number | null;
  created_at: string;
}

export interface Mandal {
  id: string;
  state_id: string;
  name: string;
  type: string | null;
  created_at: string;
}

export interface ParliamentConstituency {
  id: string;
  mandal_id: string;
  name: string;
  population: number | null;
  literacy_rate: number | null;
  current_mp: string | null;
  party: string | null;
  mla_count: number | null;
  created_at: string;
}

export interface MLAConstituency {
  id: string;
  parliament_id: string;
  name: string;
  population: number | null;
  literacy_rate: number | null;
  current_mla: string | null;
  party: string | null;
  created_at: string;
}

export interface Area {
  id: string;
  mla_id: string;
  name: string;
  type: string | null;
  population: number | null;
  infrastructure: string | null;
  created_at: string;
}

export interface Village {
  id: string;
  area_id: string;
  name: string;
  type: string | null;
  population: number | null;
  literacy_rate: number | null;
  male_population: number | null;
  female_population: number | null;
  major_castes: string[] | null;
  major_religions: string[] | null;
  key_issues: string[] | null;
  infrastructure_status: string | null;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  updated_at: string;
}

export interface VillageDetail extends Village {
  area?: Area;
  mla?: MLAConstituency;
  parliament?: ParliamentConstituency;
  state?: State;
  custom_data?: Record<string, any>;
}

// API Response types
export interface ApiResponse<T> {
  data: T[];
  count: number;
  total: number;
  error?: string;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
  page?: number;
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
}
