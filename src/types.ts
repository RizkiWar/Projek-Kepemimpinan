export interface TeamMember {
  name: string;
  nim?: string;
  role: string;
  avatar: string;
}

export interface ProjectInfo {
  title: string;
  subtitle: string;
  course: string;
  groupName: string;
  members: TeamMember[];
  projectName: string;
  location: string;
  institution: string;
}

export interface Chapter {
  id: number;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  learningOutcomes: string[];
  connectionToRePlast: string;
  icon: string;
  badge: string;
}

export interface Reflection4C {
  connection: {
    title: string;
    description: string;
    highlights: string[];
  };
  challenge: {
    title: string;
    description: string;
    highlights: string[];
  };
  concept: {
    title: string;
    description: string;
    highlights: string[];
  };
  change: {
    title: string;
    description: string;
    highlights: string[];
  };
}

export interface ResponsibilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface ArtifactItem {
  id: string;
  title: string;
  taskCode?: string;
  description: string;
  category: 'smart-goals' | 'reflection' | 'documentation' | 'products';
  imageUrl: string;
  altText: string;
  whyChosen: string;
  supportingAspect: string;
  tags: string[];
}

export interface TimelineStep {
  step: string;
  title: string;
  desc: string;
  duration?: string;
  details: string[];
}

export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rawMaterial: string;
  technique: string;
  characteristics: string[];
  economicValue: string;
  environmentalImpact: string;
  imageUrl: string;
  tags: string[];
}
