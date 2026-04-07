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
};

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    let cleanUrl = url.trim();
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    const response = await fetch(cleanUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ThemeDetector/1.0)",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Could not fetch store. Please check the URL." },
        { status: 400 }
      );
    }

    const html = await response.text();

    let themeStoreId: number | null = null;
    let themeId: string | null = null;
    let themeName: string = "Unknown";

    const themeIdMatch = html.match(/theme_store_id["\s:]+(\d+)/i);
    if (themeIdMatch) {
      themeStoreId = parseInt(themeIdMatch[1], 10);
      themeName = THEME_REGISTRY[themeStoreId] || "Custom Theme";
    }

    const shopThemeMatch = html.match(/Shopify\.theme\s*=\s*\{[^}]*id["\s:]+"?(\d+)"?/i);
    if (shopThemeMatch) {
      themeId = shopThemeMatch[1];
    }

    return NextResponse.json({
      success: true,
      theme: {
        name: themeName,
        id: themeId || themeStoreId?.toString() || null,
        storeId: themeStoreId,
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
