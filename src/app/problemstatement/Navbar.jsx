"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const handleProblemStatementClick = () => {
    router.push("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect-strong">
      <div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-16">
          {/* Back to Home Button */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-24 h-24 bg-white/0 rounded-lg flex items-center justify-center">
              <img src="/csilogo.png" alt="CSI Logo" />
            </div>
            <span
              style={{ fontFamily: "Mestizo" }}
              className="text-3xl text-gradient animate-glow"
            >
              Enigma 4.0
            </span>
          </Link>

          {/* Desktop Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleProblemStatementClick}
              className="border border-[#ff9900] text-white hover:bg-[#ff9900] px-4 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Back to home
            </button>
            {/* <a
              href="https://mstats.dare2compete.com/CL0/https:%2F%2Funstop.com%2Fhackathons%2Fenigma-40-a-web-development-hackathon-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1545848%3Futm_campaign=site-emails%26utm_medium=d2c-automated%26utm_source=opportunity-approved/1/01090198dd19b8a9-edf860dd-c965-4da4-a47d-3f69dd06d7c5-000000/iPHU9-7jvWhUJcuV8-WXfxYaAcsMB9TwHmafn2UjLjo=221"
              target="_blank"
              className="bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-102 neon-border"
            >
              Register Now
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
