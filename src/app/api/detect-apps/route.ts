import { NextRequest, NextResponse } from "next/server";

const SHOPIFY_APPS = [
  { name: "Klarna", domains: ["klarna.com", "klarna-checkout.com"], tags: ["klarna"] },
  { name: "Afterpay", domains: ["afterpay.com", "clearpay.com"], tags: ["afterpay", "clearpay"] },
  { name: "Yotpo", domains: ["yotpo.com"], tags: ["yotpo", "yotpo-reviews"] },
  { name: "Loox", domains: ["loox.io"], tags: ["loox"] },
  { name: "Judge.me", domains: ["judge.me"], tags: ["judge", "jdgjs"] },
  { name: "Reconvert", domains: ["reconvert.com"], tags: ["reconvert"] },
  { name: "Zendesk", domains: ["zendesk.com"], tags: ["zendesk", "zd-widget"] },
  { name: "LiveChat", domains: ["livechatinc.com"], tags: ["livechat"] },
  { name: "Tawk.to", domains: ["tawk.to"], tags: ["tawkto"] },
  { name: "Intercom", domains: ["intercom.io"], tags: ["intercom"] },
  { name: "Privy", domains: ["privy.com"], tags: ["privy"] },
  { name: "Mailchimp", domains: ["mailchimp.com"], tags: ["mailchimp", "mailchimp-signup"] },
  { name: "Klaviyo", domains: ["klaviyo.com"], tags: ["klaviyo"] },
  { name: "Segment", domains: ["segment.io"], tags: ["segment"] },
  { name: "PushOwl", domains: ["pushowl.com"], tags: ["pushowl"] },
  { name: "Smile", domains: ["smile.io"], tags: ["smile", "loyalty"] },
  { name: "OneSignal", domains: ["onesignal.com"], tags: ["onesignal"] },
  { name: "OptinMonster", domains: ["optinmonster.com"], tags: ["optinmonster"] },
  { name: "Stamped", domains: ["stamped.io"], tags: ["stamped"] },
  { name: "Okendo", domains: ["okendo.io"], tags: ["okendo"] },
  { name: "Reviews.io", domains: ["reviews.io"], tags: ["reviewsio"] },
  { name: "Trustpilot", domains: ["trustpilot.com"], tags: ["trustpilot"] },
  { name: "Fera", domains: ["fera.ai"], tags: ["fera"] },
  { name: "Vitals", domains: ["vitalsapps.com"], tags: ["vitals"] },
  { name: "Recart", domains: ["recart.com"], tags: ["recart"] },
  { name: "Nosto", domains: ["nosto.com"], tags: ["nosto"] },
  { name: "Freshworks", domains: ["fresh.design"], tags: ["freshworks"] },
  { name: "Growave", domains: ["growave.io"], tags: ["growave"] },
  { name: "Pushcrew", domains: ["pushcrew.com"], tags: ["pushcrew"] },
  { name: "Hotjar", domains: ["hotjar.io"], tags: ["hotjar"] },
  { name: "Sumo", domains: ["sumome.com"], tags: ["sumo"] },
  { name: "Socialproof", domains: ["socialproof.io"], tags: ["socialproof"] },
  { name: "ManyChat", domains: ["manychat.com"], tags: ["manychat"] },
  { name: "Tidio", domains: ["tidiochat.com"], tags: ["tidio"] },
  { name: "Drift", domains: ["drift.com"], tags: ["drift"] },
  { name: "Crisp", domains: ["crisp.chat"], tags: ["crisp"] },
  { name: "Olark", domains: ["olark.com"], tags: ["olark"] },
  { name: "Bazaarvoice", domains: ["bazaarvoice.com"], tags: ["bazaarvoice"] },
  { name: "PowerReviews", domains: ["powerreviews.com"], tags: ["powerreviews"] },
  { name: "Reevoo", domains: ["reevoo.com"], tags: ["reevoo"] },
  { name: "Feefo", domains: ["feefo.com"], tags: ["feefo"] },
  { name: "Curiosity", domains: ["curiosity.io"], tags: ["curiosity"] },
  { name: "Taggbox", domains: ["taggbox.com"], tags: ["taggbox"] },
  { name: "Elfsight", domains: ["elfsight.com"], tags: ["elfsight"] },
  { name: "Weglot", domains: ["weglot.com"], tags: ["weglot"] },
  { name: "Langs", domains: ["langs.io"], tags: ["langs"] },
  { name: "Wiser", domains: ["wiser.app"], tags: ["wiser"] },
  { name: "PageFly", domains: ["pagefly.io"], tags: ["pagefly"] },
  { name: "GemPages", domains: ["gempages.io"], tags: ["gempages"] },
  { name: "Zonos", domains: ["zonos.com"], tags: ["zonos"] },
  { name: "ShipStation", domains: ["shipstation.com"], tags: ["shipstation"] },
  { name: "Shippo", domains: ["goshippo.com"], tags: ["shippo"] },
  { name: "EasyShip", domains: ["easyship.com"], tags: ["easyship"] },
  { name: "ShipRocket", domains: ["shiprocket.in"], tags: ["shiprocket"] },
  { name: "Printful", domains: ["printful.com"], tags: ["printful"] },
  { name: "Printify", domains: ["printify.com"], tags: ["printify"] },
  { name: "Spocket", domains: ["spocket.co"], tags: ["spocket"] },
  { name: "Modalyst", domains: ["modalyst.co"], tags: ["modalyst"] },
  { name: "Inky", domains: ["inky.com"], tags: ["inky"] },
  { name: "CJO", domains: ["cjdropshipping.com"], tags: ["cj"] },
  { name: "DSers", domains: ["dsers.com"], tags: ["dsers"] },
  { name: "Oberlo", domains: ["oberlo.com"], tags: ["oberlo"] },
  { name: "Inventory Source", domains: ["inventorysource.com"], tags: ["inventorysource"] },
  { name: "AutoDS", domains: ["autods.com"], tags: ["autods"] },
  { name: "Shopify Product Reviews", domains: ["shopify.com"], tags: ["shopify-reviews", "product-reviews"] },
  { name: "Shopify Inbox", domains: ["shopify.com"], tags: ["shopify-inbox"] },
  { name: "Shopify Chat", domains: ["shopify.com"], tags: ["shopify-chat"] },
  { name: "Shopify Analytics", domains: ["shopify.com"], tags: ["shopify-analytics"] },
];

function fetchapps(url: string): Promise<Response> {
  return fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });
}

async function fetchThemeTemplates(url: string): Promise<string> {
  try {
    const layoutsUrl = `${url}/themes/latest/templates.json`;
    const response = await fetchapps(layoutsUrl);
    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data);
    }
  } catch (e) {}
  return "";
}

async function fetchThemeAssets(url: string): Promise<string> {
  try {
    const assetsUrl = `${url}/themes/latest/assets.json`;
    const response = await fetchapps(assetsUrl);
    if (response.ok) {
      const data = await response.json();
      return JSON.stringify(data);
    }
  } catch (e) {}
  return "";
}

function detectApps(data: string): string[] {
  const detected: Set<string> = new Set();
  const dataLower = data.toLowerCase();

  for (const app of SHOPIFY_APPS) {
    for (const tag of app.tags) {
      if (dataLower.includes(tag.toLowerCase())) {
        detected.add(app.name);
        break;
      }
    }
    for (const domain of app.domains) {
      if (dataLower.includes(domain.toLowerCase())) {
        detected.add(app.name);
        break;
      }
    }
  }

  return Array.from(detected);
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "Please provide a URL" },
        { status: 400 }
      );
    }

    let cleanUrl = url.trim();
    if (cleanUrl.endsWith("/")) {
      cleanUrl = cleanUrl.slice(0, -1);
    }

    const detectedApps: Set<string> = new Set();

    try {
      const homeResponse = await fetchapps(cleanUrl);
      if (homeResponse.ok) {
        const html = await homeResponse.text();
        const appNames = detectApps(html);
        appNames.forEach(app => detectedApps.add(app));
      }
    } catch (e) {
      console.log("Could not fetch HTML");
    }

    try {
      const productUrl = `${cleanUrl}/products.json?limit=1`;
      const productResponse = await fetchapps(productUrl);
      if (productResponse.ok) {
        const productData = await productResponse.text();
        const appNames = detectApps(productData);
        appNames.forEach(app => detectedApps.add(app));
      }
    } catch (e) {}

    try {
      const collectionUrl = `${cleanUrl}/collections/all.json?limit=1`;
      const collectionResponse = await fetchapps(collectionUrl);
      if (collectionResponse.ok) {
        const collectionData = await collectionResponse.text();
        const appNames = detectApps(collectionData);
        appNames.forEach(app => detectedApps.add(app));
      }
    } catch (e) {}

    const templatesData = await fetchThemeTemplates(cleanUrl);
    if (templatesData) {
      const appNames = detectApps(templatesData);
      appNames.forEach(app => detectedApps.add(app));
    }

    const assetsData = await fetchThemeAssets(cleanUrl);
    if (assetsData) {
      const appNames = detectApps(assetsData);
      appNames.forEach(app => detectedApps.add(app));
    }

    return NextResponse.json({
      success: true,
      apps: Array.from(detectedApps),
      count: detectedApps.size,
    });

  } catch (error) {
    console.error("Detect apps error:", error);
    return NextResponse.json(
      { error: "Failed to detect apps" },
      { status: 500 }
    );
  }
}