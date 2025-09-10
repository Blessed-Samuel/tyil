export const FAQ_CONTENT = [
{
    id: 1,
    title: "What is TYIL?",
    description: "TYIL is a leading provider of modern aluminum windows and glass solutions. We specialize in residential and commercial installations, offering high-quality products that combine functionality with contemporary design. Our team has years of experience in delivering custom glass and aluminum solutions for various architectural needs."
  },
  {
    id: 2,
    title: "How can I benefit from TYIL's services?",
    description: "Our services offer numerous benefits including energy-efficient window solutions, enhanced property aesthetics, increased natural light, improved security features, and professional installation. We provide comprehensive consultations to ensure our solutions meet your specific needs and budget requirements."
  },
  {
    id: 3,
    title: "Where is TYIL located?",
    description: "TYIL is strategically located to serve both residential and commercial clients across the region. We have showrooms where you can view our products and meet with our design consultants. Contact us for specific location details and to schedule a consultation at our nearest facility."
  },
  {
    id: 4,
    title: "How can I get involved with TYIL?",
    description: "Getting started with TYIL is easy! You can reach out to us through our contact form, call our customer service line, or visit our showroom. We offer free consultations where we assess your needs, provide design recommendations, and give you a detailed quote for your project."
  },
  {
    id: 5,
    title: "What types of projects does TYIL handle?",
    description: "We handle a wide range of projects including residential window installations, commercial glass facades, custom glass partitions, glass shower enclosures, glass railings, storefront installations, and specialty architectural glazing. No project is too big or small for our experienced team."
  }
] as const;

export type FAQ = (typeof FAQ_CONTENT)[number];
