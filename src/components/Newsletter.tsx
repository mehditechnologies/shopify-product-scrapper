"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Newsletter() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-[#018589]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Get the latest updates, tips, and exclusive offers delivered directly to your inbox.
        </p>

        {subscribed ? (
          <div className="bg-white/10 rounded-lg p-4 text-white">
            Thanks for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 border-2 rounded-lg text-white-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-12 py-3 bg-[#0F1729] hover:bg-[#1a2744] text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm text-white/60 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
