"use client";

import { useState } from "react";

// This is the main component for the scrape page
// It allows users to enter a Shopify store URL and export products
export default function ScrapePage() {
  // State to manage the URL input from user
  const [shopUrl, setShopUrl] = useState("");
  
  // State to track scraping status: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // State to store scraped products data
  const [products, setProducts] = useState<any[]>([]);
  
  // State for error message if something goes wrong
  const [error, setError] = useState("");

  // Function to handle the scrape action
  const handleScrape = async () => {
    // Don't proceed if URL is empty
    if (!shopUrl.trim()) {
      setError("Please enter a Shopify store URL");
      return;
    }

    // Clear previous error and set loading status
    setError("");
    setStatus("loading");

    try {
      // ============================================
      // YES, YOU NEED A BACKEND FOR THIS!
      // ============================================
      // 
      // Why? Because:
      // 1. Shopify stores require server-side requests (no CORS from browser)
      // 2. Scraping needs to run on a server, not client browser
      // 3. You need to handle rate limiting and proxies
      // 4. For export functionality, server needs to generate CSV files
      //
      // The frontend calls your backend API, and your backend does the scraping
      //
      // Example API call (uncomment when you have backend):
      /*
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: shopUrl })
      });
      
      if (!response.ok) throw new Error('Failed to scrape');
      
      const data = await response.json();
      setProducts(data.products);
      setStatus('success');
      */

      // For demo purposes, we'll simulate a successful response
      // Remove this mock data when you connect to real backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProducts([
        { title: "Sample Product 1", price: "$29.99", variants: 3 },
        { title: "Sample Product 2", price: "$49.99", variants: 5 },
        { title: "Sample Product 3", price: "$19.99", variants: 2 },
      ]);
      setStatus("success");
      
    } catch (err) {
      // If something goes wrong, show error
      setError("Failed to scrape. Please check the URL and try again.");
      setStatus("error");
    }
  };

  // Function to export products as CSV
  const handleExport = () => {
    // ============================================
    // EXPORTING PRODUCTS (Client-side example)
    // ============================================
    // This creates a CSV file from the products array
    // You can do this in the browser or on the backend
    
    if (products.length === 0) return;

    // Define CSV headers
    const headers = ["Title", "Price", "Variants"];
    
    // Map products to CSV rows
    const rows = products.map(p => 
      `"${p.title}","${p.price}","${p.variants}"`
    );
    
    // Combine headers and rows
    const csv = [headers.join(","), ...rows.join("\n")].join("\n");
    
    // Create a blob and download link
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0F1729] text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-2">Scrape Products</h1>
        <p className="text-gray-400 mb-8">
          Enter a Shopify store URL to scrape and export products
        </p>

        {/* Input Section */}
        <div className="bg-[#162035] p-6 rounded-xl mb-8">
          <label className="block text-sm font-medium mb-2">
            Shopify Store URL
          </label>
          <div className="flex gap-4">
            <input
              type="url"
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
              placeholder="https://example.myshopify.com"
              className="flex-1 px-4 py-3 bg-[#0F1729] border border-[#2d3f5f] rounded-lg focus:outline-none focus:border-[#018589]"
            />
            <button
              onClick={handleScrape}
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#018589] hover:bg-[#017075] rounded-lg font-medium disabled:opacity-50"
            >
              {status === "loading" ? "Scraping..." : "Scrape"}
            </button>
          </div>
          
          {/* Show error message if any */}
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </div>

        {/* Results Section - Only show after successful scrape */}
        {status === "success" && (
          <div className="bg-[#162035] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Found {products.length} products
              </h2>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
              >
                Export CSV
              </button>
            </div>

            {/* Products List */}
            <div className="space-y-3">
              {products.map((product, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-[#0F1729] rounded-lg">
                  <span>{product.title}</span>
                  <div className="text-right">
                    <span className="text-[#018589] font-medium">{product.price}</span>
                    <span className="text-gray-500 text-sm ml-2">({product.variants} variants)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
