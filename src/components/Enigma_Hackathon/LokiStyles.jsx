"use client"
const LokiStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

    .font-cinzel {
      font-family: "Cinzel", serif;
    }
    .font-inter {
      font-family: "Inter", sans-serif;
    }

    .bg-gradient-radial {
      background: radial-gradient(
        circle at center,
        rgba(19, 53, 35, 0.6) 0%,
        rgba(11, 42, 28, 0.7) 70%
      );
    }

    .text-gradient {
      background: linear-gradient(45deg, #2aff6d, #2aff6d, #2aff6d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-gradient-glow {
      background: linear-gradient(45deg, #ffffff, #ffffff, #ffffff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 0 15px rgba(42, 255, 109, 0.1));
    }

    .glass-effect {
      background: rgba(19, 53, 35, 0.3);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(42, 255, 109, 0.2);
      box-shadow: 0 8px 32px rgba(42, 255, 109, 0.1);
    }

    .glass-effect-strong {
      background: rgba(11, 42, 28, 0.3);
      backdrop-filter: blur(0px);
      border: 1px solid rgba(255, 221, 102, 0.3);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }

    // .glass-effect-strong {
    //   background: rgba(255, 204, 0, 0.1); /* Medium yellow with 70% opacity */
    //   backdrop-filter: blur(0px);
    //   border: 1px solid rgba(255, 221, 102, 0.5); /* Light golden border */
    //   box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    // }

    .tva-pattern {
      background-image: radial-gradient(
          circle at 25% 25%,
          rgba(19, 53, 35, 0.6) 2px,
          transparent 2px
        ),
        radial-gradient(
          circle at 75% 75%,
          rgba(19, 53, 35, 0.4) 1px,
          transparent 1px
        );
      background-size: 100px 100px;
    }

    .shimmer-bg {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(42, 255, 109, 0.4),
        transparent
      );
      background-size: 200% 100%;
      animation: shimmer 3s linear infinite;
    }

    .neon-border {
      box-shadow: 0 0 2px rgba(255, 221, 102, 0.5),
        inset 0 0 2px rgba(42, 255, 109, 0.1);
    }

    .tva-badge {
      background: linear-gradient(145deg, #133523, #0b2a1c);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
        inset 0 0 10px rgba(42, 255, 109, 0.3);
    }

    .timeline-icon {
      filter: drop-shadow(0 0 8px rgba(42, 255, 109, 0.5));
    }

    .prize-card {
      perspective: 1000px;
      transform-style: preserve-3d;
    }

    .prize-card-inner {
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .prize-card:hover .prize-card-inner {
      transform: rotateY(10deg) rotateX(5deg);
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes floatReverse {
      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-30px) rotate(180deg);
      }
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 5px rgba(42, 255, 109, 0.7),
          0 0 10px rgba(42, 255, 109, 0.5);
      }
      100% {
        text-shadow: 0 0 10px rgba(42, 255, 109, 0.9),
          0 0 20px rgba(42, 255, 109, 0.7);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes pulse-slow {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
    }

    @keyframes matrix {
      0% {
        transform: translateY(-100vh);
      }
      100% {
        transform: translateY(100vh);
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-float-reverse {
      animation: floatReverse 8s ease-in-out infinite;
    }
    .animate-glow {
      // animation: glow 2s ease-in-out infinite alternate;
    }
    .animate-shimmer {
      animation: shimmer 3s linear infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .animate-matrix {
      animation: matrix 20s linear infinite;
    }
    .animate-rotate-slow {
      animation: rotate 30s linear infinite;
    }

    .hero-title {
      font-size: clamp(3rem, 20vw, 8rem);
      line-height: 0.9;
    }
  `}</style>
);

export default LokiStyles;
