import React from "react";
import Container from "@/components/layout/Container";
import { Variants, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { Heading } from "@/components/layout/Heading";

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

  // Steps data
  const steps: { number: string; title: string; desc: string }[] = [
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
      title: "Interactive Quests",
      desc: "Complete challenges and simulations to apply your skills in real-world scenarios.",
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
            <Badge title="Tyil Academy" />
          </motion.div>
          <div className="flex flex-col justify-center items-center my-4 px-4">
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
              <p className="text-sm text-center text-primaryBlack/60 mt-4 max-w-xl">
                Our modular approach guides you through every step of your
                development with expert-led content and actionable insights.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="relative sm:mt-20 mt-10 max-w-4xl mx-auto">
          {/* Divider line (hidden on mobile, visible on md+) */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-white via-gray-300 to-white"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`mb-12 flex flex-col sm:flex-row items-start ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Number Circle */}
              <div className="flex items-center justify-start text-6xl text-gray-100 font-bold z-10">
                {step.number}
              </div>

              {/* Content */}
              <div
                className={`-mt-10 sm:mt-4 ml-4 sm:ml-0 sm:max-w-sm z-10 ${
                  i % 2 === 0 ? "sm:-ml-2 text-left" : "sm:-ml-2 text-left"
                }`}
              >
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm text-primaryBlack/60 mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Steps;
