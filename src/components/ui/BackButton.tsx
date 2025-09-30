"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/programmes");
        }
      }}
      className="inline-flex items-center cursor-pointer gap-4 px-4 py-2 rounded-full bg-primaryBlack text-white text-sm font-medium hover:bg-primaryBlack/90 transition"
    >
      <FaArrowLeft size={16} />
      Back
    </button>
  );
}
