"use client";

import React from "react";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";
import Container from "../layout/Container";
import { Variants, motion } from "framer-motion";
import { boardMemberList, BoardMemberInfo } from "@/constants/team";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

const BoardOfDirectors = () => {
  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-16 sm:py-12 border border-gray-200">
      <Container>
        <div>
          <div className="items-start">
            <div>
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Badge title="Our Visionaries" />
              </motion.div>
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-4"
              >
                <Heading className="text-3xl text-primaryRed font-medium sm:text-4xl md:text-5xl leading-tighter">
                  Our Boards Of{" "}
                  <span className=" text-primaryBlack/60">Directors</span>
                </Heading>
              </motion.div>
            </div>
          </div>

          {boardMemberList.length > 0 && (
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center">
              {boardMemberList.map((member: BoardMemberInfo, index: number) => (
                <motion.div
                  key={member.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group overflow-hidden rounded-full transition-all duration-300 transform hover:-translate-y-2 text-center max-w-sm w-full"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-full mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-[80%] sm:w-full max-w-[250px] mx-auto h-auto group-hover:scale-105 transition-transform duration-300"
                      priority={true}
                    />
                  </div>

                  {/* Content - Centered */}
                  <div className="px-4 pb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm uppercase tracking-wide mb-4 text-center">
                      {member.role}
                    </p>

                    {/* LinkedIn Icon - Centered at Bottom */}
                    <div className="flex justify-center">
                      <a
                        href={member.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primaryRed hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default BoardOfDirectors;
