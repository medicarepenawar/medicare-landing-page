// ─── Main Module Types ───────────────────────────────────────────────────────

export interface DirectoryItem {
  id: string;
  name: string;
  role: string;
  specialty?: string;
  location: string;
  rating: number;
  availability: string;
  image: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ExperienceStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
