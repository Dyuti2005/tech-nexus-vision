import { motion } from "framer-motion";
import { Heart, Award, Handshake, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const currentSponsors = [
  { name: "Microsoft", tier: "Technology Partner" },
];

const Sponsors = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Sponsors
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Partner with <span className="gradient-text">TechNexus</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in empowering India's next generation of tech professionals. 
              Reach 5000+ engaged community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why <span className="gradient-text">Partner</span> With Us?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Brand Visibility</h3>
              <p className="text-sm text-muted-foreground">
                Showcase your brand to 5000+ tech professionals and decision-makers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Talent Access</h3>
              <p className="text-sm text-muted-foreground">
                Connect with skilled professionals and emerging talent in AI & Cloud
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Community Impact</h3>
              <p className="text-sm text-muted-foreground">
                Support free tech education and career development initiatives
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Current Sponsors */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our <span className="gradient-text">Partners</span>
            </h2>
          </motion.div>

          <div className="flex justify-center">
            {currentSponsors.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card-emerald p-8 rounded-3xl text-center"
              >
                <div className="text-3xl font-black gradient-text mb-2">{sponsor.name}</div>
                <p className="text-sm text-muted-foreground">{sponsor.tier}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-cyan p-8 md:p-12 rounded-3xl max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-muted-foreground mb-8">
              Interested in partnering with TechNexus Community? We'd love to hear from you.
            </p>
            <a
              href="mailto:sponsors@technexuscommunity.com"
              className="inline-flex items-center gap-2 btn-primary-glow px-8 py-4 rounded-2xl text-primary-foreground font-semibold"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Us</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sponsors;
