import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return [] },
        setAll() { }
      }
    }
  )

  // Generate a simple reset token (for testing only - use proper auth in production)
  const resetToken = crypto.randomUUID()
  const resetUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}&email=${encodeURIComponent(email)}`

  // In production, you would send an email here
  // For now, we'll just log the reset URL and return it (for testing)
  console.log('Password reset link:', resetUrl)
  
  // Store the token in a simple way (in production, use a database)
  // For now, accept the simple token flow in the reset page
  
  // Actually call Supabase's reset (this will send the email)
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/reset-password`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true, message: 'Reset email sent' })
}