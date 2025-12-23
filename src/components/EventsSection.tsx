import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, CheckCircle } from "lucide-react";
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";

const previousEvents = [
  {
    title: "Agentic AI Connect - Chennai",
    date: "December 20, 2024",
    location: "Chennai",
    attendees: "200+",
    highlight: true,
    description: "Our flagship Agentic AI event exploring autonomous AI systems and their real-world applications.",
  },
  {
    title: "Microsoft AI and Chai",
    date: "November 2024",
    location: "Multiple Cities",
    attendees: "150+",
    highlight: false,
    description: "Deep dive into Azure OpenAI and RAG (Retrieval Augmented Generation) patterns.",
  },
];

const galleryImages = [event1, event2, event3, event4];

const EventsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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

        {/* Previous Events */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {previousEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${event.highlight ? "md:col-span-2" : ""}`}
            >
              <div className={`glass-card-cyan p-6 md:p-8 rounded-3xl h-full ${event.highlight ? "glow-border-cyan" : ""}`}>
                {event.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                      <CheckCircle className="w-3 h-3" />
                      Most Recent
                    </span>
                  </div>
                )}

                <div className={`flex ${event.highlight ? "flex-col md:flex-row md:items-center" : "flex-col"} gap-6`}>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-secondary" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                    </div>
                  </div>

                  {event.highlight && (
                    <div className="flex-shrink-0">
                      <div className="w-full md:w-48 h-32 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                        <span className="text-5xl">🤖</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Moments Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Community <span className="gradient-text">Moments</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Community event ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
