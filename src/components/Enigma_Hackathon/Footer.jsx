"use client"
const Footer = () => {
    const links = [
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Contact", href: "#" },
    ];

    return (
      <footer className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a1c] to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="font-cinzel text-4xl font-bold text-gradient mb-6 animate-glow">
              LOKI HACKATHON
            </div>
            <p className="text-[#b6c8b8] italic text-xl">
              "Glorious Purpose Awaits"
            </p>
          </div>

          <div className="flex justify-center space-x-12 mb-12">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-[#b6c8b8] hover:text-[#2aff6d] transition-all duration-300 transform hover:scale-110 text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-[#133523] pt-8">
            <p className="text-[#b6c8b8]">
              © 2025 Loki Hackathon. All timelines reserved. | TVA Approved
              Event
            </p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;