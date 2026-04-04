"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How to install Shopify Scraper?",
    answer: [
      "1. Open the extension's page in the Chrome Web Store.",
      "2. Click 'Install' button.",
      "3. After installing, find the extension icon in the toolbar. You should click on extensions button and Shopify Scraper will appear in the menu.",
      "4. Search any shopify website.",
      "5. Click on Shopify Scraper icon and follow the instruction in a popup window.",
    ],
  },
  {
    question: "Does Shopify Scraper work on protected websites?",
    answer: [
      "Yes, there is no lock or security app that can stop Shopify Scraper from exporting all content from the shopify website. If you have any problem while scraping, just send us a message, our team will deal with it quickly.",
    ],
  },
  {
    question: "How do I cancel my subscription?",
    answer: [
      "You can cancel your subscription at any time from your profile page. Your access will remain active until the end of your billing period.",
    ],
  },
  {
    question: "Do you have customer support?",
    answer: [
      "Of course! We have friendly customer support available 7 days a week. You can contact us by email at shopify.scraper.com@gmail.com or from the contact area. One of our agents will be happy to help you.",
    ],
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#141c29]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-300">
            Everything you need to know about Shopify Scraper
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#162035] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#018589] transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {faq.answer.map((line, lineIdx) => (
                      <li key={lineIdx} className="text-gray-300">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#018589] hover:bg-[#3e229c] text-white font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
