"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section className={`relative overflow-hidden ${theme === "dark" ? "bg-[#0F1729]" : "bg-gradient-to-b from-gray-50 to-white"}`} style={{ minHeight: "calc(100vh - 4rem)", padding: "3rem 0" }}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 animate-blob "></div>
        <div className="blob-2 animate-blob animation-delay-2000"></div>
        <div className="blob-3 animate-blob animation-delay-4000"></div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="animate-slide-in-left text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 dark:bg-/20 border border-primary/30 rounded-full text-primary font-medium mb-6">
              <span className="relative flex h-3 w-3">
                <span className=" absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative text-[#b14c15] inline-flex rounded-full h-3 w-3"></span>
              </span>
              #1 Shopify Scraping Tool
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 lg:mb-6 text-center lg:text-left ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Increase your productivity with 
              <span className="text-[#017F83]"> Shopify Scraper</span>
            </h1>

            <p className={`text-base lg:text-lg mb-4 lg:mb-6 max-w-xl text-center lg:text-left ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Did you know that most Shopify sellers with <span className="text-[#017F83] font-semibold">millions of sales </span>
              can create online stores of <span className="text-[#017F83] font-semibold">1000+ products</span> in under <span className="text-[#017F83] font-semibold">one minute</span>?
            </p>

            <p className={`text-sm lg:text-base mb-6 lg:mb-8 max-w-xl text-center lg:text-left ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              <strong className="text-[#017F83]">Shopify Scraper</strong> is a powerful shopify product exporting tool. Export products from any Shopify store in CSV format with blistering ease and speed.
            </p>

            {/* Try It Now Button */}
            <div className="flex justify-center lg:justify-start mb-4 text-center">
              <Link href="/scrape" className="btn-gradient px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Try It Now - Free
                </span>
              </Link>
            </div>

            {/* Chrome Extension + Watch Video */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://chrome.google.com/webstore/detail/shopify-scraper/idjimkpnmipnenkoifdomonlcejhhjnn"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-primary hover:text-primary transition-all text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-3.953 6.848c.062.003.124.007.186.007A12 12 0 0 0 22.931 6.636z" />
                </svg>
                Chrome Extension
              </a>
              <Link href="/#Watchdemo" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors group text-sm">
                <span className="w-8 h-8 bg-linear-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 group-hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className={`font-medium ${theme === "light" ? "text-gray-700" : "text- "}`}>Watch how it works</span>
              </Link>
            </div>
          </div>

          {/* Right: Scraping Illustration - hidden on mobile, visible on lg+ */}
          <div className="relative hidden lg:block text-right">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-secondary/30 blur-3xl"></div>

              {/* Main Illustration */}
              <div className="flex items-center justify-center gap-4">
                {/* Shopify Store Card */}
                <div className={`glass-card p-5 rounded-2xl w-44 animate-float ${theme === "light" ? "bg-white" : "bg-gray-800"}`} style={{ background: theme === "light" ? "#ffffff" : undefined }}>
                  <div className="w-14 h-14 bg-[#95BF47] rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.337 3.416a.589.589 0 0 0-.541-.493c-.236-.02-4.86-.368-4.86-.368s-3.22-3.183-3.575-3.539a.741.741 0 0 0-.632-.201l-1.37.384C3.883 2.29 3.396 5.222 3.396 5.222L.639 6.51s-.481.141-.551.44c-.07.299 1.456 10.313 1.456 10.313l11.072 2.062L20.18 17.9c-.014-.112-4.637-14.358-4.843-14.484zM11.035 7.51l-1.563.473s-.599-1.295-1.643-1.295c-1.343 0-1.394 1.08-1.394 1.267 0 1.393 3.588 1.927 3.588 5.183 0 2.563-1.601 4.212-3.762 4.212-2.593 0-3.914-1.637-3.914-1.637l.694-2.326s1.361 1.193 2.509 1.193c.75 0 1.053-.6 1.053-1.037 0-1.812-2.944-1.894-2.944-4.878 0-2.508 1.778-4.937 5.367-4.937 1.384 0 2.009.403 2.009.403l-.694 2.326v.053h.694z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-bold mb-1 ${theme === "light" ? "text-gray-900" : "text-white"}`}>Shopify Store</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">1,234 products</div>
                  </div>
                  {/* Mini product list */}
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                      <div className="flex-1 h-2 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                      <div className="flex-1 h-2 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                      <div className="flex-1 h-2 rounded" style={{ background: theme === "light" ? "#d1d5db" : "#374151" }}></div>
                    </div>
                  </div>
                </div>

                {/* Arrow Animation */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-1 bg-linear-to-r from-primary to-secondary rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/50 animate-pulse"></div>
                  </div>
                  <div className="w-12 h-12 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="text-xs font-medium text-primary">Scraping...</div>
                </div>

                {/* CSV Export Card */}
                <div className={`glass-card p-5 rounded-2xl w-44 ${theme === "light" ? "bg-white" : "bg-gray-800"}`} style={{ background: theme === "light" ? "#ffffff" : undefined}}>
                  <div className="w-14 h-14 bg-linear-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">CSV Export</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Ready to import</div>
                  </div>
                  {/* CSV preview */}
                  <div className="mt-3 rounded-lg p-2 text-[10px] font-mono" style={{ background: theme === "light" ? "#f3f4f6" : "#1f2937", color: theme === "light" ? "#4b5563" : "#d1d5db" }}>
                    <div>Title,Price,SKU</div>
                    <div className="text-primary">Product 1,$29,...</div>
                    <div className="text-primary">Product 2,$49,...</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-lg animate-float ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={`text-sm font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`}>Export Complete!</span>
                </div>
              </div>

              <div className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-xl shadow-lg animate-float animation-delay-4000 ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className={`text-sm font-medium ${theme === "light" ? "text-gray-900" : "text-white"}`}>&lt; 1 minute</span>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
