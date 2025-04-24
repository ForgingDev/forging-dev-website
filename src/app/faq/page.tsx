import FAQ from "@/app/faq/components/faq";
import {
  faqSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Forging Dev | Web & App Development Studio",
  description:
    "Find answers to frequently asked questions about our web development, e-commerce, and application development services at Forging Dev.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Forging Dev",
    description:
      "Get answers to common questions about our web development, e-commerce, and application services.",
    url: "https://www.forging-dev.com/faq",
    siteName: "Forging Dev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forging Dev - Software Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  ...generateSchemaMetadata([
    organizationSchema,
    navigationSchema,
    websiteSchema,
    faqSchema,
  ]),
};

const FAQPage = () => {
  return <FAQ />;
};

export default FAQPage;
