/* =========================================================
This file contains the team and board members profile information for the application.
=========================== */

// this section contains the team profile information for the application.
export const teamMemberList = [
  {
    id: 1,
    name: "Israel Oyedare",
    role: "Founder & Executive Director",
    image: "/team/israel.svg",
    profileUrl: "https://www.linkedin.com/in/israel-oyedare/",
  },
  {
    id: 2,
    name: "Sarah Adewusi",
    role: "Chief Financial Officer",
    image: "/team/sarah.svg",
    profileUrl: "https://www.linkedin.com/in/sarahadewusi/",
  },
  {
    id: 4,
    name: "Chucks Austin",
    role: "Program Lead (LeadQuest Conference)",
    image: "/team/chucks.svg",
    profileUrl: "https://www.linkedin.com/in/chuksaustine/",
  },
  {
    id: 5,
    name: "Kehinde Baruwa",
    role: "Financial Officer",
    image: "/team/kehinde.svg",
    profileUrl: "https://www.linkedin.com/in/baruwa-kehinde-3b66931b0/",
  },
  {
    id: 6,
    name: "Goodness Emeka",
    role: "Program Lead (Climate Change Awareness)",
    image: "/team/goodness.svg",
    profileUrl: "https://www.linkedin.com/in/emeka-goodness-b90388226/",
  },
  {
    id: 7,
    name: "Ruqoyah Alata",
    role: "Program Assistant (TYIL Fellowship)",
    image: "/team/alata.svg",
    profileUrl: "https://www.linkedin.com/in/ruqoyah-alata-86374b240/",
  },
  {
    id: 8,
    name: "Jesutofunmi Osin",
    role: "Communications Officer",
    image: "/team/osin.svg",
    profileUrl: "https://www.linkedin.com/in/jesutofunmi-osin-96a830203/",
  },
  {
    id: 9,
    name: "Esther Ogodo",
    role: "Program Assistant (YALS)",
    image: "/team/esther.svg",
    profileUrl: "https://www.linkedin.com/in/esther-ogodo201/",
  },
  {
    id: 10,
    name: "Titilope Ajala",
    role: "Program Lead (LeadSmart Projects)",
    image: "/team/ajala.svg",
    profileUrl: "https://www.linkedin.com/in/titilope-deborah-ajala/",
  },
  {
    id: 11,
    name: "Precious Obukowho",
    role: "Communications Officer",
    image: "/team/precious_pic.jpg",
    profileUrl: "https://www.linkedin.com/in/jenipher-peter-mollel-71652721a/",
  },
  // {
  //   id: 12,
  //   name: "Sophie Manneh",
  //   role: "Co-Coordinator LeadSmart in The Gambia",
  //   image: "/team/sophie.svg",
  //   profileUrl: "https://www.linkedin.com/in/sophie-manneh-49a4a7247/",
  // },
  // {
  //   id: 13,
  //   name: "Essah Sanneh",
  //   role: "Co-Coordinator LeadSmart in The Gambia",
  //   image: "/team/essah.svg",
  //   profileUrl: "https://www.linkedin.com/in/honorable-essa-sanneh-438812192/",
  // },
] as const;

export type TeamProfileInfo = (typeof teamMemberList)[number];

// This section contains the board member information for the application.
export const boardMemberList = [
  {
    id: 1,
    name: "Mr. Adewale Fafore",
    role: "Board Chairman",
    image: "/bod/adewale.svg",
    // profileUrl: "https://linkedin.com/in/oyedareisrael",
  },
  {
    id: 2,
    name: "Oyedare Israel",
    role: "Board Member",
    image: "/team/israel.svg",
    // profileUrl: "https://linkedin.com/in/oyedareisrael",
  },
  {
    id: 3,
    name: "Barr. Adenike Lawal",
    role: "Board Member",
    image: "/bod/adenike.svg",
    // profileUrl: "https://linkedin.com/in/bobwilliams",
  },
  {
    id: 4,
    name: "Taiwo Ojo",
    role: "Board Member",
    image: "/bod/taiwo.svg",
    // profileUrl: "https://linkedin.com/in/bobwilliams",
  },
  {
    id: 5,
    name: "Adewusi Sarah",
    role: "Board Member",
    image: "/team/sarah.svg",
    // profileUrl: "https://www.linkedin.com/in/sarahadewusi/",
  },
  {
    id: 6,
    name: "Omowunmi Oyedare",
    role: "Board Member",
    image: "/bod/omowunmi.svg",
    // profileUrl: "https://linkedin.com/in/bobwilliams",
  },
  {
    id: 7,
    name: "Kenny Folarin",
    role: "Board Member",
    image: "/bod/kenny.svg",
    // profileUrl: "https://linkedin.com/in/bobwilliams",
  },
] as const;

export type BoardMemberInfo = (typeof boardMemberList)[number];
