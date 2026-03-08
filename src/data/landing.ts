import type { HeroStat } from "../components/hero";
import type { Feature, FeaturesProps } from "../components/features";
import type { WorkflowStep } from "../components/workflow";
import type { PricingTier, PricingFeature } from "../components/pricing";
import type { ContactInfo } from "../components/contact";
import type { FooterLink, SocialLink } from "../components/footer";

export const heroData: {
  tagline: string;
  heading1: string;
  heading2: string;
  subtext: string;
  stats: HeroStat[];
} = {
  tagline: "Local Business Growth Agency",
  heading1: "AMPLIFY YOUR",
  heading2: "LOCAL PRESENCE",
  subtext:
    "We help local businesses break through the digital noise — crafting bold strategies, stunning visuals, and real results that put your brand on the map.",
  stats: [
    { num: "120+", label: "Clients Served" },
    { num: "98%",  label: "Satisfaction Rate" },
    { num: "3×",   label: "Avg. Growth" },
  ],
};

export const featuresData: FeaturesProps = {
  quote: "In God we trust. All others must bring data.",
  quoteAuthor: "W. Edwards Deming",
  items: [
    {
      icon: "📊",
      title: "Data Analytics",
      text: "Deep dive into your data to uncover patterns, trends, and actionable insights that fuel strategic decision-making.",
    },
    {
      icon: "📈",
      title: "Growth Strategy",
      text: "Translate data findings into creative campaigns and strategies that accelerate your business growth.",
    },
    {
      icon: "⚡",
      title: "Real-Time Insights",
      text: "Live dashboards and monitoring systems that keep you ahead with up-to-the-minute intelligence.",
    },
    {
      icon: "🤝",
      title: "Client-Centric",
      text: "Every analysis is tailored to your unique business context. We don't do one-size-fits-all.",
    },
  ],
};

export const workflowData: WorkflowStep[] = [
  {
    num: "01",
    title: "Free Consultation",
    text: "We start with a free call to understand your business, goals, and challenges. No commitment required.",
  },
  {
    num: "02",
    title: "Custom Strategy",
    text: "We build a tailored digital strategy based on your budget, audience, and local market.",
  },
  {
    num: "03",
    title: "Execution",
    text: "Our team gets to work — designing, building, and launching your digital presence.",
  },
  {
    num: "04",
    title: "Grow Together",
    text: "We track results, report monthly, and continuously optimize to keep your business growing.",
  },
];

export const pricingData: PricingTier[] = [
  {
    name: "Starter",
    price: "1.5",
    unit: "mo",
    desc: "Perfect for businesses just starting their digital journey.",
    ctaLabel: "Get Started",
    features: [
      { label: "Basic Data Analys",                included: true  },
      { label: "Up to 3 Data Source",              included: true  },
      { label: "Social Media (2 platforms)",       included: true  },
      { label: "Monthly Report",                   included: true  },
      { label: "Creative Strategy",                included: false },
      { label: "Priority Support",                 included: false },
    ],
  },
  {
    name: "Growth",
    price: "3.5",
    unit: "mo",
    featured: true,
    desc: "For businesses ready to scale and dominate their local market.",
    ctaLabel: "Get Started",
    features: [
      { label: "Advanced Analytics & ML",       included: true  },
      { label: "Unlimited Data Sources",        included: true  },
      { label: "Weekly Reports",                included: true  },
      { label: "Real-Time Dashboard",           included: true  },
      { label: "Creative Strategy",             included: true  },
      { label: "Priority Support",              included: false },
     
    ],
  },
  {
    name: "Pro",
    price: "Pay as You Go",
    unit: "project",
    desc: "Full-service digital agency partnership for ambitious brands.",
    ctaLabel: "Contact Us",
    ctaHref: "#contact",
    features: [
      { label: "Everything in Growth",         included: true  },
      { label: "Unlimited Everything",         included: true  },
      { label: "Full Creative Team",           included: true  },
      { label: "Advanced Analytics Dashboard", included: true  },
      { label: "Priority Service",             included: true  },
    ],
  },
];

export const contactData: ContactInfo[] = [
  { icon: "📍", label: "Location",  value: "Surabaya, East Java, Indonesia" },
  { icon: "📧", label: "Email",     value: "insightflowlab@gmail.com" },
  { icon: "💬", label: "WhatsApp",  value: "+62 878 5327 4312" },
];

export const footerData: FooterLink[] = [
  { label: "Services", href: "#features" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export const socialData: SocialLink[] = [
  { platform: "instagram", href: "https://www.instagram.com/insightflowlab", handle: "@insightflowlab" },
  { platform: "tiktok",    href: " https://www.tiktok.com/@insightflowlab",   handle: "@insightflowlab" },
];