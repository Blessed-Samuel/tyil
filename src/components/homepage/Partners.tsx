"use client";

import React from "react";
import Container from "../layout/Container";
import { Heading } from "../layout/Heading";
import {
  FaApple,
  FaSpotify,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaYoutube,
} from "react-icons/fa";

const Partners = () => {
  const partners = [
    {
      name: "Apple",
      icon: <FaApple className="w-10 h-10 text-gray-700" />,
      description: "Innovative technology and premium experiences.",
    },
    {
      name: "Spotify",
      icon: <FaSpotify className="w-10 h-10 text-[#1DB954]" />,
      description: "Leading platform for music and podcasts.",
    },
    {
      name: "Google",
      icon: <FaGoogle className="w-10 h-10 text-[#4285F4]" />,
      description: "Empowering users with data and connectivity.",
    },
    {
      name: "Microsoft",
      icon: <FaMicrosoft className="w-10 h-10 text-[#00A4EF]" />,
      description: "Creators of tools that empower the future.",
    },
    {
      name: "Amazon",
      icon: <FaAmazon className="w-10 h-10 text-[#FF9900]" />,
      description: "Global leader in commerce and innovation.",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="w-10 h-10 text-[#FF0000]" />,
      description: "The world’s largest video sharing platform.",
    },
  ];

  return (
    <section className="pb-10 pt-20 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading className="text-3xl sm:text-4xl text-primaryBlack font-bold mb-2">
            Our Partners
          </Heading>
          <p className="text-primaryBlack/60 max-w-md mx-auto">
            Collaborating with industry leaders to deliver exceptional results.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border-[1.5px] border-gray-100 rounded-xl py-10 px-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                {partner.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-primaryBlack/60 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
