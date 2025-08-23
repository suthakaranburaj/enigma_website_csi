import React from 'react';
import { motion } from 'framer-motion';

const Guidelines = () => {
  return (
    <section id="guidelines" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-[#3399ff]/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-gradient-to-br from-[#ff3333]/20 to-transparent rotate-45 animate-pulse-slow"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-glow">Guidelines</span>
          </h2>
          <div className="relative inline-block">
            <p className="text-xl text-white font-medium italic">
              "Rules to Innovate By"
            </p>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#2aff6d]/20 to-[#c6a567]/20 rounded-lg blur-xl -z-10"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eligibility Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#2aff6d] animate-pulse"></div>
              <h3 className="text-2xl font-bold text-[#2aff6d]">Eligibility</h3>
            </div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="text-[#2aff6d] mr-2">›</span>
                Open to all undergraduate students across India.
              </li>
              <li className="flex items-start">
                <span className="text-[#2aff6d] mr-2">›</span>
                Students from any specialization (Engineering, Management, Design, etc.) are welcome.
              </li>
              <li className="flex items-start">
                <span className="text-[#2aff6d] mr-2">›</span>
                Both inter-college and inter-specialization teams are allowed.
              </li>
            </ul>
          </motion.div>

          {/* Team Formation Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect rounded-2xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#c6a567] animate-pulse"></div>
              <h3 className="text-2xl font-bold text-[#c6a567]">Team Formation</h3>
            </div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="text-[#c6a567] mr-2">›</span>
                Team size: 3–4 members.
              </li>
              <li className="flex items-start">
                <span className="text-[#c6a567] mr-2">›</span>
                Teams must nominate a team leader for communication purposes.
              </li>
            </ul>
          </motion.div>

          {/* Competition Format Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2 glass-effect rounded-2xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#ffcc33] animate-pulse"></div>
              <h3 className="text-2xl font-bold text-[#ffcc33]">Competition Format</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-[#2aff6d] mb-3">2 TRACKS: FinTech and HealthTech</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Round 1 */}
              <div className="bg-[#0b2a1c]/30 p-4 rounded-xl border border-[#2aff6d]/30">
                <h4 className="text-lg font-bold text-[#2aff6d] mb-2">Round 1: Idea Submission</h4>
                <p className="text-white text-sm mb-2">PPT ROUND (Online)</p>
                <ul className="text-white text-sm space-y-2">
                  <li>• Submit solution in structured PPT format</li>
                  <li>• Strictly follow provided format</li>
                  <li>• Last date: 07th September</li>
                </ul>
              </div>
              
              {/* Round 2 */}
              <div className="bg-[#0b2a1c]/30 p-4 rounded-xl border border-[#2aff6d]/30">
                <h4 className="text-lg font-bold text-[#2aff6d] mb-2">Round 2: Prototype Development</h4>
                <p className="text-white text-sm mb-2">Hackathon Round (Onsite)</p>
                <ul className="text-white text-sm space-y-2">
                  <li>• 40 shortlisted teams</li>
                  <li>• 12-hour continuous hackathon</li>
                  <li>• Build working prototype/MVP</li>
                  <li>• Mentorship sessions provided</li>
                </ul>
              </div>
              
              {/* Round 3 */}
              <div className="bg-[#0b2a1c]/30 p-4 rounded-xl border border-[#2aff6d]/30">
                <h4 className="text-lg font-bold text-[#2aff6d] mb-2">Round 3: Final Presentation</h4>
                <p className="text-white text-sm mb-2">Pitch to Judges</p>
                <ul className="text-white text-sm space-y-2">
                  <li>• Present solution to judges & experts</li>
                  <li>• 10 mins per team (including Q&A)</li>
                  <li>• Evaluation: innovation, feasibility, technical depth, presentation</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Problem Statements Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-2 glass-effect rounded-2xl p-6 neon-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-4 rounded-full bg-[#3399ff] animate-pulse"></div>
              <h3 className="text-2xl font-bold text-[#3399ff]">Problem Statements</h3>
            </div>
            
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <span className="text-[#3399ff] mr-2">›</span>
                Select any one problem statement for Round 1 and continue with it.
              </li>
              <li className="flex items-start">
                <span className="text-[#3399ff] mr-2">›</span>
                Problem statements for the hackathon (Round 2) are not related to Round 1.
              </li>
              <li className="flex items-start">
                <span className="text-[#3399ff] mr-2">›</span>
                You must continue with the track selected in Round 1 for the entire competition.
              </li>
              <li className="flex items-start">
                <span className="text-[#3399ff] mr-2">›</span>
                Problem statements for the OFFLINE ROUND will be provided ON DAY.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-20 left-20 animate-float">
        <div className="w-16 h-16 border-2 border-[#2aff6d]/50 rounded-full flex items-center justify-center neon-border animate-rotate-slow">
          <div className="w-8 h-8 bg-gradient-to-br from-[#2aff6d]/30 to-[#2aff6d]/10 rounded-full"></div>
        </div>
      </div>
      
      {/* Data Flow Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }).map((_, index) => (
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
    </section>
  );
};

export default Guidelines;