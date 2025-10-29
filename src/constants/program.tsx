export const programmes = [
    {
    id: 1,
    section: "Secondary-School",
    slug: "leadsmart-project",
    title: "LeadSmart Project",
    description: "We equip teenagers in secondary schools with the mindset...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 2,
    section: "Secondary-School",
    slug: "climate-awareness-project",
    title: "Climate Awareness Project",
    description:
      "This initiative responds to a recognized gap in early-stage climate education...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 3,
    section: "Secondary-School",
    slug: "leadquest-conference",
    title: "Lead Quest Conference",
    description:
      "Empowering the next generation of leaders and raising young people for...",
    imageUrl: "/dynamic_img_1.svg",
  },
  {
    id: 4,
    section: "Collegiate-level",
    slug: "yals-program",
    title: "YALS program",
    description:
      "The YALS program is a year long training that equips and prepares...",
    imageUrl: "/dynamic_img_1.svg",
  },
  {
    id: 5,
    section: "Collegiate-level",
    slug: "tyil-fellowship",
    title: "TYIL Fellowship",
    description: "The TYIL Fellowship is a leadership development program...",
    imageUrl: "/images/_MG_0010.jpg",
  },
] as const;

export type program_content = (typeof programmes)[number]
