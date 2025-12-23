import { motion } from "framer-motion";
import { Cloud, Brain, CheckCircle, ExternalLink, BookOpen, Clock, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const az900Modules = [
  {
    title: "Cloud Concepts",
    duration: "2 hours",
    topics: [
      "What is cloud computing?",
      "Shared responsibility model",
      "Cloud service types (IaaS, PaaS, SaaS)",
      "Public, private, and hybrid cloud",
      "Consumption-based model",
    ],
  },
  {
    title: "Azure Services",
    duration: "3 hours",
    topics: [
      "Azure compute services",
      "Azure networking services",
      "Azure storage services",
      "Azure database services",
      "Azure identity services",
    ],
  },
  {
    title: "Security & Privacy",
    duration: "2 hours",
    topics: [
      "Azure Security Center",
      "Azure Active Directory",
      "Network security groups",
      "Azure Key Vault",
      "Compliance and data protection",
    ],
  },
  {
    title: "Pricing & Support",
    duration: "1.5 hours",
    topics: [
      "Azure subscriptions",
      "Cost management tools",
      "Azure pricing calculator",
      "SLA and service lifecycle",
      "Azure support plans",
    ],
  },
];

const ai900Modules = [
  {
    title: "AI Concepts",
    duration: "2 hours",
    topics: [
      "Introduction to AI",
      "Machine Learning fundamentals",
      "Responsible AI principles",
      "AI workloads on Azure",
      "Common AI solutions",
    ],
  },
  {
    title: "Machine Learning",
    duration: "3 hours",
    topics: [
      "Azure Machine Learning workspace",
      "Automated ML",
      "Azure ML Designer",
      "Model deployment",
      "ML pipelines",
    ],
  },
  {
    title: "Computer Vision",
    duration: "2 hours",
    topics: [
      "Computer Vision service",
      "Custom Vision",
      "Face API",
      "Form Recognizer",
      "Video Indexer",
    ],
  },
  {
    title: "Natural Language Processing",
    duration: "2 hours",
    topics: [
      "Text Analytics",
      "Language Understanding (LUIS)",
      "Speech services",
      "Translator service",
      "QnA Maker",
    ],
  },
];

const SkillUp = () => {
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
              Skill-Up India
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Free <span className="gradient-text">Microsoft Certification</span> Prep
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structured learning paths with expert-led sessions to help you ace AZ-900 and AI-900 certifications
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>16+ Hours of Content</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-secondary" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" />
                <span>100% Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AZ-900 Section */}
      <section id="az-900" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-primary">AZ-900</span>
                <h2 className="text-3xl md:text-4xl font-black">Azure Fundamentals</h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              Master the basics of Microsoft Azure cloud platform. Perfect for beginners looking to start their cloud journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {az900Modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-emerald p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{module.title}</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary-glow px-6 py-3 rounded-xl text-primary-foreground font-semibold"
            >
              <span>Official Microsoft Learn Path</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="section-divider" />
      </div>

      {/* AI-900 Section */}
      <section id="ai-900" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-secondary">AI-900</span>
                <h2 className="text-3xl md:text-4xl font-black">AI Fundamentals</h2>
              </div>
            </div>
            <p className="text-muted-foreground max-w-3xl">
              Understand artificial intelligence and machine learning concepts on Azure. Learn about computer vision, NLP, and responsible AI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ai900Modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-cyan p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{module.title}</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <span>Official Microsoft Learn Path</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SkillUp;
