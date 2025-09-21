import React from "react";
import { PiStarFourFill } from "react-icons/pi";

interface BadgeProps {
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({title}) => {
  return (
    <section>
      <div className="inline-flex justify-center items-center py-3 px-4 gap-2 text-xs font-medium text-primaryBlack border border-gray-300 rounded-full">
        <PiStarFourFill />
        {title}
      </div>
    </section>
  );
};

export default Badge;
