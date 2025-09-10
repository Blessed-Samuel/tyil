import React from "react";
import Hero from "./Hero";
import ImpactMetric from "./homepage/ImpactMetrics";
import { heroContent } from "@/constants/hero";
import About from "./homepage/About";
import Programme from "./homepage/Programme";
import Publication from "./homepage/Publication";
import Leadquest from "./homepage/Leadquest";
import Podcast from "./homepage/Podcast";
import Faq from "./homepage/Faq";

const Homepage = () => {
  return (
    <>
      <Hero
        title={heroContent.title as string}
        description={heroContent.description as string}
      />
      <ImpactMetric />
      <About />
      <Programme />
      <Publication />
      <Leadquest />
      <Podcast />
      <Faq />
    </>
  );
};

export default Homepage;
