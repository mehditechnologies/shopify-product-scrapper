"use client";

import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function SecurityPolicy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${theme === "dark" ? "bg-[#018589]/20 text-[#018589] border border-[#018589]/30" : "bg-[#018589] text-white border border-[#018589]"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            Security
          </span>
          <h1 className={`text-3xl md:text-4xl font-bold mt-6 mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Privacy <span className="text-[#018589]">Policy</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-300" : "text-gray-600"}>
            Your security is our top priority
          </p>
        </div>

        <div className={`p-8 md:p-12 rounded-2xl ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-50 border border-gray-200"}`}>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(to right, #059669, #047857)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Data Encryption</h2>
            </div>
            <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              All communication between you and our servers are encrypted using HTTPS. We use HSTS to allow your browser to know in advance that it should only communicate with us using HTTPS. Our backups of your data are always encrypted. To improve their durability they&apos;re stored in a separate geographical zone.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(to right, #018589, #016a70)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Physical Security</h2>
            </div>
            <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              We carefully select our hosting providers. We make sure our infrastructure has full redundancy for every major system, including the power supply and internet connection. The data centres we use have surveillance teams on site 24/7, barbed-wire fencing and strict security procedures.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(to right, #0891b2, #0e7490)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Infrastructure</h2>
            </div>
            <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              We&apos;re continuously updating our infrastructure to stay on top of new vulnerabilities. All of our servers are monitored closely and logs are stored indefinitely.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(to right, #db2777, #be185c)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Billing Information</h2>
            </div>
            <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              We never store your billing information on our servers. They are handled by our partner: Stripe.
            </p>
            <div className={`mt-4 p-5 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}>
                  <svg className="w-6 h-6" style={{ color: "#22c55e" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>PCI Service Provider Level 1 Certified</p>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Highest level of security certification</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(to right, #d97706, #ea580c)" }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Security Bug Bounty Program</h2>
            </div>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}>
              We work with security researchers to keep up with the state-of-the-art in web security. If you have discovered a web security flaw that impacts our products, please contact us.
            </p>
            <Link href="mailto:shopify.scraper.com@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all" style={{ backgroundColor: "#018589", color: "#fff" }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              Report a Vulnerability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}