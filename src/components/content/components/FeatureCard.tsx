import React from "react";

interface Phase {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface MissionAndProcessProps {
  heading?: string;
  icon: React.ReactNode;
  subText?: string;
  phases: Phase[];
}

export default function MissionAndProcess({
  heading,
  subText,
  icon,
  phases,
}: MissionAndProcessProps) {
  return (
    <div className="w-full mt-20">
      {/* Mission Section */}
      <section className="relative overflow-hidden bg-primaryRed py-5 md:py-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-48 translate-y-48"></div>

        <div className="relative max-w-5xl mx-auto text-center md:p-8 p-4">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm">
              {icon}
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {heading || "Our Mission"}
          </h2>

          {subText && (
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
              {subText}
            </p>
          )}

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-16 h-0.5 bg-white/40"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-16 h-0.5 bg-white/40"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            To equip young people with the knowledge, mindset, and mentorship
            they need to become courageous, innovative, and socially responsible
            leaders
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {phases && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-transparent hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primaryRed flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
