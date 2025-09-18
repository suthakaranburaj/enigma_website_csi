"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AccordionPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const problemStatements = [
        {
            category: "FinTech PS",
            items: [
                {
                    title: "CommunityFund – Micro-Donation & Impact Tracking Platform",
                    problem: "People want to support local community projects but lack a trusted, transparent platform for micro-donations.",
                    objective: "Create a hyper-local crowdfunding platform where users can donate small amounts to verified local initiatives and see real-time updates.",
                    requirements: [
                        "Integration with a payment processor API",
                        "Robust system for project verification",
                        "Dynamic visual dashboard for each project",
                        "User profiles to track donation history"
                    ]
                },
                {
                    title: "TrustWise – Behavioral Finance & Community Learning Platform",
                    problem: "Underserved populations often have access to digital financial tools but fail to use them effectively due to mistrust and lack of contextual education.",
                    objective: "Build a trust-centric financial empowerment platform combining behavioral science and community wisdom.",
                    requirements: [
                        "Multi-platform support (Web, SMS, IVR)",
                        "API-first design for integration with financial services",
                        "Moderation system for community content",
                        "Dashboard for tracking financial goals"
                    ]
                }
            ]
        },
        {
            category: "Health Tech PS",
            items: [
                {
                    title: "MediGuide – AI-Powered Medication Intelligence & Adherence Platform",
                    problem: "Misunderstanding prescriptions is a leading cause of medication non-adherence, resulting in preventable deaths.",
                    objective: "Develop an intelligent platform that actively guides patients through their entire treatment journey.",
                    requirements: [
                        "Advanced NLP model for medical literature",
                        "Integration with EHR APIs",
                        "Secure backend for patient data",
                        "Predictive analytics layer"
                    ]
                },
                {
                    title: "VitalCircle – Predictive Chronic Care Ecosystem",
                    problem: "Current chronic disease management platforms are reactive data graveyards causing tracking fatigue for patients and alert fatigue for clinicians.",
                    objective: "Create a predictive ecosystem that moves beyond tracking to actively co-manage chronic conditions.",
                    requirements: [
                        "Integration with EHR systems",
                        "AI/ML models for predictive alerts",
                        "Clinician web portal with prioritized actions",
                        "Patient mobile app with minimal-input logging"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a1929] via-[#0a1a2a] to-[#0d2337] py-12 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"
                >
                    Problem Statements
                </motion.h1>

                {problemStatements.map((categoryData, categoryIndex) => (
                    <div key={categoryIndex} className="mb-12">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="text-2xl font-semibold mb-6 text-white border-l-4 border-cyan-400 pl-4"
                        >
                            {categoryData.category}
                        </motion.h2>

                        {categoryData.items.map((item, index) => {
                            const itemIndex = categoryIndex * 2 + index;
                            const isActive = activeIndex === itemIndex;

                            return (
                                <motion.div
                                    key={itemIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                                    className="mb-6 glass-effect-strong rounded-2xl overflow-hidden neon-border"
                                    style={{ borderColor: isActive ? 'rgba(102, 221, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)' }}
                                >
                                    <button
                                        onClick={() => toggleAccordion(itemIndex)}
                                        className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                                    >
                                        <h3 className="text-xl font-bold text-white pr-4">{item.title}</h3>
                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 w-8 h-8 bg-[#0b2a1c] rounded-full flex items-center justify-center"
                                        >
                                            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6">
                                                    <div className="mb-4">
                                                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Problem Statement:</h4>
                                                        <p className="text-white">{item.problem}</p>
                                                    </div>

                                                    <div className="mb-4">
                                                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Objective:</h4>
                                                        <p className="text-white">{item.objective}</p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-lg font-semibold text-cyan-300 mb-2">Requirements:</h4>
                                                        <ul className="list-disc list-inside text-white pl-2">
                                                            {item.requirements.map((req, reqIndex) => (
                                                                <li key={reqIndex} className="mb-1">{req}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mt-8"
                >
                    <button className="glass-effect-strong px-8 py-4 rounded-2xl text-white font-semibold transform hover:scale-105 transition-all duration-300 neon-border">
                        Go to FORMS
                    </button>
                </motion.div>
            </div>

            <style jsx global>{`
        :root {
          --gradient: linear-gradient(145deg, #66ddff, #44ffcc);
        }
        
        .glass-effect-strong {
          background: rgba(11, 42, 28, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 8px 32px 0 rgba(0, 30, 20, 0.37),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .neon-border {
          position: relative;
        }
        
        .neon-border::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(145deg, rgba(102, 221, 255, 0.3), rgba(68, 255, 204, 0.3));
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
        </div>
    );
};

export default AccordionPage;