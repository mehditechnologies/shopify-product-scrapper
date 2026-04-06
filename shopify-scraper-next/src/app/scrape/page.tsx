"use client";

import { useState } from "react";

// It allows users to enter a Shopify store URL and export products
export default function ScrapePage() {
  //Now what to store using states
  // store user type url of website
  const [shopUrl, setShopUrl] = useState("");
  // Track scraping progress : 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // State to store scraped products data
  const [products, setProducts] = useState<any[]>([]);
  
  // store error message
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

    //Now send url to backend to get data
    try {
      // Frontend sends POST request to /api/scrape
      // Backend uses products.json to get products
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: shopUrl })
      });

      //Get the response data
      const data = await response.json();

      // If response is not ok, throw error
      if (!response.ok) {
        throw new Error(data.error || 'Failed to scrape');
      }

      //update state with scraped products
      // Data from API contains: { products: [...] }
      // We save them to state to display on screen
      setProducts(data.products);
      setStatus('success');

    } catch (err) {
      // If something goes wrong, show error
      setError("Failed to scrape. Please check the URL and try again.");
      setStatus("error");
    }
  };

  // Function to export products as CSV
  const handleExport = () => {
    
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
              {products.map((product: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-[#0F1729] rounded-lg">
                  <span>{product.title}</span>
                  <div className="text-right">
                    <span className="text-[#018589] font-medium">
                      {product.variants ? `$${product.variants[0]?.price || 'N/A'}` : 'N/A'}
                    </span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({product.variants?.length || 0} variants)
                    </span>
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
