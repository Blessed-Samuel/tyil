export const publications = [
  {
    id: 1,
    title: "TYIL Fellowship 2024 Impact Report",
    description: "An in-depth analysis.",
    pdfUrl: "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_Annual_Report.pdf",
    imageUrl: "/images/_MG_0010.jpg",
  },
  {
    id: 2,
    title: "TYIL Fellowship 2023 Impact Report",
    description: "Exploring the latest breakthroughs.",
    pdfUrl: "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_2023_Impact_Doc.pdf",
    imageUrl: "/images/_MG_0012.jpg",
  },
  {
    id: 3,
    title: "TYIL Fellowship Evaluation Report (2019-2023)",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl:
      "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_The-Teens-and-Youth-in-Leadership-TYIL-Fellowship-Evaluation-2019-2023.pdf",
    imageUrl: "/images/_MG_0013.jpg",
  },
  {
    id: 4,
    title: "TYIL Magazine Year 2019",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl:
      "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_TYIL-MAGAZINE-2019-1.pdf",
    imageUrl: "/images/_MG_0017.jpg",
  },
  {
    id: 5,
    title: "TYIL (formerly iLEAD) Magazine Year 2018",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl: "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_TYIL-MAGAZINE-2018.pdf",
    imageUrl: "/images/_MG_0047.jpg",
  },
  {
    id: 6,
    title: "TYIL Annual Report 2024",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl:
      "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_TYIL_ANNUAL_REPORT_2024.pdf",
    imageUrl: "/images/_MG_0047.jpg",
  },
  {
    id: 7,
    title: "YALS Impact Report 2025",
    description: "A practical guide for tomorrow’s leaders.",
    pdfUrl:
      "/pdfs/946081E5-20A5-4224-8FCF-23E5DAAA435A_YOUNG_ASPIRING LEADERSHIP_SCHOLARS_2025.pdf.pdf",
    imageUrl: "/images/_MG_0047.jpg",
  },
] as const;

export type publication_content = (typeof publications)[number];
