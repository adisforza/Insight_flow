import { globalStyles } from "../components/styles";
import { navbar } from "../components/navbar";
import { hero } from "../components/hero";
import { features } from "../components/features";
import { workflow } from "../components/workflow";
import { pricing } from "../components/pricing";
import { contact } from "../components/contact";
import { footer } from "../components/footer";
import { clientScript } from "../components/scripts";
import {
  heroData,
  featuresData,
  workflowData,
  pricingData,
  contactData,
  footerData,
  socialData,
} from "../data/landing";

export const homePage = (): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="InsightFlow — We help local businesses in Surabaya grow with branding, web development, social media, and digital advertising." />
  <meta property="og:title" content="InsightFlow — Elevate Local Business" />
  <meta property="og:description" content="Bold strategies and real results for local businesses in Indonesia." />
  <meta property="og:type" content="website" />
  <title>InsightFlow — Elevate Local Business</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Syne:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <style>${globalStyles}</style>
</head>
<body>

  ${navbar()}
  ${hero(heroData)}
  ${features(featuresData)}
  ${workflow(workflowData)}
  ${pricing(pricingData)}
  ${contact(contactData)}
  ${footer(footerData, socialData)}

  <script>${clientScript}</script>
</body>
</html>
`;