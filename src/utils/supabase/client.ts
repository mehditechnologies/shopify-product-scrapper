
// This client is used for:
//   - Login form submission
//   - Registration form submission
//   - Logout functionality
//   - Getting current user info in browser
// ============================================================

// Step 1: Import createBrowserClient from @supabase/ssr
// This creates a client that runs in the BROWSER
// Unlike server client, this one doesn't need cookie handling
import { createBrowserClient } from '@supabase/ssr'

// Step 2: Create and export the client function
// This function creates a Supabase client that runs in the browser
export function createClient() {
  
  // Step 3: Create and return the Supabase browser client
  // We pass:
  //   - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL
  //   - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anonymous key
  //
  // Note: These are PUBLIC variables (NEXT_PUBLIC_*)
  // because they will be exposed to the browser anyway
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}