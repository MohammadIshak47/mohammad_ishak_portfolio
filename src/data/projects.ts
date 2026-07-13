export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  path: string;
  title: string;
  period: string;
  summary: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'talentflow',
    path: '~/projects/talentflow',
    title: 'TalentFlow — Full Stack Applicant Tracking System',
    period: '2024 — 2025',
    summary:
      'A 15-module ATS with a 5-stage candidate pipeline and role-based dashboards for Admin, HR Manager, and Candidate users.',
    description:
      'Architected a full applicant tracking system used to move candidates through a five-stage hiring pipeline, with separate dashboards and permissions for admins, HR managers, and candidates.',
    highlights: [
      'Designed 15 backend modules with role-based access control across three user types.',
      'Built RESTful APIs with FastAPI, PostgreSQL, SQLAlchemy, and Alembic migrations.',
      'Containerized the full stack with Docker and docker-compose for consistent local and deployed environments.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
    links: [
      { label: 'Code', href: 'https://github.com/MohammadIshak47/ATS_TALENTFLOW_FULLSTACK' },
      { label: 'Live Demo', href: 'https://poetic-salamander-8d417d.netlify.app/' },
    ],
    featured: true,
  },
  {
    slug: 'taskcanvas',
    path: '~/projects/taskcanvas',
    title: 'TaskCanvas — Kanban Board & Image Annotation Tool',
    period: '2025',
    summary:
      'A Kanban task board combined with a canvas-based image-annotation tool, connected over a JWT-authenticated API.',
    description:
      'A full-stack productivity tool that pairs drag-and-drop task management with a polygon-based image annotation canvas, built to stay accurate across different screen sizes.',
    highlights: [
      'Implemented drag-and-drop task reordering with persisted column order using @dnd-kit.',
      'Built a canvas-based polygon annotation tool (react-konva) with normalized coordinates for cross-device accuracy.',
      'Designed a custom email-based auth model in Django REST Framework and solved JWT refresh race conditions with a queued-refresh Axios interceptor.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django REST Framework', 'JWT'],
    links: [
      { label: 'Frontend', href: 'https://github.com/MohammadIshak47/task-annotate-frontend-' },
      { label: 'Backend', href: 'https://github.com/MohammadIshak47/task-annotate-backend' },
      { label: 'Live Demo', href: 'https://taskcanvasmark.netlify.app/' },
    ],
    featured: true,
  },
  {
    slug: 'mentorbyte',
    path: '~/projects/mentorbyte',
    title: 'MentorByte — Online Education Platform',
    period: '2025',
    summary:
      'A full-stack online education platform with course checkout, JWT authentication, and a React front end.',
    description:
      'An online learning platform built to let students browse and purchase courses, with a secured checkout flow and a Django API deployed independently from the front end.',
    highlights: [
      'Built a Django REST Framework API with JWT authentication and a course checkout flow.',
      'Paired the API with a React 18 + Vite front end for fast page loads.',
      'Deployed backend on Render and frontend on Netlify as independently scalable services.',
    ],
    tech: ['React', 'Vite', 'Django REST Framework', 'JWT', 'PostgreSQL'],
    links: [
      { label: 'Code', href: 'https://github.com/MohammadIshak47/MentorByte-Online-Education-Platform' },
      { label: 'Live Demo', href: 'https://mentorybyte-online-education-platform.netlify.app/' },
    ],
    featured: true,
  },
  {
    slug: 'jmonline-medicine',
    path: '~/projects/jmonline-medicine',
    title: 'JMOnline Medicine — Online Pharmacy Platform',
    period: '2025',
    summary:
      'A production e-commerce platform for ordering prescription medicines and healthcare products online in Bangladesh.',
    description:
      'A live online pharmacy serving real customers, supporting prescription upload, product browsing, and home delivery across Dhaka with pharmacist support.',
    highlights: [
      'Built customer-facing storefront flows for browsing medicines and healthcare products.',
      'Implemented a prescription-upload flow to support prescription-only orders.',
      'Paired a JavaScript/React front end with a Python/Django backend running in production.',
    ],
    tech: ['React', 'JavaScript', 'Python', 'Django'],
    links: [
      { label: 'Code', href: 'https://github.com/MohammadIshak47/jm_apps' },
      { label: 'Live Demo', href: 'https://jmonlinemedicine.com/' },
    ],
    featured: true,
  },
  {
    slug: 'mindtrack',
    path: '~/projects/mindtrack',
    title: 'MindTrack — Personal Growth Tracker',
    period: '2025',
    summary:
      'A habit, mood, and productivity tracker with an analytics dashboard and personalized insights.',
    description:
      'A self-tracking app that helps users log daily habits, mood, and productivity, then visualizes trends and generates simple insights from that data.',
    highlights: [
      'Built habit, mood, and productivity logging with category tagging and history views.',
      'Added an analytics dashboard with Recharts for 7-day mood and productivity trends.',
      'Backed the app with a token-authenticated Django REST Framework API exposing habit, mood, productivity, and insights endpoints.',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Django REST Framework', 'Recharts'],
    links: [{ label: 'Code', href: 'https://github.com/MohammadIshak47/MindTrack_App' }],
  },
  {
    slug: 'codebloom-blog',
    path: '~/projects/codebloom-blog',
    title: 'CodeBloom Tech Blog',
    period: '2024',
    summary:
      'A tech blog that breaks down engineering and UI/UX topics into approachable articles for developers.',
    description:
      'A content-focused site built to publish practical, easy-to-follow explainers on web development and design topics.',
    highlights: [
      'Built a responsive article layout optimized for readability on mobile and desktop.',
      'Structured content sections for tutorials, UI/UX breakdowns, and dev tips.',
    ],
    tech: ['React', 'JavaScript'],
    links: [
      { label: 'Code', href: 'https://github.com/MohammadIshak47/CodeBloomTechBlog' },
      { label: 'Live Demo', href: 'https://codebloomtechblog.netlify.app/' },
    ],
  },
  {
    slug: 'sultanas-studio',
    path: '~/projects/sultanas-studio',
    title: "Sultana's Studio — Kitchen & Recipe Content Site",
    period: '2024',
    summary: "A recipe and cooking content site built to showcase a food brand's dishes.",
    description:
      'A fast-loading content site for a kitchen brand, built to present recipes and dishes in a clean, browsable layout.',
    highlights: [
      'Built a responsive recipe browsing experience with a React + TypeScript + Vite stack.',
      'Optimized page load and asset delivery for a content-heavy site.',
    ],
    tech: ['React', 'TypeScript', 'Vite'],
    links: [
      { label: 'Code', href: 'https://github.com/MohammadIshak47/sultanastudio' },
      { label: 'Live Demo', href: 'https://sultanastudio.netlify.app/' },
    ],
  },
  {
    slug: 'corporate-asset-tracker',
    path: '~/projects/corporate-asset-tracker',
    title: 'Corporate Asset Tracker',
    period: '2024',
    summary:
      'A Django REST Framework app for tracking corporate hardware issued to employees across multiple companies.',
    description:
      'A backend-focused system for organizations to check hardware like phones, tablets, and laptops in and out to employees, with a full audit trail.',
    highlights: [
      'Modeled multi-company, multi-employee device delegation with checkout and return periods.',
      'Logged device condition at handout and return time for a full audit trail.',
      'Exposed a token-authenticated API with an auto-generated Swagger schema for interactive API testing.',
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'Swagger'],
    links: [{ label: 'Code', href: 'https://github.com/MohammadIshak47/corporate_assets_tracker_app' }],
  },
];
