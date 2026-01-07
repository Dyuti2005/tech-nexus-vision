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
  speakers?: { name: string; topic: string }[];
  image: string;
}

export const previousEvents: PreviousEvent[] = [
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
    image: event1,
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
    image: event2,
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
    image: event3,
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
  {
    id: "agentic-ai-chennai-dec-2024",
    title: "Agentic AI Connect - Chennai",
    date: new Date("2024-12-20"),
    dateStr: "December 20, 2024",
    location: "Chennai",
    venue: "Tech Park, Chennai",
    attendees: "200+",
    description: "Our flagship Agentic AI event exploring autonomous AI systems and their real-world applications. Industry leaders and developers came together to discuss the future of AI agents.",
    highlights: [
      "Agentic AI architecture patterns",
      "Autonomous agent development",
      "LLM orchestration techniques",
      "Multi-agent systems",
      "Real-world AI agent demos"
    ],
    speakers: [
      { name: "Microsoft MVPs", topic: "Agentic AI Patterns" },
      { name: "Industry Experts", topic: "Production AI Agents" }
    ],
    image: event2,
  },
  {
    id: "azure-workshop-oct-2024",
    title: "Azure Cloud Workshop",
    date: new Date("2024-10-15"),
    dateStr: "October 2024",
    location: "Bengaluru",
    venue: "Microsoft Office, Bengaluru",
    attendees: "120+",
    description: "Hands-on workshop covering Azure fundamentals and cloud architecture best practices. Participants learned to build scalable solutions using Azure services.",
    highlights: [
      "Azure fundamentals deep dive",
      "Cloud architecture patterns",
      "Hands-on lab exercises",
      "Best practices for production",
      "Cost optimization strategies"
    ],
    image: event3,
  },
  {
    id: "ai-hackathon-sep-2024",
    title: "AI Hackathon",
    date: new Date("2024-09-20"),
    dateStr: "September 2024",
    location: "Hyderabad",
    venue: "Innovation Hub, Hyderabad",
    attendees: "80+",
    description: "24-hour hackathon focused on building AI-powered solutions using Azure services. Teams competed to create innovative applications solving real-world problems.",
    highlights: [
      "24-hour coding challenge",
      "Azure OpenAI integration",
      "Team collaboration",
      "Mentorship from experts",
      "Prizes and recognition"
    ],
    image: event4,
  },
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort recent to old
