import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types based on our schema
export interface Event {
  id: string;
  title: string;
  date: string;
  date_str: string;
  location: string;
  venue?: string;
  attendees?: string;
  description?: string;
  highlights?: string[];
  image_url?: string;
  gallery?: string[];
  meetup_link?: string;
  is_upcoming?: boolean;
  created_at: string;
  updated_at: string;
}

export interface Speaker {
  id: string;
  event_id: string;
  name: string;
  topic?: string;
  time?: string;
  image_url?: string;
  created_at: string;
}

export interface SiteContent {
  id: string;
  section: string;
  content: Record<string, unknown>;
  updated_at: string;
}

export interface Founder {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  display_order?: number;
  created_at: string;
  updated_at: string;
}

export interface FooterLink {
  id: string;
  category: string;
  label: string;
  url: string;
  display_order?: number;
  created_at: string;
  updated_at: string;
}

export interface TechHub {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  display_order?: number;
  created_at: string;
  updated_at: string;
}
