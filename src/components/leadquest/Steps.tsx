import React from "react";
import Container from "../layout/Container";
import { Variants, motion } from "framer-motion";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";

const Steps = () => {
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

  const steps = [
    {
      number: "1",
      title: "Fill in and submit the form",
      desc: "Our modular approach guides you through every step of your development with expert-led content and actionable insights.",
    },
    {
      number: "2",
      title: "Expert Coaching",
      desc: "Connect with experienced leadership coaches to get one-on-one guidance and support.",
    },
    {
      number: "3",
      title: "I",
      desc: "Access resources, join sessions, and grow with expert-led guidance.",
    },
  ];

  return (
    <section className="py-10 sm:py-20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center">
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Badge title="Leadquest 2025" />
          </motion.div>
          <div className="flex flex-col justify-center items-center my-8 px-4">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading className="text-3xl sm:text-6xl text-center font-bold">
                3 Easy Steps to{" "}
                <span className="italic font-secondaryFont">
                  getting started
                </span>
              </Heading>
            </motion.div>
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm sm:text-base text-center text-primaryBlack/60 mt-4 max-w-2xl">
                Our modular approach guides you through every step of your
                development with expert-led content and actionable insights.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Divider line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`mb-12 flex flex-col sm:flex-row items-center sm:items-start ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold z-10">
                {step.number}
              </div>

              {/* Content */}
              <div
                className={`mt-4 sm:mt-0 sm:max-w-sm px-6 ${
                  i % 2 === 0
                    ? "sm:ml-6 text-left"
                    : "sm:mr-6 text-left sm:text-right"
                }`}
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-primaryBlack/70 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Steps;
