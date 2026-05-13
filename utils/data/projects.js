export const projects = [
  {
    id: 1,
    slug: "auth-as-a-service-rbac",
    title: "Auth as a Service - RBAC",
    shortDescription:
      "Provides RBAC authentication to any application via REST API and secret key.",
    description:
      "A production-ready authentication platform designed as reusable infrastructure for multiple products. It supports role-based access control, secure token flows, and straightforward REST integration for third-party or internal applications.",
    tech: ["HonoJS", "Drizzle ORM", "Node.js", "PostgreSQL", "Angular", "Nx"],
    features: [
      "RBAC authentication via REST APIs",
      "Secret-key based integration flow",
      "Reusable identity layer for multiple apps",
      "Scalable relational schema with Drizzle ORM",
      "Monorepo-ready architecture with Nx",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://auth-demo.touhidrahman.me",
    image: null,
    category: "SaaS",
    featured: false,
  },
  {
    id: 2,
    slug: "sheresta-smart-case-management",
    title: "Sheresta - Smart Case Management",
    shortDescription:
      "Startup SaaS for lawyers with case management, digital calendar, and client communication.",
    description:
      "A legal-tech platform focused on helping lawyers manage cases, schedules, and communication in one place. Built with a modern full-stack architecture for long-term scalability.",
    tech: ["HonoJS", "Angular", "PostgreSQL", "Drizzle ORM", "Nx"],
    features: [
      "Smart legal case management workflows",
      "Digital calendar and scheduling",
      "Client communication capabilities",
      "Scalable API-first architecture",
      "Modern monorepo-based development",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://sheresta.com",
    image: null,
    category: "LegalTech",
    featured: true,
  },
  {
    id: 3,
    slug: "contenterp-ai-publishing",
    title: "ContentERP - AI Publishing Manager",
    shortDescription:
      "AI-driven web publishing management platform for distributed content teams.",
    description:
      "A SaaS product built to manage content teams, editorial workflows, and AI-assisted content production in one interface. Includes collaboration, tracking, and publication-oriented workflows.",
    tech: ["ExpressJS", "MongoDB", "Prisma ORM", "Angular", "Socket.io"],
    features: [
      "Team and content workflow management",
      "AI-assisted publishing operations",
      "Real-time communication features",
      "Rich dashboard and progress tracking",
      "SaaS-ready architecture",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://app.contenterp.com",
    image: null,
    category: "SaaS",
    featured: false,
  },
  {
    id: 4,
    slug: "ngx-simple-store",
    title: "@touhidrahman/ngx-simple-store",
    shortDescription:
      "Signals-based state management library for Angular applications.",
    description:
      "Open-source Angular-focused state library built to simplify application state management using modern Signals patterns while keeping the API lightweight and practical.",
    tech: ["Angular", "TypeScript", "Signals", "RxJS", "Open Source"],
    features: [
      "Signals-first state primitives",
      "Minimal and predictable API",
      "Reusable store utilities",
      "Angular integration without heavy boilerplate",
      "Published as an open-source package",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://www.npmjs.com/package/@touhidrahman/ngx-simple-store",
    image: null,
    category: "Open Source",
    featured: false,
  },
  {
    id: 5,
    slug: "simple-store",
    title: "@touhidrahman/simple-store",
    shortDescription:
      "RxJS-based state management library for JavaScript and TypeScript applications.",
    description:
      "A framework-agnostic state library designed for JS/TS apps that need clean RxJS-driven state updates without complex setup.",
    tech: ["TypeScript", "JavaScript", "RxJS", "Open Source"],
    features: [
      "Framework-agnostic usage",
      "RxJS-based reactive store",
      "Simple API for state updates",
      "Reusable in frontend and backend environments",
      "Published as an open-source package",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://www.npmjs.com/package/@touhidrahman/simple-store",
    image: null,
    category: "Open Source",
    featured: true,
  },
  {
    id: 6,
    slug: "eyecatching",
    title: "Eyecatching",
    shortDescription:
      "Visualizes webpage differences using Python, OpenCV, and Puppeteer.",
    description:
      "A tool and research project that loads webpages, captures screenshots, and compares them using computer vision and perceptual hash algorithms to detect mismatched regions.",
    tech: ["Python", "OpenCV", "Puppeteer", "Computer Vision"],
    features: [
      "Automated webpage screenshot capture",
      "Cross-browser visual comparison",
      "Mismatch detection with perceptual hashing",
      "Computer vision based difference highlighting",
      "Research-backed implementation",
    ],
    githubUrl: "http://github.com/touhidrahman/eyecatching",
    liveUrl: null,
    image: null,
    category: "Research",
    featured: true,
  },
]
