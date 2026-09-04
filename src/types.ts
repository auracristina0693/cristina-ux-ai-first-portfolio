export interface Project {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  client?: string;
  methodology?: string;
  role?: string;
  overviewText?: string;
  impactLabel?: string;
  impactValue?: string;
  rebuildLabel?: string;
  rebuildValue?: string;
  previewImage: string;
  detailsUrl?: string;
  category?: string;
}

export interface Experiment {
  id: string;
  code: string;
  title: string;
  description: string;
  image: string;
  imageFit?: 'cover' | 'contain';
}

export interface WorkflowStep {
  stepNumber: number;
  label: string;
}

export interface PortfolioProfile {
  name: string;
  titleBadge: string;
  bio: string;
  bioHighlight: string;
  timeframeHighlight: string;
  experienceBadge: string;
  locationBadge: string;
  avatarUrl: string;
  email: string;
  linkedinUrl: string;
  tools: string[];
  workflowTools: string[];
}
