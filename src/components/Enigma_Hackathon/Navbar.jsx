"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "prizes", label: "Prizes" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect-strong">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-24 h-24 bg-white/0 rounded-lg flex items-center justify-center">
              {/* <span className="text-[#0b2a1c] font-cinzel font-bold text-xl">
                L
              </span> */}
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
            <a href="https://mstats.dare2compete.com/CL0/https:%2F%2Funstop.com%2Fhackathons%2Fenigma-40-a-web-development-hackathon-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1545848%3Futm_campaign=site-emails%26utm_medium=d2c-automated%26utm_source=opportunity-approved/1/01090198dd19b8a9-edf860dd-c965-4da4-a47d-3f69dd06d7c5-000000/iPHU9-7jvWhUJcuV8-WXfxYaAcsMB9TwHmafn2UjLjo=221" target="_blank" className="bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-102 neon-border cursor-pointer">
              Register Now
            </a>
            {/* <img className="h-40 w-40" src="/SIES_GST_WHITE_LOGO.png" alt="" /> */}
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
      </motion.div>

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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
