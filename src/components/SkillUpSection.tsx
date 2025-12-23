import { motion } from "framer-motion";
import { Cloud, Brain, CheckCircle, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  {
    id: "az-900",
    title: "Azure Fundamentals",
    code: "AZ-900",
    icon: Cloud,
    color: "emerald",
    sessions: 4,
    description: "Master the basics of Microsoft Azure and cloud platform fundamentals",
    topics: ["Cloud Concepts", "Azure Services", "Security & Privacy", "Pricing & Support"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
  },
  {
    id: "ai-900",
    title: "AI Fundamentals",
    code: "AI-900",
    icon: Brain,
    color: "cyan",
    sessions: 4,
    description: "Understand artificial intelligence and machine learning concepts",
    topics: ["AI Concepts", "Machine Learning", "Computer Vision", "Natural Language Processing"],
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
];

const SkillUpSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Skill-Up India
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Free <span className="gradient-text">Certification</span> Prep
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get certified in Microsoft Azure and AI with our structured learning paths and expert-led sessions
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className={`glass-card-${cert.color} p-8 rounded-3xl h-full relative overflow-hidden`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-${cert.color === 'emerald' ? 'primary' : 'secondary'}/10 flex items-center justify-center mb-6`}>
                  <cert.icon className={`w-8 h-8 text-${cert.color === 'emerald' ? 'primary' : 'secondary'}`} />
                </div>

                {/* Title & Code */}
                <div className="mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider text-${cert.color === 'emerald' ? 'primary' : 'secondary'} mb-1 block`}>
                    {cert.code}
                  </span>
                  <h3 className="text-2xl font-bold">{cert.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6">{cert.description}</p>

                {/* Sessions Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-sm font-medium">{cert.sessions} Sessions</span>
                </div>

                {/* Topics */}
                <div className="space-y-3 mb-8">
                  {cert.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 text-${cert.color === 'emerald' ? 'primary' : 'secondary'} flex-shrink-0`} />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-${cert.color === 'emerald' ? 'primary' : 'secondary'}/10 hover:bg-${cert.color === 'emerald' ? 'primary' : 'secondary'}/20 transition-colors text-${cert.color === 'emerald' ? 'primary' : 'secondary'} font-medium`}
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${cert.color === 'emerald' ? 'primary' : 'secondary'}/5 to-transparent rounded-bl-[100px]`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Syllabus Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/skill-up"
            className="inline-flex items-center gap-2 btn-primary-glow px-8 py-4 rounded-2xl text-primary-foreground font-semibold"
          >
            <span>View Full Syllabus</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillUpSection;
