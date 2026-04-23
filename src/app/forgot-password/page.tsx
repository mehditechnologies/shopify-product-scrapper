"use client"

import { useState } from "react"
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"

export default function ForgotPassword() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({ email: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent){
    e.preventDefault()
  }

  return (
    <div className={`min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
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

      <div className="relative max-w-lg mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="text-center mb-8 lg:mb-10">
        <span className="inline-flex items-center gap-4 px-4 py-2 bg-linear-to-r from-[#018F93]/20 to-[#01888C]/20 border border-[#01888C]/30 rounded-full text-[#01888C] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
            Reset Password
          </span>
          <h1 className={`text-3xl lg:text-4xl md:text-5xl font-bold mt-6 lg:mt-8 mb-3 lg:mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Forgot <span className="text-[#018F93]">Password</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Enter your email to reset your password
          </p>
        </div>

        <div className={`glass-card-animated p-6 lg:p-8 rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-gray-50 border border-gray-200"}`}>
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Check your email!</h3>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>We sent you a password reset link.</p>
              <Link href="/login" className="text-[#01d4db] hover:underline">
                Back to sign in
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
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Send Reset Link
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        <p className="text-center text-gray-400 mt-8">
          Remember your password?{" "}
          <Link href="/login" className="text-[#018F93] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}