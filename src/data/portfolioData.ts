import { PortfolioProfile, Project, Experiment, WorkflowStep } from '../types';
import cristinaPortrait from '../assets/images/cristina_portrait_1788052133569.jpg';

export const portfolioProfile: PortfolioProfile = {
  name: "CRISTINA SALAZAR",
  titleBadge: "PRODUCT DESIGNER — AI POWERED",
  bio: "Senior Product Designer specializing in complex user flows and data-driven decisions. My differentiator is an",
  bioHighlight: "AI-first workflow",
  timeframeHighlight: "to weeks, not months.",
  experienceBadge: "6 YEARS OF PRODUCT DESIGN",
  locationBadge: "LATAM REMOTE",
  avatarUrl: "/imagen-1.png",
  email: "auracristina0693@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/cristina-salazar",
  tools: ["STITCH", "FIGMA", "AI STUDIO", "CLAUDE CODE", "GITHUB", "GITBOOK"],
  workflowTools: ["STITCH", "FIGMA", "AI STUDIO", "CLAUDE CODE", "GITHUB", "GITBOOK"]
};

export const projects: Project[] = [
  {
    id: "telemedicina",
    type: "WEB APP",
    title: "TELEMEDICINA",
    subtitle: "Telemedicina Risaralda — Telehealth Portal for Rural Areas",
    description: "Web platform for patients in rural areas of Risaralda to book appointments, receive remote medical care, and manage results, without traveling to the city.",
    client: "Gobernación de Risaralda",
    methodology: "Scrum - Methodology",
    role: "Rol: UX/UI Designer",
    overviewText: "I found the real bottleneck wasn't the patient-facing screens — it was staff manually cross-referencing systems while patients waited on hold. I proposed a multi-level filter (referral center, specialty, doctor) and validated it with real scheduling coordinators before shipping it.",
    impactLabel: "IMPACT",
    impactValue: "Up to 60% reduction in time spent on administrative staff tasks",
    rebuildLabel: "AI REBUILD",
    rebuildValue: "Selected flows re-engineered with an AI-first workflow — documented in GitBook",
    previewImage: "/telemedicina.png",
    detailsUrl: "https://cristi.gitbook.io/cristi-docs/telemedicine"
  },
  {
    id: "fiduprevisora",
    type: "WEB APP",
    title: "FIDUPREVISORA",
    subtitle: "Fiduprevisora — Fiduciary Business Registration",
    description: "Internal platform for fiduciary operators to register new trusts and companies — from regulatory filing dates to the twelve linked records a single business requires.",
    client: "Fiduprevisora",
    methodology: "Scrum Methodology",
    role: "Rol: UX/UI Designer",
    overviewText: "Some sections of the project didn't meet WCAG accessibility standards, and certain features had room for improvement. I replaced several buttons, selects, and options with alternatives that simplified the user's tasks. You can see the full details in 'See more'.",
    impactLabel: "IMPACT",
    impactValue: "40% reduction in classification errors, and less time and effort spent on task completion.",
    rebuildLabel: "AI REBUILD",
    rebuildValue: "Selected flows re-engineered with an AI-first workflow — documented in GitBook",
    previewImage: "/fiduprevisora.png",
    detailsUrl: "https://cristi.gitbook.io/cristi-docs/fiduprevisora"
  },
  {
    id: "paw-palate",
    type: "ECOMMERCE",
    title: "PAW - PALATE",
    subtitle: "Paw - Palate",
    description: "Custom-built E-commerce website for a pet food distribution company with specific dietary needs.",
    client: "Client IPM-CORP",
    methodology: "Scrum -Methodology",
    role: "Rol: UX/UI Designer",
    previewImage: "/paw-palate.png",
    detailsUrl: "https://app.gitbook.com/o/Mgt190ubz3Xl1GyMQkAi/sites/site_y32f0/preview",
    impactLabel: "IMPACT",
    impactValue: "Marketing reported a 30% increase in sales compared to the previous month."
  }
];

export const workflowSteps: WorkflowStep[] = [
  { stepNumber: 1, label: "PROMPT TO UI" },
  { stepNumber: 2, label: "PROMPT TO MVP" },
  { stepNumber: 3, label: "PROMPT TO PRODUCT" }
];

export const experiments: Experiment[] = [
  {
    id: "exp-01",
    code: "EXP_01",
    title: "Re-design of Telemedicina flow",
    description: "Coming Soon",
    image: "/telemedicina-redesign.jpg"
  },
  {
    id: "exp-02",
    code: "EXP_02",
    title: "DonarCol",
    description: "Coming Soon",
    image: "/donarcol.png"
  },
  {
    id: "exp-03",
    code: "EXP_03",
    title: "Re-design of Fidu amortization table",
    description: "Coming Soon",
    image: "/fidu-amortizacion.png"
  }
];
