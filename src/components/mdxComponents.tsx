import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";

interface MDXComponentProps {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}

interface ImageProps extends ComponentProps<typeof Image> {
  alt: string;
}

export const mdxComponents = {
  /* ---------- Images ---------- */
  Image: (props: ImageProps) => (
    <div className="relative w-full h-80 mb-8 mt-8 overflow-hidden">
      <Image
        {...props}
        className="object-cover"
        alt={props.alt || "MDX image"}
        quality={100}
        draggable={false}
      />
    </div>
  ),

  /* ---------- Headings ---------- */
  h1: (props: MDXComponentProps) => (
    <h1
      className="text-4xl font-bold mt-8 mb-4 text-gray-900 leading-tight"
      {...props}
    />
  ),
  h2: (props: MDXComponentProps) => (
    <h2
      className="text-3xl font-bold mt-8 mb-4 text-gray-800 leading-snug"
      {...props}
    />
  ),
  h3: (props: MDXComponentProps) => (
    <h3
      className="text-2xl font-semibold mt-6 mb-3 text-gray-700 leading-snug"
      {...props}
    />
  ),
  h4: (props: MDXComponentProps) => (
    <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-700" {...props} />
  ),
  h5: (props: MDXComponentProps) => (
    <h5 className="text-lg font-medium mt-4 mb-2 text-gray-700" {...props} />
  ),
  h6: (props: MDXComponentProps) => (
    <h6
      className="text-base font-medium mt-3 mb-1 text-gray-700 uppercase tracking-wide"
      {...props}
    />
  ),

  /* ---------- Text ---------- */
  p: (props: MDXComponentProps) => (
    <p className="text-gray-700 leading-8 mb-5" {...props} />
  ),
  strong: (props: MDXComponentProps) => (
    <strong className="font-semibold text-gray-900" {...props} />
  ),
  em: (props: MDXComponentProps) => (
    <em className="italic text-gray-700" {...props} />
  ),
  del: (props: MDXComponentProps) => (
    <del className="line-through text-gray-500" {...props} />
  ),
  mark: (props: MDXComponentProps) => (
    <mark className="bg-yellow-200 text-gray-900 px-1 rounded-sm" {...props} />
  ),

  /* ---------- Lists ---------- */
  ul: (props: MDXComponentProps) => (
    <ul
      className="list-disc list-inside mb-6 space-y-2 text-gray-700"
      {...props}
    />
  ),
  ol: (props: MDXComponentProps) => (
    <ol
      className="list-decimal list-inside mb-6 space-y-2 text-gray-700"
      {...props}
    />
  ),
  li: (props: MDXComponentProps) => <li className="ml-2" {...props} />,

  /* ---------- Quotes & Code ---------- */
  blockquote: (props: MDXComponentProps) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 py-3 my-6 italic text-gray-600 bg-blue-50 rounded-md"
      {...props}
    />
  ),
  code: (props: MDXComponentProps) => (
    <code
      className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-gray-800"
      {...props}
    />
  ),
  pre: (props: MDXComponentProps) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono"
      {...props}
    />
  ),

  /* ---------- Links ---------- */
  a: (props: MDXComponentProps) => (
    <a
      className="text-blue-600 hover:underline font-medium"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  /* ---------- Tables ---------- */
  table: (props: MDXComponentProps) => (
    <div className="overflow-x-auto my-6 rounded-lg shadow-sm">
      <table
        className="min-w-full border-collapse border border-gray-300 text-sm text-left"
        {...props}
      />
    </div>
  ),
  thead: (props: MDXComponentProps) => (
    <thead className="bg-gray-100 text-gray-800" {...props} />
  ),
  tbody: (props: MDXComponentProps) => <tbody {...props} />,
  tr: (props: MDXComponentProps) => (
    <tr className="even:bg-gray-50 hover:bg-gray-100" {...props} />
  ),
  th: (props: MDXComponentProps) => (
    <th
      className="border border-gray-300 px-4 py-2 bg-gray-100 font-bold"
      {...props}
    />
  ),
  td: (props: MDXComponentProps) => (
    <td className="border border-gray-300 px-4 py-2" {...props} />
  ),

  /* ---------- Media ---------- */
  video: (props: MDXComponentProps) => (
    <div className="my-8 rounded-xl overflow-hidden shadow-md">
      <video controls className="w-full h-auto rounded-lg" {...props} />
    </div>
  ),
  audio: (props: MDXComponentProps) => (
    <div className="my-6">
      <audio controls className="w-full" {...props} />
    </div>
  ),

  /* ---------- Miscellaneous ---------- */
  hr: () => <hr className="my-8 border-gray-300" />,
  br: () => <br />,
  small: (props: MDXComponentProps) => (
    <small className="text-sm text-gray-500" {...props} />
  ),
  sub: (props: MDXComponentProps) => (
    <sub className="text-xs text-gray-500" {...props} />
  ),
  sup: (props: MDXComponentProps) => (
    <sup className="text-xs text-gray-500" {...props} />
  ),

  /* ---------- Forms ---------- */
  input: (props: MDXComponentProps) => (
    <input
      className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  ),
  textarea: (props: MDXComponentProps) => (
    <textarea
      className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  ),
  button: (props: MDXComponentProps) => (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
      {...props}
    />
  ),
  label: (props: MDXComponentProps) => (
    <label className="block text-gray-700 font-medium mb-1" {...props} />
  ),
};
