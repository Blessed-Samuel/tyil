export const programmes = [
  {
    id: 1,
    section: "secondary-school",
    slug: "tyil-fellowship",
    title: "TYIL Fellowship",
    description:
      "The TYIL Fellowship is a leadership development program...",
    imageUrl: "/images/_MG_0010.jpg",
  },
  {
    id: 2,
    section: "secondary-school",
    slug: "climate-awareness-project",
    title: "Climate Awareness Project",
    description:
      "This initiative responds to a recognized gap in early-stage climate education...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 3,
    section: "secondary-school",
    slug: "climate-awareness-project",
    title: "Climate Awareness Project",
    description:
      "This initiative responds to a recognized gap in early-stage climate education...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 4,
    section: "secondary-school",
    slug: "climate-awareness-project",
    title: "Climate Awareness Project",
    description:
      "This initiative responds to a recognized gap in early-stage climate education...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 5,
    section: "secondary-school",
    slug: "climate-awareness-project",
    title: "Climate Awareness Project",
    description:
      "This initiative responds to a recognized gap in early-stage climate education...",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 6,
    section: "post-secondary-school",
    slug: "yals-program",
    title: "Young Aspiring Leadership Scholar (YALS) program",
    description:
      "The YALS program is a year long training that equips and prepares African undergraduates...",
    imageUrl: "/dynamic_img_1.svg",
  },
  {
    id: 7,
    section: "post-secondary-school",
    slug: "yals-program",
    title: "Young Aspiring Leadership Scholar (YALS) program",
    description:
      "The YALS program is a year long training that equips and prepares African undergraduates...",
    imageUrl: "/dynamic_img_1.svg",
  },
] as const;

export type program_content = (typeof programmes)[number];
