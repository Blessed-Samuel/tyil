"use client";

import React from "react";
import { HiMiniXMark } from "react-icons/hi2";

interface VideoModalProps {
  onClick: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ onClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClick}
          className="absolute -top-28 md:top-0 right-6 md:-right-32 z-50 cursor-pointer border-2 border-white p-2 rounded-full text-white hover:text-red-500 hover:bg-white transition-all duration-300"
        >
          <HiMiniXMark size={20} />
        </button>

        {/* Video */}
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XHwDWghlwWg?si=8-5YgrTI5a1xAFCB&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
