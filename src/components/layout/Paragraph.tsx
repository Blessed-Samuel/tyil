import { ReactNode } from "react";

export function Paragraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm md:text-base leading-relaxed text-primaryBlack/60 ${className}`}>
      {children}
    </p>
  );
}
