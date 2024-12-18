import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://izrttlxapflaxcjmvxgr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cnR0bHhhcGZsYXhjam12eGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0Nzk1NzEsImV4cCI6MjA1MDA1NTU3MX0.3u2iaLezUbyRVnbQzipIs6lEHZMoh31VWXRZq8-fZws"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

