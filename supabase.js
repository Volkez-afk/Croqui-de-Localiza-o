// supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Substitua pelos seus dados do projeto Supabase
const SUPABASE_URL = 'https://bogcbgjpqrsaygupdrzt.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZ2NiZ2pwcXJzYXlndXBkcnp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMDQ2MTAsImV4cCI6MjA4NjU4MDYxMH0.WKxBAg2plH_qnDdGhlrFGa5fx1xBX2rbcnyyqiDZA7Q'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
