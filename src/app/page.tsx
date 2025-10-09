import Hero from "@/components/Hero";
import About from "@/components/homepage/About";
import Faq from "@/components/homepage/Faq";
import ImpactMetrics from "@/components/homepage/ImpactMetrics";
// import Leadquest from "@/components/homepage/TyilAcademy";
import Podcast from "@/components/homepage/Podcast";
import Programme from "@/components/homepage/Programme";
import Publication from "@/components/homepage/Publication";
import { heroContent } from "@/constants/hero";
import Partners from "@/components/homepage/Partners";

export default function Home() {
  return (
    <div className="pb-20 font-primaryFont">
      <Hero
        title={heroContent.title as string}
        description={heroContent.description as string}
      />
      <ImpactMetrics />
      <About />
      <Programme />
      <Publication />
      {/* <Leadquest /> */}
      <Podcast />
      <Partners/>
      <Faq />
    </div>
  );
}
