export const tyilFellowsLists = [
  {
    id: 1,
    name: "Eric Kaufman",
    role: "Leadership Scholar and Professor at Virginia Tech",
    image: "/fellows/eric.jpg",
    profileUrl: "https://www.linkedin.com/in/erickkaufman/",
  },
  {
    id: 2,
    name: "Dami Alegbeleye",
    role: "Assistant Professor of Organizational Leadership at the University of Southern Maine",
    image: "/fellows/dami.jpg",
    profileUrl: "https://www.linkedin.com/in/damialegbeleye/",
  },
  {
    id: 3,
    name: "Tolulope Olasewere",
    role: "Legal Practitioner",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/tolulope-olasewere-83248517b/",
  },
  {
    id: 4,
    name: "Lauretta Onwuegbuzie",
    role: "Legal Practitioner and Data Protection Analyst",
    image: "/fellows/lauretta.jpg",
    profileUrl: "https://www.linkedin.com/in/lauretta-onwuegbuzie-aicmc/",
  },
  {
    id: 5,
    name: "Sipiwe Zulu",
    role: "Global Development Policy Expert.",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/sipiwe-zulu-221b33a9/",
  },
  {
    id: 6,
    name: "Joy Ekwoaba",
    role: "Senior Lecturer at the University of Lagos.",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl:
      "https://www.linkedin.com/in/ekwoaba-joy-onyinyechi-ph-d-1899152a/",
  },
] as const;

export type tyilFellows = (typeof tyilFellowsLists)[number];
