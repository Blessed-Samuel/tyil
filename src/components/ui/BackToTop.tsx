"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer animate-bounce right-6 z-50 p-3 rounded-full bg-primaryRed text-white shadow-lg hover:bg-primaryRed/90 transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
