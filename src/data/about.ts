export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  emoji: string;
  socials?: { instagram?: string; linkedin?: string; tiktok?: string };
}

export interface Milestone {
  year: string;
  title: string;
  desc: string;
}

export interface Value {
  icon: string;
  title: string;
  desc: string;
}

export const teamData: TeamMember[] = [
  {
    name: "Andi Prasetyo",
    role: "Founder & Lead Strategist",
    bio: "Data scientist turned marketer. Obsessed with finding the story inside every spreadsheet and turning it into campaigns that actually convert.",
    emoji: "👨‍💻",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Sari Dewi",
    role: "Creative Director",
    bio: "Blends visual design with data-driven thinking. If a chart can be beautiful AND clear, why settle for just one?",
    emoji: "🎨",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Rizky Firmansyah",
    role: "Head of Analytics",
    bio: "Makes dashboards that clients actually understand. Believes that the best insight is one that leads to an action.",
    emoji: "📊",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "Maya Kusuma",
    role: "Growth & Ads Specialist",
    bio: "Runs Google and Meta campaigns with surgical precision. Has never launched an ad without a clear hypothesis to test.",
    emoji: "📈",
    socials: { instagram: "https://instagram.com", tiktok: "https://tiktok.com" },
  },
];

export const milestonesData: Milestone[] = [
  { year: "2021", title: "Founded in Surabaya", desc: "Started as a two-person data consultancy helping local F&B brands understand their customers." },
  { year: "2022", title: "First 20 Clients", desc: "Expanded into social media and digital advertising, growing to a full team of 6." },
  { year: "2023", title: "Launched InsightFlow Platform", desc: "Built our own internal analytics dashboard — now offered to clients as a live reporting tool." },
  { year: "2024", title: "120+ Brands Served", desc: "Expanded beyond Surabaya to clients across Java, with a 98% client retention rate." },
];

export const valuesData: Value[] = [
  { icon: "🔍", title: "Data First",      desc: "Every recommendation we make is backed by numbers, not gut feeling." },
  { icon: "🤝", title: "Honest Partner",  desc: "We tell you what the data says — even when it's not what you hoped to hear." },
  { icon: "⚡", title: "Bias to Action",  desc: "Insights without action are just trivia. We focus on what moves the needle." },
  { icon: "🌱", title: "Long-term Growth", desc: "We're not here for quick wins. We build sustainable strategies that compound." },

];
