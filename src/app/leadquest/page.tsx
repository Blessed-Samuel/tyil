"use client";

import React from "react";
import Hero from "@/components/Hero";
import { leadquestHeroContent } from "@/constants/hero";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "@/components/ui/Button";
import Steps from "@/components/leadquest/Steps";
import Details from "@/components/leadquest/Details";
import RegistrationForm from "@/components/leadquest/Form";

const Leadquest = () => {
  const handleClick = () => {
    window.open(
      "https://flutterwave.com/donate/lbl9iwpnhpyw",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="font-primaryFont">
      <Hero
        title={leadquestHeroContent.title as string}
        description={leadquestHeroContent.description as string}
        button={
          <Button
            primaryText="Register Now"
            hoverText="Register Now"
            icon={ArrowRightIcon}
            iconPosition="right"
            onClick={handleClick}
            className="gap-2 w-full sm:w-64 bg-primaryRed hover:bg-primaryRed/90"
            aria-label="Registration button"
            variant="red"
          />
        }
      />
      <Steps />
      <Details />
      <RegistrationForm/>
    </section>
  );
};

export default Leadquest;
