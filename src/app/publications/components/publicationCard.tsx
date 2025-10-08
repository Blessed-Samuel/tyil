"use client";

import React from "react";
import { publication_content } from "@/constants/publications";
import { FiFileText } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image";

type PublicationCardProps = publication_content;

const PublicationCard = ({
  title,
  description,
  pdfUrl,
  imageUrl,
}: PublicationCardProps) => {
  const fileExtension = pdfUrl.split(".").pop()?.toLowerCase();
  const isPDF = fileExtension === "pdf";

  return (
    <div className="group flex flex-col md:flex-row rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1 lg:h-[170px] h-[230px]">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-[45%] h-26 md:h-auto">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="object-cover w-full h-full brightness-95 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-primaryRed text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1.5 shadow-md">
          <FiFileText className="text-white" size={12} />
          {isPDF ? "PDF" : "File"}
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex flex-col justify-between flex-1 p-4 md:p-5">
        <div>
          <h3 className="text-[14px] leading-4 font-semibold text-gray-800 dark:text-gray-100 mb-1">
            {title}
          </h3>
          <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-3">
          {isPDF && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primaryRed text-white text-[11px] font-medium hover:bg-primaryRed/90 transition-colors"
            >
              <FiFileText size={12} />
              View
            </a>
          )}
          <a
            href={pdfUrl}
            download
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-[11px] font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FaFileDownload size={12} />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
