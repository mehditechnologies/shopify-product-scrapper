
// This is a Next.js API route - it runs on the server side
// When user clicks "Scrape" button, frontend calls this API

import { NextRequest, NextResponse } from "next/server";

// This function runs when someone calls /api/scrape
export async function POST(request: NextRequest) {
  try {

    // Step 1: Get the Shopify URL from the request body
    // Frontend sends url: "https://store.myshopify.com"
    // We extract url products first
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

    // Step 4: Fetch all products using pagination
    // Shopify's products.json has a max limit of 250 per page
    // We need to loop through pages to get products & use hasmore to chk and end the loop
    let allProducts: any[] = [];
    let page = 1;
    let hasMore = true;

    //Use while loop 
    while (hasMore) {
      //This is the prodcts.json to get products 
      const productsUrl = `${cleanUrl}/products.json?limit=250&page=${page}`;
      
      const response = await fetch(productsUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; ShopifyScraper/1.0)",
        },
      });
      //if no response then gives error
      if (!response.ok) {
        return NextResponse.json(
          { error: "Could not access this store. It may have disabled product exports." },
          { status: 400 }
        );
      }

      const data = await response.json();
      const products = data.products || [];
      
      allProducts = [...allProducts, ...products];
      
      // If we got less than 250 products, we've reached the last page
      hasMore = products.length === 250;
      page++;//page count
    }

    // Step 5: Return the products to frontend
    // Frontend will receive these products and display them
    return NextResponse.json({
      success: true,
      products: allProducts,
      total: allProducts.length,
    });

  } catch (error) {
    //Handle any errors
    // If anything goes wrong (network error, invalid URL, etc.)
    // Return a friendly error message
    console.error("Scrape error:", error);
    
    return NextResponse.json(
      { error: "Failed to scrape. Please check the URL and try again." },
      { status: 500 }
    );
  }
}
