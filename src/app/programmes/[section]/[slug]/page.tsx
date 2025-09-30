import { programmes } from "@/constants/program";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import BackButton from "@/components/ui/BackButton";

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
          <div className="pb-20">
            <BackButton />
          </div>

          <h1 className="text-4xl font-bold">{programme!.title}</h1>
          <p className="mt-4 text-gray-600 text-sm">{programme!.description}</p>

          <div className="relative w-full h-80 mt-6 rounded-2xl overflow-hidden">
            <Image
              src={programme!.imageUrl}
              alt={programme!.title}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
