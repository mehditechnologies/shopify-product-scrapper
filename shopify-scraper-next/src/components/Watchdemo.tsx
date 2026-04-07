"use client";

export default function Watchdemo() {
  const videoId = "KoHUl0aYG2Q";

  return (
    <section id="Watchdemo" className="relative max-w-7xl mx-auto mt-40 mb-30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <span className="inline-block px-7 py-3 bg-[#0C3B47] font-medium rounded-full mb-7">
            Watch Demo
          </span>
          <h1 className="text-4xl font-bold mb-5">
            Gathering data from <span className="text-[#018589]">popular products</span> 
            <span className="text-white text-4xl"> selling online is not easy</span>
          </h1>
          <p className="text-lg mb-5">You can spend days and even weeks searching for the right products, the right descriptions and images.</p>
          <p className="text-lg">Then, you need to worry about importing the products into your store and testing it. You are looking at many extra weeks and hard work.</p>
        </div>

        {/* Right: Video */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#018589]/20 to-secondary/20 rounded-2xl blur-xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
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
