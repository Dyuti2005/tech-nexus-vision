import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ExternalLink, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { supabase } from "@/integrations/supabase/client";

// Import event images
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";
import sprintChennai1 from "@/assets/events/sprint-imagine-cup-chennai-1.png";
import vscodeDevDays1 from "@/assets/events/vscode-dev-days-1.png";
import agentverseBengaluru1 from "@/assets/events/agentverse-bengaluru-1.png";
import azureBot1 from "@/assets/events/azure-bot-1.png";
import aiChai1 from "@/assets/events/ai-chai-1.png";
import agenticAiBengaluruCover from "@/assets/events/agentic-ai-bengaluru-cover.jpg";

// Map database image paths to imported assets
const imageMap: Record<string, string> = {
  '/assets/gallery/event-1.jpeg': event1,
  '/assets/gallery/event-2.jpeg': event2,
  '/assets/gallery/event-3.jpeg': event3,
  '/assets/gallery/event-4.jpeg': event4,
  '/assets/events/sprint-imagine-cup-chennai-1.png': sprintChennai1,
  '/assets/events/vscode-dev-days-1.png': vscodeDevDays1,
  '/assets/events/agentverse-bengaluru-1.png': agentverseBengaluru1,
  '/assets/events/azure-bot-1.png': azureBot1,
  '/assets/events/ai-chai-1.png': aiChai1,
  '/assets/events/agentic-ai-bengaluru-cover.jpg': agenticAiBengaluruCover,
};

const getEventImage = (imageUrl?: string): string => {
  if (!imageUrl) return event1;
  // Check if it's a mapped path
  if (imageMap[imageUrl]) return imageMap[imageUrl];
  // If it starts with http, use as-is (Supabase storage or external URL)
  if (imageUrl.startsWith('http')) return imageUrl;
  // Otherwise return the path or fallback
  return event1;
};


interface DatabaseEvent {
  id: string;
  title: string;
  date: string;
  date_str: string;
  location: string;
  venue?: string;
  attendees?: string;
  description?: string;
  highlights?: string[];
  image_url?: string;
  gallery?: string[];
  meetup_link?: string;
  is_upcoming?: boolean;
}

const defaultUpcoming = {
  title: "GitHub Copilot Dev Day : Bengaluru",
  date: new Date("2026-03-14T09:00:00"),
  dateStr: "Saturday, March 14, 2026",
  location: "Microsoft Reactor Bengaluru",
  description: "Join us for GitHub Copilot Dev Day in Bengaluru — a full-day hands-on event to master AI-powered development with GitHub Copilot.",
  topics: ["GitHub Copilot", "AI", "Developer Tools", "Bengaluru"],
  meetupLink: "https://www.meetup.com/technexus-community/events/313323986/?eventOrigin=group_upcoming_events",
};

const Events = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(defaultUpcoming);
  const [pastEvents, setPastEvents] = useState<{ id: string; title: string; date: Date; dateStr: string; location: string; attendees: string; description: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEvents();

    const channel = supabase
      .channel('events-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchEvents();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const fetchEvents = async () => {
    try {
      // Fetch upcoming event
      const { data: upcomingData } = await supabase
        .from('events')
        .select('*')
        .eq('is_upcoming', true)
        .maybeSingle();

      if (upcomingData) {
        setUpcomingEvent({
          title: upcomingData.title,
          date: new Date(upcomingData.date),
          dateStr: upcomingData.date_str,
          location: upcomingData.venue ? `${upcomingData.venue}, ${upcomingData.location}` : upcomingData.location,
          description: upcomingData.description || "",
          topics: upcomingData.highlights?.length ? upcomingData.highlights : ["GitHub Copilot", "AI", "Developer Tools", "Bengaluru"],
          meetupLink: upcomingData.meetup_link || defaultUpcoming.meetupLink,
        });
      }

      // Fetch past events
      const { data: pastData, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_upcoming', false)
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching past events:', error);
      } else {
        const mapped = (pastData || []).map(e => ({
          id: e.id,
          title: e.title,
          date: new Date(e.date),
          dateStr: e.date_str,
          location: e.location,
          attendees: e.attendees || "50+",
          description: e.description || "",
          image: getEventImage(e.image_url ?? undefined),
        }));
        setPastEvents(mapped);
      }
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Compact */}
      <section className="pt-28 pb-8 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
              Events
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
              Community <span className="gradient-text-reverse">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              From intimate workshops to large-scale conferences, we bring the tech community together
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
               <span>{upcomingEvent.dateStr}</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-primary/50" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{upcomingEvent.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            
            {/* Upcoming Event - Featured Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-3"
            >
              <div className="glass-card-emerald p-6 md:p-8 rounded-3xl glow-border-emerald">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">Upcoming Event</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{upcomingEvent.title}</h2>
                    <p className="text-muted-foreground mb-4 text-sm md:text-base">{upcomingEvent.description}</p>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{upcomingEvent.dateStr}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{upcomingEvent.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                        <span>9:00 AM – 3:00 PM</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {upcomingEvent.topics.map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-full bg-foreground/5 text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <CountdownTimer targetDate={upcomingEvent.date} />
                    <a
                      href={upcomingEvent.meetupLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-glow px-6 py-3 rounded-xl text-primary-foreground font-semibold inline-flex items-center gap-2 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Register via Meetup</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3 text-center mt-8 mb-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider mb-3">
                Our Journey
              </span>
              <h2 className="text-2xl md:text-3xl font-black">
                Previous <span className="gradient-text">Events</span>
              </h2>
            </motion.div>

            {/* Previous Events Grid */}
            {loading ? (
              <div className="lg:col-span-3 flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : pastEvents.length === 0 ? (
              <div className="lg:col-span-3 text-center py-12 text-muted-foreground">No previous events found.</div>
            ) : null}
            {!loading && pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="group cursor-pointer w-full min-w-0"
              >
                <Link
                  to={`/events/${encodeURIComponent(event.id)}`}
                  aria-label={`View details for ${event.title || 'event'}`}
                  className="block w-full h-full min-w-0"
                >
                  <div 
                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 w-full min-w-0
                               backdrop-blur-xl bg-white/80 dark:bg-white/10
                               border border-emerald-200/50 dark:border-primary/30 
                               hover:border-emerald-400 dark:hover:border-primary/60
                               shadow-lg hover:shadow-xl hover:shadow-emerald-500/20
                               hover:scale-[1.02] transform-gpu"
                  >
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden w-full">
                      <img
                        src={event.image}
                        alt={event.title || 'Event image'}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-background dark:via-background/40" />
                      
                      {/* External Link Icon */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-1.5 rounded-full backdrop-blur-xl bg-emerald-500/90 border border-emerald-400">
                          <ExternalLink className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full backdrop-blur-xl bg-white/90 dark:bg-background/80 border border-emerald-200/50 dark:border-primary/30 text-xs font-semibold text-slate-700 dark:text-foreground">
                          {event.dateStr ?? 'Date TBA'}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-4 text-center w-full min-w-0">
                      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent line-clamp-2 min-w-0">
                        {event.title ?? 'Untitled Event'}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-muted-foreground mb-3 line-clamp-2 text-xs min-w-0 break-words">
                        {event.description ?? ''}
                      </p>

                      {/* Location & Attendees */}
                      <div className="flex flex-wrap justify-center gap-3 text-xs">
                        <div className="flex items-center gap-1 text-slate-700 dark:text-muted-foreground">
                          <MapPin className="w-3 h-3 text-emerald-500" />
                          <span>{event.location ?? 'Location TBA'}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-700 dark:text-muted-foreground">
                          <Users className="w-3 h-3 text-cyan-500" />
                          <span>{event.attendees ?? '—'}</span>
                        </div>
                      </div>

                      {/* View Details CTA */}
                      <div className="mt-3 pt-3 border-t border-emerald-100 dark:border-white/10">
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-primary font-semibold text-xs group-hover:gap-2 transition-all">
                          View Details
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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