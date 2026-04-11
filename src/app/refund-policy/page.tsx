"use client";

import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function RefundPolicy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-linear-to-br from-gray-50 via-white to-gray-100"}`}>
      <div className="mx-auto px-4 py-20">
        <div className="text-center mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#018589]/10 dark:bg-[#018589]/20 border border-[#018589]/30 rounded-full text-[#018589] font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
            Billing
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className={theme === "dark" ? "text-white" : "text-gray-600"}>
            Our commitment to fair and transparent billing practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-8 md:p-12 rounded-2xl`}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Free Trial: Demo Page</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                We provide our users with a completely free demo page to facilitate in-depth exploration of the features offered by Shopify Scraper, without any financial commitment. We strongly encourage you to take advantage of this opportunity before making a purchasing decision.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#018589] to-[#015f65] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Subscription Cancellation</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                Our customers enjoy the flexibility to cancel their subscription at any time, whether during the free trial period of the demo page or after purchasing a paid subscription. Cancellation can be easily done from their personal space on our platform, through a few intuitive clicks, or by contacting us via email at{" "}
                <a href="mailto:shopify.scraper.com@gmail.com" className="text-[#018589] font-semibold hover:underline">shopify.scraper.com@gmail.com</a>.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>No Refund for Misuse</h2>
              </div>
              <div className={`p-6 border rounded-xl ${theme === "dark" ? "bg-red-900/20 border-red-800" : "bg-red-50 border-red-200"}`}>
                <p className={`m-0 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
                  We emphasize that any refund is subject to our rigorous terms of use. No refund will be granted in case of misuse of the tool, whether for users of the free demo page or those who have subscribed to a paid subscription. This includes any behavior contrary to ethical use or in violation of our terms and conditions.
                </p>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Contact and Technical Support</h2>
              </div>
              <p className={`mb-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                For any questions regarding our refund policy, to proceed with the cancellation of your subscription, or for any technical issues with the application, please contact our technical support. Our dedicated team is here to assist you.
              </p>
              <Link href="mailto:shopify.scraper.com@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#018589] to-[#015f65] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#018589]/25 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}