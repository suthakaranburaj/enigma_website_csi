"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const router = useRouter();

  // Initialize timer
  useEffect(() => {
    const now = new Date();
    const today = now.toDateString();
    const storedDate = localStorage.getItem("timerDate");
    const storedTime = localStorage.getItem("timerEnd");

    // Check if we have a stored timer for today
    if (storedDate === today && storedTime) {
      const remaining = Math.max(
        0,
        Math.floor((parseInt(storedTime) - now.getTime()) / 1000)
      );
      setTimeLeft(remaining);
    } else {
      // Set new timer for today (1 hour from now)
      const endTime = new Date();
      endTime.setHours(now.getHours() + 1);

      localStorage.setItem("timerDate", today);
      localStorage.setItem("timerEnd", endTime.getTime().toString());
      setTimeLeft(3600);
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleProblemStatementClick = () => {
    router.push("/problemstatement");
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "prizes", label: "Prizes" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect-strong">
      <div
        initial={{ opacity: 0, y: 0 }}
        // whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 bg-white/0 rounded-lg flex items-center justify-center">
              <img src="/csilogo.png" alt="" />
            </div>
            <span
              style={{ fontFamily: "Mestizo" }}
              className=" text-3xl text-gradient animate-glow"
            >
              Enigma 4.0
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#ff9900] transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9900] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <div className="flex items-center">
              <button
                onClick={handleProblemStatementClick}
                className="hover:text-[#ff9900] transition-all duration-300 font-medium relative group flex items-center"
              >
                Problem Statement
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9900] group-hover:w-full transition-all duration-300"></span>
              </button>
              {timeLeft > 0 && (
                <div className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {formatTime(timeLeft)}
                </div>
              )}
            </div>
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-base font-medium hover:text-[#ff9900] transition-colors duration-300 w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-between items-center px-3 py-2">
              <button
                onClick={handleProblemStatementClick}
                className="text-base font-medium hover:text-[#ff9900] transition-colors duration-300 text-left"
              >
                Problem Statement
              </button>
              {timeLeft > 0 && (
                <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                  {formatTime(timeLeft)}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
