"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className=" text-5xl font-bold text-gray-900 dark:text-white mb-4">
           Choose Your<span className="text-[#018589]"> Plan</span>
           
          </h2>
          <p className=" text-lg mb-20">
            Let's choose the package that is best for you and explore it happily and cheerfully.
          </p>
      {/* pricing plans columns */}

        <div className="grid md:grid-cols-2 gap-2 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Free Plan</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Perfect to get started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export 160 products
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export for Shopify or Woocommerce
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export specified collections
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Search specific products
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Show product details
              </li>
            </ul>
            <Link
              href="/scrape"
              className="block w-full py-3 border-2 border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-colors text-center"
            >
              Get Started Free
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border-2 border-green-500 relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Premium Plan</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">For serious scrapers</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$19.99</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <strong>Unlimited</strong> products export
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export with product links
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export for Shopify or Woocommerce
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Export specified collections
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Search specific products
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Show product details
              </li>
            </ul>
            <Link
              href="/register"
              className="block w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-center"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}