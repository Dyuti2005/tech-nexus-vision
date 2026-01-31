import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

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
  },
];

const MeetupIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.98 14.77c-.15.38-.35.55-.73.55-.42 0-.72-.28-.72-.75 0-.16.03-.32.1-.54l1.74-5.16c.18-.52.6-.85 1.14-.85.55 0 .96.33 1.14.85l1.74 5.16c.07.22.1.38.1.54 0 .47-.3.75-.72.75-.38 0-.58-.17-.73-.55l-.34-1.05H7.32l-.34 1.05zm2.66-2.15l-.74-2.35h-.03l-.74 2.35h1.51zM11.5 9.72c0-.42.28-.7.7-.7h1.72c1.26 0 2.1.73 2.1 1.85 0 .75-.38 1.33-.96 1.6v.02c.73.2 1.2.83 1.2 1.7 0 1.25-.9 2.06-2.27 2.06H12.2c-.42 0-.7-.28-.7-.7V9.72zm1.4 2.33h1.04c.56 0 .9-.28.9-.72 0-.44-.34-.71-.9-.71h-1.04v1.43zm0 2.7h1.18c.62 0 1-.32 1-.8 0-.48-.38-.78-1-.78h-1.18v1.58zm5.57-2.01c-.1-.03-.18-.03-.28-.03-.43 0-.7.27-.7.68v1.86c0 .42.28.7.7.7h.1c.4 0 .68-.28.68-.68v-1.88c0-.37-.18-.6-.5-.65z" />
  </svg>
);

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
              ) : (
                <MeetupIcon
                  className="w-5 h-5"
                  style={{ color: social.color }}
                />
              )}
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
