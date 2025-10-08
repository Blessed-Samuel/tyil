export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Publications", href: "/publications" },
  { label: "Tyil Academy", href: "/tyil-academy" },
] as const;

// derived from navLinks automatically
export type NavbarProps = (typeof navLinks)[number];
