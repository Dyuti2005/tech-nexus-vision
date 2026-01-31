import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "watermark";
  showText?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 44, text: "text-xl" },
    md: { icon: 60, text: "text-2xl" },
    lg: { icon: 76, text: "text-3xl" },
    xl: { icon: 92, text: "text-4xl" },
    watermark: { icon: 400, text: "text-6xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: size !== "watermark" ? 1.02 : 1 }}
    >
      {/* Logo Icon - Abstract Tech Network */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        style={{ minWidth: icon, minHeight: icon }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(160, 84%, 39%)" />
            <stop offset="100%" stopColor="hsl(188, 94%, 43%)" />
          </linearGradient>
          <linearGradient
            id="logoGradientReverse"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="hsl(188, 94%, 43%)" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon */}
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          filter="url(#glow)"
        />

        {/* Inner network nodes */}
        <circle cx="50" cy="30" r="6" fill="url(#logoGradient)" />
        <circle cx="30" cy="55" r="6" fill="url(#logoGradientReverse)" />
        <circle cx="70" cy="55" r="6" fill="url(#logoGradient)" />
        <circle cx="50" cy="75" r="6" fill="url(#logoGradientReverse)" />

        {/* Connecting lines */}
        <line x1="50" y1="30" x2="30" y2="55" stroke="url(#logoGradient)" strokeWidth="2" />
        <line x1="50" y1="30" x2="70" y2="55" stroke="url(#logoGradient)" strokeWidth="2" />
        <line x1="30" y1="55" x2="50" y2="75" stroke="url(#logoGradientReverse)" strokeWidth="2" />
        <line x1="70" y1="55" x2="50" y2="75" stroke="url(#logoGradientReverse)" strokeWidth="2" />
        <line
          x1="30"
          y1="55"
          x2="70"
          y2="55"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />

        {/* Center accent */}
        <circle cx="50" cy="52" r="4" fill="url(#logoGradient)" opacity="0.8" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black tracking-tight ${text} gradient-text`}>
            TechNexus
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mt-0.5">
            Community
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
