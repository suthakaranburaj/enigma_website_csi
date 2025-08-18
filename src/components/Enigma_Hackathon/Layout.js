"use client";
import React, { useRef } from "react";
import MatrixRain from "./MatrixRain";

const Layout = ({ children }) => {
  const canvasRef = useRef(null);

  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/loki.jpg')`,
          filter: "brightness(1) contrast(1.3)",
        }}
      />

      {/* <MatrixRain canvasRef={canvasRef} /> */}

      {/* Reduced opacity overlay */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-[#0b2a1c]/70 via-[#0b2a1c]/50 to-[#0b2a1c]/70" />

      {/* TVA Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(19, 53, 35, 0.6) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(19, 53, 35, 0.4) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-white font-sans overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;
