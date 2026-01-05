import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, CheckCircle, GraduationCap, Sparkles } from "lucide-react";
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";
import SkillUpModal from "./SkillUpModal";

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
  const [isSkillUpModalOpen, setIsSkillUpModalOpen] = useState(false);

  return (
    <>
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

          {/* Skill-Up India Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <button
              onClick={() => setIsSkillUpModalOpen(true)}
              className="w-full text-left relative glass-card-emerald p-8 md:p-10 rounded-3xl glow-border-emerald overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Emerald glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
              
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                    <GraduationCap className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core Program</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Skill-Up India: AI & Cloud Certification Drive
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A community-led initiative to master AZ-900 (Azure Fundamentals) and AI-900 (AI Fundamentals) certifications. Join hundreds of learners on the path to Microsoft certification excellence.
                  </p>
                  
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>
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

      <SkillUpModal isOpen={isSkillUpModalOpen} onClose={() => setIsSkillUpModalOpen(false)} />
    </>
  );
};

export default EventsSection;
