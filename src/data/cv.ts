export type ContactInfo = {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  website?: string;
};

export type MetricAccent = "teal" | "purple" | "red" | "yellow";

export type Metric = {
  value: string;
  label: string;
  accent: MetricAccent;
};

export type WhatIDo = {
  emoji: string;
  title: string;
  description: string;
  tags: { label: string; teal?: boolean }[];
};

export type StackCategory = {
  category: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  period: string;
  role: string;
  contractType: string;
  summary: string;
  bullets: string[];
  tags: { label: string; teal?: boolean }[];
};

export type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  role: string;
  company: string;
};

export type Language = {
  name: string;
  level: string;
  code: string;
};

export type PortfolioCard = {
  thumbVariant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  emoji: string;
  label: string;
  title: string;
  badge?: "Soon";
  description: string;
  metrics?: { value: string; key: string }[];
  tags: { label: string; teal?: boolean }[];
  links: {
    live?: { url: string; label: string };
    github?: string;
    soon?: boolean;
  };
  featured?: boolean;
};

export type CV = {
  header: ContactInfo;
  summary: string[];
  metrics: Metric[];
  whatIDo: WhatIDo[];
  stack: StackCategory[];
  portfolio: PortfolioCard[];
  experience: ExperienceEntry[];
  testimonials: Testimonial[];
  languages: Language[];
};

export const cv: CV = {
  header: {
    name: "Javier Olivieri",
    headline: "Agentic AI Architect · Building AI-native systems for founders",
    location: "Rosario, Argentina",
    phone: "+54 9 341 377 7677",
    email: "javi10823@gmail.com",
    linkedin: "linkedin.com/in/javierolivieri",
    github: "github.com/javi10823",
  },

  summary: [
    "I design and build **agentic AI systems and automation architectures** — from autonomous multi-agent pipelines and RAG systems to voice AI products and full-stack AI-native applications that ship to production.",
    "With **17+ years in full-stack development** and **3+ years specifically in production AI systems**, I specialize in mapping business processes end-to-end, identifying where AI creates real leverage, and executing — from technical blueprint to deployed system. I currently run multiple production AI products serving real clients daily. You get a partner who thinks in outcomes, not tickets.",
  ],

  metrics: [
    { value: "17+", label: "Years Dev Experience", accent: "teal" },
    { value: "40+", label: "Shipped Projects", accent: "purple" },
    { value: "8+", label: "US Clients", accent: "red" },
    { value: "5", label: "AI Products Live", accent: "yellow" },
  ],

  whatIDo: [
    {
      emoji: "🤖",
      title: "Agentic AI Systems",
      description:
        "Production multi-agent workflows using Claude API, CrewAI, MCP and LangGraph. Tool use, RAG pipelines, vision agents, human-in-the-loop. Already running in production, not PoCs.",
      tags: [
        { label: "Claude API", teal: true },
        { label: "LangGraph", teal: true },
        { label: "CrewAI" },
        { label: "MCP" },
        { label: "RAG" },
        { label: "Vision" },
      ],
    },
    {
      emoji: "🎙️",
      title: "Voice AI & Conversational",
      description:
        "End-to-end voice agents with Retell AI, n8n middleware, GHL integration. Built and deployed a full dialer PoC for US healthcare in weeks, not quarters.",
      tags: [
        { label: "Retell AI", teal: true },
        { label: "Twilio", teal: true },
        { label: "n8n" },
        { label: "GHL" },
        { label: "Voice" },
      ],
    },
    {
      emoji: "⚙️",
      title: "Process Design & Automation",
      description:
        "End-to-end workflow audits: map ops, identify bottlenecks, design scalable automated systems — n8n, Make, APIs, LLMs, document parsing, SaaS integrations.",
      tags: [
        { label: "n8n", teal: true },
        { label: "Make" },
        { label: "Zapier" },
        { label: "Webhooks" },
        { label: "APIs" },
      ],
    },
    {
      emoji: "🏗️",
      title: "AI-Native Product Architecture",
      description:
        "Full-stack AI products from scratch — Next.js + FastAPI + Claude API + Postgres + vector DBs. Technical blueprint, architecture, and execution in one engagement.",
      tags: [
        { label: "Next.js", teal: true },
        { label: "FastAPI", teal: true },
        { label: "Claude API" },
        { label: "Postgres" },
        { label: "Vector DBs" },
      ],
    },
  ],

  stack: [
    {
      category: "LLM Systems",
      items: [
        "Claude",
        "OpenAI",
        "Gemini",
        "Prompt Engineering",
        "Token Management",
        "RAG Pipelines",
        "Vector DBs (Qdrant, pgvector)",
        "Embeddings",
        "Structured Outputs",
        "Prompt Caching",
      ],
    },
    {
      category: "Agent Orchestration",
      items: [
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "CrewAI",
        "MCP Servers",
        "Claude Code",
        "Multi-agent workflows",
        "Human-in-the-loop",
        "Tool use",
      ],
    },
    {
      category: "Voice AI & Observability",
      items: [
        "Retell AI",
        "Twilio",
        "n8n middleware",
        "Langfuse",
        "Audit logging",
        "Custom tracing",
        "Debug-mode pipelines",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "NestJS",
        "Node.js",
        "Python (FastAPI, Django/DRF)",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "REST",
        "GraphQL",
        "Document parsing",
        "API + Webhooks",
      ],
    },
    {
      category: "Frontend & Infra",
      items: [
        "Next.js",
        "React",
        "React Native",
        "TypeScript",
        "Tailwind",
        "AWS",
        "Docker",
        "Vercel",
        "Railway",
        "CI/CD",
        "GitHub Actions",
      ],
    },
    {
      category: "Leadership",
      items: [
        "Tech Lead (6+ yr)",
        "Systems thinking",
        "Process design",
        "Ops consulting",
        "Remote teams",
        "US clients",
        "Hiring pipelines",
      ],
    },
  ],

  portfolio: [
    {
      thumbVariant: 1,
      emoji: "🪨",
      label: "Agentic AI · Computer Vision · Automation",
      title: "D'Angelo Marmolería — AI Quoting Agent",
      description:
        "Conversational AI agent that reads architectural floor plans, applies 30+ business rules, validates material stock, and auto-generates PDF + Excel quotes. Built with Claude API, Next.js, streaming, and Google Sheets lead capture. Replaced a fully manual 3hr process.",
      metrics: [
        { value: "3hrs→min", key: "Quote time" },
        { value: "70%", key: "Leads recovered" },
        { value: "30+", key: "Business rules" },
      ],
      tags: [
        { label: "Claude API", teal: true },
        { label: "Agentic", teal: true },
        { label: "Next.js" },
        { label: "TypeScript" },
        { label: "Google Sheets" },
        { label: "PDF Gen" },
      ],
      links: {
        live: { url: "https://ia-agent-quote-marble-operator.vercel.app/", label: "View Live" },
        github: "https://github.com/javi10823/ia-agent-quote-marble-operator",
      },
      featured: true,
    },
    {
      thumbVariant: 7,
      emoji: "💬",
      label: "Conversational AI · Lead Conversion · Streaming",
      title: "D'Angelo Marmolería — Valentina, Lead Conversion Chatbot",
      description:
        "Customer-facing conversational agent (Valentina) that guides prospects through a full quoting intake — collecting measurements, materials, and project details — then delivers a real-time quote via streaming. Integrated with Google Drive for plan uploads and Google Sheets for lead capture. Replaces a high-dropout manual intake form, converting cold traffic into qualified leads with budget clarity before the first human contact.",
      metrics: [
        { value: "~0", key: "Manual intake" },
        { value: "Real-time", key: "Quote streaming" },
        { value: "Google", key: "Sheets + Drive" },
      ],
      tags: [
        { label: "Claude API", teal: true },
        { label: "Streaming", teal: true },
        { label: "Next.js" },
        { label: "TypeScript" },
        { label: "Google Drive" },
        { label: "Lead Capture" },
        { label: "Vercel" },
      ],
      links: {
        live: { url: "https://ia-agent-quote-marble-web.vercel.app/", label: "View Live" },
        github: "https://github.com/javi10823/ia-agent-quote-marble-web",
      },
      featured: true,
    },
    {
      thumbVariant: 8,
      emoji: "📊",
      label: "AI Marketing · Meta Ads · Analytics Dashboard · PoC",
      title: "HARA Nutrition — AI-Powered Marketing PoC",
      description:
        "End-to-end AI marketing PoC built for Bold Coffee as a case study. Designed and launched Meta Ads campaigns targeting nutrition personas, then built a modular real-time dashboard pulling live data from the Meta Marketing API — spend, impressions, CTR, ROAS, and audience breakdowns. Demonstrates the full loop: AI-assisted creative → paid traffic → live performance intelligence, without a BI team or third-party analytics tools.",
      metrics: [
        { value: "Meta API", key: "Live data" },
        { value: "AI", key: "Creative assist" },
        { value: "0 tools", key: "No BI stack" },
      ],
      tags: [
        { label: "Meta Marketing API", teal: true },
        { label: "Meta Ads", teal: true },
        { label: "Next.js" },
        { label: "Claude API" },
        { label: "Dashboard" },
        { label: "AI Creative" },
        { label: "Bold Coffee" },
      ],
      links: {
        live: { url: "https://boldcoffee-dashboard.netlify.app/", label: "Coming Soon" },
        github: "https://github.com/javi10823/bold-marketing-ia-poc",
      },
      featured: true,
    },
    {
      thumbVariant: 6,
      emoji: "📞",
      label: "AI Voice Dialer",
      title: "HealthHue",
      badge: "Soon",
      description:
        "Retell AI voice agent + n8n orchestration + GHL CRM for a US healthcare client. End-to-end voice-first PoC with React setter panel for live operator handoff.",
      metrics: [
        { value: "Production", key: "Grade PoC" },
        { value: "Weeks", key: "Time to ship" },
      ],
      tags: [
        { label: "Retell AI", teal: true },
        { label: "n8n", teal: true },
        { label: "GHL" },
        { label: "React" },
        { label: "Railway" },
        { label: "Vercel" },
      ],
      links: {
        soon: true,
      },
    },
    {
      thumbVariant: 8,
      emoji: "🛡️",
      label: "Insurance PWA",
      title: "Sinia — Adjuster Field Ops",
      badge: "Soon",
      description:
        "PWA for an independent insurance adjuster (La Segunda Seguros). 37 canonical fields, 3 conversational surfaces, Google Drive storage, offline-first with Service Worker + IndexedDB. Two-model pipeline: Haiku classifies, Sonnet drafts.",
      metrics: [
        { value: "8 weeks", key: "MVP delivery" },
        { value: "$600+$35/mo", key: "All-in cost" },
      ],
      tags: [
        { label: "Next.js PWA", teal: true },
        { label: "Claude API", teal: true },
        { label: "Drive OAuth" },
        { label: "docxtpl" },
      ],
      links: {
        soon: true,
      },
    },
    {
      thumbVariant: 4,
      emoji: "☕",
      label: "SaaS · Monorepo · Multi-tenant",
      title: "Bold MenuApp — Restaurant SaaS",
      description:
        "Multi-tenant SaaS restaurant menu platform built as a Turborepo monorepo with NestJS, Next.js, Prisma, and MinIO. Deployed to Railway + Vercel with QR generation, auto-translate, and multi-language support.",
      tags: [
        { label: "Turborepo", teal: true },
        { label: "NestJS" },
        { label: "Prisma" },
        { label: "MinIO" },
        { label: "Vercel" },
      ],
      links: {
        live: { url: "https://menuapp-web.vercel.app/boldcoffeeroca", label: "View Live" },
        github: "https://github.com/javi10823/menuapp",
      },
    },
    {
      thumbVariant: 2,
      emoji: "🏛️",
      label: "Gov Platform · Full-Stack · 20 modules",
      title: "SILABIP — National Library Platform",
      description:
        "20-module government platform replacing a legacy Java/IE11 system for Argentina's national library network. NestJS + Next.js + PostgreSQL + MinIO + Docker. 15+ months of architecture, documentation, and UX leadership.",
      tags: [
        { label: "NestJS", teal: true },
        { label: "Next.js", teal: true },
        { label: "PostgreSQL" },
        { label: "MinIO" },
        { label: "Docker" },
      ],
      links: {
        live: { url: "https://silabip-wireframe-home.netlify.app/", label: "View Wireframe" },
        github: "https://github.com/javi10823",
      },
    },
    {
      thumbVariant: 3,
      emoji: "🏥",
      label: "Healthtech · Full-Stack · 10k+ users",
      title: "Sama Fertility Platform",
      description:
        "Full system architecture for a US fertility care platform — web + mobile — serving 10k+ patients. Designed specs directly with CTO, led a distributed 4-person team, and shipped CI/CD pipelines cutting deploy time from days to under 2 hours.",
      tags: [
        { label: "React Native", teal: true },
        { label: "Node.js" },
        { label: "Auth0" },
        { label: "Stripe" },
        { label: "AWS" },
      ],
      links: {
        live: { url: "https://samafertility.com", label: "View Live" },
        github: "https://github.com/javi10823",
      },
    },
    {
      thumbVariant: 5,
      emoji: "🚀",
      label: "Brand · Web · AI Consulting",
      title: "DevLabs — AI Consulting Website",
      description:
        "Full brand and web rebuild for DevLabs, repositioning from a generic dev shop to an AI-first consulting firm. Dark aesthetic, AI consulting positioning, performance-optimized vanilla HTML/CSS/JS. Deployed to Netlify.",
      tags: [
        { label: "Branding", teal: true },
        { label: "HTML/CSS/JS" },
        { label: "Netlify" },
        { label: "AI Consulting" },
      ],
      links: {
        live: { url: "https://devlabs.dev", label: "View Live" },
        github: "https://github.com/javi10823",
      },
    },
    {
      thumbVariant: 4,
      emoji: "🎯",
      label: "AI Lead Gen · Job Board Scraping · Claude API",
      title: "Job Analyzer — AI-Powered Lead Generation",
      description:
        "DevLabs' own outbound lead gen engine. Scrapes job boards (Greenhouse, Lever) and uses Claude API to classify postings — identifying companies actively hiring for roles that signal automation and AI consulting needs. Turns job board noise into qualified prospect lists.",
      tags: [
        { label: "Claude API", teal: true },
        { label: "Lead Gen", teal: true },
        { label: "Next.js" },
        { label: "Scraping" },
        { label: "Greenhouse" },
        { label: "Lever" },
        { label: "Vercel" },
      ],
      links: {
        live: { url: "https://job-analizer.vercel.app/", label: "View Live" },
        github: "https://github.com/javi10823/job-analizer",
      },
    },
    {
      thumbVariant: 1,
      emoji: "🏛️",
      label: "Web · Brand · Performance",
      title: "D'Angelo Marmolería — Website Rebuild",
      description:
        "Full website rebuild for a marble & stone company. Dark luxury aesthetic, WebP image optimization, smooth animations, and contact-driven conversion layout. Vanilla HTML/CSS/JS deployed via cPanel.",
      tags: [
        { label: "HTML/CSS/JS", teal: true },
        { label: "WebP" },
        { label: "Performance" },
        { label: "cPanel" },
        { label: "Dark UI" },
      ],
      links: {
        live: { url: "https://dangelomarmoleria.com/", label: "View Live" },
        github: "https://github.com/javi10823",
      },
    },
    {
      thumbVariant: 5,
      emoji: "🧠",
      label: "AI Product · Chat · Streaming",
      title: "Freud AI — Psychoanalytic Chat",
      description:
        "AI chat application channeling Sigmund Freud — built with Next.js + Claude API with real-time streaming. A showcase of personality-driven AI product design and LLM integration patterns.",
      tags: [
        { label: "Claude API", teal: true },
        { label: "Next.js" },
        { label: "Streaming" },
        { label: "Vercel" },
      ],
      links: {
        live: {
          url: "https://freud-chat-8uew17ue2-javi10824s-projects.vercel.app/",
          label: "View Live",
        },
        github: "https://github.com/javi10823/freud-chat",
      },
    },
  ],

  experience: [
    {
      company: "PeopleScape.AI",
      location: "New York, United States",
      period: "Jul 2026 — Present",
      role: "Agentic AI Engineer",
      contractType: "FULL-TIME · HYBRID",
      summary:
        "Design and build agentic AI workflows for HR analytics and workforce intelligence products.",
      bullets: [
        "Design and ship production AI features using multi-agent orchestration, structured outputs, tool use, and retrieval-based approaches.",
        "Contribute to evaluation infrastructure for agentic pipelines — reliability, calibration, and safety.",
        "Work across the full AI-engineering stack: prompt design, agent architecture, backend integration, and production monitoring.",
      ],
      tags: [
        { label: "Multi-agent Systems", teal: true },
        { label: "Claude API", teal: true },
        { label: "LangGraph" },
        { label: "Structured Outputs" },
        { label: "Tool Use" },
        { label: "RAG" },
        { label: "HR Tech" },
      ],
    },
    {
      company: "DevLabs",
      location: "Rosario, Argentina",
      period: "2022 – Present",
      role: "Founder & Independent AI Engineer",
      contractType: "STARDEVS LLC · DEVLABS.DEV · Independent · Solo Operator",
      summary:
        "I operate as an independent AI engineer through DevLabs (STARDEVS LLC, Delaware). End-to-end ownership: discovery, architecture, code, deploy, and direct client support. No middle layer, no handoffs.",
      bullets: [
        "Built Valentina, a vision-based AI quoting agent (Claude API) for a marble & stone company: reads architectural floor plans, applies 30+ business rules, auto-generates PDF + Excel quotes — cutting quote time from 3 hours to under 5 minutes. Live in production with full observability stack (audit events, debug mode, PII sanitizer at 5.84ms p95).",
        "Built HealthHue, an AI voice dialer PoC for a US healthcare client: Retell AI conversational agent + n8n orchestration + GHL CRM integration + React setter panel for live operator handoff. Full voice-first product end-to-end in weeks.",
        "Architected a 20-module government platform modernization (NestJS + Next.js + PostgreSQL + MinIO) replacing a legacy Java/IE11 system serving Argentina's national popular library network (CONABIP, ~5,000 libraries).",
        "Delivered AI-native full-stack products for US clients across healthtech, fintech, and Web3 — from blueprint to deployed production system.",
      ],
      tags: [
        { label: "Agentic AI Systems", teal: true },
        { label: "Voice AI", teal: true },
        { label: "RAG Pipelines" },
        { label: "MCP Servers" },
        { label: "Process Design & Automation" },
        { label: "AI-Native Products" },
        { label: "Technical Strategy" },
      ],
    },
    {
      company: "Sama Fertility",
      location: "San Francisco, CA",
      period: "Dec 2022 – Present",
      role: "Full-Stack Tech Lead",
      contractType: "Independent Contractor",
      summary:
        "Leading architecture and product development for a US fertility care platform connecting 10k+ patients with remote clinical care across US clinics.",
      bullets: [
        "Designed full system architecture from scratch — web + mobile — defining technical specs directly with CTO across a 3+ year engagement.",
        "Introduced AI-assisted tooling and automated dev workflows, increasing team throughput by ~35% without adding headcount.",
        "Shipped CI/CD pipelines that cut deployment cycle time from days to under 2 hours.",
        "Led distributed 4-person frontend team across US/LATAM time zones — sprint planning, code reviews, delivery ownership.",
        "Currently leading multi-tenancy migration and international phone number support rollout (Twilio geo-permissions, Canada launch).",
      ],
      tags: [
        { label: "React Native", teal: true },
        { label: "React.js" },
        { label: "TypeScript" },
        { label: "Node.js" },
        { label: "Python" },
        { label: "Auth0" },
        { label: "Stripe" },
        { label: "Twilio" },
        { label: "Firebase" },
        { label: "AWS" },
      ],
    },
    {
      company: "Securitize",
      location: "San Francisco, CA",
      period: "Apr 2022 – Nov 2022",
      role: "React / React Native Sr. Full-Stack",
      contractType: "Independent Contractor",
      summary:
        "Built and maintained web and mobile features for a digital securities platform tokenizing traditional financial instruments.",
      bullets: [
        "Developed new features across marketing site, web app, and mobile.",
        "Integrated Framer CMS with React for marketing pages.",
        "Released iOS and Android apps to stores and coordinated with US/Spain stakeholders.",
      ],
      tags: [
        { label: "React Native", teal: true },
        { label: "React.js" },
        { label: "MERN" },
        { label: "Framer CMS" },
        { label: "CI/CD" },
      ],
    },
    {
      company: "Nifty Gateway",
      location: "San Francisco, CA",
      period: "Nov 2020 – Jun 2021",
      role: "React Native Sr. Full-Stack",
      contractType: "Independent Contractor",
      summary:
        "Developed cross-platform features for a leading NFT marketplace — Web, TV, and Mobile — within a fast-moving crypto/Web3 product team.",
      bullets: [
        "Built UI across web, TV, and mobile using React Native and ReNative.",
        "Led code refactoring of React Native core and native modules.",
        "Designed and shipped CI/CD pipelines for multi-platform releases.",
      ],
      tags: [
        { label: "React Native", teal: true },
        { label: "ReNative" },
        { label: "Web3" },
        { label: "CI/CD" },
      ],
    },
    {
      company: "Presence / Bluon / Foxbox",
      location: "San Francisco · Chicago",
      period: "Feb 2017 – Oct 2020",
      role: "React Native Tech Lead",
      contractType: "Independent Contractor",
      summary:
        "5+ years leading React Native development and mobile architecture across multiple US clients — from digital product agencies to B2B SaaS in HVAC and agriculture.",
      bullets: [
        "Designed Git Flow strategies and CI/CD pipelines for mobile app releases on 4+ products.",
        "Released and maintained Android and iOS apps to stores across all projects.",
        "Acted as tech lead, architecture owner, and client-facing point of contact for US stakeholders.",
      ],
      tags: [
        { label: "React Native", teal: true },
        { label: "TypeScript" },
        { label: "Redux" },
        { label: "Firebase" },
        { label: "App Center" },
        { label: "JEST" },
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "We have worked with DevLabs for over a year and a half, and we created a great product for fertility treatments — serving thousands of patients across the US. I truly recommend DevLabs for your projects. They have an amazing team!",
      name: "Joshua Sams",
      initials: "JS",
      role: "CTO",
      company: "Sama Fertility — San Francisco, CA",
    },
    {
      quote:
        "As our React & React Native Tech Lead, Javi demonstrated exceptional technical expertise and leadership. Their enthusiasm for AI technologies consistently pushed our team to innovate. Javi would be a valuable asset to any forward-thinking tech organization.",
      name: "Fabian Firpo",
      initials: "FF",
      role: "Product Augmented Designer",
      company: "Securitize",
    },
    {
      quote:
        "Javi is an expert at his craft. He's an incredible developer that also has great knowledge of design and overall product development. I am extremely thankful to have worked with him — and even more important, to call him a friend and advisor.",
      name: "Alex P.",
      initials: "AP",
      role: "CFO",
      company: "REQUORDIT",
    },
    {
      quote:
        "Javier and I worked closely together building React Native mobile apps. He was extremely diligent, hard working, and delivered with high quality. He was a pleasure to work with. I highly recommend working with Javier!",
      name: "Jasmine Slivka",
      initials: "JL",
      role: "Product-focused Entrepreneur",
      company: "Manager",
    },
    {
      quote:
        "Javi was one of the first developers at our company. He led our recruitment process, helped build our team, and the majority of that talent is still with us today. Always available to give the knowledge needed to move forward.",
      name: "Rebecca Le",
      initials: "RL",
      role: "Operations",
      company: "Efficiency & Growth",
    },
  ],

  languages: [
    { name: "English", level: "Professional — Fluid spoken & written", code: "C1" },
    { name: "Spanish", level: "Native", code: "C2" },
  ],
};
