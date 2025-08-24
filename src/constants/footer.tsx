// import { FooterLinkSection } from "../types/footer";

export const footerLinks = [
  {
    title: "Socials",
    links: [],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Programmes", href: "/programmes" },
      { label: "Publications", href: "/publications" },
      { label: "Leadquest 25", href: "/leadquest" },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { label: "Podcasts", href: "/podcasts" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      // { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;

export type FooterLinkSection = (typeof footerLinks)[number];

export const socialLinks = {
  twitter: "https://x.com/tyil_community",
  instagram: "https://www.instagram.com/tyil_africa/",
  linkedin: "https://www.linkedin.com/company/tyil/",
  whatsApp: "https://wa.me/8162012505",
};

// export interface FooterLink {
//   label: string;
//   href: string;
// }

// export interface FooterLinkSection {
//   title: string;
//   links: FooterLink[];
// }