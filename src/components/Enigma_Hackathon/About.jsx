"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  const features = [
    {
      title: "What Awaits You",
      color: "#2aff6d",
      description:
        "This isn’t just another hackathon. This is your trial by fire as a Variant:",
      items: [
        "Solve Branches (real-world problem statements)",
        "Collaborate with Fellow Variants (teamwork & innovation)",
        "Face TVA Challenges (mentorship, checkpoints, evaluations)",
        "Claim Glorious Rewards (cash prizes, recognition, goodies)",
      ],
    },
    {
      title: "The TVA Mandate",
      color: "#c6a567",
      description: `Variants, your mission is clear: resolve the branches. Each problem statement is a broken thread of the Timeline. Restore them, and balance shall return. Only through you can Chronix be stopped.
`,
    },
  ];

  const stats = [
    { value: "500+", label: "Participants", color: "#2aff6d" },
    { value: "50+", label: "Teams", color: "#c6a567" },
    // { value: "10+", label: "Mentors", color: "#3399ff" },
    // { value: "$50K", label: "In Prizes", color: "#ff3333" },
  ];
  const statss = [
    // { value: "500+", label: "Participants", color: "#2aff6d" },
    // { value: "50+", label: "Teams", color: "#c6a567" },
    // { value: "10+", label: "Mentors", color: "#3399ff" },
    { value: "₹25K", label: "In Prizes", color: "#ff3333" },
  ];

  const featureCards = [
    {
      title: "Innovation Tracks",
      color: "#2aff6d",
      description: "AI/ML, Web3, Mobile, and Open Innovation categories",
    },
    {
      title: "24/7 Support",
      color: "#c6a567",
      description: "Round-the-clock mentorship and technical assistance",
    },
    {
      title: "Networking",
      color: "#f27900 ",
      description: "Connect with industry leaders and fellow developers",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#133523]/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
            The Variant Event
          </h2>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Welcome to a hackathon unlike any other. Where chaos meets
            creativity, and every line of code has the potential to branch the
            sacred timeline.
          </p>
        </div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect-strong rounded-2xl p-10 neon-border transform hover:scale-102 transition-all duration-500"
                style={{ borderColor: feature.color }}
              >
                <h3
                  className="font-cinzel text-3xl font-semibold mb-6 animate-glow"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>
                <p className="text-white mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>
                {feature.items && (
                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <div
                          className="w-3 h-3 rounded-full shadow-lg"
                          style={{
                            backgroundColor: feature.color,
                            boxShadow: `${feature.color}50 0 0 8px`,
                          }}
                        ></div>
                        <span className="text-white text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect-strong rounded-2xl p-8 text-center neon-border transform hover:scale-102 transition-all duration-500 group"
                  style={{ borderColor: `${stat.color}30` }}
                >
                  <div
                    className="text-4xl font-bold mb-3 group-hover:scale-102 transition-transform duration-300"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {statss.map((stat, index) => (
                <div
                  key={index}
                  className="glass-effect-strong rounded-2xl p-8 text-center neon-border transform hover:scale-102 transition-all duration-500 group"
                  style={{ borderColor: `${stat.color}30` }}
                >
                  <div
                    className="text-4xl font-bold mb-3 group-hover:scale-102 transition-transform duration-300"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="glass-effect-strong rounded-2xl p-8 transform hover:scale-102 transition-all duration-500 neon-border group"
                  style={{
                    transform:
                      index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1",
                    borderColor: `${card.color}30`,
                  }}
                >
                  <h4
                    className="font-semibold mb-3 text-xl animate-glow"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h4>
                  <p className="text-white group-hover:text-white transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border-2 border-[#2aff6d]/20 rotate-45 animate-pulse-slow neon-border"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-[#c6a567]/20 rotate-12 animate-rotate-slow"></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-[#3399ff]/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-5 w-8 h-8 bg-[#ff3333]/20 rotate-45 animate-pulse-slow"></div>
    </section>
  );
};

export default About;
