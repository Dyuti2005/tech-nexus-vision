import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react";
import watermarkLogo from "@/assets/technexus-logo-transparent.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Logo Watermark */}
      <div className="logo-watermark">
        <img src={watermarkLogo} alt="" className="w-full h-full object-contain opacity-[0.08] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border border-secondary/5"
        />
      </div>

      <div className="container mx-auto px-4 pt-48 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
          >
            Empowering Tomorrow's{" "}
            <span className="gradient-text">Tech Leaders</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Join 5000+ professionals learning Microsoft AI, Azure Cloud, and cutting-edge 
            technologies through hands-on workshops, expert sessions, and vibrant community events.
          </motion.p>

          {/* Upcoming Event Card - Frosted Glass Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-8 md:p-10 rounded-3xl max-w-3xl mx-auto mb-10 overflow-hidden border border-white/20"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset',
            }}
          >
            {/* Subtle Glowing Border */}
            <motion.div 
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                padding: '1px',
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--primary)))',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            {/* Animated Mesh Gradient Blob - subtle behind text */}
            <motion.div
              animate={{ 
                x: [0, 30, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
              }}
            />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15))',
                  borderColor: 'hsl(var(--primary) / 0.4)',
                  color: 'hsl(var(--primary))',
                }}
              >
                Upcoming Event
              </motion.span>

              {/* Event Title with Gradient - Centered */}
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Code & Cold Pizza: Bengaluru Edition
              </motion.h2>

              {/* Event Details - Centered with high contrast */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" style={{ color: 'hsl(var(--secondary))' }} />
                  <span className="text-lg font-medium" style={{ color: 'hsl(220, 20%, 25%)' }}>February 7th, 2026</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(var(--primary) / 0.5)' }} />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: 'hsl(var(--secondary))' }} />
                  <span className="text-lg font-medium" style={{ color: 'hsl(220, 20%, 25%)' }}>Polaris School of Technology, Brookefield</span>
                </div>
              </motion.div>

              {/* Meetup CTA Button - Centered with Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center"
              >
                <a
                  href="https://hostwebs.site/DWu3hb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-bold text-lg group overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                  }}
                >
                  {/* Pulse Glow Effect */}
                  <motion.div
                    animate={{ 
                      opacity: [0.4, 0.7, 0.4],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
                      filter: 'blur(20px)',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    <ExternalLink className="w-5 h-5" />
                    <span>Register via Meetup</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "100+", label: "Hours of Content" },
              { number: "150+", label: "Events Organised" },
              { number: "5000+", label: "Community Members" },
              { number: "2", label: "City Chapters" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card px-6 py-4 rounded-2xl"
              >
                <div className="stat-number whitespace-nowrap pr-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
