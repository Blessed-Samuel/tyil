import { Users, MapPin, MessageCircle } from "lucide-react";
import { ImpactStat } from "../programDetails";

export const leadsmartImpact: ImpactStat[] = [
  {
    id: 1,
    icon: <Users strokeWidth={1.5} className="w-8 h-8 text-white" />,
    stat: "200+",
    text: "Students trained in leadership within 2 years",
    color: "rose",
  },
  {
    id: 2,
    icon: <MapPin strokeWidth={1.5} className="w-8 h-8 text-white" />,
    stat: "9",
    text: "Schools reached across Nigeria, The Gambia, and Tanzania",
    color: "rose",
  },
  {
    id: 3,
    icon: <MessageCircle strokeWidth={1.5} className="w-8 h-8 text-white" />,
    stat: "100%",
    text: "Qualitative feedback collected from participants",
    color: "rose",
  },
];

export const tyilImpact = leadsmartImpact;
export const climateImpact = leadsmartImpact;
