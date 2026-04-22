"use client";

import { useTheme } from "./ThemeProvider";

export default function Watchdemo() {
  const { theme } = useTheme();
  const videoId = "KoHUl0aYG2Q";

  return (
    <section id="Watchdemo" className="relative w-full py-12 lg:py-24" style={{ backgroundColor: theme === "dark" ? "#0F1729" : "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left: Content */}
        <div>
          <span className="inline-block px-5 lg:px-7 py-2 lg:py-3 font-medium rounded-full mb-5 lg:mb-7 text-white" style={{ backgroundColor: theme === "dark" ? "#0C3B47" : "#018589" }}>
            Watch Demo
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:5" style={{ color: theme === "dark" ? "#fff" : "#111827" }}>
            Gathering data from <span className="text-[#018589]">popular products</span> 
            <span style={{ display: "block", color: theme === "dark" ? "#fff" : "#111827" }}> selling online is not easy</span>
          </h1>
          <p className="text-base lg:text-lg mb-4 lg:mb-5" style={{ color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>You can spend days and even weeks searching for the right products, the right descriptions and images.</p>
          <p className="text-base lg:text-lg" style={{ color: theme === "dark" ? "#d1d5db" : "#4b5563" }}>Then, you need to worry about importing the products into your store and testing it. You are looking at many extra weeks and hard work.</p>
        </div>

        {/* Right: Video */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: theme === "dark" ? "linear-gradient(to right, rgba(1,133,137,0.2), rgba(52,152,219,0.2))" : "rgba(1,133,137,0.1)" }}></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ border: theme === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid #e5e7eb" }}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
