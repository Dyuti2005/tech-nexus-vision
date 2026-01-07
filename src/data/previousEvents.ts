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
import agentverseBengaluru1 from "@/assets/events/agentverse-bengaluru-1.png";
import agentverseBengaluru2 from "@/assets/events/agentverse-bengaluru-2.png";
import agentverseBengaluru3 from "@/assets/events/agentverse-bengaluru-3.png";
import agentverseBengaluru4 from "@/assets/events/agentverse-bengaluru-4.png";
import agentverseBengaluru5 from "@/assets/events/agentverse-bengaluru-5.png";

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
    image: agentverseBengaluru1,
    gallery: [agentverseBengaluru1, agentverseBengaluru2, agentverseBengaluru3, agentverseBengaluru4, agentverseBengaluru5],
  },
  {
    id: "github-copilot-bootcamp-chennai-jun-2025",
    title: "GitHub Copilot Bootcamp @ Chennai",
    date: new Date("2025-06-28"),
    dateStr: "June 28, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation India Pvt. Ltd.",
    attendees: "150+",
    description: "A hands-on bootcamp exploring GitHub Copilot, GitOps workflows, and AI-powered CI/CD. Developers learned to accelerate development with Copilot and integrate it with Azure Pipelines.",
    highlights: [
      "From Code to Co-Creation with GitHub Copilot",
      "Simplifying GitOps workflow for app development",
      "Vibe Coding with GitHub Copilot",
      "Hands-On Workshop: Accelerating Development",
      "AI-Powered CI/CD with Azure Pipelines"
    ],
    speakers: [
      { name: "Vinodh Kumar", topic: "Keynote: From Code to Co-Creation: The Future with GitHub Copilot", time: "9:30 - 10:00 AM" },
      { name: "Ajay Kidave", topic: "Simplifying GitOps workflow for app development", time: "10:00 - 10:40 AM" },
      { name: "Janarthanan Selvaraj", topic: "Vibe Coding with GitHub Copilot: A Game-Changer or a Risky Shortcut?", time: "10:40 - 11:20 AM" },
      { name: "Naveen Prabhu Chinnadurai & Kishore Kumar", topic: "Accelerating Development with GitHub Copilot: Hands-On Workshop", time: "11:50 - 12:30 PM" },
      { name: "Natheem Yousuf", topic: "AI-Powered CI/CD with GitHub Copilot & Azure Pipelines", time: "12:30 - 1:10 PM" }
    ],
    image: event3,
  },
  {
    id: "github-copilot-global-bootcamp-bengaluru-jun-2025",
    title: "GitHub Copilot Global Bootcamp - Bengaluru",
    date: new Date("2025-06-21"),
    dateStr: "June 21, 2025",
    location: "Bengaluru",
    venue: "Microsoft Luxor North Tower",
    attendees: "200+",
    description: "A global learning series helping developers leverage GitHub Copilot within VS Code, Visual Studio, and GitHub Codespaces. Hands-on labs explored Copilot capabilities with community experts and Microsoft MVPs.",
    highlights: [
      "AI Agents in Software Development",
      "From Code Completion to Co-Creation",
      "The evolution of LLMs in development",
      "Live Demos & Real-world Use Cases",
      "Hands-on Labs with GitHub Copilot"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "AI Agents in Software Development – How tools like Copilot reshape workflows" },
      { name: "Lakshit Pant", topic: "From Code Completion to Co-Creation – The evolution of LLMs in dev" },
      { name: "Pruthvi S", topic: "Live Demos & Use Cases – Real-world impact of GitHub Copilot" }
    ],
    image: event2,
  },
  {
    id: "global-ai-tour-season-of-agents-bengaluru-may-2025",
    title: "Microsoft's Global AI Tour: Season of Agents – Bengaluru",
    date: new Date("2025-05-17"),
    dateStr: "May 17, 2025",
    location: "Bengaluru",
    venue: "Microsoft Ferns, Bangalore",
    attendees: "200+",
    description: "An exciting stop on Microsoft's Global AI Tour exploring AI agents in action. Attendees learned about LLMs, natural language processing, multi-agent orchestration with Semantic Kernel, and architecting agent memory on Azure.",
    highlights: [
      "AI Agents in Action",
      "LLMs & Natural Language Processing",
      "Cross-Platform Multi-Agent Orchestration with Semantic Kernel",
      "Neon Serverless Postgres - Azure Native Integration",
      "Architecting Agent Memory and Context on Azure"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: Bot Minds & Bold Moves: AI Agents in Action", time: "9:30 - 10:00 AM" },
      { name: "Abhilekh Verma", topic: "LLMs & Natural Language Processing – Unlocking the Future of AI Communication", time: "10:00 - 10:30 AM" },
      { name: "Prasanna Nagarajan", topic: "Cross-Platform Multi-Agent Orchestration with Semantic Kernel", time: "10:30 - 11:00 AM" },
      { name: "Priyanshi Verma", topic: "Neon Serverless Postgres - An Azure Native Integration", time: "11:20 - 11:50 AM" },
      { name: "Prateek Singh", topic: "The Data Behind the Decision: Architecting Agent Memory and Context on Azure", time: "11:50 - 1:20 PM" }
    ],
    image: event1,
  },
  {
    id: "nextgen-ai-connect-chennai-may-2025",
    title: "NextGen AI Connect: Building NextGen Leaders",
    date: new Date("2025-05-03"),
    dateStr: "May 3, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation India Pvt. Ltd.",
    attendees: "150+",
    description: "An inspiring event focused on building the next generation of AI leaders. Students and professionals explored AI innovation, the power of community, and the new era of AI in education.",
    highlights: [
      "NextGen AI: Innovate, Integrate, Inspire",
      "3 C's of Success: College, Cloud, Community",
      "AI in Education - New Era of Coding",
      "Networking with Microsoft MVPs"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "NextGen AI: Innovate, Integrate, Inspire", time: "9:50 - 10:30 AM" },
      { name: "Lakshit Pant", topic: "3 C's of Success: College, Cloud, Community", time: "10:30 - 11:15 AM" },
      { name: "ShivaRam", topic: "AI in Education - New Era of Coding", time: "11:30 - 12:15 PM" }
    ],
    image: event3,
  },
  {
    id: "microsoft-developer-day-chennai-apr-2025",
    title: "Microsoft Developer Day - Chennai",
    date: new Date("2025-04-26"),
    dateStr: "April 26, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation India Pvt. Ltd.",
    attendees: "180+",
    description: "A developer-focused event exploring AI and Fabric integration, responsible AI practices on Azure, Microsoft Semantic Kernel, and real-time anomaly detection with streaming data.",
    highlights: [
      "AI Meets Fabric: Architecting Intelligence at Lakehouse Scale",
      "Implementing Responsible AI on Azure",
      "Empower Apps with Smart Copilot using Semantic Kernel",
      "Real-Time Anomaly Detection with AI"
    ],
    speakers: [
      { name: "Vinodh Kumar", topic: "Keynote + AI Meets Fabric: Architecting Intelligence at Lakehouse Scale", time: "9:30 - 10:30 AM" },
      { name: "Muralidharan Deenathayalan", topic: "Implementing Responsible AI on Azure: Governance, Compliance, and Guardrails", time: "10:30 - 11:15 AM" },
      { name: "Vinoth Rajendran", topic: "Empower Your Apps with a Smart Copilot Using Microsoft Semantic Kernel", time: "11:30 - 12:15 PM" },
      { name: "Harun Rasheed Basheer", topic: "Real-Time Anomaly Detection with AI on Streaming Data", time: "12:15 - 1:00 PM" }
    ],
    image: event2,
  },
  {
    id: "innovateher-microsoft-women-ai-tech-apr-2025",
    title: "InnovateHer with Microsoft - Women in AI & Tech 👩🏻‍💼",
    date: new Date("2025-04-10"),
    dateStr: "April 10, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation (India) Pvt. Ltd.",
    attendees: "120+",
    description: "A special event celebrating women in AI and tech. Sessions covered empowering women with Azure AI, productivity techniques, growth mindset, and overcoming self-doubt in leadership.",
    highlights: [
      "AI for Her: Empowering Women with Azure AI",
      "Vedic Todolist for Productivity",
      "Rewiring Your Mind with Growth Mindset",
      "From Fear to Fearless: Overcoming Self-Doubt in Leadership",
      "Learn, Connect, and Innovate with AI"
    ],
    speakers: [
      { name: "Sindhu Chengad", topic: "Keynote: Cloud & AI Business Leadership", time: "5:45 - 6:00 PM" },
      { name: "Poornimma S", topic: "AI for Her: Empowering Women with Azure AI", time: "6:00 - 6:30 PM" },
      { name: "Vanitha Ganeshmurthy", topic: "Vedic Todolist to be Productive", time: "6:30 - 7:00 PM" },
      { name: "Kauser Khan", topic: "Rewiring Your Mind: How a Growth Mindset Fuels Motivation", time: "7:15 - 7:45 PM" },
      { name: "Supriya Prashanth", topic: "From Fear to Fearless: Overcoming Self-Doubt in Leadership", time: "7:45 - 8:15 PM" }
    ],
    image: event4,
  },
  {
    id: "microsoft-ai-and-chai-chennai-mar-2025",
    title: "Microsoft AI and Chai ☕ – Sip, Learn, Innovate!",
    date: new Date("2025-03-15"),
    dateStr: "March 15, 2025",
    location: "Chennai",
    venue: "Microsoft Corporation (India) Pvt. Ltd.",
    attendees: "150+",
    description: "An engaging event combining AI learning with chai! Sessions covered Azure OpenAI Service integration, monitoring AI instances, and deep dives into reasoning LLMs with Chain of Thought and reinforcement learning.",
    highlights: [
      "AI for Developers: Writing Code or Resignations?",
      "Azure OpenAI Service: From Setup to Production",
      "RAG Patterns and Optimization Techniques",
      "Monitoring Azure OpenAI Instances",
      "Deep Dive into Reasoning LLMs and Chain of Thought"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: AI for Developers - Writing Code or Writing Our Resignations?", time: "10:00 - 10:30 AM" },
      { name: "Priyanka Sharma", topic: "Practical Guide to Azure OpenAI Service Integration: From Setup to Production", time: "10:30 - 11:15 AM" },
      { name: "Samik Roy", topic: "Monitor Your Azure OpenAI Instances", time: "11:15 - 12:10 PM" },
      { name: "Jayita Bhattacharyya", topic: "Seeking Deep onto Reasoning LLMs", time: "12:30 - 1:15 PM" }
    ],
    image: event1,
  },
  {
    id: "microsoft-ai-community-day-bengaluru-feb-2025",
    title: "Microsoft AI Community Day",
    date: new Date("2025-02-22"),
    dateStr: "February 22, 2025",
    location: "Bengaluru",
    venue: "Microsoft Luxor North Tower",
    attendees: "200+",
    description: "A community-driven event exploring Azure and Microsoft AI innovations. Sessions covered Dataverse integration with Microsoft Fabric, building smart Angular apps with Azure AI Vision, and AI-driven Copilot Agents.",
    highlights: [
      "Azure and Microsoft AI Innovations",
      "Integrating Dataverse with Microsoft Fabric",
      "Smart Angular Apps with Azure AI Vision",
      "OCR Capabilities with Azure AI Vision",
      "Building AI-driven Copilot Agents with Copilot Studio"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Keynote: Azure and Microsoft AI Innovations", time: "9:30 - 10:00 AM" },
      { name: "Nandan Hegde", topic: "Exploring Diverse Methods to Integrate Dataverse Data with MSFT Fabric", time: "10:00 - 10:45 AM" },
      { name: "Ankit Sharma", topic: "Create Smart Angular Apps Using Azure AI Vision", time: "10:45 - 11:30 AM" },
      { name: "Swati Ramanuj", topic: "Introduction to AI-driven Copilot Agents", time: "11:45 - 12:30 PM" }
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
    venue: "Microsoft Corporation India Pvt. Ltd.",
    attendees: "200+",
    description: "Season 3 of our flagship AI series, showcasing the Best of AI @ Ignite. Sessions covered AI Foundry for rapid prototyping, GenAI integration with Microsoft Fabric, and key design patterns for AI applications.",
    highlights: [
      "Innovation with AI Foundry: Transforming Ideas into Impact",
      "AI Meets Data: Revolutionizing Microsoft Fabric with GenAI",
      "Developing AI Applications: Key Use Cases and Design Patterns",
      "Real-world examples and live demos",
      "Panel Discussion with Industry Experts"
    ],
    speakers: [
      { name: "Mohamed Azarudeen", topic: "Innovation with AI Foundry: Transforming Ideas into Impact", time: "10:00 - 10:45 AM" },
      { name: "Vinodh Kumar", topic: "AI Meets Data: Revolutionizing Microsoft Fabric with GenAI", time: "10:45 - 11:30 AM" },
      { name: "Manikandan", topic: "Developing AI Applications: Key Use Cases and Design Patterns", time: "11:40 - 12:30 PM" }
    ],
    image: event2,
  },
  {
    id: "ai-in-action-microsoft-bengaluru-jan-2025",
    title: "AI In Action: Exploring Innovation @ Microsoft",
    date: new Date("2025-01-03"),
    dateStr: "January 3, 2025",
    location: "Bengaluru",
    venue: "Microsoft Reactor, Bengaluru",
    attendees: "180+",
    description: "An event exploring cutting-edge AI advancements and how they're reshaping industries. Sessions covered the latest AI breakthroughs, real-world applications, and responsible AI practices.",
    highlights: [
      "Latest Breakthroughs in AI Innovation",
      "Real-world AI Applications Across Industries",
      "Responsible AI and Ethical Innovation",
      "Transformative Power of AI",
      "Networking with Thought Leaders"
    ],
    speakers: [
      { name: "Vinayak Hegde", topic: "Principle AI Advocate Insights", time: "11:00 AM" },
      { name: "Lakshit Pant", topic: "Program Manager Perspectives", time: "12:00 PM" },
      { name: "Mohamed Azarudeen", topic: "AI Innovation and Development", time: "1:00 PM" }
    ],
    image: event1,
  },
  {
    id: "learn-azure-bot-services-dec-2024",
    title: "Learn Azure Bot Services & Identity Access",
    date: new Date("2024-12-28"),
    dateStr: "December 28, 2024",
    location: "Srivilliputhur",
    venue: "KARE, Srivilliputhur",
    attendees: "100+",
    description: "The inaugural TechNexus Community event! An empowering day focused on Azure Bot Services and Identity Access. Expert insights on navigating a career in tech, networking, and building an inclusive tech community.",
    highlights: [
      "Azure Bot Services Deep Dive",
      "Identity Access Management",
      "Career Insights in Tech",
      "Diversity and Inclusion in Tech",
      "First TechNexus Community Event 🎉"
    ],
    speakers: [
      { name: "Justice Gideon", topic: "Azure Bot Services & Identity Access", time: "12:00 - 3:00 PM" }
    ],
    image: event4,
  },
].sort((a, b) => b.date.getTime() - a.date.getTime()); // Sort recent to old
