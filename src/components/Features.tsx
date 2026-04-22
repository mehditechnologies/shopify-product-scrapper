"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: "CSV Export",
    desc: "One-click export to CSV",
    color: "from-primary to-primary-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Collections",
    desc: "Filter by collection",
    color: "from-secondary to-purple-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Search",
    desc: "Find specific products",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast",
    desc: "Lightning speed",
    color: "from-orange-500 to-red-500",
  },
];

export default function Features() {
  const { theme } = useTheme();
  
  return (
    <section id="features" className="w-full py-12 lg:py-20" style={{ backgroundColor: theme === "light" ? "#fff" : "#111827" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
      {/* Left: Visual - Feature Cards Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-4 lg:p-6 rounded-2xl ${idx % 2 === 1 ? "mt-0 lg:mt-8" : ""}`}
                  style={{ 
                    animationDelay: `${idx * 150}ms`,
                    background: theme === "light" ? "#ffffff" : "#162035",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <div className={`w-10 lg:w-12 h-10 lg:h-12 bg-linear-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4 shadow-lg`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className={`text-base lg:text-lg font-semibold mb-1 lg:mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className={`animate-slide-in-right px-4 lg:px-5 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full text-primary font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Powerful Features
            </div>

            <h2 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"} mb-6`} style={{ color: theme === "light" ? "#111827" : undefined }}>
              Everything You Need to <span className="gradient-text">Scrape Products</span>
            </h2>

            <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-8`}>
              Explore the features that we provide with fun and have their own functions each feature.
            </p>

            <ul className={`space-y-4 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
              {[
                "One click to export all products to CSV file",
                "Export products for Shopify or Woocommerce",
                "Select the specified collections to export",
                "Select the specified products to export",
                "Search the specified products to export",
                "Show detail of specified product",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${theme === "dark" ? "bg-sky-950" : "bg-[#018589]"}`}>
                    
                    <svg className={`w-4 h-4 ${theme === "dark" ? "text-white" : "text-white"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>

                  </div>
                  
                  <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>
                    {item.includes("Shopify") || item.includes("Woocommerce") ? (
                      <>
                        {item.split(" for ")[0]} for <strong className="text-primary">{item.split(" for ")[1]}</strong>
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/scrape" className="inline-flex items-center gap-4 px-6 py-3 bg-linear-to-r from-primary to-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all">
                Try It Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
