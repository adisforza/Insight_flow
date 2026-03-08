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

// ── TEAM — data asli InsightFlow ──────────────────────────
export const teamData: TeamMember[] = [
  {
    name: "Abdullah Al-Firdaus Nuzula",
    role: "Founder",
    bio: "Leads overall strategy, business development, and operational direction of the startup. Visionary behind InsightFlow's data-driven creative approach.",
    emoji: "🚀",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Naufal Shalin",
    role: "Account Manager",
    bio: "Dedicated manager for premium clients, ensuring project success and seamless communication from kickoff to delivery.",
    emoji: "🤝",
    socials: { instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Moh. Rasya Al Khalifi",
    role: "Content Strategy Consultant",
    bio: "Analyzes content performance data and provides strategic guidance to help clients cut through the noise and reach the right audience.",
    emoji: "📋",
    socials: { instagram: "https://instagram.com" },
  },
  {
    name: "Arya Bintang Fauzildan",
    role: "Content Strategy Consultant",
    bio: "Analyzes content performance data and provides strategic guidance to help clients cut through the noise and reach the right audience.",
    emoji: "📊",
    socials: { instagram: "https://instagram.com" },
  },
  {
    name: "Dimas Rafi Izzulhaq",
    role: "Data Scientist",
    bio: "Builds Python-based systems for web scraping, NLP sentiment analysis, and keyword optimization to power data-driven decisions.",
    emoji: "🧬",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    name: "Daffa Ahmad Pangrekesa",
    role: "Data Analyst",
    bio: "Builds Python-based systems for web scraping, NLP sentiment analysis, and keyword optimization to power data-driven decisions.",
    emoji: "🔬",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    name: "Aprilia Safna Anggraeni",
    role: "Creative Production",
    bio: "Produces visual content including video editing, motion graphics, and design assets that bring brand stories to life.",
    emoji: "🎨",
    socials: { instagram: "https://instagram.com", tiktok: "https://tiktok.com" },
  },
  {
    name: "Khairun Nisa'",
    role: "Creative Production",
    bio: "Produces visual content including video editing, motion graphics, and design assets that bring brand stories to life.",
    emoji: "✨",
    socials: { instagram: "https://instagram.com", tiktok: "https://tiktok.com" },
  },
  {
    name: "Ivan Andika Setyawan",
    role: "Web/App Developer",
    bio: "Builds analytics dashboards, manages databases, and develops web applications that make data accessible and actionable.",
    emoji: "💻",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
  {
    name: "Adi Sforza S. R.",
    role: "Web/App Developer",
    bio: "Builds analytics dashboards, manages databases, and develops web applications that make data accessible and actionable.",
    emoji: "⚙️",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com" },
  },
];

// ── MILESTONES — tidak diubah ──────────────────────────────
export const milestonesData: Milestone[] = [
  { year: "2021", title: "Founded in Surabaya", desc: "Started as a two-person data consultancy helping local F&B brands understand their customers." },
  { year: "2022", title: "First 20 Clients", desc: "Expanded into social media and digital advertising, growing to a full team of 6." },
  { year: "2023", title: "Launched InsightFlow Platform", desc: "Built our own internal analytics dashboard — now offered to clients as a live reporting tool." },
  { year: "2024", title: "120+ Brands Served", desc: "Expanded beyond Surabaya to clients across Java, with a 98% client retention rate." },
];

// ── VALUES — tidak diubah ─────────────────────────────────
export const valuesData: Value[] = [
  { icon: "🔍", title: "Data First",       desc: "Every recommendation we make is backed by numbers, not gut feeling." },
  { icon: "🤝", title: "Honest Partner",   desc: "We tell you what the data says — even when it's not what you hoped to hear." },
  { icon: "⚡", title: "Bias to Action",   desc: "Insights without action are just trivia. We focus on what moves the needle." },
  { icon: "🌱", title: "Long-term Growth", desc: "We're not here for quick wins. We build sustainable strategies that compound." },
];