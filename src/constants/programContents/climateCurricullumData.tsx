import { LandPlot } from "lucide-react";

export const climateCurriculum = {
  description: (
    <>
      <p className="text-gray-500 leading-relaxed text-lg mb-8">
        We equip teenagers in secondary schools with the mindset, mentorship,
        and skills to lead with courage, innovation, and social responsibility.
        Through interactive sessions, storytelling, and community projects,
        students discover their identity, find purpose, and create real impact.
        <span className="font-bold"> The end goal:</span> Raising
        transformational leaders in Africa.
      </p>
    </>
  ),
  heading: "Our Curriculum",
  subText:
    "We’ve designed our curriculum to spark courage, innovation, and responsible leadership through mentorship and real-world learning.",
  icon: <LandPlot strokeWidth={1.25} className="w-10 h-10 text-white" />,
  color: "primaryRed",
  cardInfo: [
    {
      id: 1,
      label: "01",
      title: "Self-Discovery & Personal Development",
      text: "Students explore their strengths, overcome limiting beliefs, and learn self-leadership.",
    },
    {
      id: 2,
      label: "02",
      title: "Leadership Training",
      text: "They redefine leadership — inspiring positive change and making ethical decisions.",
    },
    {
      id: 3,
      label: "03",
      title: "Success & Goal Setting",
      text: "Participants learn to set SMART goals that create meaningful success.",
    },
    {
      id: 4,
      label: "04",
      title: "Impact Project",
      text: "Students work in groups to identify real problems and develop practical solutions.",
    },
  ],
};
