"use client";

import { ImpactStat  } from "@/constants/programDetails";

interface ImpactSectionProps {
  stats: ImpactStat[];
  headers: {
    title: string;
    description: string;
  }
}

export default function ImpactSection({ stats, headers }: ImpactSectionProps) {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto text-start">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {headers.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            {headers.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {stats.map(impact => (
            <div
              key={impact.id}
              className="group relative bg-white border border-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative z-10 p-4 text-start">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primaryRed mb-6">
                  {impact.icon}
                </div>
                <h3
                  className={`text-2xl font-extrabold text-${impact.color}-600 mb-3`}
                >
                  {impact.stat}
                </h3>
                <p className="text-primaryBlack/60 text-sm leading-relaxed">
                  {impact.text}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-${impact.color}-500 to-${impact.color}-600`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
