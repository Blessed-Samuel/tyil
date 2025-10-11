import React from "react";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { Heading } from "@/components/layout/Heading";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GiCheckMark } from "react-icons/gi";

const Details = () => {
  const router = useRouter();

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const handleClick = () => {
    router.push("/publications");
  };

  const perks: { id: number; desc: string }[] = [
    {
      id: 1,
      desc: "Personalized Roadmap",
    },
    {
      id: 2,
      desc: "Expert-Led Courses",
    },
    {
      id: 3,
      desc: "Mentorship & Coaching",
    },
    {
      id: 4,
      desc: "Real-World Quests",
    },
  ];

  return (
    <section className="py-5 sm:py-10 border-t border-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - text */}
          <div className="flex-1">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Tyil Academy" />
            </motion.div>

            <div className="flex flex-col gap-3 justify-start items-start my-8">
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl sm:text-5xl md:text-6xl font-bold">
                  Building Tomorrow&apos;s{" "}
                  <span className="italic font-secondaryFont">
                    <span className="text-primaryRed">Leaders</span>, one young
                    talent at a time.
                  </span>
                </Heading>
              </motion.div>

              <motion.div className="grid gap-4 grid-cols-2 mt-4">
                {perks.map(perk => (
                  <motion.div
                    key={perk.id}
                    custom={perk.id}
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-sm flex items-center gap-1.5 text-primaryBlack/60 max-w-xl"
                  >
                    <GiCheckMark className="text-primaryRed" />
                    {perk.desc}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-sm text-start text-gray-600 mt-4 max-w-xl">
                  Our comprehensive program is built around four key pillars
                  designed to transform your potential into real-world
                  leadership.
                </p>
              </motion.div>

              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6"
              >
                <Button
                  primaryText="Register Now"
                  hoverText="Register Now"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={handleClick}
                  className="gap-2 px-8 py-3 w-full sm:w-auto"
                  aria-label="registration button"
                  variant="red"
                />
              </motion.div>
            </div>
          </div>

          {/* Right side - image */}
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/register.svg"
              alt="register Image"
              width={700}
              height={700}
              className="max-w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
