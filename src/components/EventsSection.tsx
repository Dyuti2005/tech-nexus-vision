import { motion } from "framer-motion";
import techNexusWatermark from "@/assets/technexus-logo-transparent.png";

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={techNexusWatermark} 
          alt="" 
          className="w-[600px] md:w-[800px] opacity-[0.05]"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
            Events
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Our <span className="gradient-text-reverse">Recent Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intimate workshops to large-scale conferences, we bring the tech community together
          </p>
        </motion.div>

        {/* Events will be added here */}
        <div className="text-center text-muted-foreground py-12">
          <p>New events coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
