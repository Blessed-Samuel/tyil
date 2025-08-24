/* =========================================================
This file contains the team and board members profile information for the application.
===========================*/

// this section contains the team profile information for the application.
export const teamProfileInfo = [
  {
    name: "Israel Oyedare",
    role: "Ph.D. - Founder & Executive Director",
    image: "https://avatars.githubusercontent.com/u/12345678?v=4",
    profileLink: "https://linkedin.com/in/oyedareisrael",
  },
  {
    name: "Jane Doe",
    role: "Chief Technology Officer",
    image: "https://avatars.githubusercontent.com/u/23456789?v=4",
    profileLink: "https://linkedin.com/in/janedoe",
  },
  {
    name: "John Smith",
    role: "Chief Marketing Officer",
    image: "https://avatars.githubusercontent.com/u/34567890?v=4",
    profileLink: "https://linkedin.com/in/johnsmith",
  },
] as const;

export type TeamProfileInfo = (typeof teamProfileInfo)[number];

// This section contains the board member information for the application.
export const boardMemberInfo = [
  {
    name: "Oyedare Israel",
    role: "Ph.D.",
    image: "https://avatars.githubusercontent.com/u/45678901?v=4",
    profileLink: "https://linkedin.com/in/oyedareisrael",
  },
  {
    name: "Mr. Bob Williams",
    role: "Board Member",
    image: "https://avatars.githubusercontent.com/u/56789012?v=4",
    profileLink: "https://linkedin.com/in/bobwilliams",
  },
] as const;

export type BoardMemberInfo = (typeof boardMemberInfo)[number];
