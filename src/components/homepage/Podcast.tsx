"use client";

import React from "react";
import Container from "../layout/Container";
import { Heading } from "../layout/Heading";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaApple, FaSpotify } from "react-icons/fa";

const Podcast = () => {
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

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
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

  return (
    <section className="py-16 sm:py-20 bg-[url('/podcast_bg.svg')] bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Left side - text */}
          <div className="flex-1">
            <div className="flex flex-col justify-start items-start my-8">
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl text-white sm:text-5xl md:text-6xl font-bold">
                  Podcast that Ignites. Tune In.{" "}
                  <span className="italic font-secondaryFont">
                    Learn. Grow.
                  </span>
                </Heading>
              </motion.div>

              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-sm text-white/70 text-start mt-4 max-w-xl leading-relaxed">
                  Learn from seasoned leadership professionals and scholars on
                  topics related to youth leadership, followership, and change
                  making.
                </p>
              </motion.div>

              {/* Podcast Platform Icons */}
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                {/* Apple */}
                <a
                  href="https://podcasts.apple.com/us/podcast/the-future-of-leadership/id1761205163"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen on Apple Podcasts"
                  className="gradient-border flex items-center gap-3 px-8 py-3 rounded-full bg-neutral-800 w-full sm:w-auto hover:scale-105 transition-transform duration-300"
                >
                  <FaApple className="w-6 h-6 text-white relative z-10" />
                  <span className="text-white text-sm font-medium relative z-10">
                    Listen on Apple Podcasts
                  </span>
                </a>

                {/* Spotify */}
                <a
                  href="https://creators.spotify.com/pod/profile/tyil/episodes/The-Future-of-Leadership-podcast---Trailer-e2n9d4n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Listen on Spotify"
                  className="spotify-border flex items-center gap-3 py-3 px-8 rounded-full bg-neutral-800 hover:scale-105 transition-transform duration-300"
                >
                  <FaSpotify className="w-6 h-6 text-[#1DB954] relative z-10" />
                  <span className="text-white text-sm font-medium relative z-10">
                    Listen on Spotify
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right side - image */}
          <motion.div
            custom={0}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 flex justify-center md:justify-start"
          >
            <Image
              src="https://media.licdn.com/dms/image/v2/D4E22AQFTsypBBAKprg/feedshare-shrink_800/feedshare-shrink_800/0/1724520792986?e=1761782400&v=beta&t=f2Waeo6nFUPbVz4cGfMaAQ_KMqRI1Y-G1R6biNK1ZPE"
              alt="feature Image"
              width={400}
              height={400}
              className="max-w-full h-auto shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Podcast;
