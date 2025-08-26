import React from "react";
import { twMerge } from "tailwind-merge";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
  as?: HeadingTag;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  as: Tag = "h1",
  ...props
}) => {
  return (
    <Tag
      className={twMerge(
        "text-base font-poppins tracking-tighter mx-auto font-extrabold",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
