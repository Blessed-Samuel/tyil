export const OUTCOMES_CONTENT = [
  {
    id: 1,
    label_number: "1",
    title: "How Important is transformational leadership?",
    description:
      "To ensure participants understand why transformational leadership is important and is urgently needed in Africa.",
  },
  {
    id: 2,
    label_number: "2",
    title: "What are the foundational princples of leadership?",
    description:
      "To ensure that participants will understand the foundational principles of transformational leadership.",
  },
  {
    id: 3,
    label_number: "3",
    title: "Where is transformational leadership needed?",
    description:
      "To ensure participants develop an understanding of where transformational leadership is needed in their own communities.",
  },
  {
    id: 4,
    label_number: "4",
    title: "How to develop capacity for transformational leadership?",
    description:
      "Specific to the Young African Leadership Scholar program, to ensure participants develop their ability to conduct scholarship on transformational leadership.",
  },
] as const;

export type Outcomes_content = (typeof OUTCOMES_CONTENT)[number];
