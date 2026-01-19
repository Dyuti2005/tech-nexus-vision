import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Award, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import azarudeenImg from "@/assets/founders/azarudeen.png";
import vinodhImg from "@/assets/founders/vinodh-kumar.png";

interface Founder {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  display_order?: number;
}

const fallbackFounders = [
  {
    id: "1",
    name: "Mohammed Azarudeen Z.",
    title: "Microsoft MVP & AI Community Leader",
    linkedin_url: "https://www.linkedin.com/in/mohamed-azarudeen-428659205/",
    image_url: azarudeenImg,
  },
  {
    id: "2",
    name: "Vinodh Kumar",
    title: "Microsoft MVP & Data/AI Architect",
    linkedin_url: "https://www.linkedin.com/in/vinodh-kumar-173582132/",
    image_url: vinodhImg,
  },
];

const FoundersSection = () => {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFounders();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('founders-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'founders' }, () => {
        fetchFounders();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchFounders = async () => {
    try {
      const { data, error } = await supabase
        .from('founders')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) {
        console.error('Error fetching founders:', error);
        setFounders(fallbackFounders);
      } else if (data && data.length > 0) {
        setFounders(data);
      } else {
        setFounders(fallbackFounders);
      }
    } catch (err) {
      console.error('Error:', err);
      setFounders(fallbackFounders);
    } finally {
      setLoading(false);
    }
  };

  const gradients = ["from-primary to-secondary", "from-secondary to-primary"];

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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Meet Our <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Microsoft MVPs driving innovation in AI and Cloud technologies across India
          </p>
        </motion.div>

        {/* Founders Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-card-emerald p-8 rounded-3xl relative overflow-hidden h-full text-center">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 2]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* MVP Badge */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">Microsoft MVP</span>
                    </div>
                  </div>

                  {/* Avatar with Image */}
                  <div className="relative mb-6 inline-block">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${gradients[index % 2]} overflow-hidden shadow-lg mx-auto`}>
                      <img 
                        src={founder.image_url || "/placeholder.svg"} 
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-2 rounded-3xl border border-dashed border-primary/20"
                    />
                  </div>

                  {/* Info */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                      Co-Founder
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-muted-foreground">{founder.title}</p>
                  </div>

                  {/* LinkedIn Button */}
                  {founder.linkedin_url && (
                    <a
                      href={founder.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors group/link"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                      <span className="font-medium text-sm">Connect on LinkedIn</span>
                    </a>
                  )}

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-5 h-5 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FoundersSection;
