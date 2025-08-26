import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { Theme } from "@radix-ui/themes";
import BackToTop from "@/components/ui/BackToTop";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

// Moved schemas outside to avoid re-declaring
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "TYIL Leadership Development",
  alternateName: "TYIL",
  description:
    "Premier leadership development and teens training organization offering comprehensive programs for emerging and young leaders",
  url: "https://tyil.org.ng",
  logo: "https://tyil.org.ng/tyil-logo.svg",
  image: "https://tyil.org.ng/og-image.jpg",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-xxx-xxx-xxxx",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/tyil-leadership",
    "https://twitter.com/tyil_leadership",
    "https://instagram.com/tyil_leadership",
  ],
  courseMode: ["online", "onsite", "hybrid"],
  educationalCredentialAwarded: "Leadership Development Certificate",
  hasCredential: "ISO 9001:2015 Certified Training Provider",
  areaServed: ["Nigeria", "West Africa", "Global"],
  serviceType: [
    "Teenagers Leadership Training",
    "Management Development",
    "Leadership Coaching",
    "Organizational Development",
    "Team Building",
  ],
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "TYIL Leadership Development | Executive Training & Coaching Programs",
  description:
    "Transform your leadership potential with TYIL's comprehensive leadership development programs",
  url: "https://tyil.org.ng",
  mainEntity: {
    "@type": "Course",
    name: "Leadership Development Program",
    description:
      "Comprehensive leadership training for teens and emerging leaders",
    provider: {
      "@type": "Organization",
      name: "TYIL Leadership",
    },
    courseMode: "blended",
    educationalLevel: "Professional",
  },
};

// Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
};

// Metadata
export const metadata: Metadata = {
  title: {
    default: "TYIL Leadership Development | Teens Training & Coaching Programs",
    template: "%s | TYIL Leadership",
  },
  description:
    "Transform your leadership potential with TYIL's comprehensive leadership development programs. Expert teens coaching, organizational leadership training, and professional development courses for emerging and young leaders in Nigeria and beyond.",
  keywords: [
    // Core Youth Leadership
    "youth leadership development",
    "teen leadership training",
    "youth empowerment programs",
    "student leadership",
    "young leaders",
    "teen empowerment",
    "youth mentorship",
    "leadership for teens",
    "teenage leadership skills",
    "youth development programs",

    // Age-Specific Programs
    "high school leadership",
    "middle school leadership",
    "college leadership",
    "young adult leadership",
    "student council training",
    "peer leadership",
    "youth ambassador program",
    "teen mentor training",
    "junior leadership academy",
    "emerging young leaders",

    // Skills & Development
    "youth leadership skills",
    "teen communication skills",
    "youth public speaking",
    "student leadership training",
    "youth confidence building",
    "teen team building",
    "youth project management",
    "student entrepreneurship",
    "youth innovation",
    "teen problem solving",

    // Programs & Initiatives
    "youth leadership camp",
    "teen leadership workshop",
    "student leadership retreat",
    "youth leadership summit",
    "teen empowerment conference",
    "youth leadership certification",
    "student leadership program",
    "teen leadership academy",
    "youth development initiative",
    "young leaders network",

    // Modern Focus Areas
    "digital youth leadership",
    "social media leadership for teens",
    "youth environmental leadership",
    "teen social justice leadership",
    "youth community organizing",
    "student activism training",
    "youth advocacy skills",
    "teen civic engagement",
    "youth volunteer leadership",
    "student change makers",

    // Regional & Cultural
    "Nigeria youth leadership",
    "Lagos teen programs",
    "West Africa youth development",
    "African youth empowerment",
    "Nigerian student leaders",
    "Lagos youth mentorship",
    "African teen leadership",
    "Nigeria youth training",
    "West African youth programs",
    "Lagos student development",

    // Outcome-Focused
    "build teen confidence",
    "develop youth leaders",
    "empower young people",
    "transform teen potential",
    "youth leadership impact",
    "teen success programs",
    "youth leadership excellence",
    "student leadership growth",
    "teen empowerment success",
    "youth leadership transformation",

    // TYIL Specific
    "TYIL youth programs",
    "TYIL teen training",
    "TYIL student development",
    "TYIL youth empowerment",
    "TYIL young leaders",
  ],
  authors: [{ name: "TYIL Leadership Team", url: "https://tyil.org.ng/about" }],
  creator: "TYIL Leadership Organization",
  publisher: "TYIL Leadership",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tyil.org.ng"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-NG": "/en-NG",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/tyil-logo.svg", sizes: "any" },
      { url: "/tyil-logo.svg", sizes: "16x16", type: "image/svg" },
      { url: "/tyil-logo.svg", sizes: "32x32", type: "image/svg" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  manifest: "/site.webmanifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tyil.org.ng",
    siteName: "TYIL Leadership Development",
    title: "TYIL Leadership Development | Teens Training & Coaching Programs",
    description:
      "Transform your leadership potential with TYIL's comprehensive leadership development programs. Expert teens coaching and young leadership training.",
    images: [
      {
        url: "/tyil-logo.svg",
        width: 1200,
        height: 630,
        alt: "TYIL Leadership Development Programs",
        type: "image/jpeg",
      },
      {
        url: "/tyil-logo.svg",
        width: 1200,
        height: 1200,
        alt: "TYIL Leadership Development",
        type: "image/svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tyil_community",
    creator: "@tyil_community",
    title: "TYIL Leadership Development | Teens Training & Coaching",
    description:
      "Transform your leadership potential with TYIL's comprehensive leadership development programs and teenage coaching.",
    images: ["/tyil-logo.svg"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Education",
  classification: "Leadership Development",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "TYIL Leadership Platform",
  appleWebApp: {
    capable: true,
    title: "TYIL Leadership",
    statusBarStyle: "default",
  },
  other: {
    "msapplication-TileColor": "#2b5797",
    "msapplication-config": "/browserconfig.xml",
    "google-site-verification": "your-google-verification-code",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={interTight.className}
    >
      <head>
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="webpage-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
      </head>
      <body className="antialiased font-primaryFont" cz-shortcut-listen="true">
        <Theme>
          <Navbar />
          <main id="main-content">{children}</main>
          {/* scroll back to top button */}
          <BackToTop />
          <Footer />
        </Theme>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
