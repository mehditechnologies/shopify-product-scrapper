"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"
import { createClient } from '@/utils/supabase/client'


export default function SignIn() {
  const {theme} = useTheme()
  const router = useRouter()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

 // First USE EFFECT: Check if user is already logged in

  useEffect(() => {
    // Create Supabase client
    const supabase = createClient()

    // Check if there's a valid session
    // If user is already logged in, redirect to homepage
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        // User is already logged in, redirect to homepage
        router.push('')
      }
    })
  }, [router])

  // HANDLE SUBMIT: Process login when user clicks Sign In

  async function handleSubmit(e: React.FormEvent) {
    // Step 1: Stop page from refreshing (we want AJAX/async style)
    e.preventDefault()

    // Step 2: Show loading spinner on button
    setStatus("loading")
    
    // Step 3: Clear any previous error messages
    setError("")

    try {
      // Step 4: Create Supabase client first
      const supabase = createClient()

      // Step 5: Call Supabase it checks if user exists and password matches
      // If valid, Supabase creates a session cookie automatically
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,        // User's email from form
        password: formData.password  // User's password from form
      })

      // Step 6: Check if login was successful or failed
      if (error) {
        
        // LOGIN FAILED: Show error message to user
        // error.message might say "Invalid login credentials"
        setError(error.message)
        setStatus("error")
      } else {
        // LOGIN SUCCESS: data contains user info and session
        // The session cookie is automatically saved by Supabase
        
        setStatus("success")
        
        // Step 7: Wait 1 second to show success message, then redirect
        setTimeout(() => {
          router.push('/')  // Redirect to homepage
        }, 1000)
      }
    } catch (err) {
      // Handle unexpected errors (network issues, etc.)
      setError("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div className={`min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
      
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="text-center mb-8 lg:mb-10">
        <span className="inline-flex items-center gap-4 px-4 py-2 bg-linear-to-r from-[#018F93]/20 to-[#01888C]/20 border border-[#01888C]/30 rounded-full text-[#01888C] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            Welcome Back
          </span>
          <h1 className={`text-3xl lg:text-4xl md:text-5xl font-bold mt-6 lg:mt-8 mb-3 lg:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Sign <span className="text-[#018F93]">In</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Sign in to access your dashboard
          </p>
        </div>

        <div className={`glass-card-animated p-6 lg:p-8 rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-gray-50 border border-gray-200"}`}>
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Welcome back!</h3>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Redirecting to dashboard...</p>
              <Link href="/" className="text-[#01d4db] hover:underline">
                Go to homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 border-2 py-3 rounded-xl transition-all  ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="your@email.com"
                />
                <label className={`block text-sm font-medium mb-2 mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Password *</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className={`w-4 h-4 rounded ${theme === "dark" ? "border-gray-600 bg-[#0a1628]" : "border-gray-300 bg-white"}`} />
                  <span className={`ml-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-[#018F93] hover:underline">
                  Forgot password?
                </Link>
              </div>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-gradient-to-r from-[#018589] to-[#01d4db] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#018589]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                    </svg>
                    Sign In
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link href="/Register" className="text-[#018F93] hover:underline font-medium">
            Register now
          </Link>
        </p>
      </div>
    </div>
  )
}