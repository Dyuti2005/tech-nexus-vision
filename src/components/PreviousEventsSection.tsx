import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { previousEvents } from "@/data/previousEvents";

const PreviousEventsSection = () => {
  const handleEventClick = (eventId: string) => {
    window.open(`/events/${eventId}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Previous <span className="gradient-text">Events</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Relive the moments from our community gatherings. Click on any event to explore details.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {previousEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleEventClick(event.id)}
              className="group cursor-pointer"
            >
              <div 
                className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 
                           backdrop-blur-[25px] bg-background/20 
                           border border-primary/20 hover:border-primary/50
                           shadow-lg hover:shadow-primary/20 hover:shadow-2xl
                           hover:scale-[1.03] transform-gpu"
                style={{
                  boxShadow: "0 0 0 1px rgba(16, 185, 129, 0.1), 0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
                </div>

                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 rounded-full backdrop-blur-xl bg-primary/20 border border-primary/30">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full backdrop-blur-xl bg-background/30 border border-white/10 text-sm font-medium">
                      {event.dateStr}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>

                  {/* View Details CTA */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousEventsSection;
