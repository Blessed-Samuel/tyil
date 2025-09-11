export const FAQ_CONTENT = [
  {
    id: 1,
    title: "What is TYIL?",
    description:
      "TYIL is an acronym for Teens and Youth in Leadership. TYIL is an African-based non-profit organization focused on the leadership education of secondary and post secondary youth.",
  },
  {
    id: 2,
    title: "How can I benefit from TYIL's services?",
    description: "Follow up across our social media platforms @TYIL",
  },
  {
    id: 3,
    title: "What types of projects does TYIL organize?",
    description:
      "We hold leadership and civic education projects for secondary and post-secondary school youth.",
  },
  // {
  //   id: 4,
  //   title: "How can I get involved with TYIL?",
  //   description:
  //     "Getting started with TYIL is easy! You can reach out to us through our contact form, call our customer service line, or visit our showroom. We offer free consultations where we assess your needs, provide design recommendations, and give you a detailed quote for your project.",
  // },
] as const;

export type FAQ = (typeof FAQ_CONTENT)[number];
