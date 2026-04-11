"use client"
//import usestate
import { useState } from "react";
import Link from "next/link";


export default function Appdetector() {
//First store the url 
  const [storeUrl, setStoreUrl] = useState("");
//store status
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//Store fetched apps with name and id in usestate
  const [app, setApp] = useState<{
    name: string;
    id: string | null;
  } | null>(null);

//store any error not found apps
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
      const response = await fetch("/api/app-detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: storeUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to detect apps");
        setStatus("error");
        return;
      }

      setApp(data.app);
      setStatus("success");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1729] p-20">
      <div className="max-w-3xl mx-auto">
        {/* Header - Keep Your Original Design */}
        <span className=" p-3 m-80 text-lg bg-[#0C313F] rounded-full text-[#298db2]">Free Tool</span>
        <h1 className="text-4xl pt-10 font-bold text-center mb-5">
          Shopify<span className="text-[#298db2]"> Apps Detector</span>
        </h1>
        <p className="text-lg font-medium text-center mb-8">
          Identify the Shopify apps by inspecting any Shopify store. Simply type in the domain of a Shopify store.
        </p>

        {/* Input Form - Keep Your Original Design */}
        <div className="bg-[#192642] p-6 rounded-xl mb-10">
          <label className="block text-md font-medium mb-3 text-white">
            Shopify Store URL
          </label>
          <div className="flex gap-4">
            <input
              type="url"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              placeholder="Enter Shopify store URL e.g https://example.myshopify.com"
              className="flex-1 px-4 py-3 bg-[#0F1729] border-3 border-[#017075] rounded-full focus:outline-none text-white placeholder-gray-500"
            />
            <button
              onClick={handleDetect}
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#e4ecec] text-[#017075] rounded-lg font-medium disabled:opacity-50 hover:bg-white transition-colors"
            >
              {status === "loading" ? "Detecting..." : "Detect apps"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </div>

        {status === "success" && app && (
          <div className="bg-[#162035] p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Detected apps</h2>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-[#0F1729] rounded-lg">
                <span className="text-gray-400">app Name</span>
                <span className="font-medium text-white">{app.name}</span>
              </div>
              <div className="flex justify-between p-3 bg-[#0F1729] rounded-lg">
                <span className="text-gray-400">app ID</span>
                <span className="font-medium text-white">{app.id || "Unknown"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Other Free Tools - Added from reference */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Other Free <span className="text-[#257b9b]">Tools</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl border-[#257b9b] bg-[#257b9b]/10">
              <div className="w-12 h-12 bg-linear-to-r from-[#018589] to-[#01d4db] rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Shopify theme Detector</h3>
                <p className="text-sm text-gray-400">Identify any Shopify app</p>
              </div>
            </div>

            <Link href="/tools/shopify-app-detector" className="flex items-center gap-4 p-4 rounded-xl border border-gray-700 hover:border-[#257b9b] hover:bg-[#257b9b]/5 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Shopify App Detector</h3>
                <p className="text-sm text-gray-400">Discover installed apps</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section - Added from reference */}
        <div className="text-center py-8">
          <h3 className="text-xl font-bold text-white mb-4">
            Need to export products from a Shopify site?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-[#257b9b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No difficulty</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-[#257b9b]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No complicated process</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
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
