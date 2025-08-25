/* =========================================================
This file contains the team and board members profile information for the application.
=========================== */

// this section contains the team profile information for the application.
export const teamMemberList = [
  {
    name: "Israel Oyedare",
    role: "Ph.D. - Founder & Executive Director",
    image: "https://avatars.githubusercontent.com/u/12345678?v=4",
    profileLink: "https://www.linkedin.com/in/israel-oyedare/",
  },
  {
    name: "Sarah Adewusi",
    role: "Chief Financial Officer",
    image: "https://avatars.githubusercontent.com/u/23456789?v=4",
    profileLink: "https://www.linkedin.com/in/sarahadewusi/",
  },
  {
    name: "Emmanuel Arowesan",
    role: "Communications Lead",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/emmanuel-arowesan/",
  },
  {
    name: "Chuks Austin",
    role: "Program Lead (LeadQuest Conference)",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/chuksaustine/",
  },
  {
    name: "Kehinde Baruwa",
    role: "Financial Officer",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/baruwa-kehinde-3b66931b0/",
  },
  {
    name: "Goodness Emeka",
    role: "Program Lead (Climate Change Awareness)",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/emeka-goodness-b90388226/",
  },
  {
    name: "Ruqoyah Alata",
    role: "Communications Officer",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/ruqoyah-alata-86374b240/",
  },
  {
    name: "Jesutofunmi Osin",
    role: "Communications Officer",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/jesutofunmi-osin-96a830203/",
  },
  {
    name: "Esther Ogodo",
    role: "Program Assistant (YALS)",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/esther-ogodo201/",
  },
  {
    name: "Titilope Ajala",
    role: "Program Lead (LeadSmart Projects)",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/titilope-deborah-ajala/",
  },
  {
    name: "Jenipher Poller",
    role: "Coordinator, LeadSmart in Tanzania",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/jenipher-peter-mollel-71652721a/",
  },
  {
    name: "Sophie Manneh",
    role: "Co-Coordinator LeadSmart in The Gambia",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/sophie-manneh-49a4a7247/",
  },
  {
    name: "Essah Sanneh",
    role: "Co-Coordinator LeadSmart in The Gambia",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://www.linkedin.com/in/honorable-essa-sanneh-438812192/",
  },
] as const;

export type TeamProfileInfo = (typeof teamMemberList)[number];

// This section contains the board member information for the application.
export const boardMemberList = [
  {
    name: "Mr. Adewale Fafore",
    role: "Board Chairman",
    image: "https://avatars.githubusercontent.com/u/45678901?v=4",
    profileLink: "https://linkedin.com/in/oyedareisrael",
  },
  {
    name: "Oyedare Israel",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/45678901?v=4",
    profileLink: "https://linkedin.com/in/oyedareisrael",
  },
  {
    name: "Barr. Adenike Lawal",
    role: "Secretary",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
  {
    name: "Taiwo Ojo",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
  {
    name: "Adewusi Sarah",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
  {
    name: "Omowunmi Oyedare",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
  {
    name: "Kenny Folarin",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
] as const;

export type BoardMemberInfo = (typeof boardMemberList)[number];
