import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, ExternalLink } from "lucide-react";

import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

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
        return;
      }

      const mapped: EventDisplay[] = (dbEvents || []).map(e => ({
        id: e.id,
        title: e.title,
        date: new Date(e.date),
        dateStr: e.date_str,
        location: e.location,
        attendees: e.attendees || "25+",
        description: e.description || "",
        image: e.image_url && e.image_url.startsWith('http') ? e.image_url : (e.image_url || "/placeholder.svg"),
      }));

      setEvents(mapped);
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
                {/* Clean premium card */}
                <div 
                  className="relative h-full rounded-3xl overflow-hidden transition-all duration-300 bg-white border border-[#A8AAAC] hover:shadow-md hover:-translate-y-0.5 transform-gpu"
                >
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* External Link Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="p-2 rounded-full bg-white border border-[#A8AAAC]">
                        <ExternalLink className="w-4 h-4 text-[#0B1F1F]" />
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white border border-[#A8AAAC] text-sm font-semibold text-[#0B1F1F]">
                        {event.dateStr}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 text-center bg-white">
                    <h3 className="text-xl font-bold mb-3 text-[#FF4B1F] line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-[#6B7280] mb-4 line-clamp-2 text-sm">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-1.5 text-[#6B7280]">
                        <MapPin className="w-4 h-4 text-[#FF4B1F]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#6B7280]">
                        <Users className="w-4 h-4 text-[#FF4B1F]" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#A8AAAC]/40">
                      <span className="inline-flex items-center gap-2 text-[#0B1F1F] font-semibold text-sm group-hover:gap-3 transition-all">
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
