import { motion } from "framer-motion";
import { Linkedin, Award, Target, Heart, Users, Lightbulb, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Mohammed Azarudeen Z.",
    role: "Co-Founder",
    title: "Microsoft MVP & AI Community Leader",
    linkedin: "https://www.linkedin.com/in/mohamed-azarudeen-428659205/",
    bio: "Passionate about democratizing AI education and building inclusive tech communities across India.",
  },
  {
    name: "Vinodh Kumar",
    role: "Co-Founder",
    title: "Microsoft MVP & Data/AI Architect",
    linkedin: "https://www.linkedin.com/in/vinodh-kumar-173582132/",
    bio: "Dedicated to empowering the next generation of data and AI professionals through hands-on learning.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Democratizing access to cutting-edge technology education across India.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Building an inclusive environment where everyone can learn and grow together.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Fostering connections between industry experts, students, and professionals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying at the forefront of AI, Cloud, and emerging technologies.",
  },
];

const chapters = [
  { city: "Bengaluru", members: "2000+", color: "primary" },
  { city: "Chennai", members: "1800+", color: "secondary" },
  { city: "Hyderabad", members: "1200+", color: "primary" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Empowering India's <span className="gradient-text">Tech Future</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              TechNexus Community is India's premier Microsoft AI & Cloud technology community, 
              uniting 5000+ professionals across 3 major cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-emerald p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to cutting-edge AI and Cloud technologies by creating an 
                inclusive learning ecosystem. We provide free, high-quality education and 
                networking opportunities to tech enthusiasts across India, regardless of their 
                background or experience level.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-cyan p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the catalyst for India's AI and Cloud transformation by nurturing a generation 
                of skilled professionals who can drive innovation globally. We envision a future 
                where every aspiring technologist has access to world-class learning resources and 
                mentorship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Meet Our <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Microsoft MVPs driving innovation in AI and Cloud technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="glass-card-emerald p-8 rounded-3xl h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-primary">Microsoft MVP</span>
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                    <span className="text-2xl font-black text-primary-foreground">
                      {founder.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                    {founder.role}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{founder.title}</p>
                  <p className="text-muted-foreground mb-6">{founder.bio}</p>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    <span className="font-medium text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Our <span className="gradient-text-reverse">Chapters</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Growing communities across major tech hubs in India
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card-${chapter.color === 'primary' ? 'emerald' : 'cyan'} p-6 rounded-2xl text-center`}
              >
                <MapPin className={`w-8 h-8 text-${chapter.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold mb-2">{chapter.city}</h3>
                <p className="text-3xl font-black gradient-text">{chapter.members}</p>
                <p className="text-sm text-muted-foreground">Members</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
