"use client";

import { useState } from "react";

type ButtonProps = {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  primaryText: string;
  variant?: "red" | "black";
  hoverText?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  icon: Icon,
  primaryText,
  variant = "red",
  hoverText,
  iconPosition = "left",
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    red: "bg-primaryRed hover:bg-primaryRed/90 dark:bg-primaryRed",
    black: "bg-primaryBlack hover:bg-primaryBlack/90 dark:bg-primaryBlack",
  };

  return (
    <button
      type="button"
      aria-label={
        props["aria-label"] ??
        (isHovered ? hoverText ?? primaryText : primaryText)
      }
      aria-disabled={props.disabled}
      className={`
        ${variantStyles[variant]}
        inline-flex justify-center items-center px-6 py-3 h-12 rounded-full
        cursor-pointer text-white font-medium text-sm
        transition-all duration-300 ease-out hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20
        relative overflow-hidden
        ${iconPosition === "right" ? "flex-row-reverse gap-2" : "gap-2"}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Static Icon */}
      {Icon && <Icon size={20} className="flex-shrink-0 relative z-10" />}

      {/* Rolling Text Container */}
      <div className="relative overflow-hidden h-12" aria-live="polite">
        <div
          className={`
            transition-transform duration-500 ease-out
            ${isHovered ? "-translate-y-12" : "translate-y-0"}
          `}
        >
          {/* Primary Text */}
          <div
            className="h-12 flex items-center justify-center whitespace-nowrap"
            aria-hidden={!!hoverText && isHovered}
          >
            {primaryText}
          </div>

          {/* Hover Text */}
          <div
            className="h-12 flex items-center justify-center whitespace-nowrap"
            aria-hidden={!isHovered}
          >
            {hoverText}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Button;
