import { TESTIMONIAL_TYPES } from "@/constants/testimonials";
import { LuStar } from "react-icons/lu";

type CardProps = {
  testimonial: TESTIMONIAL_TYPES;
};

const TestimonialCard = ({ testimonial }: CardProps) => {
  const firstName = testimonial.name.split(" ")[0];
  const initialName = firstName.charAt(0).toUpperCase();

  return (
    <div className="min-w-[280px] sm:min-w-[320px] max-w-[350px] flex-shrink-0 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 p-4 sm:p-6 flex flex-col justify-between h-[320px] sm:h-[360px]">
      <div>
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primaryRed text-white text-lg font-bold">
            {initialName}
          </div>
          <div className="flex flex-col items-center">
            <h4 className="font-bold text-sm sm:text-base">
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-sm text-primaryBlack/60 dark:text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-center italic dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-5">
          {testimonial.description}
        </p>
      </div>

      {/* 5 stars row */}
      <div className="flex justify-center space-x-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <LuStar
            key={i}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primaryRed fill-current"
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
