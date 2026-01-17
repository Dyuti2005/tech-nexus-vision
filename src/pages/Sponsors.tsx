import { motion } from "framer-motion";
import { Heart, Award, Handshake, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sponsors = [
  {
    name: "Microsoft",
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="h-8 w-auto">
        <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
        <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
        <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
        <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
      </svg>
    ),
    textLogo: "Microsoft"
  },
  {
    name: "Neon",
    logo: (
      <svg viewBox="0 0 120 40" className="h-8 w-auto">
        <rect x="2" y="2" width="36" height="36" rx="8" fill="none" stroke="url(#neonGrad)" strokeWidth="3"/>
        <path d="M14 28 L14 12 L26 28 L26 12" fill="none" stroke="url(#neonGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5a0"/>
            <stop offset="100%" stopColor="#00c4e0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    textLogo: "NEON"
  },
  {
    name: "ID8NXT",
    logo: (
      <svg viewBox="0 0 100 40" className="h-8 w-auto">
        <rect x="2" y="2" width="96" height="36" fill="none" stroke="#e63946" strokeWidth="2"/>
      </svg>
    ),
    textLogo: "ID8NXT",
    textColor: "#1a1a2e"
  },
  {
    name: "Azure Society of Excellence",
    logo: null,
    textLogo: (
      <div className="flex flex-col items-center">
        <span className="text-[#0078d4] font-semibold text-sm">Azure</span>
        <span className="text-xs text-muted-foreground">Society of Excellence</span>
        <span className="text-[10px] text-muted-foreground/70">Powered by ID8NXT</span>
      </div>
    )
  },
  {
    name: "Elastic",
    logo: (
      <svg viewBox="0 0 40 40" className="h-8 w-auto">
        <circle cx="20" cy="8" r="6" fill="#fed10a"/>
        <circle cx="10" cy="20" r="6" fill="#00bfb3"/>
        <circle cx="30" cy="20" r="6" fill="#f04e98"/>
        <circle cx="15" cy="32" r="6" fill="#1ba9f5"/>
        <circle cx="25" cy="32" r="6" fill="#93c90e"/>
        <circle cx="20" cy="20" r="5" fill="#0077cc"/>
      </svg>
    ),
    textLogo: "elastic"
  },
  {
    name: "Polaris School of Technology",
    logo: (
      <svg viewBox="0 0 40 40" className="h-8 w-auto">
        <path d="M20 5 L35 35 L5 35 Z" fill="none" stroke="#f5a623" strokeWidth="2"/>
        <circle cx="25" cy="15" r="3" fill="#f5a623"/>
        <path d="M25 15 Q30 20 35 15" fill="none" stroke="#f5a623" strokeWidth="1.5"/>
      </svg>
    ),
    textLogo: (
      <div className="flex flex-col">
        <span className="font-bold text-foreground">POLARIS</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">School of Technology</span>
      </div>
    )
  },
  {
    name: "Redis",
    logo: (
      <svg viewBox="0 0 100 40" className="h-10 w-auto">
        <text x="5" y="32" fontFamily="cursive, serif" fontSize="32" fontWeight="bold" fontStyle="italic" fill="#d82c20">Redis</text>
      </svg>
    ),
    textLogo: null
  }
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
              Sponsor <span className="gradient-text">TechNexus</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in empowering India's next generation of tech professionals. 
              Reach 5000+ engaged community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why <span className="gradient-text">Sponsor</span> Us?
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our <span className="gradient-text">Sponsors</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proudly supported by industry leaders who share our vision
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 cursor-pointer"
                >
                  {sponsor.logo}
                  {typeof sponsor.textLogo === 'string' ? (
                    <span 
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: sponsor.textColor || 'currentColor' }}
                    >
                      {sponsor.textLogo}
                    </span>
                  ) : sponsor.textLogo}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
            <p className="text-muted-foreground mb-8">
              Interested in sponsoring TechNexus Community? We'd love to hear from you.
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
