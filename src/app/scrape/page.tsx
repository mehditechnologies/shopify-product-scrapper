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
    <div className=" min-h-screen bg-[#0F1729] p-20">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <span className="p-3 m-76 bg-[#0C313F] rounded-full">Product Scraper</span>
        <h1 className=" text-center text-4xl font-bold mb-4 mt-10">Scrape <span className="text-[#018589]">Products</span></h1>
        <p className="text-center text-lg mb-8">
          Enter a Shopify store URL to scrape and export products
        </p>

        {/* Input Section */}
        <div className="bg-[#162035] p-7 rounded-3xl mb-8">
          <label className="inline-block text-lg font-medium mb-4">
            Shopify Store URL
          </label>
          <div className="flex gap-4">
            <input
              type="url"
              value={shopUrl}
              onChange={(e) => setShopUrl(e.target.value)}
              placeholder="https://example.myshopify.com"
              className="flex-1 px-5 py-4 bg-[#0F1729] border-2 border-[#018D92] rounded-lg focus:outline-4 focus:border-[#d5ecec]"
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

            {/* Products List with images first */}
            <div className="space-y-3">
              {products.map((product: any, idx: number) => (
                <div key={idx} className="flex items-center p-4 bg-[#0F1729] rounded-full gap-4">
                  {product.images?.[0]?.src && (
                    <img 
                      src={product.images[0].src} 
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <span className="flex-1 font-medium">{product.title}</span>
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
