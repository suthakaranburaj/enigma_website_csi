"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "48", label: "Hours of Chaos", color: "#2aff6d" },
    { value: "∞", label: "Possibilities", color: "#c6a567" },
    { value: "1", label: "Sacred Timeline", color: "#3399ff" },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-radial tva-pattern"></div>

      {/* Dynamic Particles */}
      <div className="absolute inset-0">
        {/* Matrix-like falling elements */}
        <div
          className="absolute top-0 left-1/4 w-px h-screen bg-gradient-to-b from-[#2aff6d] to-transparent animate-matrix opacity-30"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-0 left-2/4 w-px h-screen bg-gradient-to-b from-[#c6a567] to-transparent animate-matrix opacity-20"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-0 left-3/4 w-px h-screen bg-gradient-to-b from-[#3399ff] to-transparent animate-matrix opacity-25"
          style={{ animationDelay: "10s" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-[#ff9900] rounded-full animate-pulse-slow shadow-lg shadow-[#ff9900]/50"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-[#c6a567] rounded-full animate-pulse opacity-60 shadow-lg shadow-[#c6a567]/50"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#3399ff] rounded-full animate-ping shadow-lg shadow-[#3399ff]/50"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#ff3333] rounded-full animate-pulse-slow opacity-40 shadow-lg shadow-[#ff3333]/50"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-[#ffcc33] rounded-full animate-pulse opacity-70 shadow-lg shadow-[#ffcc33]/50"></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-[#2aff6d] rounded-full animate-ping opacity-50 shadow-lg shadow-[#2aff6d]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="font-cinzel hero-title font-bold mb-6">
              <span className="text-gradient-glow animate-glow block">
                LOKI
              </span>
            </h1>
            <h2 className="font-cinzel text-4xl md:text-6xl font-semibold text-[#c6a567] mb-8 animate-pulse">
              HACKATHON 2025
            </h2>
            <div className="relative inline-block">
              <p className="text-2xl md:text-3xl text-[#b6c8b8] font-medium italic animate-glow">
                "For All Time. Always."
              </p>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#2aff6d]/20 to-[#c6a567]/20 rounded-lg blur-xl -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-16">
            <div className="inline-block shimmer-bg animate-shimmer rounded-xl p-2">
              <div className="glass-effect rounded-xl px-10 py-6 neon-border">
                <p className="text-xl md:text-2xl text-gradient font-bold">
                  Code Your Glorious Purpose
                </p>
                <p className="text-sm md:text-base text-[#b6c8b8] mt-2 opacity-80">
                  Where chaos meets creativity
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 transform hover:scale-110 transition-all duration-500 neon-border group"
                style={{ borderColor: stat.color }}
              >
                <div
                  className={`text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[#b6c8b8] text-lg">{stat.label}</div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${stat.color}10, transparent)`,
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-110 neon-border">
              <span className="relative z-10">Join the Sacred Timeline</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc33] to-[#8b5a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group relative border-2 border-[#2aff6d] text-[#2aff6d] hover:bg-[#2aff6d] hover:text-[#0b2a1c] px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-110 neon-border overflow-hidden">
              <span className="relative z-10">View Variants</span>
              <div className="absolute inset-0 bg-[#2aff6d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div
        className="absolute bottom-20 left-20 animate-float parallax-layer"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="w-24 h-24 border-2 border-[#2aff6d]/50 rounded-full flex items-center justify-center neon-border animate-rotate-slow">
          <div className="w-12 h-12 bg-gradient-to-br from-[#2aff6d]/30 to-[#2aff6d]/10 rounded-full"></div>
        </div>
      </div>
      <div
        className="absolute bottom-40 right-20 animate-float-reverse parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          animationDelay: "-2s",
        }}
      >
        <div className="w-20 h-20 border-2 border-[#c6a567]/60 rotate-45 neon-border">
          <div className="w-full h-full border border-[#c6a567]/30 rotate-45 animate-pulse"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-[#3399ff]/40 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-gradient-to-br from-[#ff3333]/20 to-transparent rotate-45 animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
