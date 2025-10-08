// this section contains the fellows profile information for the application.
export const tyilFellowsLists = [
  {
    id: 1,
    name: "Israel Oyedare",
    role: "Founder TYIL",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/israel-oyedare/",
  },
  {
    id: 2,
    name: "Eric Kaufman",
    role: "Leadership Scholar and Professor at Virginia Tech",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/erickkaufman/",
  },
  {
    id: 4,
    name: "Dami Alegbeleye",
    role: "Assistant Professor of Organizational Leadership at the University of Southern Maine",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/damialegbeleye/",
  },
  {
    id: 5,
    name: "Tolulope Olasewere",
    role: "Legal Practitioner",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/tolulope-olasewere-83248517b/",
  },
  {
    id: 6,
    name: "Lauretta Onwuegbuzie",
    role: "Legal Practitioner",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/lauretta-onwuegbuzie-aicmc/",
  },
  {
    id: 7,
    name: "Sipiwe Zulu",
    role: "Global Development Policy Analyst",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl: "https://www.linkedin.com/in/sipiwe-zulu-221b33a9/",
  },
  {
    id: 8,
    name: "Joy Ekwoaba",
    role: "Senior Lecturer at the University of Lagos.",
    image: "/fellows/tolulope_pics.jpeg",
    profileUrl:
      "https://www.linkedin.com/in/ekwoaba-joy-onyinyechi-ph-d-1899152a/",
  },
] as const;

export type tyilFellows = (typeof tyilFellowsLists)[number];
