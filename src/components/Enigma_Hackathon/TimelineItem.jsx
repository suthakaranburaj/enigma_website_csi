"use client";
import { motion } from "framer-motion";
const TimelineItem = ({ event }) => {
  const { position, title, date, description, icon, color } = event;

  return (
    <div className="flex items-center relative">
      {position === "left" ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 pr-8 text-right"
          >
            <div
              className="glass-effect-strong rounded-2xl p-4 sm:p-8 neon-border transform hover:scale-102 transition-all duration-500"
              style={{
                borderColor:
                  color === "gradient" ? "transparent" : `${color}30`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: color === "gradient" ? "var(--gradient)" : color,
                }}
              >
                {title}
              </h3>
              <p className="text-white mb-2">{date}</p>
              <p className="text-sm text-white">{description}</p>
            </div>
          </motion.div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border"
            style={
              color === "gradient"
                ? {
                    width: "4rem",
                    height: "4rem",
                    background: "linear-gradient(145deg, #133523, #0b2a1c)",
                    boxShadow:
                      "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(42, 255, 109, 0.3)",
                  }
                : {}
            }
          >
            {icon}
          </div>
          <div className="flex-1 pl-8"></div>
        </>
      ) : (
        <>
          <div className="flex-1 pr-8"></div>
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#0b2a1c] rounded-full flex items-center justify-center neon-border"
            style={
              color === "gradient"
                ? {
                    width: "4rem",
                    height: "4rem",
                    background: "linear-gradient(145deg, #133523, #0b2a1c)",
                    boxShadow:
                      "0 10px 30px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(42, 255, 109, 0.3)",
                  }
                : {}
            }
          >
            {icon}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 pl-8"
          >
            <div
              className="glass-effect-strong rounded-2xl p-4 sm:p-8  neon-border transform hover:scale-102 transition-all duration-500"
              style={{
                borderColor:
                  color === "gradient" ? "transparent" : `${color}30`,
              }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  color: color === "gradient" ? "var(--gradient)" : color,
                }}
              >
                {title}
              </h3>
              <p className="text-white mb-2">{date}</p>
              <p className="text-sm text-white">{description}</p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
