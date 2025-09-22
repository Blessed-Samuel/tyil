"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { program_content } from "@/constants/program";
import Button from "../ui/Button";
import { FaArrowRightLong } from "react-icons/fa6";

type ProgrammeCardProps = program_content;

const ProgrammeCard = ({
  title,
  description,
  imageUrl,
  section,
  slug,
}: ProgrammeCardProps) => {
  return (
    <Link
      href={`/programmes/${section}/${slug}`}
      className="rounded-2xl border border-gray-200 bg-white flex flex-col justify-between h-full transition-transform hover:scale-[1.02] hover:shadow-lg duration-200 overflow-hidden"
    >
      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="px-4 py-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-sm text-primaryBlack/60">{description}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-6">
          <Button
            primaryText="Find Out More"
            hoverText="Find Out More"
            icon={FaArrowRightLong}
            iconPosition="right"
            className="gap-2 w-full underline"
            aria-label="card details button"
            variant="black"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProgrammeCard;
