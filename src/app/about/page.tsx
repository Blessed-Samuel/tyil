import React from "react";
import Hero from "@/components/Hero";
import { aboutHeroContent } from "@/constants/hero";
import Story from "@/components/about/Story";
import Outcomes from "@/components/about/Outcomes";
import Team from "@/components/about/Team";
import BoardOfDirectors from "@/components/about/BoardOfDirectors";
import Leadquest from "@/components/homepage/Leadquest";

const About = () => {
  return (
    <div className="font-primaryFont">
      <Hero
        title={aboutHeroContent.title as string}
        description={aboutHeroContent.description as string}
      />
      <Story />
      <Outcomes />
      <Team />
      <BoardOfDirectors />
      <Leadquest />
    </div>
  );
};

export default About;
