import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";

const inter_tight = Inter_Tight({
  // variable: "--font-inter_tight",
  subsets: ["latin"],
});

// Structured Data Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "TYIL Leadership Development",
  alternateName: "TYIL",
  description:
    "Premier leadership development and executive training organization offering comprehensive programs for emerging and established leaders",
  url: "https://tyil-leadership.com",
  logo: "https://tyil-leadership.com/logo.png",
  image: "https://tyil-leadership.com/og-image.jpg",
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
    "Executive Leadership Training",
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
  url: "https://tyil-leadership.com",
  mainEntity: {
    "@type": "Course",
    name: "Leadership Development Program",
    description:
      "Comprehensive leadership training for executives and emerging leaders",
    provider: {
      "@type": "Organization",
      name: "TYIL Leadership",
    },
    courseMode: "blended",
    educationalLevel: "Professional",
  },
};

export const metadata: Metadata = {
  title: {
    default:
      "TYIL Leadership Development | Executive Training & Coaching Programs",
    template: "%s | TYIL Leadership",
  },
  description:
    "Transform your leadership potential with TYIL's comprehensive leadership development programs. Expert executive coaching, organizational leadership training, and professional development courses for emerging and established leaders in Nigeria and beyond.",
  keywords: [
    "leadership development",
    "leadership training",
    "executive leadership",
    "leadership program",
    "leadership skills",
    "organizational leadership",
    "leadership coaching",
    "management training",
    "leadership certification",
    "professional development",
    "team leadership",
    "corporate training",
    "leadership workshop",
    "executive development",
    "leadership course",
    "thought leadership",
    "leadership excellence",
    "leadership success",
    "TYIL leadership",
    "leadership development program",
    "executive coaching certification",
    "management development programs",
    "leadership skills development",
    "corporate leadership training",
    "leadership communication",
    "digital leadership",
    "remote team leadership",
    "leadership impact",
    "transform leadership",
    "build leadership skills",
    "Nigeria leadership training",
    "Lagos executive coaching",
    "West Africa leadership development",
    "African leadership programs",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "light dark",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tyil-leadership.com",
    siteName: "TYIL Leadership Development",
    title:
      "TYIL Leadership Development | Executive Training & Coaching Programs",
    description:
      "Transform your leadership potential with TYIL's comprehensive leadership development programs. Expert executive coaching and organizational leadership training.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TYIL Leadership Development Programs",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "TYIL Leadership Development",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tyil_leadership",
    creator: "@tyil_leadership",
    title: "TYIL Leadership Development | Executive Training & Coaching",
    description:
      "Transform your leadership potential with TYIL's comprehensive leadership development programs and executive coaching.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-verification-code",
      facebook: "your-facebook-domain-verification",
      pinterest: "your-pinterest-verification-code",
    },
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
    "p:domain_verify": "your-pinterest-verification-code",
    "fb:app_id": "your-facebook-app-id",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpageSchema),
          }}
        />
      </head>
      <body className={`${inter_tight.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content">{children}</main>

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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      </body>
    </html>
  );
}
