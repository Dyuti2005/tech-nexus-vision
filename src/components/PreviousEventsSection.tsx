import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ExternalLink } from "lucide-react";
import { previousEvents as fallbackEvents } from "@/data/previousEvents";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

// Local image map for fallback (DB events without image_url)
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import agenticAiBengaluruCover from "@/assets/events/agentic-ai-bengaluru-cover.jpg";
import sprintChennai1 from "@/assets/events/sprint-imagine-cup-chennai-1.png";
import vscodeDevDays1 from "@/assets/events/vscode-dev-days-1.png";
import agentverseBengaluru1 from "@/assets/events/agentverse-bengaluru-1.png";
import azureBot1 from "@/assets/events/azure-bot-1.png";
import aiChai1 from "@/assets/events/ai-chai-1.png";

const localImageMap: Record<string, string> = {
  '/assets/gallery/event-1.jpeg': event1,
  '/assets/gallery/event-2.jpeg': event2,
  '/assets/gallery/event-3.jpeg': event3,
  '/assets/events/agentic-ai-bengaluru-cover.jpg': agenticAiBengaluruCover,
  '/assets/events/sprint-imagine-cup-chennai-1.png': sprintChennai1,
  '/assets/events/vscode-dev-days-1.png': vscodeDevDays1,
  '/assets/events/agentverse-bengaluru-1.png': agentverseBengaluru1,
  '/assets/events/azure-bot-1.png': azureBot1,
  '/assets/events/ai-chai-1.png': aiChai1,
};

const resolveImage = (imageUrl?: string): string => {
  if (!imageUrl) return event1;
  if (localImageMap[imageUrl]) return localImageMap[imageUrl];
  if (imageUrl.startsWith('http')) return imageUrl;
  return event1;
};

interface EventDisplay {
  id: string;
  title: string;
  date: Date;
  dateStr: string;
  location: string;
  attendees: string;
  description: string;
  image: string;
}

const PreviousEventsSection = () => {
  const [events, setEvents] = useState<EventDisplay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('previous-events-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'events' }, () => {
        fetchEvents();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchEvents = async () => {
    try {
      const { data: dbEvents, error } = await supabase
        .from('events')
        .select('*')
        .eq('is_upcoming', false)
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      } else {
        const mapped: EventDisplay[] = (dbEvents || []).map(e => ({
          id: e.id,
          title: e.title,
          date: new Date(e.date),
          dateStr: e.date_str,
          location: e.location,
          attendees: e.attendees || "50+",
          description: e.description || "",
          image: resolveImage(e.image_url || undefined),
        }));
        setEvents(mapped);
      }
    } catch (err) {
      console.error('Error:', err);
      setEvents([]);
    } finally {
      setLoading(false);
    }
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

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.05, 0.15) }}
                className="group"
              >
                <Link to={`/events/${event.id}`} className="block h-full">
                {/* Bright & Premium Frosted Glass Card */}
                <div 
                  className="relative h-full rounded-3xl overflow-hidden transition-all duration-500 
                             backdrop-blur-xl bg-white/80 dark:bg-white/10
                             border border-emerald-200/50 dark:border-primary/30 
                             hover:border-emerald-400 dark:hover:border-primary/60
                             shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20
                             hover:scale-[1.03] transform-gpu"
                >
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-cyan-100/30 dark:from-primary/10 dark:to-secondary/10" />
                  </div>

                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-background dark:via-background/40" />
                    
                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 rounded-full backdrop-blur-xl bg-emerald-500/90 border border-emerald-400">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full backdrop-blur-xl bg-white/90 dark:bg-background/80 border border-emerald-200/50 dark:border-primary/30 text-sm font-semibold text-slate-700 dark:text-foreground">
                        {event.dateStr}
                      </span>
                    </div>
                  </div>

                  {/* Content - Centered */}
                  <div className="relative p-6 text-center">
                    {/* Title with Gradient */}
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-cyan-500 transition-all line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-muted-foreground mb-4 line-clamp-2 text-sm">
                      {event.description}
                    </p>

                    {/* Location & Attendees - Centered */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-muted-foreground">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-700 dark:text-muted-foreground">
                        <Users className="w-4 h-4 text-cyan-500" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    {/* View Details CTA */}
                    <div className="mt-5 pt-4 border-t border-emerald-100 dark:border-white/10">
                      <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        View Event Details
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviousEventsSection;
