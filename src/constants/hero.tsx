/* ==============================
    Hero Section Images
==================================
*/

export const HERO_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern Aluminum Windows - Large residential windows",
    title: "Residential Windows",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Commercial Glass Facade - Modern office building",
    title: "Commercial Facades",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80",
    alt: "Aluminum Door Installation - Professional storefront",
    title: "Door Systems",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Metal Roofing System - Industrial roofing",
    title: "Roofing Solutions",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    alt: "Modern Office Interior - Suspended ceiling visible",
    title: "Ceiling Systems",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2006&q=80",
    alt: "Residential Aluminum Windows - Contemporary home",
    title: "Custom Windows",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Commercial Building Facade - Glass and aluminum",
    title: "Building Solutions",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
    alt: "Industrial Construction - Steel and aluminum framework",
    title: "Industrial Projects",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    alt: "Modern Entrance Doors - Commercial aluminum doors",
    title: "Entrance Systems",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Architectural Details - Modern aluminum and glass",
    title: "Architectural Details",
  },
] as const;

export type heroProps = (typeof HERO_IMAGES)[number];

/* =======================================================
    Hero Section Content
=======================================================
*/

// hero section content
export const heroContent = {
  title: "We Are Redefining What Leadership Means To African Youths.",
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
} as const;

// about us hero section content
export const aboutHeroContent = {
  title: "We Are Redefining What Leadership Means To African Youth.",
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
} as const;

// programmes hero section content
export const programmesHeroContent = {
  title: "We Are Redefining What Leadership Means To African Youth.",
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
} as const;

// publications hero section content
export const publicationsHeroContent = {
  title: "We Are Redefining What Leadership Means To African Youth.",
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
} as const;

// leadquest hero section content
export const leadquestHeroContent = {
  title: "We Are Redefining What Leadership Means To African Youth.",
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
} as const;

export type heroContentProps = (typeof heroContent)[keyof typeof heroContent];
