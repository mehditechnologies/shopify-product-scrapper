"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1729] border-t border-[#2d3f5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0F1729] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">ShopifyScraper</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Shopify Scraper the best shopify product exporting tool on the global market
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Shopify-Scraper-104051238359810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#018589]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chrome.google.com/webstore/detail/shopify-scraper/idjimkpnmipnenkoifdomonlcejhhjnn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#018589]">
                  Chrome Extension
                </a>
              </li>
              <li>
                <Link href="/scrape" className="text-gray-400 hover:text-[#018589]">
                  Shopify Product Scraper
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-[#018589]">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Free Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools/shopify-theme-detector" className="text-gray-400 hover:text-[#018589]">
                  Shopify Theme Detector
                </Link>
              </li>
              <li>
                <Link href="/tools/shopify-app-detector" className="text-gray-400 hover:text-[#018589]">
                  Shopify App Detector
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-[#018589]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-[#018589]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-[#018589]">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#018589]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2d3f5f]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Shopify Scraper. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
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
