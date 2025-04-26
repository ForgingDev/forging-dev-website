import {
  gdprSchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import GDPRCompliance from "./components/gdpr-compliance";

export const metadata: Metadata = {
  title: "GDPR Compliance | Forging Dev | Web & App Development Studio",
  description:
    "Learn about Forging Dev's GDPR compliance measures and how we protect your personal data in accordance with EU regulations. Understand your rights and how to exercise them.",
  alternates: {
    canonical: "/gdpr",
  },
  openGraph: {
    title: "GDPR Compliance | Forging Dev",
    description:
      "Learn about Forging Dev's GDPR compliance measures and how we protect your personal data.",
    url: "https://www.forging-dev.com/gdpr",
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
    gdprSchema,
  ]),
};

const GDPRPage = () => {
  return <GDPRCompliance />;
};

export default GDPRPage;
