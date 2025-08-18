"use client"
import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const timelineEvents = [
    {
      id: "registration",
      position: "left",
      title: "Registration Opens",
      date: "December 15, 2024",
      description: "Secure your spot in the multiverse",
      icon: (
        <svg
          className="w-6 h-6 text-[#2aff6d] timeline-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      color: "#2aff6d",
    },
    {
      id: "kickoff",
      position: "right",
      title: "Hackathon Begins",
      date: "January 10, 2025 - 6:00 PM",
      description: "The chaos begins, variants assemble",
      icon: (
        <svg
          className="w-6 h-6 text-[#c6a567] timeline-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      color: "#c6a567",
    },
    {
      id: "checkpoint",
      position: "left",
      title: "Midnight Checkpoint",
      date: "January 11, 2025 - 12:00 AM",
      description: "Progress review and mentorship",
      icon: (
        <svg
          className="w-6 h-6 text-[#3399ff] timeline-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      color: "#f27900",
    },
    {
      id: "submissions",
      position: "right",
      title: "Submissions Close",
      date: "January 12, 2025 - 6:00 PM",
      description: "Time runs out, destiny awaits",
      icon: (
        <svg
          className="w-6 h-6 text-[#ff3333] timeline-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
      color: "#ff3333",
    },
    {
      id: "results",
      position: "left",
      title: "Glorious Purpose Achieved",
      date: "January 13, 2025 - 8:00 PM",
      description: "Winners announced, legends born",
      icon: (
        <svg
          className="w-8 h-8 text-gradient"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          ></path>
        </svg>
      ),
      color: "gradient",
    },
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b2a1c]/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
            Sacred Timeline
          </h2>
          <p className="text-xl text-[#b6c8b8] max-w-3xl mx-auto">
            Follow the predetermined path to hackathon glory
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2aff6d] via-[#c6a567] to-[#2aff6d] rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
