"use client"
import React, { useState, useEffect, useRef } from "react";

const LokiHackathon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Matrix rain effect
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext("2d");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   // Matrix characters
  //   const matrix = "LOKI0123456789$%#@!*^=+;:TVAMCUPQRSTUVWXYZ";
  //   const fontSize = 14;
  //   const columns = canvas.width / fontSize;

  //   // Create drops for each column
  //   const drops = [];
  //   for (let i = 0; i < columns; i++) {
  //     drops[i] = Math.floor((Math.random() * canvas.height) / fontSize);
  //   }

  //   // Draw function
  //   const draw = () => {
  //     ctx.fillStyle = "rgba(11, 42, 28, 0.04)";
  //     ctx.fillRect(0, 0, canvas.width, canvas.height);

  //     ctx.font = `${fontSize}px monospace`;
  //     ctx.fillStyle = "#2aff6d";

  //     for (let i = 0; i < drops.length; i++) {
  //       const text = matrix.charAt(Math.floor(Math.random() * matrix.length));
  //       ctx.fillText(text, i * fontSize, drops[i] * fontSize);

  //       if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
  //         drops[i] = 0;
  //       }
  //       drops[i]++;
  //     }
  //   };

  //   const interval = setInterval(draw, 35);
  //   return () => clearInterval(interval);
  // }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/loki.jpeg')`,
          filter: "brightness(0.9) contrast(1.2)",
        }}
      />

      {/* Matrix Rain Overlay */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-30 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Overlay to ensure content visibility */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-[#0b2a1c]/90 via-[#0b2a1c]/70 to-[#0b2a1c]/90" />

      {/* TVA Pattern Overlay */}
      {/* <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(19, 53, 35, 0.6) 2px, transparent 2px),
             radial-gradient(circle at 75% 75%, rgba(19, 53, 35, 0.4) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      /> */}

      {/* Main Content */}
      <div className="relative z-10 text-white font-sans overflow-x-hidden">
        {/* Custom Styles */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

          .font-cinzel {
            font-family: "Cinzel", serif;
          }
          .font-inter {
            font-family: "Inter", sans-serif;
          }

          .bg-gradient-radial {
            background: radial-gradient(
              circle at center,
              rgba(19, 53, 35, 0.8) 0%,
              rgba(11, 42, 28, 0.9) 70%
            );
          }

          .text-gradient {
            background: linear-gradient(45deg, #2aff6d, #c6a567, #ffcc33);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .text-gradient-glow {
            background: linear-gradient(45deg, #2aff6d, #c6a567, #ffcc33);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 20px #2aff6d);
          }

          .glass-effect {
            background: rgba(19, 53, 35, 0.4);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(42, 255, 109, 0.3);
            box-shadow: 0 8px 32px rgba(42, 255, 109, 0.1);
          }

          .glass-effect-strong {
            background: rgba(11, 42, 28, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(42, 255, 109, 0.4);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          }

          .tva-pattern {
            background-image: radial-gradient(
                circle at 25% 25%,
                rgba(19, 53, 35, 0.6) 2px,
                transparent 2px
              ),
              radial-gradient(
                circle at 75% 75%,
                rgba(19, 53, 35, 0.4) 1px,
                transparent 1px
              );
            background-size: 100px 100px;
          }

          .shimmer-bg {
            background: linear-gradient(
              90deg,
              transparent,
              rgba(42, 255, 109, 0.6),
              transparent
            );
            background-size: 200% 100%;
            animation: shimmer 3s linear infinite;
          }

          .particle {
            position: absolute;
            background: #2aff6d;
            border-radius: 50%;
            pointer-events: none;
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes floatReverse {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
            }
          }

          @keyframes glow {
            0% {
              text-shadow: 0 0 5px #2aff6d, 0 0 10px #2aff6d, 0 0 15px #2aff6d;
            }
            100% {
              text-shadow: 0 0 10px #2aff6d, 0 0 20px #2aff6d, 0 0 30px #2aff6d,
                0 0 40px #2aff6d;
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes matrix {
            0% {
              transform: translateY(-100vh);
            }
            100% {
              transform: translateY(100vh);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: floatReverse 8s ease-in-out infinite;
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
          }
          .animate-shimmer {
            animation: shimmer 3s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-matrix {
            animation: matrix 20s linear infinite;
          }
          .animate-rotate-slow {
            animation: rotate 30s linear infinite;
          }

          .hero-title {
            font-size: clamp(3rem, 15vw, 8rem);
            line-height: 0.9;
          }

          .neon-border {
            box-shadow: 0 0 20px rgba(42, 255, 109, 0.3),
              inset 0 0 20px rgba(42, 255, 109, 0.1);
          }

          .parallax-layer {
            transform: translateZ(0);
          }

          .tva-badge {
            background: linear-gradient(145deg, #133523, #0b2a1c);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
              inset 0 0 15px rgba(42, 255, 109, 0.3);
          }

          .timeline-icon {
            filter: drop-shadow(0 0 10px rgba(42, 255, 109, 0.7));
          }

          .prize-card {
            perspective: 1000px;
            transform-style: preserve-3d;
          }

          .prize-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .prize-card:hover .prize-card-inner {
            transform: rotateY(10deg) rotateX(5deg);
          }
        `}</style>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect-strong">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#2aff6d] to-[#c6a567] rounded-lg flex items-center justify-center neon-border">
                  <span className="text-[#0b2a1c] font-cinzel font-bold text-xl">
                    L
                  </span>
                </div>
                <span className="font-cinzel font-bold text-xl text-gradient animate-glow">
                  LOKI HACKATHON
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-[#2aff6d] transition-all duration-300 font-medium relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2aff6d] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#2aff6d] transition-all duration-300 font-medium relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2aff6d] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("timeline")}
                  className="hover:text-[#2aff6d] transition-all duration-300 font-medium relative group"
                >
                  Timeline
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2aff6d] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => scrollToSection("prizes")}
                  className="hover:text-[#2aff6d] transition-all duration-300 font-medium relative group"
                >
                  Prizes
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2aff6d] group-hover:w-full transition-all duration-300"></span>
                </button>
                <button className="bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 neon-border">
                  Register Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-[#2aff6d] transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass-effect-strong">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    scrollToSection("home");
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium hover:text-[#2aff6d] transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about");
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium hover:text-[#2aff6d] transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    scrollToSection("timeline");
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium hover:text-[#2aff6d] transition-colors duration-300"
                >
                  Timeline
                </button>
                <button
                  onClick={() => {
                    scrollToSection("prizes");
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium hover:text-[#2aff6d] transition-colors duration-300"
                >
                  Prizes
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
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
            <div className="absolute top-20 left-10 w-3 h-3 bg-[#2aff6d] rounded-full animate-pulse-slow shadow-lg shadow-[#2aff6d]/50"></div>
            <div className="absolute top-40 right-20 w-4 h-4 bg-[#c6a567] rounded-full animate-pulse opacity-60 shadow-lg shadow-[#c6a567]/50"></div>
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#3399ff] rounded-full animate-ping shadow-lg shadow-[#3399ff]/50"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#ff3333] rounded-full animate-pulse-slow opacity-40 shadow-lg shadow-[#ff3333]/50"></div>
            <div className="absolute top-60 left-1/2 w-2 h-2 bg-[#ffcc33] rounded-full animate-pulse opacity-70 shadow-lg shadow-[#ffcc33]/50"></div>
            <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-[#2aff6d] rounded-full animate-ping opacity-50 shadow-lg shadow-[#2aff6d]/50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="text-center">
              {/* Main Title with Enhanced Effects */}
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

              {/* Enhanced Subtitle */}
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

              {/* Enhanced Event Details Cards */}
              <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                <div className="glass-effect rounded-2xl p-8 transform hover:scale-110 transition-all duration-500 neon-border group">
                  <div className="text-[#2aff6d] text-5xl font-bold mb-4 animate-glow group-hover:scale-110 transition-transform duration-300">
                    48
                  </div>
                  <div className="text-[#b6c8b8] text-lg">Hours of Chaos</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2aff6d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="glass-effect rounded-2xl p-8 transform hover:scale-110 transition-all duration-500 neon-border group">
                  <div className="text-[#c6a567] text-5xl font-bold mb-4 animate-pulse group-hover:scale-110 transition-transform duration-300">
                    ∞
                  </div>
                  <div className="text-[#b6c8b8] text-lg">Possibilities</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#c6a567]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="glass-effect rounded-2xl p-8 transform hover:scale-110 transition-all duration-500 neon-border group">
                  <div className="text-[#3399ff] text-5xl font-bold mb-4 animate-glow group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div className="text-[#b6c8b8] text-lg">Sacred Timeline</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3399ff]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-110 neon-border">
                  <span className="relative z-10">
                    Join the Sacred Timeline
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc33] to-[#8b5a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button className="group relative border-2 border-[#2aff6d] text-[#2aff6d] hover:bg-[#2aff6d] hover:text-[#0b2a1c] px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-110 neon-border overflow-hidden">
                  <span className="relative z-10">View Variants</span>
                  <div className="absolute inset-0 bg-[#2aff6d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Elements */}
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

          {/* Additional decorative elements */}
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-[#3399ff]/40 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-12 h-12 bg-gradient-to-br from-[#ff3333]/20 to-transparent rotate-45 animate-pulse-slow"></div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#133523]/50 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
                The Variant Event
              </h2>
              <p className="text-xl md:text-2xl text-[#b6c8b8] max-w-4xl mx-auto leading-relaxed">
                Welcome to a hackathon unlike any other. Where chaos meets
                creativity, and every line of code has the potential to branch
                the sacred timeline.
              </p>
            </div>

            {/* About Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="glass-effect-strong rounded-2xl p-10 neon-border transform hover:scale-105 transition-all duration-500">
                  <h3 className="font-cinzel text-3xl font-semibold text-[#2aff6d] mb-6 animate-glow">
                    What Awaits You
                  </h3>
                  <p className="text-[#b6c8b8] mb-8 leading-relaxed text-lg">
                    Step into the Time Variance Authority and prove your worth
                    as a developer. This isn't just another hackathon – it's a
                    test of your ability to create something truly extraordinary
                    under pressure.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-3 h-3 bg-[#2aff6d] rounded-full shadow-lg shadow-[#2aff6d]/50"></div>
                      <span className="text-[#b6c8b8] text-lg">
                        48 hours of intense coding
                      </span>
                    </li>
                    <li className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-3 h-3 bg-[#c6a567] rounded-full shadow-lg shadow-[#c6a567]/50"></div>
                      <span className="text-[#b6c8b8] text-lg">
                        Multiple challenge tracks
                      </span>
                    </li>
                    <li className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-3 h-3 bg-[#3399ff] rounded-full shadow-lg shadow-[#3399ff]/50"></div>
                      <span className="text-[#b6c8b8] text-lg">
                        Expert mentorship
                      </span>
                    </li>
                    <li className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-3 h-3 bg-[#ff3333] rounded-full shadow-lg shadow-[#ff3333]/50"></div>
                      <span className="text-[#b6c8b8] text-lg">
                        Glorious prizes
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="glass-effect-strong rounded-2xl p-10 neon-border transform hover:scale-105 transition-all duration-500">
                  <h3 className="font-cinzel text-3xl font-semibold text-[#c6a567] mb-6 animate-pulse">
                    The TVA Mandate
                  </h3>
                  <p className="text-[#b6c8b8] leading-relaxed text-lg">
                    "The Time-Keepers have created us and tasked us with the
                    sacred duty of preserving the Sacred Timeline." Your
                    mission: Build innovative solutions that push the boundaries
                    of what's possible.
                  </p>
                </div>
              </div>

              {/* Right Column - Stats & Features */}
              <div className="space-y-8">
                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-effect-strong rounded-2xl p-8 text-center border-2 border-[#2aff6d]/30 neon-border transform hover:scale-110 transition-all duration-500 group">
                    <div className="text-4xl font-bold text-[#2aff6d] mb-3 animate-glow group-hover:scale-110 transition-transform duration-300">
                      500+
                    </div>
                    <div className="text-[#b6c8b8]">Participants</div>
                  </div>
                  <div className="glass-effect-strong rounded-2xl p-8 text-center border-2 border-[#c6a567]/30 neon-border transform hover:scale-110 transition-all duration-500 group">
                    <div className="text-4xl font-bold text-[#c6a567] mb-3 animate-pulse group-hover:scale-110 transition-transform duration-300">
                      50+
                    </div>
                    <div className="text-[#b6c8b8]">Teams</div>
                  </div>
                  <div className="glass-effect-strong rounded-2xl p-8 text-center border-2 border-[#3399ff]/30 neon-border transform hover:scale-110 transition-all duration-500 group">
                    <div className="text-4xl font-bold text-[#3399ff] mb-3 animate-glow group-hover:scale-110 transition-transform duration-300">
                      10+
                    </div>
                    <div className="text-[#b6c8b8]">Mentors</div>
                  </div>
                  <div className="glass-effect-strong rounded-2xl p-8 text-center border-2 border-[#ff3333]/30 neon-border transform hover:scale-110 transition-all duration-500 group">
                    <div className="text-4xl font-bold text-[#ff3333] mb-3 animate-pulse group-hover:scale-110 transition-transform duration-300">
                      $50K
                    </div>
                    <div className="text-[#b6c8b8]">In Prizes</div>
                  </div>
                </div>

                {/* Enhanced Feature Cards */}
                <div className="space-y-6">
                  <div className="glass-effect-strong rounded-2xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-500 neon-border group">
                    <h4 className="font-semibold text-[#2aff6d] mb-3 text-xl animate-glow">
                      Innovation Tracks
                    </h4>
                    <p className="text-[#b6c8b8] group-hover:text-white transition-colors duration-300">
                      AI/ML, Web3, Mobile, and Open Innovation categories
                    </p>
                  </div>
                  <div className="glass-effect-strong rounded-2xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 neon-border group">
                    <h4 className="font-semibold text-[#c6a567] mb-3 text-xl animate-pulse">
                      24/7 Support
                    </h4>
                    <p className="text-[#b6c8b8] group-hover:text-white transition-colors duration-300">
                      Round-the-clock mentorship and technical assistance
                    </p>
                  </div>
                  <div className="glass-effect-strong rounded-2xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-500 neon-border group">
                    <h4 className="font-semibold text-[#3399ff] mb-3 text-xl animate-glow">
                      Networking
                    </h4>
                    <p className="text-[#b6c8b8] group-hover:text-white transition-colors duration-300">
                      Connect with industry leaders and fellow developers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="absolute top-10 right-10 w-40 h-40 border-2 border-[#2aff6d]/20 rotate-45 animate-pulse-slow neon-border"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-[#c6a567]/20 rotate-12 animate-rotate-slow"></div>
          <div className="absolute top-1/2 left-5 w-6 h-6 bg-[#3399ff]/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-5 w-8 h-8 bg-[#ff3333]/20 rotate-45 animate-pulse-slow"></div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b2a1c]/80 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
                Sacred Timeline
              </h2>
              <p className="text-xl text-[#b6c8b8] max-w-3xl mx-auto">
                Follow the predetermined path to hackathon glory
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2aff6d] via-[#c6a567] to-[#2aff6d] rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* Registration */}
                <div className="flex items-center relative">
                  <div className="flex-1 pr-8 text-right">
                    <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#2aff6d] mb-4 animate-glow">
                        Registration Opens
                      </h3>
                      <p className="text-[#b6c8b8] mb-2">December 15, 2024</p>
                      <p className="text-sm text-[#b6c8b8]/80">
                        Secure your spot in the multiverse
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border">
                    <svg
                      className="w-6 h-6 text-[#2aff6d] timeline-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Kickoff */}
                <div className="flex items-center relative">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border">
                    <svg
                      className="w-6 h-6 text-[#c6a567] timeline-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#c6a567] mb-4 animate-pulse">
                        Hackathon Begins
                      </h3>
                      <p className="text-[#b6c8b8] mb-2">
                        January 10, 2025 - 6:00 PM
                      </p>
                      <p className="text-sm text-[#b6c8b8]/80">
                        The chaos begins, variants assemble
                      </p>
                    </div>
                  </div>
                </div>

                {/* Midnight Check */}
                <div className="flex items-center relative">
                  <div className="flex-1 pr-8 text-right">
                    <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#3399ff] mb-4 animate-glow">
                        Midnight Checkpoint
                      </h3>
                      <p className="text-[#b6c8b8] mb-2">
                        January 11, 2025 - 12:00 AM
                      </p>
                      <p className="text-sm text-[#b6c8b8]/80">
                        Progress review and mentorship
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border">
                    <svg
                      className="w-6 h-6 text-[#3399ff] timeline-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>

                {/* Final Submissions */}
                <div className="flex items-center relative">
                  <div className="flex-1 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border">
                    <svg
                      className="w-6 h-6 text-[#ff3333] timeline-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 pl-8">
                    <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#ff3333] mb-4 animate-glow">
                        Submissions Close
                      </h3>
                      <p className="text-[#b6c8b8] mb-2">
                        January 12, 2025 - 6:00 PM
                      </p>
                      <p className="text-sm text-[#b6c8b8]/80">
                        Time runs out, destiny awaits
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="flex items-center relative">
                  <div className="flex-1 pr-8 text-right">
                    <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-gradient mb-4 animate-glow">
                        Glorious Purpose Achieved
                      </h3>
                      <p className="text-[#b6c8b8] mb-2">
                        January 13, 2025 - 8:00 PM
                      </p>
                      <p className="text-sm text-[#b6c8b8]/80">
                        Winners announced, legends born
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border animate-glow">
                    <svg
                      className="w-8 h-8 text-gradient"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#133523]/60 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
                Glorious Rewards
              </h2>
              <p className="text-xl text-[#b6c8b8] max-w-3xl mx-auto">
                Claim your place among the worthy with these magnificent prizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* First Place */}
              <div className="relative group prize-card">
                <div className="prize-card-inner glass-effect-strong rounded-3xl p-10 text-center neon-border">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#ffcc33] to-[#c6a567] text-[#0b2a1c] px-6 py-2 rounded-full font-bold text-sm animate-pulse">
                      FIRST PLACE
                    </div>
                  </div>
                  <div className="mt-8 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#ffcc33] to-[#c6a567] rounded-full mx-auto flex items-center justify-center neon-border mb-6 animate-glow">
                      <span className="text-[#0b2a1c] text-4xl font-bold">
                        👑
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-[#ffcc33] mb-4 animate-glow">
                      $20,000
                    </h3>
                    <h4 className="text-xl font-semibold text-[#c6a567] mb-6">
                      The Throne
                    </h4>
                  </div>
                  <ul className="text-[#b6c8b8] space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#ffcc33] rounded-full"></div>
                      <span>Cash Prize: $20,000</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c6a567] rounded-full"></div>
                      <span>Premium Tech Package</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2aff6d] rounded-full"></div>
                      <span>Mentorship Program</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#3399ff] rounded-full"></div>
                      <span>VIP Conference Pass</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Place */}
              <div className="relative group prize-card">
                <div className="prize-card-inner glass-effect-strong rounded-3xl p-10 text-center neon-border">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#c6a567] to-[#2aff6d] text-[#0b2a1c] px-6 py-2 rounded-full font-bold text-sm animate-pulse">
                      SECOND PLACE
                    </div>
                  </div>
                  <div className="mt-8 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#c6a567] to-[#2aff6d] rounded-full mx-auto flex items-center justify-center neon-border mb-6 animate-pulse">
                      <span className="text-[#0b2a1c] text-4xl font-bold">
                        🥈
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-[#c6a567] mb-4 animate-pulse">
                      $12,000
                    </h3>
                    <h4 className="text-xl font-semibold text-[#2aff6d] mb-6">
                      The Champion
                    </h4>
                  </div>
                  <ul className="text-[#b6c8b8] space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c6a567] rounded-full"></div>
                      <span>Cash Prize: $12,000</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2aff6d] rounded-full"></div>
                      <span>Tech Bundle</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#3399ff] rounded-full"></div>
                      <span>Career Guidance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#ff3333] rounded-full"></div>
                      <span>Conference Ticket</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Third Place */}
              <div className="relative group prize-card">
                <div className="prize-card-inner glass-effect-strong rounded-3xl p-10 text-center neon-border">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#2aff6d] to-[#3399ff] text-[#0b2a1c] px-6 py-2 rounded-full font-bold text-sm animate-pulse">
                      THIRD PLACE
                    </div>
                  </div>
                  <div className="mt-8 mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#2aff6d] to-[#3399ff] rounded-full mx-auto flex items-center justify-center neon-border mb-6 animate-glow">
                      <span className="text-[#0b2a1c] text-4xl font-bold">
                        🥉
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold text-[#2aff6d] mb-4 animate-glow">
                      $8,000
                    </h3>
                    <h4 className="text-xl font-semibold text-[#3399ff] mb-6">
                      The Worthy
                    </h4>
                  </div>
                  <ul className="text-[#b6c8b8] space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2aff6d] rounded-full"></div>
                      <span>Cash Prize: $8,000</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#3399ff] rounded-full"></div>
                      <span>Developer Kit</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c6a567] rounded-full"></div>
                      <span>Online Courses</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#ff3333] rounded-full"></div>
                      <span>Networking Events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Prizes */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#ff3333] mb-4 animate-glow">
                  Best Innovation
                </h3>
                <p className="text-[#b6c8b8] mb-4">
                  For the most creative and groundbreaking solution
                </p>
                <div className="text-3xl font-bold text-[#ff3333]">
                  $5,000 + Premium Mentorship
                </div>
              </div>
              <div className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold text-[#ffcc33] mb-4 animate-pulse">
                  People's Choice
                </h3>
                <p className="text-[#b6c8b8] mb-4">
                  Voted by the community for the most impressive demo
                </p>
                <div className="text-3xl font-bold text-[#ffcc33]">
                  $3,000 + Featured Showcase
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a1c] to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <div className="font-cinzel text-4xl font-bold text-gradient mb-6 animate-glow">
                LOKI HACKATHON
              </div>
              <p className="text-[#b6c8b8] italic text-xl">
                "Glorious Purpose Awaits"
              </p>
            </div>

            <div className="flex justify-center space-x-12 mb-12">
              <a
                href="#"
                className="text-[#b6c8b8] hover:text-[#2aff6d] transition-all duration-300 transform hover:scale-110 text-lg"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-[#b6c8b8] hover:text-[#2aff6d] transition-all duration-300 transform hover:scale-110 text-lg"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-[#b6c8b8] hover:text-[#2aff6d] transition-all duration-300 transform hover:scale-110 text-lg"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-[#b6c8b8] hover:text-[#2aff6d] transition-all duration-300 transform hover:scale-110 text-lg"
              >
                Contact
              </a>
            </div>

            <div className="border-t border-[#133523] pt-8">
              <p className="text-[#b6c8b8]">
                © 2025 Loki Hackathon. All timelines reserved. | TVA Approved
                Event
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LokiHackathon;
