import React from "react";
import Hero from "@/components/Hero";
import { aboutHeroContent } from "@/constants/hero";
import Story from "./components/Story";
import Outcomes from "./components/Outcomes";
import Team from "./components/Team";
import BoardOfDirectors from "./components/BoardOfDirectors";
import TyilAcademy from "@/components/homepage/TyilAcademy";

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
      <TyilAcademy />
    </div>
  );
};

export default About;
