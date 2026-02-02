import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import meetupLogo from "@/assets/meetup-logo.png";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/technexuscommunity/posts/?feedView=all",
    icon: Linkedin,
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/p/DTo2_1-CHuX/",
    icon: Instagram,
    color: "#E4405F",
  },
  {
    name: "Meetup",
    href: "https://www.meetup.com/technexus-community/",
    icon: null,
    color: "#ED1C40",
    isImage: true,
  },
];

const FloatingSocialSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[9999] hidden md:flex flex-col gap-4 p-3"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "0 12px 12px 0",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          borderLeft: "none",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      >
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Icon with 360° roll animation */}
            <motion.div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
              animate={{
                rotate: hoveredIndex === index ? 360 : 0,
                backgroundColor: hoveredIndex === index ? `${social.color}20` : "transparent",
              }}
              transition={{
                rotate: { duration: 0.5, ease: "easeInOut" },
                backgroundColor: { duration: 0.3 },
              }}
            >
              {social.icon ? (
                <social.icon
                  className="w-5 h-5"
                  style={{ color: social.color }}
                />
              ) : social.isImage ? (
                <img
                  src={meetupLogo}
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              ) : null}
            </motion.div>

            {/* Slide-out Label */}
            <motion.span
              initial={{ opacity: 0, x: -10, width: 0 }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                x: hoveredIndex === index ? 0 : -10,
                width: hoveredIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-12 whitespace-nowrap text-sm font-medium px-3 py-1 rounded-md overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                color: social.color,
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {social.name}
            </motion.span>
          </a>
        ))}
      </motion.div>


    </>
  );
};

export default FloatingSocialSidebar;
