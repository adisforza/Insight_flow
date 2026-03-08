export type ProjectCategory = "All" | "Branding" | "Web" | "Social Media" | "Analytics";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  tags: string[];
  emoji: string;
  color: string;       // accent color for this card
  year: string;
  desc: string;
  results: string[];
  featured?: boolean;
}

export const portfolioProjects: Project[] = [
  {
    id: "kopi-nusantara",
    title: "Brand & Digital Launch",
    client: "Kopi Nusantara",
    category: "Branding",
    tags: ["Brand Identity", "Social Media", "Photography"],
    emoji: "☕",
    color: "#f87b1b",
    year: "2024",
    featured: true,
    desc: "Full rebrand for a local coffee chain expanding from 2 to 8 outlets across Surabaya. New visual identity, packaging, and a social media strategy that grew their Instagram from 800 to 24k followers in 6 months.",
    results: ["24k Instagram followers", "+340% foot traffic", "8 outlet expansion"],
  },
  {
    id: "batik-modern",
    title: "E-Commerce & SEO",
    client: "Batik Modern Studio",
    category: "Web",
    tags: ["Web Development", "Local SEO", "Analytics"],
    emoji: "🎨",
    color: "#cbd99b",
    year: "2024",
    desc: "Built a mobile-first e-commerce website for a traditional batik artisan going digital. Integrated local SEO strategy that put them on page 1 for 'batik Surabaya' within 3 months.",
    results: ["Page 1 Google ranking", "Rp 120jt online revenue/mo", "68% mobile traffic"],
  },
  {
    id: "rumah-makan-bu-sri",
    title: "Social Media Growth",
    client: "Rumah Makan Bu Sri",
    category: "Social Media",
    tags: ["TikTok", "Instagram", "Content"],
    emoji: "🍛",
    color: "#f87b1b",
    year: "2023",
    featured: true,
    desc: "Turned a 30-year-old family warung into a viral TikTok sensation. Documented their authentic cooking process and family story — one video hit 2.1M views and brought in queues stretching around the block.",
    results: ["2.1M TikTok views", "Queue 3hrs every weekend", "+280% monthly revenue"],
  },
  {
    id: "toko-elektronik-budi",
    title: "Google & Meta Ads",
    client: "Elektronik Budi",
    category: "Analytics",
    tags: ["Google Ads", "Meta Ads", "Reporting"],
    emoji: "📱",
    color: "#cbd99b",
    year: "2023",
    desc: "Rebuilt ad campaigns for a local electronics retailer competing against big chains. Cut cost-per-acquisition by 60% through audience segmentation and aggressive A/B testing.",
    results: ["60% lower CPA", "4.2x ROAS", "Rp 800jt in tracked sales"],
  },
  {
    id: "studio-yoga-serenity",
    title: "Full Digital Presence",
    client: "Serenity Yoga Studio",
    category: "Branding",
    tags: ["Brand Identity", "Web", "Social Media"],
    emoji: "🧘",
    color: "#f87b1b",
    year: "2023",
    desc: "From zero to fully booked in 4 months. Logo, website, Instagram strategy, and Google Business optimization for a new yoga studio in East Surabaya.",
    results: ["Fully booked in 4 months", "4.9★ Google rating", "350 active members"],
  },
  {
    id: "apotek-sehat",
    title: "Analytics Dashboard",
    client: "Apotek Sehat Group",
    category: "Analytics",
    tags: ["Data Analytics", "Dashboard", "Reporting"],
    emoji: "💊",
    color: "#cbd99b",
    year: "2022",
    desc: "Built a custom sales analytics dashboard for a pharmacy chain with 12 branches. Real-time inventory tracking, customer buying patterns, and monthly automated reports delivered to management.",
    results: ["12 branches connected", "30% inventory waste reduced", "Weekly automated reports"],
  },
];

export const categories: ProjectCategory[] = [
  "All", "Branding", "Web", "Social Media", "Analytics"
];

export const portfolioStats = [
  { num: "120+", label: "Projects Completed" },
  { num: "15+",  label: "Industries Served" },
  { num: "98%",  label: "Client Satisfaction" },
];