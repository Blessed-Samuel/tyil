"use client";

import React from "react";
import Hero from "@/components/Hero";
import { programmesHeroContent } from "@/constants/hero";
import { motion, Variants } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { Heading } from "@/components/layout/Heading";
import Container from "@/components/layout/Container";
import ProgrammeCard from "./components/ProgramCard";
import { programmes } from "@/constants/program";
import Leadquest from "@/components/homepage/TyilAcademy";
import Testimonials from "./components/Testimonials";
import TyilFellows from "./components/TyilFellows";
import { IoSchool } from "react-icons/io5";

const Programmes = () => {
  // Animation settings (slide up)
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier "easeOut"
      },
    }),
  };

  const normalizedSection = (section: string) =>
    section.toLowerCase().replace(/\s+/g, "-");
  
  const secondarySchool = programmes.filter(
    p => normalizedSection(p.section) === normalizedSection("Secondary-School")
  );

  const postSecondary = programmes.filter(
    p => normalizedSection(p.section) === normalizedSection("Collegiate-level")
  );

  return (
    <section className="font-primaryFont">
      {" "}
      <Hero
        title={programmesHeroContent.title as string}
        description={programmesHeroContent.description as string}
      />
      <section className="py-10 sm:py-20">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Our Programmes" />
            </motion.div>
            <div className="flex flex-col justify-center items-center my-4 px-4">
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl sm:text-7xl text-center font-bold">
                  Our Impactful{" "}
                  <span className="italic font-secondaryFont">Programmes</span>
                </Heading>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-base text-center text-primaryBlack/60 mt-4 max-w-2xl">
                  Our programs are more than just courses - they are immersive
                  experiences that provide practical skills, mentorship, and a
                  global network.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Secondary School */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <IoSchool className="text-primaryRed" /> Secondary School{" "}
              <span className="font-secondaryFont italic">Youth</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {secondarySchool.map((prog, i) => (
                <motion.div
                  key={prog.id}
                  custom={i}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProgrammeCard {...prog} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary School */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-primaryFont font-bold mb-6 flex items-center gap-3">
              <IoSchool className="text-primaryRed" />
              Collegiate level{" "}
              <span className="font-secondaryFont italic">Youth</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {postSecondary.map((prog, i) => (
                <motion.div
                  key={prog.id}
                  custom={i}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProgrammeCard {...prog} />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
        <Testimonials />
        <TyilFellows />
        <Leadquest />
      </section>
    </section>
  );
};

export default Programmes;
