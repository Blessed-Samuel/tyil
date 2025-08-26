/* ==============================
    Hero Section Images
==================================
*/
export const HERO_IMAGES = [
  {
    id: 1,
    url: "/hero/HERO_IMG_0.jpg",
    alt: "Modern Aluminum Windows - Large residential windows",
    title: "Residential Windows",
  },
  {
    id: 2,
    url: "/hero/HERO_IMG_1.jpg",
    alt: "Commercial Glass Facade - Modern office building",
    title: "Commercial Facades",
  },
  {
    id: 3,
    url: "/hero/HERO_IMG_2.jpg",
    alt: "Aluminum Door Installation - Professional storefront",
    title: "Door Systems",
  },
  {
    id: 4,
    url: "/hero/HERO_IMG_3.jpg",
    alt: "Metal Roofing System - Industrial roofing",
    title: "Roofing Solutions",
  },
  {
    id: 5,
    url: "/hero/HERO_IMG_4.jpg",
    alt: "Modern Office Interior - Suspended ceiling visible",
    title: "Ceiling Systems",
  },
  {
    id: 6,
    url: "/hero/HERO_IMG_5.jpg",
    alt: "Residential Aluminum Windows - Contemporary home",
    title: "Custom Windows",
  },
  {
    id: 7,
    url: "/hero/HERO_IMG_6.jpg",
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

export type HeroImage = (typeof HERO_IMAGES)[number];

/* =======================================================
    Hero Section Content
======================================================= */
import { ReactNode } from "react";

export interface HeroContent {
  title: ReactNode;
  description: string;
  images: readonly HeroImage[];
}

export const heroContent: HeroContent = {
  title: (
    <>
      We Are Redefining What{" "}
      <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
        Leadership
      </span>{" "}
      Means To{" "}
      <span className="font-secondaryFont italic normal-case">
        African Youths
      </span>
      .
    </>
  ),
  description:
    "We are an African-based foundation dedicated to empowering the next generation of leaders. Through our programs and initiatives, we provide the tools and community you need to make a lasting impact.",
  images: HERO_IMAGES,
};

// about us hero section content
export const aboutHeroContent: HeroContent = {
  title: (
    <>
      <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
        Nuturing
      </span>{" "}
      Tomorrow{" "}
      <span className="font-secondaryFont italic normal-case">
        Leaders Today.
      </span>
    </>
  ),
  description:
    "At TYIL, we believe that leadership is not a title, but a journey. Our mission is to empower individuals to find their unique leadership voice and make a lasting impact.",
  images: HERO_IMAGES,
};

// programmes hero section content
export const programmesHeroContent: HeroContent = {
  title: (
    <>
      Our{" "}
      <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
        Programmes
      </span>{" "}
      Are Focused On{" "}
      <span className="font-secondaryFont italic normal-case">
        Building Leaders who inspire change.
      </span>
    </>
  ),
  description:
    "Empowering the next generation of leaders and raising young people for positive transformation.",
  images: HERO_IMAGES,
};

// publications hero section content
export const publicationsHeroContent: HeroContent = {
  title: (
    <>
      Insights that matters{" "}
      <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
        publications
      </span>{" "}
      <span className="font-secondaryFont italic normal-case">
        That Inspire.
      </span>
    </>
  ),
  description:
    "Empowering the next generation of leaders and raising young people for positive transformation.",
  images: HERO_IMAGES,
};

// leadquest hero section content
export const leadquestHeroContent: HeroContent = {
  title: (
    <>
      The journey to{" "}
      <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
        better leadership
      </span>{" "}
      <span className="font-secondaryFont italic normal-case">
        Starts Here.
      </span>
    </>
  ),
  description:
    "Empowering the next generation of leaders and raising young people for positive transformation.",
  images: HERO_IMAGES,
};
