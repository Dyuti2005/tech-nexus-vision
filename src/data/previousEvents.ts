import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";
import sprintChennai1 from "@/assets/events/sprint-imagine-cup-chennai-1.png";
import sprintChennai2 from "@/assets/events/sprint-imagine-cup-chennai-2.png";
import sprintChennai3 from "@/assets/events/sprint-imagine-cup-chennai-3.png";
import vscodeDevDays1 from "@/assets/events/vscode-dev-days-1.png";
import vscodeDevDays2 from "@/assets/events/vscode-dev-days-2.png";
import vscodeDevDays3 from "@/assets/events/vscode-dev-days-3.png";
import vscodeDevDays4 from "@/assets/events/vscode-dev-days-4.png";
import vscodeDevDays5 from "@/assets/events/vscode-dev-days-5.png";

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
  gallery?: string[];
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
    id: "ai-in-cloud-nov-2025",
    title: "AI in the Cloud: Harnessing Containers & Data at Scale",
    date: new Date("2025-11-08"),
    dateStr: "November 8, 2025",
    location: "Bengaluru",
    venue: "Cloudera, Bengaluru",
    attendees: "150+",
    description: "An exclusive event powered by TechNexus Community, in collaboration with Docker, Cloudera, and Microsoft. Deep dive into containerization, AI agents, and scaling AI workloads in the cloud.",
    highlights: [
      "Powering AI Agents with Docker Offload",
      "Cloudera on Cloud solutions",
      "Building multi-model frameworks",
      "AI SRE - Your 3 AM Production Assistant",
      "Building smarter AI systems with Microsoft Autogen"
    ],
    speakers: [
      { name: "Ajeet Singh Raina", topic: "From Local Dev to Cloud Scale: Powering AI Agents with Docker Offload", time: "11:00 - 11:30 AM" },
      { name: "Cloudera Team", topic: "Cloudera on Cloud", time: "11:30 - 12:00 PM" },
      { name: "Microsoft Team", topic: "Building the multi model framework: From Models to Applications", time: "12:00 - 12:30 PM" },
      { name: "Akshat Sandhaliya", topic: "How to Build your own AI SRE (Your 3 AM Production Assistant)", time: "12:30 - 1:00 PM" },
      { name: "Raveendiran RR", topic: "Building smarter AI systems with Microsoft Autogen", time: "1:30 - 2:00 PM" }
    ],
    image: event2,
  },
  {
    id: "skill-up-india-oct-2025",
    title: "TechNexus Skill-Up India – Azure & AI Fundamentals",
    date: new Date("2025-10-04"),
    dateStr: "October 4, 2025",
    location: "Virtual",
    venue: "Online Event",
    attendees: "500+",
    description: "A complimentary, community-initiated learning track designed to empower students, recent graduates, and professionals across India with essential cloud (AZ-900) and AI (AI-900) skills. Participants attend live expert-led sessions and become eligible for up to 50% discounted Microsoft certification vouchers.",
    highlights: [
      "Live sessions covering AZ-900 Azure Fundamentals",
      "AI-900 AI Fundamentals training",
      "Complete assignments for voucher eligibility",
      "50% off Microsoft certification vouchers",
      "Become Microsoft Certified in Azure or AI Fundamentals"
    ],
    speakers: [
      { name: "Apoorva Sharma", topic: "AZ-900 Azure Fundamentals" },
      { name: "Naveen Prabhu Chinnadurai", topic: "AI-900 Azure AI Fundamentals" }
    ],
    image: event1,
  },
  {
    id: "sprint-imagine-cup-chennai-oct-2025",
    title: "Sprint to Imagine Cup: AI Innovation Day - Chennai",
    date: new Date("2025-10-18"),
    dateStr: "October 18, 2025",
    location: "Chennai",
    venue: "Microsoft Office, Chennai",
    attendees: "180+",
    description: "An AI Innovation Day focused on Imagine Cup preparation, featuring sessions on Microsoft Fabric, AI Agents with MCP, Model Context Protocol, and Quantum Computing. Students and developers explored cutting-edge AI innovations.",
    highlights: [
      "AI in Microsoft Fabric: Unstructured Analytics without ETL",
      "Building Next Gen AI Agents with MCP",
      "Model Context Protocol for Coherent Conversations",
      "GitHub Copilot and MCP integration",
      "Quantum Computing demystified"
    ],
    speakers: [
      { name: "Vinodh Kumar", topic: "AI in Microsoft Fabric: Simplifying Unstructured Analytics without ETL", time: "10:00 - 10:45 AM" },
      { name: "Janarthanan Selvaraj", topic: "From Smart to Genius: Building Next Gen AI Agents with MCP", time: "10:45 - 11:30 AM" },
      { name: "Aakash Dhakshnamoorthy & Bhavya Srii", topic: "The Stateful AI: Implementing Model Context Protocol (MCP) for Coherent Conversations", time: "11:45 - 12:30 PM" },
      { name: "Ernestine Lerisha John", topic: "Quantum Demystified: Why Everyone's Talking About It", time: "12:30 - 1:15 PM" }
    ],
    image: sprintChennai1,
    gallery: [sprintChennai1, sprintChennai2, sprintChennai3],
  },
  {
    id: "vs-code-dev-days-bengaluru-sep-2025",
    title: "VS Code Dev Days – Bengaluru",
    date: new Date("2025-09-20"),
    dateStr: "September 20, 2025",
    location: "Bengaluru",
    venue: "Microsoft Corporation (India) Pvt. Ltd, Bengaluru",
    attendees: "200+",
    description: "A developer-focused event exploring VS Code, GitHub Copilot, and the Model Context Protocol (MCP). Attendees learned how to accelerate their coding journey with AI-powered tools and advanced integrations.",
    highlights: [
      "VS Code and GitHub Copilot keynote",
      "Accelerating coding with Copilot",
      "GitHub Copilot for AI Engineering",
      "MCP integration with GitHub Copilot",
      "Real-world AI development scenarios"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: VS Code and GitHub Copilot", time: "9:30 - 10:15 AM" },
      { name: "Prasanna Nagarajan", topic: "Accelerating your coding Journey - Guided by Copilot", time: "10:15 - 11:00 AM" },
      { name: "Sagnik Banerjee", topic: "Leveraging GitHub Copilot for AI Engineering", time: "11:00 - 11:45 AM" },
      { name: "Prateek Singh", topic: "Integrating MCP (Model Context Protocol) with GitHub Copilot", time: "12:00 - 1:00 PM" }
    ],
    image: vscodeDevDays1,
    gallery: [vscodeDevDays1, vscodeDevDays2, vscodeDevDays3, vscodeDevDays4, vscodeDevDays5],
  },
  {
    id: "microsoft-agentverse-bengaluru-aug-2025",
    title: "Microsoft AgentVerse: Bengaluru",
    date: new Date("2025-08-09"),
    dateStr: "August 9, 2025",
    location: "Bengaluru",
    venue: "Microsoft Ferns, Bangalore",
    attendees: "200+",
    description: "An immersive event exploring multi-agent AI workflows, Azure Foundry, GitOps, and Copilot Studio. Developers learned to build production-ready AI agents and deploy GenAI solutions with RAG patterns.",
    highlights: [
      "Design Patterns for Multi-Agent AI Workflows",
      "Zero-to-Production Journey with Azure Foundry",
      "GitOps Dynamics: The new era of DevOps",
      "Copilot Camp Blueprint for Agent Builders",
      "Build with GenAI & RAG",
      "Multi-agent solutions with Copilot Studio"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: Design Patterns for Multi-Agent AI Workflows", time: "9:30 - 10:00 AM" },
      { name: "Sujithkumar P Sukumaran", topic: "From Idea to Implementation: A Zero-to-Production Journey with Azure Foundry", time: "10:00 - 10:30 AM" },
      { name: "Megha Kadur", topic: "GitOps Dynamics: Navigating the new era of DevOps", time: "10:30 - 11:00 AM" },
      { name: "Kamal Shree", topic: "Prompt. Prototype. Deploy: The Copilot Camp Blueprint for Agent Builders", time: "11:30 - 12:00 PM" },
      { name: "Deepak Chawla", topic: "From Prompts to Projects: Build with GenAI & RAG", time: "12:00 - 12:30 PM" },
      { name: "Sriram Balaji", topic: "Build multi agent solutions with Copilot Studio", time: "12:30 - 1:00 PM" }
    ],
    image: event3,
  },
  {
    id: "global-genai-bootcamp-bengaluru-jul-2025",
    title: "Global GenAI Bootcamp - Bengaluru",
    date: new Date("2025-07-05"),
    dateStr: "July 5, 2025",
    location: "Bengaluru",
    venue: "Microsoft Ferns, Bangalore",
    attendees: "180+",
    description: "A global bootcamp exploring LLM agents, Copilot Studio, and enterprise-grade multi-agent systems. Attendees learned about the future of AI workforces and building smart agents with Elasticsearch and Azure Semantic Kernel.",
    highlights: [
      "AI Agents as Organizational Species",
      "Smart LLM Agents with Elasticsearch and Copilot Studio",
      "Knowledge as a Commodity in SDLC",
      "Automating Workflows with Copilot Studio",
      "Enterprise multi-agent with Azure Semantic Kernel and MCP"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: AI Agents as Organizational Species - What Happens When Workforces Go Synthetic?", time: "9:30 - 10:00 AM" },
      { name: "Someshwaran Mohankumar", topic: "Building Smart LLM Agents with Elasticsearch and Microsoft Copilot Studio!", time: "10:00 - 10:45 AM" },
      { name: "Sujithkumar P Sukumaran", topic: "How 'Knowledge as a Commodity' Changes the SDLC with AI Agents", time: "10:45 - 11:30 AM" },
      { name: "Sujin Nelladath", topic: "Unlocking Copilot Studio: Automating Workflows with Precision", time: "12:00 - 12:45 PM" },
      { name: "Santhosh Kumar", topic: "Building and deploying an enterprise grade multi-agent using Azure Semantic Kernel and MCP", time: "12:45 - 1:30 PM" }
    ],
    image: event4,
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
    image: event2,
  },
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort recent to old
