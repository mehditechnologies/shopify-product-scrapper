"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

// It allows users to enter a Shopify store URL and export products
export default function ScrapePage() {
  const { theme } = useTheme();
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

    //if url is valid then Clear previous error and set loading status
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

    // Define CSV headers (columns)
    const headers = ["ID", "Title", "Handle", "Body HTML", "Vendor", "Product Type", "Tags", "Created At", "Updated At", "Published At", "Status", "Gift Card", "Option 1 Name", "Option 1 Value", "Variant ID", "Variant Title", "Price", "SKU", "Inventory Quantity", "Grams", "Inventory Policy", "Fulfillment Service", "Requires Shipping", "Image Src"];
    
    // Map products to CSV rows
    const rows = products.map(p => {
      const variant = p.variants?.[0] || {};
      const image = p.images?.[0] || {};
      return [
        p.id || '',
        p.title || '',
        p.handle || '',
        (p.body_html || '').replace(/"/g, '""'),
        p.vendor || '',
        p.product_type || '',
        p.tags || '',
        p.created_at || '',
        p.updated_at || '',
        p.published_at || '',
        p.status ? 'true' : 'false',
        p.gift_card ? 'true' : 'false',
        p.options?.[0]?.name || '',
        p.options?.[0]?.values?.[0] || '',
        variant.id || '',
        variant.title || '',
        variant.price || '',
        variant.sku || '',
        variant.inventory_quantity || '',
        variant.grams || '',
        variant.inventory_policy || '',
        variant.fulfillment_service || '',
        variant.requires_shipping ? 'true' : 'false',
        image.src || ''
      ].map(field => `"${field}"`).join(",");
    });
    
    // Combine headers and rows
    const csv = [headers.join(","), ...rows].join("\n");
    
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme === "dark" ? "#0F1729" : "#ffffff" }}>
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <span className=" p-3 m-76 px-4 py-2 rounded-full text-white text-sm" style={{ backgroundColor: theme === "dark" ? "#0C313F" : "#018589" }}>Product Scraper</span>
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 mt-6 lg:mt-10" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>Scrape <span className="text-[#018589]">Products</span></h1>
        <p className="text-center text-base lg:text-lg mb-6 lg:mb-8" style={{ color: theme === "dark" ? "#9ca3af" : "#4b5563" }}>
          Enter a Shopify store URL to scrape and export products
        </p>

        {/* Input Section */}
        <div className="p-5 lg:p-7 rounded-2xl lg:rounded-3xl mb-6 lg:mb-8" style={{ backgroundColor: theme === "dark" ? "#162035" : "#ffffff", border: theme === "light" ? "1px solid #e5e7eb" : "none" }}>
          <label className="inline-block text-base lg:text-lg font-medium mb-3 lg:mb-4" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>
            Shopify Store URL
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="url"
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
              placeholder="https://example.myshopify.com"
              className="flex-1 px-4 lg:px-5 py-3 lg:py-4 border-2 rounded-lg focus:outline-4"
              style={{ backgroundColor: theme === "dark" ? "#0F1729" : "#ffffff", borderColor: theme === "dark" ? "#018D92" : "#d1d5db", color: theme === "dark" ? "#fff" : "#111827" }}
            />
            <button
              onClick={handleScrape}
              disabled={status === "loading"}
              className="px-5 lg:px-6 py-3 rounded-lg font-medium disabled:opacity-50"
              style={{ backgroundColor: "#018589", color: "#fff" }}
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
          <div className="p-4 lg:p-6 rounded-xl" style={{ backgroundColor: theme === "dark" ? "#162035" : "#ffffff" }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
              <h2 className="text-lg lg:text-xl font-semibold" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>
                Found {products.length} products
              </h2>
              <button
                onClick={handleExport}
                className="px-4 py-2 rounded-lg font-medium text-white"
                style={{ backgroundColor: "#018589" }}
              >
                Export CSV
              </button>
            </div>

            {/* Products List with images first */}
            <div className="space-y-3">
              {products.map((product: any, idx: number) => (
                <div key={idx} className="flex items-center p-3 lg:p-4 rounded-xl lg:rounded-full gap-3 lg:gap-4" style={{ backgroundColor: theme === "dark" ? "#0F1729" : "#f3f4f6" }}>
{product.images?.[0]?.src && (
                      <img 
                        src={product.images[0].src} 
                        alt={product.title}
                        className="w-12 lg:w-16 h-12 lg:h-16 object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                    <span className="flex-1 font-medium text-sm lg:text-base" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>{product.title}</span>
                    <div className="text-right">
                      <span className="font-medium text-sm" style={{ color: "#018589" }}>
                        {product.variants ? `$${product.variants[0]?.price || 'N/A'}` : 'N/A'}
                      </span>
                      <span className="text-xs lg:text-sm ml-1 lg:ml-2" style={{ color: theme === "dark" ? "#9ca3af" : "#6b7280" }}>
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
