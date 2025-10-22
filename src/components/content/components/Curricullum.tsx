"use client";

import { LandPlot } from "lucide-react";

interface CardItem {
  id: number;
  label: string;
  title: string;
  text: string;
}

interface CurricullumProps {
  heading: string;
  subText?: string;
  cardInfo: CardItem[];
  icon?: React.ReactNode;
  color?: string;
}

export default function Curricullum({
  heading,
  subText,
  cardInfo,
  icon = <LandPlot strokeWidth={1.5} className="w-10 h-10 text-white" />,
  color = "primaryRed",
}: CurricullumProps) {
  return (
    <div className="w-full mt-10">
      {/* Curriculum Section */}
      <section
        className={`relative bg-${color} text-white px-3 py-10 md:py-24 md:px-6 overflow-hidden`}
      >
        {/* Soft radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>

        {/* Decorative blur elements */}
        <div className="absolute -top-10 -left-10 w-56 h-56 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-2xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm">
              {icon}
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {heading}
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-white/85 leading-relaxed font-light max-w-3xl mx-auto">
            {subText}
          </p>

          {/* Accent divider */}
          <div className="mt-10 flex justify-center">
            <div className="h-[3px] w-24 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {cardInfo.map(phase => (
                <div key={phase.id} className="relative">
                  <div className="group relative bg-white rounded-xl p-6 transition-all duration-500 h-full border border-gray-200 hover:border-transparent hover:-translate-y-2">
                    {/* Label */}
                    <div className="w-14 h-14 rounded-xl text-white bg-primaryRed flex items-center justify-center mb-6 font-bold transform group-hover:rotate-6 transition-transform duration-500">
                      {phase.label}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {phase.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
