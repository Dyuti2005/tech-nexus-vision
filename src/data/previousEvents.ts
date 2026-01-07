import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";

export interface PreviousEvent {
  id: string;
  title: string;
  date: Date;
  dateStr: string;
  location: string;
  venue?: string;
  attendees: string;
  description: string;
  highlights: string[];
  speakers?: { name: string; topic: string; time?: string }[];
  image: string;
}

export const previousEvents: PreviousEvent[] = [
  {
    id: "agentic-ai-connect-chennai-dec-2025",
    title: "Agentic AI Connect - Chennai",
    date: new Date("2025-12-20"),
    dateStr: "December 20, 2025",
    location: "Chennai",
    venue: "Yuniq, Ticel Biopark, Taramani, Chennai",
    attendees: "200+",
    description: "An exclusive Agentic AI event hosted by TechNexus Community exploring autonomous AI systems, LLM orchestration, RAG patterns, and multi-agent architectures. Industry leaders shared insights on building intelligent AI applications.",
    highlights: [
      "Fabric AI Transformations for Modern Data Platforms",
      "AI Product and Overview of RAG LLM",
      "Building Stateful Multi-Agent Systems with LangGraph",
      "Intelligent Apps with Agentic Retrieval and MCP",
      "Networking with Microsoft MVPs and AI experts"
    ],
    speakers: [
      { name: "Vinodh Kumar", topic: "Fabric AI Transformations for Modern Data Platforms", time: "10:00 - 10:45 AM" },
      { name: "Reshma", topic: "AI Product and Overview of RAG LLM", time: "10:45 - 11:30 AM" },
      { name: "Premkumar Kora", topic: "From Chains to Cycles: Building a Stateful, Multi-Agent Job Matching Engine with LangGraph", time: "12:00 - 12:45 PM" },
      { name: "Akshaykumar", topic: "Building Intelligent Apps with Agentic Retrieval and MCP", time: "12:45 - 1:30 PM" }
    ],
    image: event1,
  },
  {
    id: "sprint-imagine-cup-2025",
    title: "Sprint to Imagine Cup – AI Innovation Day",
    date: new Date("2025-11-15"),
    dateStr: "November 15, 2025",
    location: "Bengaluru",
    venue: "Microsoft Ferns Office, Bellandur, Bengaluru",
    attendees: "150+",
    description: "An exclusive gathering powered by TechNexus Community in collaboration with Microsoft, focused on shaping the future of AI and exploring cutting-edge innovations. Students and developers showcased their AI solutions for the Imagine Cup competition.",
    highlights: [
      "AI Innovation showcase and demos",
      "Imagine Cup preparation sessions",
      "Networking with Microsoft MVPs",
      "Hands-on AI development workshops",
      "Student startup pitches"
    ],
    speakers: [
      { name: "Industry Experts", topic: "AI Innovation Patterns" },
      { name: "Microsoft MVPs", topic: "Building for Imagine Cup" }
    ],
    image: event2,
  },
  {
    id: "skill-up-india-oct-2025",
    title: "Skill-Up India: AZ-900 & AI-900 Sessions",
    date: new Date("2025-10-26"),
    dateStr: "October 2025",
    location: "Virtual",
    venue: "Online Sessions",
    attendees: "500+",
    description: "A community-led initiative to master Azure fundamentals with AZ-900 and AI-900 certifications. Multiple expert-led sessions covering cloud fundamentals and AI concepts.",
    highlights: [
      "AZ-900 Azure Fundamentals deep dive",
      "AI-900 Azure AI Fundamentals training",
      "Live Q&A with certified professionals",
      "Practice exam walkthroughs",
      "Certification tips and strategies"
    ],
    speakers: [
      { name: "Apoorva Sharma", topic: "AZ-900 Azure Fundamentals" },
      { name: "Naveen Prabhu Chinnadurai", topic: "AI-900 Azure AI Fundamentals" }
    ],
    image: event3,
  },
  {
    id: "ai-in-cloud-oct-2025",
    title: "AI in the Cloud – Containers & Data at Scale",
    date: new Date("2025-10-25"),
    dateStr: "October 25, 2025",
    location: "Bengaluru",
    venue: "Tech Hub, Bengaluru",
    attendees: "120+",
    description: "An exclusive event powered by TechNexus Community, in collaboration with Docker, Microsoft, and industry partners. Deep dive into containerization and scaling AI workloads.",
    highlights: [
      "Docker containerization best practices",
      "Scaling AI/ML workloads in Kubernetes",
      "Azure Container Apps deployment",
      "Real-world case studies",
      "Hands-on container labs"
    ],
    speakers: [
      { name: "Docker Experts", topic: "Container Orchestration" },
      { name: "Cloud Architects", topic: "Data at Scale Patterns" }
    ],
    image: event4,
  },
  {
    id: "season-of-ai-s3-jan-2025",
    title: "Season of AI - Season 3: Best of AI @ Ignite",
    date: new Date("2025-01-25"),
    dateStr: "January 25, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation Pvt Ltd, Chennai",
    attendees: "200+",
    description: "Season 3 of our flagship AI series, showcasing the Best of AI @ Ignite with an incredible lineup of speakers covering AI-first innovation, Generative AI with Microsoft Fabric, and building scalable AI applications.",
    highlights: [
      "AI First Innovation with Agents",
      "Microsoft Copilot in Power Platform",
      "GenAI with Microsoft Fabric",
      "AI Application Design Patterns",
      "Industry use cases"
    ],
    speakers: [
      { name: "Karthikeyan VK", topic: "AI First Innovation with Agents and Microsoft Copilot" },
      { name: "Vinodh Kumar", topic: "AI Meets Data: Revolutionizing Microsoft Fabric with GenAI" },
      { name: "Manikandan Murugesan", topic: "Developing AI Applications: Key Use Cases and Design Patterns" }
    ],
    image: event1,
  },
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort recent to old
