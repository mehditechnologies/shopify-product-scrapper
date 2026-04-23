"use client"
//import usestate
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";


export default function ThemeDetector() {
  const { theme: appTheme } = useTheme();
//First store the url 
  const [storeUrl, setStoreUrl] = useState("");
//store status.
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//Store fetched themes with name and id in usestate
  const [theme, setTheme] = useState<{
    name: string;
    id: string | null;
  } | null>(null);

//store any error not found theme
  const [error, setError] = useState("");

//Now use handle detect function
  const handleDetect = async () => {
    if (!storeUrl) {
      setError("Please enter a store URL");
      return;
    }

    setError("");
    setStatus("loading");
//Now hit api to fetch data from backend
    try {
      const response = await fetch("/api/detect-theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: storeUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to detect theme");
        setStatus("error");
        return;
      }

      setTheme(data.theme);
      setStatus("success");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:py-20 ${appTheme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center">
        <span className={`inline-block px-4 py-2 text-sm rounded-full ${appTheme === "dark" ? "bg-[#0C313F] text-[#298db2]" : "bg-[#018589] text-white"}`}>Free Tool</span>
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl pt-6 lg:pt-10 font-bold mb-4 lg:mb-5 ${appTheme === "dark" ? "text-white" : "text-gray-900"}`}>
          Shopify<span className="text-[#298db2]"> Theme Detector</span>
        </h1>
        <p className={`text-base lg:text-lg font-medium mb-6 lg:mb-8 ${appTheme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          Identify the Shopify theme by inspecting any Shopify store. Simply type in the domain of a Shopify store.
        </p>
        </div>

        {/* Input Form */}
        <div className={`p-5 lg:p-6 rounded-xl mb-8 lg:mb-10 ${appTheme === "dark" ? "bg-[#192642]" : "bg-gray-50 border border-gray-200"}`}>
          <label className={`block text-base lg:text-md font-medium mb-3 ${appTheme === "dark" ? "text-white" : "text-gray-900"}`}>
            Shopify Store URL
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="url"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="Enter Shopify store URL e.g https://example.myshopify.com"
              className="flex-1 px-4 py-3 border-2 lg:border-3 rounded-lg focus:outline-none placeholder-gray-500"
              style={{ backgroundColor: appTheme === "dark" ? "#0F1729" : "#ffffff", borderColor: appTheme === "dark" ? "#017075" : "#d1d5db", color: appTheme === "dark" ? "#fff" : "#111827" }}
            />
            <button
              onClick={handleDetect}
              disabled={status === "loading"}
              className="px-5 lg:px-6 py-3 rounded-lg font-medium disabled:opacity-50"
              style={{ backgroundColor: appTheme === "dark" ? "#e4ecec" : "#018589", color: appTheme === "dark" ? "#017075" : "#fff" }}
            >
              {status === "loading" ? "Detecting..." : "Detect Theme"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </div>

        {status === "success" && theme && (
          <div className="p-6 rounded-xl mb-8" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb" }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Detected Theme</h2>
            <div className="space-y-3">
              <div className="flex justify-between p-3 rounded-lg" style={{ backgroundColor: appTheme === "dark" ? "#0F1729" : "#ffffff" }}>
                <span style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Theme Name</span>
                <span className="font-medium" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>{theme.name}</span>
              </div>
              <div className="flex justify-between p-3 rounded-lg" style={{ backgroundColor: appTheme === "dark" ? "#0F1729" : "#ffffff" }}>
                <span style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Theme ID</span>
                <span className="font-medium" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>{theme.id || "Unknown"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Description Section */}
        <div className="p-8 rounded-2xl mb-8" style={{ backgroundColor: appTheme === "dark" ? "rgba(22, 32, 53, 0.8)" : "#f9fafb" }}>
          <h3 className="text-xl font-bold mb-4" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
            Get Shopify theme templates from competitor stores
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-lg" style={{ color: appTheme === "dark" ? "#9ca3af" : "#4b5563" }}>
            <p>
              Use <Link href="/" className="text-[#257b9b] hover:underline font-medium">Shopify Scraper</Link> powerful artificial intelligence shopify theme detector to <span className="text-[#257b9b] font-medium">automatically detect shopify theme</span> from store information! Simply input the Shopify store, click "Detect," and observe the theme displayed on your screen.
            </p>
            <p>
              Obtain the Shopify theme swiftly identified by the Shopify Theme Detector within seconds. You can continue inputting multiple competitor stores until you acquire various themes. Click on the link to the shopify theme and <span className="text-[#257b9b] font-medium">use this theme on your shopify site</span>.
            </p>
          </div>
        </div>

        {/* Other Free Tools */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
            Other Free <span className="text-[#257b9b]">Tools</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-[#257b9b]" style={{ backgroundColor: "rgba(37, 123, 155, 0.1)" }}>
              <div className="w-12 h-12 bg-gradient-to-r from-[#018589] to-[#01d4db] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Shopify Theme Detector</h3>
                <p className="text-sm" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Identify any Shopify theme</p>
              </div>
            </div>

            <Link href="/app_detector" className="flex items-center gap-4 p-4 rounded-xl border hover:border-[#257b9b] transition-all" style={{ borderColor: appTheme === "dark" ? "#374151" : "#e5e7eb", backgroundColor: appTheme === "dark" ? "rgba(37, 123, 155, 0.05)" : "transparent" }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Shopify App Detector</h3>
                <p className="text-sm" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Discover installed apps</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
            Need to export products from a Shopify site?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5 text-[#257b9b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No difficulty</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5 text-[#257b9b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No complicated process</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5 text-[#257b9b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Choose the best products</span>
            </div>
          </div>
          <Link href="/scrape" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#018589] to-[#01d4db] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#018589]/25 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7"/>
            </svg>
            Shopify Products Scraper - Free Trial Available
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
