
// This is a Next.js API route - it runs on the server side
// When user clicks "Scrape" button, frontend calls this API

import { NextRequest, NextResponse } from "next/server";

// This function runs when someone calls /api/scrape
export async function POST(request: NextRequest) {
  try {

    // Step 1: Get the Shopify URL from the request body
    // Frontend sends { url: "https://store.myshopify.com" }
    // We extract it here
    const { url } = await request.json();

    // Step 2: Validate the URL
    // Make sure user actually provided a URL
    if (!url) {
      return NextResponse.json(
        { error: "Please provide a URL" },
        { status: 400 } // 400 = Bad Request
      );
    }

    
    // Step 3: Clean up the URL
    // Remove trailing slash if present
    let cleanUrl = url.trim();
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    // Step 4: Try to fetch products using products.json
    // Shopify has a built-in endpoint that returns all products
    // Format: https://store.myshopify.com/products.json
    // We add limit=250 to get up to 250 products per page
    const productsUrl = `${cleanUrl}/products.json?limit=250`;

    // Make the HTTP request to Shopify
    const response = await fetch(productsUrl, {
      // Some stores require a user agent to identify requests
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ShopifyScraper/1.0)",
      },
    });

    // ============================================
    // Step 5: Check if the request was successful
    // ============================================
    // If response is not OK (not 200), the store might have
    // disabled products.json or doesn't exist
    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not access this store. It may have disabled product exports." },
        { status: 400 }
      );
    }

    // ============================================
    // Step 6: Parse the JSON response
    // ============================================
    // Shopify returns { products: [...] }
    // We extract just the products array
    const data = await response.json();

    // ============================================
    // Step 7: Return the products to frontend
    // ============================================
    // Frontend will receive these products and display them
    return NextResponse.json({
      success: true,
      products: data.products || [],
      total: data.products?.length || 0,
    });

  } catch (error) {
    // ============================================
    // Step 8: Handle any errors
    // ============================================
    // If anything goes wrong (network error, invalid URL, etc.)
    // Return a friendly error message
    console.error("Scrape error:", error);
    
    return NextResponse.json(
      { error: "Failed to scrape. Please check the URL and try again." },
      { status: 500 }
    );
  }
}
