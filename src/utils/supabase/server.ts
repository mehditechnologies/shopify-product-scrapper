
// Step 1: Import createServerClient from @supabase/ssr
// This is the special package for Next.js that handles cookies automatically
import { createServerClient } from '@supabase/ssr'

// Step 2: Import cookies from next/headers
// This is Next.js built-in way to access browser cookies on the server
import { cookies } from 'next/headers'

// Step 3: Create and export the server client function
// This function will be used whenever we need to check user session on server
export async function createServerSupabaseClient() {
  
  // Step 4: Get the cookie store from Next.js
  // cookies() returns a promise, so we use "await" to get the actual cookie store
  // The cookie store contains all cookies from the browser (including login session)
  const cookieStore = await cookies()

  // Step 5: Create and return the Supabase client
  // We pass:
  //   - NEXT_PUBLIC_SUPABASE_URL: Your Supabase project URL (from .env.local)
  //   - NEXT_PUBLIC_SUPABASE_ANON_KEY: Your Supabase anonymous key (from .env.local)
  //   - cookies object: So Supabase can read/write cookies for session management
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Step 6: Define how to READ cookies
        // This function is called by Supabase when it needs to read the session cookie
        getAll() {
          // Return all cookies from the cookie store
          // Each cookie has a name and value
          return cookieStore.getAll()
        },
        
        // Step 7: Define how to WRITE cookies
        // This function is called by Supabase when it needs to save/update a cookie
        // (like when user logs in and Supabase creates a session cookie)
        setAll(cookiesToSet) {
          // cookiesToSet is an array of cookies to set
          // Each has: name, value, and options (like expiration time)
          cookiesToSet.forEach(({ name, value, options }) =>
            // Set each cookie in the browser's cookie store
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}