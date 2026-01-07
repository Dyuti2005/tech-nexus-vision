import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Logo Watermark */}
      <div className="logo-watermark">
        <Logo size="watermark" showText={false} />
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

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
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

          {/* Upcoming Event Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card-emerald p-6 md:p-8 rounded-3xl max-w-3xl mx-auto mb-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                  Upcoming Event
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Agentic AI Connect
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>January 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>Microsoft Ferns, Bengaluru</span>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Meetup CTA */}
            <div className="mt-6 pt-6 border-t border-border/50">
              <a
                href="https://meetu.ps/e/PJJMV/1dmQqv/i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-2xl text-primary-foreground font-semibold group"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Register via Meetup</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
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
              { number: "3", label: "City Chapters" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-4 rounded-2xl"
              >
                <div className="stat-number">{stat.number}</div>
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
