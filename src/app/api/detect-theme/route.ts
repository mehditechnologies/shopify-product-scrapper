import { NextRequest, NextResponse } from "next/server";

const THEME_REGISTRY: Record<number, string> = {
  887: "Dawn",
  838: "Empire",
  857: "Impulse",
  380: "Minimal",
  578: "Simple",
  796: "Debut",
  730: "Brooklyn",
  568: "Symmetry",
  871: "Warehouse",
  815: "Prestige",
  696: "Venture",
  481: "Narrative",
  2: "Timber",
  3: "Launchpad",
  1755: "OS 2.0 (Dawn)",
  1402: "Sense",
  1356: "Crave",
  1344: "Rosie",
  1323: "Spotlight",
  1314: "Colorblock",
  1245: "Studio",
  1184: "Craft",
  1176: "Dawn",
  1169: "Refresh",
  1156: "Origin",
  1100: "Edge",
  1087: "Expanse",
  1066: "Gifts",
  1050: "Cascade",
};

function extractThemeNameFromHTML(html: string): string {
  const htmlLower = html.toLowerCase();

  // Try to find explicit theme name in various places
  const patterns = [
    /theme_name["\s:]+["']([^"']+)["']/i,
    /"theme_name"\s*:\s*"([^"]+)"/i,
    /shopify\.theme\.name\s*=\s*["']([^"']+)["']/i,
    /data-theme-name=["']([^"']+)["']/i,
    /meta.*theme.*content=["']([^"']+)["']/i,
    /"theme"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  // // Try to find theme name in asset URLs
  // const assetPatterns = [
  //   /themes\/([a-z-]+)\/assets/i,
  //   /\/assets\/([a-z-]+)-theme/i,
  //   /cdn\.shopify\.com\/s\/files\/t\/[\d]+\/t\/([a-z-]+)/i,
  // ];

  // for (const pattern of assetPatterns) {
  //   const match = html.match(pattern);
  //   if (match && match[1]) {
  //     const name = match[1].charAt(0).toUpperCase() + match[1].slice(1);
  //     return name;
  //   }
  // }

  // // Try to find in CSS file names
  // const cssMatch = html.match(/\/assets\/([a-zA-Z0-9-]+?)(?:-|\.)?(?:css|theme)/i);
  // if (cssMatch) {
  //   const name = cssMatch[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  //   return name;
  // }

  // Known theme keywords
  // const knownThemes = [
  //   { name: "Dawn", keywords: ["dawn", "os2", "os-2", "online-store-2"] },
  //   { name: "Debut", keywords: ["debut"] },
  //   { name: "Minimal", keywords: ["minimal"] },
  //   { name: "Brooklyn", keywords: ["brooklyn"] },
  //   { name: "Venture", keywords: ["venture"] },
  //   { name: "Prestige", keywords: ["prestige"] },
  //   { name: "Impulse", keywords: ["impulse"] },
  //   { name: "Empire", keywords: ["empire"] },
  //   { name: "Warehouse", keywords: ["warehouse"] },
  //   { name: "Narrative", keywords: ["narrative"] },
  //   { name: "Sense", keywords: ["sense"] },
  //   { name: "Crave", keywords: ["craves", "cravec"] },
  //   { name: "Rosie", keywords: ["rosie"] },
  //   { name: "Studio", keywords: ["studio"] },
  //   { name: "Craft", keywords: ["craft"] },
  //   { name: "Refresh", keywords: ["refresh"] },
  //   { name: "Origin", keywords: ["origin"] },
  // ];

  // for (const theme of knownThemes) {
  //   for (const keyword of theme.keywords) {
  //     if (htmlLower.includes(keyword)) {
  //       return theme.name;
  //     }
  //   }
  // }

  // Try to extract from Shopify.theme JavaScript object more thoroughly
  
  // const themeObjMatch = html.match(/Shopify\.theme\s*=\s*(\{[^}]+\})/i);
  // if (themeObjMatch) {
  //   const themeObj = themeObjMatch[1];
  //   const nameMatch = themeObj.match(/name["\s:]+["']([^"']+)["']/i);
  //   if (nameMatch) {
  //     return nameMatch[1];
  //   }
  //   const handleMatch = themeObj.match(/handle["\s:]+["']([^"']+)["']/i);
  //   if (handleMatch) {
  //     return handleMatch[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  //   }
  // }

  return "Unknown";
}

function extractThemeIdFromHTML(html: string): { storeId: number | null; id: string | null } {
  let themeStoreId: number | null = null;
  let themeId: string | null = null;

  const patterns = [
    /theme_store_id["\s:]+(\d+)/i,
    /Shopify\.theme\s*=\s*\{[^}]*id["\s:]+"?(\d+)"?/i,
    /data-theme-id=["'](\d+)["']/i,
    /theme-id["\s]+(?:content=["'])?(\d+)/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      const num = parseInt(match[1], 10);
      if (themeStoreId === null && num < 10000) {
        themeStoreId = num;
      } else if (themeId === null) {
        themeId = match[1];
      }
      if (themeStoreId && themeId) break;
    }
  }

  return { storeId: themeStoreId, id: themeId };
}


export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith("http")) {
      cleanUrl = "https://" + cleanUrl;
    }
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    // Scrape HTML for detect theme
    const response = await fetch(cleanUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not fetch store. Please check the URL." },
        { status: 400 }
      );
    }

    const html = await response.text();

    const themeName = extractThemeNameFromHTML(html);
    const { storeId, id } = extractThemeIdFromHTML(html);

    // If we found a theme store ID from registry, use that name instead
    let finalName = themeName;
    if (storeId && THEME_REGISTRY[storeId]) {
      finalName = THEME_REGISTRY[storeId];
    } else if (themeName === "Unknown" && storeId) {
      finalName = `Theme #${storeId}`;
    }

    return NextResponse.json({
      success: true,
      theme: {
        name: finalName,
        id: id || storeId?.toString() || null,
        storeId: storeId,
      },
    });
    
  } catch (error) {
    console.error("Theme detection error:", error);
    return NextResponse.json(
      { error: "Failed to detect theme. Please try again." },
      { status: 500 }
    );
  }
}
