"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  // Check if user is logged in - runs on mount and auth changes
  useEffect(() => {
    async function checkuser() {
      const { data: { user } } = await supabase.auth.getUser();//call supabase to get current loggedin user
      setUser(user);//save user to state 
      setLoading(false);//stop loading 
    }

    checkuser();
          
    // Listen for auth changes in other tabs (login/logout in other tabs)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      setLoading(false);
    }); 

    return () => subscription.unsubscribe();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    
    <header className={`sticky top-0 z-50 border-b  ${theme === "dark" ? "bg-[#0F1729]/95 border-[#2d3f5f]" : "bg-white/95 border-gray-200"} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Logo section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className={`w-8 h-8 flex items-center justify-center ${theme === "dark" ? "bg-[#0F1729]" : "bg-[#d8e9ea]"}`}>
                <img className="" src="/extension-logo.png" alt="Logo" />
              </div>
              <span className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Shopify Scraper</span>
            </Link>
          </div>
          
          {/* Navigation links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/scrape" className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Try it now
            </Link>
            <Link href="/#features" className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Features
            </Link>
            <Link href="/#pricing" className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              Pricing
            </Link>
            <Link href="/#Watchdemo" className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
              How it works
            </Link>
          </nav>

          {/* Right side buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a2744] ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            
            {user ? (
              <>
                <Link
                  href="/profile"
                  className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className={`text-sm font-medium hover:text-red-500 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Sign in
                </Link>
                <Link
                  href="/Register"
                  className={`text-sm font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  Register
                </Link>
              </>
            )}
            
            <Link
              href="/#pricing"
              className={`px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors ${theme === "dark" ? "bg-[#0F1729] hover:bg-[#1a2744]" : "bg-[#017F83] hover:bg-[#015f65]"}`}
            >
              Upgrade Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t ${theme === "dark" ? "border-[#2d3f5f]" : "border-gray-200"}`}>
          <div className="px-4 py-4 space-y-3">
            <Link href="/scrape" className={`block py-2 font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} onClick={() => setMobileMenuOpen(false)}>
              Try it now
            </Link>
            <Link href="/#features" className={`block py-2 font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/#pricing" className={`block py-2 font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/#Watchdemo" className={`block py-2 font-medium hover:text-[#018589] ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} onClick={() => setMobileMenuOpen(false)}>
              How it works
            </Link>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
                className={`p-2 rounded-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                {theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
              <Link href="/login" className={`text-sm font-medium hover:text-green-500 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`} onClick={() => setMobileMenuOpen(false)}>
                Sign in
              </Link>
            </div>
            <Link href="/#pricing" className={`block w-full py-2.5 text-center text-white font-medium rounded-lg ${theme === "dark" ? "bg-[#0F1729]" : "bg-[#017F83]"}`} onClick={() => setMobileMenuOpen(false)}>
              Upgrade Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}