import { motion, AnimatePresence } from "framer-motion";
import { X, Cloud, Brain, CheckCircle, Clock, ExternalLink, GraduationCap, Award, Users } from "lucide-react";

interface SkillUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const certificationPath = [
  { step: 1, title: "Join Community", description: "Connect with fellow learners on WhatsApp" },
  { step: 2, title: "Attend Sessions", description: "Participate in live expert-led workshops" },
  { step: 3, title: "Practice Labs", description: "Hands-on experience with Azure services" },
  { step: 4, title: "Take Mock Tests", description: "Assess your preparation with practice exams" },
  { step: 5, title: "Review & Revise", description: "Consolidate learning with study materials" },
  { step: 6, title: "Schedule Exam", description: "Book your certification exam" },
  { step: 7, title: "Get Certified!", description: "Earn your Microsoft certification" },
];

const SkillUpModal = ({ isOpen, onClose }: SkillUpModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="relative h-full glass-card rounded-3xl overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Skill-Up India</h2>
                    <p className="text-sm text-muted-foreground">AI & Cloud Certification Drive</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card-emerald p-4 rounded-xl text-center">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">16+</div>
                    <div className="text-xs text-muted-foreground">Hours of Content</div>
                  </div>
                  <div className="glass-card-emerald p-4 rounded-xl text-center">
                    <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">Expert</div>
                    <div className="text-xs text-muted-foreground">Instructors</div>
                  </div>
                  <div className="glass-card-emerald p-4 rounded-xl text-center">
                    <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground">Free Program</div>
                  </div>
                </div>

                {/* 7-Step Certification Path */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary" />
                    </span>
                    7-Step Certification Path
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {certificationPath.map((item, index) => (
                      <div
                        key={item.step}
                        className="glass-card p-4 rounded-xl relative overflow-hidden group"
                      >
                        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {item.step}
                        </div>
                        <h4 className="font-semibold mb-1 pr-8">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                        {index < certificationPath.length - 1 && (
                          <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-muted-foreground/30">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* AZ-900 Syllabus */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">AZ-900</span>
                      <h3 className="text-xl font-bold">Azure Fundamentals</h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {az900Modules.map((module) => (
                      <div key={module.title} className="glass-card-emerald p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{module.title}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {module.duration}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {module.topics.map((topic) => (
                            <li key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                    >
                      <span>Official Microsoft Learn Path</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* AI-900 Syllabus */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary">AI-900</span>
                      <h3 className="text-xl font-bold">AI Fundamentals</h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {ai900Modules.map((module) => (
                      <div key={module.title} className="glass-card-cyan p-4 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{module.title}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {module.duration}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {module.topics.map((topic) => (
                            <li key={topic} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <a
                      href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary text-sm font-medium hover:underline"
                    >
                      <span>Official Microsoft Learn Path</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-border/50 bg-muted/30">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm">
                    Ready to start your certification journey?
                  </p>
                  <a
                    href="https://chat.whatsapp.com/yourlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow px-6 py-3 rounded-xl text-primary-foreground font-semibold"
                  >
                    Join via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SkillUpModal;
