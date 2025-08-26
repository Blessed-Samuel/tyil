import React from "react";
import Hero from "@/components/Hero";
import {publicationsHeroContent} from "@/constants/hero";

const Publications = () => {
  return (
    <div>
      <Hero
        title={publicationsHeroContent.title as string}
        description={publicationsHeroContent.description as string}
      />
    </div>
  );
};

export default Publications;
