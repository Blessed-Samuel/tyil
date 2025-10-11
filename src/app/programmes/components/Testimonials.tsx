import React from "react";
import Container from "@/components/layout/Container";
import { Variants, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { Heading } from "@/components/layout/Heading";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
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

  return (
    <section className="py-5 sm:py-10">
      <Container>
        {" "}
        {/* Header Section - Left Side */}
        <div className="text-start">
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Badge title="Success Stories" />
          </motion.div>
          <div className="mt-4">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading className="text-3xl text-primaryRed sm:text-4xl md:text-5xl leading-snug">
                What Our{" "}
                <span className="italic text-primaryBlack font-secondaryFont">
                  Students Say
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
              <p className="text-sm text-gray-600 text-start max-w-xl">
                Hear from the leaders we&apos;ve helped shape. Our testimonials
                are firsthand accounts of the impact TYIL has had on personal
                growth and professional success.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
      <TestimonialSlider />
    </section>
  );
};

export default Testimonials;
