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
  // Extract file extension
  const fileExtension = pdfUrl.split(".").pop()?.toLowerCase();
  const isPDF = fileExtension === "pdf";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white flex flex-col justify-between h-full transition-transform hover:scale-[1.02] hover:shadow-lg duration-200 overflow-hidden">
      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="mt-2 text-sm text-primaryBlack/60">{description}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-6">
          {isPDF && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primaryRed text-white text-sm font-medium hover:bg-primaryRed/90 transition"
            >
              <FiFileText size={16} />
              View PDF
            </a>
          )}
          <a
            href={pdfUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
          >
            <FaFileDownload size={16} />
            {isPDF ? "Download PDF" : "Download File"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
