// Type definitions for Constituency Intelligence Dashboard

export interface ConstituencyProfile {
  id: string;
  name: string;
  population: number;
  state: string;
  demographics: Demographics;
  createdAt: Date;
  updatedAt: Date;
}

export interface Demographics {
  urbanRural: string; // urban, rural, mixed
  ageDistribution: {
    youth: number; // 18-35
    middle: number; // 35-60
    elderly: number; // 60+
  };
  education: {
    illiterate: number;
    schooling: number;
    graduate: number;
    postgraduate: number;
  };
  occupation: {
    agriculture: number;
    manufacturing: number;
    services: number;
    unemployed: number;
  };
  religion?: Record<string, number>;
  caste?: Record<string, number>;
}

export interface LocalIssue {
  id: string;
  title: string;
  description: string;
  category: string; // infrastructure, healthcare, education, employment, etc.
  severity: number; // 1-10
  affectedPopulation: number;
  voterImpactScore: number; // AI calculated
  createdAt: Date;
}

export interface StrategyAdvice {
  id: string;
  constituencyId: string;
  focusArea: string;
  rationale: string;
  targetDemographics: string[];
  priority: 'high' | 'medium' | 'low';
  estimatedReach: number;
  createdAt: Date;
}

export interface OpponentData {
  id: string;
  name: string;
  partyName: string;
  strengths: string[];
  weaknesses: string[];
  lastVoteShare: number;
  constituency: string;
}

export interface WeaknessFinding {
  id: string;
  constituencyId: string;
  opponentId: string;
  weakness: string;
  opportunity: string;
  counterStrategy: string;
  exploitability: number; // 1-10
  createdAt: Date;
}

export interface DashboardReport {
  id: string;
  constituencyId: string;
  title: string;
  executiveSummary: string;
  keyInsights: string[];
  recommendedActions: string[];
  criticalIssues: LocalIssue[];
  strategicFocus: StrategyAdvice[];
  generatedAt: Date;
}
