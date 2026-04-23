"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";


interface App {
  [key: string]: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

// First store the url,status,apps.any error 
export default function AppDetector() {
  const { theme: appTheme } = useTheme();
  const [storeUrl, setStoreUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [apps, setApps] = useState<App[]>([]);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

// Using useeffect so not render on every change
  useEffect(() => {
    setIsVisible(true);
    const newParticles = [...Array(10)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: appTheme === "dark" ? Math.random() * 0.5 + 0.1 : 0.3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, [appTheme]);

  // handle detect function
  const handleDetect = async () => {
    if (!storeUrl) {
      setError("Please enter a store URL");
      return;
    }
    
    setError("");
    setStatus("loading");

    try {
      const response = await fetch("/api/detect-apps", {
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

      setApps(data.apps || []);
      setStatus("success");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const getCategoryForApp = (appName: string): string => {
    const categories: Record<string, string> = {
      "Klarna": "Payments",
      "Afterpay": "Payments",
      "Yotpo": "Reviews",
      "Loox": "Reviews",
      "Judge.me": "Reviews",
      "Reconvert": "Post-Purchase",
      "Zendesk": "Customer Support",
      "LiveChat": "Customer Support",
      "Tawk.to": "Customer Support",
      "Intercom": "Customer Support",
      "Privy": "Marketing",
      "Mailchimp": "Email Marketing",
      "Klaviyo": "Email Marketing",
      "Segment": "Analytics",
      "PushOwl": "Marketing",
      "Smile": "Loyalty",
      "OneSignal": "Marketing",
      "OptinMonster": "Marketing",
      "Stamped": "Reviews",
      "Okendo": "Reviews",
      "Reviews.io": "Reviews",
      "Trustpilot": "Reviews",
      "Fera": "Reviews",
      "Vitals": "Analytics",
      "Recart": "Marketing",
      "Nosto": "Personalization",
      "Freshworks": "Customer Support",
      "Growave": "Social Proof",
      "Pushcrew": "Marketing",
      "Hotjar": "Analytics",
      "Sumo": "Marketing",
      "ManyChat": "Marketing",
      "Tidio": "Customer Support",
      "Drift": "Customer Support",
      "Crisp": "Customer Support",
      "Olark": "Customer Support",
    };
    return categories[appName] || "Other";
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${appTheme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
      {/* Particles Background - only show in dark mode */}
      {appTheme === "dark" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-[#01d4db]"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: isVisible ? particle.opacity : 0,
                animation: `float-particle ${particle.duration}s linear infinite`,
                animationDelay: isVisible ? `${particle.delay}s` : '0s',
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}
        </div>
      )}
      {appTheme === "dark" && (
        <style jsx global>{`
          @keyframes float-particle {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
          }
        `}</style>
      )}

      {/* Animated Background - only in dark */}
      {appTheme === "dark" && (
        <div className="animated-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
          <div className="orb orb-4"></div>
          <div className="noise-overlay"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium ${appTheme === "dark" ? "bg-[#018589]/20 text-[#01d4db] border border-[#018589]/30" : "bg-[#018589] text-white border border-[#018589]"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Free Tool
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 lg:mb-6" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
          Shopify App Detector
        </h1>

        {/* Subtitle */}
        <p className="text-base lg:text-lg md:text-xl text-center mb-8 lg:mb-12 max-w-2xl mx-auto" style={{ color: appTheme === "dark" ? "#9ca3af" : "#4b5563" }}>
          Identify the Shopify Apps by inspecting any Shopify store. Simply type in the domain of a Shopify store.
        </p>

        {/* Input Section */}
        <div className="p-6 lg:p-8 rounded-2xl mb-8 lg:mb-12" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb", border: appTheme === "dark" ? "none" : "1px solid #e5e7eb" }}>
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-5 top-1/2 -translate-y-1/2" style={{ color: appTheme === "dark" ? "#01d4db" : "#018589" }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <input
                type="url"
                value={storeUrl}
                onChange={(e) => setStoreUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDetect()}
                placeholder="Enter Shopify store URL e.g. https://example.myshopify.com"
                className="w-full pl-14 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all placeholder-gray-500"
                style={{ backgroundColor: appTheme === "dark" ? "#0a1628" : "#ffffff", borderColor: appTheme === "dark" ? "#018589/30" : "#d1d5db", color: appTheme === "dark" ? "#fff" : "#111827" }}
              />
            </div>
            <button
              onClick={handleDetect}
              disabled={status === "loading"}
              className="px-6 lg:px-8 py-3 lg:py-4 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ backgroundColor: "#018589", color: "#fff" }}
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Detecting...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  Detect Apps
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 rounded-lg text-sm flex items-center gap-2" style={{ backgroundColor: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#ef4444" }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {error}
            </div>
          )}
        </div>

        {/* Results Section */}
        {status === "success" && (
          <div className="p-8 rounded-2xl mb-12" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(to right, #018589, #01d4db)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
              Detected Apps ({apps.length})
            </h2>
            
            {apps.length > 0 ? (
              <div className="grid gap-4">
                {apps.map((app: any, index) => {
                  const appName = typeof app === 'string' ? app : (app.name || app.value || app.domain || "Unknown");
                  const category = getCategoryForApp(appName);
                  return (
                    <div
                      key={index}
                      className="group p-5 rounded-xl border transition-all duration-300"
                      style={{ backgroundColor: appTheme === "dark" ? "#0a1628" : "#ffffff", borderColor: appTheme === "dark" ? "#018589/20" : "#e5e7eb" }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>{appName}</h3>
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" style={{ backgroundColor: appTheme === "dark" ? "#018589/10" : "#018589/10", color: "#018589" }}>{category}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(34, 197, 94, 0.2)" }}>
                          <svg className="w-4 h-4" style={{ color: "#22c55e" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p>No apps detected. The store might not have any detectable apps or may not be a Shopify store.</p>
              </div>
            )}
          </div>
        )}

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl group transition-transform duration-300" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb", border: appTheme === "dark" ? "none" : "1px solid #e5e7eb" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(to right, #8b5cf6, #a78bfa)" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Get Shopify Apps from competitor stores</h3>
            <p style={{ color: appTheme === "dark" ? "#9ca3af" : "#4b5563" }}>Instantly identify active apps on your Shopify store with our built-in detector. Save time and make informed decisions to optimize your e-commerce strategy.</p>
          </div>

          <div className="p-6 rounded-2xl group transition-transform duration-300" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb", border: appTheme === "dark" ? "none" : "1px solid #e5e7eb" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(to right, #ec4899, #f472b6)" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Streamline your Shopify store management</h3>
            <p style={{ color: appTheme === "dark" ? "#9ca3af" : "#4b5563" }}>Quickly detect all installed apps. Evaluate their impact and simplify your e-commerce experience.</p>
          </div>
        </div>

        {/* Other Tools Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
            Other Free <span style={{ color: "#018589" }}>Tools</span>
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/theme_detector" className="group flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300" style={{ borderColor: "#018589", backgroundColor: appTheme === "dark" ? "#162035" : "transparent" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(to right, #018589, #01d4db)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Shopify Theme Detector</h3>
                <p className="text-sm" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Identify any Shopify theme</p>
              </div>
            </Link>

            <Link href="/app_detector" className="group flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300" style={{ borderColor: "#8b5cf6", backgroundColor: appTheme === "dark" ? "#162035" : "transparent" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(to right, #8b5cf6, #a78bfa)" }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>Shopify App Detector</h3>
                <p className="text-sm" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>Discover installed apps</p>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-2xl text-center" style={{ backgroundColor: appTheme === "dark" ? "#162035" : "#f9fafb" }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: appTheme === "dark" ? "#fff" : "#111827" }}>
            Need to export products from any Shopify site?
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5" style={{ color: "#01d4db" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No difficulty</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5" style={{ color: "#01d4db" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>No complicated process</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: appTheme === "dark" ? "#9ca3af" : "#6b7280" }}>
              <svg className="w-5 h-5" style={{ color: "#01d4db" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Choose the best products</span>
            </div>
          </div>
          <Link href="/scrape" className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300" style={{ backgroundColor: "#018589", color: "#fff" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Shopify Products Scraper - Free Trial Available
          </Link>
        </div>
      </div>
    </div>
  );
}