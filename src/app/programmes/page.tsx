import React from "react";
import Hero from "@/components/Hero";
import { programmesHeroContent } from "@/constants/hero";

const Programmes = () => {
  return (
    <div>
      <Hero
        title={programmesHeroContent.title as string}
        description={programmesHeroContent.description as string}
      />
    </div>
  );
};

export default Programmes;
