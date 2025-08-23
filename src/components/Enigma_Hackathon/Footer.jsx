"use client";
import { motion } from "framer-motion";
const Footer = () => {
  const links = [
    { label: "Discord", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ];

  // Contact details data
  const contacts = [
    {
      name: "Kanishka Jadhav",
      role: "Event Lead - Enigma 4.0",
      phone: "+91 9082885751",
      email: "kanishkaj25@gmail.com",
    },
    {
      name: "Samiksha Dhole",
      role: "Event Lead - Enigma 4.0",
      phone: "+91 7977999825",
      email: "sameekshadhole06@gmail.com",
    },
    {
      name: "Dev Sharma",
      role: "Treasurer - CSI",
      phone: "+91 9322734121",
      email: "devs.rajsharma@gmail.com",
    },
    {
      name: "Sahil Khairnar",
      role: "Marketing Lead - Enigma 4.0",
      phone: "+91 9370070202",
      email: "sahilk2303@gmail.com",
    },
  ];

  return (
    <footer className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a1c] to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mb-12">
          <div
            style={{ fontFamily: "Mestizo" }}
            className="text-white text-4xl mb-6 animate-glow"
          >
            Enigma 4.0
          </div>
          <p className="text-white italic text-xl">"Glorious Purpose Awaits"</p>
        </div>

        <div className="flex justify-center space-x-12 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-[#ff9900] transition-all duration-300 transform hover:scale-102 text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Details Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#ff9900] mb-8">
            Contact Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="neon-border bg-[#0b2a1c]/50 backdrop-blur-sm border border-[#133523] rounded-lg p-4 duration-500 transition-all scale-95 hover:scale-100"
              >
                <h4 className="text-lg font-semibold text-[#ff9900]">
                  {contact.name}
                </h4>
                <p className="text-white text-sm mb-1">{contact.role}</p>
                <p className="text-white text-sm">{contact.phone}</p>
                {contact.email && (
                  <p className="text-white text-sm truncate">{contact.email}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <a
            href="https://unstop.com/p/enigma-40-a-web-development-hackathon-sies-graduate-school-of-technology-navi-mumbai-maharashtra-1545848"
            target="_blank"
            className="bg-[#ff9900] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-102 cursor-pointer"
          >
            Register Now
          </a>
        </div>

        <div className="border-t border-[#133523] pt-8">
          <p className="text-white">
            © 2025 Enigma 4.0 Hackathon. All timelines reserved. | TVA Approved
            Event
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
