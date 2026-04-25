export const projects = [
  {
    id: 1,
    slug: "biotech-web-platform",
    title: "Biotech Web Platform",
    shortDescription:
      "Enterprise-grade web applications for biotech companies with AI-powered workflows, real-time chat, and complex data visualization.",
    description:
      "Created and launched several web applications for biotech enterprises at JSat Automation Inc. Implemented AI integration using OpenAI SDK for smart workflow automation, built real-time chat modules, and used Chart.js for complex scientific data visualization. Architected the state layer using NgRx Signal Store for predictable, efficient data flow.",
    tech: ["Angular", "NgRx Signal Store", "Node.js", "OpenAI SDK", "Chart.js", "TypeScript", "Azure"],
    features: [
      "AI-powered workflow automation with OpenAI SDK",
      "Real-time chat and notifications",
      "Complex data charts and graphs",
      "NgRx Signal Store state management",
      "Refactored legacy codebase into modular architecture",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: null,
    image: null,
    category: "Enterprise",
    featured: true,
  },
  {
    id: 2,
    slug: "check24-insurance-portal",
    title: "CHECK24 Insurance Portal",
    shortDescription:
      "Feature-rich insurance comparison portal for Germany's largest and most-visited website, serving millions of users.",
    description:
      "Developed new features for CHECK24 — the largest website in Germany — on both desktop and mobile versions. Built high-complexity UI components including dynamic progress bars, modal dialogs, and drag-and-drop zones. Improved internal data tables with Ag-Grid and integrated Chart.js for business intelligence dashboards.",
    tech: ["Angular 13", "TypeScript", "Ag-Grid", "Chart.js", "Jest", "Cypress", "CSS/BEM"],
    features: [
      "Dynamic progress bars and accordions",
      "Custom A/B testing framework",
      "Ag-Grid data tables for internal tools",
      "Chart.js business dashboards",
      "Unit and E2E testing with Jest & Cypress",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: "https://www.check24.de",
    image: null,
    category: "FinTech",
    featured: true,
  },
  {
    id: 3,
    slug: "real-time-chat-microservice",
    title: "Real-Time Chat Microservice",
    shortDescription:
      "Scalable real-time chat backend built with Nest.js and Socket.io, featuring JWT authentication and MongoDB persistence.",
    description:
      "Designed and built a production-ready real-time chat microservice from scratch at Mobile2b GmbH. The system handles concurrent connections using Socket.io and WebSockets, with JWT-secured endpoints, persistent message storage in MongoDB, and SVG-based data visualization for business analytics.",
    tech: ["Nest.js", "Socket.io", "MongoDB", "Mongoose", "JWT", "RxJS", "Chart.js"],
    features: [
      "Real-time bidirectional communication via WebSockets",
      "JWT authentication and authorization",
      "MongoDB with Mongoose for message persistence",
      "SVG and Chart.js for business data visualization",
      "RxJS-based state management for complex UI flows",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: null,
    image: null,
    category: "Backend",
    featured: true,
  },
  {
    id: 4,
    slug: "corporate-housing-platform",
    title: "Corporate Housing Platform",
    shortDescription:
      "Angular-based apartment booking platform upgraded from AngularJS v1 to Angular v5, serving 130,000+ listings.",
    description:
      "Led the complete migration of Acomodeo's corporate housing platform from AngularJS v1 to Angular v5. Implemented NgRx state management to reduce network load for 130k+ apartment listings. Created Figma wireframes and prototypes, collected user feedback, and improved the UI/UX across the platform.",
    tech: ["Angular v5", "NgRx", "TypeScript", "Karma", "Jasmine", "Figma"],
    features: [
      "Full AngularJS-to-Angular v5 migration",
      "NgRx state management for 130k+ listings",
      "Figma wireframes and UI/UX improvements",
      "Unit testing with Karma and Jasmine",
      "Performance optimization for large datasets",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: null,
    image: null,
    category: "E-Commerce",
    featured: false,
  },
  {
    id: 5,
    slug: "airline-website-cms",
    title: "Airline Website & CMS",
    shortDescription:
      "Complete rebuild of Novoair's official airline website with a custom CMS using Angular.js, PHP, and MySQL.",
    description:
      "Completely rebuilt the official Novoair airline website using Angular.js v1 and Bootstrap, improving performance and user experience. Developed a custom CMS with PHP, CodeIgniter, and MySQL for non-technical staff to manage content. Wrote comprehensive documentation for usage, troubleshooting, and maintenance.",
    tech: ["Angular.js v1", "Bootstrap", "PHP", "CodeIgniter", "MySQL"],
    features: [
      "Full website rebuild with AngularJS v1",
      "Custom CMS with PHP and CodeIgniter",
      "MySQL database design and management",
      "Non-technical user documentation",
      "Responsive design with Bootstrap",
    ],
    githubUrl: "https://github.com/touhidrahman",
    liveUrl: null,
    image: null,
    category: "Web",
    featured: false,
  },
  {
    id: 6,
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription:
      "Modern, responsive portfolio website built with Next.js 15, Tailwind CSS v4, and React.",
    description:
      "Designed and developed this personal portfolio website from scratch using the latest Next.js 15 App Router, Tailwind CSS v4, and React 19. Features a clean, professional design with smooth animations, responsive layouts, and a well-structured content layer for easy updates.",
    tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript"],
    features: [
      "Next.js 15 App Router architecture",
      "Tailwind CSS v4 with custom design tokens",
      "Fully responsive across all screen sizes",
      "Centralized content data layer",
      "SEO-optimized with Open Graph metadata",
    ],
    githubUrl: "https://github.com/touhidrahman/portfolio",
    liveUrl: "#",
    image: null,
    category: "Personal",
    featured: true,
  },
];
