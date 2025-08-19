// "use client";
// import React from "react";
// import PrizeCard from "./PrizeCard";

// const Prizes = () => {
//   const mainPrizes = [
//     {
//       position: "FIRST PLACE",
//       title: "The Throne",
//       value: "₹20,000",
//       color: "#ffcc33",
//       icon: "👑",
//       items: [
//         "Cash Prize: $20,000",
//         "Premium Tech Package",
//         "Mentorship Program",
//         "VIP Conference Pass",
//       ],
//     },
//     // {
//     //   position: "SECOND PLACE",
//     //   title: "The Champion",
//     //   value: "$12,000",
//     //   color: "#c6a567",
//     //   icon: "🥈",
//     //   items: [
//     //     "Cash Prize: $12,000",
//     //     "Tech Bundle",
//     //     "Career Guidance",
//     //     "Conference Ticket",
//     //   ],
//     // },
//     // {
//     //   position: "THIRD PLACE",
//     //   title: "The Worthy",
//     //   value: "$8,000",
//     //   color: "#2aff6d",
//     //   icon: "🥉",
//     //   items: [
//     //     "Cash Prize: $8,000",
//     //     "Developer Kit",
//     //     "Online Courses",
//     //     "Networking Events",
//     //   ],
//     // },
//   ];

//   const specialPrizes = [
//     // {
//     //   title: "Best Innovation",
//     //   color: "#ff3333",
//     //   description: "For the most creative and groundbreaking solution",
//     //   prize: "$5,000 + Premium Mentorship",
//     // },
//     // {
//     //   title: "People's Choice",
//     //   color: "#ffcc33",
//     //   description: "Voted by the community for the most impressive demo",
//     //   prize: "$3,000 + Featured Showcase",
//     // },
//   ];

//   return (
//     <section id="prizes" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#133523]/60 to-transparent"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-gradient mb-8 animate-glow">
//             Prize Pool
//           </h2>
//           <p className="text-xl text-[#b6c8b8] max-w-3xl mx-auto">
//             {/* Claim your place among the worthy with these magnificent prizes */}
//           </p>
//         </div>

//         <div className="flex justify-center mb-16">
//           {mainPrizes.map((prize, index) => (
//             <PrizeCard key={index} prize={prize} />
//           ))}
//         </div>

//         {/* Special Prizes */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {specialPrizes.map((prize, index) => (
//             <div
//               key={index}
//               className="glass-effect-strong rounded-2xl p-8 neon-border transform hover:scale-102 transition-all duration-500"
//               style={{ borderColor: `${prize.color}30` }}
//             >
//               <h3
//                 className="text-2xl font-bold mb-4 animate-glow"
//                 style={{ color: prize.color }}
//               >
//                 {prize.title}
//               </h3>
//               <p className="text-[#b6c8b8] mb-4">{prize.description}</p>
//               <div
//                 className="text-3xl font-bold"
//                 style={{ color: prize.color }}
//               >
//                 {prize.prize}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Prizes;
"use client";
import React from "react";
import Image from "next/image";

const PrizeHighlight = () => {
  return (
    <section className="py-10 relative flex flex-col items-center justify-center text-center">
      {/* Background Glow */}
      <div className="absolute inset-0"></div>

      {/* Trophy Image */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="w-96 h-96 flex items-center justify-center relative">
          <div className="absolute w-full h-full bg-green-500/50 rounded-full blur-3xl animate-pulse"></div>
          <Image
            src="/trophy.png" // <-- replace with your trophy image path
            alt="Trophy"
            width={600}
            height={600}
            className="relative z-10"
          />
        </div>

        {/* Prize Highlight Card */}
        <div className="px-8 py-1 rounded-2xl text-orange-400 font-bold text-4xl">
          INR 20,000
        </div>
      </div>
    </section>
  );
};

export default PrizeHighlight;
