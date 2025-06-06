import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wawdcljubsrtpqirplej.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indhd2RjbGp1YnNydHBxaXJwbGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5Nzc2NTAsImV4cCI6MjA2NDU1MzY1MH0.n6cdZUgqKD6Aq9mW7qvjW5OkDyC3k5uQxGMZjrlSTpE";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);