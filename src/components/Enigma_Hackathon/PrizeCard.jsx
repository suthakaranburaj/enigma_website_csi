"use client"
const PrizeCard = ({ prize }) => {
  const { position, title, value, color, icon, items } = prize;

  return (
    <div className="relative group prize-card">
      <div className="prize-card-inner glass-effect-strong rounded-3xl p-10 text-center neon-border">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div
            className="text-[#0b2a1c] px-6 py-2 rounded-full font-bold text-sm animate-pulse"
            style={{
              background: `linear-gradient(to right, ${color}99, ${color}60)`,
            }}
          >
            {position}
          </div>
        </div>
        <div className="mt-8 mb-8">
          <div
            className="w-24 h-24 rounded-full mx-auto flex items-center justify-center neon-border mb-6 animate-glow"
            style={{
              background: `linear-gradient(to bottom right, ${color}99, ${color}40)`,
            }}
          >
            <span className="text-[#0b2a1c] text-4xl font-bold">{icon}</span>
          </div>
          <h3
            className="text-4xl font-bold mb-4 animate-glow"
            style={{ color }}
          >
            {value}
          </h3>
          <h4 className="text-xl font-semibold mb-6" style={{ color }}>
            {title}
          </h4>
        </div>
        <ul className="text-[#b6c8b8] space-y-3 text-left">
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrizeCard;
