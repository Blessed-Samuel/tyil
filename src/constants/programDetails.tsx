import { leadsmartCurriculum } from "./programContents/leadsmartCurricullumData";
import { tyilCurriculum } from "./programContents/tyilfellowshipCurricullumData";
import { climateCurriculum } from "./programContents/climateCurricullumData";
import {
  leadsmartPhases,
  tyilPhases,
  climateChangePhases,
  yalsPhases,
} from "./programContents/allCardDetails";
import {
  leadsmartCarousel,
  tyilCarousel,
  climateCarousel,
} from "./programContents/allCarouselDetails";
import {
  leadsmartImpact,
  tyilImpact,
  climateImpact,
} from "./programContents/allImpactDetails";
import { Target } from "lucide-react";

export interface CurriculumCard {
  id: number;
  label: string;
  title: string;
  text: string;
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
  title: string;
  description: string;
}

export interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

export interface ImpactStat {
  id: number;
  icon: React.ReactNode;
  stat: string;
  text: string;
  color?: string;
}

export interface FeatureCardProps {
  heading: string;
  icon: React.ReactNode;
  subText?: string;
  phases: Phase[];
}

export interface ProgramContent {
  description: React.ReactNode;
  curriculum?: CurriculumType;
  featureCard?: FeatureCardProps;
  carousel?: CarouselItem[];
  impact?: ImpactStat[];
}

// ---- DATA ---- //

export const programContents: Record<string, ProgramContent> = {
  leadsmart: {
    description: (
      <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
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
      icon: <Target className="text-white w-10 h-10" strokeWidth={1} />,
      heading: "Our Mission",
      subText:
        "To equip young people with the knowledge, mindset, and mentorship they need to become courageous, innovative, and socially responsible leaders",
      phases: leadsmartPhases,
    },
    carousel: leadsmartCarousel,
    impact: leadsmartImpact,
  },

  fellowship: {
    description: (
      <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
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
      icon: <Target className="text-white w-5 h-5" />,
      heading: "Who is Eligible",
      subText:
        "We are seeking youth who are passionate about change making and are working on areas related to the TYIL’s  mission",
      phases: tyilPhases,
    },
    carousel: tyilCarousel,
    impact: tyilImpact,
  },

  academy: {
    description: (
      <p className="text-gray-500 leading-relaxed text-lg mb-8">
        Nimble Academy empowers youth through digital skill training and
        mentorship in design and technology.
      </p>
    ),
    curriculum: climateCurriculum,
    featureCard: {
      icon: <Target className="text-white w-5 h-5" />,
      heading: "Our Process",
      subText:
        "Our comprehensive four-phase journey transforms students into confident leaders.",
      phases: climateChangePhases,
    },
    carousel: climateCarousel,
    impact: climateImpact,
  },
  yals: {
    description: (
      <p className="text-gray-500 leading-relaxed text-lg mb-8">
        We are searching for motivated individuals who are eager to explore the
        foundations of research writing. This program is designed for beginners,
        with or without prior research experience. Individuals with curiosity,
        commitment, and a willingness to learn.
      </p>
    ),
    curriculum: climateCurriculum,
    featureCard: {
      icon: <Target className="text-white w-5 h-5" />,
      heading: "Our Process",
      subText:
        "Our comprehensive four-phase journey transforms students into confident leaders.",
      phases: yalsPhases,
    },
    carousel: climateCarousel,
    impact: climateImpact,
  },
};
