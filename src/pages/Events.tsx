import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";

const upcomingEvent = {
  title: "Agentic AI Connect - Bengaluru",
  date: new Date("2025-01-10T09:00:00"),
  dateStr: "January 10, 2025",
  location: "Microsoft Ferns, Bengaluru",
  description: "Join us for an immersive experience exploring Agentic AI systems, autonomous agents, and the future of AI-powered automation. Network with industry experts and Microsoft MVPs.",
  topics: ["Agentic AI Patterns", "Autonomous Agents", "LLM Orchestration", "Real-world Use Cases"],
};

const pastEvents = [
  {
    title: "Agentic AI Connect - Chennai",
    date: "December 20, 2024",
    location: "Chennai",
    attendees: "200+",
    description: "Our flagship Agentic AI event exploring autonomous AI systems and their real-world applications.",
    image: event1,
  },
  {
    title: "Microsoft AI and Chai",
    date: "November 2024",
    location: "Multiple Cities",
    attendees: "150+",
    description: "Deep dive into Azure OpenAI and RAG (Retrieval Augmented Generation) patterns.",
    image: event2,
  },
  {
    title: "Azure Cloud Workshop",
    date: "October 2024",
    location: "Bengaluru",
    attendees: "120+",
    description: "Hands-on workshop covering Azure fundamentals and cloud architecture best practices.",
    image: event3,
  },
  {
    title: "AI Hackathon",
    date: "September 2024",
    location: "Hyderabad",
    attendees: "80+",
    description: "24-hour hackathon focused on building AI-powered solutions using Azure services.",
    image: event4,
  },
];

const Events = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Events
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Community <span className="gradient-text-reverse">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From intimate workshops to large-scale conferences, we bring the tech community together
            </p>
          </motion.div>

          {/* Upcoming Event Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card-emerald p-8 md:p-10 rounded-3xl max-w-4xl mx-auto glow-border-emerald"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Next Event</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">{upcomingEvent.title}</h2>
            <p className="text-muted-foreground mb-6">{upcomingEvent.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{upcomingEvent.dateStr}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>{upcomingEvent.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>9:00 AM onwards</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {upcomingEvent.topics.map((topic) => (
                <span key={topic} className="px-3 py-1 rounded-full bg-foreground/5 text-sm">
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <CountdownTimer targetDate={upcomingEvent.date} />
              <a
                href="https://chat.whatsapp.com/yourlink"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow px-8 py-4 rounded-2xl text-primary-foreground font-semibold inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Register Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Past <span className="gradient-text">Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Relive the moments from our previous community gatherings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card rounded-3xl overflow-hidden h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-primary-foreground mb-1">{event.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Events;
