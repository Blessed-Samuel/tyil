import { programmes } from "@/constants/program";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import BackButton from "@/components/ui/BackButton";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import { mdxComponents } from "@/components/mdxComponents";

interface ProgrammePageProps {
  params: Promise<{
    section: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return programmes.map(p => ({
    section: p.section,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProgrammePageProps) {
  const { section, slug } = await params;

  const programme = programmes.find(
    p => p.section === section && p.slug === slug
  );

  if (!programme) {
    return {
      title: "Programme not found - TYIL",
      description: "This programme does not exist or is no longer available.",
    };
  }

  return {
    title: `${programme.title} | TYIL Programmes`,
    description: programme.description,
    openGraph: {
      title: programme.title,
      description: programme.description,
      images: [{ url: programme.imageUrl, alt: programme.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: programme.title,
      description: programme.description,
      images: [programme.imageUrl],
    },
  };
}

export default async function ProgrammePage({ params }: ProgrammePageProps) {
  const { section, slug } = await params;

  const programme = programmes.find(
    p => p.section === section && p.slug === slug
  );

  if (!programme) {
    notFound();
  }

  // Read the corresponding MDX file
  const filePath = path.join(
    process.cwd(),
    "src",
    "content",
    "programmes",
    `${slug}.mdx`
  );

  let mdxContent = null;

  try {
    const file = fs.readFileSync(filePath, "utf8");
    mdxContent = file;
  } catch {
    console.warn(`⚠️ No MDX file found for ${slug}`);
  }

  return (
    <section className="font-primaryFont">
      {/* Banner */}
      <Image
        src="/dynamic_banner.svg"
        alt="dynamic page banner"
        width={100}
        height={100}
        className="w-auto h-auto z-10"
        priority
      />

      <Container>
        <div className="max-w-3xl mx-auto py-20">
          {/* Back Button */}
          <div className="pb-10">
            <BackButton label="Back" />
          </div>

          {/* MDX Content */}
          {mdxContent ? (
            <article className="max-w-none mt-10 leading-relaxed space-y-6">
              <MDXRemote source={mdxContent} components={mdxComponents} />
            </article>
          ) : (
            <div className="mt-16 text-center bg-gray-50 border border-gray-200 rounded-2xl py-16 px-6">
              <div className="flex justify-center mb-6">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#e63946"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m0 3.75h.008v.008H12v-.008zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-semibold text-primaryBlack mb-2">
                Blog Content Coming Soon
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We&apos;re currently preparing inspiring insights and updates
                for this programme. Please check back later — something amazing
                is on the way!
              </p>

              <div className="mt-6 flex justify-center">
                <BackButton label="Back to Programmes" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
