// import { FooterLinkSection } from "../types/footer";

export const footerLinks = [
  {
    title: "Socials",
    links: [],
  },

  {
    title: "Contacts",
    links: [],
  },

  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Programmes", href: "/programmes" },
      { label: "Publications", href: "/publications" },
      { label: "Tyil Academy", href: "/tyil-academy" },
    ],
  },
  {
    title: "Other Links",
    links: [
      {
        label: "Podcasts",
        href: "https://podcasts.apple.com/us/podcast/the-future-of-leadership/id1761205163",
      },
      { label: "Resources", href: "#/" },
    ],
  },
] as const;

export type FooterLinkSection = (typeof footerLinks)[number];

export const contactLinks = {
  email: {
    email: "tyilcommunity@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=tyilcommunity@gmail.com",
  },
  phoneNumber: {
    label: "Phone",
    number: "+234 8162-0125-05",
    href: "tel:+2348162012505",
  },
};

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
