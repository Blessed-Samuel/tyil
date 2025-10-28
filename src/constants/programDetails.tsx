import { leadsmartCurriculum } from "./programContents/leadsmartCurricullumData";
import { tyilCurriculum } from "./programContents/tyilfellowshipCurricullumData";
// import { climateCurriculum } from "./programContents/climateCurricullumData";
import {
  leadsmartPhases,
  tyilPhases,
  // climateChangePhases,
  yalsPhases,
} from "./programContents/allCardDetails";
import {
  leadquestCarousel,
  leadsmartCarousel,
  tyilCarousel,
  climateCarousel,
  yalsCarousel,
} from "./programContents/allCarouselDetails";
import {
  leadsmartImpact,
  tyilImpact,
  // climateImpact,
} from "./programContents/allImpactDetails";
import { CircleCheckBig, Target } from "lucide-react";
import { yalsCurriculum } from "./programContents/yalsCurricullumData";

export interface CurriculumCard {
  id: number;
  label: string;
  title?: string;
  text?: string;
}

export interface CurriculumType {
  heading: string;
  subText?: string;
  icon?: React.ReactNode;
  color?: string;
  cardInfo: CurriculumCard[];
}

export interface Phase {
  icon: React.ElementType;
  title?: string;
  description?: string;
}

export interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

export interface ImpactStat {
  id: number;
  icon: React.ReactNode;
  stat?: string;
  text?: string;
  color?: string;
  header?: string;
  Description?: string;
}

export interface FeatureCardProps {
  heading: string;
  icon: React.ReactNode;
  subText?: string;
  phases: Phase[];
  optHeader?: string;
  optDescription?: string;
}

export interface ProgramContent {
  description: React.ReactNode;
  curriculum?: CurriculumType;
  featureCard?: FeatureCardProps;
  carousel?: CarouselItem[];
  impact?: ImpactStat[];
  headers?: {
    title: string;
    description: string;
  };
  showFellows?: boolean;
}

// ---- DATA ---- //

export const programContents: Record<string, ProgramContent> = {
  leadsmart: {
    description: (
      <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-6">
        We equip teenagers in secondary schools with the mindset, mentorship,
        and skills to lead with courage, innovation, and social responsibility.
        Through interactive sessions, storytelling, and community projects,
        students discover their identity, find purpose, and create real impact.
        <span className="font-bold"> The end goal:</span> Raising
        transformational leaders in Africa.
      </p>
    ),
    curriculum: leadsmartCurriculum,
    featureCard: {
      optHeader: "How It Works",
      optDescription:
        "To equip young people with the knowledge, mindset, and mentorship they need to become courageous, innovative, and socially responsible leaders",
      icon: <Target className="text-white w-10 h-10" strokeWidth={1} />,
      heading: "Our Mission",
      subText:
        "To equip young people with the knowledge, mindset, and mentorship they need to become courageous, innovative, and socially responsible leaders",
      phases: leadsmartPhases,
    },
    carousel: leadsmartCarousel,
    impact: leadsmartImpact,
    headers: {
      title: "Our Impact",
      description:
        "Empowering the next generation of leaders across Africa through mentorship, innovation, and purpose-driven initiatives that create measurable impact.",
    },
  },

  fellowship: {
    description: (
      <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-6">
        The TYIL Fellowship program is designed to equip post-secondary youth
        with core leadership skills and competencies needed to make significant
        change and impact within their local communities. The key aspect of the
        program is the collaboration and relationship that is formed between the
        program organizers and participants of the fellowship, such that the
        same is extended beyond the program.
      </p>
    ),
    curriculum: tyilCurriculum,
    featureCard: {
      icon: <CircleCheckBig strokeWidth={1} className="text-white w-8 h-8" />,
      heading: "Who is Eligible",
      subText:
        "We are seeking youth who are passionate about change making and are working on areas related to the TYIL’s  mission:",
      optHeader: "Purpose-Driven Leaders",
      optDescription:
        "Whether you’re a student, a young professional, or a changemaker at heart — the TYIL Fellowship is open to individuals ready to embrace growth, character, and purpose-driven leadership.",
      phases: tyilPhases,
    },
    carousel: tyilCarousel,
    impact: tyilImpact,
    headers: {
      title: "TYIL Fellowship Training Model",
      description:
        "The TYIL Fellowship Training Model is built on a transformative framework that nurtures purpose-driven leaders through spiritual grounding, practical mentorship, and real-life leadership experiences designed to inspire lasting impact.",
    },
    showFellows: true
  },

  climate: {
    description: (
      <div className="space-y-12">
        <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8">
          Africa stands at a critical juncture in its journey toward sustainable
          development, with the growing climate crisis posing significant
          challenges to livelihoods, ecosystems, and economic resilience across
          the continent. In alignment with global climate action goals and the
          African Union’s Agenda 2063 which envisions an environmentally
          sustainable and climate-resilient Africa, efforts to raise awareness
          and build climate literacy at the grassroots level have become
          increasingly urgent.
        </p>

        <p className="text-gray-500 leading-relaxed text-lg mb-8">
          It is within this broader context that the Climate Awareness Project
          was carried out by Teens and Youth in Leadership (TYIL). Designed as a
          dynamic extracurricular platform, the project seeks to equip young
          students with foundational knowledge on climate change,
          sustainability, and clean energy solutions, while fostering a culture
          of environmental responsibility and innovation.
        </p>

        <p className="text-gray-500 leading-relaxed text-lg mb-8">
          The initiative responds to a recognized gap in early-stage climate
          education across African secondary schools, where environmental topics
          are often underrepresented in core curricula. By integrating practical
          learning, student engagement, and community-based activities, the
          Climate Awareness Club aligns with Sustainable Development Goals
          (SDGs), particularly SDG 13 (Climate Action), SDG 4 (Quality
          Education), and SDG 7 (Affordable and Clean Energy).
        </p>

        <p className="text-gray-500 leading-relaxed text-lg mb-8">
          Over a six-week period, students are engaged in participatory learning
          experience, where theoretical discussions with hands-on activities and
          exposure to real world renewable energy innovations are communicated.
          The program culminated in a final project that introduced students to
          small-scale wind energy systems. This experiential component
          reinforced the practical possibilities of local clean energy solutions
          and inspired participants to consider climate-smart innovations within
          their communities.
        </p>
      </div>
    ),
    // curriculum: climateCurriculum,
    // featureCard: {
    //   icon: <Target className="text-white w-5 h-5" />,
    //   heading: "Our Process",
    //   subText:
    //     "Our comprehensive four-phase journey transforms students into confident leaders.",
    //   phases: climateChangePhases,
    // },
    carousel: climateCarousel,
    // impact: climateImpact,
  },

  yals: {
    description: (
      <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8">
        We are searching for motivated individuals who are eager to explore the
        foundations of research writing. This program is designed for beginners,
        with or without prior research experience. Individuals with curiosity,
        commitment, and a willingness to learn.
      </p>
    ),
    curriculum: yalsCurriculum,
    featureCard: {
      icon: <Target className="text-white w-5 h-5" />,
      heading: "Who Is Eligible",
      subText:
        "Individuals seeking to be a part of YALS shall meet the following eligibility criteria",
      phases: yalsPhases,
    },
    carousel: yalsCarousel,
  },

  leadquest: {
    description: (
      <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-8">
        Every year, TYIL commits to organizing the LeadQuest conference, a
        leadership-based conference targeted at empowering secondary school
        students in Africa with public speaking and change making skills. Since
        2022, the conference has attracted over 150 students from 10 schools,
        and provided them with leadership development opportunities to create
        changes within their communities.
      </p>
    ),
    carousel: leadquestCarousel,
  },
};
