export const testimonial_data = [
  {
    id: 1,
    description:
      '"This was really an awesome and Inspiring program. The one thing I picked out of a lot of thing I learnt is Attitude. I learnt how to develop a positive attitude and it really helped me in my daily activities and my business. This training transformed me!"',
    name: "Blessing O. Mokwenye",
    role: "Beneficiary",
  },
  {
    id: 2,
    description:
      '"I have been greatly Inspired. Some of the lessons I learnt during the training are as follows: A. The music you listen to affets you either positively or negatively. B. Dont be shy to Impact. Be ready for service. C. Character is everything and learn to build up positive attitude."',
    name: "Ibuoye Precious",
    role: "Beneficiary",
  },
  {
    id: 3,
    description:
      '"All of the sessions were very Impactful and thought provoking. I have learnt to refine my skills and to be a leader with the right data and Information. Above all, I felt like my future is heading in the right direction. Thank you TYIL!"',
    name: "Abagun Latifat Oriyomi",
    role: "Beneficiary",
  },
  {
    id: 4,
    description:
      '"I have learnt that leadership is an essential process if progress is to be made in any sector or area of life. And for leadership to be effective, It must begin with you."',
    name: "Ben-Eze Chidiebere D.",
    role: "Beneficiary",
  },
  {
    id: 5,
    description:
      '"The training has exposed me to the core aspect of leadership research, understanding the principles and their application. I am now curious about how to practice leadership at the grassroot level to effect change."',
    name: "Zakariya'u Dauda",
    role: "Usmanu Danfodiyo University",
  },
  {
    id: 6,
    description:
      '"YALS taught me to think  outside the box. It has also made me develop a new posture outside academics. Now, I can say assuredly that I love to do research. I also get to meet people virtually and work with them. I can do something In my career path. And I have now decided to pursue my academic career to the peak."',
    name: "Oyinkansola Justinah Abisoye",
    role: "Obafemi Awolowo University",
  },
  {
    id: 7,
    description:
      '"The training make made me realize what It takes to become a good a leader, How to carry others along and not to neglect followers. It meade me see the Important component of leadership. Also, I was exposed to research misconducts and how to use my research skills to tackle leadership related problems."',
    name: "Tolulope Joseph Ogunniyi",
    role: "Kwara State University",
  },
  {
    id: 8,
    description:
      '"The Intentionality In helping us understand all that we need to know, ans always willing to help in whatever possible ways was One of my greatest highlights at the YALS program. I now understand that research is not a childs play, And it takes intentionality and precise labour. During the program, I was inspired to take my time so that a great work can emerge."',
    name: "Mary Adebayo",
    role: "University of Lagos",
  },
  // add mmore testimonials here if any.
] as const;

export type TESTIMONIAL_TYPES = (typeof testimonial_data)[number];
