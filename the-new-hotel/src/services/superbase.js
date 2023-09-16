import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cqptsnxbfnlpuddjglky.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxcHRzbnhiZm5scHVkZGpnbGt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1OTk3OTYsImV4cCI6MjAxMDE3NTc5Nn0.k5Umj5TN6mCfTUqOzBNMUNZqEFR8Mf3Auikaoh_wFPo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
