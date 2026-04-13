"use client";

import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function PrivacyPolicy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-linear-to-br from-gray-50 via-white to-gray-100"}`}>
      <div className="mx-auto px-4 py-20">
        <div className="text-center mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#018589]/10 dark:bg-[#018589]/20 border border-[#018589]/30 rounded-full text-[#018589] font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            Privacy
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Your privacy matters to us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-8 md:p-12 rounded-2xl`}>
            <div className="mb-8">
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                At Shopify Scraper, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information when you use our service.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#018589] to-[#01d4db] rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Information We Collect</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>How We Use Information</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our rights and the rights of others.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Information Sharing</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with service providers who assist us in operating our website.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Contact Us</h2>
              </div>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="mailto:shopify.scraper.com@gmail.com" className="text-[#018589] font-semibold hover:underline">shopify.scraper.com@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}