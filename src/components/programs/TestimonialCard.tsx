import { TESTIMONIAL_TYPES } from "@/constants/testimonials";
import { LuStar } from "react-icons/lu";

type CardProps = {
  testimonial: TESTIMONIAL_TYPES;
};

const TestimonialCard = ({ testimonial }: CardProps) => {
  const firstName = testimonial.name.split(" ")[0];
  const initialName = firstName.charAt(0).toUpperCase();

  return (
    <div className="min-w-[320px] max-w-[350px] flex-shrink-0 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 p-6">
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primaryRed text-white text-2xl font-bold">
          {initialName}
        </div>

        <div className="flex flex-col items-center">
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-primaryBlack/60 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-center italic dark:text-gray-300 text-sm leading-relaxed mb-4">
        {testimonial.description}
      </p>

      {/* 5 stars row */}
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <LuStar key={i} className="w-4 h-4 text-primaryRed fill-current" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
