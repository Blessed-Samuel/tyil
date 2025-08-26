import Hero from "@/components/Hero";
import React from "react";
import { aboutHeroContent } from "@/constants/hero";

const About = () => {
  return (
    <div>
      <Hero
        title={aboutHeroContent.title as string}
        description={aboutHeroContent.description as string}
      />
    </div>
  );
};

export default About;
