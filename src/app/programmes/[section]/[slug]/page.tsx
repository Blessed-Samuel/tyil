import { programmes } from "@/constants/program";
import { notFound } from "next/navigation";
import { BlogLayout } from "@/components/BlogLayout";
import ImpactSection from "@/components/content/components/Impact";
import FeatureCard from "@/components/content/components/FeatureCard";
import Curricullum from "@/components/content/components/Curricullum";
import Carousel from "@/components/content/components/Carousel";
import { programContents } from "@/constants/programDetails";

interface ProgrammePageProps {
  params: Promise<{
    section: string;
    slug: string;
  }>;
}

// Map slugs from programmes to programContents keys
const slugMap: Record<string, keyof typeof programContents> = {
  "leadsmart-project": "leadsmart",
  "tyil-fellowship": "fellowship",
  "climate-awareness-project": "climate",
  "yals-program": "yals",
  "leadquest-conference": "leadquest",
};

export default async function ProgrammePage({ params }: ProgrammePageProps) {
  const { section, slug } = await params;

  // Find programme based on section and slug
  const programme = programmes.find(
    p =>
      p.section.toLowerCase() === section.toLowerCase() &&
      p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!programme) notFound();

  // Map slug to content key
  const contentKey = slugMap[slug.toLowerCase()];
  if (!contentKey) notFound();

  const content = programContents[contentKey];
  if (!content) notFound();

  return (
    <div className="bg-gradient-to-r from-blue-50/50 to-white min-h-screen">
      <BlogLayout
        meta={{
          title: programme.title,
          date: new Date().toISOString(),
          image: programme.imageUrl,
        }}
      >
        <div className="border-b mb-8 border-gray-200"></div>

        <section className="py-2 text-sm">{content.description}</section>

        {content.carousel && <Carousel items={content.carousel} />}
        {content.featureCard && <FeatureCard {...content.featureCard} />}
        {content.curriculum && <Curricullum {...content.curriculum} />}
        {content.impact && content.headers && (
          <ImpactSection stats={content.impact} headers={content.headers} />
        )}
      </BlogLayout>
    </div>
  );
}
