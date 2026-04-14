"use client"

import { useState } from "react"
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"
import { PassThrough } from "stream"

export default function SignIn() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  // right now no db so pass through 
  function handleSubmit(){
    PassThrough
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0F1729]">
      <div className="absolute inset-0 ">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#01d4db]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
        <style jsx global>{`
          @keyframes float-particle {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            90% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
          }
        `}</style>
      </div>
      <div className="animated-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      <div className="relative max-w-lg mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-linear-to-r from-[#018589]/20 to-[#01d4db]/20 border border-[#018589]/30 rounded-full text-[#01d4db] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
            </svg>
            Welcome Back
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-8 mb-4">
            Sign <span className="text-[#01d4db]">In</span>
          </h1>
          <p className="text-gray-400">
            Sign in to access your dashboard
          </p>
        </div>

        <div className="glass-card-animated p-8 rounded-2xl">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Welcome back!</h3>
              <p className="text-gray-400 mb-4">Redirecting to dashboard...</p>
              <Link href="/" className="text-[#01d4db] hover:underline">
                Go to homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password *</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-[#0a1628] text-[#01d4db] focus:ring-[#01d4db]" />
                  <span className="ml-2 text-sm text-gray-400">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-[#01d4db] hover:underline">
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
          <Link href="/Register" className="text-[#01d4db] hover:underline font-medium">
            Register now
          </Link>
        </p>
      </div>
    </div>
  )
}