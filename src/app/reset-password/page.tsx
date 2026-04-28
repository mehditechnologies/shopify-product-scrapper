"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export default function ResetPassword() {
  const { theme } = useTheme()
  const router = useRouter()
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("loading")
  const [error, setError] = useState("")

  useEffect(() => {
    // Check if we have tokens in the URL
    const url = new URL(window.location.href)
    const hashParams = new URLSearchParams(url.hash.substring(1))
    const queryParams = url.searchParams

    // Try to get tokens from hash or query
    const accessToken = hashParams.get("access_token") || queryParams.get("access_token")
    const refreshToken = hashParams.get("refresh_token") || queryParams.get("refresh_token")

    async function verifySession() {
      const supabase = createClient()
      
      try {
        if (accessToken && refreshToken) {
          // Set session with tokens from URL
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          
          if (error) {
            setError("Invalid or expired reset link")
            setStatus("error")
          } else {
            setStatus("idle")
          }
        } else {
          // Check if user already has a session (came from login)
          const { data: { session } } = await supabase.auth.getSession()
          if (session) {
            setStatus("idle")
          } else {
            setError("Invalid reset link. Please request a new one.")
            setStatus("error")
          }
        }
      } catch (err) {
        setError("Failed to verify reset link")
        setStatus("error")
      }
    }

    verifySession()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    setStatus("loading")
    setError("")

    try {
      const supabase = createClient()
      
      const { error } = await supabase.auth.updateUser({
        password: formData.password,
      })

      if (error) {
        setError(error.message)
        setStatus("error")
      } else {
        setStatus("success")
        setTimeout(() => {
          router.push("/login")
        }, 2000)
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "loading") {
    return (
      <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-[#01888C] border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>Verifying...</p>
        </div>
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"} flex items-center justify-center p-4`}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Reset Link Invalid</h2>
          <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{error}</p>
          <Link href="/forgot-password" className="px-6 py-3 bg-[#018589] text-white rounded-xl hover:bg-[#015f65] inline-block">
            Request New Link
          </Link>
        </div>
      </div>
    )
  }

  if (status === "success") {
    return (
      <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"} flex items-center justify-center p-4`}>
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h2 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Password Updated!</h2>
          <p className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Redirecting to login...</p>
        </div>
      </div>
    )
  }

  // Show password form
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
          <span className="inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-[#018F93]/20 to-[#01888C]/20 border border-[#01888C]/30 rounded-full text-[#01888C] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
            New Password
          </span>
          <h1 className={`text-3xl lg:text-4xl md:text-5xl font-bold mt-6 lg:mt-8 mb-3 lg:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Reset <span className="text-[#018F93]">Password</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Enter your new password below
          </p>
        </div>

        <div className={`glass-card-animated p-6 lg:p-8 rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-gray-50 border border-gray-200"}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>New Password *</label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full px-4 border-2 py-3 rounded-xl transition-all ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Confirm Password *</label>
              <input
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className={`w-full px-4 border-2 py-3 rounded-xl transition-all ${theme === "dark" ? "bg-[#0a1628] border-[#018589]/30 text-white placeholder-gray-500" : "bg-white border-gray-400 text-gray-900 placeholder-gray-400"}`}
                placeholder="Confirm your password"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-linear-to-r from-[#018589] to-[#01d4db] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#018589]/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                  </svg>
                  Update Password
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 mt-8">
          <Link href="/login" className="text-[#018F93] hover:underline font-medium">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  )
}