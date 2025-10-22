import { ReactNode } from "react";

export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`prose prose-sm max-w-none
      prose-a:text-blue-600 hover:prose-a:text-blue-800
      ${className}`}
    >
      {children}
    </div>
  );
}
