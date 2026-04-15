"use client";

import { useTheme } from "./ThemeProvider";

export default function Watchdemo() {
  const { theme } = useTheme();
  const videoId = "KoHUl0aYG2Q";

  return (
    <section id="Watchdemo" className={`relative container mx-auto mt-40 mb-30 ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"}`}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <span className={`inline-block px-7 py-3 font-medium rounded-full mb-7 ${theme === "dark" ? "bg-[#0C3B47]" : "bg-[#018589]"} text-white`}>
            Watch Demo
          </span>
          <h1 className={`text-4xl font-bold mb-5 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Gathering data from <span className="text-[#018589]">popular products</span> 
            <span className={theme === "dark" ? "text-white text-4xl" : "text-gray-900 text-4xl"}> selling online is not easy</span>
          </h1>
          <p className={`text-lg mb-5 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>You can spend days and even weeks searching for the right products, the right descriptions and images.</p>
          <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Then, you need to worry about importing the products into your store and testing it. You are looking at many extra weeks and hard work.</p>
        </div>

        {/* Right: Video */}
        <div className="relative">
          <div className={`absolute inset-0 bg-linear-to-r from-[#018589]/20 to-secondary/20 rounded-2xl blur-xl ${theme === "dark" ? "" : "bg-[#018589]/10"}`}></div>
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl border ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}>
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
