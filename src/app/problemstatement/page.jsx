"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Enigma_Hackathon/Layout";
import Navbar from "./Navbar";

const ProblemStatements = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedItems, setExpandedItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setExpandedItems([0]);
  }, []);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  // File mapping based on category and item index
  const getFileName = (categoryIndex, itemIndex) => {
    if (categoryIndex === 0) {
      // FinTech PS
      return itemIndex === 0 ? "Fintech_PS1.pdf" : "Fintech_PS2.pdf";
    } else {
      // Health Tech PS
      return itemIndex === 0 ? "HealthTech_PS1.pdf" : "HealthTech_PS2.pdf";
    }
  };

  const handleDownload = (categoryIndex, itemIndex) => {
    const fileName = getFileName(categoryIndex, itemIndex);
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const problemStatements = [
    {
      category: "FinTech PS",
      color: "#2aff6d",
      items: [
        {
          title: "CommunityFund – Micro-Donation & Impact Tracking Platform",
          problem:
            "People want to support local community projects but lack a trusted, transparent platform for micro-donations.",
          objective:
            "Create a hyper-local crowdfunding platform where users can donate small amounts to verified local initiatives and see real-time updates.",
          requirements: [
            "Integration with a payment processor API",
            "Robust system for project verification",
            "Dynamic visual dashboard for each project",
            "User profiles to track donation history",
          ],
        },
        {
          title: "TrustWise – Behavioral Finance & Community Learning Platform",
          problem:
            "Underserved populations often have access to digital financial tools but fail to use them effectively due to mistrust and lack of contextual education.",
          objective:
            "Build a trust-centric financial empowerment platform combining behavioral science and community wisdom.",
          requirements: [
            "Multi-platform support (Web, SMS, IVR)",
            "API-first design for integration with financial services",
            "Moderation system for community content",
            "Dashboard for tracking financial goals",
          ],
        },
      ],
    },
    {
      category: "Health Tech PS",
      color: "#c6a567",
      items: [
        {
          title:
            "MediGuide – AI-Powered Medication Intelligence & Adherence Platform",
          problem:
            "Misunderstanding prescriptions is a leading cause of medication non-adherence, resulting in preventable deaths.",
          objective:
            "Develop an intelligent platform that actively guides patients through their entire treatment journey.",
          requirements: [
            "Advanced NLP model for medical literature",
            "Integration with EHR APIs",
            "Secure backend for patient data",
            "Predictive analytics layer",
          ],
        },
        {
          title: "VitalCircle – Predictive Chronic Care Ecosystem",
          problem:
            "Current chronic disease management platforms are reactive data graveyards causing tracking fatigue for patients and alert fatigue for clinicians.",
          objective:
            "Create a predictive ecosystem that moves beyond tracking to actively co-manage chronic conditions.",
          requirements: [
            "Integration with EHR systems",
            "AI/ML models for predictive alerts",
            "Clinician web portal with prioritized actions",
            "Patient mobile app with minimal-input logging",
          ],
        },
      ],
    },
  ];

  // Flatten all problem statements for the table
  const allProblemStatements = problemStatements.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
      color: category.color,
    }))
  );

  return (
    <Layout>
      <Navbar />
      <section
        id="problem-statements"
        className="py-20 relative overflow-hidden min-h-screen"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#133523]/20 to-transparent"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-2 border-[#2aff6d]/20 rotate-45 animate-pulse-slow neon-border"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-[#c6a567]/20 rotate-12 animate-rotate-slow"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
              Problem Statements
            </h2>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Explore the challenges that will test your skills and creativity.
              Each problem statement is a broken thread of the Timeline. Restore
              them, and balance shall return.
            </p>
          </motion.div>

          {/* Category Selector */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect-strong rounded-2xl p-2 flex neon-border">
              {problemStatements.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-500 ${
                    activeCategory === index
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                  style={{
                    backgroundColor:
                      activeCategory === index
                        ? `${category.color}20`
                        : "transparent",
                    border:
                      activeCategory === index
                        ? `1px solid ${category.color}30`
                        : "1px solid transparent",
                  }}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Problem Statements Table */}
          <div className="glass-effect-strong rounded-2xl overflow-hidden neon-border mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr
                  className="text-left"
                  style={{
                    backgroundColor: `${problemStatements[activeCategory].color}20`,
                    borderBottom: `2px solid ${problemStatements[activeCategory].color}30`,
                  }}
                >
                  <th className="p-4 font-semibold text-lg">Title</th>
                  <th className="p-4 font-semibold text-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {problemStatements[activeCategory].items.map((item, index) => {
                  const isExpanded = expandedItems.includes(index);
                  return (
                    <React.Fragment key={index}>
                      <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="cursor-pointer group hover:bg-white/5 transition-colors"
                        onClick={() => toggleItem(index)}
                      >
                        <td className="p-4 border-t border-white/10 font-medium">
                          {item.title}
                        </td>
                        <td className="p-4 border-t border-white/10 text-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(activeCategory, index);
                            }}
                            className="px-4 py-2 rounded-lg font-medium transition-all duration-300 neon-border"
                            style={{
                              backgroundColor: `${problemStatements[activeCategory].color}20`,
                              borderColor:
                                problemStatements[activeCategory].color,
                              color: problemStatements[activeCategory].color,
                            }}
                          >
                            Download PS
                          </motion.button>
                        </td>
                      </motion.tr>

                      {/* Expanded row with full details */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.tr
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <td
                              colSpan={4}
                              className="p-4 border-t border-white/10 bg-black/20"
                            >
                              <div className="grid md:grid-cols-2 gap-6">
                                {/* ... (keep the existing expanded content) */}
                              </div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#8b5a2b] to-[#ffcc33] hover:from-[#ffcc33] hover:to-[#8b5a2b] text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-500 transform hover:scale-102 neon-border">
              <span className="relative z-10">Forms Link</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffcc33] to-[#8b5a2b] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProblemStatements;
