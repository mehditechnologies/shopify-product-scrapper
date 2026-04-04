"use client";

/* 
  HEADER COMPONENT
  - Background: #0F1729 (dark blue)
  - Navigation links and buttons use the theme color
*/

import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    /* 
      header:
      - bg-[#0F1729] = dark blue background (#0F1729)
      - border-[#2d3f5f] = subtle border color from theme
    */
    <header className="sticky top-4 bg-[#0F1729] border-b border-[#2d3f5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo icon - uses #0F1729 color */}
              <div className="w-8 h-8 bg-[#0F1729] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              {/* Logo text - white for visibility on dark bg */}
              <span className="text-xl font-bold text-white">ShopifyScraper</span>
            </Link>
          </div>
          
          {/* Navigation links - white text on dark background */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/scrape" className=" font-medium text-gray-300 hover:text-[#018589]">
              Try it now
            </Link>
            <Link href="#features" className=" font-medium text-gray-300 hover:text-[#018589]">
              Features
            </Link>
            <Link href="#pricing" className="font-medium text-gray-300 hover:text-[#018589]">
              Pricing
            </Link>
            <Link href="#video" className="font-medium text-gray-300 hover:text-[#018589]">
              How it works
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-400 hover:bg-[#1a2744]"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            {/* Sign in link */}
            <Link
              href="/login"
              className="text-sm font-medium text-gray-300 hover:text-green-500"
            >
              Sign in
            </Link>
            
            {/* 
              Upgrade button:
              - bg-[#0F1729] = uses the dark blue color (#0F1729)
            */}
            <Link
              href="/register"
              className="px-4 py-2 bg-[#0F1729] hover:bg-[#1a2744] text-white text-sm font-medium rounded-lg transition-colors"
            >
              Upgrade Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}