import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { previousEvents } from "@/data/previousEvents";
import { supabase } from "@/integrations/supabase/client";

interface Speaker {
  id: string;
  name: string;
  topic?: string;
  time?: string;
  image_url?: string;
}

interface EventData {
  id: string;
  title: string;
  date: string;
  dateStr: string;
  location: string;
  venue?: string;
  attendees: string;
  description: string;
  highlights: string[];
  image: string;
  gallery?: string[];
  speakers?: Speaker[];
  fromDatabase?: boolean;
}

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setLoading(false);
        return;
      }

      // First try to fetch from database
      const { data: dbEvent, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventId)
        .single();

      if (dbEvent && !error) {
        // Fetch speakers for this event
        const { data: speakers } = await supabase
          .from('speakers')
          .select('*')
          .eq('event_id', eventId)
          .order('created_at');

        setEvent({
          id: dbEvent.id,
          title: dbEvent.title,
          date: dbEvent.date,
          dateStr: dbEvent.date_str,
          location: dbEvent.location,
          venue: dbEvent.venue || undefined,
          attendees: dbEvent.attendees || "50+",
          description: dbEvent.description || "",
          highlights: dbEvent.highlights || [],
          image: dbEvent.image_url || "/placeholder.svg",
          gallery: dbEvent.gallery || undefined,
          speakers: speakers || [],
          fromDatabase: true,
        });
      } else {
        // Fallback to local data
        const localEvent = previousEvents.find((e) => e.id === eventId);
        if (localEvent) {
          setEvent({
            id: localEvent.id,
            title: localEvent.title,
            date: localEvent.date.toISOString(),
            dateStr: localEvent.dateStr,
            location: localEvent.location,
            venue: localEvent.venue,
            attendees: localEvent.attendees,
            description: localEvent.description,
            highlights: localEvent.highlights,
            image: localEvent.image,
            gallery: localEvent.gallery,
            speakers: localEvent.speakers?.map((s, i) => ({
              id: `local-${i}`,
              name: s.name,
              topic: s.topic,
              time: s.time,
            })),
            fromDatabase: false,
          });
        }
      }
      setLoading(false);
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16 container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading event...</p>
        </div>
        <Footer />
      </main>
    );
  }

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
        
        {/* Hero Image - Instant render */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-8 left-4 md:left-8 z-20">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-background/30 border border-white/10 text-foreground hover:bg-background/50 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Events</span>
            </Link>
          </div>
          
          {/* Event Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                About This <span className="gradient-text">Event</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Event <span className="gradient-text-reverse">Highlights</span>
                </h2>
                <div className="glass-card-emerald rounded-2xl p-6 md:p-8 glow-border-emerald">
                  <div className="grid gap-4">
                    {event.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90 text-lg">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Speakers & Sessions */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Speakers & <span className="gradient-text">Sessions</span>
                </h2>
                <div className="space-y-4">
                  {event.speakers.map((speaker, index) => (
                    <div
                      key={speaker.id || speaker.name + index}
                      className="backdrop-blur-xl bg-white/80 dark:bg-white/10 rounded-2xl p-6 border border-emerald-200/50 dark:border-primary/30 hover:border-emerald-400 dark:hover:border-primary/50 transition-all shadow-lg"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Time Badge */}
                        {speaker.time && (
                          <div className="flex-shrink-0">
                            <span className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold">
                              {speaker.time}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg text-slate-800 dark:text-foreground">{speaker.name}</h3>
                            <p className="text-slate-600 dark:text-muted-foreground">{speaker.topic}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photo Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Event <span className="gradient-text-reverse">Gallery</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.gallery.map((img, index) => (
                    <div
                      key={index}
                      className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${event.title} - Photo ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl text-white text-sm font-medium">
                          Photo {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventDetail;
