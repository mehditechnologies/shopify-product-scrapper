"use client"

import { useState } from "react"
import { useTheme } from "@/components/ThemeProvider"
import Link from "next/link"
``
export default function ContactUs() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    }, 1500)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0F1729]">

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#018589]/20 to-[#01d4db]/20 border border-[#018589]/30 rounded-full text-[#01d4db] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-6">
            Contact <span className="text-[#01d4db]">Us</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question or want further information? Fill in the short form and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card-animated p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-9">Send us a Message</h2>
            
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[#01d4db] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card-animated p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#018589] to-[#01d4db] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:shopify.scraper.com@gmail.com" className="text-[#01d4db] hover:underline">
                    shopify.scraper.com@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card-animated p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Response Time</h3>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="glass-card-animated p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Other Ways to Reach Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#0a1628] border border-[#018589]/30 rounded-xl flex items-center justify-center hover:border-[#01d4db] transition-all">
                  <svg className="w-5 h-5 text-[#01d4db]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#0a1628] border border-[#018589]/30 rounded-xl flex items-center justify-center hover:border-[#01d4db] transition-all">
                  <svg className="w-5 h-5 text-[#01d4db]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-[#0a1628] border border-[#018589]/30 rounded-xl flex items-center justify-center hover:border-[#01d4db] transition-all">
                  <svg className="w-5 h-5 text-[#01d4db]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}