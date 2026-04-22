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
    <div className={`min-h-screen relative overflow-hidden ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="text-center mb-8 lg:mb-10 ">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#018589]/20 to-[#01d4db]/20 border border-[#018589]/30 rounded-full text-[#01d4db] text-sm font-medium backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Get in Touch
          </span>
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-6 lg:mt-8 mb-4 lg:mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Contact <span className="text-[#01d4db]">Us</span>
          </h1>
          <p className={`text-base lg:text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Have a question or want further information? Fill in the short form and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className={`glass-card-animated p-6 lg:p-8 rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-gray-50 border border-gray-200"}`}>
            <h2 className={`text-xl lg:text-2xl font-bold mb-6 lg:mb-9 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Send us a Message</h2>
            
            {/* When status success & message send */}
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
              <form onSubmit={handleSubmit} className={`space-y-6`}>
                <div>
                  <label className={`block text-sm font-medium ${theme === "light" ? "text-gray-700" : "text-white"} text-gray-300 mb-2 `}>Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"} bg-[#0a1628] border border-[#018589]/30 rounded-xl  placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all`}
                    placeholder="Your name"
                  />
                
                  <label className={`block text-sm mt-3 font-medium ${theme === "light" ? "text-gray-700" : "text-white"} text-gray-300 mb-2`}>Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 ${theme === "light" ? "bg-[#edf2f8]" : "bg-[#0a1628]"} bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all`}
                    placeholder="your@email.com"
                  />
                

                  <label className={`block text-sm mt-3 font-medium ${theme === "light" ? "text-gray-700" : "text-white"} text-gray-300 mb-2`}>Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3  ${theme === "light" ? "bg-[#edf2f8]" : "bg-[#0a1628]" } bg-[#0a1628] border border-[#018589]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#01d4db] focus:ring-2 focus:ring-[#01d4db]/20 transition-all resize-none`}
                    placeholder="Your message..."
                  />
                </div>
                
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
                  <h3 className={`text-lg  ${theme === "light" ? "text-[#0d1214]" : "text-[#d9dfe7]" } font-semibold  mb-1`}>Email</h3>
                  <a href="mailto:shopify.scraper.com@gmail.com" className={`text-[#01d4db]  hover:underline`}>
                    shopify.scraper.com@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className=" p-8 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-linear-to-r from-[#8b5cf6] to-[#a78bfa] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg  ${theme === "light" ? "text-[#0e1115]" : "text-[#d4d9e1]" } font-semibold mb-1`}>Response Time</h3>
                  <p className="text-gray-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}