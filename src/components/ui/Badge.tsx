import Image from "next/image";
import React from "react";

interface BadgeProps {
  title?: string;
}

const Badge: React.FC<BadgeProps> = ({title}) => {
  return (
    <section>
      <div className="inline-flex justify-center items-center py-3 px-4 -gap-2 text-sm font-medium text-primaryBlack border border-gray-300 rounded-full">
        <Image src="/star_2.svg" alt="star_image" width={30} height={30} />
        {title}
      </div>
    </section>
  );
};

export default Badge;
