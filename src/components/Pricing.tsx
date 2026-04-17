"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Pricing() {
  const { theme } = useTheme();
  
  return (
    <section id="pricing" className="w-full py-20" style={{ backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff" }}>
      <div className="text-center max-w-7xl mx-auto px-4">
        <h2 className={`text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Choose Your<span className="text-[#018589]"> Plan</span>
            
          </h2>
          <p className={`text-lg mb-20 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Let's choose the package that is best for you and explore it happily and cheerfully.
          </p>
      {/* pricing plans columns */}

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="rounded-2xl shadow-lg p-8" style={{ backgroundColor: theme === "dark" ? "#111827" : "#ffffff", border: theme === "light" ? "1px solid #e5e7eb" : "none" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>Free Plan</h3>
            <p className="mb-4" style={{ color: theme === "dark" ? "#9ca3af" : "#6b7280" }}>Perfect to get started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>$0</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export 160 products
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export for Shopify or Woocommerce
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export specified collections
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Search specific products
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Show product details
              </li>
            </ul>
            <Link
              href="/scrape"
              className="block w-full py-3 border-2 border-[#018589] text-[#018589] font-semibold rounded-lg hover:bg-[#018589] hover:text-white transition-colors text-center"
            >
              Get Started Free
            </Link>
          </div>

          <div className="rounded-2xl shadow-lg p-8 border-2 border-[#018589] relative" style={{ backgroundColor: theme === "dark" ? "#111827" : "#ffffff" }}>
            <div className="absolute top-0 right-0 bg-[#018589] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>Premium Plan</h3>
            <p className="mb-4" style={{ color: theme === "dark" ? "#9ca3af" : "#6b7280" }}>For serious scrapers</p>
            <div className="mb-6">
              <span className="text-4xl font-bold" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>$19.99</span>
              <span style={{ color: theme === "dark" ? "#9ca3af" : "#6b7280" }}>/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Unlimited</strong> products export
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export with product links
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export for Shopify or Woocommerce
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export specified collections
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Search specific products
              </li>
<li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Search specific products
              </li>
              <li className="flex items-center gap-3" style={{ color: theme === "dark" ? "#d1d5db" : "#374151" }}>
                <svg className="w-5 h-5 text-[#018589] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Show product details
              </li>
            </ul>
            <Link
              href="/register"
              className="block w-full py-3 bg-[#018589] hover:bg-[#017371] text-white font-semibold rounded-lg text-center"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}