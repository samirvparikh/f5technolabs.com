
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface ProjectAnalysis {
  estimate: string;
  techStack: string[];
  timeline: string;
  keyFeatures: string[];
}
