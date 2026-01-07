import { motion } from "framer-motion";

const EventsSection = () => {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
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
