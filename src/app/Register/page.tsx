"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'


export default function Register() {
  const { theme } = useTheme()
  const router = useRouter()
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  // useeffect for checking if user register
  useEffect(() => {

    // create supabase client
    const supabase = createClient()
    
    //check if user is already register then redirect to login
    supabase.auth.getUser().then(({ data: { user } }) => {
      if(user){
          // if user is already register then redirect to 
        router.push('/login')
      }
  })
}, [router])

// handle submit function
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    // check if password matches confirm password
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setStatus("error")
      return
    }
    
    setStatus("loading")
    setError("")
    
    try {
      const supabase = createClient()
      
      // sign up with email and password
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name
          }
        }
      })
      
      // check if there was an error from supabase
      if (error) {
        setError(error.message)
        setStatus("error")
      } else {
        // success - show success message
        setStatus("success")
      }
    } catch (err) {
      // Handle unexpected errors (network issues, etc.)
      setError("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}> 
    
    {/* use for glowing blobs */}
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#01888C]/20 to-[#01888C]/20 border border-[#01888C]/30 rounded-full text-[#01888C] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
            Get Started
          </span>
          <h1 className={`text-4xl md:text-5xl font-bold mt-8 mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Create <span className="text-[#01888C]">Account</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Sign up to start scraping Shopify stores
          </p>
        </div>

        <div className={`glass-card-animated p-8 rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-gray-50 border border-gray-200"}`}>
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Account created!</h3>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Welcome to Shopify Scraper</p>
              <Link href="/scrape" className="text-[#01d4db] hover:underline">
                Go to dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="John Doe"
                />
                <label className={`block text-sm font-medium mb-2 mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="your@email.com"
                />
                <label className={`block text-sm font-medium mb-2 mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Password *</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="At least 6 characters"
                />
                <label className={`block text-sm font-medium mb-2 mt-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Confirm Password *</label>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-start ">
                <input type="checkbox" required className="w-4 h-4 mt-1 rounded border-gray-600 bg-[#0a1628] text-[#01d4db] focus:ring-[#01d4db]" />
                <span className="ml-2 text-sm text-gray-400">
                  I agree to the{" "}
                  <Link href="/terms-of-service" className="text-[#01888C] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-[#01888C] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
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
                    Creating account...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                    </svg>
                    Create Account
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-[#01888C] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}