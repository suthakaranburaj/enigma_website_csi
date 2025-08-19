"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const PrizeHighlight = () => {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti animation on component mount
    setConfetti(true);
    const timer = setTimeout(() => setConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 relative flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a2a1e]/40 to-transparent"></div>

      {/* Floating particles */}
      {confetti && (
        <>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float"
              style={{
                backgroundColor: ["#ffcc33", "#ff3333", "#2aff6d", "#33ccff"][
                  i % 4
                ],
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                opacity: 0.7,
                top: "100%",
              }}
            />
          ))}
        </>
      )}

      {/* Title */}
      <div className="relative z-10 mb-4">
        <h2 className="font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 mb-1">
          Prize Pool
        </h2>
        {/* <p className="text-lg text-[#b6c8b8] max-w-md mx-auto">
          Win this magnificent trophy and claim your place among the champions
        </p> */}
      </div>

      {/* Trophy Image with enhanced effects */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-8">
        <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
          {/* Outer glow */}
          <div className="absolute w-full h-full bg-gradient-to-br from-green-400/30 to-green-500/20 rounded-full blur-xl animate-pulse"></div>

          {/* Middle glow */}
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-br from-green-400/20 to-green-500/10 rounded-full blur-md"></div>

          {/* Trophy container */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <Image
              src="/trophy.png"
              alt="Trophy"
              width={320}
              height={320}
              className="drop-shadow-[0_0_15px_rgba(255,204,51,0.6)]"
            />

            {/* Shine effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 animate-shine"></div> */}
          </div>
        </div>

        {/* Prize Highlight Card */}
        <div className="mt-8 px-10 py-4 rounded-2xl glass-effect border-2 border-yellow-500/30 shadow-lg">
          <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
            ₹20,000
          </div>
          <div className="text-[#b6c8b8] mt-2 text-sm">Cash Prize</div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute left-1/4 top-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-lg"></div>
      <div className="absolute right-1/4 bottom-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-lg"></div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-float {
          animation: float 3s linear forwards;
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PrizeHighlight;
