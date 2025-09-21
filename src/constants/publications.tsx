export const publications = [
  {
    id: 1,
    title: "Economic Report 2025",
    description: "An in-depth analysis of economic trends for the year 2025.",
    pdfUrl: "/pdfs/CHEMISTRY.pdf",
    imageUrl: "/images/_MG_0010.jpg",
  },
  {
    id: 2,
    title: "Tech Innovations Whitepaper",
    description: "Exploring the latest breakthroughs in technology and AI.",
    pdfUrl: "/pdfs/CHEMISTRY.pdf",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 3,
    title: "Leadership Guide",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl: "/pdfs/leadership-guide.pdf",
    imageUrl: "/images/_MG_0013.jpg",
  },
  {
    id: 4,
    title: "Leadership Guide",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl: "/pdfs/leadership-guide.pdf",
    imageUrl: "/images/_MG_0017.jpg",
  },
  {
    id: 5,
    title: "Leadership Guide",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl: "/pdfs/leadership-guide.pdf",
    imageUrl: "/images/_MG_0047.jpg",
  },
] as const;

export type publication_content = (typeof publications)[number];
