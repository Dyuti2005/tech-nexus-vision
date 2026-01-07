import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { previousEvents } from "@/data/previousEvents";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = previousEvents.find((e) => e.id === eventId);

  if (!event) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link to="/events" className="text-primary hover:underline">
            ← Back to Events
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section with Event Image */}
      <section className="pt-24 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-8 left-4 md:left-8 z-20"
          >
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-background/30 border border-white/10 text-foreground hover:bg-background/50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events</span>
            </Link>
          </motion.div>
          
          {/* Event Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-sm font-semibold uppercase tracking-wider mb-4 border border-primary/30">
                  Past Event
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.dateStr}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{event.venue || event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">{event.attendees} Attendees</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                About This <span className="gradient-text">Event</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Event <span className="gradient-text-reverse">Highlights</span>
              </h2>
              <div className="glass-card-emerald rounded-2xl p-6 md:p-8 glow-border-emerald">
                <div className="grid gap-4">
                  {event.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-lg">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Featured <span className="gradient-text">Speakers</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <motion.div
                      key={speaker.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <User className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{speaker.name}</h3>
                          <p className="text-sm text-muted-foreground">Speaker</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{speaker.topic}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Don't Miss Our Upcoming Events!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our community to get notified about future events and workshops.
                </p>
                <Link
                  to="/events"
                  className="btn-primary-glow px-8 py-4 rounded-2xl text-primary-foreground font-semibold inline-flex items-center gap-2"
                >
                  View All Events
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventDetail;
