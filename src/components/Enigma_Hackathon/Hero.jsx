"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HackathonAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const codeLines = [
    "function solve() {",
    "  const ideas = [];",
    "  while(hacking) {",
    "    ideas.push(✨);",
    "  }",
    "  return innovation;",
    "}",
  ];

  const binaryDigits = Array.from({ length: 50 }, () =>
    Math.random() > 0.5 ? "1" : "0"
  );

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central Holographic Terminal */}
      <div className="relative rounded-2xl p-8 neon-border backdrop-blur-sm">
        <div className="w-80 h-64 relative overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <div className="text-[#2aff6d] text-sm font-mono ml-2">
              enigma_terminal.jsx
            </div>
          </div>

          {/* Code Animation */}
          <div className="space-y-2">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: animationPhase >= 1 ? 1 : 0,
                  x: animationPhase >= 1 ? 0 : -20,
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 12,
                }}
                className="font-mono text-sm"
              >
                <span className="text-[#c6a567]">
                  {"  ".repeat(line.split("  ").length - 1)}
                </span>
                <span className="text-[#2aff6d]">{line.trim()}</span>
              </motion.div>
            ))}
          </div>

          {/* Typing Cursor */}
          <div className="flex items-center mt-2">
            <span className="text-[#2aff6d] font-mono text-sm">
              $ ./run_hackathon.sh
            </span>
            <div className="w-2 h-5 bg-[#2aff6d] ml-1 animate-pulse"></div>
          </div>
        </div>

        {/* Floating Binary Rain */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {binaryDigits.map((digit, index) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "linear",
              }}
              className="absolute text-[#2aff6d]/30 font-mono text-xs"
              style={{
                left: `${(index * 7) % 100}%`,
              }}
            >
              {digit}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orbiting Code Blocks */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {["HTML", "CSS", "JS", "React", "Node", "Python"].map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute w-16 h-16 glass-effect rounded-lg flex items-center justify-center neon-border"
            animate={{
              x: [
                150 *
                  Math.cos(
                    ((index * 60 + animationPhase * 30) * Math.PI) / 180
                  ),
                150 *
                  Math.cos(
                    ((index * 60 + animationPhase * 30 + 180) * Math.PI) / 180
                  ),
              ],
              y: [
                150 *
                  Math.sin(
                    ((index * 60 + animationPhase * 30) * Math.PI) / 180
                  ),
                150 *
                  Math.sin(
                    ((index * 60 + animationPhase * 30 + 180) * Math.PI) / 180
                  ),
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-32px",
              marginTop: "-32px",
            }}
          >
            <span className="text-[#ffcc33] font-bold text-xs">{tech}</span>
          </motion.div>
        ))}
      </div> */}

      {/* Neural Network Connections */}
      {/* <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.line
            key={i}
            x1="50%"
            y1="50%"
            x2={`${50 + 30 * Math.cos((i * 45 * Math.PI) / 180)}%`}
            y2={`${50 + 30 * Math.sin((i * 45 * Math.PI) / 180)}%`}
            stroke="#2aff6d"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg> */}

      {/* Floating Innovation Sparks */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-[#ffcc33] rounded-full shadow-lg shadow-[#ffcc33]/50"
            animate={{
              x: [
                Math.random() * 400,
                Math.random() * 400,
                Math.random() * 400,
              ],
              y: [
                Math.random() * 300,
                Math.random() * 300,
                Math.random() * 300,
              ],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </div> */}

      {/* Data Flow Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-1 bg-gradient-to-r from-transparent via-[#2aff6d] to-transparent"
            style={{
              width: "200px",
              top: `${25 + index * 15}%`,
            }}
            animate={{
              x: [-200, 500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.7,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hologram Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2aff6d]/5 to-transparent pointer-events-none animate-pulse"></div>

      {/* Scan Lines Effect */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-0.5 bg-[#2aff6d]/30"
          animate={{ y: [0, 384, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div> */}
    </div>
  );
};

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Countdown state
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [dayProgress, setDayProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const startDate = new Date("2025-08-20T00:00:00");
    const endDate = new Date("2025-09-20T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }

      // Progress calculation
      const totalDuration = endDate - startDate;
      const elapsed = now - startDate;
      const progress = Math.min((elapsed / totalDuration) * 100, 100);
      setDayProgress(progress);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-8xl mx-auto lg:ml-10 px-1 sm:px-6 lg:px-0 lg:pl-8 pt-60 sm:pt-32 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0">
            {/* Main Title */}
            <div className="mb-12">
              <h1 style={{ fontFamily: "Mestizo" }} className="hero-title mb-6">
                <span className="text-gradient-glow animate-glow block">
                  Enigma 4.0
                </span>
              </h1>
              <div className="flex justify-center lg:justify-start ml-2 sm:-ml-8">
                <img className="h-16 sm:h-32" src="/Choronix.png" alt="" />
              </div>
              <div className="relative inline-block">
                <p className="text-2xl  md:text-3xl text-white font-medium animate-glow">
                  One Event.  Realities.
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#2aff6d]/20 to-[#c6a567]/20 rounded-lg blur-xl -z-10 animate-pulse"></div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-16 max-w-2xl mx-auto lg:mx-0">
              <div className="grid grid-cols-4 gap-4">
                {/* Days */}
                <div className="relative glass-effect rounded-4xl p-4 neon-border overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-[#2aff6d]/10 transition-all duration-1000"
                    style={{
                      height: `${dayProgress}%`,
                    }}
                  ></div>
                  <div className="relative text-3xl md:text-5xl font-bold text-[rgb(42,255,109)] mb-2">
                    {days.toString().padStart(2, "0")}
                  </div>
                  <div className="relative text-white text-sm md:text-base">
                    Days
                  </div>
                </div>

                {/* Hours */}
                <div className="relative glass-effect rounded-4xl p-4 neon-border overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-[#2aff6d]/10 transition-all duration-1000"
                    style={{ height: `${((24 - hours) / 24) * 100}%` }}
                  ></div>
                  <div className="relative text-3xl md:text-5xl font-bold text-[#2aff6d] mb-2">
                    {hours.toString().padStart(2, "0")}
                  </div>
                  <div className="relative text-white text-sm md:text-base">
                    Hours
                  </div>
                </div>

                {/* Minutes */}
                <div className="relative glass-effect rounded-4xl p-4 neon-border overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-[#2aff6d]/10 transition-all duration-1000"
                    style={{ height: `${((60 - minutes) / 60) * 100}%` }}
                  ></div>
                  <div className="relative text-3xl md:text-5xl font-bold text-[#2aff6d] mb-2">
                    {minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="relative text-white text-sm md:text-base">
                    Minutes
                  </div>
                </div>

                {/* Seconds */}
                <div className="relative glass-effect rounded-4xl p-4 neon-border overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-[#2aff6d]/10 transition-all duration-1000"
                    style={{ height: `${((60 - seconds) / 60) * 100}%` }}
                  ></div>
                  <div className="relative text-3xl md:text-5xl font-bold text-[#2aff6d] mb-2">
                    {seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="relative text-white text-sm md:text-base">
                    Seconds
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-102 neon-border">
                <a href="https://mstats.dare2compete.com/CL0/https:%2F%2Funstop.com%2Fhackathons%2Fenigma-40-a-web-development-hackathon-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1545848%3Futm_campaign=site-emails%26utm_medium=d2c-automated%26utm_source=opportunity-approved/1/01090198dd19b8a9-edf860dd-c965-4da4-a47d-3f69dd06d7c5-000000/iPHU9-7jvWhUJcuV8-WXfxYaAcsMB9TwHmafn2UjLjo=221" target="_blank" className="relative z-10 cursor-pointer">Register</a>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc33] to-[#8b5a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              <button className="group relative border-2 border-[#2aff6d] text-[#2aff6d] hover:bg-[#2aff6d] hover:text-[#0b2a1c] px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-102 neon-border overflow-hidden">
                <span
                  onClick={() => scrollToSection("timeline")}
                  className="relative z-10 cursor-pointer"
                >
                  View Timeline
                </span>
                <div className="absolute inset-0 bg-[#2aff6d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Right Animation - NEW HACKATHON ANIMATION */}
          <div className="lg:w-1/2 flex justify-center">
            <HackathonAnimation />
          </div>
        </div>
      </motion.div>

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
