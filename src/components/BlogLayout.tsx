"use client";

import { formatDate } from "@/lib/formatDate";
import { Prose } from "@/components/layout/Prose";
import Container from "@/components/layout/Container";
import { Heading } from "@/components/layout/Heading";
import { Paragraph } from "@/components/layout/Paragraph";
import { useRouter } from "next/navigation";

interface BlogLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date: string;
    image: string;
  };
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({ children, meta }: BlogLayoutProps) {
  const router = useRouter();

  return (
    <Container>
      <article className="max-w-3xl mx-auto py-10 font-primaryFont">
        <header className="flex flex-col">
          <button
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-10 flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
          </button>

          <Heading className="py-4 text-4xl md:text-7xl font-semibold">
            {meta.title}
          </Heading>

          <time dateTime={meta.date} className="text-xs">
            <Paragraph className="md:text-xs text-xs flex items-center text-primaryBlack/10 gap-2">
              5 Min Read{" "}
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>{" "}
              {formatDate(meta.date)}
            </Paragraph>
          </time>
        </header>

        <Prose className="mt-8">{children}</Prose>
      </article>
    </Container>
  );
}
