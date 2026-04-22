"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`border-t ${theme === "dark" ? "bg-[#0F1729] border-[#2d3f5f]" : "bg-gray-50 border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${theme === "dark" ? "bg-[#0F1729]" : "bg-[#017F83]"}`}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>ShopifyScraper</span>
            </Link>
            <p className={`mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Shopify Scraper the best shopify product exporting tool on <br></br> the global market
            </p>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Product</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  // href="https://chrome.google.com/webstore/detail/shopify-scraper/idjimkpnmipnenkoifdomonlcejhhjnn" 
                  target="_blank" rel="noopener noreferrer" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Chrome Extension
                </a>
              </li>
              <li>
                <Link href="/scrape" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Shopify Product Scraper
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Free Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/theme_detector" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Shopify Theme Detector
                </Link>
              </li>
              <li>
                <Link href="/app_detector" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Shopify App Detector
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={`hover:text-[#018589] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-10 lg:mt-12 pt-6 lg:pt-8 border-t ${theme === "dark" ? "border-[#2d3f5f]" : "border-gray-200"}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center lg:text-left">
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              &copy; 2026 Shopify Scraper. All rights reserved.
            </p>
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              Shopify Scraper is an independent application not affiliated with Shopify. All trademarks belong to their respective owners.
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with by <a href="https://expert-ecom.com/" target="_blank" rel="noopener noreferrer" className="text-[#018589] hover:underline">expert-ecom.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
